import { prisma } from "@/lib/prisma";
import { investigationSchema } from "@/lib/validation";
import { InvestigationData } from "../types";


export async function createInvestigation(data: InvestigationData) {
  const validatedData = investigationSchema.parse(data);
  return prisma.diagnosticInvestigation.create({ data: validatedData });
}

export async function getAllInvestigations() {
  return prisma.diagnosticInvestigation.findMany();
}

export async function getInvestigationById(id: string) {
  return prisma.diagnosticInvestigation.findUnique({ where: { id } });
}

export async function updateInvestigation(id: string, data: Partial<InvestigationData>) {
  const validatedData = investigationSchema.partial().parse(data);
  return prisma.diagnosticInvestigation.update({ where: { id }, data: validatedData });
}

export async function deleteInvestigation(id: string) {
  return prisma.diagnosticInvestigation.delete({ where: { id } });
}