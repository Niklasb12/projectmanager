import React from "react";
import AddProjectForm from "@/components/AddProjectForm";
import { getMineProjects } from "@/lib/get-mine-projects";

const addProjects = () => {
  return (
    <div>
      <h1>Lägg till projekt</h1>
      <div>
        <AddProjectForm />
      </div>
    </div>
  );
};

export default addProjects;
