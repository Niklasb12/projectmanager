import { GetServerSideProps } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export const getMineProjects: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return { redirect: { destination: "/login", permanent: false } };
  }

  const baseUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/projects/mine`, {
    headers: {
      Cookie: context.req.headers.cookie || "",
    },
  });

  const projects = await res.json();

  return {
    props: { projects },
  };
};
