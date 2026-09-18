import React from "react";
import styles from "./Footer.module.scss";
import CustomContainer from "@/components/ui/CustomContainer/CustomContainer";
import {
  BsEnvelopeAt,
  BsEnvelopeAtFill,
  BsGeoAlt,
  BsGeoAltFill,
  BsTelephoneFill,
} from "react-icons/bs";
import FONTS from "@/styles/fonts";
import Link from "next/link";
import { Image } from "react-bootstrap";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaPinterestP,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import { CONTACT_DETAILS } from "@/constants/contact_details";
import { NAV_LINKS } from "@/constants/constants";

const Footer = () => {
  const contacts = [
    {
      title: "Call For Services",
      cont: CONTACT_DETAILS.phone.text,
      icon: <BsTelephoneFill />,
      href: `tel:${CONTACT_DETAILS.phone.number}`,
    },
    {
      title: "Send Us Email",
      cont: CONTACT_DETAILS.email,
      icon: <BsEnvelopeAtFill />,
      href: `mailto:${CONTACT_DETAILS.email}`,
    },
    {
      title: "Visit Our Location",
      cont: "Hyderabad, Telangana",
      icon: <BsGeoAltFill />,
      href: "#",
    },
  ];

  return (
    <div className={styles.Footer}>
      <ScrollToTop />
      <CustomContainer>
        <div className={styles.contact}>
          {contacts.map((c) => {
            return (
              <Link href={c.href} key={c.title} className={styles.contactBox}>
                <div className={styles.content}>
                  <div className={styles.icon}>{c.icon}</div>
                  <div className={styles.text}>
                    <p className={FONTS.font1}>{c.title}</p>
                    <h5 className={FONTS.font2}>{c.cont}</h5>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className={styles.body}>
          <div className={styles.brand}>
            <Image src={"/logo/logo.png"} alt="logo" width={200} />

            <div className={styles.socials}>
              <Link
                target="_blank"
                href="https://www.facebook.com/share/1HrSHZTH5y/?mibextid=wwXIfr"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </Link>

              <Link
                target="_blank"
                href="https://www.instagram.com/fabrightsolutions?igsh=d2R3aWoxaTd0M2Fp"
                aria-label="Instagram"
              >
                <FaInstagram />
              </Link>

              <Link
                target="_blank"
                href="https://www.linkedin.com/company/fabright/"
                aria-label="YouTube"
              >
                <FaLinkedin />
              </Link>

              <Link target="_blank" href="#" aria-label="YouTube">
                <FaYoutube />
              </Link>
            </div>
          </div>

          <div className={styles.links}>
            <h5>Quick Links</h5>
            {NAV_LINKS.map((link) => {
              return (
                <Link key={link.title} href={link.href}>
                  {link.title}
                </Link>
              );
            })}
          </div>

          <div className={styles.address}>
            <h2>FABRIGHT SOLUTIONS PRIVATE LIMITED</h2>
            <p>
              T-Hub Phase 2, 20, Inorbit Mall Rd,
              <br />
              Vittal Rao Nagar, Madhapur,
              <br />
              Hyderabad, Telangana - 500081.
            </p>
            <strong>36AAFCF2532A1Z8</strong>
          </div>
        </div>
      </CustomContainer>
    </div>
  );
};

export default Footer;
