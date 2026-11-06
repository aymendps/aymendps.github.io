import{n as e,t}from"./ProjectContent-B0sqOlaL.js";import{I as n,N as r,c as i,n as a,v as o}from"./index-ClVEqM_4.js";import{n as s,r as c,t as l}from"./CodeMobileWrapper-CoXl6QGB.js";import{t as u}from"./csharp-BfLgq6uF.js";n();var d=r();c.registerLanguage(`csharp`,u);function f(){let n=[{title:`Project's Source Code`,href:`https://github.com/aymendps/Follow-The-Light`}],r=[(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o,{className:`leading-5 text-justify`,children:`I designed and implemented multiple mechanics for the player character that allows it to navigate its way through the different puzzles and obstacles.`}),(0,d.jsx)(`br`,{}),(0,d.jsx)(o,{variant:`h6`,className:`text-justify text-green-600`,children:`Wall Glowing`}),(0,d.jsxs)(o,{className:`leading-5 text-justify`,children:[`When the ball `,(0,d.jsx)(`b`,{children:`collides`}),` with a wall or surface, it shares some of its light with it. This is the mechanic that the game is based around and allows the player `,(0,d.jsx)(`b`,{children:`to slowly reveal`}),` the surroundings.`]}),(0,d.jsx)(`br`,{}),(0,d.jsx)(o,{variant:`h6`,className:`text-justify text-green-600`,children:`Moving & Braking`}),(0,d.jsxs)(o,{className:`leading-5 text-justify`,children:[`By exerting `,(0,d.jsx)(`b`,{children:`physical force`}),`, the player can move the ball character around or brake to halt its momentum. This design decision was made to introduce a level of `,(0,d.jsx)(`b`,{children:`challenge`}),` for the player in controlling the position of the ball.`]}),(0,d.jsxs)(`div`,{className:`flex justify-between mt-4 screen-lg:flex-col`,children:[(0,d.jsxs)(`div`,{className:`w-[48%] screen-lg:w-full`,children:[(0,d.jsx)(`video`,{controls:!0,preload:`metadata`,className:`w-full`,children:(0,d.jsx)(`source`,{src:`/ftl/moving.mp4`,type:`video/mp4`})}),(0,d.jsx)(o,{variant:`caption`,className:`text-center block mt-2 mb-4`,children:`Showcasing movement by exerting force`})]}),(0,d.jsxs)(`div`,{className:`w-[48%] screen-lg:w-full`,children:[(0,d.jsx)(`video`,{controls:!0,preload:`metadata`,className:`w-full`,children:(0,d.jsx)(`source`,{src:`/ftl/braking.mp4`,type:`video/mp4`})}),(0,d.jsx)(o,{variant:`caption`,className:`text-center block mt-2 mb-4`,children:`Showcasing braking by applying opposite force`})]})]}),(0,d.jsx)(o,{variant:`caption`,className:`text-center block mt-2`,children:`Showcasing movement by exerting force`}),(0,d.jsx)(o,{variant:`h6`,className:`text-justify text-green-600`,children:`Normal Bouncing`}),(0,d.jsx)(o,{className:`leading-5 text-justify`,children:`The ball can bounce upwards to reach higher platforms or to avoid obstacles in its path. The player is still able to move the ball while it's in the air, with with less control compared to when it's on the ground.`}),(0,d.jsx)(`div`,{className:`w-1/2 m-auto mt-4 screen-lg:w-full`,children:(0,d.jsx)(`video`,{controls:!0,preload:`metadata`,className:`w-full`,children:(0,d.jsx)(`source`,{src:`/ftl/normal bounce.mp4`,type:`video/mp4`})})}),(0,d.jsx)(o,{variant:`caption`,className:`text-center block mt-2`,children:`Showcasing normal bouncing`}),(0,d.jsx)(o,{variant:`h6`,className:`text-justify text-green-600`,children:`Repetitive Bouncing in the same spot`}),(0,d.jsxs)(o,{className:`leading-5 text-justify`,children:[`When the ball falls back to the `,(0,d.jsx)(`b`,{children:`same spot`}),` it bounced from initially, it gains more energy and bounces `,(0,d.jsx)(`b`,{children:`higher`}),`, allowing it to reach even greater heights with each `,(0,d.jsx)(`b`,{children:`successive`}),` bounce.`,(0,d.jsx)(`br`,{}),`However, there is a limit to how many times it can bounce and how high it can go, so the game doesn't break.`]}),(0,d.jsx)(`div`,{className:`w-1/2 m-auto mt-4 screen-lg:w-full`,children:(0,d.jsx)(`video`,{controls:!0,preload:`metadata`,className:`w-full`,children:(0,d.jsx)(`source`,{src:`/ftl/rep bounce.mp4`,type:`video/mp4`})})}),(0,d.jsx)(o,{variant:`caption`,className:`text-center block mt-2`,children:`Showcasing repetitive bouncing`}),(0,d.jsx)(o,{variant:`h6`,className:`text-justify text-green-600`,children:`Wall Hopping`}),(0,d.jsxs)(o,{className:`leading-5 text-justify`,children:[`Some `,(0,d.jsx)(`b`,{children:`specific walls`}),` are positioned facing each other and allow the ball to `,(0,d.jsx)(`b`,{children:`quickly bounce between them`}),`, providing a new means of navigation for the player.`,(0,d.jsx)(`br`,{}),`As long as the ball is clinging to one of the walls, it can either slide down or bounce.`]}),(0,d.jsx)(`div`,{className:`w-1/2 m-auto mt-4 screen-lg:w-full`,children:(0,d.jsx)(`video`,{controls:!0,preload:`metadata`,className:`w-full`,children:(0,d.jsx)(`source`,{src:`/ftl/hopping.mp4`,type:`video/mp4`})})}),(0,d.jsx)(o,{variant:`caption`,className:`text-center block mt-2`,children:`Showcasing wall hopping`}),(0,d.jsx)(o,{variant:`h6`,className:`text-justify text-green-600`,children:`Changing Perspective`}),(0,d.jsxs)(o,{className:`leading-5 text-justify`,children:[`The player is able to `,(0,d.jsx)(`b`,{children:`rotate`}),` the camera, changing their perspective either by `,(0,d.jsx)(`b`,{children:`freely moving`}),` it from side to side or by`,` `,(0,d.jsx)(`b`,{children:`snapping`}),` it to one of the preset angles. This can be helpful when trying to find surfaces to move/bounce towards.`]}),(0,d.jsx)(`div`,{className:`w-1/2 m-auto mt-4 screen-lg:w-full`,children:(0,d.jsx)(`video`,{controls:!0,preload:`metadata`,className:`w-full`,children:(0,d.jsx)(`source`,{src:`/ftl/camera.mp4`,type:`video/mp4`})})}),(0,d.jsx)(o,{variant:`caption`,className:`text-center block mt-2`,children:`Showcasing camera rotation, followed by camera snapping`}),(0,d.jsx)(o,{variant:`h6`,className:`text-justify text-green-600`,children:`Death & Respawn`}),(0,d.jsxs)(o,{className:`leading-5 text-justify`,children:[`When the ball falls `,(0,d.jsx)(`b`,{children:`below a specific threshold`}),`, this causes the death sequence to start. Shortly after that, the ball would`,` `,(0,d.jsx)(`b`,{children:`respawn at the start of the level`}),`, where the player will have to try and get out of the maze once more.`]}),(0,d.jsx)(`div`,{className:`w-1/2 m-auto mt-4 screen-lg:w-full`,children:(0,d.jsx)(`video`,{controls:!0,preload:`metadata`,className:`w-full`,children:(0,d.jsx)(`source`,{src:`/ftl/death.mp4`,type:`video/mp4`})})}),(0,d.jsx)(o,{variant:`caption`,className:`text-center block mt-2`,children:`Showcasing the ball's death & respawn sequence`})]}),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o,{className:`leading-5 text-justify`,children:`When I initially tried to implement all the mechanics that the ball character has, I started to face some problems that can be summarized by the following:`}),(0,d.jsxs)(`ul`,{className:`list-disc px-4`,children:[(0,d.jsx)(`li`,{children:(0,d.jsx)(o,{className:`leading-5 text-justify`,children:`Every time I work on adding a new mechanic, I have to modify old code that I wrote, increasing its complexity`})}),(0,d.jsx)(`li`,{children:(0,d.jsx)(o,{className:`leading-5 text-justify`,children:`Every time I finish adding a new mechanic, weird bugs appear like the ball being able to bounce while it's in the air`})})]}),(0,d.jsx)(`br`,{}),(0,d.jsxs)(o,{className:`leading-5 text-justify`,children:[`I realized that something is clearly wrong with my approach, and after some research I decided to adopt the `,(0,d.jsx)(`b`,{children:`Finite State Machine (FSM)`}),` `,`pattern.`,(0,d.jsx)(`br`,{}),`I designed the diagram above to describe how the `,(0,d.jsx)(`b`,{children:`FSM`}),` should work for the ball character, using a flowchart that includes states, inputs and transitions.`]}),(0,d.jsx)(`img`,{decoding:`async`,alt:``,src:`/ftl/fsm.png`,className:`w-[40%] m-auto mt-4 mb-2 screen-lg:w-full`}),(0,d.jsx)(o,{variant:`caption`,className:`text-center block mb-4`,children:`Finite State Machine of the Ball Character`}),(0,d.jsx)(o,{className:`leading-5 text-justify`,children:`The essence of this pattern is that:`}),(0,d.jsxs)(`ul`,{className:`list-disc px-4`,children:[(0,d.jsx)(`li`,{children:(0,d.jsxs)(o,{className:`leading-5 text-justify`,children:[`There is a `,(0,d.jsx)(`b`,{children:`fixed set of states`}),` that the FSM can be in`]})}),(0,d.jsx)(`li`,{children:(0,d.jsxs)(o,{className:`leading-5 text-justify`,children:[`The FSM can only be in `,(0,d.jsx)(`b`,{children:`one state at a time`})]})}),(0,d.jsx)(`li`,{children:(0,d.jsxs)(o,{className:`leading-5 text-justify`,children:[`Each state has a `,(0,d.jsx)(`b`,{children:`set of transitions`}),` that point to another state`]})}),(0,d.jsx)(`li`,{children:(0,d.jsxs)(o,{className:`leading-5 text-justify`,children:[`If a condition is met or if an input is pressed, the`,` `,(0,d.jsx)(`b`,{children:`state changes`}),` according to that transition`]})})]}),(0,d.jsx)(`br`,{}),(0,d.jsxs)(o,{className:`leading-5 text-justify`,children:[`When it comes to programming, this is very useful because it not only separates the code into multiple smaller components, thus eliminating complicated statements, but also reduces the potential for bugs. For example, in this case, it is `,(0,d.jsx)(`b`,{children:`not possible`}),` for the ball character to brake while it is falling or bouncing. This limitation arises from the fact that, according to the diagram, the only way to initiate braking is when the ball character is `,(0,d.jsx)(`b`,{children:`on the ground`}),` and is in the`,` `,(0,d.jsx)(`b`,{children:`moving state`}),`. This is because the moving state is the`,` `,(0,d.jsx)(`b`,{children:`only state that has a transition leading to the braking state`}),`.`]}),(0,d.jsx)(`br`,{}),(0,d.jsxs)(o,{className:`leading-5 text-justify`,children:[`To transform this design into executable code, I implemented the`,` `,(0,d.jsx)(`b`,{children:`BallFiniteStateMachine`}),` class. It holds the collection of the`,` `,(0,d.jsx)(`b`,{children:`possible states`}),`, and keeps track of the `,(0,d.jsx)(`b`,{children:`current state`}),` of the ball. It also has various methods that can be called from a Monobehaviour class, and a function that allows the current state to`,` `,(0,d.jsx)(`b`,{children:`transition`}),` to another one.`]}),(0,d.jsx)(`div`,{className:`w-[69%] screen-lg:w-full m-auto mt-4 mb-4`,children:(0,d.jsxs)(l,{title:`BallFiniteStateMachine`,children:[(0,d.jsx)(c,{customStyle:{width:`100%`,height:`450px`},language:`csharp`,showLineNumbers:!0,style:s,children:`using UnityEngine;

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
}`}),(0,d.jsx)(o,{variant:`caption`,className:`text-center block mb-4 mt-2`,children:`Code snippet of the BallFiniteStateMachine class`})]})}),(0,d.jsxs)(o,{className:`leading-5 text-justify`,children:[`To represent the ball states, I implemented an abstract class called`,` `,(0,d.jsx)(`b`,{children:`BallBaseState`}),`, that all the other states would derive from. This ensures that all the states have the same structure.`]}),(0,d.jsx)(`div`,{className:`w-[69%] screen-lg:w-full m-auto mt-4 mb-4`,children:(0,d.jsxs)(l,{title:`BallBaseState`,children:[(0,d.jsx)(c,{customStyle:{width:`100%`,height:`360px`},language:`csharp`,showLineNumbers:!0,style:s,children:`using UnityEngine;

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
}`}),(0,d.jsx)(o,{variant:`caption`,className:`text-center block mb-4 mt-2`,children:`Code snippet of the BallFiniteStateMachine class`})]})}),(0,d.jsx)(o,{className:`leading-5 text-justify`,children:`Below you can find the implementation of two states: The first handles braking and the second handles falling.`}),(0,d.jsxs)(`div`,{className:`flex justify-between screen-lg:flex-col mt-4`,children:[(0,d.jsx)(`div`,{className:`w-[48%] screen-lg:w-full`,children:(0,d.jsxs)(l,{title:`BallBrakingState`,children:[(0,d.jsx)(c,{customStyle:{width:`100%`,height:`450px`},language:`csharp`,showLineNumbers:!0,style:s,children:`using UnityEngine;

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
}`}),(0,d.jsx)(o,{variant:`caption`,className:`text-center block`,children:`Code snippet of the BallBrakingState class`})]})}),(0,d.jsx)(`div`,{className:`w-[48%] screen-lg:w-full`,children:(0,d.jsxs)(l,{title:`BallFallingState`,children:[(0,d.jsx)(c,{customStyle:{width:`100%`,height:`450px`},language:`csharp`,showLineNumbers:!0,style:s,children:`using UnityEngine;

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
}`}),(0,d.jsx)(o,{variant:`caption`,className:`text-center block`,children:`Code snippet of the BallFallingState class`})]})})]})]}),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(o,{className:`leading-5 text-justify`,children:[`When playtesting the game during development, I noticed that the movement `,(0,d.jsx)(`b`,{children:`felt odd`}),` whenever I rotated the camera. As a fellow gamer, I expected the character to move forward relative to my perspective whenever I pressed the `,(0,d.jsx)(`b`,{children:`'W'`}),` key on the keyboard or moved the gamepad's `,(0,d.jsx)(`b`,{children:`left stick`}),` upwards. However, what actually happened in my game was that the ball moved based on its position and rotation,`,` `,(0,d.jsx)(`b`,{children:`completely disregarding the camera's rotation and perspective.`}),(0,d.jsx)(`br`,{}),(0,d.jsx)(`br`,{}),`Below is a video that shows the `,(0,d.jsx)(`b`,{children:`initial problem`}),` with the ball's movement:`]}),(0,d.jsx)(`div`,{className:`w-1/2 m-auto mt-4 screen-lg:w-full`,children:(0,d.jsx)(`video`,{controls:!0,preload:`metadata`,className:`w-full`,children:(0,d.jsx)(`source`,{src:`/ftl/norelative.mp4`,type:`video/mp4`})})}),(0,d.jsx)(o,{variant:`caption`,className:`text-center block mt-2 mb-4`,children:`Moving forward WITHOUT camera-relative calculations`}),(0,d.jsxs)(o,{className:`leading-5 text-justify`,children:[`To solve this problem, I had to take into account the rotation of the camera when calculating the direction in which the ball should move.`,(0,d.jsx)(`br`,{}),`By using the camera's Y-axis rotation, I created a`,` `,(0,d.jsx)(`b`,{children:`Quaternion variable`}),` that represented the initially missing`,` `,(0,d.jsx)(`b`,{children:`rotation relative to the camera`}),`.`,(0,d.jsx)(`br`,{}),`Since the ball's direction is represented by a `,(0,d.jsx)(`b`,{children:`Vector`}),`,`,` `,(0,d.jsx)(`b`,{children:`multiplying`}),` it with the Quaternion variable would`,` `,(0,d.jsx)(`b`,{children:`rotate the vector accordingly`}),`, aligning it with the perspective of the player's camera.`]}),(0,d.jsxs)(`div`,{className:`flex justify-between screen-lg:flex-col mt-2 mb-4`,children:[(0,d.jsx)(`div`,{className:`w-[48%] screen-lg:w-full`,children:(0,d.jsxs)(l,{title:`Quaternion Rotation`,children:[(0,d.jsx)(c,{customStyle:{width:`100%`,height:`450px`},language:`csharp`,showLineNumbers:!0,style:s,children:`public class BallController : Monobehaviour 
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
}`}),(0,d.jsx)(o,{variant:`caption`,className:`text-center block`,children:`Rotating the camera and calculating the Quaternion rotation`})]})}),(0,d.jsx)(`div`,{className:`w-[48%] screen-lg:w-full`,children:(0,d.jsxs)(l,{title:`Ball Movement`,children:[(0,d.jsx)(c,{customStyle:{width:`100%`,height:`450px`},language:`csharp`,showLineNumbers:!0,style:s,children:`using UnityEngine;

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
}`}),(0,d.jsx)(o,{variant:`caption`,className:`text-center block`,children:`Moving the ball using the rotated direction`})]})})]}),(0,d.jsx)(o,{className:`leading-5 text-justify`,children:`Below is a video that shows the fixed camera-relative player movement:`}),(0,d.jsx)(`div`,{className:`w-1/2 m-auto mt-4 screen-lg:w-full`,children:(0,d.jsx)(`video`,{controls:!0,preload:`metadata`,className:`w-full`,children:(0,d.jsx)(`source`,{src:`/ftl/relative.mp4`,type:`video/mp4`})})}),(0,d.jsx)(o,{variant:`caption`,className:`text-center block mt-2`,children:`Moving forward WITH camera-relative calculations`})]}),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(o,{className:`leading-5 text-justify`,children:[`To efficiently handle input, I decided to use`,` `,(0,d.jsx)(`b`,{children:`Unity's new Input System`}),`. It's intended to be a replacement for Unity's classic Input Manager and offers a high level of flexibility, enabling players to interact with the user interface and playable characters using `,(0,d.jsx)(`b`,{children:`various input devices`}),`.`]}),(0,d.jsx)(`br`,{}),(0,d.jsxs)(o,{className:`leading-5 text-justify`,children:[`In the case of `,(0,d.jsx)(`b`,{children:`"Follow The Light"`}),`, I wanted my game to support both `,(0,d.jsx)(`b`,{children:`keyboard and gamepad`}),` (Xbox & PlayStation style) bindings.`,(0,d.jsx)(`br`,{}),`Thus, I have created two action maps: `,(0,d.jsx)(`b`,{children:`"Player"`}),` and `,(0,d.jsx)(`b`,{children:`"UI"`}),`. I assigned each map a set of `,(0,d.jsx)(`b`,{children:`actions`}),` that can be performed when interacting with either the character or the user interface. Each action contains the various `,(0,d.jsx)(`b`,{children:`inputs`}),` that can activate it and the corresponding `,(0,d.jsx)(`b`,{children:`control type`}),` that it generates.`,(0,d.jsx)(`br`,{}),(0,d.jsx)(`br`,{}),`For instance, the `,(0,d.jsx)(`b`,{children:`"Move"`}),` action can be triggered by using the`,` `,(0,d.jsx)(`b`,{children:`WASD`}),` keys on the keyboard or the `,(0,d.jsx)(`b`,{children:`Left Stick`}),` on the gamepad, and produces a `,(0,d.jsx)(`b`,{children:`2D Vector`}),` that signifies the`,` `,(0,d.jsx)(`b`,{children:`desired direction`}),` the player wants to move in.`]}),(0,d.jsx)(`img`,{decoding:`async`,alt:``,src:`/ftl/input.png`,className:`w-[45%] m-auto mt-4 mb-2 screen-lg:w-full`}),(0,d.jsx)(o,{variant:`caption`,className:`text-center block mb-4`,children:`Player Input Actions (PC & Gamepad)`}),(0,d.jsxs)(o,{className:`leading-5 text-justify`,children:[`I have implemented an `,(0,d.jsx)(`b`,{children:`Input Manager`}),` that can listen to messages sent by the actions mentioned above when they are performed. It utilizes the data they generate to:`]}),(0,d.jsxs)(`ul`,{className:`list-disc px-4`,children:[(0,d.jsx)(`li`,{children:(0,d.jsxs)(o,{className:`leading-5 text-justify`,children:[`Update the `,(0,d.jsx)(`b`,{children:`rotation of the camera`}),` by freely moving it from side to side or by snapping it to one of the preset angles`]})}),(0,d.jsx)(`li`,{children:(0,d.jsxs)(o,{className:`leading-5 text-justify`,children:[`It updates the `,(0,d.jsx)(`b`,{children:`boolean flags`}),` such as`,` `,(0,d.jsx)(`b`,{children:`"AttemptingToBounce"`}),`or `,(0,d.jsx)(`b`,{children:`"AttemptingToBrake"`}),`. These flags inform the ball's`,` `,(0,d.jsx)(`b`,{children:`Finite State Machine`}),` when the player is attempting a specific action, which is crucial for state transitions & updates.`]})})]}),(0,d.jsx)(`br`,{}),(0,d.jsx)(o,{className:`leading-5 text-justify`,children:`Below is the code snippet of the aforementioned InputManager class.`}),(0,d.jsx)(`div`,{className:`w-[75%] screen-lg:w-full m-auto mt-4 mb-4`,children:(0,d.jsxs)(l,{title:`InputManager`,children:[(0,d.jsx)(c,{customStyle:{width:`100%`,height:`450px`},language:`csharp`,showLineNumbers:!0,style:s,children:`using Gameplay;
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
}`}),(0,d.jsx)(o,{variant:`caption`,className:`text-center block mb-4 mt-2`,children:`Code snippet of the InputManager class`})]})})]}),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(o,{className:`leading-5 text-justify`,children:[`When I was designing the level for the game, I wanted to create`,` `,(0,d.jsx)(`b`,{children:`moving platforms`}),` as an additional challenge for the player. The objective was to create situations where the player needs to appropriately time the ball's movement & bouncing.`,(0,d.jsx)(`br`,{}),(0,d.jsx)(`br`,{}),`Due to the nature of the game, I needed the platforms to have the option to `,(0,d.jsx)(`b`,{children:`wait for the player`}),` to be at a specific position before starting to move.`,(0,d.jsx)(`br`,{}),`I also wanted the ball's movement to feel`,` `,(0,d.jsx)(`b`,{children:`natural and realistic`}),` when it's on the moving platform.`,(0,d.jsx)(`br`,{}),(0,d.jsx)(`br`,{}),`To transform this design idea into gameplay, I have implemented the following two classes: The first class, named `,(0,d.jsx)(`b`,{children:`"MovingPlatform"`}),`, is responsible for moving a platform back and forth between two points, as the name suggests. It also includes methods that ensure the movement of the ball feels natural and realistic by setting or unsetting the platform as the ball's parent in the hierarchy. The second class, called`,` `,(0,d.jsx)(`b`,{children:`"BallEnterTriggerEvent"`}),`, is used to notify platforms that the ball has entered a specific trigger collider, in other words when the ball is in a particular position.`]}),(0,d.jsxs)(`div`,{className:`flex justify-between screen-lg:flex-col mt-2 mb-4`,children:[(0,d.jsx)(`div`,{className:`w-[48%] screen-lg:w-full`,children:(0,d.jsxs)(l,{title:`MovingPlatform`,children:[(0,d.jsx)(c,{customStyle:{width:`100%`,height:`450px`},language:`csharp`,showLineNumbers:!0,style:s,children:`using UnityEngine;

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
`}),(0,d.jsx)(o,{variant:`caption`,className:`text-center block`,children:`Code snippet of the MovingPlatform class`})]})}),(0,d.jsx)(`div`,{className:`w-[48%] screen-lg:w-full`,children:(0,d.jsxs)(l,{title:`BallEnterTriggerEvent`,children:[(0,d.jsx)(c,{customStyle:{width:`100%`,height:`450px`},language:`csharp`,showLineNumbers:!0,style:s,children:`using UnityEngine;

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
`}),(0,d.jsx)(o,{variant:`caption`,className:`text-center block`,children:`Code snippet of the BallEnterTriggerEvent class`})]})})]}),(0,d.jsx)(o,{className:`leading-5 text-justify`,children:`The video below showcases the results of the aforementioned code implementation.`}),(0,d.jsx)(`div`,{className:`w-1/2 m-auto mt-4 screen-lg:w-full`,children:(0,d.jsx)(`video`,{controls:!0,preload:`metadata`,className:`w-full`,children:(0,d.jsx)(`source`,{src:`/ftl/moving platform.mp4`,type:`video/mp4`})})}),(0,d.jsx)(o,{variant:`caption`,className:`text-center block mt-2 mb-4`,children:`Ball movement on moving platforms`})]})],u=i.workDone.map((e,t)=>({id:e.replace(/\s+/g,``),title:e,content:r[t]||`More details will be added soon!`}));return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(e,{title:i.title,youtubeURL:[`https://www.youtube-nocookie.com/embed/6Ob0HM8uoo8`],tags:i.tags,usefulLinks:n,workDone:u,outcomes:i.outcomes,description:`"Follow The Light" is a 3D physics-based puzzle game made with Unity & C#.

        As a glowing ball lost in darkness, your goal is to navigate through challenging environments, using your collisions with walls and objects to illuminate the path ahead.

        By transferring some of your light to the surroundings, you gradually reveal the obstacles and pathways, allowing you to find your way out of the darkness.
        
        Move the glowing ball around by applying force!
        
        Rotate the camera to change your perspective!
        
        Jump in the same spot to bounce higher each time!
        
        Quickly hop between walls!
        
        Brake to control your momentum!`}),(0,d.jsx)(t,{workDone:u}),(0,d.jsx)(a,{})]})}export{f as default};