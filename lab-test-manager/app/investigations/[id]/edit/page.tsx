"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  updateInvestigation,
  getInvestigationById,
} from "../../services/investigationService";
import InvestigationForm, {
  InvestigationFormData,
} from "../../components/InvestigationForm";

export default function EditInvestigationPage() {
  const router = useRouter();
  const params = useParams();
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState<InvestigationFormData | null>(null);

  useEffect(() => {
    async function fetchInvestigation() {
      if (!params?.id) {
        console.error("No investigation ID provided");
        return;
      }
      try {
        const data = await getInvestigationById(params.id as string);
        setFormData({
          patientName: data.patientName,
          investigationType: data.investigationType,
          result: data.result,
          investigationDate: new Date(data.investigationDate)
            .toISOString()
            .slice(0, 10),
          notes: data.notes || "", // Handle optional notes
        });
      } catch (error) {
        console.error("Error fetching investigation:", error);
      }
    }

    fetchInvestigation();
  }, [params?.id]);

  const mutation = useMutation({
    mutationFn: (data: InvestigationFormData) => {
      if (!params?.id) {
        throw new Error("No investigation ID provided");
      }
      return updateInvestigation(params.id as string, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["investigations"] });
      alert("Investigation updated successfully!");
      router.push("/investigations");
    },
    onError: (error) => {
      alert("Error updating investigation: " + error);
    },
  });

  const onSubmit = (data: InvestigationFormData) => {
    mutation.mutate(data);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-2xl font-bold text-blue-700 mb-4">
        Edit Investigation
      </h1>
      {formData ? (
        <InvestigationForm
          onSubmit={onSubmit}
          isLoading={mutation.status === "pending"}
          defaultValues={formData}
          isEdit={true}
        />
      ) : (
        <p>Loading investigation data...</p>
      )}
    </div>
  );
}
