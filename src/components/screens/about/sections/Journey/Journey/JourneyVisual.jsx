import React from "react";
import styles from "./JourneyVisual.module.scss";
import { Image } from "react-bootstrap";

const AboutVisual = () => {
  return (
    <div className={styles.visual}>
      <div className={styles.pattern} />

      <div className={`${styles.image} ${styles.imageTopRight}`}>
        <Image src="/images/about/2.webp" alt="Solar panel installation" />
      </div>

      <div className={`${styles.image} ${styles.imageMain}`}>
        <Image src="/images/about/1.webp" alt="Solar energy worker" />
      </div>

      <div className={`${styles.image} ${styles.imageBottomRight}`}>
        <Image src="/images/about/3.webp" alt="Solar energy field" />
      </div>

      <div className={styles.badge}>
        <Image
          src="/images/about/4.webp"
          alt="Solarva Solar Energy Services"
        />
      </div>
    </div>
  );
};

export default AboutVisual;
