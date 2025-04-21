import React from "react";
import { getMineProjects } from "@/lib/get-mine-projects";
import ProjectList from "@/components/ProjectList";
import type { Project } from "@/types/project";
import Styles from "@/styles/Projects.module.css";

type Props = {
  projects: Project[];
};

const MyProjects = ({ projects }: Props) => {
  return (
    <div className={Styles.container}>
      <div className={Styles.content}>
        <h1>Mina projekt</h1>
        <ProjectList projects={projects} />
      </div>
    </div>
  );
};

export default MyProjects;

export const getServerSideProps = getMineProjects;
