import React from "react";
import styles from "./JourneyVisual.module.scss";
import { Image } from "react-bootstrap";
import ExpandOnView from "@/components/common/ExpandOnView/ExpandOnView";

const AboutVisual = () => {
  return (
    <div className={styles.visual}>
      <div className={styles.pattern} />

      <ExpandOnView className={`${styles.image} ${styles.imageTopRight}`}>
        <Image src="/images/about/2.webp" alt="Solar panel installation" />
      </ExpandOnView>

      <ExpandOnView className={`${styles.image} ${styles.imageMain}`}>
        <Image src="/images/about/1.webp" alt="Solar energy worker" />
      </ExpandOnView>

      <ExpandOnView className={`${styles.image} ${styles.imageBottomRight}`}>
        <Image src="/images/about/3.webp" alt="Solar energy field" />
      </ExpandOnView>

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
