import { prisma } from "@/lib/prisma";
import { InvestigationFormData } from "@/app/investigations/components/InvestigationForm";

export async function createInvestigation(data: InvestigationFormData) {
  try {
    const validatedData = {
      ...data,
      investigationDate: new Date(data.investigationDate),
    };
    return prisma.diagnosticTest.create({ data: validatedData });
  } catch (error) {
    console.error("Validation Error:", error);
    throw new Error("Invalid data format");
  }
}

export async function getAllInvestigations() {
  return prisma.diagnosticTest.findMany();
}

export async function getInvestigationById(id: string) {
  return prisma.diagnosticTest.findUnique({ where: { id } });
}

export async function updateInvestigation(
  id: string,
  data: Partial<InvestigationFormData>
) {
  const validatedData = {
    ...data,
    investigationDate: data.investigationDate
      ? new Date(data.investigationDate)
      : undefined,
  };
  return prisma.diagnosticTest.update({ where: { id }, data: validatedData });
}

export async function deleteInvestigation(id: string) {
  return prisma.diagnosticTest.delete({ where: { id } });
}
