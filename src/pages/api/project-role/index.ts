// /api/contact-persons/index.ts
import { NextApiRequest, NextApiResponse } from "next";
import { getAllProjectsRole } from "@/lib/queries/project-role";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const projectsRole = await getAllProjectsRole();
      return res.status(200).json(projectsRole);
    } catch (error) {
      return res.status(500).json({ message: "Fel vid hämtning av Roller" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).json({ message: "Method not allowed" });
  }
}
