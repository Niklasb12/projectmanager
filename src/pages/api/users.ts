import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const users = await prisma.user.findMany();
    return res.status(200).json(users);
  }

  if (req.method === "POST") {
    const { name, email, username } = req.body;

    if (!name || !email || !username) {
      return res
        .status(400)
        .json({ message: "Namn, e-post och användarnamn krävs" });
    }

    try {
      const user = await prisma.user.create({
        data: { name, email, username },
      });

      return res.status(201).json(user);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Kunde inte skapa användare", error });
    }
  }

  // Alla andra metoder
  res.setHeader("Allow", ["GET", "POST"]);
  return res.status(405).json({ message: "Method not allowed" });
}
