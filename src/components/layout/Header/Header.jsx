import React from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import CustomContainer from "@/components/ui/CustomContainer/CustomContainer";
import { Image } from "react-bootstrap";
import FONTS from "@/styles/fonts";
import MenuButton from "./MenuButton/MenuButton";
import { NAV_LINKS } from "@/constants/constants";

export default function Header() {


  return (
    <header className={styles.Header}
    data-aos='fade-down'
    >
      <CustomContainer lg>
        <div className={styles.headerCont}>
          <div className={styles.logo}>
            <Image src={"/logo/logo.png"} width={180} alt="logo" />
          </div>

          <nav>
            <ul>
              {NAV_LINKS.map((link, idx) => {
                return (
                  <li
                    key={link.title}
                    className={idx === 0 ? styles.active : ""}
                  >
                    <Link href={link.href} className={FONTS.font2}>
                      {link.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className={styles.call}>
            <Link href={"#"}>
              <h4>+91 98765 41230</h4>
            </Link>
            <p>Call Us Anytime</p>
          </div>

          <MenuButton/>
        </div>
      </CustomContainer>
    </header>
  );
}
