"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import InvestigationCard from "../components/InvestigationCard";
import { InvestigationType } from "@/lib/types";

export default function InvestigationDetailPage() {
  const params = useParams(); // Unwrap params using useParams()
  const [investigation, setInvestigation] = useState<InvestigationType | null>(
    null
  );
  console.log(investigation);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (!params?.id) {
      setError("Invalid investigation ID");
      setLoading(false);
      return;
    }

    const fetchInvestigation = async () => {
      try {
        const response = await fetch(`/api/investigations/${params.id}`);
        if (!response.ok) throw new Error("Failed to fetch investigation");
        const data = await response.json();
        setInvestigation(data);
        setLoading(false);
      } catch{
        setError("Could not load investigation");
        setLoading(false);
      }
    };

    fetchInvestigation();
  }, [params?.id]);

  const handleDelete = async (id: string) => {
    try {
      await fetch(`/api/investigations/${id}`, { method: "DELETE" });
      router.push("/investigations");
    } catch {
      alert("Failed to delete investigation");
    }
  };

  const handleUpdate = (id: string) => {
    router.push(`/investigations/${id}/edit`);
  };

  if (loading) return <p className="text-green-700">Loading...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div className="p-6 bg-green-50 min-h-screen">
      <h1 className="text-2xl font-bold text-green-800 mb-4">
        Investigation Details
      </h1>
      {investigation && (
        <InvestigationCard
          investigation={investigation}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
        />
      )}
      <Button
        onClick={() => router.push("/investigations")}
        className="mt-4 bg-green-600 hover:bg-green-700 text-white"
      >
        Back to Investigations
      </Button>
    </div>
  );
}
