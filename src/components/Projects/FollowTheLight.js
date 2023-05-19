import React from "react";
import { FOLLOW_THE_LIGHT } from "../ProjectList";
import ProjectIntroduction from "./Shared/ProjectIntroduction";
import ProjectContent from "./Shared/ProjectContent";
import Footer from "../Footer";

function FollowTheLight() {
  const usefulLinks = [];

  const playerMechanicsSection = <></>;
  const playerFSM = <></>;
  const playerCameraControls = <></>;
  const wallsAndPlatforms = <></>;
  const playTransition = <></>;

  const contentList = [
    playerMechanicsSection,
    playerFSM,
    playerCameraControls,
    wallsAndPlatforms,
    playTransition,
  ];

  const workDone = FOLLOW_THE_LIGHT.workDone.map((work, index) => {
    return {
      id: work.replace(/\s+/g, ""),
      title: work,
      content: contentList[index],
    };
  });

  return (
    <>
      <ProjectIntroduction
        title={FOLLOW_THE_LIGHT.title}
        youtubeURL="https://www.youtube-nocookie.com/embed/"
        projectType="Personal"
        role="Game Developer"
        teamSize="1"
        platform="Standalone PC"
        softwareUsed="Unity - C#"
        usefulLinks={usefulLinks}
        workDone={workDone}
        description={``}
      />
      <ProjectContent workDone={workDone} />
      <Footer />
    </>
  );
}

export default FollowTheLight;
