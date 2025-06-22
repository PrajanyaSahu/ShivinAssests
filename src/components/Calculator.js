import React, { useState } from "react";
import "./CSS/TradingCycleSection.css"; // import the CSS file

function formatINR(num) {
  return num
    ? num.toLocaleString("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
      })
    : "—";
}

export default function TradingCycleSection() {
  const [customCapital, setCustomCapital] = useState("");
  const capital = parseInt(customCapital.replace(/\D/g, "")) || 0;

  const rate = capital >= 500000 ? 0.11 : 0.12;
  const perCycleProfit = Math.round(capital * rate);
  const totalProfit = perCycleProfit * 4;
  const endingCapital = capital + totalProfit;

  return (
    <section className="calculator-section" id="tradingcycle">
      <div className="calculator-title">Real-time Profit Calculator</div>

      <div className="calculator-box">
        <div className="calculator-subtitle">
          Enter your investment to see expected profit!
        </div>

        <div className="calculator-input-container">
          <input
            type="text"
            inputMode="numeric"
            value={
              customCapital === ""
                ? ""
                : Number(customCapital.replace(/,/g, "")).toLocaleString("en-IN")
            }
            placeholder="Enter Capital (₹)"
            onChange={(e) => {
              const raw = e.target.value.replace(/[^\d]/g, "");
              setCustomCapital(raw);
            }}
            className="calculator-input"
          />
        </div>

        <div className="calculator-result">
          <div>
            Per Cycle Profit ({rate === 0.12 ? "12%" : "11%"}):{" "}
            <b className="text-blue">{formatINR(capital ? perCycleProfit : 0)}</b>
          </div>
          <div>
            Total Profit in 12 Months:{" "}
            <b className="text-soft-blue">{formatINR(capital ? totalProfit : 0)}</b>
          </div>
          <div>
            Ending Capital:{" "}
            <b className="text-heading">{formatINR(capital ? endingCapital : 0)}</b>
          </div>
        </div>
      </div>
    </section>
  );
}
