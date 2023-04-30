import { Typography } from "@mui/material";
import Footer from "../Footer";
import { FMD } from "../ProjectList";
import ProjectContent from "./Shared/ProjectContent";
import ProjectIntroduction from "./Shared/ProjectIntroduction";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

function FabLabMachinesDiscovery() {
  const usefulLinks = [
    {
      title:
        "Project's Final Report: Requirements, Design, Development & Testing",
      href: "https://aymendps.com",
    },
    {
      title: "Project's presentation",
      href: "https://aymendps.com",
    },
  ];

  const scrumSection = <p>Scrum</p>;

  const uiSection = (
    <>
      <p>UI</p>
      <div className="w-[100%]">
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
          Code Snippet of UIAnimation: a generic class that works as base for
          all UI Animations
        </Typography>
      </div>
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
        youtubeURL="https://www.youtube.com/embed/"
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
