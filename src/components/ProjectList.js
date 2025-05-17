import ProjectThumbnail from "./ProjectThumbnail";
import FabLabMachinesDiscovery from "./Projects/FabLabMachinesDiscovery";
import FollowTheLight from "./Projects/FollowTheLight";
import PrinceOfPersiaAtariRemake from "./Projects/PrinceOfPersiaAtariRemake";
import UserDriven3DProceduralTool from "./Projects/UserDriven3DProceduralTool";
import CatNQuest from "./Projects/CatNQuest";
import RoboRepair from "./Projects/RoboRepair";
import FileManagementSystem from "./Projects/FileManagementSystem";
import StudentSpecialtyAdvisor from "./Projects/StudentSpecialtyAdvisor";
import ModernCppGameEngine from "./Projects/ModernCppGameEngine";
import DiscordButlerBot from "./Projects/DiscordButlerBot";

export const PRINCE_OF_PERSIA_REMAKE = {
  title: "Prince Of Persia Remake",
  subtitle: "3D Difficult Platformer",
  thumbnail: "/thumbnails/ppr.png",
  workDone: [
    "Player Mechanics & Animations",
    "Enemy AI Behaviour & Perception",
    "Core Game Systems & Components",
    "Customizable Gameplay Props",
    "UI & Tutorials Using UMG",
  ],
  outcomes: [
    "Expanded my knowledge of Unreal Engine 5, Blueprints scripting, and C++ programming",
    "Experience in implementing complex player mechanics, animations, and interactions",
    "Experience in implementing systems and components that are essential for gameplay",
    "Experience in balancing gameplay and difficulty, and how to achieve a fun but challenging experience for the player",
    "Experience in creating enemy AI behaviour, perception and actions randomization",
    "Learned how to develop platformer games and adjust movements and mechanics to a 2D plane in a 3D environment",
  ],
  tags: ["Game Dev", "$G Internship", "$R UE 5", "$R Blueprints", "$R C++"],
  pageURL: "/prince-of-persia-atari-remake",
  accessible: true,
  element: <PrinceOfPersiaAtariRemake />,
};

export const USER_DRIVEN_3D_PROCEDURAL_TOOL = {
  title: "AI Tool - Procedural Generation Of 3D Environments",
  subtitle: "Tool for 3D Environment Generation",
  thumbnail: "/thumbnails/udpg3de.jpg",
  workDone: [
    "Implementation of All Core Features",
    "Procedural 3D Environment Generation",
    "AI Interpretation of Prompts & Feedback",
    "Tool's UI/UX Design & UMG Work",
  ],
  outcomes: [
    "Expanded my knowledge of Unreal Engine 5, Blueprints scripting, and C++ programming",
    "Experience in PCG, procedural generation and related features in Unreal Engine 5",
    "Learned how to use RESTful APIs and JSON parsing within Unreal Engine 5 to fetch & interpret user prompts",
    "Experience in creating a UI that is user-friendly, easy to use, responsive and visually consistent",
    "Learned how to understand and apply feedback from both users and stakeholders to improve the tool",
    "Learned how to adopt the Design Science Research Methodology to develop a fully functional tool",
  ],
  tags: [
    "Tool Dev",
    "$G Internship",
    "$G Capstone Project",
    "$R AI",
    "$R PCG",
    "$R UE 5",
    "$R Blueprints",
    "$R C++",
  ],
  pageURL: "/user-driven-3d-procedural-tool",
  accessible: true,
  element: <UserDriven3DProceduralTool />,
};

export const MODERN_CPP_GAME_ENGINE = {
  title: "Modern C++ Game Engine",
  subtitle: "2D Game Engine",
  thumbnail: "/thumbnails/cpp0.png",
  workDone: [
    "Framerate Independent Game Loop",
    "Entity-Component Framework",
    "Scene Loading using Threads",
    "Math and Logging Classes",
  ],
  outcomes: [
    "Experience in modern C++ programming and game engine development",
    "Experience in programming with concepts, templates, smart pointers, and other features",
    "Strengthened my knowledge of STL containers, iterators, algorithms and idioms",
    "Learned how to use multithreading to load scenes and resources in the background",
    "Learned how Update loops based on delta-time work, and how to implement them",
  ],
  tags: ["C++ Dev", "$G Personal", "$R C++", "$R SDL2"],
  picturesURL: [
    "/cpp/cpp1.png",
    "/cpp/cpp2.png",
    "/cpp/cpp3.png",
    "/cpp/cpp4.png",
    "/cpp/cpp5.png",
  ],
  pageURL: "/modern-cpp-game-engine",
  accessible: true,
  element: <ModernCppGameEngine />,
};

