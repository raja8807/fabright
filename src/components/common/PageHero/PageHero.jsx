import React from "react";
import styles from "./PageHero.module.scss";
import CustomContainer from "@/components/ui/CustomContainer/CustomContainer";
import SectionHeader from "../SectionHeader/SectionHeader";
import { Image } from "react-bootstrap";

const PageHero = ({
  title = "",
  head = "",
  caption = "",
  img = "",
  bgImg = "/images/solar.webp",
}) => {
  return (
    <section
      className={styles.PageHero}
      style={{
        backgroundImage: `url("${bgImg}")`,
      }}
    >
      <div className={styles.overlay}></div>
      <CustomContainer>
        <div className={styles.wrap}>
          <SectionHeader
            title={title}
            head={head}
            caption={caption}
            variant={2}
          />

          {img && (
            <div className={styles.right} data-aos="fade-left">
              <Image src={img} alt="about-logo" fluid />
            </div>
          )}
        </div>
      </CustomContainer>
    </section>
  );
};

export default PageHero;
