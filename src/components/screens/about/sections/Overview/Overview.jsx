import CustomContainer from "@/components/ui/CustomContainer/CustomContainer";
import React from "react";
import styles from "./Overview.module.scss";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";
import { Image } from "react-bootstrap";

const OverviewSection = () => {
  return (
    <div className={styles.OverviewSection}>
        <div className={styles.overlay}></div>
      <CustomContainer>
        <div className={styles.wrap}>
          <SectionHeader
            title={"About Us"}
            head={"Go Solar, Go Smart—because the future doesn’t wait!"}
            caption={
              "'Go Solar, Go Smart' is beyond just a phrase to us. It's a movement about taking control of your future with the limitless power of the sun to fuel your home, your business, and a cleaner planet."
            }
            variant={2}
          />

          <div className={styles.right} data-aos="fade-left">
            <Image src={"/logo/logo.png"} alt="about-logo" fluid />
          </div>
        </div>
      </CustomContainer>
    </div>
  );
};

export default OverviewSection;
