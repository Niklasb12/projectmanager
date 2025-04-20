import { GetServerSideProps } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export const getAdminUsers: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!session) {
    return {
      redirect: { destination: "/login", permanent: false },
    };
  }

  if (session.user.role !== "ADMIN") {
    return {
      redirect: { destination: "/", permanent: false },
    };
  }

  const res = await fetch(`${apiUrl}/api/users`);
  const users = await res.json();

  return {
    props: { users },
  };
};
