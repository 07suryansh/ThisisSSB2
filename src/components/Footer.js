import React from "react";
import "./footer.css";
import { FaXTwitter,FaGithub,FaInstagram,FaLinkedinIn } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>&copy; 2024 Suryansh Singh Bisen</p>
      </div>
      <FaXTwitter />
      <FaGithub />
      <FaLinkedinIn />
      <FaInstagram />
    </footer>
  );
}
