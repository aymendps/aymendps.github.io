import {
  Button,
  CircularProgress,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import ProjectList, { getPinnedProjectsByIndustry } from "./ProjectList";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import Footer from "./Footer";
import ProjectLoading from "./ProjectLoading";
import PreloadImages from "./PreloadImages";
import Referrals from "./Referrals";

function Home({ industry }) {
  const [isLoadingVideo, setIsLoadingVideo] = useState(true);
  const [isLoadingProjectPage, setIsLoadingProjectPage] = useState(false);

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

  function industryToName(industry) {
    switch (industry) {
      case "gaming":
        return "Gaming";
      case "software":
        return "Software & Web";
      case "all":
        return "All";
      default:
        return "All";
    }
  }

  useEffect(() => {
    if (window.location.href.includes("#projects")) {
      document.getElementById("projects").scrollIntoView({ block: "start" });
    } else if (window.location.href.includes("#awards")) {
      document.getElementById("awards").scrollIntoView({ block: "start" });
    }
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
      image: "/awards/capstone.jpg",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7212445756081799168/",
      origin: "object-center",
    },
    {
      title: "Second Prize at 24H Game Development Hackathon",
      image: "/awards/gamehack.jpg",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7053399477331591168/",
      origin: "object-center",
    },
    {
      title: "Best Senior Software Engineering Project, SMU - MedTech",
      image: "/awards/senior.jpg",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7062807576207360000/",
      origin: "object-right",
    },
    {
      title: "Best Junior Software Engineering Project, SMU - MedTech",
      image: "/awards/junior.jpg",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:6932755568562462721/",
      origin: "object-left",
    },
  ];

  const videoSection = (
    <section className="relative h-[90vh] w-full mt-[70px] bg-gray-900 flex justify-center items-center screen-md:mt-0 screen-md:h-[50vh]">
      <div className="absolute w-full top-[-70px] left-0" id="t"></div>
      <div className="h-[90%] aspect-video z-10 bg-[rgb(0,20,40)] border-2 border-gray-500 screen-md:w-full screen-md:h-auto">
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
        variant="contained"
        className="absolute z-30 bottom-4"
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
        Fullscreen
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
      <PreloadImages />
    </section>
  );

  const aboutSection = (
    <section className="w-full bg-darkblue z-10 translate-y-[-70px] pb-0 pt-[70px] screen-md:translate-y-0 screen-md:pt-6">
      <div className="m-auto w-[80%] pt-4 screen-md:w-[90%] screen-md:pb-12 text-center">
        <Typography
          variant="h2"
          className="text-center text-white pb-4 screen-sm:text-4xl screen-md:font-bold screen-md:text-5xl"
        >
          Welcome to my portfolio!
        </Typography>
        <br />
        <Typography className="text-white  screen-md:text-justify">
          Hi there! I'm <span className="text-cyan-400">Aymen</span>, a software
          engineer with a passion for programming games, tools, and apps. My
          technical skills include <span className="text-cyan-400">C++</span>,{" "}
          <span className="text-cyan-400">C#</span>, and game engines like{" "}
          <span className="text-cyan-400">Unreal Engine</span> and{" "}
          <span className="text-cyan-400">Unity</span>. I also have experience
          in <span className="text-cyan-400">full-stack development</span> with{" "}
          <span className="text-cyan-400">JavaScript</span>,{" "}
          <span className="text-cyan-400">TypeScript</span>,{" "}
          <span className="text-cyan-400">HTML</span>,{" "}
          <span className="text-cyan-400">CSS</span>,{" "}
          <span className="text-cyan-400">React</span>,{" "}
          <span className="text-cyan-400">Express</span>,{" "}
          <span className="text-cyan-400">NestJS</span>,{" "}
          <span className="text-cyan-400">MongoDB</span>, and{" "}
          <span className="text-cyan-400">MySQL</span>.
          <br />
          <br />
          I've contributed to multiple projects both on my own and as part of a
          team. Internships and part-time jobs have helped me sharpen my
          technical and soft skills and apply them in real-world scenarios!
        </Typography>
        <br />
        <Typography className="text-white  screen-md:text-justify">
          I’m familiar with the software and game development life cycles and
          can translate designers' ideas into readable and maintainable code. As
          a team player, I understand the importance of teamwork in achieving
          success and have a proven record of effective collaboration,
          demonstrated by{" "}
          <HashLink
            smooth
            to="/home#awards"
            className="text-cyan-300 hover:underline"
          >
            <b>multiple awards</b>
          </HashLink>{" "}
          for my group projects.
        </Typography>
        <br />
        <Typography className="text-white  screen-md:text-justify">
          I'm eager to work alongside like-minded professionals and to
          contribute to projects that push the boundaries of what is possible.
        </Typography>
      </div>
    </section>
  );

  const projectsSection = (
    <section className="w-full bg-white pb-12 relative">
      <div
        className="absolute top-[-70px] left-0 screen-md:top-0"
        id="projects"
      ></div>
      <div className="w-[90%] m-auto">
        <Typography
          variant="h2"
          className="text-darkblue text-center pt-12 screen-sm:text-4xl screen-md:font-bold screen-md:text-5xl"
        >
          Pinned Projects
        </Typography>
        <Typography className="text-darkblue text-center mb-4 mt-2">
          Currently viewing projects for: <b>{industryToName(industry)}</b>
        </Typography>
        <Typography
          variant="subtitle1"
          className="text-center pb-6 text-cyan-600"
        >
          <b>Click</b> on a project to view it with more details
        </Typography>
      </div>
      <ProjectList
        projects={getPinnedProjectsByIndustry(industry)}
        setIsLoadingProjectPage={setIsLoadingProjectPage}
        navigate={navigate}
        isMobile={isMobile}
      />
      <div className="w-[90%] m-auto">
        <Typography variant="subtitle1" className="text-center text-darkblue">
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
    <section className="w-full bg-darkblue pb-4">
      <div className="relative">
        <div
          className="absolute top-[-70px] left-0 screen-md:top-0"
          id="awards"
        ></div>
        <Typography
          variant="h2"
          className="text-center text-white py-12 screen-sm:text-4xl screen-md:font-bold screen-md:text-5xl"
        >
          Project Awards
        </Typography>
      </div>
      <div className="w-full flex justify-evenly flex-wrap">
        {LINKEDIN_POSTS.map((post) => {
          return (
            <a
              key={post.url}
              href={post.url}
              className="block w-1/5 screen-md:w-[90%] mb-12 screen-md:mb-6"
              target="_blank"
              rel="noreferrer"
            >
              <div className="w-full overflow-hidden border-2 rounded-xl border-cyan-400 relative group">
                <img
                  alt=""
                  src={post.image}
                  className={
                    "w-full object-cover aspect-square group-hover:scale-110 duration-200 " +
                    post.origin
                  }
                />
                <div className="absolute w-full bg-white opacity-90 bottom-0 left-0 px-2 py-1">
                  <Typography
                    variant="h6"
                    className="text-cyan-600 underline-offset-4 text-center group-hover:underline font-normal text-[1rem]"
                  >
                    {post.title + " ↗"}
                  </Typography>
                </div>
              </div>
            </a>
          );
        })}
      </div>
      <div className="relative">
        <div
          className="absolute top-[-70px] left-0 screen-md:top-0"
          id="referrals"
        ></div>
        <Typography
          variant="h2"
          className="text-center text-white pb-12 screen-md:pt-6 screen-sm:text-4xl screen-md:font-bold screen-md:text-5xl"
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
          className="text-center screen-sm:text-4xl screen-md:font-bold screen-md:text-5xl"
        >
          Reach out to me
        </Typography>
        <Typography
          variant="subtitle1"
          className="text-cyan-600 text-center pb-12"
        >
          Let's talk! Feel free to send me a message through:
        </Typography>
      </div>
      <div className="w-full flex-wrap flex justify-center items-center gap-[5%] screen-md:gap-0">
        {CONTACT_ICONS.map((icon) => {
          return (
            <div
              key={"contactSection" + icon.href}
              className="flex flex-col items-center justify-center group screen-md:basis-[40%] screen-md:mb-6"
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
