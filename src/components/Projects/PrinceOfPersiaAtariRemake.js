import React from "react";
import { PRINCE_OF_PERSIA_REMAKE } from "../ProjectList";
import ProjectIntroduction from "./Shared/ProjectIntroduction";
import ProjectContent from "./Shared/ProjectContent";
import Footer from "../Footer";
import { Typography } from "@mui/material";
import CodeMobileWrapper from "./Shared/CodeMobileWrapper";
import BlueprintsHighlighter from "./Shared/BlueprintsHighligher";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

function PrinceOfPersiaAtariRemake() {
  const usefulLinks = [
    {
      title: "Play on itch.io: Published Game Page",
      href: "https://aymendps.itch.io/prince-of-persia-atari-st-remake",
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
      <div className="flex justify-between items-center mt-4 screen-md:flex-col">
        <div className="w-[48%] screen-md:w-full">
          <CodeMobileWrapper title="Equipping Sword">
            <BlueprintsHighlighter
              title="Equipping Sword"
              src="https://blueprintue.com/render/n-b3epqu/"
              width="100%"
              height="370px"
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
      <div className="flex justify-between items-center mt-4 screen-md:flex-col">
        <div className="w-[48%] screen-md:w-full">
          <CodeMobileWrapper title="Update Camera Location">
            <BlueprintsHighlighter
              title="Update Camera Location"
              src="https://blueprintue.com/render/its3eaz5/"
              width="100%"
              height="370px"
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
      <div className="flex justify-between items-center mt-4 screen-md:flex-col">
        <div className="w-[48%] screen-md:w-full">
          <CodeMobileWrapper title="Zoom Camera">
            <BlueprintsHighlighter
              title="Zoom Camera"
              src="https://blueprintue.com/render/xwcgto1r/"
              width="100%"
              height="370px"
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
      <Typography className="leading-5 text-justify">
        Another <b>state machine</b> is used to controls all of the animations
        that are related to jumping, hanging, climbing up & dropping down, and
        implements all the transitions between them and the locomotion state
        machine.
      </Typography>
      <img
        alt=""
        src="/ppr/mainsm.png"
        className="w-[40%] m-auto mt-4 mb-2 screen-md:w-full"
      ></img>
      <Typography variant="caption" className="text-center block mb-4">
        State Machine for jumping, hanging, climbing up & dropping down
      </Typography>
      <Typography className="leading-5 text-justify">
        To determine whether the player can indeed hang onto an edge, I used{" "}
        <b>two sphere traces</b> that activate whenever the player is falling
        down. These two traces are solely concerned with a trace channel named{" "}
        <b>"ClimbableWall"</b>, which is used to <b>designate</b> level elements
        as <b>climbable</b>.
        <br />
        <br />
        The first trace is used to determine whether a climbable element{" "}
        <b>is in front of the player or not.</b> If a climbable element is
        found, we retrieve its <b>location</b> and the <b>normal vector</b>{" "}
        resulting from its hit with the trace. These pieces of information will
        be used to calculate{" "}
        <b>where the player should be moved to snap on the climbable element</b>{" "}
        and to ensure the player <b>is facing it directly.</b> Furthermore, this
        trace predicts whether the player is going to hang <b>in mid-air</b>{" "}
        (feet in the air) or hang <b>in contact with a wall</b> (feet resting on
        the climbable element) using actor tags.
      </Typography>
      <div className="w-3/4 m-auto screen-md:w-full mt-4">
        <CodeMobileWrapper title="Climbable Wall Forward Trace">
          <BlueprintsHighlighter
            title="Climbable Wall Forward Trace"
            src="https://blueprintue.com/render/w7xw9qz5/"
          />
          <Typography variant="caption" className="text-center block mt-2 mb-4">
            Programming "Climbable Wall Forward Trace"
          </Typography>
        </CodeMobileWrapper>
      </div>
      <Typography className="leading-5 text-justify">
        The second trace is used to determine whether a climbable element's
        surface <b>is close enough for the player to grip or not.</b> If the
        element is <b>too tall</b> or its surface <b>is out of reach</b>, then
        the player shouldn't be able to hold onto it. However, if a valid
        element's surface is located, then we obtain{" "}
        <b>the location of that surface</b> to calculate <b>the height</b> at
        which the player should be <b>positioned</b> when hanging onto it.
      </Typography>
      <div className="w-3/4 m-auto screen-md:w-full mt-4">
        <CodeMobileWrapper title="Climbable Wall Surface Trace">
          <BlueprintsHighlighter
            title="Climbable Wall Surface Trace"
            src="https://blueprintue.com/render/ivbwo0jq/"
          />
          <Typography variant="caption" className="text-center block mt-2 mb-4">
            Programming "Climbable Wall Surface Trace"
          </Typography>
        </CodeMobileWrapper>
      </div>
      <Typography className="leading-5 text-justify">
        When both traces successfully hit a climbable element, the player can
        hold or press the Jump button to hang onto the element. Pressing the
        Jump button again makes the player climb up.
        <br /> Below is a video that showcases how the two traces make it
        possible for the player to hang onto surfaces and climb up, along with
        the implementation of both these events.
      </Typography>
      <div className="flex justify-between items-center mt-4 screen-md:flex-col">
        <div className="w-[48%] screen-md:w-full">
          <CodeMobileWrapper title="Hang & Climb Events">
            <BlueprintsHighlighter
              title="Hang & Climb Events"
              src="https://blueprintue.com/render/ibtqx5z5/"
              width="100%"
              height="370px"
            />
            <Typography
              variant="caption"
              className="text-center block mt-2 mb-4"
            >
              Programming "Hang & Climb Events"
            </Typography>
          </CodeMobileWrapper>
        </div>
        <div className="w-[48%] screen-md:w-full">
          <video controls loop className="w-full">
            <source src="/ppr/traces.mp4" type="video/mp4" />
          </video>
          <Typography variant="caption" className="text-center block mt-2 mb-4">
            Hang & Climb using sphere traces
          </Typography>
        </div>
      </div>
      <br />
      <Typography variant="h6" className="text-justify text-green-600">
        Dashing, Parrying & Attacking
      </Typography>
      <Typography className="leading-5 text-justify">
        After equipping their sword, the player gets access to new actions
        related to the fighting stance. Most animations of these actions are
        managed using <b>animation montages.</b>
        <br />
        <br />
        <b>"Dashing"</b> replaces "Jump" and enhances the player's mobility
        while fighting an enemy. Depending on the player's{" "}
        <b>movement direction</b>, they can dash <b>forward or backward</b> to
        evade attacks or approach the enemy quickly.
      </Typography>
      <div className="flex justify-between items-center mt-4 screen-md:flex-col">
        <div className="w-[48%] screen-md:w-full">
          <CodeMobileWrapper title="Input Action: Dashing">
            <BlueprintsHighlighter
              title="Input Action: Dashing"
              src="https://blueprintue.com/render/mmcj571n/"
              width="100%"
              height="370px"
            />
            <Typography
              variant="caption"
              className="text-center block mt-2 mb-4"
            >
              Programming "Input Action: Dashing"
            </Typography>
          </CodeMobileWrapper>
        </div>
        <div className="w-[48%] screen-md:w-full">
          <video controls loop className="w-full">
            <source src="/ppr/dashing.mp4" type="video/mp4" />
          </video>
          <Typography variant="caption" className="text-center block mt-2 mb-4">
            Dashing forward & backward
          </Typography>
        </div>
      </div>
      <Typography className="leading-5 text-justify">
        When it comes to <b>attacking</b>, the player can perform a{" "}
        <b>single</b> slash or unleash a<b> series</b> of successive attacks.
        The player can also perform attacks quickly <b>after dashing</b> to
        encourage the dueling aspect of the game.
      </Typography>
      <div className="flex justify-between items-center mt-4 screen-md:flex-col">
        <div className="w-[48%] screen-md:w-full">
          <CodeMobileWrapper title="Attack Event">
            <BlueprintsHighlighter
              title="Attack Event"
              src="https://blueprintue.com/render/c3zd5fqx/"
              width="100%"
              height="370px"
            />
            <Typography
              variant="caption"
              className="text-center block mt-2 mb-4"
            >
              Programming "Attack Event"
            </Typography>
          </CodeMobileWrapper>
        </div>
        <div className="w-[48%] screen-md:w-full">
          <video controls loop className="w-full">
            <source src="/ppr/attacks.mp4" type="video/mp4" />
          </video>
          <Typography variant="caption" className="text-center block mt-2 mb-4">
            Player performing attacks
          </Typography>
        </div>
      </div>
      <Typography className="leading-5 text-justify">
        In addition to attacking, the player can <b>parry</b> incoming attacks.
        The animation montage related to parrying has a <b>notify window</b>{" "}
        that determines when the parry should be successful. If the attack is
        landed
        <b> outside of that window</b>, then the parry does not count, and the
        player still takes damage. However, if an attack is landed{" "}
        <b>during the notify window</b>, then the enemy will become staggered,
        and the player will not take any damage.
      </Typography>
      <div className="flex justify-between items-center mt-4 screen-md:flex-col">
        <div className="w-[48%] screen-md:w-full">
          <CodeMobileWrapper title="Parry Event">
            <BlueprintsHighlighter
              title="Parry Event"
              src="https://blueprintue.com/render/0umdnp_u/"
              width="100%"
              height="370px"
            />
            <Typography
              variant="caption"
              className="text-center block mt-2 mb-4"
            >
              Programming "Parry Event"
            </Typography>
          </CodeMobileWrapper>
        </div>
        <div className="w-[48%] screen-md:w-full">
          <video controls loop className="w-full">
            <source src="/ppr/parry.mp4" type="video/mp4" />
          </video>
          <Typography variant="caption" className="text-center block mt-2 mb-4">
            Player performing parry
          </Typography>
        </div>
      </div>
      <Typography variant="h6" className="text-justify text-green-600">
        Interacting With Objects
      </Typography>
      <Typography className="leading-5 text-justify">
        Throughout the levels, the player will encounter objects such as:
        potions, weapons, stairs.. that can be <b>interacted with.</b>
        <br />
        <br />
        These objects have nothing in common when it comes to their
        functionalities except being <b>interactable.</b> That's why it made
        sense to introduce <b>an interface named "Interactable"</b> with methods
        related to that action. All the other objects would then implement this
        interface with their <b>individual logic.</b>
        <br />
        When the player intends to interact with an object, the game searches
        for the <b>nearest reachable interactable object</b> and triggers its{" "}
        <b>"Interact"</b> method.
        <br />
        <br />
        Below is the <b>C++</b> implementation of the{" "}
        <b>"Interactable" interface</b> and the <b>method</b> that finds the
        nearest interactable object.
      </Typography>
      <div className="flex justify-between screen-md:flex-col mt-4">
        <div className="w-[48%] screen-md:w-full">
          <CodeMobileWrapper title={"Interactable Interface"}>
            <SyntaxHighlighter
              customStyle={{ width: "100%", height: "450px" }}
              language="cpp"
              showLineNumbers={true}
              style={vscDarkPlus}
            >
              {`#pragma once

#include "CoreMinimal.h"
#include "UObject/Interface.h"
#include "Interactable.generated.h"

// This class does not need to be modified.
UINTERFACE(MinimalAPI)
class UInteractable : public UInterface
{
	GENERATED_BODY()
};

/**
 * Interface for interactable actors. They execute their own logic when interacted with.
 */
class PROJECTPERSIA_API IInteractable
{
	GENERATED_BODY()

	// Add interface functions to this class. This is the class that will be inherited to implement this interface.
public:
	/**
	 * Executes the interactable actor's logic
	 * @param PlayerCharacter The player character that is interacting with the actor
	 */
	UFUNCTION(BlueprintCallable, BlueprintImplementableEvent, Category="Interactable")
	void Interact(class APlayerCharacter* PlayerCharacter);
};
`}
            </SyntaxHighlighter>
            <Typography variant="caption" className="text-center block">
              Code snippet of the Interactable interface
            </Typography>
          </CodeMobileWrapper>
        </div>
        <div className="w-[48%] screen-md:w-full">
          <CodeMobileWrapper title={"Find Interactable"}>
            <SyntaxHighlighter
              customStyle={{ width: "100%", height: "450px" }}
              language="cpp"
              showLineNumbers={true}
              style={vscDarkPlus}
            >
              {`	# HEADER FILE #
  // Iterates through an array of actors and returns the first one that implements the Interactable interface.
  UFUNCTION()
  AActor* FindInteractableInArray(TArray<AActor*> &Actors);
  /**
	 * Attempts to find the first interactable actor that the player is overlapping with.
	 * @return The first interactable actor that the player is overlapping with.
	 */
	UFUNCTION(BlueprintCallable, Category="Interactable", Meta=(ExpandEnumAsExecs="InteractableFinder"))
	AActor* FindInteractable(EInteractableFinder& InteractableFinder);

  # SOURCE FILE #
// Iterates through an array of actors and returns the first one that implements the Interactable interface.
AActor* APlayerCharacter::FindInteractableInArray(TArray<AActor*> &Actors)
{
	// Iterate and return the first one that implements the Interactable interface.
	for (int i=0; i<Actors.Num(); i++)
	{
		if(Actors[i]->GetClass()->ImplementsInterface(UInteractable::StaticClass()))
		{
			return Actors[i];
		}
	}

	// If we get here, we didn't find any interactable actors.
	return nullptr;
}

// Attempts to find the first interactable actor that the player is overlapping with.
AActor* APlayerCharacter::FindInteractable(EInteractableFinder& InteractableFinder)
{
	TArray<AActor*> OverlappingActors;
	GetOverlappingActors(OverlappingActors);

	AActor* Interactable = FindInteractableInArray(OverlappingActors);
	
	if (Interactable == nullptr)
	{
		InteractableFinder = EInteractableFinder::NotFound;
	}
	else
	{
		InteractableFinder = EInteractableFinder::Found;
	}
	
	return Interactable;

}`}
            </SyntaxHighlighter>
            <Typography variant="caption" className="text-center block">
              Code snippet of Find Interactable
            </Typography>
          </CodeMobileWrapper>
        </div>
      </div>
      <br />
      <Typography className="leading-5 text-justify">
        When interacting with an object, the player controller{" "}
        <b>disables input and the game's countdown timer temporarily.</b> It
        instructs the camera to zoom in, allowing the interaction animation and
        effects to play smoothly. Once the interaction is complete, the
        <b> "FinishedInteract" </b>event is called by the interactable class.
        This event informs the controller that the interaction{" "}
        <b>has concluded</b>, prompting the camera to zoom out and re-enabling
        input and the countdown timer.
      </Typography>
      <div className="flex justify-between items-center mt-4 screen-md:flex-col">
        <div className="w-[48%] screen-md:w-full">
          <CodeMobileWrapper title="Interaction Events">
            <BlueprintsHighlighter
              title="Interaction Events"
              src="https://blueprintue.com/render/4z_b63ue/"
              width="100%"
              height="370px"
            />
            <Typography
              variant="caption"
              className="text-center block mt-2 mb-4"
            >
              Programming "Interaction Events"
            </Typography>
          </CodeMobileWrapper>
        </div>
        <div className="w-[48%] screen-md:w-full">
          <video controls loop className="w-full">
            <source src="/ppr/potion.mp4" type="video/mp4" />
          </video>
          <Typography variant="caption" className="text-center block mt-2 mb-4">
            Example of interacting with potion
          </Typography>
        </div>
      </div>
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
        youtubeURL={["https://www.youtube.com/embed/ceDJjWqTJvk"]}
        projectType="Internship"
        role="Game Developer"
        solo={PRINCE_OF_PERSIA_REMAKE.solo}
        platform="Standalone PC"
        softwareUsed="Unreal Engine 5 | Blueprints | C++"
        usefulLinks={usefulLinks}
        workDone={workDone}
        outcomes={PRINCE_OF_PERSIA_REMAKE.outcomes}
        description={`This project carries significant emotional and nostalgic importance for me, as it brings back memories of watching family members playing the original game two decades ago!

        This is a difficult platformer, where you play the role of an imprisoned prince that needs to find his way out of Jaffar's deadly dungeons, in one hour, to save the princess he loves from that tyrant's wrath.

        Much like the original game, you navigate the dungeons by running, jumping, hanging, climbing and slow walking to evade traps and obstacles. An enhanced set of fighting actions awaits you for engaging in sword fights as well.
        
        As part of my internship at Lanterns Studios, I was assigned to work on this project to learn UE5 and to get familiar with C++ Use Cases, Blueprints, AI Behaviour, Animations, Input Handling, Unreal Motion Graphics and the implementation of other important game systems.`}
      />
      <ProjectContent workDone={workDone} />
      <Footer />
    </>
  );
}

export default PrinceOfPersiaAtariRemake;
