import axios from "axios";
import { useEffect, useState } from "react";

const ProgressBar = () => {
  const [donations, setDonations] = useState([]);
  const totalGoal = 5000; // Example: Target donation goal

  useEffect(() => {
    axios.get("http://localhost:8080/api/donations")
      .then(response => setDonations(response.data))
      .catch(error => console.error("Error fetching donations", error));
  }, []);

  const totalRaised = donations.reduce((sum, donation) => sum + donation.amount, 0);
  const progressPercentage = (totalRaised / totalGoal) * 100;

  return (
    <div>
      <h3>Fundraising Progress</h3>
      <div style={{ background: "#ddd", width: "100%", height: "20px", borderRadius: "5px" }}>
        <div style={{
          width: `${progressPercentage}%`,
          background: "green",
          height: "100%",
          borderRadius: "5px",
        }} />
      </div>
      <p>${totalRaised} raised of ${totalGoal} goal</p>
    </div>
  );
};

export default ProgressBar;