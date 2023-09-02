import React from "react";
import styles from "./details.module.css";
import { details } from "./detailsData.js";
import DetailsCard from "./DetailsCard";

export default function Details() {
  return (
    <div className={styles.details} id="details">
      <h2 className={styles.title}>Explore the Headphone Excellence</h2>
      <div className={styles.card_container}>
        {details.map((detail) => {
          return (
            <DetailsCard
              key={detail.id}
              title={detail.title}
              desc={detail.desc}
            />
          );
        })}
      </div>
    </div>
  );
}
