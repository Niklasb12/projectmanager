import React, { useState } from "react";
import dynamic from "next/dynamic";
import TeamSection from "@/components/TeamSection";
import Styles from "@/styles/AddProjectForm.module.css";
import type { Status } from "@/types/status";
import type { User } from "@/types/user";
import type { ProjectRole } from "@/types/project-role";

// Dynamisk import av TinyMCE Editor (ssr: false)
const Editor = dynamic(
  () => import("@tinymce/tinymce-react").then((mod) => mod.Editor),
  { ssr: false }
);

type Props = {
  statuses: Status[];
  users: User[];
  projectsRoles: ProjectRole[];
};

const AddProjectForm = ({ statuses, users, projectsRoles }: Props) => {
  const [description, setDescription] = useState("");

  return (
    <>
      <form className={Styles.projectForm}>
        <div className={Styles.formGroup}>
          {/* Kund */}
          <label className={Styles.formLabel}>
            Välj kund:
            <select>
              <option>ABC AB</option>
              <option>XYZ AB</option>
            </select>
          </label>

          {/* Adress & Försäljningsvärde */}
          <div className={Styles.customerInfo}>
            <div>
              <p>Storgatan 1, 12345 Storstan</p>
              <p>Telefon, 010-123455</p>
              <p>Email: info@abc.se</p>
            </div>
            <div>
              <label className={Styles.formLabel}>
                Försäljningsvärde:
                <input type="number" placeholder="50000" />
              </label>
            </div>
          </div>

          {/* Kontaktperson */}
          <label className={Styles.formLabel}>
            Kontaktperson:
            <select>
              <option>Jan Karlsson</option>
            </select>
          </label>

          {/* Projektnamn */}
          <label className={Styles.formLabel}>
            Projektnamn:
            <input type="text" placeholder="www.abc.se" />
          </label>

          {/* Projektbeskrivning */}
          <label className={Styles.descriptionLabel}>
            Projektbeskrivning:
            <Editor
              apiKey="052bw809hgz4270s3f9qvnpw5cfenqd0q39mogy7psk83otf"
              value={description}
              onEditorChange={(content) => setDescription(content)}
              init={{
                menubar: false,
                plugins: [
                  "advlist",
                  "autolink",
                  "lists",
                  "link",
                  "charmap",
                  "preview",
                  "anchor",
                  "searchreplace",
                  "visualblocks",
                  "code",
                  "fullscreen",
                  "insertdatetime",
                  "media",
                  "table",
                ],
                toolbar:
                  "undo redo | formatselect | bold italic underline | " +
                  "alignleft aligncenter alignright alignjustify | " +
                  "bullist numlist outdent indent | link | removeformat",
                // Viktigt: Ladda TinyMCE via CDN
                script_url:
                  "https://cdn.tiny.cloud/1/052bw809hgz4270s3f9qvnpw5cfenqd0q39mogy7psk83otf/tinymce/6/tinymce.min.js",
              }}
            />
          </label>

          {/* Datum och status */}
          <div className={Styles.dateStatus}>
            <label className={Styles.formLabel}>
              Startdatum:
              <input type="date" />
            </label>
            <label className={Styles.formLabel}>
              Deadline:
              <input type="date" />
            </label>
            <label className={Styles.formLabel}>
              Status:
              <select>
                {statuses
                  .sort((a, b) => a.id - b.id)
                  .map((status) => (
                    <option key={status.id} value={status.id}>
                      {status.name}
                    </option>
                  ))}
              </select>
            </label>
          </div>
        </div>
        {/* Team-delen */}
        <TeamSection users={users} projectsRoles={projectsRoles} />
      </form>
      <button type="submit" className="button">
        Skapa projekt
      </button>
    </>
  );
};

export default AddProjectForm;
