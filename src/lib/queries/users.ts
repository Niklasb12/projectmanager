// lib/queries/users.ts
import { prisma } from "@/lib/db";

export const getAllUsersQuery = () => {
  return prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      username: true,
      role: true,
    },
  });
};
