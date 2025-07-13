// lib/get-all-projects.ts
import { GetServerSideProps } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getAllProjectsQuery } from "@/lib/queries/projects";

export const getAllProjects: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session || !["admin", "worker"].includes(session.user.role || "")) {
    return { redirect: { destination: "/login", permanent: false } };
  }

  const projects = await getAllProjectsQuery();

  return {
    props: {
      projects: projects.map((p: any) => ({
        ...p,
        startDate: p.startDate.toISOString(),
        deadline: p.deadline.toISOString(),
        createdAt: p.createdAt.toISOString(),
        updatedAt: p.updatedAt.toISOString(),
      })),
    },
  };
};
