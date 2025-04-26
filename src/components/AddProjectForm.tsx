import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import TeamSection from "@/components/TeamSection";

const AddProjectForm = () => {
  const [description, setDescription] = useState("");

  return (
    <form className="project-form">
      <h2>Skapa projekt</h2>

      {/* Kund */}
      <label>
        Välj kund:
        <select>
          <option>ABC AB</option>
          <option>XYZ AB</option>
        </select>
      </label>

      {/* Adress & Försäljningsvärde */}
      <div className="row">
        <div>
          <p>Storgatan 1, 12345 Storstan</p>
          <p>Telefon, 010-123455</p>
          <p>Email: info@abc.se</p>
        </div>
        <div>
          <label>
            Försäljningsvärde:
            <input type="number" placeholder="50000" />
          </label>
        </div>
      </div>

      {/* Kontaktperson */}
      <label>
        Kontaktperson:
        <select>
          <option>Jan Karlsson</option>
        </select>
      </label>

      {/* Webbplats */}
      <label>
        Webbplats:
        <input type="text" placeholder="www.abc.se" />
      </label>

      {/* Projektbeskrivning */}
      <label>
        Projektbeskrivning:
        <Editor
          apiKey="052bw809hgz4270s3f9qvnpw5cfenqd0q39mogy7psk83otf"
          value={description}
          onEditorChange={(content) => setDescription(content)}
          init={{
            height: 300,
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
              "help",
              "wordcount",
            ],
            toolbar:
              "undo redo | formatselect | bold italic underline | " +
              "alignleft aligncenter alignright alignjustify | " +
              "bullist numlist outdent indent | link | removeformat | help",
          }}
        />
      </label>

      {/* Datum och status */}
      <div className="row">
        <label>
          Startdatum:
          <input type="date" />
        </label>
        <label>
          Deadline:
          <input type="date" />
        </label>
        <label>
          Status:
          <select>
            <option>Pågående</option>
            <option>Avslutat</option>
          </select>
        </label>
      </div>

      {/* Team-delen placeholder */}
      <TeamSection />

      <button type="submit">Skapa projekt</button>
    </form>
  );
};

export default AddProjectForm;
