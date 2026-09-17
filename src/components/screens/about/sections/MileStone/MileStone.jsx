import React from "react";
import styles from "./MileStone.module.scss";
import CustomContainer from "@/components/ui/CustomContainer/CustomContainer";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";
import { Image } from "react-bootstrap";
import CustomButton from "@/components/ui/CustomButton/CustomButton";
import ExpandOnView from "@/components/common/ExpandOnView/ExpandOnView";

const MileStoneSection = () => {
  return (
    <section className={styles.FriendlinessSection}>
      <CustomContainer>
        <div className={styles.cont}>
          <div className={styles.left}>
            <SectionHeader
              title="Milestones"
              head="Milestones That Define Our Legacy"
              caption={
                <>
                  1,500+ Tons of CO₂ Eliminated – Our solar installations make a
                  tangible impact, reducing emissions equivalent to planting
                  60,000 trees every year.
                  <br />
                  40% Faster Construction – Prefabrication is revolutionizing
                  the way India builds—smarter, faster, and greener.
                  <br />
                  Fabverse: Experience Solar in the Metaverse – Explore,
                  customize, and visualize solar solutions in our interactive
                  platform before making a decision.
                  <br />
                  24/7 Smart Support – Our WhatsApp Service Chatbot provides
                  instant answers, product guidance, and real-time support
                  anytime you need it.
                </>
              }
            />
            <CustomButton variant={2}>Explore More</CustomButton>
          </div>
          <ExpandOnView className={styles.right} data-aos="zoom-out">
            <Image src={"/images/milestone.png"} alt="eco-friendly" fluid />
          </ExpandOnView>
        </div>
      </CustomContainer>
    </section>
  );
};

export default MileStoneSection;
