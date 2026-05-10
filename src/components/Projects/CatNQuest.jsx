import React from "react";
import { CAT_N_QUEST } from "../ProjectList";
import ProjectIntroduction from "./Shared/ProjectIntroduction";
import Footer from "../Footer";
import ProjectContent from "./Shared/ProjectContent";

function CatNQuest() {
  const usefulLinks = [
    {
      title: "Play on itch.io: Published Game Page",
      href: "https://aymendps.itch.io/cat-n-quest",
    },
    // {
    //   title: "Project's GitHub Repository",
    //   href: "https://github.com/",
    // },
  ];

  const contentList = [];

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
        youtubeURL={["https://www.youtube.com/embed/9XD9TwuPIiY"]}
        tags={CAT_N_QUEST.tags}
        usefulLinks={usefulLinks}
        workDone={workDone}
        useLinksForWorkDone={false}
        outcomes={CAT_N_QUEST.outcomes}
        description={`Join a grumpy cat in an adventure to support villagers and spread peace in its own way.

        This is a 2D top-down open-world game where you need to solve puzzles and connect the dots to fullfil quests that help the inhabitants.

        Interact with the many NPCs you will find in the game and discover the different areas as you support others to create a peaceful world where you can sleep soundly.

        This game was made during the Unidos HISPANIC HERITAGE MONTH Jam 2022, and then I revisited it after a while to refactor the code, improve performance and polish the state of the game.`}
      />
      <ProjectContent // workDone={workDone} this makes it so nothing is rendered but we still benefit from the scrollIntoView effect
      />
      <Footer />
    </>
  );
}

export default CatNQuest;
