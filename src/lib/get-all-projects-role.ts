import { GetServerSideProps } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getAllProjectsRole } from "@/lib/queries/project-role";

export const getAllRoles: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session || !["admin", "worker"].includes(session.user.role || "")) {
    return { redirect: { destination: "/login", permanent: false } };
  }

  const projectsRoles = await getAllProjectsRole();

  return {
    props: { projectsRoles },
  };
};
