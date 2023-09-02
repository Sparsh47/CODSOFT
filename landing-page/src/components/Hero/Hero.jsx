import React from "react";
import styles from "./hero.module.css";
import heroVideo from "../../videos/background.mp4";

export default function Hero() {
  return (
    <div className={styles.hero} id="hero">
      <video autoPlay muted loop className={styles.hero_video}>
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className={styles.container}>
        <h1 className={styles.title}>Immerse Yourself in Sound</h1>
        <p className={styles.tagline}>
          Elevate Your Audio Experience with Cutting-edge Technology
        </p>
        <button className={styles.cta}>Explore Now</button>
      </div>
    </div>
  );
}
