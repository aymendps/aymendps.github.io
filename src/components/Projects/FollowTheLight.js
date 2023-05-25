import React from "react";
import { FOLLOW_THE_LIGHT } from "../ProjectList";
import ProjectIntroduction from "./Shared/ProjectIntroduction";
import ProjectContent from "./Shared/ProjectContent";
import Footer from "../Footer";
import ProjectLearningOutcomes from "./Shared/ProjectLearningOutcomes";
import { Typography } from "@mui/material";

function FollowTheLight() {
  const usefulLinks = [];

  const playerMechanicsSection = (
    <>
      <Typography className="leading-5 text-justify mb-2">
        I designed and implemented multiple mechanics for the player character
        that allows it to navigate its way through the different puzzles and
        obstacles.
      </Typography>
      <Typography variant="h6" className="text-justify text-green-600">
        Moving & Braking
      </Typography>
      <Typography className="leading-5 text-justify">
        By exerting <b>physical force</b>, the player can move the ball
        character around or brake to halt its momentum. This design decision was
        made to introduce a level of <b>challenge</b> for the player in
        controlling the position of the ball.
      </Typography>
      <Typography variant="h6" className="text-justify text-green-600">
        Normal Bouncing
      </Typography>
      <Typography className="leading-5 text-justify">
        The ball can bounce upwards to reach higher platforms or to avoid
        obstacles in its path. The player is still able to move the ball while
        it's in the air, but with less force and control compared to when it's
        on the ground. By design, this is due to the presence of{" "}
        <b>air resistance</b>.
      </Typography>
      <Typography variant="h6" className="text-justify text-green-600">
        Repetitive Bouncing in the same spot
      </Typography>
      <Typography className="leading-5 text-justify">
        When the ball falls back to the <b>same spot</b> it bounced from
        initially, it gains more energy and bounces <b>higher</b>, allowing it
        to reach even greater heights with each <b>successive</b> bounce.
        <br />
        However, there is a limit to how many times it can bounce and how high
        it can go, so the game doesn't break.
      </Typography>
      <Typography variant="h6" className="text-justify text-green-600">
        Wall Hopping
      </Typography>
      <Typography className="leading-5 text-justify">
        Some <b>specific walls</b> are positioned facing each other and allow
        the ball to <b>quickly bounce between them</b>, providing a new means of
        navigation for the player.
        <br />
        As long as the ball is clinging to one of the walls, it can either slide
        down or bounce.
      </Typography>
      <Typography variant="h6" className="text-justify text-green-600">
        Wall Glowing
      </Typography>
      <Typography className="leading-5 text-justify">
        When the ball <b>collides</b> with a wall or surface, it shares some of
        its light with it. This is the mechanic that the game is based around
        and allows the player <b>to slowly reveal</b> the surroundings.
      </Typography>
      <Typography variant="h6" className="text-justify text-green-600">
        Changing Perspective
      </Typography>
      <Typography className="leading-5 text-justify">
        The player is able to <b>rotate</b> the camera, changing their
        perspective either by <b>freely moving</b> it from side to side or by{" "}
        <b>snapping</b>
        it to a set of preset angles. This can be helpful when trying to find
        surfaces to move/bounce towards.
      </Typography>
    </>
  );
  const playerFSM = <></>;
  const cameraRelativeMovementSection = <></>;
  const handlingInputSection = <></>;
  const wallsAndPlatforms = <></>;

  const contentList = [
    playerMechanicsSection,
    playerFSM,
    cameraRelativeMovementSection,
    handlingInputSection,
    wallsAndPlatforms,
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
        youtubeURL="https://www.youtube-nocookie.com/embed/6Ob0HM8uoo8"
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
      <ProjectLearningOutcomes outcomes={FOLLOW_THE_LIGHT.outcomes} />
      <Footer />
    </>
  );
}

export default FollowTheLight;
