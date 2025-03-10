"use server"

import { createInvestigation, getAllInvestigations } from "@/lib/controllers/investigationController";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "POST") {
      const investigation = await createInvestigation(req.body);
      return res.status(201).json(investigation);
    }
    if (req.method === "GET") {
      const investigations = await getAllInvestigations();
      return res.status(200).json(investigations);
    }
    res.status(405).json({ error: "Method Not Allowed" });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: "An unknown error occurred" });
    }
  }
}