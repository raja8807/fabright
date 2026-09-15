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
      title: "Custom Solar Solutions",
      text: "Designed to fit your space, your needs, and your future.",
      icon: "/images/feature-icon-1.png",
    },
    {
      title: "A Customer-First Experience",
      text: "Transparent process, exceptional service, and 24/7 support—because you deserve the best.",
      icon: "/images/feature-icon-2.png",
    },
    {
      title: "ISO-Certified Excellence",
      text: "Backed by ISO certification, we deliver a promise of durability through storms, stability through change, and energy you can count on for years to come.",
      icon: "/images/feature-icon-3.png",
    },
    {
      title: "Incubated by Visionaries",
      text: "Being backed by T-Hub, India's largest tech incubator, fuels our drive for innovation and bold breakthroughs.",
      icon: "/images/feature-icon-4.png",
    },
  ];

  return (
    <section className={styles.ChooseSection}>
      <div className={styles.overlay} />

      <CustomContainer>
        <div className={styles.cont}>
          <SectionHeader
            head="Why Choose Fabright."
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