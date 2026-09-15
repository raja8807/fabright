import React from "react";
import JourneySection from "./sections/Journey/Journey";
import ChooseSection from "./sections/Choose/Choose";
import MileStoneSection from "./sections/MileStone/MileStone";
import OverviewSection from "./sections/Overview/Overview";
import MisionVisionSection from "./sections/MisionVision/MisionVision";

import Teamsection from "./sections/Team/Team";
import AwardsSection from "./sections/Awards/Awards";


const AboutScreen = () => {
  return (
    <>
 
      <OverviewSection/>
      <JourneySection />
      <MisionVisionSection/>
      <ChooseSection/>
      <MileStoneSection/>
      <Teamsection/>
      <AwardsSection/>
    </>
  );
};

export default AboutScreen;
