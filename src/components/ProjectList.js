import React from "react";
import CatNQuest from "./Projects/CatNQuest";
import ProjectThumbnail from "./ProjectThumbnail";
import FabLabMachinesDiscovery from "./Projects/FabLabMachinesDiscovery";
import FollowTheLight from "./Projects/FollowTheLight";

export const UNREAL_GAME_1 = {
  title: "Unreal Game 1",
  subtitle: "Work in progress",
  thumbnail: "",
  solo: true,
  workDone: [],
  tags: ["Game Dev", "Personal", "UE 5", "C++"],
  pageURL: "/unreal-game-1",
  element: <></>,
};

export const CAT_N_QUEST = {
  title: "Cat n' Quest",
  subtitle: "2D top-down adventure game",
  thumbnail: "/thumbnails/cat.png",
  solo: false,
  workDone: [],
  tags: ["Game Jam", "Game Dev", "Unity", "C#"],
  pageURL: "/cat-n-quest",
  element: <CatNQuest />,
};

export const FOLLOW_THE_LIGHT = {
  title: "Follow The Light",
  subtitle: "3D puzzle game",
  thumbnail: "/thumbnails/ftl.jpg",
  solo: true,
  workDone: [
    "Player Gameplay Mechanics",
    "Player Finite State Machine",
    "Player & Camera Controls",
    "Glowing Walls & Moving Platforms",
    "Main Menu - Play Transition",
  ],
  tags: ["Personal", "Game Dev", "Unity", "C#"],
  pageURL: "/follow-the-light",
  element: <FollowTheLight />,
};

export const FMD = {
  title: "Fablab Machines Discovery",
  subtitle: "AR mobile application",
  thumbnail: "/thumbnails/fmd.png",
  solo: false,
  workDone: [
    "Scrum Responsibilities",
    "Source Control Responsibilities",
    "UI Events & Animations",
    "Augmented Reality With Vuforia",
    "AR Popup System",
    "3D Machine Simulation",
  ],
  tags: ["University", "Won Award", "Mobile", "Unity", "AR", "Vuforia", "C#"],
  pageURL: "/fablab-machines-discovery",
  element: <FabLabMachinesDiscovery />,
};

export const PATHFINDING = {
  title: "Pathfinding Adventure",
  subtitle: "Game pathfinding algorithms",
  thumbnail: "",
  solo: true,
  workDone: [],
  tags: ["Game Dev", "Personal"],
  pageURL: "/pathfinding-adventure",
  element: <></>,
};

export const SSA = {
  title: "Student Speciality Advisor",
  subtitle: "Full-Stack web application",
  thumbnail: "/thumbnails/ssa.jpg",
  solo: false,
  workDone: [],
  tags: [
    "University",
    "Won Award",
    "Full Stack",
    "React",
    "Express",
    "MongoDB",
  ],
  pageURL: "/student-speciality-advisor",
  element: <></>,
};

export const FILE_MANAGER = {
  title: "File Manager - Cynoia",
  subtitle: "Full-Stack web application",
  thumbnail: "/thumbnails/fm.png",
  solo: false,
  workDone: [],
  tags: [
    "Professional",
    "Full Stack",
    "React",
    "NestJS",
    "MySQL",
    "S3",
    "TypeScript",
  ],
  pageURL: "/student-speciality-advisor",
  element: <></>,
};

export const PROJECTS = [CAT_N_QUEST, FMD, FOLLOW_THE_LIGHT, SSA, FILE_MANAGER];

function ProjectList() {
  const generateProjects = PROJECTS.map((project) => {
    return <ProjectThumbnail key={"thumbnail" + project.title} {...project} />;
  });

  return (
    <div className="w-full flex justify-center items-start flex-wrap gap-[2.4%]">
      {generateProjects}
    </div>
  );
}

export default ProjectList;
