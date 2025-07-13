// src/lib/queries/contact-persons.ts
import { prisma } from "@/lib/prisma";

export const getAllContactPersons = () => {
  return prisma.contactPerson.findMany({
    include: { customer: true },
  });
};
