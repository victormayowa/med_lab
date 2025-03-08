import { InvestigationData } from "@/lib/types";

// /app/investigations/services/investigationService.ts
export const fetchInvestigations = async () => {
  const res = await fetch("/api/investigations");
  if (!res.ok) throw new Error("Failed to fetch investigations");
  return res.json();
};

export const createInvestigation = async (data: InvestigationData) => {
  const res = await fetch("/api/investigations", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to create investigation");
  return res.json();
};
