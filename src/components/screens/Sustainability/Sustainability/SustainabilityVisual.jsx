import React from "react";
import styles from "./SustainabilityVisual.module.scss";
import { Image } from "react-bootstrap";
import ExpandOnView from "@/components/common/ExpandOnView/ExpandOnView";

function CircularText() {
  return (
    <div className={styles.circleText}>
      <svg viewBox="0 0 200 200">
        <defs>
          <path
            id="circlePath"
            d="M 100,100 m -70,0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
          />
        </defs>

        <text>
          <textPath href="#circlePath">
            FABRIGHT • SOLAR ENERGY • FABRIGHT • SOLAR ENERGY •
          </textPath>
        </text>
      </svg>
    </div>
  );
}

const SustainabilityVisual = () => {
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
        <div className={styles.inner}>
          <div className={styles.scroll}>
            <CircularText />
          </div>

          <Image
            src="/images/sustainability1.png"
            alt="Fabright Solar Energy Services"
          />
        </div>
      </div>
    </div>
  );
};

export default SustainabilityVisual;
