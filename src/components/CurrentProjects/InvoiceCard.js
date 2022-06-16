import React from "react";
import "./InvoiceCard.css";
export default function InvoiceCard(props) {
  return (
    <div className="invoice-card">
      <div className="amount">
        <b>$ 137.00</b>
      </div>
      <div className="status">
        <div>Amount</div>
        <button style={{ backgroundColor: props.stat ? "#15C15D" : "#14A9F9" }}>
          Approved
        </button>
      </div>
      <div className="invoice-profile">
        <img
          src="https://images.unsplash.com/photo-1544502062-f82887f03d1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
          alt="client"
        />
        <div className="invoice-user-details">
          <div className="invoice-user-name">
            <b>Erin Gonzales</b>
          </div>
          <div className="invoice-details">#5331 Date : 25 May</div>
        </div>
      </div>
    </div>
  );
}
