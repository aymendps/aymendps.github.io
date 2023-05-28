import React from "react";
// import CatNQuest from "./Projects/CatNQuest";
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
  element: <></>,
};

export const ROBO_REPAIR = {
  title: "RoboRepair",
  subtitle: "2D physics-based puzzle game",
  thumbnail: "/thumbnails/rr.png",
  solo: false,
  workDone: [],
  tags: ["24H Hackathon", "Won Award", "Game Dev", "Unity", "C#"],
  pageURL: "/robo-repair",
  element: <></>,
};

export const FOLLOW_THE_LIGHT = {
  title: "Follow The Light",
  subtitle: "3D physics-based maze game",
  thumbnail: "/thumbnails/ftl.jpg",
  solo: true,
  workDone: [
    "Player Gameplay Mechanics",
    "Player Finite State Machine in C#",
    "Camera-Relative Player Movement",
    "Handling Player Input: PC & Gamepad",
    "Moving Platforms",
  ],
  outcomes: [
    "Learned how to apply the finite state machine pattern to create modular and organized character behavior",
    "Implemented intuitive character navigation by learning how camera-relative movement works",
    "Expanded creative abilities by designing and implementing multiple gameplay mechanics",
    "Developed proficiency in working with concepts like vectors, quaternions and rotations",
    "Learned how to implement physics-based interactions and respond to player input",
  ],
  tags: ["Personal", "Game Dev", "Unity", "C#"],
  pageURL: "/follow-the-light",
  accessible: true,
  element: <FollowTheLight />,
};

export const FMD = {
  title: "Fablab Machines Discovery",
  subtitle: "AR mobile application",
  thumbnail: "/thumbnails/fmd.png",
  solo: false,
  workDone: [
    "Source Control Responsibilities",
    "UI Events & Animations in C#",
    "Augmented Reality With Vuforia",
    "AR Popup System",
    "3D Machine Simulation",
  ],
  outcomes: [
    "Gained valuable experience in teamwork, collaboration, and organization, while effectively translating designer ideas into maintainable code.",
    "Learned the significance of applying design patterns when creating classes, enhancing the readability and structure of my code.",
    "Built an engaging mobile experience in Unity, gaining new mobile development skills in the process.",
    "Learned how to implement flexible UI designs that seamlessly adapt to different screen resolutions.",
    "Expanded my knowledge of working with Augmented Reality.",
  ],
  tags: ["University", "Won Award", "AR", "Mobile", "Unity", "Vuforia", "C#"],
  pageURL: "/fablab-machines-discovery",
  accessible: true,
  element: <FabLabMachinesDiscovery />,
};

export const SSA = {
  title: "Student Speciality Advisor",
  subtitle: "Full-Stack web application",
  thumbnail: "/thumbnails/ssa.jpg",
  solo: false,
  workDone: [
    "Responsive Web Design",
    "Community Forum Implementation",
    "Meeting With Advisors System",
    "Admin Dashboard & Statistics",
  ],
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
  workDone: [
    "Design Of The Entire Tech Stack",
    "Frontend Functionalities",
    "Backend Micro-services",
    "Amazon S3 Uploads & Downloads",
    "Client & Server Caching",
  ],
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

export const PROJECTS = [
  FMD,
  FOLLOW_THE_LIGHT,
  CAT_N_QUEST,
  ROBO_REPAIR,
  FILE_MANAGER,
  SSA,
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
