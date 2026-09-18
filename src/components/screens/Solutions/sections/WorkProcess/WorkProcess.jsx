import React from "react";
import styles from "./WorkProcess.module.scss";
import CustomContainer from "@/components/ui/CustomContainer/CustomContainer";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";

import CustomButton from "@/components/ui/CustomButton/CustomButton";
import { Image } from "react-bootstrap";
import ExpandOnView from "@/components/common/ExpandOnView/ExpandOnView";
const WorkProcessSection = () => {
  const CARDS = [
    {
      title: "Energy Needs Assessment",
      text: "We begin by understanding your specific energy needs, whether for solar power or prefabrication solutions, ensuring a tailored approach.",
      icon: "/images/solutions/sunlight-icon-1.png",
    },
    {
      title: "Customized Solution Design",
      text: "Our experts craft personalized energy solutions, optimized for efficiency, sustainability, and long-term performance.",
      icon: "/images/solutions/sunlight-icon-2.png",
    },
    {
      title: "Seamless Installation",
      text: "We execute installations with precision, ensuring minimal disruption while maintaining top-tier quality and compliance standards.",
      icon: "/images/solutions/sunlight-icon-3.png",
    },
    {
      title: "Ongoing Support & Optimization",
      text: "Post-installation, we provide continuous support, monitoring, and maintenance to maximize efficiency and sustainability.",
      icon: "/images/solutions/sunlight-icon-4.png",
    },
  ];

  return (
    <section className={styles.WorkProcessSection}>
      <CustomContainer>
        <SectionHeader
          variant={2}
          centered
          head={"Work Process"}
          caption={"Precision in Every Step, Excellence in Every Project"}
        />
        <div className={styles.wrap}>
          <div className={styles.left}>
            {CARDS.map((card, idx) => {
              return (
                <ExpandOnView
                  delay={idx * 100}
                  key={card.title}
                  className={styles.card}
                >
                  <h4>{card.title}</h4>
                  <p>{card.text}</p>
                </ExpandOnView>
              );
            })}
          </div>

          <div className={styles.right} data-aos="fade-up">
            <Image src={"/images/solution-indian.webp"} alt="solution" fluid />
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default WorkProcessSection;
