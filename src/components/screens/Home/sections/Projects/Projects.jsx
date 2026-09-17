import SectionHeader from "@/components/common/SectionHeader/SectionHeader";
import CustomContainer from "@/components/ui/CustomContainer/CustomContainer";
import React from "react";
import styles from "./Projects.module.scss";
import FONTS from "@/styles/fonts";
import { Plus } from "lucide-react";
import Link from "next/link";
import ExpandOnView from "@/components/common/ExpandOnView/ExpandOnView";

const ProjectCard = ({ data, idx }) => {
  return (
    <Link
      href={"/projects"}
      className={styles.ProjectCard}
      data-aos="fade-up"
      data-aos-delay={idx * 100}
    >
      <ExpandOnView className={styles.imgWrap}>
        <div
          className={styles.img}
          style={{
            backgroundImage: `url("${data.images}")`,
          }}
        ></div>
      </ExpandOnView>
      <div className={styles.txt}>
        <div className={styles.button}>
          <Plus />
        </div>
        <h4 className={FONTS.font2}>{data.text}</h4>
      </div>
    </Link>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: "1",
      text: "Sustainable Energy for Oman’s Logistics Powerhouse",
      images: "/images/projects/project-1.png",
    },
    {
      title: "2",
      text: "Energizing Hyderabad’s Metro - Installation Project ",
      images: "/images/projects/project-2.png",
    },
    {
      title: "3",
      text: "Save A Child with Sustainability's Hope",
      images: "/images/projects/project-3.png",
    },
    {
      title: "4",
      text: "Solar-Powered Living at Ramky Villas",
      images: "/images/projects/project-4.png",
    },
  ];

  return (
    <section className={styles.ProjectsSection}>
      <CustomContainer>
        <SectionHeader
          title={"Our Projects"}
          head={"Our Projects: Success Stories that Empower A Lasting Change"}
          caption={
            "Every project we deliver tells a story—of innovation, impact, and a future shaped by clean energy. More than solar panels or structures; it’s about empowering communities, transforming businesses, and proving that sustainability and progress go hand in hand. With every milestone, we redefine what’s possible, turning bold ideas into lasting solutions that light up lives and fuel a better tomorrow."
          }
          centered
          maxWidth={1000}
        ></SectionHeader>
      </CustomContainer>

      <div className={styles.projectCards}>
        {projects.map((p, idx) => (
          <ProjectCard key={p.title} data={p} idx={idx} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
