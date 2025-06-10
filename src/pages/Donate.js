import React, { useState } from "react";
import "../styles/Donate.css"; // Ensure styles are applied

const Donate = () => {
  const [amount, setAmount] = useState("");
  const [recurring, setRecurring] = useState(false);

  return (
    <div className="donate-container">
      <h1>
        Donate to Ethiopian Village Schools <span className="verified-badge">✔</span>
      </h1>

      {/* Dynamic Donation Amount Display */}
      <div className="donation-amount">
        <h2>${amount || "0"} USD</h2>
      </div>

      {/* User Input for Amount */}
      <input
        type="number"
        placeholder="Enter Amount ($)"
        min="1"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      {/* Recurring Donation Option */}
      <div className="recurring-option">
        <input
          type="checkbox"
          checked={recurring}
          onChange={() => setRecurring(!recurring)}
        />
        <label>Check the box to make this a monthly donation.</label>
      </div>

      {/* Payment Buttons */}
      <div className="payment-buttons">
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="WJEM3HQG3Z75G" /> {/* Replace with actual ID */}
          <input type="hidden" name="currency_code" value="USD" />
          <input type="hidden" name="amount" value={amount} /> {/* Pass amount dynamically */}
          
          <button className="paypal-button" type="submit">Donate</button>
        </form>

        {/*<button className="card-button">Donate with Debit or Credit Card</button>*/}
      </div>

       {/* 📨 Mail Contribution Option */}
      <div className="mail-contribution">
        <h3>Prefer to Donate by Mail?</h3>
        <p>Send a check payable to <strong>Ethiopian Village Schools</strong> at:</p>
        <p><strong>1234 Donation St, Suite 200<br/>City, State, ZIP Code</strong></p>
        <p>Include your email or phone number for a receipt.</p>
      </div>
    

    </div>
  );
};

export default Donate;