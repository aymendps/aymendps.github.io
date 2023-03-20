import React from "react";
import { CAT_N_QUEST } from "../ProjectList";
import ProjectIntroduction from "./Shared/ProjectIntroduction";

function CatNQuest() {
  return (
    <ProjectIntroduction
      title={CAT_N_QUEST.title}
      subtitle={CAT_N_QUEST.subtitle}
      youtubeURL="https://www.youtube.com/embed/"
    />
  );
}

export default CatNQuest;
