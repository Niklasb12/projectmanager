import React from "react";
import { getMineProjects } from "@/lib/get-mine-projects";
import ProjectList from "@/components/ProjectList";
import type { Project } from "@/types/project";

type Props = {
  projects: Project[];
};

const MyProjects = ({ projects }: Props) => {
  return (
    <div>
      <h1>Mina projekt</h1>
      <ProjectList projects={projects} />
    </div>
  );
};

export default MyProjects;

export const getServerSideProps = getMineProjects;
