import React from "react";
import styles from "./cta.module.css";

export default function CTA() {
  return (
    <div className={styles.cta_section}>
      <div className={styles.cta_container}>
        <h1 className={styles.title}>
          <span>Elevate Your Audio Journey</span>
          <br />
          <span> Ready to Experience True Sound?</span>
        </h1>
        <button className={styles.cta_button}>Shop Now</button>
      </div>
    </div>
  );
}
