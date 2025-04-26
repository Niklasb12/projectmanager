import React from "react";
import AddProjectForm from "@/components/AddProjectForm";
import { getAllStatuses } from "@/lib/get-statuses";
import type { InferGetServerSidePropsType } from "next";

// Använd InferGetServerSidePropsType för att automatiskt typa props
const AddProjects = ({
  statuses,
}: InferGetServerSidePropsType<typeof getAllStatuses>) => {
  return (
    <div className="container">
      <div className="content">
        <h1>Lägg till projekt</h1>
        <div>
          <AddProjectForm statuses={statuses} />
        </div>
      </div>
    </div>
  );
};

export default AddProjects;

// Exportera getServerSideProps korrekt
export { getAllStatuses as getServerSideProps };