export const CAT_N_QUEST = {
  title: "Cat n' Quest",
  subtitle: "2D Top-Down Adventure Game",
  thumbnail: "/thumbnails/cat.png",
  workDone: [
    "Dialogue & Quest System",
    "NPC Customization & Behaviour",
    "Simple Inventory System",
    "Interactable Game Objects",
  ],
  outcomes: [
    "Expanded my knowledge of Unity, C#, and 2D open world game development",
    "Learned how to use events and stages to create a quest system that is easy to manage and expand upon",
    "Learned how to implement progressive dialogue based on quest, and how to create engaging and interactive NPC characters",
    "Learned how to separate the inventory's system from its UI, and updating it dynamically based on the Observer pattern",
    "Experience in working within a team, collaborating, and communicating ideas fluently",
  ],
  tags: ["Game Dev", "$G Game Jam", "$R Unity", "$R C#"],
  pageURL: "/cat-n-quest",
  accessible: true,
  element: <CatNQuest />,
};

export const DISCORD_BUTLER_BOT = {
  title: "Discord Butler Bot",
  subtitle: "Discord Bot",
  thumbnail: "/thumbnails/dbb.png",
  workDone: [
    "Advanced Music Playback System",
    "Favorites & Playlists Management",
    "Multiple Song Search & Suggestions",
    "League of Legends API Integration",
  ],
  outcomes: [
    "Experience in programming a backend with Node.js, TypeScript and Discord.js",
    "Experience in building a functional music and utility discord bot with advanced features",
    "Experience in working with real-time audio streaming using ffmpeg, yt-dlp and Node.js streams",
    "Experience in integrating third-party APIs such as the Riot Games / League Of Legends API",
    "Learned how to design modular, maintainable bot commands with support for multiple platforms and sources",
  ],
  tags: [
    "Full-Stack Dev",
    "$G Personal",
    "$R Discord.js",
    "$R Node.js",
    "$R TypeScript",
    "$R Ffmpeg",
  ],
  pageURL: "/discord-butler-bot",
  accessible: true,
  element: <DiscordButlerBot />,
};

export const ROBO_REPAIR = {
  title: "RoboRepair",
  subtitle: "2D Educational Puzzle Game",
  thumbnail: "/thumbnails/rr.png",
  workDone: [
    "Puzzle Levels & Mechanics",
    "Physics-Based Interactions",
    "Interpretation of User Commands",
    "Collaboration & Task Management",
  ],
  outcomes: [
    "Experience in working within a team, collaborating, and communicating ideas fluently",
    "Learned how to work efficiently under pressure and time constraints, and how to manage tasks",
    "Gained knowledge of how to develop educational games that teach programming and physics concepts",
    "Experience in implementing physics-based interactions and respond to player input and instructions",
    "Experience in designing and implementing levels that are engaging and fun to solve",
  ],
  tags: ["Game Dev", "$G 24H Hackathon", "$G Won Award", "$R Unity", "$R C#"],
  pageURL: "/robo-repair",
  accessible: true,
  element: <RoboRepair />,
};

export const FOLLOW_THE_LIGHT = {
  title: "Follow The Light",
  subtitle: "3D Physics-Based Maze Game",
  thumbnail: "/thumbnails/ftl.jpg",
  workDone: [
    "Player Gameplay Mechanics",
    "Player Finite State Machine in C#",
    "Camera-Relative Player Movement",
    "Handling Player Input: PC & Gamepad",
    "Moving Platforms",
  ],
  outcomes: [
    "Learned how to apply the finite state machine pattern to create modular and organized character behavior",
    "Experience in implementing intuitive character navigation by learning how camera-relative movement works",
    "Expanded creative abilities by designing and implementing multiple gameplay mechanics",
    "Developed proficiency in working with concepts like vectors, quaternions and rotations",
    "Experience in implementing physics-based interactions and respond to player input",
  ],
  tags: ["Game Dev", "$G Personal", "$R Unity", "$R C#"],
  pageURL: "/follow-the-light",
  accessible: true,
  element: <FollowTheLight />,
};

export const FMD = {
  title: "Fablab Machines Discovery",
  subtitle: "AR Mobile Application",
  thumbnail: "/thumbnails/fmd.png",
  workDone: [
    "UI Events & Animations in C#",
    "Augmented Reality with Vuforia",
    "AR Popup System",
    "3D Machine Simulation",
  ],
  outcomes: [
    "Experience in Augmented Reality (AR) development using Vuforia and Unity",
    "Experience in building engaging mobile experiences in Unity and mobile development skills",
    "Learned how to implement flexible UI designs that seamlessly adapt to different screen resolutions",
    "Gained valuable experience in teamwork, collaboration, and organization, while effectively translating designer ideas into maintainable code",
  ],
  tags: [
    "Mobile Dev",
    "$G University",
    "$G Won Award",
    "$R AR",
    "$R Unity",
    "$R Vuforia",
    "$R C#",
  ],
  pageURL: "/fablab-machines-discovery",
  accessible: true,
  element: <FabLabMachinesDiscovery />,
};

