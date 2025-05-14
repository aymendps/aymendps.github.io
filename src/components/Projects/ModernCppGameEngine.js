import { MODERN_CPP_GAME_ENGINE } from "../ProjectList";
import ProjectIntroduction from "./Shared/ProjectIntroduction";
import Footer from "../Footer";
import ProjectContent from "./Shared/ProjectContent";

function ModernCppGameEngine() {
  const usefulLinks = [
    {
      title: "Github repository of the C++ code",
      href: "https://github.com/aymendps/ModernCppCustomGameEngine/",
    },
  ];

  const contentList = [];

  const workDone = MODERN_CPP_GAME_ENGINE.workDone.map((work, index) => {
    return {
      id: work.replace(/\s+/g, ""),
      title: work,
      content: contentList[index] || "More details will be added soon!",
    };
  });

  return (
    <>
      <ProjectIntroduction
        title={MODERN_CPP_GAME_ENGINE.title}
        picturesURL={MODERN_CPP_GAME_ENGINE.picturesURL}
        tags={MODERN_CPP_GAME_ENGINE.tags}
        usefulLinks={usefulLinks}
        workDone={workDone}
        useLinksForWorkDone={false}
        outcomes={MODERN_CPP_GAME_ENGINE.outcomes}
        description={`This project is a custom game engine developed using modern C++ and SDL2. 
          
          I decided to develop this to improve my C++ 17/20 skills and to apply many of the STL features, containers, algorithms and idioms in an interesting & practical context. 
          
          Plus, this helped me improve my usage of smart pointers, lambdas, concepts, templates and multi-threading. 
          
          It also helped me strengthen my understanding of game engine architecture and delta-time based game loops.
          `}
      />
      <ProjectContent /*workDone={workDone}*/ />
      <Footer />
    </>
  );
}

export default ModernCppGameEngine;
