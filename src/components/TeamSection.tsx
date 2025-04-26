import React, { useState } from "react";
import Styles from "@/styles/TeamSection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type TeamMember = {
  id: number;
  role: string;
  employee: string;
  hours: number;
  hourlyRate: number;
};

const availableRoles = ["Utvecklare", "Projektledare", "Designer", "Tester"];
const availableEmployees = [
  "Emma Andersson",
  "Niklas Svensson",
  "Anna Karlsson",
];

const TeamSection = () => {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const [hours, setHours] = useState(1);

  const addMember = () => {
    if (!selectedRole || !selectedEmployee || hours <= 0) return;
    setTeam((prev) => [
      ...prev,
      {
        id: Date.now(),
        role: selectedRole,
        employee: selectedEmployee,
        hours,
        hourlyRate: 800, // exempelpris
      },
    ]);
    // Återställ formulär
    setSelectedRole("");
    setSelectedEmployee("");
    setHours(0);
  };

  const removeMember = (id: number) => {
    setTeam((prev) => prev.filter((m) => m.id !== id));
  };

  const groupedByRole = availableRoles.map((role) => ({
    role,
    members: team.filter((m) => m.role === role),
  }));

  const totalCost = team.reduce((sum, m) => sum + m.hours * m.hourlyRate, 0);

  return (
    <div className={Styles.teamSection}>
      <h3>Team</h3>

      {/* Lägg till anställd */}
      <div className={Styles.addMember}>
        <select
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
        >
          <option value="">Välj roll</option>
          {availableRoles.map((role) => (
            <option key={role}>{role}</option>
          ))}
        </select>

        <select
          value={selectedEmployee}
          onChange={(e) => setSelectedEmployee(e.target.value)}
        >
          <option value="">Välj anställd</option>
          {availableEmployees.map((emp) => (
            <option key={emp}>{emp}</option>
          ))}
        </select>

        <input
          type="number"
          placeholder="Timmar"
          value={hours}
          onChange={(e) => setHours(Number(e.target.value))}
        />

        <button
          type="button"
          className={Styles.addMemberButton}
          onClick={addMember}
        >
          Lägg till
        </button>
      </div>

      {/* Lista per roll */}
      {groupedByRole.map(({ role, members }) =>
        members.length > 0 ? (
          <div
            key={role}
            style={{
              borderTop: "1px solid #ddd",
            }}
          >
            <h4>{role}</h4>
            {members.map((m) => (
              <div key={m.id} className={Styles.memberItem}>
                <span>{m.employee}</span>
                <span>{m.hours}</span>
                <span className={Styles.hours}>
                  {m.hours * m.hourlyRate} kr
                </span>
                <FontAwesomeIcon
                  icon="trash"
                  onClick={() => removeMember(m.id)}
                />
              </div>
            ))}
            <p className={Styles.total}>
              Totalt: {members.reduce((sum, m) => sum + m.hours, 0)} timmar,{" "}
              {members.reduce((sum, m) => sum + m.hours * m.hourlyRate, 0)} kr
            </p>
          </div>
        ) : null
      )}

      {/* Totalen */}
      <div className={Styles.totalAll}>
        <strong>Totalt för alla:</strong> {totalCost} kr
      </div>
    </div>
  );
};

export default TeamSection;
