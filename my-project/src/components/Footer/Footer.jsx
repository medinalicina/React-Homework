import React from "react";
import './footer.css';
export const Footer = () => {
    return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-section">
          <h3>Kategorije</h3>
          <ul className="footer-links">
            <li><a href="/vesti/sport">Sport</a></li>
            <li><a href="/vesti/tehnologija">Tehnologija</a></li>
            <li><a href="/vesti/umetnost">Umetnost</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Kontakt</h3>
          <p>Email: kontakt@novosti.com</p>
          <p>Telefon: +123 456 789</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Novosti</p>
      </div>
    </footer>
  );
};

export default Footer;