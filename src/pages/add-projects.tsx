// /pages/projects/add.tsx
import React from "react";
import AddProjectForm from "@/components/AddProjectForm";
import { getAllStatusesQuery } from "@/lib/queries/statuses";
import { getAllUsersQuery } from "@/lib/queries/users";
import { getAllProjectsRole } from "@/lib/queries/project-role";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { GetServerSideProps } from "next";
import type { Status } from "@/types/status";
import type { User } from "@/types/user";
import type { ProjectRole } from "@/types/project-role";

type Props = {
  statuses: Status[];
  users: User[];
  projectsRoles: ProjectRole[];
};

const AddProjects = ({ statuses, users, projectsRoles }: Props) => {
  return (
    <div className="container">
      <div className="content">
        <h1>Lägg till projekt</h1>
        <AddProjectForm
          statuses={statuses}
          users={users}
          projectsRoles={projectsRoles}
        />
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session || !["admin", "worker"].includes(session.user.role || "")) {
    return { redirect: { destination: "/login", permanent: false } };
  }

  const [statuses, users, projectsRoles] = await Promise.all([
    getAllStatusesQuery(),
    getAllUsersQuery(),
    getAllProjectsRole(),
  ]);

  return {
    props: { statuses, users, projectsRoles },
  };
};

export default AddProjects;
