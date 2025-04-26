// /api/contact-persons/index.ts
import { NextApiRequest, NextApiResponse } from "next";
import { getAllContactPersons } from "@/lib/queries/contact-persons";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const contactPersons = await getAllContactPersons();
      return res.status(200).json(contactPersons);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Fel vid hämtning av kontaktpersoner" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).json({ message: "Method not allowed" });
  }
}
