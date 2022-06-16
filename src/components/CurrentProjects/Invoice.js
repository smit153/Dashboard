import React from "react";
import "./CurrentProject.css";
import InvoiceCard from "./InvoiceCard";
export default function CurrentProjects() {
  return (
    <div>
      <div className="invoice-header">
        <div className="invoice-title">
          <div className="invoice">
            <b>Pending Invoice</b>
          </div>
          <div className="invoice-discription">
            Invoices that are currently pending
          </div>
        </div>

        <div className="invoice-symbole">
          <button>⋮</button>
        </div>
      </div>
      <div className="invoice-body">
        <InvoiceCard stat={true} />
        <InvoiceCard stat={false} />
        <InvoiceCard stat={false} />
      </div>
    </div>
  );
}
