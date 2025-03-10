"use client"

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { createInvestigation } from "../services/investigationService";
import InvestigationForm, { InvestigationFormData } from "../components/InvestigationForm";


export default function NewInvestigationPage() {
  const router = useRouter();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createInvestigation,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["investigations"] });
      router.push("/investigations");
    },
  });

  const onSubmit = (data: InvestigationFormData) => {
    if (!data) {console.log("No data to submit"); return;}
    console.log("Submitting data:", data);
    mutation.mutate(data);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-2xl font-bold text-green-700 mb-4">
        New Investigation
      </h1>
      <InvestigationForm
        onSubmit={onSubmit}
        isLoading={mutation.status === "pending"}
        isEdit={false}
      />
    </div>
  );
}
