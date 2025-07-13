// pages/api/projects/index.ts
import { NextApiRequest, NextApiResponse } from "next";
import { getAllProjectsQuery } from "@/lib/queries/projects";
import { prisma } from "@/lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const projects = await getAllProjectsQuery();
    return res.status(200).json(projects);
  }

  if (req.method === "POST") {
    const {
      name,
      description,
      startDate,
      deadline,
      hourLeft,
      projectType,
      statusId,
      customerId,
      contactPersonId,
      projectRoles, // [{ userId: 5, roleId: 2, hoursQuoted: 100 }]
    } = req.body;

    // 🛡️ Validera input (anpassa efter dina krav)
    if (!name || !startDate || !deadline || !hourLeft || !projectType) {
      return res.status(400).json({ message: "Obligatoriska fält saknas" });
    }

    try {
      const newProject = await prisma.project.create({
        data: {
          name,
          description,
          startDate: new Date(startDate),
          deadline: new Date(deadline),
          hourLeft,
          projectType,
          statusId,
          customerId,
          contactPersonId,
          projectRoles: {
            create: projectRoles || [],
          },
        },
        include: {
          status: true,
          customer: true,
          projectRoles: {
            include: {
              user: true,
              role: true,
            },
          },
        },
      });

      return res.status(201).json(newProject);
    } catch (error: any) {
      console.error(error);
      return res
        .status(500)
        .json({ message: "Kunde inte skapa projekt", error: error.message });
    }
  }

  res.setHeader("Allow", ["GET", "POST"]);
  return res.status(405).json({ message: "Method not allowed" });
}
