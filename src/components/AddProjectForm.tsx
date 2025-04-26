import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import TeamSection from "@/components/TeamSection";
import Styles from "@/styles/AddProjectForm.module.css";
import type { Status } from "@/types/status";

type Props = {
  statuses: Status[];
};

const AddProjectForm = ({ statuses }: Props) => {
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

          {/* Webbplats */}
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
                  "paste",
                ],
                toolbar:
                  "undo redo | formatselect | bold italic underline | " +
                  "alignleft aligncenter alignright alignjustify | " +
                  "bullist numlist outdent indent | link | removeformat",
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
        {/* Team-delen placeholder */}
        <TeamSection />
      </form>
      <button type="submit" className="button">
        Skapa projekt
      </button>
    </>
  );
};

export default AddProjectForm;
