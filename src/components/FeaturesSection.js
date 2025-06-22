import React from "react";
import "./CSS/FeaturesSection.css";

const features = [
  {
    title: "Tailored Portfolios",
    desc: "Your investments are customized to fit your personal risk profile and future aspirations.",
  },
  {
    title: "In-house Team",
    desc: "Seasoned in-house with a proven track record in efficient wealth growth.",
  },
  {
    title: "Customer Support Transparency",
    desc: "You can always reach out and expect honest, timely answers.",
  },
  {
    title: "Active Monitoring",
    desc: "Your assets are proactively managed, with strategies adjusted as markets evolve.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="features-section" id="features">
      <div className="features-title">
        Why SHIVIN?
        <span className="features-underline" />
      </div>

      <div className="features-grid">
        {features.map((f, idx) => (
          <div className="feature-card" key={idx}>
            <div className="card-accent" />
            <h3 className="card-title">{f.title}</h3>
            <p className="card-desc">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
