import React from "react";
import "./CSS/ContactUsSection.css";

export default function ContactUsSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-title">Contact Us</div>

      <div className="contact-card">
        <div className="contact-description">
          Reach us directly for any queries or onboarding!
        </div>
          <div className="contact-item">
          <span className="contact-label">Telegram:</span>
          <a
            href="https://t.me/shivinassetsmanagement"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            @SHIVINASSETS
          </a>
        </div>
                <div className="contact-item">
          <span className="contact-label">WhatsApp:</span>
          <a
            href="https://wa.me/919479019692"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            +91 9479019692
          </a>
        </div>
                <div className="contact-item">
          <span className="contact-label">X (Twitter):</span>
          <a
            href="https://x.com/SHIVINASSETS"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            @SHIVINASSETS
          </a>
        </div>
        <div className="contact-item">
          <span className="contact-label">Email:</span>
          <a href="mailto:shivinassestsmanagement@gmail.com" className="contact-link">
            shivinassestsmanagement@gmail.com
          </a>
        </div>






      </div>
    </section>
  );
}
