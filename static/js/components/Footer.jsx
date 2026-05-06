import React from "react";
import { FaFacebook, FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiCoinmarketcap } from "react-icons/si";

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="footer"
      style={{
        marginTop: "50px",
      }}
    >
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/logo.png" alt="Snowball Logo" />
          <h3>
            {" "}
            <span className="default">$</span>Apple
          </h3>
        </div>
        <div className="footer-links">
          <a href="#" onClick={() => scrollToSection("Home")}>
            About
          </a>
          <a href="#Tokenomics" onClick={() => scrollToSection("Tokenomics")}>
            Tokenomics
          </a>
          <a href="#Gallery" onClick={() => scrollToSection("Gallery")}>
            Gallery
          </a>
        </div>
        <div className="footer-social links">
          <a
            href="https://t.me/applethefox_eth"
            target="_blank"
            rel="noreferrer"
            className="link-btn"
          >
            <FaTelegramPlane />
          </a>
          <a
            href="https://x.com/applethefox_eth"
            target="_blank"
            rel="noreferrer"
            className="link-btn"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://dexscreener.com/ethereum/0x1e8E018eFB5C7668c122953450edC2646F7f6AD5"
            target="_blank"
            rel="noreferrer"
            className="link-btn dex-screener"
          >
            <span></span>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} $Apple. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
