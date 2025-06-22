import React from "react";

export default function Footer() {
  return (
    <footer>
      &copy; {new Date().getFullYear()} SHIVIN ASSETS MANAGEMENT. All rights reserved.<br />
      Built with <span style={{ color: "#2176ff", fontWeight: 700 }}>passion</span> for your wealth journey.
    </footer>
  );
}
