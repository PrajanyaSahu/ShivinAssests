import React from "react";
import "./CSS/ProcessSection.css";

const steps = [
  {
    title: "Consultation",
    desc: "We begin with understanding your financial goals, risk appetite, and timeline.",
  },
  {
    title: "Strategy Design",
    desc: "We tailor a personalized investment strategy using our research and experience.",
  },
  {
    title: "Execution",
    desc: "Your capital is deployed into carefully selected instruments for optimal returns.",
  },
  {
    title: "Performance Tracking",
    desc: "We constantly monitor and optimize based on market dynamics and your goals.",
  },
];

export default function ProcessSection() {
  return (
    <section className="process-section" id="process">
      <div className="process-title">
        How It Works
        <span className="process-underline"></span>
      </div>

      <div className="process-grid">
        {steps.map((step, index) => (
          <div key={index} className="process-card">
            <div className="process-step-circle">
              <span>{index + 1}</span>
            </div>
            <div className="process-step-title">{step.title}</div>
            <div className="process-step-desc">{step.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
