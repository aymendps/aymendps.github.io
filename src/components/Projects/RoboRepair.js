import React from "react";
import { ROBO_REPAIR } from "../ProjectList";
import ProjectIntroduction from "./Shared/ProjectIntroduction";
import Footer from "../Footer";
import ProjectContent from "./Shared/ProjectContent";

function RoboRepair() {
  const usefulLinks = [
    {
      title: "Play on itch.io: Published Game Page",
      href: "https://aymendps.itch.io/roborepair",
    },
    {
      title: "Celebratory Post: Won 2nd Prize of the 24H Game Dev Hackathon",
      href: "https://www.linkedin.com/feed/update/urn:li:activity:7053399477331591168/",
    },
    {
      title: "Project's Presentation",
      href: "https://www.canva.com/design/DAGJ_-fBFA0/Q67mMp1b_uUAFHwlf3vDsA/edit",
    },
  ];

  const contentList = [];

  const workDone = ROBO_REPAIR.workDone.map((work, index) => {
    return {
      id: work.replace(/\s+/g, ""),
      title: work,
      content: contentList[index] || "More details will be added soon!",
    };
  });

  return (
    <>
      <ProjectIntroduction
        title={ROBO_REPAIR.title}
        youtubeURL={["https://www.youtube.com/embed/YC9Op2Jxoi0"]}
        projectType="24H Game Dev Hackathon"
        role="Gameplay Programmer"
        solo={ROBO_REPAIR.solo}
        platform="PC | WebGL"
        softwareUsed="Unity | C#"
        usefulLinks={usefulLinks}
        workDone={workDone}
        useLinksForWorkDone={false}
        outcomes={ROBO_REPAIR.outcomes}
        description={`RoboRepair is a 2D educational puzzle game developed in 24 hours for a game development hackathon within a team of 3 people. The game was awarded the 2nd prize!
          
          It's about a maintenance robot using the combination of programming functions & physics to complete tasks with limited battery. Failing a task or getting hit makes you lose a battery, and the game ends when you run out of batteries.

          The goal of the game is to teach the player the basics of programming functions and how to use them to solve problems. The functions are used to control any object's velocity, gravity or added force.
          
          Through this, the player needs to reach the destination by avoiding obstacles and solving puzzles.
`}
      />
      <ProjectContent //workDone={workDone} this makes it so nothing is rendered but we still benefit from the scrollIntoView effect
      />
      <Footer />
    </>
  );
}

export default RoboRepair;
