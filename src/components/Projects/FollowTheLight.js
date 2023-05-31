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
  const usefulLinks = [
    {
      title: "Project's Source Code",
      href: "https://github.com/aymendps/Follow-The-Light",
    },
  ];

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
      <br />
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
      <Typography variant="h6" className="text-justify text-green-600">
        Death & Respawning
      </Typography>
      <Typography className="leading-5 text-justify">
        When the ball falls <b>below a specific threshold</b>, this causes the
        death sequence to start. Shortly after that, the ball would{" "}
        <b>respawn at the start of the level</b>, where the player will have to
        try and get out of the maze once more.
      </Typography>
      <div className="w-1/2 m-auto mt-4 screen-md:w-full">
        <video controls loop className="w-full">
          <source src="/ftl/death.mp4" type="video/mp4" />
        </video>
      </div>
      <Typography variant="caption" className="text-center block mt-2">
        Showcasing the ball's death & respawn sequence
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
      <div className="w-[69%] screen-md:w-full m-auto mt-4 mb-4">
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
            Code snippet of the BallFiniteStateMachine class
          </Typography>
        </SyntaxHighlighterMobileWrapper>
      </div>
      <Typography className="leading-5 text-justify">
        To represent the ball states, I implemented an abstract class called{" "}
        <b>BallBaseState</b>, that all the other states would derive from. This
        ensures that all the states have the same structure.
      </Typography>
      <div className="w-[69%] screen-md:w-full m-auto mt-4 mb-4">
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
      <div className="flex justify-between screen-md:flex-col mt-4">
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
  const cameraRelativeMovementSection = (
    <>
      <Typography className="leading-5 text-justify">
        When playtesting the game during development, I noticed that the
        movement <b>felt odd</b> whenever I rotated the camera. As a fellow
        gamer, I expected the character to move forward relative to my
        perspective whenever I pressed the <b>'W'</b> key on the keyboard or
        moved the gamepad's <b>left stick</b> upwards. However, what actually
        happened in my game was that the ball moved based on its position and
        rotation,{" "}
        <b>completely disregarding the camera's rotation and perspective.</b>
        <br />
        <br />
        Below is a video that shows the <b>initial problem</b> with the ball's
        movement:
      </Typography>
      <div className="w-1/2 m-auto mt-4 screen-md:w-full">
        <video controls loop className="w-full">
          <source src="/ftl/norelative.mp4" type="video/mp4" />
        </video>
      </div>
      <Typography variant="caption" className="text-center block mt-2 mb-4">
        Moving forward WITHOUT camera-relative calculations
      </Typography>
      <Typography className="leading-5 text-justify">
        To solve this problem, I had to take into account the rotation of the
        camera when calculating the direction in which the ball should move.
        <br />
        By using the camera's Y-axis rotation, I created a{" "}
        <b>Quaternion variable</b> that represented the initially missing{" "}
        <b>rotation relative to the camera</b>.
        <br />
        Since the ball's direction is represented by a <b>Vector</b>,{" "}
        <b>multiplying</b> it with the Quaternion variable would{" "}
        <b>rotate the vector accordingly</b>, aligning it with the perspective
        of the player's camera.
      </Typography>
      <div className="flex justify-between screen-md:flex-col mt-2 mb-4">
        <div className="w-[48%] screen-md:w-full">
          <SyntaxHighlighterMobileWrapper title={"Quaternion Rotation"}>
            <SyntaxHighlighter
              customStyle={{ width: "100%", height: "450px" }}
              language="csharp"
              showLineNumbers={true}
              style={vscDarkPlus}
            >
              {`public class BallController : Monobehaviour 
{
     .
     .
     .
     /// <summary>
     /// The rotation to apply to the ball's direction to make it relative to the camera
     /// </summary>
     public Quaternion RotationRelativeToCamera { get; private set; } 
     .
     .
     .
     private void UpdateCameraTarget()
     {
         // Update the position of the camera target to the position of the ball
         cameraTarget.transform.position = transform.position;
            
         // Rotate the camera target in the direction set by the input manager
         cameraTarget.transform.Rotate(0f, CameraRotationDirection * cameraRotationSpeed * Time.deltaTime,
             0f, Space.World);
            
         // The camera and the target are always facing each other, so the camera's rotation is the same as the target's
         RotationRelativeToCamera = Quaternion.Euler(0f, cameraTarget.transform.rotation.eulerAngles.y, 0f);
     }
     .
     .
     .
}`}
            </SyntaxHighlighter>
            <Typography variant="caption" className="text-center block">
              Rotating the camera and calculating the Quaternion rotation
            </Typography>
          </SyntaxHighlighterMobileWrapper>
        </div>
        <div className="w-[48%] screen-md:w-full">
          <SyntaxHighlighterMobileWrapper title={"Ball Movement"}>
            <SyntaxHighlighter
              customStyle={{ width: "100%", height: "450px" }}
              language="csharp"
              showLineNumbers={true}
              style={vscDarkPlus}
            >
              {`using UnityEngine;

namespace Gameplay.Ball_Finite_State_Machine
{
    public class BallMovingState : BallOnGroundState
    {
        .
        .
        .
        public override void FixedUpdate(BallController ballController, BallFiniteStateMachine ballFiniteStateMachine)
        { 
            // Move the ball in the direction set by the input manager
            ballController.RigidbodyComponent.AddForce(ballController.RotationRelativeToCamera * ballController.Direction *
                                                     ballController.movementSpeed);
        }
        .
        .
        .
    }
}`}
            </SyntaxHighlighter>
            <Typography variant="caption" className="text-center block">
              Moving the ball using the rotated direction
            </Typography>
          </SyntaxHighlighterMobileWrapper>
        </div>
      </div>
      <Typography className="leading-5 text-justify">
        Below is a video that shows the fixed camera-relative player movement:
      </Typography>
      <div className="w-1/2 m-auto mt-4 screen-md:w-full">
        <video controls loop className="w-full">
          <source src="/ftl/relative.mp4" type="video/mp4" />
        </video>
      </div>
      <Typography variant="caption" className="text-center block mt-2">
        Moving forward WITH camera-relative calculations
      </Typography>
    </>
  );
  const handlingInputSection = (
    <>
      <Typography className="leading-5 text-justify">
        To efficiently handle input, I decided to use{" "}
        <b>Unity's new Input System</b>. It's intended to be a replacement for
        Unity's classic Input Manager and offers a high level of flexibility,
        enabling players to interact with the user interface and playable
        characters using <b>various input devices</b>.
      </Typography>
      <br />
      <Typography className="leading-5 text-justify">
        In the case of <b>"Follow The Light"</b>, I wanted my game to support
        both <b>keyboard and gamepad</b> (Xbox & PlayStation style) bindings.
        <br />
        Thus, I have created two action maps: <b>"Player"</b> and <b>"UI"</b>. I
        assigned each map a set of <b>actions</b> that can be performed when
        interacting with either the character or the user interface. Each action
        contains the various <b>inputs</b> that can activate it and the
        corresponding <b>control type</b> that it generates.
        <br />
        <br />
        For instance, the <b>"Move"</b> action can be triggered by using the{" "}
        <b>WASD</b> keys on the keyboard or the <b>Left Stick</b> on the
        gamepad, and produces a <b>2D Vector</b> that signifies the{" "}
        <b>desired direction</b> the player wants to move in.
      </Typography>
      <img
        alt=""
        src="/ftl/input.png"
        className="w-[45%] m-auto mt-4 mb-2 screen-md:w-full"
      ></img>
      <Typography variant="caption" className="text-center block mb-4">
        Player Input Actions (PC & Gamepad)
      </Typography>
      <Typography className="leading-5 text-justify">
        I have implemented an <b>Input Manager</b> that can listen to messages
        sent by the actions mentioned above when they are performed. It utilizes
        the data they generate to:
      </Typography>
      <ul className="list-disc px-4">
        <li>
          <Typography className="leading-5 text-justify">
            Update the <b>rotation of the camera</b> by freely moving it from
            side to side or by snapping it to one of the preset angles
          </Typography>
        </li>
        <li>
          <Typography className="leading-5 text-justify">
            It updates the <b>boolean flags</b> such as{" "}
            <b>"AttemptingToBounce"</b>
            or <b>"AttemptingToBrake"</b>. These flags inform the ball's{" "}
            <b>Finite State Machine</b> when the player is attempting a specific
            action, which is crucial for state transitions & updates.
          </Typography>
        </li>
      </ul>
      <br />
      <Typography className="leading-5 text-justify">
        Below is the code snippet of the aforementioned InputManager class.
      </Typography>
      <div className="w-[75%] screen-md:w-full m-auto mt-4 mb-4">
        <SyntaxHighlighterMobileWrapper title="InputManager">
          <SyntaxHighlighter
            customStyle={{ width: "100%", height: "450px" }}
            language="csharp"
            showLineNumbers={true}
            style={vscDarkPlus}
          >
            {`using Gameplay;
using UnityEngine;
using UnityEngine.InputSystem;
using Utils;

namespace Managers
{
    public class InputManager : MonoBehaviour
    {
        [Tooltip("Reference to the ball controller")]
        [SerializeField] private BallController ballController;
        [Tooltip("The game object that the camera will follow and rotate around")]
        [SerializeField] private GameObject cameraTarget;
        
        // The last angle that the camera snapped to
        private float _lastSnappedAngle;
        // The camera angles that the camera will snap to when the player presses the "Fixed Look" action
        private static readonly float[] CameraAnglePresets = {0f, 90f, 180f, 270f, 360f};

        /*
         * All Input Actions are defined in the Input Actions asset.
         * The actions below will be called when the corresponding action is triggered.
         */
        
        private void OnMove(InputValue value)
        {
            var val = value.Get<Vector2>();
            ballController.Direction =  new Vector3(val.x, 0, val.y);
        }

        private void OnBounce(InputValue value)
        {
            ballController.AttemptingToBounce = value.Get<float>() > 0.1f;
        }

        private void OnBrake(InputValue value)
        {
            ballController.AttemptingToBrake = value.Get<float>() > 0.1f;
        }
        
        private void OnLook(InputValue value)
        {
            ballController.CameraRotationDirection = value.Get<float>();
        }
        
        private void OnFixedLook()
        {
            // If the camera is already snapped to a preset angle, rotate it 90 degrees
            if (Mathf.Approximately(_lastSnappedAngle, cameraTarget.transform.rotation.eulerAngles.y))
            {
                cameraTarget.transform.Rotate(0f, 90f, 0f, Space.World);
                _lastSnappedAngle = cameraTarget.transform.rotation.eulerAngles.y;
            }
            // Otherwise, snap the camera to the nearest preset angle
            else
            {
                _lastSnappedAngle = Algorithms.FindNearestAngle(CameraAnglePresets, cameraTarget.transform.rotation.eulerAngles.y);
                cameraTarget.transform.eulerAngles = new Vector3(45f, _lastSnappedAngle, 0f);
            } 
        }

    }
}`}
          </SyntaxHighlighter>
          <Typography variant="caption" className="text-center block mb-4 mt-2">
            Code snippet of the InputManager class
          </Typography>
        </SyntaxHighlighterMobileWrapper>
      </div>
    </>
  );

  const movingPlatforms = (
    <>
      <Typography className="leading-5 text-justify">
        When I was designing the level for the game, I wanted to create{" "}
        <b>moving platforms</b> as an additional challenge for the player. The
        objective was to create situations where the player needs to
        appropriately time the ball's movement & bouncing.
        <br />
        <br />
        Due to the nature of the game, I needed the platforms to have the option
        to <b>wait for the player</b> to be at a specific position before
        starting to move.
        <br />I also wanted the ball's movement to feel{" "}
        <b>natural and realistic</b> when it's on the moving platform.
        <br />
        <br />
        To transform this design idea into gameplay, I have implemented the
        following two classes: The first class, named <b>"MovingPlatform"</b>,
        is responsible for moving a platform back and forth between two points,
        as the name suggests. It also includes methods that ensure the movement
        of the ball feels natural and realistic by setting or unsetting the
        platform as the ball's parent in the hierarchy. The second class, called{" "}
        <b>"BallEnterTriggerEvent"</b>, is used to notify platforms that the
        ball has entered a specific trigger collider, in other words when the
        ball is in a particular position.
      </Typography>
      <div className="flex justify-between screen-md:flex-col mt-2 mb-4">
        <div className="w-[48%] screen-md:w-full">
          <SyntaxHighlighterMobileWrapper title={"MovingPlatform"}>
            <SyntaxHighlighter
              customStyle={{ width: "100%", height: "450px" }}
              language="csharp"
              showLineNumbers={true}
              style={vscDarkPlus}
            >
              {`using UnityEngine;

namespace Gameplay.Platforms
{
    public class MovingPlatform : MonoBehaviour
    {
        [Tooltip("The distance the platform will move from its initial position")]
        [SerializeField] private Vector3 moveBy;
        
        [Tooltip("How fast the platform will move?")]
        [SerializeField] private float speed;
        
        [Tooltip("If true, the platform will wait for the player to enter the trigger before moving")]
        [SerializeField] private bool waitForPlayer;
        
        [Tooltip("The event that will be called when the ball enters the trigger")]
        [SerializeField] private BallEnterTriggerEvent ballEnterTriggerEvent;

        private Vector3 _destination;
        private Vector3 _initialPosition;
        
        private void Awake()
        {
            _initialPosition = transform.position;
            _destination = _initialPosition  + moveBy;
        }

        private void Start()
        {
            if (waitForPlayer) 
                ballEnterTriggerEvent.onBallEnterTrigger += StopWaitingForPlayer;
        }
        
        private void FixedUpdate()
        {
            MovePlatform();
        }

        // This method is called when the ball enters the trigger and we want to start moving the platform
        private void StopWaitingForPlayer()
        {
            waitForPlayer = false;
            ballEnterTriggerEvent.onBallEnterTrigger -= StopWaitingForPlayer;
        }

        private void MovePlatform()
        {
            // If we are waiting for the player to enter the trigger, we don't want to move the platform yet
            if (waitForPlayer) return;

            // Returns a value that is always increasing and decreasing between 0 and 1
            var interpolant = Mathf.PingPong(Time.time * speed, 1);
            
            // Use the interpolant to lerp between the initial position and the destination
            transform.position = Vector3.Lerp(_initialPosition, _destination, interpolant);
        }
        private void OnTriggerEnter(Collider other)
        {
            if (!other.gameObject.CompareTag("Player")) return;
            if (other.transform.parent != null) return;
            
            // Set the player as a child of the platform so it moves with it
            other.transform.SetParent(transform);
        }

        private void OnTriggerExit(Collider other)
        {
            if (!other.gameObject.CompareTag("Player")) return;
            
            // Remove the player as a child of the platform so it doesn't move with it anymore
            other.transform.SetParent(null);
        }

    }
}
`}
            </SyntaxHighlighter>
            <Typography variant="caption" className="text-center block">
              Code snippet of the MovingPlatform class
            </Typography>
          </SyntaxHighlighterMobileWrapper>
        </div>
        <div className="w-[48%] screen-md:w-full">
          <SyntaxHighlighterMobileWrapper title={"BallEnterTriggerEvent"}>
            <SyntaxHighlighter
              customStyle={{ width: "100%", height: "450px" }}
              language="csharp"
              showLineNumbers={true}
              style={vscDarkPlus}
            >
              {`using UnityEngine;

namespace Gameplay.Platforms
{
    /// <summary>
    /// This class is used to inform platforms that the ball has entered this trigger collider.
    /// </summary>
    [RequireComponent(typeof(Collider))]
    public class BallEnterTriggerEvent : MonoBehaviour
    { 
        // delegate to be invoked when the ball enters the trigger collider
        public delegate void OnBallEnterTrigger();
        public OnBallEnterTrigger onBallEnterTrigger;

        private void OnTriggerEnter(Collider other)
        {
            if (!other.gameObject.CompareTag("Player")) return;
            if (onBallEnterTrigger == null) return;
            
            onBallEnterTrigger.Invoke();
            Destroy(gameObject);
        }
    }
}
`}
            </SyntaxHighlighter>
            <Typography variant="caption" className="text-center block">
              Code snippet of the BallEnterTriggerEvent class
            </Typography>
          </SyntaxHighlighterMobileWrapper>
        </div>
      </div>
      <Typography className="leading-5 text-justify">
        The video below showcases the results of the aforementioned code
        implementation.
      </Typography>
      <div className="w-1/2 m-auto mt-4 screen-md:w-full">
        <video controls loop className="w-full">
          <source src="/ftl/moving platform.mp4" type="video/mp4" />
        </video>
      </div>
      <Typography variant="caption" className="text-center block mt-2 mb-4">
        Ball movement on moving platforms
      </Typography>
    </>
  );

  const contentList = [
    playerMechanicsSection,
    playerFSM,
    cameraRelativeMovementSection,
    handlingInputSection,
    movingPlatforms,
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
        solo={FOLLOW_THE_LIGHT.solo}
        yearAndDuration={FOLLOW_THE_LIGHT.yearAndDuration}
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
