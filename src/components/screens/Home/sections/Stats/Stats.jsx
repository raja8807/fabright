"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Stats.module.scss";
import CustomContainer from "@/components/ui/CustomContainer/CustomContainer";
import FONTS from "@/styles/fonts";

const STATS = [
  {
    id: 1,
    value: 20,
    suffix: "+",
    label: "Employees",
    description:
      "We have 20+ amazing expert solar experts for repair & installation",
  },
  {
    id: 2,
    value: 100,
    suffix: "%",
    label: "Client Satisfaction",
    description: "We achieved 100% of our client satisfaction through our work",
  },
  {
    id: 3,
    value: 5,
    suffix: "K+",
    label: "Installation",
    description:
      "We have 20 years of experience in installing panels for our clients.",
  },
];

function AnimatedCounter({ value, suffix, animate }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!animate) return;

    let startTime = null;
    const duration = 2000;

    let animationFrame;

    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Ease-out animation
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(easedProgress * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      } else {
        setCount(value);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(animationFrame);
  }, [animate, value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.stats} ref={sectionRef}>
      <CustomContainer>
        <div className={styles.container}>
          {STATS.map((stat) => (
            <div className={styles.statItem} key={stat.id}>
              <div className={styles.statNumber}>
                <h2 className={FONTS.font2}>
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    animate={isVisible}
                  />
                </h2>

                <h3>{stat.label}</h3>
              </div>

              <p className={styles.description}>{stat.description}</p>
            </div>
          ))}
        </div>
      </CustomContainer>
    </section>
  );
}
