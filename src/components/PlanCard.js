import React from "react";
import "./CSS/PlanCard.css";

export default function PlanCard({ plan }) {
  return (
    <div className="plan-card">
      <div className="plan-summary">
        <div style={{ fontWeight: 700, fontSize: "1.25rem", color: "#2176ff" }}>
          {plan.name}
        </div>
        <div style={{ marginTop: 12, fontSize: "1.1rem", color: "#172554" }}>
          Per Cycle Profit (12%): <span style={{ color: "#2176ff" }}>{plan.perCycleProfit}</span>
        </div>
        <div style={{ color: "#172554" }}>
          Total Profit in 12 Months: <span style={{ color: "#2176ff" }}>{plan.totalProfit}</span>
        </div>
        <div style={{ color: "#172554" }}>
          Ending Capital: <span style={{ color: "#2176ff" }}>{plan.endingCapital}</span>
        </div>
      </div>
      <div className="plan-details">
        <ul>
          <li>Minimum capital required: <b>{plan.minCapital}</b></li>
          <li>Entry/exit flexibility: <b>{plan.entryExit}</b></li>
          <li>Lock-in period: <b>{plan.lockIn}</b></li>
          <li>Withdrawal options: <b>{plan.withdrawal}</b></li>
        </ul>
      </div>
    </div>
  );
}
