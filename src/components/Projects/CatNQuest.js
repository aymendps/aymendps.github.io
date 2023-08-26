import React from "react";
import { CAT_N_QUEST } from "../ProjectList";
import ProjectIntroduction from "./Shared/ProjectIntroduction";
import Footer from "../Footer";
import ProjectContent from "./Shared/ProjectContent";

function CatNQuest() {
  const usefulLinks = [
    {
      title: "Play the game on itch.io",
      href: "https://aymendps.itch.io/cat-n-quest",
    },
  ];

  const workDone = CAT_N_QUEST.workDone.map((work, index) => {
    return {
      id: work.replace(/\s+/g, ""),
      title: work,
      content: contentList[index] || "More details will be added soon!",
    };
  });

  return (
    <>
      <ProjectIntroduction
        title={CAT_N_QUEST.title}
        youtubeURL="https://www.youtube-nocookie.com/embed/"
        projectType="Game Jam"
        role="Game Programmer"
        solo={CAT_N_QUEST.solo}
        yearAndDuration={CAT_N_QUEST.yearAndDuration}
        platform="PC - WebGL"
        softwareUsed="Unity - C#"
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
      <ProjectContent workDone={workDone} />
      <Footer />
    </>
  );
}

export default CatNQuest;
