import CustomContainer from "@/components/ui/CustomContainer/CustomContainer";
import React from "react";
import styles from "./Journey.module.scss";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";
import { CheckCircle, CheckCircle2 } from "lucide-react";
import FONTS from "@/styles/fonts";
import CustomButton from "@/components/ui/CustomButton/CustomButton";

import AboutVisual from "./Journey/JourneyVisual";

const JourneySection = () => {
  return (
    <section className={styles.AboutSection}>
      <CustomContainer lg>
        <div className={styles.wrap}>
          <div className={styles.left} data-aos="fade-right">
            <AboutVisual />
          </div>
          <div className={styles.right}>
            <SectionHeader
              title={"Our Journey"}
              caption={
                <>
                  Founded in 2022 in the vibrant city of Hyderabad, we set out
                  with a clear mission—to make solar power the heart of global
                  energy systems. In just two years, we&apos;ve transformed from
                  an ambitious idea into a force of innovation, delivering{" "}
                  <strong>55+ successful projects</strong> across India and the
                  Middle East.
                </>
              }
              head={
                "clean energy should be the future, and the future starts now."
              }
            />

            <p data-aos="fade-left">
              Our journey is fueled by passion, precision, and purpose. With
              cutting-edge solar technology and a deep commitment to
              sustainability, we empower businesses and communities to embrace
              renewable energy without compromise. Backed by T-Hub and the
              Government of Telangana, we continue pushing boundaries, ensuring
              every installation is built with expertise, efficiency, and
              excellence.
            </p>



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

export default JourneySection;

//

//
