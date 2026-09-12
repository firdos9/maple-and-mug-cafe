import { teamMembers } from "../data/teamData";

const Team = () => {
  return (
    <div className="admin-page-content">
      <h1>Cafe Staff</h1>
      <div className="team-grid">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-card">
            <h3>{member.name}</h3>
            <p>
              <strong>Role:</strong> {member.role}
            </p>
            <p>
              <strong>Status:</strong> {member.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Team;
