import React, { useState, useEffect } from "react";
import logo from "../assets/logo.jpg";

const navItems = [
  { id: "features", label: "Features" },
  { id: "whyus", label: "Why\u00A0Us" },
  { id: "tradingcycle", label: "Trading\u00A0Cycle" },
  { id: "process", label: "Process" },
  { id: "contact", label: "Contact" },
];

const scrollToSection = (id) => {
  const elem = document.getElementById(id);
  if (elem) elem.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavClick = (id) => {
    setMenuOpen(false);
    setTimeout(() => scrollToSection(id), 100);
  };

  const styles = {
    navbar: {
      width: "100%",
      position: "fixed",
      top: 0,
      left: 0,
      backgroundColor: "#fff",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      zIndex: 1000,
      padding: "12px 20px",
    },
    navbarInner: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      maxWidth: "1200px",
      margin: "0 auto",
      boxSizing: "border-box",
    },
    rightWrapper: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      width: "100%",
      maxWidth: 240,
    },
    brand: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      cursor: "pointer",
      flexShrink: 0,
    },
    logo: {
      height: 48,
      width: "auto",
    },
    title: {
      fontWeight: 800,
      fontSize: isMobile ? "1.05rem" : "1.5rem",
      color: "#172554",
      letterSpacing: "1px",
      whiteSpace: "nowrap",
    },
    navLink: {
      color: "#172554",
      fontWeight: 500,
      textDecoration: "none",
      fontSize: "1.05rem",
      padding: "8px 0",
      cursor: "pointer",
      whiteSpace: "nowrap",
    },
    hamburgerButton: {
      background: "none",
      border: "none",
      cursor: "pointer",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: 8,
      height: 32,
      boxSizing: "border-box",
      position: "relative",
      marginRight: "20px",
    },
    burgerLine: {
      width: 24,
      height: 3,
      backgroundColor: "#172554",
      borderRadius: 3,
      marginBottom: 4,
      transform: "translateZ(0)",
    },
    mobileOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      height: "100vh",
      width: "100vw",
      backgroundColor: "rgba(0,0,0,0.4)",
      zIndex: 999,
      transition: "opacity 0.3s ease",
    },
    mobileMenu: {
      position: "absolute",
      top: 0,
      right: 0,
      width: 260,
      height: "100vh",
      backgroundColor: "#fff",
      padding: "24px 16px",
      display: "flex",
      flexDirection: "column",
      gap: 20,
      boxShadow: "-2px 0 10px rgba(0,0,0,0.2)",
      transition: "right 0.3s ease-in-out",
    },
    mobileLink: {
      fontSize: "1.1rem",
      fontWeight: 600,
      color: "#172554",
      textDecoration: "none",
    },
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.navbarInner}>
        <div style={styles.brand} onClick={() => scrollToSection("hero")}>
          <img src={logo} alt="Logo" style={styles.logo} />
          <span style={styles.title}>SHIVIN ASSETS MANAGEMENT</span>
        </div>

        <div style={styles.rightWrapper}>
          {isMobile ? (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={styles.hamburgerButton}
            >
              <div style={styles.burgerLine}></div>
              <div style={styles.burgerLine}></div>
              <div style={styles.burgerLine}></div>
            </button>
          ) : (
            <div style={styles.navLinks}>
              {navItems.map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(id);
                  }}
                  style={styles.navLink}
                >
                  {label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      {isMobile && (
        <div
          style={{
            ...styles.mobileOverlay,
            opacity: menuOpen ? 1 : 0,
            visibility: menuOpen ? "visible" : "hidden",
          }}
          onClick={() => setMenuOpen(false)}
        >
          <div
            style={{
              ...styles.mobileMenu,
              right: menuOpen ? 0 : "-260px",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {navItems.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(id);
                }}
                style={styles.mobileLink}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
