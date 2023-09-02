import React from "react";
import styles from "./details.module.css";

export default function DetailsCard(props) {
  return (
    <div className={styles.card}>
      <h3 className={styles.card_title}>{props.title}</h3>
      <p className={styles.card_desc}>{props.desc.line1}</p>
      <p className={styles.card_desc}>{props.desc.line2}</p>
    </div>
  );
}
