import React from "react";
import styles from "./SectionHeader.module.scss";

const SectionHeader = ({
  title,
  head,
  caption,
  variant,
  centered = false,
  maxWidth = 700,
}) => {
  return (
    <div
      className={`${styles.SectionHeader}
    ${styles[`variant_${variant}`]}
    ${centered ? styles.centered : ""}
    `}
      style={{
        maxWidth,
      }}
    >
      {title && <p className={styles.textTag}
        data-aos={centered ? "fade-down" : "fade-right"}
      
      >{title}</p>}
      <h2
        data-aos={centered ? "zoom-in" : "fade-right"}
      
      >{head}</h2>
      <p className={styles.caption}
        data-aos={centered ? "fade-up" : "fade-right"}
      
      >{caption}</p>
    </div>
  );
};

export default SectionHeader;
