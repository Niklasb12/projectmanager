// lib/queries/projects.ts
import { prisma } from "@/lib/db";

export const getAllProjectsQuery = () => {
  return prisma.project.findMany({
    include: {
      status: true,
      customer: true,
      projectRoles: {
        include: {
          role: true,
          user: true,
        },
      },
    },
  });
};

export const getMineProjectsQuery = (userId: number) => {
  return prisma.project.findMany({
    where: {
      projectRoles: {
        some: {
          userId,
        },
      },
    },
    include: {
      status: true,
      customer: true,
      projectRoles: {
        include: {
          role: true,
          user: true,
        },
      },
    },
  });
};

export async function createProjectQuery(data: {
  name: string;
  description: string;
  startDate: string;
  deadline: string;
  hourLeft: number;
  projectType: string;
  statusId: number;
  customerId: number;
  contactPersonId: number;
}) {
  const project = await prisma.project.create({
    data: {
      ...data,
      startDate: new Date(data.startDate),
      deadline: new Date(data.deadline),
    },
  });

  return project;
}
