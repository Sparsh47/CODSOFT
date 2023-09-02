import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.container}>
        <div className={styles.column}>
          <p className={styles.title}>Contact Us</p>
          <p className={styles.info}>Email: sparshshandilya123@gmail.com</p>
          <p className={styles.info}>Phone: +91 92895-97139</p>
        </div>
        <div className={styles.column}>
          <p className={styles.title}>Quick Links</p>
          <a href="#" className={styles.link}>
            Privacy Policy
          </a>
          <a href="#" className={styles.link}>
            Terms of Use
          </a>
          <a href="#" className={styles.link}>
            FAQ
          </a>
        </div>
        <div className={styles.column}>
          <p className={styles.title}>Follow Us</p>
          <div className={styles.socialIcons}>
            <a href="#" className={styles.icon}>
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href="#" className={styles.icon}>
              <i className="fab fa-twitter-square"></i>
            </a>
            <a href="#" className={styles.icon}>
              <i className="fab fa-instagram-square"></i>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.copyRight}>
        &copy; {new Date().getFullYear()} Your Headphone Paradise. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
