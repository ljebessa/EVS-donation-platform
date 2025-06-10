import React from "react";
import "../styles/OurTeam.css"; // Ensure styling is applied

const teamMembers = [
  {
    name: "Birtukan Beyenssa",
    role: "Founder & Director",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
    bio: "Birtukan established Ethiopian Village Schools to provide access to quality education in underserved communities."
  },
  {
    name: "Eileen Mougeot",
    role: "CEO",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
    bio: "Eileen leads the organization with a vision to expand educational opportunities across Ethiopia."
  },
  {
    name: "Dr. Thomas Eusterbrock",
    role: "Tressurer",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
    bio: "Dr. Eusterbrock manages the financial health of the organization, ensuring funds are used effectively to support our mission."
  },
    {
    name: "Rev. Temesgen Dabsu",
    role: "Board Member",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
    bio: " Rev. Temesgen provides spiritual guidance and support, helping to align our mission with community values."
  }
];

const OurTeam = () => {
  return (
    <div className="team-container">
      <h2 className="team-title">Meet Our Team</h2>
      <p className="team-description">
        Our dedicated team is committed to providing quality education and empowering communities.
      </p>

      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <img src={member.image} alt={member.name} className="team-image" />
            <h3 className="team-name">{member.name}</h3>
            <p className="team-role">{member.role}</p>
            <p className="team-bio">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;