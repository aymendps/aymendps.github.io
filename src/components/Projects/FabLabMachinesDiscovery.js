import { Paper, Typography } from "@mui/material";
import Footer from "../Footer";
import { FMD } from "../ProjectList";
import ProjectContent from "./Shared/ProjectContent";
import ProjectIntroduction from "./Shared/ProjectIntroduction";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

function FabLabMachinesDiscovery() {
  const usefulLinks = [
    { title: "Github: Project Repository", href: "https://aymendps.com" },
    {
      title: "Final Report: Requirements, Design, Development & Testing",
      href: "https://aymendps.com",
    },
    {
      title: "Project's Presentation",
      href: "https://aymendps.com",
    },
  ];

  const scrumSection = (
    <>
      <Typography className="leading-5">
        Since the project needed to continously adapt to changing circumstances
        and be delivered frequently, our team decided to pick an{" "}
        <b>agile development approach.</b>
        <br />
        And so, we decided to adopt <b>Scrum</b>, a flexible framework that can
        accomomodate changes and emphasizes collaboration.
        <br />
        <br />
        As a <b>Unity Programmer</b>, my responsibilities included:
      </Typography>
      <ul className="list-disc px-4">
        <li>
          <Typography className="leading-5">
            Working closely with designers to understand their ideas and
            translating them into tangible code.
          </Typography>
        </li>
        <li>
          <Typography className="leading-5">
            Using Microsoft Azure to access the product's backlong and sprint
            tasks.
          </Typography>
        </li>
        <li>
          <Typography className="leading-5">
            Attending daily meetings and contributing with ideas.
          </Typography>
        </li>
        <li>
          <Typography className="leading-5">
            Offering valuable help with planning sprints and tasks.
          </Typography>
        </li>
      </ul>
      <Paper
        variant="elevation"
        elevation={3}
        className="w-[40%] m-auto screen-md:w-full mt-4"
      >
        <img
          alt=""
          src="/fmd/azure_board.png"
          className="w-full object-contain"
        />
      </Paper>
      <Typography variant="caption" className="text-center block mt-2">
        Microsoft Azure: List of features in the product backlog
      </Typography>
    </>
  );

  const uiSection = (
    <>
      <Typography className="leading-5">
        Our designers wanted the UI elements such as text, background, images
        and buttons to have <b>smooth & customizable animations</b>, similar to
        the ones that a designer might find on Canva.
        <br />
        Furthermore, these animations must be able to be combined and{" "}
        <b>
          their properties should be adjustable from within the Unity Editor.
        </b>
        <br />
        <br />
        Since many animations needed to be implemented, like{" "}
        <b>Fade In/Out, Translation, Scale, Wipe In/Out..</b> I though the right
        move was to make an <b>abstract generic class</b> that all the other
        animation classes would extend with their required logic.
        <br />
        <br />
        The reason why we need a <b>base abstract class</b> is the ability to
        provide a shared set of features and a clear structure for its derived
        classes. This will make the code <b>easier to write and mantain.</b>
        <br />
        <br />
        The reason why this class needs to be <b>generic</b> is that many
        animations
        <b> tween different variables.</b> This allows{" "}
        <b>all derived classes</b> to define the type of the variable they are
        animating.
        <br />
        For example: <b>Translation</b> would tween the <b>position</b> of an
        element, which is of type <b>Vector3</b> (ex: x, y, z), while{" "}
        <b>Fade</b> would tween the <b>opacity</b> of an element, which is of
        type <b>Float</b> (ex: 0.6).
        <br />
        <br />
        Below, you can find the code snippet for this class, along with the
        animation variables that can be set by the designers from within the
        Unity Editor.
      </Typography>
      <div className="flex justify-between screen-md:flex-col mt-2 mb-4">
        <div className="w-[48%] screen-md:w-full">
          <SyntaxHighlighter
            customStyle={{ width: "100%", height: "450px" }}
            language="csharp"
            showLineNumbers={true}
            style={vscDarkPlus}
          >
            {`using UnityEngine;
using DG.Tweening;

namespace Animations
{
    public interface IUIAnimation
    {
        public void Play();
    }
    
    public abstract class UIAnimation<TDesiredValue> : MonoBehaviour, IUIAnimation
    {
        // Properties used for animation
        public UIAnimationProps<TDesiredValue> animationProps;

        // Used to store the tween for the animation, so you can kill it later
        protected Tween tween;

        protected virtual void Start()
        {
            if(animationProps.autoPlay) Play();
        }

        /// <summary>
        /// Starts the animation.
        /// </summary>
        public abstract void Play();

        // Kill the tween when the object is disabled or destroyed
        protected void OnDisable()
        {
            tween?.Kill();
        }
    }
}`}
          </SyntaxHighlighter>
          <Typography variant="caption" className="text-center block">
            UIAnimation: a generic abstract class that all UI animations extend
          </Typography>
        </div>
        <div className="w-[48%] screen-md:w-full">
          <SyntaxHighlighter
            customStyle={{ width: "100%", height: "450px" }}
            language="csharp"
            showLineNumbers={true}
            style={vscDarkPlus}
          >
            {`using System;
using UnityEngine;

namespace Animations
{
    [Serializable]
    public class UIAnimationProps<TDesiredValue>
    {
        [Tooltip("Whether to play the animation on start or not")]
        public bool autoPlay = true;
        
        [Tooltip("The value you want to animate to")] 
        public TDesiredValue desiredValue;
        
        [Tooltip("How long the animation takes to complete")] 
        public float duration;
        
        [Tooltip("How long to wait before starting the animation")] 
        public float delay;
    }
}`}
          </SyntaxHighlighter>
          <Typography variant="caption" className="text-center block">
            UIAnimationProps: the variables that the designers can tweak
          </Typography>
        </div>
      </div>
      <Typography className="leading-5">
        This can then be extended by other animation classes, such as the code
        snippet below, which belongs to the <b>Translation animation.</b>
      </Typography>
      <div className="flex justify-between screen-md:flex-col mt-2 mb-4">
        <div className="w-[48%] screen-md:w-full">
          <SyntaxHighlighter
            customStyle={{ width: "100%", height: "450px" }}
            language="csharp"
            showLineNumbers={true}
            style={vscDarkPlus}
          >
            {`using UnityEngine;
using DG.Tweening;

namespace Animations
{
    public class TranslationAnimation : UIAnimation<Vector3>
    {
        [Tooltip("Whether the translation is relative to the object's local position or not" +
                 "If set to false, it will translate towards the desired value" +
                 "If set to true, it will add the desired value to the object's local position")]
        public bool isRelative = true;

        public override void Play()
        {
            //Change the position to desired value, while applying provided duration and delay
            tween = transform.DOLocalMove(animationProps.desiredValue,animationProps.duration)
                .SetRelative(isRelative)
                .SetDelay(animationProps.delay);
        }
        
    }
}`}
          </SyntaxHighlighter>
          <Typography variant="caption" className="text-center block">
            TranslationAnimation extending the generic base class
          </Typography>
        </div>
        <div className="w-[48%] screen-md:w-full">
          <img
            alt=""
            src="/fmd/animation_editor.png"
            className="h-[450px] m-auto my-[0.4em] screen-md:h-auto"
          />
          <Typography variant="caption" className="text-center block">
            Multiple animation components working together and tweakable from
            editor
          </Typography>
        </div>
      </div>
      <Typography className="leading-5">
        Since the code is decoupled,{" "}
        <b>
          multiple animation components can be assigned to the same game object
        </b>
        , where the delay defines the execution order.
        <br />
        Here is a short video demonstrating how the UI animation components I
        created brought the designers' UI to life.
      </Typography>
      <Paper variant="elevation" elevation={3} className="w-fit m-auto">
        <video
          controls
          loop
          muted
          autoPlay
          className="h-[450px] m-auto mt-4 mb-2"
        >
          <source src="/fmd/fmd_ui.mp4" />
        </video>
      </Paper>
      <Typography variant="caption" className="text-center block">
        The application's first scene animated with my implemented classes.
      </Typography>
      <Typography className="leading-5 mt-4">
        As you may have noticed in the video, the user can navigate to different
        pages <b>by sliding in a left or right direction</b>, allowing them to
        move to the next or previous page respectively. <br />
        Additionally, you can see that the animations of each page{" "}
        <b>play once the user slides to that page.</b> At the bottom, there is a{" "}
        <b>pagination section </b>
        that shows the currently viewed page.
        <br />
        <br />I have implemented the behaviour of all these mentioned features
        by using an <b>Observer pattern.</b> This pattern lets us define a
        subscription mechanism to notify multiple objects about any events that
        happen to the object they're observing.
        <br />
        <br />
        In this case, I have created a class called <b>PanelSwiper</b>, which is
        responsible for handling the user's drag input to determine if a
        successful slide has occurred. This class has{" "}
        <b>an event called OnSwipe</b>, which is invoked by the class once the
        user swipes to a new page. The classes{" "}
        <b>PanelSwipeable and PanelPagination both subscribe to OnSwipe</b> to
        receive information about the currently viewed page.{" "}
        <b>PanelSwipeable</b>, which represents a single page, uses this
        information to determine <b>when to play its elements' animations</b>,
        while <b>PanelPagination</b>, which controls the pagination section at
        the bottom, uses it to <b>update its UI accordingly.</b>
      </Typography>
    </>
  );

  const vuforiaSection = <p>Vuforia</p>;

  const popupSection = <p>Popup</p>;

  const machineSimulationSection = <p>Machine</p>;

  const testingSection = <p>Testing</p>;

  const contentList = [
    scrumSection,
    uiSection,
    vuforiaSection,
    popupSection,
    machineSimulationSection,
    testingSection,
  ];

  const workDone = FMD.workDone.map((work, index) => {
    return {
      id: work.replace(/\s+/g, ""),
      title: work,
      content: contentList[index],
    };
  });

  return (
    <>
      <ProjectIntroduction
        title={FMD.title}
        youtubeURL="https://www.youtube-nocookie.com/embed/"
        projectType="University"
        role="Unity Programmer"
        teamSize="4"
        platform="Android - iOS"
        softwareUsed="Unity - C# - Vuforia"
        when="Feb 2023 - Apr 2023"
        usefulLinks={usefulLinks}
        workDone={workDone}
        description={`“FabLab Machines Discovery” is an Augmented Reality (AR) application that runs on mobile devices.

        The goal of the project is to allow any visitor or member of the “FabLab Space” to display essential information about machines upon capturing them using the mobile device camera.
        
        The information is displayed in the form of popups that are positioned around the recognized machine.

        Moreover, there is a special popup that would play the machine's simulation when clicked. This simulation would visually describe the way the machine works using 3D animations. 
        
        "Orange Digital Center" played the role of stakeholders during the development of the project.
        `}
      />
      <ProjectContent workDone={workDone} />
      <Footer />
    </>
  );
}

export default FabLabMachinesDiscovery;
