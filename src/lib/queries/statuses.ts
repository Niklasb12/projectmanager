import { prisma } from "@/lib/prisma";

export const getAllStatusesQuery = () => {
  return prisma.status.findMany();
};
