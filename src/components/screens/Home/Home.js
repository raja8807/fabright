import React from "react";
import styles from "./Home.module.scss";
import Hero from "./sections/Hero/Hero";
import AboutSection from "./sections/About/About";
import ChooseSection from "./sections/Choose/Choose";
import ProjectsSection from "./sections/Projects/Projects";
import SolutionsSection from "./sections/Solutions/Solutions";
import FriendlinessSection from "./sections/Friendliness/Friendliness";

export default function Home() {
  return (
    <div className={styles.homeWrapper}>
      <Hero />
      <AboutSection />
      <ChooseSection />
      <ProjectsSection />
      <FriendlinessSection />
      <SolutionsSection />
    </div>
  );
}
