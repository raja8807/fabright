import React from "react";
import styles from "./Hero.module.scss";
import CustomContainer from "@/components/ui/CustomContainer/CustomContainer";
import FONTS from "@/styles/fonts";
import { Image } from "react-bootstrap";
import Header from "@/components/layout/Header/Header";
import CustomButton from "@/components/ui/CustomButton/CustomButton";

const Hero = () => {
  return (
    <section className={styles.hero}>
      

      <div className={styles.overlay}></div>

      <Image
        className={styles.img}
        src={"/images/hero-workers.png"}
        alt="hero-workers"
        data-aos="fade-up"
      />

      <CustomContainer lg>
        <div className={styles.cont}>
          <div className={styles.left}>
            <p className={FONTS.font2} data-aos="fade-right">
              {" "}
              FABRIGHT SOLAR ENERGY SERVICES{" "}
            </p>
            <h1 className={FONTS.font2} data-aos="fade-right">
              Fueling Tomorrow with the
              <br />
              <span>Sun&apos;s Infinite Energy</span>
            </h1>
            <h2 data-aos="fade-right">
              We believe in sustainable energy practices that can help topnotch
              solar panel installation services.
            </h2>
            <div data-aos="fade-right">
              <CustomButton
              href={'#about'}
              >Explore Fabright</CustomButton>
            </div>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default Hero;
