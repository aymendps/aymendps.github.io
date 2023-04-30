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

  const workDone = [
    {
      id: "someworkhere",
      title: "some work here",
      content: <p>some work here</p>,
    },
  ];

  return (
    <>
      <ProjectIntroduction
        title={CAT_N_QUEST.title}
        youtubeURL="https://www.youtube.com/embed/"
        projectType="Game Jam"
        role="Game Programmer"
        teamSize="3"
        platform="PC - WebGL"
        softwareUsed="Unity - C#"
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
      <ProjectContent workDone={workDone} />
      <Footer />
    </>
  );
}

export default CatNQuest;
