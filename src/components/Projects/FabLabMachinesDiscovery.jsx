import { Typography } from "@mui/material";
import Footer from "../Footer";
import { FMD } from "../ProjectList";
import ProjectContent from "./Shared/ProjectContent";
import ProjectIntroduction from "./Shared/ProjectIntroduction";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import CodeMobileWrapper from "./Shared/CodeMobileWrapper";

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

  const uiSection = (
    <>
      <Typography className="leading-5 text-justify">
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
      <div className="flex justify-between screen-lg:flex-col mt-2 mb-4">
        <div className="w-[48%] screen-lg:w-full">
          <CodeMobileWrapper title={"UIAnimation"}>
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
              UIAnimation: a generic abstract class that all UI animations
              extend
            </Typography>
          </CodeMobileWrapper>
        </div>
        <div className="w-[48%] screen-lg:w-full">
          <CodeMobileWrapper title={"UIAnimationProps"}>
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
          </CodeMobileWrapper>
        </div>
      </div>
      <Typography className="leading-5 text-justify">
        This can then be extended by other animation classes, such as the code
        snippet below, which belongs to the <b>Translation animation.</b>
      </Typography>
      <div className="flex justify-between screen-lg:flex-col mt-2 mb-4">
        <div className="w-[48%] screen-lg:w-full">
          <CodeMobileWrapper title={"TranslationAnimation"}>
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
          </CodeMobileWrapper>
        </div>
        <div className="w-[48%] screen-lg:w-full">
          <img
            alt=""
            src="/fmd/animation_editor.png"
            className="h-[450px] m-auto my-[0.4em] screen-lg:h-auto object-contain"
          />
          <Typography variant="caption" className="text-center block">
            Multiple animation components working together and tweakable from
            editor
          </Typography>
        </div>
      </div>
      <Typography className="leading-5 text-justify">
        <b>
          Multiple animation components can be assigned to the same game object
        </b>
        , where the delay defines the execution order.
        <br />
        Here is a short video demonstrating how the UI animation components I
        created brought the designers' UI to life.
      </Typography>
      <div className="w-fit m-auto mt-4">
        <video controls className="h-[450px]">
          <source src="/fmd/fmd_ui.mp4" type="video/mp4" />
        </video>
      </div>
      <Typography variant="caption" className="text-center block mt-2">
        The application's first scene animated with my implemented classes.
      </Typography>
      <Typography className="leading-5 text-justify mt-4">
        As you may have noticed in the video, the user can navigate to different
        panels <b>by sliding in a left or right direction</b>, allowing them to
        move to the next or previous panel respectively. <br />
        Additionally, you can see that the animations of each panel{" "}
        <b>play once the user swipes to that panel.</b> At the bottom, there is
        a <b>pagination section </b>
        that shows the currently viewed panel.
        <br />
        <br />
        Given this context, I have created a class called <b>PanelSwiper</b>,
        which is responsible for handling the user's drag input to determine if
        a successful swipe has occurred. This class has{" "}
        <b>an event called OnSwipe</b>, which is invoked by the class once the
        user swipes to a new panel. The classes{" "}
        <b>PanelSwipeable & PanelPagination both subscribe to OnSwipe</b> to
        receive information about the currently viewed panel.{" "}
        <b>PanelSwipeable</b>, which represents a single panel, uses this
        information to determine <b>when to play its elements' animations</b>,
        while <b>PanelPagination</b>, which controls the pagination section at
        the bottom, uses it to <b>update its UI accordingly.</b>
      </Typography>
      <div className="flex justify-between screen-lg:flex-col mt-2">
        <div className="w-[48%] screen-lg:w-full">
          <CodeMobileWrapper title={"PanelSwiper"}>
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
          </CodeMobileWrapper>
        </div>
        <div className="w-[48%] screen-lg:w-full">
          <CodeMobileWrapper title={"PanelSwipeable"}>
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
          </CodeMobileWrapper>
        </div>
      </div>
    </>
  );

  const vuforiaSection = (
    <>
      <Typography className="leading-5 text-justify">
        Vuforia is an augmented reality SDK that our team used to integrate{" "}
        <b>
          advanced computer vision and image recognition & tracking capabilities
        </b>{" "}
        within Unity's 3D engine. I drew the following <b>component diagram</b>{" "}
        to explain to my team and to the stakeholders the way these technologies
        work together.
      </Typography>
      <div className="w-[40%] m-auto screen-lg:w-full mt-4 mb-2">
        <img
          alt=""
          src="/fmd/component_diagram.png"
          className="w-full object-contain"
        />
      </div>
      <Typography variant="caption" className="text-center block mb-4">
        Component diagram showcasing the integration
      </Typography>
      <Typography className="leading-5 text-justify">
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
      <Typography className="leading-5 text-justify">
        As part of my contributions to the project, I took several actions to
        ensure that <b>Vuforia</b> was set up correctly and that the{" "}
        <b>Augmented Reality experience</b> was of high quality:
        <br />
      </Typography>
      <ul className="list-disc px-4">
        <li>
          <Typography className="leading-5 text-justify">
            Successfully integrated Vuforia within Unity and implemented
            practical examples to demonstrate image recognition and targeting to
            my team.
          </Typography>
        </li>
        <li>
          <Typography className="leading-5 text-justify">
            Optimized camera settings for Augmented Reality to minimize
            jittering and enhance overall user experience.
          </Typography>
        </li>
        <li>
          <Typography className="leading-5 text-justify">
            Developed exception-handling classes, addressing problems like
            missing camera access
          </Typography>
        </li>
        <li>
          <Typography className="leading-5 text-justify">
            Designed high-quality tags that have excellent image targeting
            ratings
          </Typography>
        </li>
      </ul>
      <div className="w-full flex justify-between mt-2 screen-lg:flex-col">
        <div className="w-[65%] screen-lg:w-full">
          <CodeMobileWrapper title={"VuforiaPermissionErrorHandler"}>
            <SyntaxHighlighter
              customStyle={{
                width: "100%",
                height: "450px",
                marginTop: "8px",
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
          </CodeMobileWrapper>
        </div>
        <div className="w-[30%] screen-lg:w-full">
          <div className="w-fit h-[450px] m-auto mb-2 mt-2">
            <video controls className="h-[450px]">
              <source src="/fmd/camera_permission.mp4" type="video/mp4" />
            </video>
          </div>
          <Typography variant="caption" className="text-center block mb-4">
            VuforiaPermissionErrorHandler in action
          </Typography>
        </div>
      </div>
      <Typography className="leading-5 text-justify">
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

  const popupSection = (
    <>
      <Typography className="leading-5 text-justify">
        When a machine is recognized, <b>a set of popups</b> that contain
        essential information will be displayed <b>around the machine.</b> They
        are grouped together in a <b>World Space Canvas.</b>
        <br />
        <br />
        After some discussion, the team agreed to make the popups color-coded,
        conveying 5 different categories:
      </Typography>
      <div className="m-auto w-fit mt-4 mb-2">
        <img
          alt=""
          src="/fmd/popups.png"
          className="h-[350px] object-contain"
        />
      </div>
      <Typography variant="caption" className="text-center block mb-4">
        All popup types
      </Typography>
      <Typography className="leading-5 text-justify">
        When the user taps/clicks on a popup, its contents are displayed through
        a specific user interface responsible for presenting that information.
        <br />
        The final popup type, called "Play Simulation", not only displays
        information but also plays a 3D animation showcasing how the machine
        works.
        <br />
        <br />
        To transform this requirement into executable code that the designers
        can use to create all kinds of popups, I created the following{" "}
        <b>Popup class</b>, with a <b>custom editor script</b> that only shows
        the selected type's relevant variables:
      </Typography>
      <div className="flex justify-between screen-lg:flex-col mt-2 mb-4">
        <div className="w-[48%] screen-lg:w-full">
          <CodeMobileWrapper title={"Popup"}>
            <SyntaxHighlighter
              customStyle={{ width: "100%", height: "450px" }}
              language="csharp"
              showLineNumbers={true}
              style={vscDarkPlus}
            >
              {`using UnityEngine;

namespace Popups
{
    public enum PopupType
    {
        General, UseInstruction, Technical, SafetyRisk, Simulation
    }
    public class Popup : MonoBehaviour
    {
        [Tooltip("Reference to the localized string that holds this popup's information")]
        [SerializeField] private string informationReference = "Missing Reference";
        [Tooltip("Type of the popup")]
        [SerializeField] private PopupType type;
        [Tooltip("Script that plays the machine's simulation. It requires an Animator component attached to it")]
        [SerializeField] private MachineSimulation simulation;

        /// <summary>
        /// Updates the UI of <see cref="PopupInfoUI"/> using this popup's information reference and type.
        /// If the popup type is "Simulation", it will also play the machine's simulation.
        /// </summary>
        public void ShowContents()
        {
            PopupInfoUI.Instance.UpdateUI(informationReference, type);
            
            if (type == PopupType.Simulation)
            {
                simulation.Play(this);
            }
        }
    }
}`}
            </SyntaxHighlighter>
            <Typography variant="caption" className="text-center block">
              Code snippet of the Popup class
            </Typography>
          </CodeMobileWrapper>
        </div>
        <div className="w-[48%] screen-lg:w-full">
          <CodeMobileWrapper title={"PopupCustomEditor"}>
            <SyntaxHighlighter
              customStyle={{ width: "100%", height: "450px" }}
              language="csharp"
              showLineNumbers={true}
              style={vscDarkPlus}
            >
              {`using UnityEditor;
using Popups;

namespace Editor.Animations
{
    [CustomEditor(typeof(Popup))]
    public class PopupCustomEditor : UnityEditor.Editor
    {
        public override void OnInspectorGUI()
        {
            // Draw all properties except "simulation"
            serializedObject.Update();
            DrawPropertiesExcluding(serializedObject,"simulation");
            
            // Draw simulation if the popup type is "Simulation"
            var typeProp = serializedObject.FindProperty("type");
            var type = (PopupType)typeProp.enumValueIndex;
            if (type == PopupType.Simulation)
            {
                EditorGUILayout.PropertyField(serializedObject.FindProperty("simulation"));
            }
            
            // Apply modified properties
            serializedObject.ApplyModifiedProperties();
        }
    }
}`}
            </SyntaxHighlighter>
            <Typography variant="caption" className="text-center block">
              Custom Editor for the Popup class
            </Typography>
          </CodeMobileWrapper>
        </div>
      </div>
      <Typography className="leading-5 text-justify">
        <b className="text-red-600">The problem with this approach:</b>
        <br />
        At first, the application only had <b>four popup types</b> (excluding
        the "Play Simulation" popup). This allowed us to differentiate them
        easily using a simple <b>enum</b> since all popups executed the same
        method.
        <br />
        However, when we <b>added</b> the "Play Simulation" type, we not only
        created a <b>custom editor</b>, but also modified the Popup script by
        adding an <b>if statement</b> to check its type, since the latter
        executes additional code compared to other types.
        <br />
        Even though this works just fine in our case, I now realize that I'm not
        fond of the <b>anti-pattern</b> approach we took as it goes against{" "}
        <b>the SOLID principle.</b>
        <br />
        <br />
        <b className="text-green-600">What we should've done instead:</b>
        <br />
        We need to refactor this code and rely on <b>OOP's Inheritance:</b> We
        can create a <b>base abstract Popup class</b>, and then derive from it
        the different popup classes.
        <br />
        Each specific class can implement its <b>own logic</b> and add its{" "}
        <b>own variables</b>, like the popup color, or the simulation variable
        in the case of Simulation Popup.
        <br />
        This makes the code <b>more organized and less error-prone</b>, and the
        method no longer relies on if-statements.
      </Typography>
      <br />
      <Typography className="leading-5 text-justify">
        To display the contents of a popup, the designers wanted a simple text
        box to appear from the bottom of the screen, showing the machine's title
        and information.
        <br />I implemented a <b>Singleton class</b> that handles the animation
        of this UI, as well as updating its colors and its text components.
      </Typography>
      <div className="w-3/4 m-auto screen-lg:w-full mt-4">
        <CodeMobileWrapper title={"PopupInfoUI"}>
          <SyntaxHighlighter
            customStyle={{ width: "100%", height: "450px" }}
            language="csharp"
            showLineNumbers={true}
            style={vscDarkPlus}
          >
            {`using Animations;
using TMPro;
using UnityEngine;
using UnityEngine.Localization;
using UnityEngine.UI;

namespace Popups
{
    public class PopupInfoUI : MonoBehaviour
    {
        // Instance - Singleton pattern
        public static PopupInfoUI Instance { get; private set; }

        [Tooltip("Duration of the enter/exit translation animation")]
        [Range(0, 1)] [SerializeField] private float animationDuration;

        [Tooltip("Container of the title text")]
        [SerializeField] private Image titleContainer;

        [Tooltip("Title text component")]
        [SerializeField] private TextMeshProUGUI machineTitle;
        
        [Tooltip("Information text component")]
        [SerializeField] private TextMeshProUGUI information;
        
        [Tooltip("Colors applied to text component and title container when a popup is clicked")]
        [SerializeField] private PopupColors popupColors;

        [Tooltip("Name of the localized string table")]
        [SerializeField] private string stringTableReference = "Missing Table Reference";
        
        [Tooltip("Reference to the localized string that holds the default information text")]
        [SerializeField] private string defaultInformationReference = "Missing Default Reference";
        
        // Used to retrieve the localized popup information using its reference. Example: R3N1 G1
        private LocalizedString _localizedInformation;

        // Used to retrieve the localized machine title using its reference. Example: 3D Printer
        private LocalizedString _localizedMachineTitle;

        // Animation played when showing UI
        private TranslationAnimation _enterAnimation;
        
        // Animation played when hiding UI
        private TranslationAnimation _exitAnimation;
        
        // Singleton Pattern
        private void Awake()
        {
            if (Instance != null && Instance != this)
            {
                Destroy(this);
            }
            else
            {
                Initialize();
                Instance = this;
            }
        }

        // Called to initialize some members of this class on Awake
        private void Initialize()
        {
            _localizedInformation = new LocalizedString();
            _localizedMachineTitle = new LocalizedString();
            
            var localPositionY = transform.localPosition.y;
            var heightOfUI = GetComponent<RectTransform>().rect.height;
            
            // Enter animation: translate upwards from initial local position until whole UI is visible
            _enterAnimation = CreateTranslationAnimation(new Vector3(0, localPositionY + heightOfUI, 0));
            // Exit animation: translate downwards to initial local position
            _exitAnimation = CreateTranslationAnimation(new Vector3(0, localPositionY, 0));
        }

        // Called to create the components needed for enter and exit animations
        private TranslationAnimation CreateTranslationAnimation(Vector3 desiredPosition)
        {
            var translationAnimation = gameObject.AddComponent<TranslationAnimation>();

            // Animation properties
            translationAnimation.animationProps = new UIAnimationProps<Vector3>
            {
                autoPlay = false,
                desiredValue = desiredPosition,
                duration = animationDuration,
                delay = 0
            };
            translationAnimation.isRelative = false;
            
            return translationAnimation;
        }

        // Update the title text component using reference to a localized string
        private void UpdateTitle(string reference)
        {
            _localizedMachineTitle.TableReference = stringTableReference;
            _localizedMachineTitle.TableEntryReference = reference;
            
            machineTitle.text = _localizedMachineTitle.GetLocalizedString();
        }

        // Update the information text component using reference to a localized string
        private void UpdateInformationText(string reference)
        {
            _localizedInformation.TableReference = stringTableReference;
            _localizedInformation.TableEntryReference = reference;
            
            information.text = _localizedInformation.GetLocalizedString();
        }

        // Update the colors of the text and title component
        private void UpdateColor(Color color)
        {
            titleContainer.color = color;
            information.color = color;
        }

        /// <summary>
        /// Updates the displayed information and the color of the UI using the popup's information reference and type.
        /// </summary>
        /// <param name="informationReference">Reference to the localized string that holds the information</param>
        /// <param name="type">Type of the popup</param>
        public void UpdatePopupInfo(string informationReference, PopupType type)
        {
            UpdateInformationText(informationReference);
            UpdateColor(popupColors.GetColor(type));
        }
        
        /// <summary>
        /// Shows the UI by playing an enter animation and setting the machine title using the given reference.
        /// </summary>
        /// <param name="titleReference">Reference to the localized string that holds the machine title</param>
        public void ShowUI(string titleReference)
        {
            UpdateTitle(titleReference);
            
            // Set information text and color to default
            UpdateInformationText(defaultInformationReference);
            UpdateColor(popupColors.DefaultColor);

            _enterAnimation.Play();
        }

        /// <summary>
        /// Hides the UI by playing an exit animation.
        /// </summary>
        /// <param name="titleReference">Reference to the localized string that holds the machine title</param>
        public void HideUI(string titleReference)
        {
            // If the given reference does not match the currently displayed machine's title reference, do nothing
            if (titleReference != _localizedMachineTitle.TableEntryReference) return;
            
            _exitAnimation.Play();
        }
    }
}`}
          </SyntaxHighlighter>
          <Typography variant="caption" className="text-center block">
            Code snippet of PopupInfoUI, responsible for displaying a popup's
            content
          </Typography>
        </CodeMobileWrapper>
      </div>
      <Typography className="leading-5 text-justify mt-4">
        As you can see in the videos below, the UI <b>translates upwards</b>{" "}
        when a machine is recognized, showing <b>the default message</b> and{" "}
        <b>the name of the machine.</b> You can also see the different popups
        that are present around the machine. When a popup is tapped/clicked, the
        UI will update its content and theme to comply with the popup's
        information and color.
      </Typography>
      <div className="flex justify-evenly mt-4 screen-lg:flex-col">
        <div>
          <div className="w-fit m-auto">
            <video controls className="h-[450px]">
              <source src="/fmd/fmd_demo1.mp4" type="video/mp4" />
            </video>
          </div>
          <Typography variant="caption" className="text-center block mt-2 mb-4">
            Recognized 3D Printer
          </Typography>
        </div>
        <div>
          <div className="w-fit m-auto">
            <video controls className="h-[450px]">
              <source src="/fmd/fmd_demo2.mp4" type="video/mp4" />
            </video>
          </div>
          <Typography variant="caption" className="text-center block mt-2 mb-4">
            Recognized Laser Cutter
          </Typography>
        </div>
        <div>
          <div className="w-fit m-auto">
            <video controls className="h-[450px]">
              <source src="/fmd/fmd_demo3.mp4" type="video/mp4" />
            </video>
          </div>
          <Typography variant="caption" className="text-center block mt-2 mb-4">
            Recognized CNC 3 Axes
          </Typography>
        </div>
      </div>
    </>
  );

  const machineSimulationSection = (
    <>
      <Typography className="leading-5 text-justify">
        In addition to the information a popup would display when
        tapped/clicked, the "Play Simulation" popup plays a 3D animation that
        showcases how the machine works.
      </Typography>
      <div className="flex justify-evenly mt-4 screen-lg:flex-col">
        <div>
          <div className="w-fit m-auto">
            <video controls className="h-[450px]">
              <source src="/fmd/fmd_demo4.mp4" type="video/mp4" />
            </video>
          </div>
          <Typography variant="caption" className="text-center block mt-2 mb-4">
            Simulation of 3D Printer
          </Typography>
        </div>
        <div>
          <div className="w-fit m-auto">
            <video controls className="h-[450px]">
              <source src="/fmd/fmd_demo5.mp4" type="video/mp4" />
            </video>
          </div>
          <Typography variant="caption" className="text-center block mt-2 mb-4">
            Simulation of Laser Cutter
          </Typography>
        </div>
        <div>
          <div className="w-fit m-auto">
            <video controls className="h-[450px]">
              <source src="/fmd/fmd_demo6.mp4" type="video/mp4" />
            </video>
          </div>
          <Typography variant="caption" className="text-center block mt-2 mb-4">
            Simulation of CNC 3 Axes
          </Typography>
        </div>
      </div>
      <Typography className="leading-5 text-justify">
        To achieve what you see in the videos above, I created these simple
        animations using Unity's built-in <b>Animator component.</b>
        <br />
        All the animations have <b>the same state machine structure</b>, and
        once an animation is finished, it calls an action called <b>"Exit"</b>{" "}
        from the <b>MachineSimulation class</b> that I implemented. Having the
        same structure and calling the same event makes it{" "}
        <b>very easy to play and reset the animation multiple times</b>.
      </Typography>
      <div className="flex justify-between screen-lg:flex-col mt-2 mb-4 items-end">
        <div className="w-[48%] screen-lg:w-full">
          <img
            alt=""
            src="/fmd/animation.png"
            className="h-auto m-auto my-[0.4em] object-contain"
          />
          <Typography variant="caption" className="text-center block">
            All animations have an Exit event called in the end
          </Typography>
        </div>
        <div className="w-[48%] screen-lg:w-full">
          <img
            alt=""
            src="/fmd/animator.png"
            className="h-auto m-auto my-[0.4em] object-contain"
          />
          <Typography variant="caption" className="text-center block">
            All animators have a playing state and an idle state
          </Typography>
        </div>
      </div>
      <Typography className="leading-5 text-justify">
        <br />
        Once the popup is clicked, the <b>"Play"</b> method of the script will
        be called. This will play the simulation and hide the popup as long as
        the 3D animation is still ongoing.
        <br />
        Once the animation is finished, the <b>"Exit"</b> method of the script
        will be called, hiding the simulation and showing the popup once more.
        <br /> With this simple setup, users are free to play the simulation as
        many times as they want.
        <br />
        <br />
        Below is the code snippet for the <b>MachineSimulation</b> class that
        handles the points mentioned above.
      </Typography>
      <div className="w-3/4 m-auto screen-lg:w-full mt-4">
        <CodeMobileWrapper title={"MachineSimulation"}>
          <SyntaxHighlighter
            customStyle={{ width: "100%", height: "450px" }}
            language="csharp"
            showLineNumbers={true}
            style={vscDarkPlus}
          >
            {`using UnityEngine;

namespace Popups
{
    [RequireComponent(typeof(Animator))]
    public class MachineSimulation : MonoBehaviour
    {
        // Popup that would play this simulation when clicked
        private Popup _caller;
        
        // Animator component needed to play the simulation
        private Animator _animator;

        private void Awake()
        {
            _animator = GetComponent<Animator>();
        }
        
        /// <summary>
        /// Plays the simulation if it's not already playing
        /// </summary>
        /// <param name="caller">Reference to the simulation popup that calls this when clicked</param>
        public void Play(Popup caller)
        {
            // If the simulation is already playing, return
            if (gameObject.activeSelf) return;
            
            // Hide the caller popup
            caller.gameObject.SetActive(false);
            _caller = caller;
            
            // Play this simulation
            gameObject.SetActive(true);
            _animator.Play("Playing State", -1, 0f);
        }

        /// <summary>
        /// Should be called when the simulation is finished
        /// </summary>
        public void Exit()
        {
            // Show the caller popup and hide this simulation
            gameObject.SetActive(false);
            _caller.gameObject.SetActive(true);
        }
    }
}`}
          </SyntaxHighlighter>
          <Typography variant="caption" className="text-center block">
            Code snippet of the MachineSimulation class
          </Typography>
        </CodeMobileWrapper>
      </div>
    </>
  );

  const contentList = [
    uiSection,
    vuforiaSection,
    popupSection,
    machineSimulationSection,
  ];

  const workDone = FMD.workDone.map((work, index) => {
    return {
      id: work.replace(/\s+/g, ""),
      title: work,
      content: contentList[index] || "More details will be added soon!",
    };
  });

  return (
    <>
      <ProjectIntroduction
        title={FMD.title}
        youtubeURL={["https://www.youtube-nocookie.com/embed/VfGc1t6Qj3s"]}
        tags={FMD.tags}
        usefulLinks={usefulLinks}
        workDone={workDone}
        outcomes={FMD.outcomes}
        description={`“FabLab Machines Discovery” is an Augmented Reality (AR) application that runs on mobile devices. The project was chosen as the best senior software engineering project of the year.

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
