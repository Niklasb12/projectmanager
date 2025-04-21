import React from "react";
import type { Project } from "@/types/project";
import Styles from "@/styles/ProjectList.module.css";
import ProjectCard from "./ProjectCard";

type Props = {
  projects: Project[];
};

const ProjectList = ({ projects }: Props) => {
  const fakturerad = projects.filter((p) =>
    ["Fakturerad"].includes(p.status?.name || "")
  );

  const done = projects.filter((p) => ["Klara"].includes(p.status?.name || ""));
  const ongoing = projects.filter(
    (p) => !["Klar", "Fakturerad"].includes(p.status?.name || "")
  );

  return (
    <div>
      <h2>Pågående projekt</h2>
      <div className={Styles.projectList}>
        {ongoing.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <h2 style={{ marginTop: "2rem" }}>Avslutade projekt</h2>
      <div className={Styles.projectList}>
        {done.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <h2 style={{ marginTop: "2rem" }}>Fakturerade projekt</h2>
      <div className={Styles.projectList}>
        {fakturerad.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
