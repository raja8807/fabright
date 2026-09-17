import SectionHeader from "@/components/common/SectionHeader/SectionHeader";
import CustomContainer from "@/components/ui/CustomContainer/CustomContainer";
import React from "react";
import styles from "./SolarSolutions.module.scss";
import FONTS from "@/styles/fonts";
import { Plus } from "lucide-react";
import ExpandOnView from "@/components/common/ExpandOnView/ExpandOnView";

const ProjectCard = ({ data }) => {
  return (
    <div className={styles.ProjectCard} data-aos="fade-up">
      <ExpandOnView className={styles.imgWrap}>
        <div
          className={styles.img}
          style={{
            backgroundImage: `url("${data.images}")`,
          }}
        ></div>
      </ExpandOnView>
      <div className={styles.txt}>
        {/* <div className={styles.button}>
          <Plus />
        </div> */}
        <h3 className={FONTS.font2}>{data.name}</h3>
        <p>{data.text}</p>
      </div>
    </div>
  );
};

const SolarSolutionsSection = () => {
  const projects = [
    {
      title: "raghav",
      text: (
        <>
          Turn your rooftop into a powerhouse! Our high-performance mono PERC
          solar panels cut electricity costs by 80-90%, all while reducing your
          carbon footprint. Designed to withstand extreme conditions (wind loads
          up to 2400 PA) and backed by a 5-year warranty, our systems offer
          long-term savings and clean energy you can count on.
        </>
      ),
      images: "/images/services/Solar Rooftop.jpg",
      name: "Solar Rooftop - Slash Your Energy Bills, Sustainably",
    },
    {
      title: "durga",
      text: (
        <>
          Light up streets, pathways, and open spaces with our self-sufficient
          solar streetlights. These energy-efficient solutions provide bright,
          reliable illumination—no wires, no fossil fuels, just pure solar power
          that works effortlessly from dusk till dawn.
        </>
      ),

      images: "/images/services/Solar Street Lights.jpg",

      name: "Solar Street Lights - Brighten Your World, Naturally",
    },
    {
      title: "kiran",
      text: (
        <>
          Say goodbye to chemical-based repellents! Our solar-powered insect
          traps harness sunlight during the day and naturally attract and
          eliminate pests at night, creating a safer, healthier environment for
          homes, farms, and businesses.
        </>
      ),
      images: "/images/services/Solar Insect Trap.jpg",

      name: "Solar Insect Trap - Eco-Friendly Pest Control",
    },
    {
      title: "sita",
      text: (
        <>
          Get high-quality, custom-built structures that save time, cut costs,
          and reduce onsite labor. Our prefabrication solutions streamline
          construction, ensuring durability, efficiency, and
          sustainability—without the hassle of traditional building.
        </>
      ),
      images: "/images/services/Prefabrication.jpg",

      name: "Prefabrication Solutions - Smarter, Faster, Stronger",
    },
    {
      title: "harsha",
      text: (
        <>
          Need more space without the cost of new construction? Our customizable
          mezzanine floors transform unused vertical areas into functional,
          durable workspaces, making expansion effortless and cost-effective.
        </>
      ),
      images: "/images/services/Mezzanine Floors.jpg",

      name: "Mezzanine Floors - Expand Without Building More",
    },
    {
      title: "xx",
      text: (
        <>
          Tap into clean, renewable energy with our solar water pumps. Designed
          for efficiency and reliability, these pumps provide sustainable water
          solutions for agriculture, irrigation, and industrial needs—no fuel,
          no emissions, just pure solar power.
        </>
      ),
      images: "/images/services/Solar Water Pumps.jpg",

      name: "Solar Water Pumps - Harness the Sun for Endless Water Flow",
    },
  ];

  return (
    <section className={styles.ProjectsSection}>
      <CustomContainer lg>
        <SectionHeader
          title={"Our Solutions"}
          head={"Power Up with Smart, Sustainable Solutions"}
          caption={
            "At Fabright, we believe in energy that works for you and the planet. Whether it's solar panel installation, expert consulting, or innovative prefab structures, we create smart, sustainable solutions that power homes and businesses across India and the Middle East."
          }
          centered
          maxWidth={1000}
        ></SectionHeader>

        <div className={styles.projectCards}>
          {projects.map((p) => (
            <ProjectCard key={p.title} data={p} />
          ))}
        </div>
      </CustomContainer>
    </section>
  );
};

export default SolarSolutionsSection;
