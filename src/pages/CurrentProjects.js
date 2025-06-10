import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/CurrentProjects.css"; // Ensure styling is applied

const CurrentProjects = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <motion.div 
      className="projects-container"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="info-title">Current Projects</h2>
      <p className="info-text">
        Ethiopian Village Schools is actively working on expanding educational resources, building new schools,  
        and improving learning environments for underserved communities.
      </p>

      {/* Learn More Button */}
      <button 
        className="learn-more-button" 
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? "Hide Details" : "Learn More"}
      </button>

      {/* Expanded Content - Only Visible When Button Is Clicked */}
      {showDetails && (
        <motion.div 
          className="project-details"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3>New School in Qibaa</h3>
          <p>Construction has begun on a brand-new school in Qibaa, providing classrooms for over 200 students.</p>

          <h3>Library Expansion</h3>
          <p>We are adding a dedicated library space stocked with books and digital resources to support student learning.</p>

          <h3>Scholarship Program</h3>
          <p>Our scholarship initiative helps students pursue higher education, covering tuition and essential materials.</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default CurrentProjects;