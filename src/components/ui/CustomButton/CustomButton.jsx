import React from "react";
import styles from "./CustomButton.module.scss";
import FONTS from "@/styles/fonts";
import Link from "next/link";

const CustomButton = ({ children, variant = 1, href }) => {
  if (href) {
    return (
      <Link href={href}>
        <button
          className={`${styles.CustomButton}
    ${FONTS.font2}
    ${styles[`variant_${variant}`]}
    `}
          data-aos="fade-up"
        >
          <div className={styles.bg} />

          <span>{children}</span>
        </button>
      </Link>
    );
  }

  return (
    <button
      className={`${styles.CustomButton}
    ${FONTS.font2}
    ${styles[`variant_${variant}`]}
    `}
      data-aos="fade-up"
    >
      <div className={styles.bg} />

      <span>{children}</span>
    </button>
  );
};

export default CustomButton;
