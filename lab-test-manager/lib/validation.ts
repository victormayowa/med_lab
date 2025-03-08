import { z } from "zod";

export const investigationSchema = z.object({
  patientName: z.string().min(1, "Patient name is required"),
  investigationType: z.string().min(1, "Investigation type is required"),
  result: z.string(),
  investigationDate: z.string().optional(),
  notes: z.string().optional(),
});