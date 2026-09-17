import React from "react";
import styles from "./Solutions.module.scss";
import CustomContainer from "@/components/ui/CustomContainer/CustomContainer";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";
import { Image } from "react-bootstrap";
import CustomButton from "@/components/ui/CustomButton/CustomButton";
import ExpandOnView from "@/components/common/ExpandOnView/ExpandOnView";
const SolutionsSection = () => {
  const CARDS = [
    {
      title: "Solar Rooftops",
      text: "Clean energy, right on top.",
      icon: "/images/solutions/1.png",
    },
    {
      title: "Solar Street Lights ",
      text: "Brightening nights with the power of the sun.",
      icon: "/images/solutions/2.png",
    },
    {
      title: "Solar Insect Traps",
      text: "Eco-friendly pest control, powered by nature.",
      icon: "/images/solutions/3.png",
    },
    {
      title: "Prefabrication Solutions",
      text: "Smarter, faster, and greener construction.",
      icon: "/images/solutions/4.png",
    },
    {
      title: "Mezzanine Floors",
      text: "Maximizing space with efficiency and innovation.",
      icon: "/images/solutions/5.png",
    },
    {
      title: "Solar Water Pumps",
      text: "Sustainable water solutions, straight from the sun.",
      icon: "/images/solutions/6.png",
    },
   
  ];

  return (
    <section className={styles.SolutionsSection}>
      <CustomContainer lg>
        <div className={styles.head}>
          <div className={styles.header}>
            <SectionHeader
              variant={2}
              head={
                "Our Solutions: Turning the Sun’s Power into Sustained Energy"
              }
            />
          </div>
          <ExpandOnView direction="bottom" className={styles.float} data-aos="fade-up"></ExpandOnView>
        </div>
      </CustomContainer>
      <div className={styles.cards}>
        {CARDS.map((c,idx) => {
          return (
            <div key={c.title} className={styles.card}
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
            
            >
              <Image src={c.icon} alt="icon" />
              <h5>{c.title}</h5>
              <p>{c.text}</p>
            </div>
          );
        })}
      </div>
      <div className={styles.btn}>
        <CustomButton>Discover Our Solar Solutions</CustomButton>
      </div>
    </section>
  );
};

export default SolutionsSection;
