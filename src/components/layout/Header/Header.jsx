"use client";

import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CustomContainer from "@/components/ui/CustomContainer/CustomContainer";
import { Image } from "react-bootstrap";
import FONTS from "@/styles/fonts";
import MenuButton from "./MenuButton/MenuButton";
import { NAV_LINKS } from "@/constants/constants";
import { Headset } from "lucide-react";
import ExpandOnView from "@/components/common/ExpandOnView/ExpandOnView";
import { CONTACT_DETAILS } from "@/constants/contact_details";

export default function Header() {
  const pathname = usePathname();

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show header at the top
      if (currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${styles.Header} ${isVisible ? styles.show : styles.hide}`}
      data-aos="fade-down"
    >
      <ExpandOnView direction="top"
      delay={1000}
      >
        <CustomContainer lg>
          <div className={styles.headerCont}>
            {/* Logo */}
            <Link href="/" className={styles.logo}>
              <Image src="/logo/logo.png" width={180} alt="logo" />
            </Link>

            {/* Navigation */}
            <nav>
              <ul>
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;

                  return (
                    <li
                      key={link.title}
                      className={isActive ? styles.active : ""}
                    >
                      <Link href={link.href} className={FONTS.font2}>
                        {link.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Contact */}
            <div className={styles.call}>
              <div className={styles.rotate}>
                <Headset size={22} />
              </div>

              <div className={styles.lnk}>
                <Link href={`tel:${CONTACT_DETAILS.phone.number}`}>
                  <h4>{CONTACT_DETAILS.phone.text}</h4>
                </Link>
                <p>Call Us Anytime</p>
              </div>
            </div>

            {/* Mobile Menu */}
            <MenuButton />
          </div>
        </CustomContainer>
      </ExpandOnView>
    </header>
  );
}
