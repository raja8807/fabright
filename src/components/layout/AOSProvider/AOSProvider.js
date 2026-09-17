"use client";

import { useEffect, useState } from "react";
import AOS from "aos";

import "aos/dist/aos.css";
import styles from "./AOSProvider.module.scss";
import { Image } from "react-bootstrap";
import ExpandOnView from "@/components/common/ExpandOnView/ExpandOnView";

export default function AOSProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  // Minimum preloader duration
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  // Hide preloader and initialize AOS
  useEffect(() => {
    if (isLoading) return;

    const timer = setTimeout(() => {
      setIsHidden(true);

      AOS.init({
        duration: 800,
        easing: "ease-out-cubic",
        once: false,
        offset: 100,
        delay: 0,
        mirror: false,
        debounceDelay: 0,
        throttleDelay: 0,
      });

      AOS.refreshHard();
    }, 700);

    return () => clearTimeout(timer);
  }, [isLoading]);

  return (
    <>
      {!isHidden && (
        <div className={`${styles.preloader} ${!isLoading ? styles.hide : ""}`}>
          <ExpandOnView className={styles.loader}>
            <Image src="/logo/logo-s.png" alt="logo" height={100} />
          </ExpandOnView>
        </div>
      )}

      {children}
    </>
  );
}
