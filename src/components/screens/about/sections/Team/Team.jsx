import SectionHeader from "@/components/common/SectionHeader/SectionHeader";
import CustomContainer from "@/components/ui/CustomContainer/CustomContainer";
import React from "react";
import styles from "./Team.module.scss";
import FONTS from "@/styles/fonts";
import { Plus } from "lucide-react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const ProjectCard = ({ data }) => {
  return (
    <div className={styles.ProjectCard} data-aos="fade-up">
      <div className={styles.imgWrap}>
        <div
          className={styles.img}
          style={{
            backgroundImage: `url("${data.images}")`,
          }}
        ></div>
      </div>
      <div className={styles.txt}>
        <div className={styles.cta}>
          <div className={styles.button}>
            <Plus />

            <div className={styles.social}>
              <BsLinkedin />
              
              <BsInstagram />
              <BsFacebook />
            </div>
          </div>
        </div>
        <h3 className={FONTS.font2}>{data.name}</h3>
        <p>{data.text}</p>
      </div>
    </div>
  );
};

const Teamsection = () => {
  const projects = [
    {
      title: "raghav",
      text: "Chief Marketing Officer (CMO)",
      images: "/images/team/raghav.png",
      name: "Raghav",
    },
    {
      title: "durga",
      text: "Founder & Chief Executive Officer (CEO)",
      images: "/images/team/durga.png",
      name: "Durga Prasad",
    },
    {
      title: "kiran",
      text: "Chief Operating Officer (COO)",
      images: "/images/team/kiran.png",
      name: "Kiran",
    },
    {
      title: "sita",
      text: "Chief Financial Officer (CFO)",
      images: "/images/team/sita.png",
      name: "Sita",
    },
    {
      title: "harsha",
      text: "Chief Technology Officer (CTO)",
      images: "/images/team/harsha.png",
      name: "Harsha",
    },
  ];

  return (
    <section className={styles.ProjectsSection}>
      <CustomContainer>
        <SectionHeader
          title={" Our Leadership Team"}
          head={"Meet The Team Behind Us"}
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

export default Teamsection;
