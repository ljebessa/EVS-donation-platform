import React from "react";
import "../styles/FinancialTransparency.css"; // Ensure styles are applied

const FinancialTransparency = () => {
  return (
    <div className="transparency-container">
      <h1>Our Commitment to Financial Transparency</h1>
      <p>
        Ethiopian Village Schools is dedicated to financial accountability and responsible fund allocation.
        Here’s how we ensure transparency:
      </p>

      <div className="transparency-sections">
        <div className="section">
          <h2>🔍 Fund Allocation Breakdown</h2>
          <p>Every dollar is spent efficiently to maximize impact. We prioritize education, school infrastructure, and essential resources.</p>
        </div>

        <div className="section">
          <h2>📊 Annual Reports & Audits</h2>
          <p>We publish publicly accessible financial statements and undergo independent audits to ensure accountability.</p>
        </div>

        <div className="section">
          <h2>📢 Donation Impact Stories</h2>
          <p>We share real-world examples of how contributions directly improve students’ lives and communities.</p>
        </div>

        <div className="section">
          <h2>✅ Verified Partnerships</h2>
          <p>We collaborate with reputable organizations to maintain trust and efficiency in financial management.</p>
        </div>
      </div>

      <p className="cta-text">For more details, view our latest financial reports or <a href="/contact">contact us</a> directly.</p>
    </div>
  );
};

export default FinancialTransparency;