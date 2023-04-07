import React from "react";
import { CAT_N_QUEST } from "../ProjectList";
import ProjectIntroduction from "./Shared/ProjectIntroduction";

function CatNQuest() {
  const usefulLinks = [
    {
      title: "Play the game on itch.io",
      href: "https://aymendps.itch.io/cat-n-quest",
    },
  ];

  const workDone = [
    {
      id: "#top",
      title: "some work here",
    },
  ];

  return (
    <ProjectIntroduction
      title={CAT_N_QUEST.title}
      subtitle={CAT_N_QUEST.subtitle}
      youtubeURL="https://www.youtube.com/embed/"
      projectType="Game Jam"
      role="Gameplay Programmer"
      teamSize="3"
      platform="PC - WebGL"
      softwareUsed="Unity, C#"
      when="Oct 2022"
      usefulLinks={usefulLinks}
      workDone={workDone}
      description={`a
      bea zea z eazeaz eaze za e az e az e aze a e aez 
      bea zea z eazeaz eaze za e az e az e aze a e aez 
      c
      d
      e
      f
      g`}
    />
  );
}

export default CatNQuest;
