import { NextApiRequest, NextApiResponse } from "next";
import { getAllStatusesQuery } from "@/lib/queries/statuses";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const statuses = await getAllStatusesQuery();
    res.status(200).json(statuses);
  } catch (error) {
    res.status(500).json({ message: "Något gick fel" });
  }
}
