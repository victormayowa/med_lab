"use client"

// /app/investigations/page.tsx
import { useQuery } from "@tanstack/react-query";
import { fetchInvestigations } from "./services/investigationService";
import InvestigationCard from "./components/InvestigationCard";
import { Button } from "@/components/ui/button";
import { InvestigationType } from "@/lib/types";

export default function InvestigationsPage() {
  const {
    data: investigations = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["investigations"],
    queryFn: fetchInvestigations,
  });

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-xl font-bold mb-4 text-green-700">
        Investigation Records
      </h1>
      <Button className="bg-green-600 hover:bg-green-700 text-white">
        Add New Investigation
      </Button>

      {isLoading && <p className="text-green-700">Loading...</p>}
      {isError && (
        <p className="text-red-600">Failed to load investigations.</p>
      )}

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {investigations.length > 0
          ? investigations.map((investigation: InvestigationType) => (
              <InvestigationCard
                key={investigation.id}
                investigation={investigation}
              />
            ))
          : !isLoading && (
              <p className="text-gray-600">No investigations found.</p>
            )}
      </div>
    </div>
  );
}
