import{n as e,t}from"./ProjectContent-B0sqOlaL.js";import{N as n,n as r,s as i,v as a}from"./index-ClVEqM_4.js";import{n as o,r as s,t as c}from"./CodeMobileWrapper-CoXl6QGB.js";import{t as l}from"./csharp-BfLgq6uF.js";var u=n();s.registerLanguage(`csharp`,l);function d(){let n=[{title:`Celebratory Post: Chosen as one of the best software projects of the year`,href:`https://www.linkedin.com/feed/update/urn:li:activity:7062807576207360000/`},{title:`Final Report: Requirements, Architecture, Design, Development & Testing`,href:`https://github.com/FabLab-Machines-Discovery/FabLab-Machines-Discovery/blob/main/Documentation/ISS%20Report%20-%20FabLab%20Machines%20Discovery%20-%20Aymen%20Youssef%20Aziz%20Mahdi.pdf`},{title:`Project's GitHub Repository`,href:`https://github.com/FabLab-Machines-Discovery/FabLab-Machines-Discovery`},{title:`Project's Presentation`,href:`https://www.canva.com/design/DAFitmADZRM/F2k0u-lwyUTkKvTi1Vr7QA/view`},{title:`Project's Poster`,href:`https://github.com/FabLab-Machines-Discovery/FabLab-Machines-Discovery/blob/main/Documentation/Poster.pdf`}],l=[(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(a,{className:`leading-5 text-justify`,children:[`Our designers wanted the UI elements such as text, background, images and buttons to have `,(0,u.jsx)(`b`,{children:`smooth & customizable animations`}),`, similar to the ones that a designer might find on Canva.`,(0,u.jsx)(`br`,{}),`Furthermore, these animations must be able to be combined and`,` `,(0,u.jsx)(`b`,{children:`their properties should be adjustable from within the Unity Editor.`}),(0,u.jsx)(`br`,{}),(0,u.jsx)(`br`,{}),`Since many animations needed to be implemented, like`,` `,(0,u.jsx)(`b`,{children:`Fade In/Out, Translation, Scale, Wipe In/Out..`}),` I though the right move was to make an `,(0,u.jsx)(`b`,{children:`abstract generic class`}),` that all the other animation classes would extend with their required logic.`,(0,u.jsx)(`br`,{}),(0,u.jsx)(`br`,{}),`The reason why we need a `,(0,u.jsx)(`b`,{children:`base abstract class`}),` is the ability to provide a shared set of features and a clear structure for its derived classes. This will make the code `,(0,u.jsx)(`b`,{children:`easier to write and mantain.`}),(0,u.jsx)(`br`,{}),(0,u.jsx)(`br`,{}),`The reason why this class needs to be `,(0,u.jsx)(`b`,{children:`generic`}),` is that many animations`,(0,u.jsx)(`b`,{children:` tween different variables.`}),` This allows`,` `,(0,u.jsx)(`b`,{children:`all derived classes`}),` to define the type of the variable they are animating.`,(0,u.jsx)(`br`,{}),`For example: `,(0,u.jsx)(`b`,{children:`Translation`}),` would tween the `,(0,u.jsx)(`b`,{children:`position`}),` of an element, which is of type `,(0,u.jsx)(`b`,{children:`Vector3`}),` (ex: x, y, z), while`,` `,(0,u.jsx)(`b`,{children:`Fade`}),` would tween the `,(0,u.jsx)(`b`,{children:`opacity`}),` of an element, which is of type `,(0,u.jsx)(`b`,{children:`Float`}),` (ex: 0.6).`,(0,u.jsx)(`br`,{}),(0,u.jsx)(`br`,{}),`Below, you can find the code snippet for this class, along with the animation variables that can be set by the designers from within the Unity Editor.`]}),(0,u.jsxs)(`div`,{className:`flex justify-between screen-lg:flex-col mt-2 mb-4`,children:[(0,u.jsx)(`div`,{className:`w-[48%] screen-lg:w-full`,children:(0,u.jsxs)(c,{title:`UIAnimation`,children:[(0,u.jsx)(s,{customStyle:{width:`100%`,height:`450px`},language:`csharp`,showLineNumbers:!0,style:o,children:`using UnityEngine;
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
}`}),(0,u.jsx)(a,{variant:`caption`,className:`text-center block`,children:`UIAnimation: a generic abstract class that all UI animations extend`})]})}),(0,u.jsx)(`div`,{className:`w-[48%] screen-lg:w-full`,children:(0,u.jsxs)(c,{title:`UIAnimationProps`,children:[(0,u.jsx)(s,{customStyle:{width:`100%`,height:`450px`},language:`csharp`,showLineNumbers:!0,style:o,children:`using System;
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
}`}),(0,u.jsx)(a,{variant:`caption`,className:`text-center block`,children:`UIAnimationProps: the variables that the designers can tweak`})]})})]}),(0,u.jsxs)(a,{className:`leading-5 text-justify`,children:[`This can then be extended by other animation classes, such as the code snippet below, which belongs to the `,(0,u.jsx)(`b`,{children:`Translation animation.`})]}),(0,u.jsxs)(`div`,{className:`flex justify-between screen-lg:flex-col mt-2 mb-4`,children:[(0,u.jsx)(`div`,{className:`w-[48%] screen-lg:w-full`,children:(0,u.jsxs)(c,{title:`TranslationAnimation`,children:[(0,u.jsx)(s,{customStyle:{width:`100%`,height:`450px`},language:`csharp`,showLineNumbers:!0,style:o,children:`using UnityEngine;
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
}`}),(0,u.jsx)(a,{variant:`caption`,className:`text-center block`,children:`TranslationAnimation extending the generic base class`})]})}),(0,u.jsxs)(`div`,{className:`w-[48%] screen-lg:w-full`,children:[(0,u.jsx)(`img`,{decoding:`async`,alt:``,src:`/fmd/animation_editor.png`,className:`h-112.5 m-auto my-[0.4em] screen-lg:h-auto object-contain`}),(0,u.jsx)(a,{variant:`caption`,className:`text-center block`,children:`Multiple animation components working together and tweakable from editor`})]})]}),(0,u.jsxs)(a,{className:`leading-5 text-justify`,children:[(0,u.jsx)(`b`,{children:`Multiple animation components can be assigned to the same game object`}),`, where the delay defines the execution order.`,(0,u.jsx)(`br`,{}),`Here is a short video demonstrating how the UI animation components I created brought the designers' UI to life.`]}),(0,u.jsx)(`div`,{className:`w-fit m-auto mt-4`,children:(0,u.jsx)(`video`,{controls:!0,preload:`metadata`,className:`h-112.5`,children:(0,u.jsx)(`source`,{src:`/fmd/fmd_ui.mp4`,type:`video/mp4`})})}),(0,u.jsx)(a,{variant:`caption`,className:`text-center block mt-2`,children:`The application's first scene animated with my implemented classes.`}),(0,u.jsxs)(a,{className:`leading-5 text-justify mt-4`,children:[`As you may have noticed in the video, the user can navigate to different panels `,(0,u.jsx)(`b`,{children:`by sliding in a left or right direction`}),`, allowing them to move to the next or previous panel respectively. `,(0,u.jsx)(`br`,{}),`Additionally, you can see that the animations of each panel`,` `,(0,u.jsx)(`b`,{children:`play once the user swipes to that panel.`}),` At the bottom, there is a `,(0,u.jsx)(`b`,{children:`pagination section `}),`that shows the currently viewed panel.`,(0,u.jsx)(`br`,{}),(0,u.jsx)(`br`,{}),`Given this context, I have created a class called `,(0,u.jsx)(`b`,{children:`PanelSwiper`}),`, which is responsible for handling the user's drag input to determine if a successful swipe has occurred. This class has`,` `,(0,u.jsx)(`b`,{children:`an event called OnSwipe`}),`, which is invoked by the class once the user swipes to a new panel. The classes`,` `,(0,u.jsx)(`b`,{children:`PanelSwipeable & PanelPagination both subscribe to OnSwipe`}),` to receive information about the currently viewed panel.`,` `,(0,u.jsx)(`b`,{children:`PanelSwipeable`}),`, which represents a single panel, uses this information to determine `,(0,u.jsx)(`b`,{children:`when to play its elements' animations`}),`, while `,(0,u.jsx)(`b`,{children:`PanelPagination`}),`, which controls the pagination section at the bottom, uses it to `,(0,u.jsx)(`b`,{children:`update its UI accordingly.`})]}),(0,u.jsxs)(`div`,{className:`flex justify-between screen-lg:flex-col mt-2`,children:[(0,u.jsx)(`div`,{className:`w-[48%] screen-lg:w-full`,children:(0,u.jsxs)(c,{title:`PanelSwiper`,children:[(0,u.jsx)(s,{customStyle:{width:`100%`,height:`450px`},language:`csharp`,showLineNumbers:!0,style:o,children:`using System;
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
}`}),(0,u.jsx)(a,{variant:`caption`,className:`text-center block`,children:`Code snippet of the PanelSwiper class`})]})}),(0,u.jsx)(`div`,{className:`w-[48%] screen-lg:w-full`,children:(0,u.jsxs)(c,{title:`PanelSwipeable`,children:[(0,u.jsx)(s,{customStyle:{width:`100%`,height:`450px`},language:`csharp`,showLineNumbers:!0,style:o,children:`using Animations;
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
}`}),(0,u.jsx)(a,{variant:`caption`,className:`text-center block`,children:`Code snippet of the PanelSwipeable class`})]})})]})]}),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(a,{className:`leading-5 text-justify`,children:[`Vuforia is an augmented reality SDK that our team used to integrate`,` `,(0,u.jsx)(`b`,{children:`advanced computer vision and image recognition & tracking capabilities`}),` `,`within Unity's 3D engine. I drew the following `,(0,u.jsx)(`b`,{children:`component diagram`}),` `,`to explain to my team and to the stakeholders the way these technologies work together.`]}),(0,u.jsx)(`div`,{className:`w-[40%] m-auto screen-lg:w-full mt-4 mb-2`,children:(0,u.jsx)(`img`,{decoding:`async`,alt:``,src:`/fmd/component_diagram.png`,className:`w-full object-contain`})}),(0,u.jsx)(a,{variant:`caption`,className:`text-center block mb-4`,children:`Component diagram showcasing the integration`}),(0,u.jsxs)(a,{className:`leading-5 text-justify`,children:[`At the top right of the diagram, you'll see that the device's`,` `,(0,u.jsx)(`b`,{children:`Camera `}),`sends the current frame's image to `,(0,u.jsx)(`b`,{children:`Vuforia's Engine.`}),` The engine converts this image into gray-scale pixels, which the`,` `,(0,u.jsx)(`b`,{children:`Image Tracker`}),` uses to identify machines by comparing it with the data stored in `,(0,u.jsx)(`b`,{children:`Vuforia Target Database.`}),` If a machine is recognized, Vuforia informs `,(0,u.jsx)(`b`,{children:`Unity`}),` about which additional elements should be displayed, such as UI and 3D components. The user can then interact with these elements like they would in any other Unity application.`]}),(0,u.jsx)(`br`,{}),(0,u.jsxs)(a,{className:`leading-5 text-justify`,children:[`As part of my contributions to the project, I took several actions to ensure that `,(0,u.jsx)(`b`,{children:`Vuforia`}),` was set up correctly and that the`,` `,(0,u.jsx)(`b`,{children:`Augmented Reality experience`}),` was of high quality:`,(0,u.jsx)(`br`,{})]}),(0,u.jsxs)(`ul`,{className:`list-disc px-4`,children:[(0,u.jsx)(`li`,{children:(0,u.jsx)(a,{className:`leading-5 text-justify`,children:`Successfully integrated Vuforia within Unity and implemented practical examples to demonstrate image recognition and targeting to my team.`})}),(0,u.jsx)(`li`,{children:(0,u.jsx)(a,{className:`leading-5 text-justify`,children:`Optimized camera settings for Augmented Reality to minimize jittering and enhance overall user experience.`})}),(0,u.jsx)(`li`,{children:(0,u.jsx)(a,{className:`leading-5 text-justify`,children:`Developed exception-handling classes, addressing problems like missing camera access`})}),(0,u.jsx)(`li`,{children:(0,u.jsx)(a,{className:`leading-5 text-justify`,children:`Designed high-quality tags that have excellent image targeting ratings`})})]}),(0,u.jsxs)(`div`,{className:`w-full flex justify-between mt-2 screen-lg:flex-col`,children:[(0,u.jsx)(`div`,{className:`w-[65%] screen-lg:w-full`,children:(0,u.jsxs)(c,{title:`VuforiaPermissionErrorHandler`,children:[(0,u.jsx)(s,{customStyle:{width:`100%`,height:`450px`,marginTop:`8px`,marginBottom:`8px`},language:`csharp`,showLineNumbers:!0,style:o,children:`using System.Collections;
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
}`}),(0,u.jsx)(a,{variant:`caption`,className:`text-center block mb-4`,children:`Code snippet of VuforiaPermissionErrorHandler class`})]})}),(0,u.jsxs)(`div`,{className:`w-[30%] screen-lg:w-full`,children:[(0,u.jsx)(`div`,{className:`w-fit h-112.5 m-auto mb-2 mt-2`,children:(0,u.jsx)(`video`,{controls:!0,preload:`metadata`,className:`h-112.5`,children:(0,u.jsx)(`source`,{src:`/fmd/camera_permission.mp4`,type:`video/mp4`})})}),(0,u.jsx)(a,{variant:`caption`,className:`text-center block mb-4`,children:`VuforiaPermissionErrorHandler in action`})]})]}),(0,u.jsxs)(a,{className:`leading-5 text-justify`,children:[`The code snippet above showcases a class that I wrote to handle the case where the application was not granted access to the camera, since it can't execute AR functionalities without it.`,(0,u.jsx)(`br`,{}),`The script inherits from two base classes and takes advantage of Unity's support for `,(0,u.jsx)(`b`,{children:`conditional compilation`}),`, providing a streamlined approach to `,(0,u.jsx)(`b`,{children:`defining distinct methods`}),` for Android and iOS. It ensures that only the relevant functions for the currently selected platform are included.`]})]}),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(a,{className:`leading-5 text-justify`,children:[`When a machine is recognized, `,(0,u.jsx)(`b`,{children:`a set of popups`}),` that contain essential information will be displayed `,(0,u.jsx)(`b`,{children:`around the machine.`}),` They are grouped together in a `,(0,u.jsx)(`b`,{children:`World Space Canvas.`}),(0,u.jsx)(`br`,{}),(0,u.jsx)(`br`,{}),`After some discussion, the team agreed to make the popups color-coded, conveying 5 different categories:`]}),(0,u.jsx)(`div`,{className:`m-auto w-fit mt-4 mb-2`,children:(0,u.jsx)(`img`,{decoding:`async`,alt:``,src:`/fmd/popups.png`,className:`h-87.5 object-contain`})}),(0,u.jsx)(a,{variant:`caption`,className:`text-center block mb-4`,children:`All popup types`}),(0,u.jsxs)(a,{className:`leading-5 text-justify`,children:[`When the user taps/clicks on a popup, its contents are displayed through a specific user interface responsible for presenting that information.`,(0,u.jsx)(`br`,{}),`The final popup type, called "Play Simulation", not only displays information but also plays a 3D animation showcasing how the machine works.`,(0,u.jsx)(`br`,{}),(0,u.jsx)(`br`,{}),`To transform this requirement into executable code that the designers can use to create all kinds of popups, I created the following`,` `,(0,u.jsx)(`b`,{children:`Popup class`}),`, with a `,(0,u.jsx)(`b`,{children:`custom editor script`}),` that only shows the selected type's relevant variables:`]}),(0,u.jsxs)(`div`,{className:`flex justify-between screen-lg:flex-col mt-2 mb-4`,children:[(0,u.jsx)(`div`,{className:`w-[48%] screen-lg:w-full`,children:(0,u.jsxs)(c,{title:`Popup`,children:[(0,u.jsx)(s,{customStyle:{width:`100%`,height:`450px`},language:`csharp`,showLineNumbers:!0,style:o,children:`using UnityEngine;

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
}`}),(0,u.jsx)(a,{variant:`caption`,className:`text-center block`,children:`Code snippet of the Popup class`})]})}),(0,u.jsx)(`div`,{className:`w-[48%] screen-lg:w-full`,children:(0,u.jsxs)(c,{title:`PopupCustomEditor`,children:[(0,u.jsx)(s,{customStyle:{width:`100%`,height:`450px`},language:`csharp`,showLineNumbers:!0,style:o,children:`using UnityEditor;
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
}`}),(0,u.jsx)(a,{variant:`caption`,className:`text-center block`,children:`Custom Editor for the Popup class`})]})})]}),(0,u.jsxs)(a,{className:`leading-5 text-justify`,children:[(0,u.jsx)(`b`,{className:`text-red-600`,children:`The problem with this approach:`}),(0,u.jsx)(`br`,{}),`At first, the application only had `,(0,u.jsx)(`b`,{children:`four popup types`}),` (excluding the "Play Simulation" popup). This allowed us to differentiate them easily using a simple `,(0,u.jsx)(`b`,{children:`enum`}),` since all popups executed the same method.`,(0,u.jsx)(`br`,{}),`However, when we `,(0,u.jsx)(`b`,{children:`added`}),` the "Play Simulation" type, we not only created a `,(0,u.jsx)(`b`,{children:`custom editor`}),`, but also modified the Popup script by adding an `,(0,u.jsx)(`b`,{children:`if statement`}),` to check its type, since the latter executes additional code compared to other types.`,(0,u.jsx)(`br`,{}),`Even though this works just fine in our case, I now realize that I'm not fond of the `,(0,u.jsx)(`b`,{children:`anti-pattern`}),` approach we took as it goes against`,` `,(0,u.jsx)(`b`,{children:`the SOLID principle.`}),(0,u.jsx)(`br`,{}),(0,u.jsx)(`br`,{}),(0,u.jsx)(`b`,{className:`text-green-600`,children:`What we should've done instead:`}),(0,u.jsx)(`br`,{}),`We need to refactor this code and rely on `,(0,u.jsx)(`b`,{children:`OOP's Inheritance:`}),` We can create a `,(0,u.jsx)(`b`,{children:`base abstract Popup class`}),`, and then derive from it the different popup classes.`,(0,u.jsx)(`br`,{}),`Each specific class can implement its `,(0,u.jsx)(`b`,{children:`own logic`}),` and add its`,` `,(0,u.jsx)(`b`,{children:`own variables`}),`, like the popup color, or the simulation variable in the case of Simulation Popup.`,(0,u.jsx)(`br`,{}),`This makes the code `,(0,u.jsx)(`b`,{children:`more organized and less error-prone`}),`, and the method no longer relies on if-statements.`]}),(0,u.jsx)(`br`,{}),(0,u.jsxs)(a,{className:`leading-5 text-justify`,children:[`To display the contents of a popup, the designers wanted a simple text box to appear from the bottom of the screen, showing the machine's title and information.`,(0,u.jsx)(`br`,{}),`I implemented a `,(0,u.jsx)(`b`,{children:`Singleton class`}),` that handles the animation of this UI, as well as updating its colors and its text components.`]}),(0,u.jsx)(`div`,{className:`w-3/4 m-auto screen-lg:w-full mt-4`,children:(0,u.jsxs)(c,{title:`PopupInfoUI`,children:[(0,u.jsx)(s,{customStyle:{width:`100%`,height:`450px`},language:`csharp`,showLineNumbers:!0,style:o,children:`using Animations;
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
}`}),(0,u.jsx)(a,{variant:`caption`,className:`text-center block`,children:`Code snippet of PopupInfoUI, responsible for displaying a popup's content`})]})}),(0,u.jsxs)(a,{className:`leading-5 text-justify mt-4`,children:[`As you can see in the videos below, the UI `,(0,u.jsx)(`b`,{children:`translates upwards`}),` `,`when a machine is recognized, showing `,(0,u.jsx)(`b`,{children:`the default message`}),` and`,` `,(0,u.jsx)(`b`,{children:`the name of the machine.`}),` You can also see the different popups that are present around the machine. When a popup is tapped/clicked, the UI will update its content and theme to comply with the popup's information and color.`]}),(0,u.jsxs)(`div`,{className:`flex justify-evenly mt-4 screen-lg:flex-col`,children:[(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`div`,{className:`w-fit m-auto`,children:(0,u.jsx)(`video`,{controls:!0,preload:`metadata`,className:`h-112.5`,children:(0,u.jsx)(`source`,{src:`/fmd/fmd_demo1.mp4`,type:`video/mp4`})})}),(0,u.jsx)(a,{variant:`caption`,className:`text-center block mt-2 mb-4`,children:`Recognized 3D Printer`})]}),(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`div`,{className:`w-fit m-auto`,children:(0,u.jsx)(`video`,{controls:!0,preload:`metadata`,className:`h-112.5`,children:(0,u.jsx)(`source`,{src:`/fmd/fmd_demo2.mp4`,type:`video/mp4`})})}),(0,u.jsx)(a,{variant:`caption`,className:`text-center block mt-2 mb-4`,children:`Recognized Laser Cutter`})]}),(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`div`,{className:`w-fit m-auto`,children:(0,u.jsx)(`video`,{controls:!0,preload:`metadata`,className:`h-112.5`,children:(0,u.jsx)(`source`,{src:`/fmd/fmd_demo3.mp4`,type:`video/mp4`})})}),(0,u.jsx)(a,{variant:`caption`,className:`text-center block mt-2 mb-4`,children:`Recognized CNC 3 Axes`})]})]})]}),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(a,{className:`leading-5 text-justify`,children:`In addition to the information a popup would display when tapped/clicked, the "Play Simulation" popup plays a 3D animation that showcases how the machine works.`}),(0,u.jsxs)(`div`,{className:`flex justify-evenly mt-4 screen-lg:flex-col`,children:[(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`div`,{className:`w-fit m-auto`,children:(0,u.jsx)(`video`,{controls:!0,preload:`metadata`,className:`h-112.5`,children:(0,u.jsx)(`source`,{src:`/fmd/fmd_demo4.mp4`,type:`video/mp4`})})}),(0,u.jsx)(a,{variant:`caption`,className:`text-center block mt-2 mb-4`,children:`Simulation of 3D Printer`})]}),(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`div`,{className:`w-fit m-auto`,children:(0,u.jsx)(`video`,{controls:!0,preload:`metadata`,className:`h-112.5`,children:(0,u.jsx)(`source`,{src:`/fmd/fmd_demo5.mp4`,type:`video/mp4`})})}),(0,u.jsx)(a,{variant:`caption`,className:`text-center block mt-2 mb-4`,children:`Simulation of Laser Cutter`})]}),(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`div`,{className:`w-fit m-auto`,children:(0,u.jsx)(`video`,{controls:!0,preload:`metadata`,className:`h-112.5`,children:(0,u.jsx)(`source`,{src:`/fmd/fmd_demo6.mp4`,type:`video/mp4`})})}),(0,u.jsx)(a,{variant:`caption`,className:`text-center block mt-2 mb-4`,children:`Simulation of CNC 3 Axes`})]})]}),(0,u.jsxs)(a,{className:`leading-5 text-justify`,children:[`To achieve what you see in the videos above, I created these simple animations using Unity's built-in `,(0,u.jsx)(`b`,{children:`Animator component.`}),(0,u.jsx)(`br`,{}),`All the animations have `,(0,u.jsx)(`b`,{children:`the same state machine structure`}),`, and once an animation is finished, it calls an action called `,(0,u.jsx)(`b`,{children:`"Exit"`}),` `,`from the `,(0,u.jsx)(`b`,{children:`MachineSimulation class`}),` that I implemented. Having the same structure and calling the same event makes it`,` `,(0,u.jsx)(`b`,{children:`very easy to play and reset the animation multiple times`}),`.`]}),(0,u.jsxs)(`div`,{className:`flex justify-between screen-lg:flex-col mt-2 mb-4 items-end`,children:[(0,u.jsxs)(`div`,{className:`w-[48%] screen-lg:w-full`,children:[(0,u.jsx)(`img`,{decoding:`async`,alt:``,src:`/fmd/animation.png`,className:`h-auto m-auto my-[0.4em] object-contain`}),(0,u.jsx)(a,{variant:`caption`,className:`text-center block`,children:`All animations have an Exit event called in the end`})]}),(0,u.jsxs)(`div`,{className:`w-[48%] screen-lg:w-full`,children:[(0,u.jsx)(`img`,{decoding:`async`,alt:``,src:`/fmd/animator.png`,className:`h-auto m-auto my-[0.4em] object-contain`}),(0,u.jsx)(a,{variant:`caption`,className:`text-center block`,children:`All animators have a playing state and an idle state`})]})]}),(0,u.jsxs)(a,{className:`leading-5 text-justify`,children:[(0,u.jsx)(`br`,{}),`Once the popup is clicked, the `,(0,u.jsx)(`b`,{children:`"Play"`}),` method of the script will be called. This will play the simulation and hide the popup as long as the 3D animation is still ongoing.`,(0,u.jsx)(`br`,{}),`Once the animation is finished, the `,(0,u.jsx)(`b`,{children:`"Exit"`}),` method of the script will be called, hiding the simulation and showing the popup once more.`,(0,u.jsx)(`br`,{}),` With this simple setup, users are free to play the simulation as many times as they want.`,(0,u.jsx)(`br`,{}),(0,u.jsx)(`br`,{}),`Below is the code snippet for the `,(0,u.jsx)(`b`,{children:`MachineSimulation`}),` class that handles the points mentioned above.`]}),(0,u.jsx)(`div`,{className:`w-3/4 m-auto screen-lg:w-full mt-4`,children:(0,u.jsxs)(c,{title:`MachineSimulation`,children:[(0,u.jsx)(s,{customStyle:{width:`100%`,height:`450px`},language:`csharp`,showLineNumbers:!0,style:o,children:`using UnityEngine;

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
}`}),(0,u.jsx)(a,{variant:`caption`,className:`text-center block`,children:`Code snippet of the MachineSimulation class`})]})})]})],d=i.workDone.map((e,t)=>({id:e.replace(/\s+/g,``),title:e,content:l[t]||`More details will be added soon!`}));return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(e,{title:i.title,youtubeURL:[`https://www.youtube-nocookie.com/embed/VfGc1t6Qj3s`],tags:i.tags,usefulLinks:n,workDone:d,outcomes:i.outcomes,description:`“FabLab Machines Discovery” is an Augmented Reality (AR) application that runs on mobile devices. The project was chosen as the best senior software engineering project of the year.

        Its goal is to help any visitor or member of Orange's "FabSpace" learn about machines by scanning them with their camera.
        
        The information is displayed in the form of popups that are positioned around the recognized machine.

        There is also a special popup that would play the machine's simulation when clicked. This simulation would visually describe the way the machine works using 3D animations. 
        
        "Orange Digital Center" played the role of stakeholders during the development of the project.
        `}),(0,u.jsx)(t,{workDone:d}),(0,u.jsx)(r,{})]})}export{d as default};