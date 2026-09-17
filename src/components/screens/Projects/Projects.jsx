import PageHero from "@/components/common/PageHero/PageHero";
import React from "react";
import styles from "./Projects.module.scss";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";
import CustomContainer from "@/components/ui/CustomContainer/CustomContainer";
import { Image } from "react-bootstrap";
import CustomButton from "@/components/ui/CustomButton/CustomButton";
import ExpandOnView from "@/components/common/ExpandOnView/ExpandOnView";

const ProjectsScreen = () => {
  const projects = [
    {
      title: "1",
      text: "1MW Solar Installation – ILS, Barka, Oman ",
      images: "/images/projects/project-1.png",
      description: (
        <>
          In one of our most ambitious projects, we installed a 1MW rooftop
          solar system for ILS, one of Oman’s largest logistics companies. This
          initiative was more than just an energy upgrade—it was a game-changer
          for the logistics industry, reducing carbon emissions and operational
          costs while setting a new standard for sustainable business practices
          in the region.
        </>
      ),
    },
    {
      title: "2",
      text: "Hyderabad Metro Rail – Powering Progress, Against the Clock ",
      images: "/images/projects/project-2.png",
      description: (
        <>
          Completing a 143kW solar installation at an elevated height was
          challenging. Doing it within a tight two-month window, working only
          from 12 AM to 4 AM? That was Fabright’s expertise in action. We
          delivered high-performance solar solutions under extreme conditions,
          proving that sustainability and efficiency could go hand in hand—even
          when time was short.
        </>
      ),
    },
    {
      title: "3",
      text: "Save A Child – Lighting Up Lives ",
      images: "/images/projects/project-3.png",
      description: (
        <>
          Solar energy wasn’t just about efficiency; it was about empowerment.
          Through the Save A Child project in Balapur, Hyderabad, we installed
          12 high-efficiency solar street lights, bringing safety, security, and
          sustainability to the local community. This initiative was a testament
          to our belief that clean energy should benefit everyone, especially
          those who needed it most.
        </>
      ),
    },
    {
      title: "4",
      text: "Ramky Villas – Seamless Solar Living ",
      images: "/images/projects/project-4.png",
      description: (
        <>
          Sustainable energy never came at the cost of comfort. That’s why, in
          our project for Ramky Villas, we integrated high-efficiency solar
          panels, roofing structures, and puff panels with precision and care.
          By ensuring minimal disruption to residents, we provided a seamless
          transition to clean energy, proving that luxury and sustainability
          could coexist.
        </>
      ),
    },
  ];

  return (
    <div className={styles.ProjectsScreen}>
      <PageHero
        title="Our Projects"
        head="Our Projects: Building a Sustainable Future with Every Project"
      />
      <CustomContainer>
        <section className={styles.Projects}>
          {projects.map((preject) => {
            return (
              <div key={`proj${preject.title}`} className={styles.project}>
                <div>
                  <SectionHeader
                    title={`Project - ${preject.title}`}
                    head={preject.text}
                    caption={preject.description}
                  />
                </div>
                <ExpandOnView className="">
                  <Image src={preject.images} alt={preject.text} />
                </ExpandOnView>
              </div>
            );
          })}
        </section>

        <section>
          <SectionHeader
            head={"Ready to create your own solar success story? Let’s talk!"}
            cta={<CustomButton variant={2}>Get Started</CustomButton>}
          />
        </section>
      </CustomContainer>
    </div>
  );
};

export default ProjectsScreen;
