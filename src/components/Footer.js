import React from "react";
import "./footer.css";
import logohd from './ssb.png'

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-logo">
        <img src={logohd} alt="" />
        <p>&copy; 2024 Suryansh Singh Bisen</p>
      </div>
      <div className="footer-content">
        <a href="">LinkedIn</a>
        <a href="">Github</a>
        <a href="">X</a>
        <a href="">Codeforces</a>
        <a href="">Leetcode</a>
        <a href="">Codechef</a>
      </div>
    </footer>
  );
}
