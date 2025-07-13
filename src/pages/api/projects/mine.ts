import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return res.status(401).json({ message: "Inte inloggad" });
  }

  const projects = await prisma.project.findMany({
    where: {
      projectRoles: {
        some: {
          userId: session.user.id,
        },
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
      tasks: {
        include: {
          assignedTo: true,
        },
      },
      timeReports: {
        include: {
          user: true,
        },
      },
    },
  });

  return res.status(200).json(projects);
}
