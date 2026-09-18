import React from "react";
import styles from "./WorkProcess.module.scss";
import CustomContainer from "@/components/ui/CustomContainer/CustomContainer";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";
import { Image } from "react-bootstrap";
import CustomButton from "@/components/ui/CustomButton/CustomButton";
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
      <CustomContainer lg>
        <div className={styles.head}>
          <div className={styles.header}>
            <SectionHeader
              variant={2}
              title={"Work Process"}
              head={"Precision in Every Step, Excellence in Every Project"}
            />
          </div>
          <div className={styles.float} data-aos="fade-up"></div>
        </div>

        <div className={styles.cards}>
          {CARDS.map((c) => {
            return (
              <div key={c.title} className={styles.card} data-aos="zoom-in">
                {/* <Image src={c.icon} alt="icon" /> */}
                <h5>{c.title}</h5>
                <p>{c.text}</p>
              </div>
            );
          })}
        </div>
      </CustomContainer>
      <div className={styles.btn}>
        <CustomButton>Discover Our Solar Solutions</CustomButton>
      </div>
    </section>
  );
};

export default WorkProcessSection;
