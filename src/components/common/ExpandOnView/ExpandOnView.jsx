
"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./ExpandOnView.module.scss";

export default function ExpandOnView({
  children,
  className = "",
  direction = "left",
  delay = 0,
  duration = 1000,
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const directions = {
    left: {
      hidden: "inset(0 100% 0 0)",
      visible: "inset(0 0 0 0)",
    },
    right: {
      hidden: "inset(0 0 0 100%)",
      visible: "inset(0 0 0 0)",
    },
    top: {
      hidden: "inset(0 0 100% 0)",
      visible: "inset(0 0 0 0)",
    },
    bottom: {
      hidden: "inset(100% 0 0 0)",
      visible: "inset(0 0 0 0)",
    },
  };

  const selectedDirection =
    directions[direction] || directions.left;

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.wipe} ${className}`}
      style={{
        "--wipe-hidden": selectedDirection.hidden,
        "--wipe-visible": selectedDirection.visible,
        "--wipe-duration": `${duration}ms`,
        "--wipe-delay": `${delay}ms`,
        "--wipe-state": isVisible ? 1 : 0,
      }}
    >
      {children}
    </div>
  );
}