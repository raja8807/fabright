import React from "react";
import styles from "./MisionVision.module.scss";
import CustomContainer from "@/components/ui/CustomContainer/CustomContainer";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";

const MisionVisionSection = () => {
  //

  // To deliver premium solar and fabrication solutions that make clean energy accessible and rewarding for all.
  // Our Vision

  // To pioneer the global transition to renewable energy by empowering businesses and communities with innovative solar solutions that optimize performance, reduce environmental impact, and create lasting economic value.

  return (
    <section className={styles.MisionVisionSection}>
      <CustomContainer>
        <div className={styles.wrap}>
          <SectionHeader
            title={"Our Mission"}
            caption={
              "To deliver premium solar and fabrication solutions that make clean energy accessible and rewarding for all."
            }
          />
          <SectionHeader
            title={"Our Vision"}
            caption={
              "To pioneer the global transition to renewable energy by empowering businesses and communities with innovative solar solutions that optimize performance, reduce environmental impact, and create lasting economic value."
            }
          />
        </div>
      </CustomContainer>
    </section>
  );
};

export default MisionVisionSection;
