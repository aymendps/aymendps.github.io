import React from "react";
import { FOLLOW_THE_LIGHT } from "../ProjectList";
import ProjectIntroduction from "./Shared/ProjectIntroduction";
import ProjectContent from "./Shared/ProjectContent";
import Footer from "../Footer";
import ProjectLearningOutcomes from "./Shared/ProjectLearningOutcomes";
import { Typography } from "@mui/material";
import SyntaxHighlighterMobileWrapper from "./Shared/SyntaxHighlighterMobileWrapper";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

function FollowTheLight() {
  const usefulLinks = [];

  const playerMechanicsSection = (
    <>
      <Typography className="leading-5 text-justify mb-2">
        I designed and implemented multiple mechanics for the player character
        that allows it to navigate its way through the different puzzles and
        obstacles.
      </Typography>
      <Typography variant="h6" className="text-justify text-green-600">
        Wall Glowing
      </Typography>
      <Typography className="leading-5 text-justify">
        When the ball <b>collides</b> with a wall or surface, it shares some of
        its light with it. This is the mechanic that the game is based around
        and allows the player <b>to slowly reveal</b> the surroundings.
      </Typography>
      <Typography variant="h6" className="text-justify text-green-600">
        Moving & Braking
      </Typography>
      <Typography className="leading-5 text-justify">
        By exerting <b>physical force</b>, the player can move the ball
        character around or brake to halt its momentum. This design decision was
        made to introduce a level of <b>challenge</b> for the player in
        controlling the position of the ball.
      </Typography>
      <div className="flex justify-between mt-4 screen-md:flex-col">
        <div className="w-[48%] screen-md:w-full">
          <video controls loop className="w-full">
            <source src="/ftl/moving.mp4" type="video/mp4" />
          </video>
          <Typography variant="caption" className="text-center block mt-2 mb-4">
            Showcasing movement by exerting force
          </Typography>
        </div>
        <div className="w-[48%] screen-md:w-full">
          <video controls loop className="w-full">
            <source src="/ftl/braking.mp4" type="video/mp4" />
          </video>
          <Typography variant="caption" className="text-center block mt-2 mb-4">
            Showcasing braking by applying opposite force
          </Typography>
        </div>
      </div>
      <Typography variant="caption" className="text-center block mt-2">
        Showcasing movement by exerting force
      </Typography>
      <Typography variant="h6" className="text-justify text-green-600">
        Normal Bouncing
      </Typography>
      <Typography className="leading-5 text-justify">
        The ball can bounce upwards to reach higher platforms or to avoid
        obstacles in its path. The player is still able to move the ball while
        it's in the air, with with less control compared to when it's on the
        ground.
      </Typography>
      <div className="w-1/2 m-auto mt-4 screen-md:w-full">
        <video controls loop className="w-full">
          <source src="/ftl/normal bounce.mp4" type="video/mp4" />
        </video>
      </div>
      <Typography variant="caption" className="text-center block mt-2">
        Showcasing normal bouncing
      </Typography>
      <Typography variant="h6" className="text-justify text-green-600">
        Repetitive Bouncing in the same spot
      </Typography>
      <Typography className="leading-5 text-justify">
        When the ball falls back to the <b>same spot</b> it bounced from
        initially, it gains more energy and bounces <b>higher</b>, allowing it
        to reach even greater heights with each <b>successive</b> bounce.
        <br />
        However, there is a limit to how many times it can bounce and how high
        it can go, so the game doesn't break.
      </Typography>
      <div className="w-1/2 m-auto mt-4 screen-md:w-full">
        <video controls loop className="w-full">
          <source src="/ftl/rep bounce.mp4" type="video/mp4" />
        </video>
      </div>
      <Typography variant="caption" className="text-center block mt-2">
        Showcasing repetitive bouncing
      </Typography>
      <Typography variant="h6" className="text-justify text-green-600">
        Wall Hopping
      </Typography>
      <Typography className="leading-5 text-justify">
        Some <b>specific walls</b> are positioned facing each other and allow
        the ball to <b>quickly bounce between them</b>, providing a new means of
        navigation for the player.
        <br />
        As long as the ball is clinging to one of the walls, it can either slide
        down or bounce.
      </Typography>
      <div className="w-1/2 m-auto mt-4 screen-md:w-full">
        <video controls loop className="w-full">
          <source src="/ftl/hopping.mp4" type="video/mp4" />
        </video>
      </div>
      <Typography variant="caption" className="text-center block mt-2">
        Showcasing wall hopping
      </Typography>
      <Typography variant="h6" className="text-justify text-green-600">
        Changing Perspective
      </Typography>
      <Typography className="leading-5 text-justify">
        The player is able to <b>rotate</b> the camera, changing their
        perspective either by <b>freely moving</b> it from side to side or by{" "}
        <b>snapping</b> it to one of the preset angles. This can be helpful when
        trying to find surfaces to move/bounce towards.
      </Typography>
      <div className="w-1/2 m-auto mt-4 screen-md:w-full">
        <video controls loop className="w-full">
          <source src="/ftl/camera.mp4" type="video/mp4" />
        </video>
      </div>
      <Typography variant="caption" className="text-center block mt-2">
        Showcasing camera rotation, followed by camera snapping
      </Typography>
    </>
  );
  const playerFSM = (
    <>
      <Typography className="leading-5 text-justify">
        When I initially tried to implement all the mechanics that the ball
        character has, I started to face some problems that can be summarized by
        the following:
      </Typography>
      <ul className="list-disc px-4">
        <li>
          <Typography className="leading-5 text-justify">
            Every time I work on adding a new mechanic, I have to modify old
            code that I wrote, increasing its complexity
          </Typography>
        </li>
        <li>
          <Typography className="leading-5 text-justify">
            Every time I finish adding a new mechanic, weird bugs appear like
            the ball being able to bounce while it's in the air
          </Typography>
        </li>
      </ul>
      <br />
      <Typography className="leading-5 text-justify">
        I realized that something is clearly wrong with my approach, and after
        some research I decided to adopt the <b>Finite State Machine (FSM)</b>{" "}
        pattern.
        <br />I designed the diagram above to describe how the <b>FSM</b> should
        work for the ball character, using a flowchart that includes states,
        inputs and transitions.
      </Typography>
      <img
        alt=""
        src="/ftl/fsm.png"
        className="w-[40%] m-auto mt-4 mb-2 screen-md:w-full"
      ></img>
      <Typography variant="caption" className="text-center block mb-4">
        Finite State Machine of the Ball Character
      </Typography>
      <Typography className="leading-5 text-justify">
        The essence of this pattern is that:
      </Typography>
      <ul className="list-disc px-4">
        <li>
          <Typography className="leading-5 text-justify">
            There is a <b>fixed set of states</b> that the FSM can be in
          </Typography>
        </li>
        <li>
          <Typography className="leading-5 text-justify">
            The FSM can only be in <b>one state at a time</b>
          </Typography>
        </li>
        <li>
          <Typography className="leading-5 text-justify">
            Each state has a <b>set of transitions</b> that point to another
            state
          </Typography>
        </li>
        <li>
          <Typography className="leading-5 text-justify">
            If a condition is met or if an input is pressed, the{" "}
            <b>state changes</b> according to that transition
          </Typography>
        </li>
      </ul>
      <br />
      <Typography className="leading-5 text-justify">
        When it comes to programming, this is very useful because it not only
        separates the code into multiple smaller components, thus eliminating
        complicated statements, but also reduces the potential for bugs. For
        example, in this case, it is <b>not possible</b> for the ball character
        to brake while it is falling or bouncing. This limitation arises from
        the fact that, according to the diagram, the only way to initiate
        braking is when the ball character is <b>on the ground</b> and is in the{" "}
        <b>moving state</b>. This is because the moving state is the{" "}
        <b>only state that has a transition leading to the braking state</b>.
      </Typography>
      <br />
      <Typography className="leading-5 text-justify">
        To transform this design into executable code, I implemented the{" "}
        <b>BallFiniteStateMachine</b> class. It holds the collection of the{" "}
        <b>possible states</b>, and keeps track of the <b>current state</b> of
        the ball. It also has various methods that can be called from a
        Monobehaviour class, and a function that allows the current state to{" "}
        <b>transition</b> to another one.
      </Typography>
      <div className="w-[69%] screen-md:w-full m-auto mt-2 mb-2">
        <SyntaxHighlighterMobileWrapper title="BallFiniteStateMachine">
          <SyntaxHighlighter
            customStyle={{ width: "100%", height: "450px" }}
            language="csharp"
            showLineNumbers={true}
            style={vscDarkPlus}
          >
            {`using UnityEngine;

namespace Gameplay.Ball_Finite_State_Machine
{
    public class BallFiniteStateMachine
    {
        // Current State
        private BallBaseState _currentState;
        
        // Reference To Ball Controller
        private readonly BallController _ballController;

        // List Of States
        public readonly BallMovingState ballMovingState;
        public readonly BallBrakingState ballBrakingState;
        public readonly BallBouncingState ballBouncingState;
        public readonly BallWallHoppingState ballWallHoppingState;
        public readonly BallFallingState ballFallingState;
        public readonly BallDeadState ballDeadState;
        
        public BallFiniteStateMachine(BallController ballController)
        {
            _ballController = ballController;
            ballMovingState = new BallMovingState();
            ballBrakingState = new BallBrakingState();
            ballBouncingState = new BallBouncingState();
            ballWallHoppingState = new BallWallHoppingState();
            ballFallingState = new BallFallingState();
            ballDeadState = new BallDeadState();
        }

        public void Start()
        {
            ChangeState(ballFallingState);
        }
        
        public void Update()
        {
            _currentState.HandleInputAndConditions(_ballController, this);
        }
        
        public void FixedUpdate()
        {
            _currentState.FixedUpdate(_ballController, this);
        }
        
        public void OnCollisionEnter(Collision collision)
        {
            _currentState.OnCollisionEnter(_ballController, this, collision);
        }
        
        public void ChangeState(BallBaseState newState)
        {
            _currentState = newState;
            _currentState.Enter(_ballController, this);
        }
    }
}`}
          </SyntaxHighlighter>
          <Typography variant="caption" className="text-center block mb-4 mt-2">
            Code snippet of BallFiniteStateMachine class
          </Typography>
        </SyntaxHighlighterMobileWrapper>
      </div>
      <Typography className="leading-5 text-justify">
        To represent the ball states, I implemented an abstract class called{" "}
        <b>BallBaseState</b>, that all the other states would derive from. This
        ensures that all the states have the same structure.
      </Typography>
      <div className="w-[69%] screen-md:w-full m-auto mt-2 mb-2">
        <SyntaxHighlighterMobileWrapper title="BallBaseState">
          <SyntaxHighlighter
            customStyle={{ width: "100%", height: "360px" }}
            language="csharp"
            showLineNumbers={true}
            style={vscDarkPlus}
          >
            {`using UnityEngine;

namespace Gameplay.Ball_Finite_State_Machine
{
    /// <summary>
    /// Base State Class For Ball Finite State Machine
    /// </summary>
    public abstract class BallBaseState
    {
        public abstract void Enter(BallController ballController, BallFiniteStateMachine ballFiniteStateMachine);
        public abstract void FixedUpdate(BallController ballController, BallFiniteStateMachine ballFiniteStateMachine);
        public abstract void OnCollisionEnter(BallController ballController,
            BallFiniteStateMachine ballFiniteStateMachine, Collision collision);
        public abstract void HandleInputAndConditions(BallController ballController,
            BallFiniteStateMachine ballFiniteStateMachine);
    }
}`}
          </SyntaxHighlighter>
          <Typography variant="caption" className="text-center block mb-4 mt-2">
            Code snippet of the BallFiniteStateMachine class
          </Typography>
        </SyntaxHighlighterMobileWrapper>
      </div>
      <Typography className="leading-5 text-justify">
        Below you can find the implementation of two states: The first handles
        braking and the second handles falling.
      </Typography>
      <div className="flex justify-between screen-md:flex-col mt-2">
        <div className="w-[48%] screen-md:w-full">
          <SyntaxHighlighterMobileWrapper title={"BallBrakingState"}>
            <SyntaxHighlighter
              customStyle={{ width: "100%", height: "450px" }}
              language="csharp"
              showLineNumbers={true}
              style={vscDarkPlus}
            >
              {`using UnityEngine;

namespace Gameplay.Ball_Finite_State_Machine
{
    public class BallBrakingState : BallOnGroundState
    {
        public override void Enter(BallController ballController, BallFiniteStateMachine ballFiniteStateMachine)
        {
            // Debug.Log("Entering Braking State");
        }

        public override void FixedUpdate(BallController ballController, BallFiniteStateMachine ballFiniteStateMachine)
        {
            // Apply braking force opposite to the direction of the ball's velocity
            ballController.RigidbodyComponent.AddForce(-ballController.RigidbodyComponent.velocity *
                                                       ballController.brakingForce);
                
            // If the ball's velocity is less than 0.1, stop the ball completely
            if (ballController.RigidbodyComponent.velocity.sqrMagnitude < 0.1f)
                ballController.RigidbodyComponent.velocity = Vector3.zero;
        }

        public override void OnCollisionEnter(BallController ballController, BallFiniteStateMachine ballFiniteStateMachine,
            Collision collision)
        {
            
        }

        public override void HandleInputAndConditions(BallController ballController, BallFiniteStateMachine ballFiniteStateMachine)
        {
            if (!ballController.AttemptingToBrake)
                ballFiniteStateMachine.ChangeState(ballFiniteStateMachine.ballMovingState);
            else base.HandleInputAndConditions(ballController, ballFiniteStateMachine);
        }
    }
}`}
            </SyntaxHighlighter>
            <Typography variant="caption" className="text-center block">
              Code snippet of the BallBrakingState class
            </Typography>
          </SyntaxHighlighterMobileWrapper>
        </div>
        <div className="w-[48%] screen-md:w-full">
          <SyntaxHighlighterMobileWrapper title={"BallFallingState"}>
            <SyntaxHighlighter
              customStyle={{ width: "100%", height: "450px" }}
              language="csharp"
              showLineNumbers={true}
              style={vscDarkPlus}
            >
              {`using UnityEngine;

namespace Gameplay.Ball_Finite_State_Machine
{
    public class BallFallingState : BallBaseState
    {
        public override void Enter(BallController ballController, BallFiniteStateMachine ballFiniteStateMachine)
        {
            // Debug.Log("Entering Falling State");
        }
        public override void FixedUpdate(BallController ballController, BallFiniteStateMachine ballFiniteStateMachine)
        {
            /*
             * Move the ball in the direction set by the input manager
             * Since the ball is in the air, the ball will move slower than it would on the ground
             */
            ballController.RigidbodyComponent.AddForce(ballController.RotationRelativeToCamera * ballController.Direction *
                ballController.movementSpeed / ballController.airResistance);
        }

        public override void OnCollisionEnter(BallController ballController,
            BallFiniteStateMachine ballFiniteStateMachine,
            Collision collision)
        {
            if (collision.gameObject.layer == ballController.groundLayer)
            {
                ballFiniteStateMachine.ChangeState(ballFiniteStateMachine.ballMovingState);
            } else if (collision.gameObject.layer == ballController.hoppingWallLayer)
            {
                ballFiniteStateMachine.ChangeState(ballFiniteStateMachine.ballWallHoppingState);
            }
        }

        public override void HandleInputAndConditions(BallController ballController,
            BallFiniteStateMachine ballFiniteStateMachine)
        {
            /*
             * The ball can only die when it is falling
             * If the ball is below the dieWhenBelowY threshold, the ball dies
             */
            if (!(ballController.transform.position.y < ballController.dieWhenBelowY)) return;
            
            ballFiniteStateMachine.ChangeState(ballFiniteStateMachine.ballDeadState);
        }
    }
}`}
            </SyntaxHighlighter>
            <Typography variant="caption" className="text-center block">
              Code snippet of the BallFallingState class
            </Typography>
          </SyntaxHighlighterMobileWrapper>
        </div>
      </div>
    </>
  );
  const cameraRelativeMovementSection = <></>;
  const handlingInputSection = <></>;
  const wallsAndPlatforms = <></>;

  const contentList = [
    playerMechanicsSection,
    playerFSM,
    cameraRelativeMovementSection,
    handlingInputSection,
    wallsAndPlatforms,
  ];

  const workDone = FOLLOW_THE_LIGHT.workDone.map((work, index) => {
    return {
      id: work.replace(/\s+/g, ""),
      title: work,
      content: contentList[index],
    };
  });

  return (
    <>
      <ProjectIntroduction
        title={FOLLOW_THE_LIGHT.title}
        youtubeURL="https://www.youtube-nocookie.com/embed/6Ob0HM8uoo8"
        projectType="Personal"
        role="Game Developer"
        teamSize="1"
        platform="Standalone PC"
        softwareUsed="Unity - C#"
        usefulLinks={usefulLinks}
        workDone={workDone}
        description={`"Follow The Light" is a 3D physics-based puzzle game made with Unity & C#.

        As a glowing ball lost in darkness, your goal is to navigate through challenging environments, using your collisions with walls and objects to illuminate the path ahead.

        By transferring some of your light to the surroundings, you gradually reveal the obstacles and pathways, allowing you to find your way out of the darkness.
        
        Move the glowing ball around by applying force!
        
        Rotate the camera to change your perspective!
        
        Jump in the same spot to bounce higher each time!
        
        Quickly hop between walls!
        
        Brake to control your momentum!`}
      />
      <ProjectContent workDone={workDone} />
      <ProjectLearningOutcomes outcomes={FOLLOW_THE_LIGHT.outcomes} />
      <Footer />
    </>
  );
}

export default FollowTheLight;
