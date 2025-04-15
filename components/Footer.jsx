import React from "react";
import Image from "next/image";
import logo from "../src/assets/olivra.png";
import { GrFacebookOption, GrTwitter, GrLinkedinOption } from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="logo">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <Image src={logo} width={100} height={100} alt="logo" />
            <span
              style={{
                fontSize: "2.5rem",
                fontWeight: 700,
                color: "#8ea092",
              }}
            >
              Olivra
            </span>
          </div>
          <p>
            Small, artisan label that offers a thoughtfully curated collection
            of high quality everyday essentials made.
          </p>
          <div className="icon-container">
            <div>
              <GrTwitter size={20} />
            </div>
            <div>
              <GrFacebookOption size={20} />
            </div>
            <div>
              <GrLinkedinOption size={20} />
            </div>
          </div>
        </div>

        <div className="footer-links">
          <h3>Company</h3>
          <ul>
            <li>About</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>How it Works</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="footer-links">
          <h3>Support</h3>
          <ul>
            <li>Support Carrer</li>
            <li>24h Service</li>
            <li>Quick Chat</li>
          </ul>
        </div>

        <div className="footer-links">
          <h3>Contact</h3>
          <ul>
            <li>Whatsapp</li>
            <li>Support 24h</li>
          </ul>
        </div>
      </div>

      <div className="copyright">
        <p>Copyright © 2025 Olivra</p>
      </div>
    </footer>
  );
};

export default Footer;
