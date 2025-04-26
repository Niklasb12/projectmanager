import React from "react";
import AddProjectForm from "@/components/AddProjectForm";
import { getMineProjects } from "@/lib/get-mine-projects";

const addProjects = () => {
  return (
    <div className="container">
      <div className="content">
        <h1>Lägg till projekt</h1>
        <div>
          <AddProjectForm />
        </div>
      </div>
    </div>
  );
};

export default addProjects;
