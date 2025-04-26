import React, { useState } from "react";

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
  const [hours, setHours] = useState(0);

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

  return (
    <div style={{ marginTop: "2rem" }}>
      <h3>Team</h3>

      {/* Lägg till anställd */}
      <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
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

        <button type="button" onClick={addMember}>
          Lägg till {selectedRole.toLowerCase()}
        </button>
      </div>

      {/* Lista per roll */}
      {groupedByRole.map(({ role, members }) =>
        members.length > 0 ? (
          <div
            key={role}
            style={{
              marginBottom: "1.5rem",
              borderTop: "1px solid #ddd",
              paddingTop: "1rem",
            }}
          >
            <h4>{role}</h4>
            {members.map((m) => (
              <div
                key={m.id}
                style={{ display: "flex", gap: "1rem", alignItems: "center" }}
              >
                <span>{m.employee}</span>
                <span>{m.hours} timmar</span>
                <span>{m.hours * m.hourlyRate} kr</span>
                <button type="button" onClick={() => removeMember(m.id)}>
                  🗑️
                </button>
              </div>
            ))}
            <p style={{ fontWeight: "bold" }}>
              Totalt: {members.reduce((sum, m) => sum + m.hours, 0)} timmar,{" "}
              {members.reduce((sum, m) => sum + m.hours * m.hourlyRate, 0)} kr
            </p>
          </div>
        ) : null
      )}
    </div>
  );
};

export default TeamSection;
