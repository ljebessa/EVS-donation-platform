import axios from "axios";
import { useState } from "react";

const Form = () => {
  const [donation, setDonation] = useState({ donorName: "", amount: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/donations", donation);
      alert("Donation submitted!");
    } catch (error) {
      console.error("Error submitting donation", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" onChange={e => setDonation({ ...donation, donorName: e.target.value })} />
      <input type="number" placeholder="Amount" onChange={e => setDonation({ ...donation, amount: e.target.value })} />
      <button type="submit">Donate</button>
    </form>
  );
};

export default Form;