export const FILE_MANAGER = {
  title: "File Management System",
  subtitle: "Feature of a SAAS Application",
  thumbnail: "/thumbnails/fm.png",
  workDone: [
    "Microservices Architecture",
    "File Upload Based on Queue System",
    "User Access & Sharing Permissions",
    "Folder Hierarchies & Customization",
    "Activity Logs & System Emails",
  ],
  outcomes: [
    "Learned advantages of microservices over monolith, and how to design and implement a scalable system",
    "Experience in frontend & backend development, and how to integrate them seamlessly and securely",
    "Experience in working with AWS S3, and how to manage files and folders efficiently",
    "Experience in designing a modern and user-friendly UI that is informative and easy to navigate",
    "Learned optimization techniques for file downloads/previews, such as compression, caching and lazy loading",
    "Became better at achieving deadlines and collaborating with team members, especially when working in an agile environment",
  ],
  tags: [
    "Full-Stack Dev",
    "$G Work Project",
    "$R JavaScript",
    "$R TypeScript",
    "$R AWS S3",
    "$R React",
    "$R Express",
    "$R NestJS",
    "$R MySQL",
  ],
  picturesURL: [
    "/fm/1.png",
    "/fm/2.png",
    "/fm/3.png",
    "/fm/4.png",
    "/fm/5.png",
    "/fm/6.png",
    "/fm/7.png",
    "/fm/8.png",
    "/fm/9.png",
    "/fm/10.png",
    "/fm/11.png",
    "/fm/12.png",
  ],
  pageURL: "/file-management-system",
  accessible: true,
  element: <FileManagementSystem />,
};

export const STUDENT_SPECIALTY_ADVISOR = {
  title: "Student Specialty Advisor",
  subtitle: "Web Application",
  thumbnail: "/thumbnails/ssa.jpg",
  workDone: [
    "Responsive UI on Mobile & Desktop",
    "Verified Account System & User Roles",
    "Meeting Scheduler & Email Notifications",
    "User Achievements & Progress Tracking",
    "Admin Dashboard & Statistics",
  ],
  outcomes: [
    "Experience in creating a responsive UI that works well on both desktop and mobile devices",
    "Experience in account creation, verification, authentication, and role-based access control",
    "Learned how to implement a date & time based scheduler and how to automate email notifications for users",
    "Learned how to keep users engaged by developing features like achievements and progress tracking",
    "Learned how to create an admin dashboard with multiple CRUD operations and statistics",
  ],
  tags: [
    "Full-Stack Dev",
    "$G University",
    "$G Won Award",
    "$R JavaScript",
    "$R React",
    "$R Express",
    "$R MongoDB",
    "$R Heroku",
  ],
  pageURL: "/student-specialty-advisor",
  accessible: true,
  element: <StudentSpecialtyAdvisor />,
};

const GAMING_PINNED_PROJECTS = [
  USER_DRIVEN_3D_PROCEDURAL_TOOL,
  PRINCE_OF_PERSIA_REMAKE,
  MODERN_CPP_GAME_ENGINE,
  FOLLOW_THE_LIGHT,
  CAT_N_QUEST,
  ROBO_REPAIR,
];

const SOFTWARE_PINNED_PROJECTS = [
  USER_DRIVEN_3D_PROCEDURAL_TOOL,
  MODERN_CPP_GAME_ENGINE,
  FILE_MANAGER,
  STUDENT_SPECIALTY_ADVISOR,
  DISCORD_BUTLER_BOT,
  FMD,
];

const ALL_PINNED_PROJECTS = [
  USER_DRIVEN_3D_PROCEDURAL_TOOL,
  PRINCE_OF_PERSIA_REMAKE,
  MODERN_CPP_GAME_ENGINE,
  FOLLOW_THE_LIGHT,
  CAT_N_QUEST,
  ROBO_REPAIR,
  FMD,
  FILE_MANAGER,
  STUDENT_SPECIALTY_ADVISOR,
  DISCORD_BUTLER_BOT,
];

export function getPinnedProjectsByIndustry(industry) {
  switch (industry) {
    case "gaming":
      return GAMING_PINNED_PROJECTS;
    case "software":
      return SOFTWARE_PINNED_PROJECTS;
    case "all":
      return ALL_PINNED_PROJECTS;
    default:
      return ALL_PINNED_PROJECTS;
  }
}

export function getProjectsNumberByIndustry(industry) {
  switch (industry) {
    case "gaming":
      return GAMING_PINNED_PROJECTS.length;
    case "software":
      return SOFTWARE_PINNED_PROJECTS.length;
    case "all":
      return ALL_PINNED_PROJECTS.length;
    default:
      return ALL_PINNED_PROJECTS.length;
  }
}

function ProjectList({
  industry,
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
    <div
      key={industry}
      className="w-full flex justify-center items-stretch flex-wrap gap-[1.5%] to-fade-in-light"
    >
      {generateProjects}
    </div>
  );
}

export default ProjectList;
