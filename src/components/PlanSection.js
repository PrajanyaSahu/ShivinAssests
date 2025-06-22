import React from "react";
import PlanCard from "./PlanCard";
import "./CSS/PlanSection.css";

const plans = [
  {
    name: "Plan for ₹75,000",
    perCycleProfit: "₹9,000",
    totalProfit: "₹36,000",
    endingCapital: "₹1,11,000",
    minCapital: "₹75,000",
    entryExit: "After completion of 2 cycles",
    lockIn: "2 cycles",
    withdrawal: "Cheque / NEFT",
  },
  {
    name: "Plan for ₹1,50,000",
    perCycleProfit: "₹18,000",
    totalProfit: "₹72,000",
    endingCapital: "₹2,22,000",
    minCapital: "₹1,50,000",
    entryExit: "After completion of 2 cycles",
    lockIn: "2 cycles",
    withdrawal: "Cheque / NEFT",
  },
  {
    name: "Plan for ₹3,00,000",
    perCycleProfit: "₹36,000",
    totalProfit: "₹1,44,000",
    endingCapital: "₹4,44,000",
    minCapital: "₹3,00,000",
    entryExit: "After completion of 2 cycles",
    lockIn: " 2 cycles",
    withdrawal: "Cheque / NEFT",
  },
];


export default function PlanSection() {
  return (
    <section
      id="tradingcycle"
      className="plan-section"
    >
      <div className="plan-title">Our Trading Cycle Plans</div>

      <div className="plan-grid">
        {plans.map((plan, idx) => (
          <PlanCard key={idx} plan={plan} />
        ))}
      </div>
    </section>
  );
}
