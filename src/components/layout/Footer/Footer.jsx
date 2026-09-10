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
  FaPinterestP,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const contacts = [
    {
      title: "Call For Services",
      cont: "+91 98765 3214",
      icon: <BsTelephoneFill />,
    },
    {
      title: "Send Us Email",
      cont: "support@fabright.in",
      icon: <BsEnvelopeAtFill />,
    },
    {
      title: "Visit Our Location",
      cont: "Hyderabad, Telangana",
      icon: <BsGeoAltFill />,
    },
  ];

  return (
    <div className={styles.Footer}>
      <CustomContainer>
        <div className={styles.contact}>
          {contacts.map((c) => {
            return (
              <Link href={"#"} key={c.title} className={styles.contactBox}>
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
              <Link href="#" aria-label="Twitter">
                <FaTwitter />
              </Link>

              <Link href="#" aria-label="Facebook">
                <FaFacebookF />
              </Link>

              <Link href="#" aria-label="Instagram">
                <FaInstagram />
              </Link>

              <Link href="#" aria-label="Pinterest">
                <FaPinterestP />
              </Link>

              <Link href="#" aria-label="YouTube">
                <FaYoutube />
              </Link>
            </div>
          </div>

          <div className={styles.links}>
            <h5>Quick Links</h5>
            <Link href={"#"}>Home</Link>
            <Link href={"#"}>About Us</Link>
            <Link href={"#"}>Solutions</Link>
            <Link href={"#"}>Projects</Link>
            <Link href={"#"}>Sustainability</Link>
          </div>

          <div className={styles.address}>
            <h2>FABRIGHT SOLUTIONS PRIVATE LIMITED</h2>
            <p>
              T-Hub Phase 2, 20, Inorbit Mall Rd,<br/> 
              Vittal Rao Nagar, Madhapur,<br/>
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
