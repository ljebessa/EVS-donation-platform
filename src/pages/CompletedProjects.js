import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/CompletedProjects.css"; // Ensure styling is applied

const CompletedProjects = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <motion.div 
      className="projects-container"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="info-title">Completed Projects</h2>
      <p className="info-text">
        Ethiopian Village Schools has successfully completed several key projects that have improved education access and quality for students.
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
          <h3>New Classrooms Built</h3>
          <p>Constructed fully equipped classrooms in Bilo, ensuring over 500 students have a proper learning environment.</p>

          <h3>Teacher Training Program</h3>
          <p>Organized training for local educators to enhance teaching methods and improve student engagement.</p>

          <h3>School Supply Distribution</h3>
          <p>Provided thousands of textbooks, notebooks, and essential supplies to students across multiple villages.</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default CompletedProjects;