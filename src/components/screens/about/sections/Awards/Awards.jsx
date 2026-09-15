import React from "react";
import styles from "./Awards.module.scss";
import CustomContainer from "@/components/ui/CustomContainer/CustomContainer";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";
import { Image } from "react-bootstrap";
import CustomButton from "@/components/ui/CustomButton/CustomButton";

const AwardsSection = () => {
  return (
    <section className={styles.AwardsSection}>
      <div className={styles.overlay}></div>
      <CustomContainer>
        <div className={styles.cont}>
          <div className={styles.left}>
            <SectionHeader
              title="Awards & Recognitions"
              head="Recognition That Fuels Our Purpose"
              variant={2}
              caption={
                <>
                  At Fabright Solutions, success is measured in the impact we
                  create. Every solar panel we install, every innovation we
                  bring to life, and every step we take toward a carbon-free
                  world is driven by a shared purpose: to build a cleaner, more
                  sustainable future.
                  <br />
                  <br />
                  Along this journey, we’ve been honored with awards that
                  recognize our commitment to sustainability, innovation, and
                  the people who make it all possible. These accolades are
                  reminders that every effort we put into creating eco-friendly
                  solutions and fostering a positive, inclusive workplace is
                  making a real difference.
                </>
              }
            />
            {/* <CustomButton variant={2}>Explore More</CustomButton> */}
          </div>
          <div className={styles.right} data-aos="zoom-out">
            <Image src={"/images/award.png"} alt="eco-friendly" fluid />
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default AwardsSection;
