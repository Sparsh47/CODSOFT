import React from "react";
import styles from "./features.module.css";

export default function FeatureCard(props) {
  return (
    <div className={styles.card}>
      <h2 className={styles.card_title}>{props.title}</h2>
      <h3 className={styles.card_description}>
        <p>{props.desc.line1}</p>
        <p>{props.desc.line2}</p>
      </h3>
    </div>
  );
}
