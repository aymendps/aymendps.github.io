import React from "react";
import { USER_DRIVEN_3D_PROCEDURAL_TOOL } from "../ProjectList";
import ProjectIntroduction from "./Shared/ProjectIntroduction";
import Footer from "../Footer";
import ProjectContent from "./Shared/ProjectContent";

function UserDriven3DProceduralTool() {
  const usefulLinks = [
    {
      title:
        "Successfully defended this capstone project and received highest grade of 'Outstanding'",
      href: "https://www.linkedin.com/feed/update/urn:li:activity:7212445756081799168/",
    },
    {
      title: "Capstone Project's Final Report",
      href: "",
    },
    {
      title: "Capstone Project's Final Presentation",
      href: "",
    },
  ];

  const contentList = [];

  const workDone = USER_DRIVEN_3D_PROCEDURAL_TOOL.workDone.map(
    (work, index) => {
      return {
        id: work.replace(/\s+/g, ""),
        title: work,
        content: contentList[index] || "More details will be added soon!",
      };
    }
  );

  return (
    <>
      <ProjectIntroduction
        title={USER_DRIVEN_3D_PROCEDURAL_TOOL.title}
        youtubeURL={[
          "https://www.youtube.com/embed/NiAo5jXZ7UU",
          "https://www.youtube.com/embed/rcqNS54urFU",
        ]}
        projectType="Capstone Project"
        role="Tools Developer"
        solo={USER_DRIVEN_3D_PROCEDURAL_TOOL.solo}
        platform="PC - Integrated within Unreal Engine 5"
        softwareUsed="Unreal Engine 5 | Blueprints | C++"
        usefulLinks={usefulLinks}
        workDone={workDone}
        outcomes={USER_DRIVEN_3D_PROCEDURAL_TOOL.outcomes}
        description={`As part of my capstone project, I successfully developed a user-driven tool that is capable of procedurally generating 3D environments. A complete software development lifecycle was conducted where I worked on all the features of the tool.
          
          The goal behind this tool is to provide a way for developers to easily, quickly, and cheaply create believable 3D environments for their games.

          The tool is integrated within Unreal Engine 5 and given a user prompt such as "Make me a forest", can procedurally generate a 3D environment based on the user's request.
          
          The tool is capable of generating many environmental themes (forests, deserts, snowy or japanese areas, fantasy...) that are composed of three layers: foliage, rivers, and buildings. 
          
          All the elements blend together seamlessly and are completely customizable by the user, who can provide additional feedback to adjust the environment to their liking, like "Remove all the trees", "Make the flowers bigger", "Move the river to the right" or "Add a path that leads from a building to another". They are also able to see many variations of the same environment.
          
          Once a user likes the generated environment, they can save it and use it as any other object in their level. This allows the user to build a complete level in a fraction of the time it would take to do it manually.
          
          The tool's implementation prioritized performance, scalability, and ease of use. It can be quickly modified or extended to add new customization options and environmental themes.`}
      />
      <ProjectContent workDone={workDone} />
      <Footer />
    </>
  );
}

export default UserDriven3DProceduralTool;
