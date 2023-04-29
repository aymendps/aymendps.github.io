/* eslint-disable */

import React from "react";
import CatNQuest from "./Projects/CatNQuest";
import ProjectThumbnail from "./ProjectThumbnail";
import FabLabMachinesDiscovery from "./Projects/FabLabMachinesDiscovery";

export const UNREAL_GAME_1 = {
  title: "Unreal Game 1",
  subtitle: "Work in progress",
  thumbnail: "",
  gif: "",
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
  gif: "",
  solo: false,
  workDone: [],
  tags: ["Game Dev", "Game Jam", "Unity", "C#"],
  pageURL: "/cat-n-quest",
  element: <CatNQuest />,
};

export const FOLLOW_THE_LIGHT = {
  title: "Follow The Light",
  subtitle: "3D puzzle game",
  thumbnail: "",
  gif: "",
  solo: true,
  workDone: [],
  tags: ["Game Dev", "Personal", "Unity", "C#"],
  pageURL: "/follow-the-light",
  element: <></>,
};

export const FMD = {
  title: "Fablab Machines Discovery",
  subtitle: "AR mobile application",
  thumbnail: "",
  gif: "",
  solo: false,
  workDone: [
    "Scrum Responsibilities",
    "UI Events & Animations",
    "Augmented Reality With Vuforia",
    "AR Popup System",
    "3D Machine Simulation",
    "Many Types Of Testing",
  ],
  tags: ["Mobile", "University", "Unity", "AR", "C#"],
  pageURL: "/fablab-machines-discovery",
  element: <FabLabMachinesDiscovery />,
};

export const PATHFINDING = {
  title: "Pathfinding Adventure",
  subtitle: "Game pathfinding algorithms",
  thumbnail: "",
  gif: "",
  solo: true,
  workDone: [],
  tags: ["Game Dev", "Personal"],
  pageURL: "/pathfinding-adventure",
  element: <></>,
};

export const SSA = {
  title: "Student Speciality Advisor",
  subtitle: "Full-Stack web application",
  thumbnail: "",
  gif: "",
  solo: false,
  workDone: [],
  tags: ["Full Stack", "University", "React", "Express", "MongoDB"],
  pageURL: "/student-speciality-advisor",
  element: <></>,
};

export const FILE_MANAGER = {
  title: "File Manager - Cynoia",
  subtitle: "Full-Stack web application",
  thumbnail: "",
  gif: "",
  solo: false,
  workDone: [],
  tags: [
    "Full Stack",
    "Professional",
    "React",
    "NestJS",
    "MySQL",
    "S3",
    "TypeScript",
  ],
  pageURL: "/student-speciality-advisor",
  element: <></>,
};

export const PROJECTS = [
  UNREAL_GAME_1,
  CAT_N_QUEST,
  FMD,
  PATHFINDING,
  FOLLOW_THE_LIGHT,
  SSA,
  FILE_MANAGER,
];

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
