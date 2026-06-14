import {
  Button,
  Card,
  CircularProgress,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectList, { getPinnedProjectsByIndustry } from "./ProjectList";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import Footer from "./Footer";
import ProjectLoading from "./ProjectLoading";
import Referrals from "./Referrals";
import ProjectSlider from "./Projects/ProjectSlider";

function SetupObserver(classToObserve, classToAdd, threshold = 0.3) {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add the 'visible' class when the element is in view
          entry.target.classList.add(classToAdd);
          // Optionally stop observing the element once it has become visible
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: threshold }
  ); // Element is considered in view when 50% of it is visible

  // Target the elements you want to animate
  const elementsToAnimate = document.querySelectorAll(classToObserve);

  // Start observing each element
  elementsToAnimate.forEach((element) => {
    observer.observe(element);
  });
}

function Home({ industry, setIndustry }) {
  const [isLoadingVideo, setIsLoadingVideo] = useState(true);
  const [isLoadingProjectPage, setIsLoadingProjectPage] = useState(false);
  const [activeAboutIndex, setActiveAboutIndex] = useState(0);

  const mainVideoRef = useRef();
  const blurVideoRef = useRef();
  const canPlayMainVideo = useRef(false);
  const canPlayBlurVideo = useRef(false);

  function tryToPlayVideos() {
    if (canPlayMainVideo.current && canPlayBlurVideo.current) {
      setIsLoadingVideo(false);
      mainVideoRef.current.play();
      blurVideoRef.current.play();
    }
  }

  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:768px)");

  useEffect(() => {
    if (window.location.href.includes("#projects")) {
      document.getElementById("projects").scrollIntoView({ block: "start" });
    } else if (window.location.href.includes("#highlights")) {
      document.getElementById("highlights").scrollIntoView({ block: "start" });
    }
    // Set up the observer
    SetupObserver(".to-fade-in", "fade-in");
  }, []);

  useEffect(() => {
    SetupObserver(".to-fade-in-light", "fade-in", 0.05);
  }, [industry]);

  useEffect(() => {
    // Choose the about-card whose center is closest to viewport center
    function updateActiveAbout() {
      const elems = Array.from(document.querySelectorAll(".about-card"));
      if (!elems.length) return;
      const viewportCenter = window.innerHeight / 2;
      let closestIdx = 0;
      let closestDist = Infinity;
      elems.forEach((el, i) => {
        const rect = el.getBoundingClientRect();
        const elCenter = rect.top + rect.height / 2;
        const dist = Math.abs(elCenter - viewportCenter);
        if (dist < closestDist) {
          closestDist = dist;
          closestIdx = i;
        }
      });
      setActiveAboutIndex(closestIdx);
    }

    updateActiveAbout();
    window.addEventListener("scroll", updateActiveAbout, { passive: true });
    window.addEventListener("resize", updateActiveAbout);
    return () => {
      window.removeEventListener("scroll", updateActiveAbout);
      window.removeEventListener("resize", updateActiveAbout);
    };
  }, []);

  const CONTACT_ICONS = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/aymendps/",
      icon: (
        <LinkedInIcon className="text-darkblue text-7xl group-hover:text-cyan-600" />
      ),
    },
    {
      name: "GitHub",
      href: "https://github.com/aymendps",
      icon: (
        <GithubIcon className="text-darkblue text-7xl group-hover:text-cyan-600" />
      ),
    },
    {
      name: "StackOverflow",
      href: "https://stackoverflow.com/users/18047369/aymendps",
      icon: (
        <div className="pb-2">
          <img
            src="/stackoverflow-darkblue.png"
            alt=""
            className="w-16 group-hover:hidden"
          ></img>
          <img
            src="/stackoverflow-lightblue.png"
            alt=""
            className="w-16 hidden group-hover:block"
          ></img>
        </div>
      ),
    },
    {
      name: "Email",
      href: "mailto:hammami.aym@outlook.com",
      icon: (
        <EmailIcon className="text-darkblue text-7xl group-hover:text-cyan-600" />
      ),
    },
  ];

  const LINKEDIN_POSTS = [
    {
      title:
        "Graduating with the grade of 'Outstanding', the highest grade for a capstone project",
      image: "/highlights/capstone.jpg",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7212445756081799168/",
      origin: "object-center",
      source: "LinkedIn",
    },
    {
      title: "Second Prize at 24H Game Development Hackathon",
      image: "/highlights/gamehack.jpg",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7053399477331591168/",
      origin: "object-center",
      source: "LinkedIn",
    },
    {
      title: "Best Senior Software Engineering Project, SMU - MedTech",
      image: "/highlights/senior.jpg",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7062807576207360000/",
      origin: "object-right",
      source: "LinkedIn",
    },
    {
      title: "Best Junior Software Engineering Project, SMU - MedTech",
      image: "/highlights/junior.jpg",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:6932755568562462721/",
      origin: "object-left",
      source: "LinkedIn",
    },
  ];

  const videoSection = (
    <section className="relative h-[90vh] w-full mt-17.5 bg-gray-900 flex justify-center items-center screen-lg:mt-0 screen-lg:h-[50vh]">
      <div className="absolute w-full -top-17.5 left-0" id="t"></div>
      <div className="h-[90%] aspect-video z-10 bg-[rgb(0,20,40)] border-2 border-gray-500 screen-xl:h-[80%] screen-lg:w-full screen-lg:h-auto">
        <video
          key="main-video"
          ref={mainVideoRef}
          loop
          muted
          poster="/MainVideoPoster.jpg"
          className="w-full h-full object-contain object-center screen-md:object-contain"
          onCanPlay={() => {
            canPlayMainVideo.current = true;
            tryToPlayVideos();
          }}
          onWaiting={() => {
            blurVideoRef.current.pause();
            // setIsLoadingVideo(true);
          }}
          onPlaying={() => {
            blurVideoRef.current.play();
            // setIsLoadingVideo(false);
          }}
        >
          <source src="/MainVideo.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute z-0 w-full h-[90%] top-0 left-0 screen-md:h-full">
        <video
          key="blur-video"
          ref={blurVideoRef}
          loop
          muted
          poster="/MainVideoPoster.jpg"
          className="w-full h-full object-cover object-center blur-sm"
          onCanPlay={() => {
            canPlayBlurVideo.current = true;
            tryToPlayVideos();
          }}
          onWaiting={() => {
            mainVideoRef.current.pause();
            // setIsLoadingVideo(true);
          }}
          onPlaying={() => {
            mainVideoRef.current.play();
            // setIsLoadingVideo(false);
          }}
        >
          <source src="/BlurVideo.mp4" type="video/mp4" />
        </video>
      </div>
      <Button
        aria-label="Enter fullscreen"
        className="absolute z-30 bottom-6 left-1/2 transform -translate-x-1/2 flex items-center justify-center w-14 h-14 rounded-full bg-white/20 backdrop-blur-lg ring-1 ring-white/20 border border-white/10 text-white hover:bg-white/30 hover:scale-105 transition-all duration-200 shadow-xl"
        onClick={() => {
          if (mainVideoRef.current.requestFullscreen) {
            mainVideoRef.current.requestFullscreen();
          } else if (mainVideoRef.current.msRequestFullscreen) {
            mainVideoRef.current.msRequestFullscreen();
          } else if (mainVideoRef.current.mozRequestFullScreen) {
            mainVideoRef.current.mozRequestFullScreen();
          } else if (mainVideoRef.current.webkitRequestFullscreen) {
            mainVideoRef.current.webkitRequestFullscreen();
          }
        }}
      >
        <FullscreenIcon fontSize="medium" />
      </Button>
      {isLoadingVideo ? (
        <div className="absolute z-20 w-full h-full top-0 left-0 flex justify-center items-center">
          <CircularProgress
            variant="indeterminate"
            size={75}
            className="text-white"
            disableShrink
          />
        </div>
      ) : null}
    </section>
  );

  const ABOUT_SECTION_CARDS = [
    <>
      I'm an
      <span className="text-cyan-400"> experienced software engineer </span>
      in full stack development, AI-based systems, and game development. Also a
      <span className="text-cyan-400"> software engineering instructor </span>
      at South Mediterranean University.
    </>,
    <>
      I enjoy solving complex problems, building scalable systems, and turning
      ideas into actual features.
      <br />
      <br />
      I'm proficient in multiple technologies, up to date with industry trends,
      and have a strong foundation in software engineering.
      <br />
      <br />
      Even though I can program by myself from scratch, I know how to use AI
      efficiently to maximize productivity and creativity. I'm used to
      reviewing, debugging, and improving generated code.
    </>,
    <>
      I'm an excellent team player who communicates well with others, and is
      always eager to keep learning and to adapt.
      <br />
      <br />
      I'm eager to work alongside like-minded professionals and to contribute to
      projects that push the boundaries of what is possible.
    </>,
  ];

  const generateAboutSectionCards = ABOUT_SECTION_CARDS.map((content, idx) => {
    const isActive = activeAboutIndex === idx;
    return (
      <div
        key={`aboutCard-${idx}`}
        className={"relative group to-fade-in w-full about-card"}
      >
        <div
          className={`absolute -inset-0.5 bg-linear-to-r from-cyan-500/30 to-blue-500/30 rounded-2xl blur transition duration-300 ${isActive ? "opacity-100" : "opacity-0"}`}
        ></div>
        <div
          className={
            `relative bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 transition duration-300 ` +
            (isActive
              ? "bg-slate-900/70 scale-[1.01] ring-1 ring-white/10"
              : "group-hover:bg-slate-900/70")
          }
        >
          <Typography className="text-slate-100 leading-8 text-center screen-md:text-left">
            {content}
          </Typography>
        </div>
      </div>
    );
  });

  const aboutSection = (
    <section className="relative z-10 w-full overflow-hidden bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.16),transparent_28%),linear-gradient(180deg,rgba(2,6,23,0.98),rgba(15,23,42,0.94))] pb-0">
      <div className="absolute inset-x-0 top-0 h-2 bg-linear-to-r from-transparent via-cyan-300/60 to-transparent"></div>
      <div className="absolute left-[10%] top-[14%] h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl"></div>
      <div className="absolute right-[8%] bottom-[12%] h-48 w-48 rounded-full bg-blue-500/10 blur-3xl"></div>

      <div className="m-auto w-[80%] pb-14 pt-8 screen-md:w-[90%] screen-md:pb-12">
        <Typography
          variant="h2"
          className="gradient-text pt-6 pb-12 text-center screen-sm:text-4xl screen-md:text-5xl to-fade-in"
        >
          Building software & teaching the next generation of engineers
        </Typography>

        <div className="flex flex-col w-full gap-6">
          {generateAboutSectionCards}
        </div>
      </div>
    </section>
  );

  const projectsSection = (
    <section className="w-full bg-white pb-12 relative">
      <div
        className="absolute -top-17.5 left-0 screen-lg:top-0"
        id="projects"
      ></div>
      <div className="w-[90%] m-auto">
        <Typography
          variant="h2"
          className="text-darkblue text-center pt-12 screen-sm:text-4xl screen-md:font-bold screen-md:text-5xl to-fade-in"
        >
          Pinned Projects
        </Typography>
        <ProjectSlider industry={industry} setIndustry={setIndustry} />
      </div>
      <ProjectList
        industry={industry}
        projects={getPinnedProjectsByIndustry(industry)}
        setIsLoadingProjectPage={setIsLoadingProjectPage}
        navigate={navigate}
        isMobile={isMobile}
      />
      <div className="w-[90%] m-auto">
        <Typography
          variant="subtitle1"
          className="text-center text-darkblue to-fade-in"
        >
          Other in-progress or old projects may be found on my{" "}
          <a
            href="https://github.com/aymendps"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-600 hover:underline"
          >
            GitHub
          </a>{" "}
          or{" "}
          <a
            href="https://www.youtube.com/@aymendps"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-600 hover:underline"
          >
            Youtube
          </a>{" "}
        </Typography>
      </div>
    </section>
  );

  const findMoreSection = (
    <section className="relative w-full overflow-hidden bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.16),transparent_28%),linear-gradient(180deg,rgba(2,6,23,0.98),rgba(15,23,42,0.94))] pb-6 pt-4">
      <div className="absolute inset-x-0 top-0 h-2 bg-linear-to-r from-transparent via-cyan-300/60 to-transparent"></div>
      <div className="relative">
        <div
          className="absolute -top-17.5 left-0 screen-lg:top-0"
          id="highlights"
        ></div>
        <Typography
          variant="h2"
          className="gradient-text to-fade-in text-center py-12 screen-sm:text-4xl screen-md:text-5xl"
        >
          Highlights
        </Typography>
      </div>
      <div className="relative z-10 w-full flex justify-center flex-wrap gap-6 px-4 pb-8">
        {LINKEDIN_POSTS.map((post) => {
          return (
            <a
              key={post.url}
              href={post.url}
              className="block w-1/5 screen-lg:w-[40%] screen-sm:w-full to-fade-in transition-transform duration-200 hover:-translate-y-2"
              target="_blank"
              rel="noreferrer"
            >
              <Card className="w-full overflow-hidden rounded-3xl relative group border border-slate-200/30 shadow-[0_18px_40px_rgba(15,23,42,0.12)]">
                <img
                  alt=""
                  src={post.image}
                  className={
                    "w-full object-cover aspect-square brightness-85 group-hover:brightness-100 group-hover:scale-105 duration-300 " +
                    post.origin
                  }
                />
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                  <div className="absolute left-4 bottom-4 max-w-[86%] w-auto bg-black/80 backdrop-blur-md rounded-lg px-3 py-2 transform transition-all duration-250 group-hover:-translate-y-1 shadow-2xl border border-white/6 ring-1 ring-white/5 pointer-events-auto">
                    <Typography
                      variant="subtitle2"
                      className="text-white font-semibold text-left leading-tight text-sm md:text-base drop-shadow-[0_6px_18px_rgba(0,0,0,0.85)]"
                    >
                      {post.title}
                    </Typography>
                    <Typography
                      variant="caption"
                      className="text-slate-200 mt-1 block text-xs"
                    >
                      View on {post.source} ↗
                    </Typography>
                  </div>
                </div>
              </Card>
            </a>
          );
        })}
      </div>
      <div className="relative z-10">
        <div
          className="absolute -top-17.5 left-0 screen-lg:top-0"
          id="referrals"
        ></div>
        <Typography
          variant="h2"
          className="gradient-text to-fade-in text-center py-12 screen-md:pt-6 screen-sm:text-4xl screen-md:text-5xl"
        >
          LinkedIn Referrals
        </Typography>
        <Referrals />
      </div>
    </section>
  );

  const contactSection = (
    <section className="w-full bg-white py-12">
      <div className="w-[90%] m-auto">
        <Typography
          variant="h2"
          className="text-center screen-sm:text-4xl screen-md:font-bold screen-md:text-5xl to-fade-in"
        >
          Reach out to me
        </Typography>
        <Typography
          variant="subtitle1"
          className="text-cyan-600 text-center pb-12 to-fade-in"
        >
          Let's talk! Feel free to send me a message through:
        </Typography>
      </div>
      <div className="w-full flex-wrap flex justify-center items-center gap-[5%] screen-md:gap-0">
        {CONTACT_ICONS.map((icon) => {
          return (
            <div
              key={"contactSection" + icon.href}
              className="flex flex-col items-center justify-center group screen-md:basis-[40%] screen-md:mb-6 to-fade-in hover:scale-105"
            >
              <a
                href={icon.href}
                target="_blank"
                rel="noreferrer"
                className="pb-2"
              >
                {icon.icon}
              </a>
              <Typography
                variant="caption"
                className="group-hover:text-cyan-600"
              >
                {icon.name}
              </Typography>
            </div>
          );
        })}
      </div>
    </section>
  );

  return (
    <>
      {videoSection}
      {aboutSection}
      {projectsSection}
      {findMoreSection}
      {contactSection}
      {isLoadingProjectPage ? <ProjectLoading /> : null}
      <Footer />
    </>
  );
}

export default Home;
