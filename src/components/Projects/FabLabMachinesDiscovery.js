import Footer from "../Footer";
import { FMD } from "../ProjectList";
import ProjectIntroduction from "./Shared/ProjectIntroduction";

function FabLabMachinesDiscovery() {
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
    <>
      <ProjectIntroduction
        title={FMD.title}
        subtitle={FMD.subtitle}
        youtubeURL="https://www.youtube.com/embed/"
        projectType="University"
        role="Unity Programmer"
        teamSize="4"
        platform="Android - iOS"
        softwareUsed="Unity - C# - Vuforia"
        when="Feb 2023 - Apr 2023"
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
      <Footer />
    </>
  );
}

export default FabLabMachinesDiscovery;
