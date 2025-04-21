import React from "react";
import { getAllProjects } from "@/lib/get-all-projects";
import ProjectList from "@/components/ProjectList";
import type { Project } from "@/types/project"; // Din egna typ!
import Styles from "@/styles/Projects.module.css";

type Props = {
  projects: Project[];
};

const ProjectsPage = ({ projects }: Props) => {
  return (
    <div className={Styles.container}>
      <div className={Styles.content}>
        <h1>Alla projekt</h1>
        <ProjectList projects={projects} />
      </div>
    </div>
  );
};

export default ProjectsPage;

export const getServerSideProps = getAllProjects;
