import React from "react";
import "./CSS/HeroSection.css";

export default function HeroSection() {
  return (
    <section id="hero" className="hero-section">
      <h1 className="hero-title">SHIVIN ASSETS MANAGEMENT</h1>

      <p className="hero-subtitle">
        <span className="highlight">Wealth. Wisdom. Results.</span>
        <br />
        Next-gen asset management designed for ambitious individuals.
        <br />
        <span className="highlight">Team-driven. Transparent. Personal.</span>
      </p>

      <a href="#contact" className="hero-btn-link">
        <button className="hero-button">Get Started</button>
      </a>
    </section>
  );
}
