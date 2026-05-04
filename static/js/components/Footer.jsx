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
            <span className="default">$</span>TOTAKEKE
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
            href="https://t.me/+EXbUMtY3MwE4MjU0"
            target="_blank"
            rel="noreferrer"
            className="link-btn"
          >
            <FaTelegramPlane />
          </a>
          <a
            href="https://x.com/_Totakekebsc"
            target="_blank"
            rel="noreferrer"
            className="link-btn"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://www.facebook.com/BalltzeFat96/posts/my-twin-brother-/755443512609745/"
            target="_blank"
            rel="noreferrer"
            className="link-btn"
          >
            <FaFacebook />
          </a>
          <a
            href="https://dex.coinmarketcap.com/token/bsc/0xd743d3c50ebd82f9173b599383979d10f3494444/"
            target="_blank"
            rel="noreferrer"
            className="link-btn"
          >
            <SiCoinmarketcap />
          </a>
          <a
            href="https://dexscreener.com/bsc/0xdb34b6781868690e3b8db7a55337269249e4adce"
            target="_blank"
            rel="noreferrer"
            className="link-btn dex-screener"
          >
            <span></span>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} $TOTAKEKE. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
