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
        description={`"Follow The Light" is a 3D physics-based puzzle game made with Unity & C#.

        As a glowing ball lost in darkness, your goal is to navigate through challenging environments, using your collisions with walls and objects to illuminate the path ahead.

        By transferring some of your light to the surroundings, you gradually reveal the obstacles and pathways, allowing you to find your way out of the darkness.
        
        Move the glowing ball around by applying force!
        
        Rotate the camera to change your perspective!
        
        Jump in the same spot to bounce higher each time!
        
        Quickly hop between walls!
        
        Brake to control your momentum!`}
      />
      <ProjectContent workDone={workDone} />
      <Footer />
    </>
  );
}

export default FollowTheLight;
