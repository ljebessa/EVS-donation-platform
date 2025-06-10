import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/AboutUs.css";

const AboutUs = () => {
  const [showImpact, setShowImpact] = useState(false);
  const [showTimeline, setShowTimeline] = useState(false);

  return (
    <motion.div 
      className="about-container"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >

      {/* Founder’s Story */}
      <h2 className="section-title">Our Founder’s Story</h2>
      <p className="section-text">
        Ethiopian Village Schools was founded by <strong>Birtukan Beyenssa</strong>, a native of Ethiopia and a long-time resident of California.  
        During a visit to Ethiopia, she saw first-hand the struggles children faced due to a lack of educational resources.  
        Inspired by their determination, she committed herself to creating schools that provide opportunities for brighter futures.
      </p>

      {/* Our Impact Section */}
      <h2 className="section-title">Our Impact</h2>
      <p className="section-text">
        Education is the most powerful tool in breaking the cycle of poverty. With Ethiopian Village Schools, we’ve helped thousands of students gain access  
        to better learning environments.
      </p>
      <button className="toggle-button" onClick={() => setShowImpact(!showImpact)}>
        {showImpact ? "Hide Impact Stories" : "See Success Stories"}
      </button>
      
      {showImpact && (
        <motion.div className="impact-details">
          <h3>📚 Amanuel’s Journey</h3>
          <p>From studying under a tree to earning a scholarship, Amanuel's life changed through education.</p>

          <h3>🎓 Growing Opportunities</h3>
          <p>Over 1,200 students now have access to classrooms, books, and qualified teachers thanks to our expansion efforts.</p>
        </motion.div>
      )}

      {/* Timeline Section */}
      <h2 className="section-title">Our Journey</h2>
      <button className="toggle-button" onClick={() => setShowTimeline(!showTimeline)}>
        {showTimeline ? "Hide Timeline" : "View Our Growth"}
      </button>

      {showTimeline && (
        <motion.ul className="timeline">
          <li><strong>2005:</strong> Ethiopian Village Schools was founded.</li>
          <li><strong>2010:</strong> First classrooms built in Bilo.</li>
          <li><strong>2015:</strong> Expanded to three neighboring villages.</li>
          <li><strong>2022:</strong> Over 1,200 students enrolled across schools.</li>
          <li><strong>2025:</strong> Plans for digital learning resources launched.</li>
        </motion.ul>
      )}

      {/* Call to Action */}
      <h2 className="section-title">Get Involved</h2>
      <p className="section-text">
        You can make a difference! Whether through donations, volunteering, or spreading awareness,  
        every effort helps provide a brighter future for children in Ethiopia.
      </p>
      <button className="donate-button" onClick={() => window.location.href = "/donate"}>
        Donate Now
      </button>

    </motion.div>
  );
};

export default AboutUs;