import axios from "axios";
import { useEffect, useState } from "react";

const DonateBar = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/donations")
      .then(response => setDonations(response.data))
      .catch(error => console.error("Error fetching donations", error));
  }, []);

  return (
    <div>
      <h3>Recent Donations</h3>
      <ul>
        {donations.map(donation => (
          <li key={donation.id}>
            {donation.donorName} donated ${donation.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DonateBar;