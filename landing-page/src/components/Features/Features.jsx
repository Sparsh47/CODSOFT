import React from "react";
import styles from "./features.module.css";
import FeatureCard from "./FeatureCard";
import { features } from "./featuresData.js";

export default function Features() {
  return (
    <div className={styles.features} id="features">
      <h2 className={styles.title}> Unparalleled Features</h2>
      <div className={styles.card_container}>
        {features.map((feature) => {
          return (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              desc={feature.desc}
            />
          );
        })}
      </div>
    </div>
  );
}
