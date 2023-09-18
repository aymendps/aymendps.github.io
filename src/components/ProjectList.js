import React from "react";
import ProjectThumbnail from "./ProjectThumbnail";
import FabLabMachinesDiscovery from "./Projects/FabLabMachinesDiscovery";
import FollowTheLight from "./Projects/FollowTheLight";
import PrinceOfPersiaAtariRemake from "./Projects/PrinceOfPersiaAtariRemake";
import CatNQuest from "./Projects/CatNQuest";

export const PRINCE_OF_PERSIA_REMAKE = {
  title: "Prince Of Persia Remake",
  subtitle: "3D difficult platformer",
  thumbnail: "/thumbnails/ppr.png",
  solo: true,
  workDone: [
    "Player Mechanics & Animations",
    "Game Systems & Components",
    "Customizable Gameplay Props",
    "Enemy AI Behaviour & Perception",
    "UI & Tutorials Using UMG",
  ],
  outcomes: [],
  tags: ["Game Dev", "Internship", "UE 5", "C++"],
  pageURL: "/prince-of-persia-atari-remake",
  accessible: true,
  element: <PrinceOfPersiaAtariRemake />,
};

export const CAT_N_QUEST = {
  title: "Cat n' Quest",
  subtitle: "2D top-down adventure game",
  thumbnail: "/thumbnails/cat.png",
  solo: false,
  workDone: [
    "Dialogue & Quest System",
    "NPC Customization & Behaviour",
    "Simple Inventory System",
    "Interactable Game Objects",
    "Visual Dialogue Editor (in progress)",
  ],
  outcomes: [],
  tags: ["Game Dev", "Game Jam", "Unity", "C#"],
  pageURL: "/cat-n-quest",
  accessible: true,
  element: <CatNQuest />,
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
  tags: ["Game Dev", "Personal", "Unity", "C#"],
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
    "Scrum Duties & Collaboration",
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
  tags: ["AR", "University", "Won Award", "Mobile", "Unity", "Vuforia", "C#"],
  pageURL: "/fablab-machines-discovery",
  accessible: true,
  element: <FabLabMachinesDiscovery />,
};

export const PINNED_PROJECTS = [
  PRINCE_OF_PERSIA_REMAKE,
  FMD,
  FOLLOW_THE_LIGHT,
  CAT_N_QUEST,
];

function ProjectList({
  projects,
  setIsLoadingProjectPage,
  navigate,
  isMobile,
}) {
  const generateProjects = projects.map((project) => {
    return (
      <ProjectThumbnail
        key={"thumbnail" + project.title}
        isMobile={isMobile}
        navigate={navigate}
        setIsLoadingProjectPage={setIsLoadingProjectPage}
        {...project}
      />
    );
  });

  return (
    <div className="w-full flex justify-center items-start flex-wrap gap-[2.4%]">
      {generateProjects}
    </div>
  );
}

export default ProjectList;
