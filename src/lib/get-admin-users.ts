import { GetServerSideProps } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getAllUsersQuery } from "@/lib/queries/users";

export const getAllUsers: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session || !["admin", "worker"].includes(session.user.role || "")) {
    return { redirect: { destination: "/", permanent: false } };
  }

  const users = await getAllUsersQuery();

  return {
    props: { users },
  };
};
