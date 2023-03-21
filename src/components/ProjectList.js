import React from "react";
import CatNQuest from "./Projects/CatNQuest";
import ProjectThumbnail from "./ProjectThumbnail";

const UNREAL_GAME_1 = {
  title: "Unreal Game 1",
  subtitle: "Work in progress",
  thumbnail: "",
  gif: "",
  solo: true,
  workDone: [],
  tags: ["Unreal Engine 5", "C++", "Game Dev", "Personal"],
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
  tags: ["Unity", "C#", "Game Dev", "Game Jam"],
  pageURL: "/cat-n-quest",
  element: <></>,
};

const FOLLOW_THE_LIGHT = {
  title: "Follow The Light",
  subtitle: "3D puzzle game",
  thumbnail: "",
  gif: "",
  solo: true,
  workDone: [],
  tags: ["Unity", "C#", "Game Dev", "Personal"],
  pageURL: "/follow-the-light",
  element: <></>,
};

const UNREAL_GAME_2 = {
  title: "Unreal Game 2",
  subtitle: "Work in progress",
  thumbnail: "",
  gif: "",
  solo: true,
  workDone: [],
  tags: ["Unreal Engine 5", "C++", "Game Dev", "Personal"],
  pageURL: "/unreal-game-2",
  element: <></>,
};

const FMD = {
  title: "Fablab Machines Discovery",
  subtitle: "AR mobile application",
  thumbnail: "",
  gif: "",
  solo: false,
  workDone: [],
  tags: ["Unity", "C#", "AR", "Vuforia", "University"],
  pageURL: "/fablab-machines-discovery",
  element: <></>,
};

const PATHFINDING = {
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

const SSA = {
  title: "Student Speciality Advisor",
  subtitle: "Full-Stack web application",
  thumbnail: "",
  gif: "",
  solo: false,
  workDone: [],
  tags: ["React", "Express", "MongoDB", "University"],
  pageURL: "/student-speciality-advisor",
  element: <></>,
};

const FILE_MANAGER = {
  title: "File Manager - Cynoia",
  subtitle: "Full-Stack web application",
  thumbnail: "",
  gif: "",
  solo: false,
  workDone: [],
  tags: ["React", "NestJS", "MySQL", "S3", "Professional"],
  pageURL: "/student-speciality-advisor",
  element: <></>,
};

export const PROJECTS = [
  UNREAL_GAME_1,
  CAT_N_QUEST,
  FOLLOW_THE_LIGHT,
  UNREAL_GAME_2,
  FMD,
  PATHFINDING,
  SSA,
  FILE_MANAGER,
];

function ProjectList() {
  const generateProjects = PROJECTS.map((project) => {
    return <ProjectThumbnail key={project.title} {...project} />;
  });

  return (
    <div className="w-full flex justify-center items-center flex-wrap gap-[5%]">
      {generateProjects}
    </div>
  );
}

export default ProjectList;
