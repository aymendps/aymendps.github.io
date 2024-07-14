import React from "react";
import ProjectThumbnail from "./ProjectThumbnail";
import FabLabMachinesDiscovery from "./Projects/FabLabMachinesDiscovery";
import FollowTheLight from "./Projects/FollowTheLight";
import PrinceOfPersiaAtariRemake from "./Projects/PrinceOfPersiaAtariRemake";
import UserDriven3DProceduralTool from "./Projects/UserDriven3DProceduralTool";
import CatNQuest from "./Projects/CatNQuest";
import RoboRepair from "./Projects/RoboRepair";

export const PRINCE_OF_PERSIA_REMAKE = {
  title: "Prince Of Persia Remake",
  subtitle: "3D Difficult Platformer",
  thumbnail: "/thumbnails/ppr.png",
  solo: true,
  workDone: [
    "Player Mechanics & Animations",
    "Game Systems & Components",
    "Enemy AI Behaviour & Perception",
    "Customizable Gameplay Props",
    "UI & Tutorials Using UMG",
  ],
  outcomes: [
    "Learned how to create complex player mechanics, animations, and interactions",
    "Learned how to implement systems and components that are essential for gameplay",
    "Gained experience in balancing gameplay and difficulty, and how to achieve a fun but challenging experience for the player",
    "Learned how to create enemy AI behaviour, perception and actions randomization",
    "Learned how to develop platformer games and adjust movements and mechanics to a 2D plane in a 3D environment",
    "Expanded my knowledge of Unreal Engine 5, Blueprints scripting, and C++ programming",
  ],
  tags: ["Game Dev", "Internship", "UE 5", "Blueprints", "C++"],
  pageURL: "/prince-of-persia-atari-remake",
  accessible: true,
  element: <PrinceOfPersiaAtariRemake />,
};

export const USER_DRIVEN_3D_PROCEDURAL_TOOL = {
  title: "User-Driven Procedural Generation Of 3D Environments",
  subtitle: "Tool for 3D Environment Generation",
  thumbnail: "/thumbnails/udpg3de.jpg",
  solo: true,
  workDone: [
    "Design Science Research Methodology",
    "Procedural 3D Environment Generation",
    "User Prompt Interpretation & Integration",
    "Tool's UI/UX Implementation & Design",
  ],
  outcomes: [
    "Learned how to adopt the Design Science Research Methodology to develop a fully functional tool",
    "Learned how to understand and apply feedback from both users and stakeholders to improve the tool",
    "Gained experience in working with procedural generation and related features in Unreal Engine 5",
    "Learned how to use RESTful APIs and JSON parsing within Unreal Engine 5 to fetch and interpret user prompts",
    "Learned how to create a UI that is user-friendly, easy to use, responsive and visually consistent",
    "Expanded my knowledge of Unreal Engine 5, Blueprints scripting, and C++ programming",
  ],
  tags: [
    "Tool Dev",
    "Capstone Project",
    "Grade: Outstanding",
    "UE 5",
    "Blueprints",
    "C++",
  ],
  pageURL: "/user-driven-3d-procedural-tool",
  accessible: true,
  element: <UserDriven3DProceduralTool />,
};

export const CAT_N_QUEST = {
  title: "Cat n' Quest",
  subtitle: "2D Top-Down Adventure Game",
  thumbnail: "/thumbnails/cat.png",
  solo: false,
  workDone: [
    "Collaboration & Task Management",
    "Dialogue & Quest System",
    "NPC Customization & Behaviour",
    "Simple Inventory System",
    "Interactable Game Objects",
  ],
  outcomes: [
    "Gained experience in working within a team, collaborating, and communicating ideas fluently",
    "Learned how to use events and stages to create a quest system that is easy to manage and expand upon",
    "Learned how to implement progressive dialogue based on quest, and how to create engaging and interactive NPC characters",
    "Learned how to separate the inventory's system from its UI, and updating it dynamically based on the Observer pattern",
    "Expanded my knowledge of Unity, C#, and 2D open world game development",
  ],
  tags: ["Game Dev", "Game Jam", "Unity", "C#"],
  pageURL: "/cat-n-quest",
  accessible: true,
  element: <CatNQuest />,
};

export const ROBO_REPAIR = {
  title: "RoboRepair",
  subtitle: "2D Educational Puzzle Game",
  thumbnail: "/thumbnails/rr.png",
  solo: false,
  workDone: [
    "Collaboration & Task Management",
    "Puzzle Levels & Mechanics",
    "Physics-Based Interactions",
    "Interpretation of Programming Commands",
    "UI & Tutorials of Programming Commands",
  ],
  outcomes: [
    "Gained experience in working within a team, collaborating, and communicating ideas fluently",
    "Learned how to work efficiently under pressure and time constraints, and how to manage tasks",
    "Gained knowledge of how to develop educational games that teach programming and physics concepts",
    "Learned how to implement physics-based interactions and respond to player input and instructions",
    "Learned how to design and implement levels that are engaging and fun to solve",
  ],
  tags: ["Game Dev", "24H Hackathon", "Won Award", "Unity", "C#"],
  pageURL: "/robo-repair",
  accessible: true,
  element: <RoboRepair />,
};

export const FOLLOW_THE_LIGHT = {
  title: "Follow The Light",
  subtitle: "3D Physics-Based Maze Game",
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
  subtitle: "AR Mobile Application",
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
  tags: ["AR", "University", "Mobile", "Unity", "Vuforia", "C#"],
  pageURL: "/fablab-machines-discovery",
  accessible: true,
  element: <FabLabMachinesDiscovery />,
};

export const PINNED_PROJECTS = [
  USER_DRIVEN_3D_PROCEDURAL_TOOL,
  PRINCE_OF_PERSIA_REMAKE,
  FOLLOW_THE_LIGHT,
  FMD,
  CAT_N_QUEST,
  ROBO_REPAIR,
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
    <div className="w-full flex justify-center items-start flex-wrap gap-[1.5%]">
      {generateProjects}
    </div>
  );
}

export default ProjectList;
