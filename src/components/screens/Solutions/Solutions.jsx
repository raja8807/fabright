import PageHero from "@/components/common/PageHero/PageHero";
import React from "react";
import SolarSolutionsSection from "./sections/SolarSolutions/SolarSolutions";
import WorkProcessSection from "./sections/WorkProcess/WorkProcess";

const SolutionsScreen = () => {
  return (
    <>
      <PageHero
        title="Fabright's Solutions"
        head={
          <>
            Power Up with Smart,
            <br />
            Sustainable Solutions
          </>
        }
        bgImg="/images/solutions-banner.jpg"
      />
      <SolarSolutionsSection/>
      <WorkProcessSection/>
    </>
  );
};

export default SolutionsScreen;
