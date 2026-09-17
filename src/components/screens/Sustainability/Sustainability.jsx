import PageHero from "@/components/common/PageHero/PageHero";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";
import CustomContainer from "@/components/ui/CustomContainer/CustomContainer";
import React from "react";
import styles from "./Sustainability.module.scss";
import SustainabilityVisual from "./Sustainability/SustainabilityVisual";
import CustomButton from "@/components/ui/CustomButton/CustomButton";

const SustainabilityScreen = () => {
  return (
    <div className={styles.SustainabilityScreen}>
      <PageHero
        title="Sustainability"
        head="Sustainable Progress with A Purpose"
      />

      <CustomContainer>
        <div className={styles.wrap}>
          <SustainabilityVisual />

          <SectionHeader
            title={"Sustainability"}
            head={"Empowering a Greener Future"}
            caption={
              <>
                At Fabright, sustainability isn&apso;t a checkbox—it&apos;s the
                heart of everything we do. Our mission extends beyond delivering
                top-tier energy solutions; we strive to create lasting change
                for both people and the planet.
                <br />
                <br />
                We don’t just talk about Environmental, Social, and Governance
                (ESG) principles—we practice what we preach. For us, ESG is a
                promise to the communities we serve and the teams we empower.
                Innovation, responsibility, and impact drive us forward, making
                Fabright more than an industry leader - a company that truly
                cares.
                <br />
                <br />
                Our commitment is built into every process. We use energy-smart
                manufacturing, deploy industrial-grade robotics, and integrate
                advanced software to maximize efficiency. With solar-powered
                facilities, we generate 3 MW of clean energy, ensuring our
                production runs on the same solutions we deliver to the world.
                <br />
                <br />
                <br />
                <CustomButton variant={2}>Contact Us</CustomButton>
              </>
            }
          />
        </div>
      </CustomContainer>
    </div>
  );
};

export default SustainabilityScreen;
