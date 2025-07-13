import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import { getAllUsersQuery } from "@/lib/queries/users";
import { prisma } from "@/lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const users = await getAllUsersQuery();
    return res.status(200).json(users);
  }

  if (req.method === "POST") {
    const { name, email, username, password, role } = req.body;

    if (!name || !email || !username || !password || !role) {
      return res.status(400).json({ message: "Alla fält krävs" });
    }

    try {
      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await prisma.user.create({
        data: {
          name,
          email,
          username,
          password: hashedPassword,
          role,
        },
      });

      return res.status(201).json(user);
    } catch (error: any) {
      return res.status(500).json({
        message: "Kunde inte skapa användare",
        error: error.message,
      });
    }
  }

  res.setHeader("Allow", ["GET", "POST"]);
  return res.status(405).json({ message: "Method not allowed" });
}
