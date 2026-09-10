"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Offcanvas, Image } from "react-bootstrap";
import styles from "./MenuButton.module.scss";

const NAV_LINKS = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "Solutions", href: "/solutions" },
  { title: "Projects", href: "/projects" },
  { title: "Sustainability", href: "/sustainability" },
];

const MenuButton = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button
        className={styles.MenuButton}
        onClick={() => setShow(true)}
      >
        <Menu size={30} color="white" />
      </button>

      <Offcanvas
        show={show}
        onHide={() => setShow(false)}
        placement="end"
        className={styles.offcanvas}
      >
        <Offcanvas.Header closeButton>
          <Image
            src="/logo/logo.png"
            width={180}
            alt="Logo"
          />
        </Offcanvas.Header>

        <Offcanvas.Body>
          <nav className={styles.menu}>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                onClick={() => setShow(false)}
              >
                {link.title}
              </Link>
            ))}
          </nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default MenuButton;