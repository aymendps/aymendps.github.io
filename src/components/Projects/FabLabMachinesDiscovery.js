import { Paper, Typography } from "@mui/material";
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
        "Celebratory Post: Chosen as one of the best software projects of the year",
      href: "https://www.linkedin.com/feed/update/urn:li:activity:7062807576207360000/",
    },
    {
      title:
        "Final Report: Requirements, Architecture, Design, Development & Testing",
      href: "https://github.com/FabLab-Machines-Discovery/FabLab-Machines-Discovery/blob/main/Documentation/ISS%20Report%20-%20FabLab%20Machines%20Discovery%20-%20Aymen%20Youssef%20Aziz%20Mahdi.pdf",
    },
    {
      title: "Project's GitHub Repository",
      href: "https://github.com/FabLab-Machines-Discovery/FabLab-Machines-Discovery",
    },
    {
      title: "Project's Presentation",
      href: "https://www.canva.com/design/DAFitmADZRM/F2k0u-lwyUTkKvTi1Vr7QA/view",
    },
    {
      title: "Project's Poster",
      href: "https://github.com/FabLab-Machines-Discovery/FabLab-Machines-Discovery/blob/main/Documentation/Poster.pdf",
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
            transform them into code.
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
            Attending daily meetings and actively contributing with ideas.
          </Typography>
        </li>
        <li>
          <Typography className="leading-5">
            Offering valuable help with planning sprints and tasks.
          </Typography>
        </li>
      </ul>
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
        [Tooltip("Whether the translation is relative to the object's local position or not")]
        public bool isRelative = true;

        public override void Play()
        {
            // Cache the tween so we can kill it later
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
        <b>
          Multiple animation components can be assigned to the same game object
        </b>
        , where the delay defines the execution order.
        <br />
        Here is a short video demonstrating how the UI animation components I
        created brought the designers' UI to life.
      </Typography>
      <Paper variant="outlined" className="w-fit m-auto mt-4">
        <video controls loop muted autoPlay className="h-[450px]">
          <source src="/fmd/fmd_ui.mp4" />
        </video>
      </Paper>
      <Typography variant="caption" className="text-center block mt-2">
        The application's first scene animated with my implemented classes.
      </Typography>
      <Typography className="leading-5 mt-4">
        As you may have noticed in the video, the user can navigate to different
        panels <b>by sliding in a left or right direction</b>, allowing them to
        move to the next or previous panel respectively. <br />
        Additionally, you can see that the animations of each panel{" "}
        <b>play once the user swipes to that panel.</b> At the bottom, there is
        a <b>pagination section </b>
        that shows the currently viewed panel.
        <br />
        <br />I have implemented the behaviour of all these mentioned features
        by using an <b>Observer pattern.</b>
        <br />
        <br />
        In this case, I have created a class called <b>PanelSwiper</b>, which is
        responsible for handling the user's drag input to determine if a
        successful swipe has occurred. This class has{" "}
        <b>an event called OnSwipe</b>, which is invoked by the class once the
        user swipes to a new panel. The classes{" "}
        <b>PanelSwipeable & PanelPagination both subscribe to OnSwipe</b> to
        receive information about the currently viewed panel.{" "}
        <b>PanelSwipeable</b>, which represents a single panel, uses this
        information to determine <b>when to play its elements' animations</b>,
        while <b>PanelPagination</b>, which controls the pagination section at
        the bottom, uses it to <b>update its UI accordingly.</b>
      </Typography>
      <div className="flex justify-between screen-md:flex-col mt-2">
        <div className="w-[48%] screen-md:w-full">
          <SyntaxHighlighter
            customStyle={{ width: "100%", height: "450px" }}
            language="csharp"
            showLineNumbers={true}
            style={vscDarkPlus}
          >
            {`using System;
using UnityEngine;
using UnityEngine.EventSystems;
using DG.Tweening;

namespace Onboarding_Scene
{
    [DefaultExecutionOrder(-1)]
    public class PanelSwiper : MonoBehaviour, IDragHandler, IEndDragHandler
    {
        [Tooltip("At what percentage threshold should I swipe to the next panel automatically")]
        [Range(0, 1)] [SerializeField] private float swipeThreshold;
        
        [Tooltip("Duration it takes to smoothly swipe to another panel")]
        [Range(0, 1)] [SerializeField] private float swipeDuration;
        
        /// <summary>
        /// Event called when a swipe happens.
        /// </summary>
        public event Action<int> OnSwipe;

        // Distance that a single swipe is allowed
        private readonly float _swipeDistance = Screen.width / 2f;
        
        // Start position of this 
        private Vector3 _startPosition;
        
        // Index of the current swipeable panel in the hierarchy
        private int _currentPanelIndex;

        private void Start()
        {
            InvokeOnSwipe(_currentPanelIndex);
        }
        
        private void InvokeOnSwipe(int panelIndex)
        {
            OnSwipe?.Invoke(panelIndex);
        }

        // When the user is dragging, this will be called every time the pointer is moved on the screen
        public void OnDrag(PointerEventData data)
        {
            // Difference in the x value when dragging
            var movement = data.pressPosition.x - data.position.x;
            // Only care about updating the x value of the Transform when dragging
            float xPos;
            
            // If it's the first panel, only allow swiping to next panel
            // If it's the last panel, only allow swiping to previous panel
            // Otherwise allow swiping both directions
            if (_currentPanelIndex == 0)
            {
                xPos = Mathf.Clamp(_startPosition.x - movement, _startPosition.x - _swipeDistance, _startPosition.x);
            } else if (_currentPanelIndex == transform.childCount - 1)
            {
                xPos = Mathf.Clamp(_startPosition.x - movement, _startPosition.x, _startPosition.x + _swipeDistance);
            }
            else
            {
                xPos = Mathf.Clamp(_startPosition.x - movement, _startPosition.x - _swipeDistance,
                    _startPosition.x + _swipeDistance);
            }
            
            // Update the x value of Transform when dragging
            transform.position = new Vector3(xPos, _startPosition.y, _startPosition.z);
        }

        // Called when the user stopped dragging
        public void OnEndDrag(PointerEventData data)
        {
            // How much of the screen was dragged
            var threshold = (data.pressPosition.x - data.position.x) / Screen.width;

            // If it exceeds the swipe threshold and would swipe to a valid panel, then swipe to that panel
            // and invoke the OnSwipe event
            if (Mathf.Abs(threshold) >= swipeThreshold)
            {
                if (threshold > 0 && _currentPanelIndex < transform.childCount - 1)
                {
                    _startPosition.x -= Screen.width;
                    InvokeOnSwipe(++_currentPanelIndex);
                }
                else if (threshold < 0 && _currentPanelIndex > 0)
                {
                    _startPosition.x += Screen.width;
                    InvokeOnSwipe(--_currentPanelIndex);
                }
            }
            
            // Tween to position
            transform.DOMoveX(_startPosition.x, swipeDuration);
        }
    }
}`}
          </SyntaxHighlighter>
          <Typography variant="caption" className="text-center block">
            Code snippet of the PanelSwiper class
          </Typography>
        </div>
        <div className="w-[48%] screen-md:w-full">
          <SyntaxHighlighter
            customStyle={{ width: "100%", height: "450px" }}
            language="csharp"
            showLineNumbers={true}
            style={vscDarkPlus}
          >
            {`using Animations;
using UnityEngine;

namespace Onboarding_Scene
{
    public class PanelSwipeable : MonoBehaviour
    {
        [Tooltip("The PanelSwiper component that owns this swipeable panel")]
        [SerializeField] private PanelSwiper owner;

        // Index of this swipeable panel in the hierarchy
        private int _index;
        
        // The animations this should play when it's swiped to
        private IUIAnimation[] _animations;

        private void Awake()
        {
            Init();
        }

        // Caches the index of this and list of animations, and subscribes to the OnSwipe event
        private void Init()
        {
            _index = transform.GetSiblingIndex();
            _animations = GetComponentsInChildren<IUIAnimation>();
            owner.OnSwipe += PlayAnimations;
        }

        // Plays the animations when this panel is swiped to, then unsubscribes from the OnSwipe event
        private void PlayAnimations(int index)
        {
            if (_index != index) return;
            
            foreach (var uiAnimation in _animations)
            {
                uiAnimation.Play();
            }

            owner.OnSwipe -= PlayAnimations;
        }
    }
}`}
          </SyntaxHighlighter>
          <Typography variant="caption" className="text-center block">
            Code snippet of the PanelSwipeable class
          </Typography>
        </div>
      </div>
    </>
  );

  const vuforiaSection = (
    <>
      <Typography className="leading-5">
        Vuforia is an augmented reality SDK that our team used to integrate{" "}
        <b>
          advanced computer vision and image recognition & tracking capabilities
        </b>{" "}
        within Unity's 3D engine. I drew the following <b>component diagram</b>{" "}
        to explain to my team and to the stakeholders the way these technologies
        work together.
      </Typography>
      <Paper
        variant="outlined"
        className="w-[40%] m-auto screen-md:w-full mt-4 mb-2"
      >
        <img
          alt=""
          src="/fmd/component_diagram.png"
          className="w-full object-contain"
        />
      </Paper>
      <Typography variant="caption" className="text-center block mb-4">
        Component diagram showcasing the integration
      </Typography>
      <Typography className="leading-5">
        At the top right of the diagram, you'll see that the device's{" "}
        <b>Camera </b>
        sends the current frame's image to <b>Vuforia's Engine.</b> The engine
        converts this image into gray-scale pixels, which the{" "}
        <b>Image Tracker</b> uses to identify machines by comparing it with the
        data stored in <b>Vuforia Target Database.</b> If a machine is
        recognized, Vuforia informs <b>Unity</b> about which additional elements
        should be displayed, such as UI and 3D components. The user can then
        interact with these elements like they would in any other Unity
        application.
      </Typography>
      <br />
      <Typography className="leading-5">
        As part of my contributions to the project, I took several actions to
        ensure that <b>Vuforia</b> was set up correctly and that the{" "}
        <b>Augmented Reality experience</b> was of high quality:
        <br />
      </Typography>
      <ul className="list-disc px-4">
        <li>
          <Typography className="leading-5">
            Successfully integrated Vuforia within Unity and implemented
            practical examples to demonstrate image recognition and targeting to
            my team.
          </Typography>
        </li>
        <li>
          <Typography className="leading-5">
            Optimized camera settings for Augmented Reality to minimize
            jittering and enhance overall user experience.
          </Typography>
        </li>
        <li>
          <Typography className="leading-5">
            Developed exception-handling classes, addressing problems like
            missing camera access
          </Typography>
        </li>
        <li>
          <Typography className="leading-5">
            Designed high-quality tags that have excellent image targeting
            ratings
          </Typography>
        </li>
      </ul>
      <div className="w-full flex justify-evenly mt-4 screen-md:flex-col">
        <div className="w-[48%] screen-md:w-full">
          <SyntaxHighlighter
            customStyle={{
              width: "100%",
              height: "450px",
              marginTop: "0px",
              marginBottom: "8px",
            }}
            language="csharp"
            showLineNumbers={true}
            style={vscDarkPlus}
          >
            {`using System.Collections;
using UnityEngine;
using UnityEngine.Android;

namespace Vuforia
{
    public class VuforiaPermissionErrorHandler : MonoBehaviour, IVuforiaErrorHandler
    {
        [Tooltip("Panel to show if a permission is missing")]
        public GameObject permissionErrorPanel;
        
        /// <summary>
        /// Requests the user to grant access to the missing permissions.
        /// Once the permissions are granted, it will initialize Vuforia again.
        /// </summary>
        public void HandleError()
        {
#if UNITY_ANDROID
            HandlePermission();
#elif UNITY_IOS
            StartCoroutine(HandlePermission());
#endif
        }

#if UNITY_ANDROID
        // Android Specific
        private void HandlePermission()
        {
            // Call Continue() from a callback if permissions are granted
            var callbacks = new PermissionCallbacks();
            callbacks.PermissionGranted += (s) => { StartCoroutine(Continue()); };
            
            // Request missing permissions
            Permission.RequestUserPermission(Permission.Camera, callbacks);
        }
#elif UNITY_IOS
        // iOS Specific
        private IEnumerator HandlePermission()
        {
            // Wait for the user grant or deny permissions
            yield return Application.RequestUserAuthorization(UserAuthorization.WebCam);
            
            // Only call Continue() if permissions were granted
            if (Application.HasUserAuthorization(UserAuthorization.WebCam))
            {
                StartCoroutine(Continue());
            }
        }
#endif
        
        // Called after user grants the missing permission
        private IEnumerator Continue()
        {
            // Hide the permission error panel, then wait for a few frames for the canvas renderer to update
            permissionErrorPanel.SetActive(false);
            yield return new WaitForSeconds(0.3f);
            
            // Initialize Vuforia now that the loading panel is visible instead of the permission error panel
            VuforiaApplication.Instance.Initialize();
        }
    }
}`}
          </SyntaxHighlighter>
          <Typography variant="caption" className="text-center block mb-4">
            Code snippet of VuforiaPermissionErrorHandler class
          </Typography>
        </div>
        <div className="screen-md:w-full">
          <Paper variant="outlined" className="w-fit h-[450px] m-auto mb-2">
            <video controls loop muted autoPlay className="h-[450px]">
              <source src="/fmd/camera_permission.mp4" />
            </video>
          </Paper>
          <Typography variant="caption" className="text-center block mb-4">
            VuforiaPermissionErrorHandler in action
          </Typography>
        </div>
      </div>
      <Typography className="leading-5">
        The code snippet above showcases a class that I wrote to handle the case
        where the application was not granted access to the camera, since it
        can't execute AR functionalities without it.
        <br />
        The script inherits from two base classes and takes advantage of Unity's
        support for <b>conditional compilation</b>, providing a streamlined
        approach to <b>defining distinct methods</b> for Android and iOS. It
        ensures that only the relevant functions for the currently selected
        platform are included.
      </Typography>
    </>
  );

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
        description={`“FabLab Machines Discovery” is an Augmented Reality (AR) application that runs on mobile devices. The project was chosen as one of the best senior software engineering projects of the year.

        Its goal is to help any visitor or member of Orange's "FabSpace" learn about machines by scanning them with their camera.
        
        The information is displayed in the form of popups that are positioned around the recognized machine.

        There is also a special popup that would play the machine's simulation when clicked. This simulation would visually describe the way the machine works using 3D animations. 
        
        "Orange Digital Center" played the role of stakeholders during the development of the project.
        `}
      />
      <ProjectContent workDone={workDone} />
      <Footer />
    </>
  );
}

export default FabLabMachinesDiscovery;
