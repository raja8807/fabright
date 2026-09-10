import React from "react";
import styles from "./Friendliness.module.scss";
import CustomContainer from "@/components/ui/CustomContainer/CustomContainer";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";
import { Image } from "react-bootstrap";
import CustomButton from "@/components/ui/CustomButton/CustomButton";

const FriendlinessSection = () => {
  return (
    <section className={styles.FriendlinessSection}>
      <CustomContainer>
        <div className={styles.cont}>
          <div className={styles.left}>
            <SectionHeader
              title="Eco-Friendliness"
              head="Inspired by Nature. Sustained for Nature."
              caption="At Fabright, sustainability drives everything we do. Our mission is to deliver cutting-edge, energy-efficient solutions and premium products that empower a brighter future for both the planet and its people. We are dedicated to working in harmony with nature, continually evolving to make meaningful strides toward a cleaner, greener world, and fostering sustainable progress every step of the way."
            />
            <CustomButton variant={2}>Explore More</CustomButton>
          </div>
          <div className={styles.right}
              data-aos="zoom-out"
          
          >
            <Image src={"/images/eco-friendly.jpg"} alt="eco-friendly" fluid />
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default FriendlinessSection;
