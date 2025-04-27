// src/lib/queries/contact-persons.ts
import { prisma } from "@/lib/prisma";

export const getAllProjectsRole = () => {
  return prisma.projectRoleType.findMany();
};
