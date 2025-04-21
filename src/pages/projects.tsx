import React from "react";
import { getAllProjects } from "@/lib/get-all-projects";
import ProjectList from "@/components/ProjectList";
import type { Project } from "@/types/project"; // Din egna typ!

type Props = {
  projects: Project[];
};

const ProjectsPage = ({ projects }: Props) => {
  return (
    <div>
      <h1>Alla projekt</h1>
      <ProjectList projects={projects} />
    </div>
  );
};

export default ProjectsPage;

export const getServerSideProps = getAllProjects;
