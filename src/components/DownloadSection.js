import React from "react";
import "./CSS/DownloadSection.css";

export default function DownloadSection() {
  return (
    <section id="download" className="download-section">
      <div className="download-title">Download Agreement / Plan</div>

      <div className="download-button-container">
        <a
          href="/Shivin_Assets_Client_Agreement.pdf"
          download
          className="download-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download/Print Agreement
        </a>
      </div>

      <div className="download-button-container mt">
        <a
          href="/Stylish_12_Month_Trading_Cycle_Plans.pdf"
          download
          className="download-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Trading Cycle Plan PDF
        </a>
      </div>
    </section>
  );
}
