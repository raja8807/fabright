"use client";

import React from "react";
import styles from "./Choose.module.scss";
import CustomContainer from "@/components/ui/CustomContainer/CustomContainer";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";
import { Carousel, Image } from "react-bootstrap";

const Card = ({ data }) => {
  return (
    <div className={styles.card}
              data-aos="fade-left"
    
    >
      <div className={styles.txt}>
        <h3>{data.title}</h3>

        <p>{data.text}</p>
      </div>

      <div className={styles.img}>
        <div className={styles.icon}>
          <Image src={data.icon} alt="" fluid />
        </div>
      </div>
    </div>
  );
};

const ChooseSection = () => {
  const cards = [
    {
      title: "Expertise You Can Trust. Innovation That Leads.",
      text: "Our experienced team delivers reliable solar solutions using modern technology.",
      icon: "/images/feature-icon-1.png",
    },
    {
      title: "Smart Solar Solutions for a Sustainable Future.",
      text: "We design smart and sustainable solutions tailored to your energy needs.",
      icon: "/images/feature-icon-2.png",
    },
    {
      title: "Efficient, Cost-Effective, and Built to Last.",
      text: "Our systems are designed for maximum efficiency, long-term performance, and value.",
      icon: "/images/feature-icon-3.png",
    },
    {
      title: "Round-the-clock Support every Step of the Way",
      text: "From installation to maintenance, our team is always here to support you.",
      icon: "/images/feature-icon-4.png",
    },
  ];

  return (
    <section className={styles.ChooseSection}>
      <div className={styles.overlay} />

      <CustomContainer>
        <div className={styles.cont}>
          <SectionHeader
            head="Choose Solar Right, Choose Fabright."
            variant={2}
            title="Services"
            caption="We’re finding ways to bring energy to more people in more ways every day, so that all of us can be part of the changing energy system. Because Powering Progress."
          />
        </div>
      </CustomContainer>

      {/* Desktop */}
      <div className={styles.cards}>
        {cards.map((card) => (
          <Card key={card.title} data={card} />
        ))}
      </div>

      {/* Mobile */}
      <div className={styles.cardsSm}>
        <Carousel
          interval={4000}
          controls
          indicators
          pause={false}
          touch
          wrap
        >
          {cards.map((card) => (
            <Carousel.Item key={card.title}>
              <Card data={card} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default ChooseSection;