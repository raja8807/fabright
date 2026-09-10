import React from "react";
import styles from "./Solutions.module.scss";
import CustomContainer from "@/components/ui/CustomContainer/CustomContainer";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";
import { Image } from "react-bootstrap";
import CustomButton from "@/components/ui/CustomButton/CustomButton";
const SolutionsSection = () => {
  const CARDS = [
    {
      title: "Solar Rooftops",
      text: "Clean energy, right on top.",
      icon: "/images/solutions/sunlight-icon-1.png",
    },
    {
      title: "Solar Street Lights ",
      text: "Brightening nights with the power of the sun.",
      icon: "/images/solutions/sunlight-icon-2.png",
    },
    {
      title: "Solar Insect Traps",
      text: "Eco-friendly pest control, powered by nature.",
      icon: "/images/solutions/sunlight-icon-3.png",
    },
    {
      title: "Prefabrication Solutions",
      text: "Smarter, faster, and greener construction.",
      icon: "/images/solutions/sunlight-icon-4.png",
    },
    {
      title: "Mezzanine Floors",
      text: "Maximizing space with efficiency and innovation.",
      icon: "/images/solutions/sunlight-icon-5.png",
    },
    {
      title: "Solar Water Pumps",
      text: "Sustainable water solutions, straight from the sun.",
      icon: "/images/solutions/sunlight-icon-6.png",
    },
    // {
    //   title: "Solar Rooftops 4",
    //   text: "We offer professional solar panel installation services .Team of experienced technicians will ensure it is installed correctly.",
    // },
    // {
    //   title: "Solar Rooftops 5",
    //   text: "We offer professional solar panel installation services .Team of experienced technicians will ensure it is installed correctly.",
    // },
    // {
    //   title: "Solar Rooftops 6",
    //   text: "We offer professional solar panel installation services .Team of experienced technicians will ensure it is installed correctly.",
    // },
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
          <div className={styles.float} data-aos="fade-up"></div>
        </div>
      </CustomContainer>
      <div className={styles.cards}>
        {CARDS.map((c) => {
          return (
            <div key={c.title} className={styles.card}
              data-aos="zoom-in"
            
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
