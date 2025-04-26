import { GetServerSideProps } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getAllStatusesQuery } from "@/lib/queries/statuses";

export const getAllStatuses: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session || !["admin", "worker"].includes(session.user.role || "")) {
    return { redirect: { destination: "/login", permanent: false } };
  }

  const statuses = await getAllStatusesQuery();

  return {
    props: { statuses },
  };
};
