import { NextApiRequest, NextApiResponse } from "next";
import {
  getInvestigationById,
  updateInvestigation,
  deleteInvestigation,
} from "@/lib/controllers/investigationController";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query as { id: string };

  try {
    if (req.method === "GET") {
      const investigation = await getInvestigationById(id);
      if (!investigation) return res.status(404).json({ error: "investigation not found" });
      return res.status(200).json(investigation);
    }

    if (req.method === "PUT") {
      const updatedinvestigation = await updateInvestigation(id, req.body);
      return res.status(200).json(updatedinvestigation);
    }

    if (req.method === "DELETE") {
      await deleteInvestigation(id);
      return res.status(204).end();
    }

    res.status(405).json({ error: "Method Not Allowed" });
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
}
