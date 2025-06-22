import React from "react";
import "./CSS/WhyUsSection.css"; 

const points = [
  "Hyper-personalized investment plans, not a generic approach.",
  "Ethical investment strategies for long-term security.",
  "Every rupee you invest is accounted for. Full transparency, always.",
  "Quarterly investment cycles — each year has 4 well-defined cycles for better planning and predictable returns.",
];

export default function WhyUsSection() {
  return (
    <section className="whyus-section" id="whyus">
      <div className="whyus-title">
        What Sets Us Apart?
        <span className="whyus-underline"></span>
      </div>

      <div className="whyus-card">
        <ul className="whyus-list">
          {points.map((point, idx) => (
            <li key={idx} className="whyus-list-item">
              <span className="whyus-icon">✓</span>
              <span className="whyus-text">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
