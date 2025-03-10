// /app/investigations/services/investigationService.ts
import axios from "axios";
import { InvestigationData } from "@/lib/types";
import { InvestigationFormData } from "../components/InvestigationForm";

export async function createInvestigation(data: InvestigationFormData) {
  try {
    const response = await axios.post("/api/investigations", data);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        `Error: ${error.response?.data?.message || error.message}`
      );
    } else {
      throw new Error(`Error: ${String(error)}`);
    }
  }
}

export async function getInvestigations() {
  try {
    const response = await axios.get("/api/investigations");
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        `Error: ${error.response?.data?.message || error.message}`
      );
    } else {
      throw new Error(`Error: ${String(error)}`);
    }
  }
}

export async function getInvestigationById(id: string) {
  try {
    const response = await axios.get(`/api/investigations/${id}`);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        `Error: ${error.response?.data?.message || error.message}`
      );
    }
    throw new Error("An unexpected error occurred");
  }
}


export async function updateInvestigation(id: string, data: InvestigationData) {
  try {
    const response = await axios.put(`/api/investigations/${id}`, data);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        `Error: ${error.response?.data?.message || error.message}`
      );
    } else {
      throw new Error(`Error: ${String(error)}`);
    }
  }
}

export async function deleteInvestigation(id: string) {
  try {
    const response = await axios.delete(`/api/investigations/${id}`);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        `Error: ${error.response?.data?.message || error.message}`
      );
    } else {
      throw new Error(`Error: ${String(error)}`);
    }
  }
}
