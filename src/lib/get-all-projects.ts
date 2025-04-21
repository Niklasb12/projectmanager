import { GetServerSideProps } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllProjects: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (
    !session ||
    !session.user.role ||
    !["admin", "worker"].includes(session.user.role)
  ) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  const projects = await prisma.project.findMany({
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

  return {
    props: {
      projects: projects.map((p) => ({
        ...p,
        startDate: p.startDate.toISOString(),
        deadline: p.deadline.toISOString(),
        createdAt: p.createdAt.toISOString(),
        updatedAt: p.updatedAt.toISOString(),
      })),
    },
  };
};
