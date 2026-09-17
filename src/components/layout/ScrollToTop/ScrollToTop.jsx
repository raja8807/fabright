
"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import styles from "./ScrollToTop.module.scss";

export default function ScrollToTop({
  showAfter = 200,
  size = 56,
  strokeWidth = 3,
}) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const progress =
        scrollHeight > 0
          ? Math.min((scrollTop / scrollHeight) * 100, 100)
          : 0;

      setScrollProgress(progress);
      setIsVisible(scrollTop > showAfter);

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    updateProgress();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [showAfter]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      className={`${styles.scrollToTop} ${
        isVisible ? styles.visible : ""
      }`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      style={{
        "--progress": `${scrollProgress}%`,
        "--button-size": `${size}px`,
        "--stroke-width": `${strokeWidth}px`,
      }}
      tabIndex={isVisible ? 0 : -1}
      aria-hidden={!isVisible}
    >
      <span className={styles.progressBorder}>
        <span className={styles.arrow}>
          <ArrowUp size={22} strokeWidth={2} />
        </span>
      </span>
    </button>
  );
}