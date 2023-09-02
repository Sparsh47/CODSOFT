// Import React and other necessary modules

import React, { useState } from "react";
import styles from "./navbar.module.css";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={styles.navbar}>
      <span className={styles.logo}>
        <strong>S</strong>onix<strong>A</strong>ura
      </span>
      <div className={styles.hamburger_menu} onClick={toggleMenu}>
        &#9776; {/* Unicode for hamburger icon */}
      </div>
      <div className={`${styles.menuItems} ${showMenu ? styles.showMenu : ""}`}>
        {/* Replace the following lines with your menu items */}
        <a href="#hero" className={styles.menuItem}>
          Home
        </a>
        <a href="#features" className={styles.menuItem}>
          Features
        </a>
        <a href="#details" className={styles.menuItem}>
          Details
        </a>
        <a href="#footer" className={styles.menuItem}>
          Contact
        </a>
      </div>
    </div>
  );
}
