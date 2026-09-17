import CustomContainer from "@/components/ui/CustomContainer/CustomContainer";
import React from "react";
import styles from "./About.module.scss";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";
import { CheckCircle, CheckCircle2 } from "lucide-react";
import FONTS from "@/styles/fonts";
import CustomButton from "@/components/ui/CustomButton/CustomButton";
import { Image } from "react-bootstrap";
import AboutVisual from "./AboutVisual/AboutVisual";

const AboutSection = () => {
  return (
    <section className={styles.AboutSection}>
      <CustomContainer lg>
        <div className={styles.wrap}>
          <div className={styles.left} data-aos="fade-right">
            <AboutVisual />
          </div>
          <div className={styles.right}>
            <SectionHeader
              title={"About Us"}
              caption={`
              At Fabright, we don’t just believe in sustainability—we build it, harness it, and bring it to life. Every sunrise reminds us of what’s possible when we harness nature’s most abundant power source. Sustainability is the foundation of everything we do!.
              `}
              head={"Powering a Greener Tomorrow with Every Sunshine"}
            />

            <p data-aos="fade-left">
              Our technology powers both everyday moments and society’s boldest
              leaps forward. When you choose Fabright, you’re not just switching
              to clean energy—you’re switching on progress. We make
              sustainability effortless, blending innovation with real-world
              impact to create energy solutions that work for you and the
              planet.
            </p>

            <div className={styles.points}>
              <h4 className={FONTS.font2}
              
              data-aos="fade-down"
              >Fabright Solar Energy specialty:</h4>
              <div className={styles.gridWrap}>
                <p data-aos="fade-left">
                  <CheckCircle2 />
                  Custom Solar Solutions
                </p>
                <p data-aos="fade-left">
                  <CheckCircle2 />A Customer-First Experience
                </p>
                <p data-aos="fade-left">
                  <CheckCircle2 />
                  ISO-Certified Excellence
                </p>
                <p data-aos="fade-left">
                  <CheckCircle2 />
                  Incubated by Visionaries
                </p>
              </div>
            </div>

            <CustomButton variant={2}>Explore More</CustomButton>
          </div>
        </div>
        {/* 
        <div className={styles.bot}>
          <div className={styles.botLeft}>
            <SectionHeader
              caption={`
            Imagine a world where you can explore, customize, and visualize solar solutions—all before making a single investment. Fabverse makes this dream a reality! Our interactive metaverse platform lets you step into a digital world where you can see exactly how solar panels, streetlights, and other solutions fit into your space. No guesswork—just a hands-on way to make informed, confident choices about sustainable energy.
            `}
              head={"Step into the Next-Gen Sustainable Power with Fabverse"}
            />
            <SectionHeader
              caption={`
            Your time matters, and so do your questions. Our WhatsApp Service Chatbot puts decades of solar expertise right at your fingertips, 24 hours a day. Need quick answers about your solar system? Technical support in the middle of the night? Or just curious about how to optimize your energy usage? Message us anytime. Our intelligent assistant transforms complex solar questions into clear, actionable solutions instantly.
            `}
              head={"24/7 Smart Support, Always Within Reach"}
            />
          </div>

          <div className={styles.botRight}>
            <Image src={"/images/home-about.webp"} alt="home-about" fluid />
          </div>
        </div> */}
      </CustomContainer>
    </section>
  );
};

export default AboutSection;

//

//
