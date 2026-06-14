import { THE_PERFECT_RUN } from "../ProjectList";
import ProjectIntroduction from "./Shared/ProjectIntroduction";
import Footer from "../Footer";
import ProjectContent from "./Shared/ProjectContent";

function ThePerfectRun() {
  const usefulLinks = [
    {
      title: "Sony PlayStation - Blog about the project",
      href: "https://blog.playstation.com/2025/08/23/revealing-4-middle-east-and-north-africa-mena-hero-project-games-coming-to-playstation/",
    },
  ];

  const contentList = [];

  const workDone = THE_PERFECT_RUN.workDone.map((work, index) => {
    return {
      id: work.replace(/\s+/g, ""),
      title: work,
      content: contentList[index] || "More details will be added soon!",
    };
  });

  return (
    <>
      <ProjectIntroduction
        title={THE_PERFECT_RUN.title}
        picturesURL={THE_PERFECT_RUN.picturesURL}
        tags={THE_PERFECT_RUN.tags}
        usefulLinks={usefulLinks}
        workDone={workDone}
        useLinksForWorkDone={false}
        outcomes={THE_PERFECT_RUN.outcomes}
        description={`TO DO DESCRIPTION`}
      />
      <ProjectContent /*workDone={workDone}*/ />
      <Footer />
    </>
  );
}

export default ThePerfectRun;
