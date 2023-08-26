import React from "react";
import { PRINCE_OF_PERSIA_REMAKE } from "../ProjectList";
import ProjectIntroduction from "./Shared/ProjectIntroduction";
import ProjectContent from "./Shared/ProjectContent";
import Footer from "../Footer";
import ProjectLearningOutcomes from "./Shared/ProjectLearningOutcomes";
import { Typography } from "@mui/material";
import CodeMobileWrapper from "./Shared/CodeMobileWrapper";
import BlueprintsHighlighter from "./Shared/BlueprintsHighligher";

function PrinceOfPersiaAtariRemake() {
  const usefulLinks = [
    {
      title: "Play On Itch.io: Published Game Page",
      href: "https://aymendps.itch.io/prince-of-persia-atari-st-remake",
    },
    {
      title: "Watch The First 5 Minutes Of Gameplay",
      href: "https://youtu.be/ceDJjWqTJvk",
    },
    {
      title: "Project's GitHub Repository",
      href: "https://github.com/aymendps/Project-Persia",
    },
    {
      title: "Game Feedback Form",
      href: "https://forms.gle/WLMxeZk18GrjwNpM8",
    },
  ];

  const playerMechanics = (
    <>
      <Typography className="leading-5 text-justify">
        Using the original game as a reference, I attempted to implement all of
        the player mechanics that it had, while also improving the way they work
        and feel to match the current gaming standards.
      </Typography>
      <br />
      <Typography variant="h6" className="text-justify text-green-600">
        Fighting Stance
      </Typography>
      <Typography className="leading-5 text-justify">
        The player character assumes a fighting stance upon <b>equipping</b>{" "}
        their sword. Similarly, they can un-equipping the sword to exit the
        stance. The actions that the player can take change drastically from one
        stance to another.
      </Typography>
      <div className="flex justify-between mt-4 screen-md:flex-col">
        <div className="w-[48%] screen-md:w-full">
          <CodeMobileWrapper title="Equipping Sword">
            <BlueprintsHighlighter
              title="Equipping Sword"
              src="https://blueprintue.com/render/n-b3epqu/"
              width="100%"
              height="350px"
            />
            <Typography
              variant="caption"
              className="text-center block mt-2 mb-4"
            >
              Programming "Equip Sword"
            </Typography>
          </CodeMobileWrapper>
        </div>
        <div className="w-[48%] screen-md:w-full">
          <video controls loop className="w-full">
            <source src="/ppr/equip_unequip.mp4" type="video/mp4" />
          </video>
          <Typography variant="caption" className="text-center block mt-2 mb-4">
            Equipping & Un-equipping Sword
          </Typography>
        </div>
      </div>
      <Typography className="leading-5 text-justify">
        List of actions that can be performed by the player{" "}
        <b>when not in fighting stance:</b>
      </Typography>
      <ul className="list-disc px-4">
        <li>
          <Typography className="leading-5 text-justify">
            Equip sword to enter fight stance
          </Typography>
        </li>
        <li>
          <Typography className="leading-5 text-justify">
            Jump, hang, climb and drop down
          </Typography>
        </li>
        <li>
          <Typography className="leading-5 text-justify">
            Interact with objects
          </Typography>
        </li>
        <li>
          <Typography className="leading-5 text-justify">
            Run and slow walk
          </Typography>
        </li>
      </ul>
      <br />
      <Typography className="leading-5 text-justify">
        List of actions that can be performed by the player{" "}
        <b>during fighting stance:</b>
      </Typography>
      <ul className="list-disc px-4">
        <li>
          <Typography className="leading-5 text-justify">
            Un-equip sword to leave fight stance
          </Typography>
        </li>
        <li>
          <Typography className="leading-5 text-justify">
            Run, slow walk and turn around
          </Typography>
        </li>
        <li>
          <Typography className="leading-5 text-justify">
            Perform a "finish it" animation
          </Typography>
        </li>
        <li>
          <Typography className="leading-5 text-justify">
            Dash, parry and attack
          </Typography>
        </li>
      </ul>
      <br />
      <Typography variant="h6" className="text-justify text-green-600">
        Locomotion Depending On Stance
      </Typography>
      <Typography className="leading-5 text-justify">
        Locomotion primarily involves <b>"running"</b> and <b>"slow walking"</b>{" "}
        to avoid obstacles. Character movement is restricted to a single axis,
        since this game is a platformer and the player is only allowed to move
        left or right during gameplay.
        <br />
        <br />
        Using an <b>animation state machine</b>, I implemented the locomotion
        states and the transitions from one state to another. Depending on the{" "}
        <b>player's input and velocity</b>, the states will transition to one
        another.
      </Typography>
      <img
        alt=""
        src="/ppr/locomotion.png"
        className="w-[40%] m-auto mt-4 mb-2 screen-md:w-full"
      ></img>
      <Typography variant="caption" className="text-center block mb-4">
        Locomotion Animation State Machine
      </Typography>
      <Typography className="leading-5 text-justify">
        The animation outcome for each state will vary based on whether the
        player is in the <b>fighting stance</b> or not.
        <br />
        Below is the implementation of the <b>"Walk/Run"</b> state, where a
        boolean that represents whether the player is in fighting stance is used
        to blend between animations.
        <img
          alt=""
          src="/ppr/walkrun.png"
          className="w-[75%] m-auto mt-4 mb-2 screen-md:w-full"
        ></img>
        <Typography variant="caption" className="text-center block mb-4">
          Walk/Run Animation State
        </Typography>
        When not in the fighting stance, the player can move freely in either
        the right or left direction. The player character will also{" "}
        <b>turn to face </b>
        the direction of the movement. The player can also <b>slow walk</b> to
        avoid traps like deadly spikes.
      </Typography>
      <div className="w-1/2 m-auto mt-4 screen-md:w-full">
        <video controls loop className="w-full">
          <source src="/ppr/locomotion_nofight.mp4" type="video/mp4" />
        </video>
      </div>
      <Typography variant="caption" className="text-center block mt-2">
        Locomotion outside of fighting stance
      </Typography>
      <br />
      <Typography className="leading-5 text-justify">
        When in the fighting stance, the player will{" "}
        <b>face the same direction</b> when moving to allow the player to{" "}
        <b>"lock on"</b> the enemies. The player can decide to face another
        direction using the <b>"turn around"</b> action.
      </Typography>
      <div className="flex justify-between mt-4 screen-md:flex-col">
        <div className="w-[48%] screen-md:w-full">
          <video controls loop className="w-full">
            <source src="/ppr/locomotion_fight.mp4" type="video/mp4" />
          </video>
          <Typography variant="caption" className="text-center block mt-2 mb-4">
            Locomotion during fighting stance
          </Typography>
        </div>
        <div className="w-[48%] screen-md:w-full">
          <video controls loop className="w-full">
            <source src="/ppr/turnaround.mp4" type="video/mp4" />
          </video>
          <Typography variant="caption" className="text-center block mt-2 mb-4">
            Turn around action during fight
          </Typography>
        </div>
      </div>
      <Typography variant="h6" className="text-justify text-green-600">
        Reworked Player Camera
      </Typography>
      <Typography className="leading-5 text-justify">
        The camera of the original game is <b>outdated</b> by today's standards
        because it doesn't follow the player as they move. Trying to implement
        the player camera exactly as it was didn't yield satisfactory results
        since it was designed for a 2D game, whereas this remake is a 3D version
        of the game.
        <br />
        <br />
        Therefore, I chose to implement my own customized camera{" "}
        <b>that follows the player with adjustable offset</b>, and is capable of
        performing cinematic actions like{" "}
        <b>zooming in/out and fading in/out to black.</b>
      </Typography>
      <div className="flex justify-between mt-4 screen-md:flex-col">
        <div className="w-[48%] screen-md:w-full">
          <CodeMobileWrapper title="Update Camera Location">
            <BlueprintsHighlighter
              title="Update Camera Location"
              src="https://blueprintue.com/render/its3eaz5/"
              width="100%"
              height="350px"
            />
            <Typography
              variant="caption"
              className="text-center block mt-2 mb-4"
            >
              Programming "Update Camera Location"
            </Typography>
          </CodeMobileWrapper>
        </div>
        <div className="w-[48%] screen-md:w-full">
          <video controls loop className="w-full">
            <source src="/ppr/camera_offset.mp4" type="video/mp4" />
          </video>
          <Typography variant="caption" className="text-center block mt-2 mb-4">
            Following player with adjustable offset
          </Typography>
        </div>
      </div>
      <div className="flex justify-between mt-4 screen-md:flex-col">
        <div className="w-[48%] screen-md:w-full">
          <CodeMobileWrapper title="Zoom Camera">
            <BlueprintsHighlighter
              title="Zoom Camera"
              src="https://blueprintue.com/render/xwcgto1r/"
              width="100%"
              height="350px"
            />
            <Typography
              variant="caption"
              className="text-center block mt-2 mb-4"
            >
              Programming "Zoom Camera"
            </Typography>
          </CodeMobileWrapper>
        </div>
        <div className="w-[48%] screen-md:w-full">
          <video controls loop className="w-full">
            <source src="/ppr/camera_zoom.mp4" type="video/mp4" />
          </video>
          <Typography variant="caption" className="text-center block mt-2 mb-4">
            Adjustable zoom in and out
          </Typography>
        </div>
      </div>
      <Typography variant="h6" className="text-justify text-green-600">
        Jumping, Hanging & Climbing
      </Typography>
      <br />
      <Typography variant="h6" className="text-justify text-green-600">
        Interacting With Objects
      </Typography>
      <br />
      <Typography variant="h6" className="text-justify text-green-600">
        Dashing, Parrying & Attacking
      </Typography>
    </>
  );

  const contentList = [playerMechanics];

  const workDone = PRINCE_OF_PERSIA_REMAKE.workDone.map((work, index) => {
    return {
      id: work.replace(/\s+/g, ""),
      title: work,
      content: contentList[index] || "More details will be added soon!",
    };
  });

  return (
    <>
      <ProjectIntroduction
        title={PRINCE_OF_PERSIA_REMAKE.title}
        youtubeURL="https://www.youtube.com/embed/ceDJjWqTJvk"
        projectType="Internship"
        role="Gameplay Programmer"
        solo={PRINCE_OF_PERSIA_REMAKE.solo}
        yearAndDuration={PRINCE_OF_PERSIA_REMAKE.yearAndDuration}
        platform="Standalone PC"
        softwareUsed="Unreal Engine 5 - C++"
        usefulLinks={usefulLinks}
        workDone={workDone}
        description={`This project carries significant emotional and nostalgic importance for me, as it brings back memories of watching family members playing the original game two decades ago!

        This is a difficult platformer, where you play the role of an imprisoned prince that needs to find his way out of Jaffar's deadly dungeons, in one hour, to save the princess he loves from that tyrant's wrath.

        Much like the original game, you navigate the dungeons by running, jumping, hanging, climbing and slow walking to evade traps and obstacles. An enhanced set of fighting actions awaits you for engaging in sword fights as well.
        
        As part of my internship at Lanterns Studios, I was assigned to work on this project to learn UE5 and to get familiar with C++ Use Cases, Blueprints, AI Behaviour, Animations, Input Handling, Unreal Motion Graphics and the implementation of other important game systems.`}
      />
      <ProjectContent workDone={workDone} />
      <ProjectLearningOutcomes outcomes={PRINCE_OF_PERSIA_REMAKE.outcomes} />
      <Footer />
    </>
  );
}

export default PrinceOfPersiaAtariRemake;
