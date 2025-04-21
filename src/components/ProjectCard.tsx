// components/ProjectCard.tsx
import React from "react";
import type { Project } from "@/types/project";
import Styles from "@/styles/ProjectList.module.css";

type Props = {
  project: Project;
};

const getStatusClass = (status: string) => {
  switch (status.toLowerCase()) {
    case "ej påbörjad":
      return Styles.statusNotStarted;
    case "påbörjad":
      return Styles.statusStarted;
    case "klar":
      return Styles.statusDone;
    case "pausad":
      return Styles.statusPaused;
    case "fakturerad":
      return Styles.statusInvoiced;
    default:
      return Styles.statusDefault;
  }
};

const ProjectCard = ({ project }: Props) => {
  return (
    <div key={project.id} className={Styles.projectCard}>
      <div className={Styles.cardHeader}>
        <h3>{project.name}</h3>
        {project.status && (
          <span
            className={`${Styles.status} ${getStatusClass(
              project.status.name
            )}`}
          >
            {project.status.name}
          </span>
        )}
      </div>

      <p className={Styles.type}>{project.projectType}</p>

      {project.customer && (
        <div className={Styles.customer}>
          <p>
            <strong>{project.customer.name}</strong>
          </p>
          <p>{project.customer.contactName}</p>
        </div>
      )}

      <p className={Styles.dates}>
        {new Date(project.startDate).toLocaleDateString()}{" "}
        <span className={Styles.arrow}>→</span>{" "}
        {new Date(project.deadline).toLocaleDateString()}
      </p>

      <p>
        Totalt offererade timmar:{" "}
        {project.projectRoles?.reduce((sum, role) => sum + role.hoursQuoted, 0)}
        h
      </p>
      <div>
        <button className={Styles.button}>Läs mer</button>
      </div>
    </div>
  );
};

export default ProjectCard;
