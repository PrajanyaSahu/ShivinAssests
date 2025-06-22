import React from "react";

const fees = [
  {
    title: "Account Opening & Setup",
    highlights: [
      {
        label: "One-time Setup Fee: ₹399",
        value: "",
        note: "Includes onboarding, KYC processing, documentation",
      },
    ],
  },
  {
    title: "Performance-Based Fee (Optional)",
    highlights: [
      { note: "Only charged if you profit above expectations" },
      {
        label: "10% of profits above 4 lakh+ gains in FY",
        value: "",
      },
      { note: "Only if your returns beat the benchmark" },
    ],
  },
  {
    title: "Withdrawal & Exit Fees",
    highlights: [
      { label: "₹0 Exit Fees", value: "" },
      {
        note: "Withdraw your money anytime after 2 cycles.",
      },
    ],
  },
  {
    title: "Regulatory Compliance",
    highlights: [
      {
        note: "Fully compliant with SEBI/Exchange regulations (if applicable)."
      },
      {
        note: "All transactions are legal, trackable, and documented."
      }
    ]
  }
];

export default function FeeStructureSection() {
  return (
    <section
      className="section"
      id="fees"
      style={{
        background: "#f8fafd",
        padding: "56px 0",
      }}
    >
      <div
        className="features-title"
      >
        Our Nominal & Transparent Fee Structure
        <span className="features-underline" />
      </div>

      <p
        style={{
          textAlign: "center",
          fontSize: "1.05rem",
          color: "#444",
          marginTop: 8,
          marginBottom: 32,
          maxWidth: 720,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        At Shivin Assets Management, every charge is clear, honest, and justified.
        No hidden fees. No surprises.
      </p>

      <div className="features-grid">
        {fees.map((fee, index) => (
          <div key={index} className="feature-card">
            <div className="card-accent" />
            <h3 className="card-title">{fee.title}</h3>
            <ul style={{ paddingLeft: 18, margin: 0 }}>
              {fee.highlights.map((item, i) => (
                <li key={i} style={{ marginBottom: 10 }}>
                  {item.label && (
                    <div style={{ color: "#222" }}>
                      {item.label}
                      {item.value && (
                        <span style={{ color: "#2176ff", marginLeft: 4 }}>
                          {item.value}
                        </span>
                      )}
                    </div>
                  )}
                  {item.note && (
                    <div
                      style={{
                        fontSize: "0.95rem",
                        color: "#444",
                        whiteSpace: "pre-line",
                        marginTop: item.label ? 6 : 0,
                      }}
                    >
                      {item.note}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
