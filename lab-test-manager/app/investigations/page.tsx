"use client";

// /app/investigations/page.tsx
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getInvestigations,
  deleteInvestigation,
} from "./services/investigationService";
import InvestigationCard from "./components/InvestigationCard";
import { Button } from "@/components/ui/button";
import { InvestigationType } from "@/lib/types";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function InvestigationsPage() {
  const router = useRouter();
  const queryClient = useQueryClient();

  const {
    data: investigations = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["investigations"],
    queryFn: getInvestigations,
  });

  const deleteMutation = useMutation({
    mutationFn: deleteInvestigation,
    onSuccess: () => {
      toast.success("Investigation deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["investigations"] });
    },
    onError: (error: Error) => {
      toast.error("Failed to delete investigation");
      console.error("Delete Error:", error);
    },
  });

  const handleDelete = (id: string) => {
    deleteMutation.mutate(id);
  };

  const handleUpdate = (id: string) => {
    // Navigate to the update form (you can define this route separately)
    router.push(`/investigations/${id}/edit`);
  };

  const handleAddNewInvestigation = () => {
    router.push("/investigations/new");
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-xl font-bold mb-4 text-green-700">
        Investigation Records
      </h1>
      <Button
        className="bg-green-600 hover:bg-green-700 text-white mb-4"
        onClick={handleAddNewInvestigation}
      >
        Add New Investigation
      </Button>

      {isLoading && <p className="text-green-700">Loading...</p>}
      {isError && (
        <p className="text-red-600">Failed to load investigations.</p>
      )}

      <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {investigations.length > 0
          ? investigations.map((investigation: InvestigationType) => (
              <InvestigationCard
                key={investigation.id}
                investigation={investigation}
                onDelete={handleDelete}
                onUpdate={handleUpdate}
              />
            ))
          : !isLoading && (
              <p className="text-gray-600">No investigations found.</p>
            )}
      </div>
    </div>
  );
}
