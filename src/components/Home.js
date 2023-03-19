import { Button, CircularProgress, Typography } from "@mui/material";
import { useState } from "react";
import ResumeIcon from "@mui/icons-material/AttachFile";
import AboutIcon from "@mui/icons-material/Person4";
import { Link, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import ProjectList from "./ProjectList";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";

function Home() {
  const [isLoadingVideo, setIsLoadingVideo] = useState(true);

  const navigate = useNavigate();

  const VIDEO_SRC = "";

  const CONTACT_ICONS = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/aymendps/",
      icon: (
        <LinkedInIcon className="text-darkblue hover:text-cyan-600 text-7xl" />
      ),
    },
    {
      name: "Email",
      href: "mailto:hammami.aym@outlook.com",
      icon: (
        <EmailIcon className="text-darkblue hover:text-cyan-600 text-7xl" />
      ),
    },
    {
      name: "GitHub",
      href: "https://github.com/aymendps",
      icon: (
        <GithubIcon className="text-darkblue hover:text-cyan-600 text-7xl" />
      ),
    },
  ];

  const videoSection = (
    <section className="relative h-[85vh] w-full mt-[70px] bg-gray-900 flex justify-center items-center">
      <div className="absolute w-full top-[-70px] left-0" id="t"></div>
      <div className="w-[90%] h-[90%] z-10 bg-[rgb(0,20,40)] border border-gray-500">
        <video
          key="small-video"
          loop
          muted
          autoPlay
          className="w-full h-full object-cover object-center"
          onPlay={() => {
            setIsLoadingVideo(false);
          }}
        >
          <source src={VIDEO_SRC} />
        </video>
      </div>
      <div className="absolute z-0 w-full h-[90%] top-0 left-0">
        <video
          key="big-video"
          loop
          muted
          autoPlay
          className="w-full h-full object-cover object-center blur"
        >
          <source src={VIDEO_SRC} />
        </video>
      </div>
      {isLoadingVideo ? (
        <div className="absolute z-20 w-full h-full top-0 left-0 flex justify-center items-center">
          <CircularProgress size={60} className="text-white" />
        </div>
      ) : null}
    </section>
  );

  const aboutSection = (
    <section className="w-full bg-darkblue z-10 translate-y-[-10vh] pb-0">
      <div className="h-[10vh] flex justify-center items-center">
        <div className="w-fit h-fit hover:scale-110 duration-200 relative"></div>
      </div>
      <div className="m-auto w-[80%] py-4">
        <Typography variant="h2" className="text-center text-white pb-4">
          Welcome to my portfolio!
        </Typography>
        <br />
        <Typography className="text-white text-center">
          <HashLink
            smooth
            to="/home#projects"
            className="text-cyan-400 hover:underline"
          >
            <b>Below</b>
          </HashLink>{" "}
          you will find some of the projects that I've had the opportunity of
          contributing to, and also some of my personal projects that I worked
          on.
        </Typography>
        <br />
        <Typography className="text-white text-center">
          My name is{" "}
          <Link to="/about-me" className="text-cyan-400 hover:underline">
            <b>Aymen</b>
          </Link>{" "}
          and I am a final year Software Engineering student at{" "}
          <a
            href="https://www.smu.tn/medtech"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-400 hover:underline"
          >
            <b>South Mediterranean University, MedTech.</b>
          </a>
        </Typography>
        <Typography className="text-white text-center">
          I've always had a passion for games and programming. I've been playing
          them since I was a kid, and I started making my own games and web apps
          in high school.
        </Typography>
        <br />
        <Typography className="text-white text-center">
          I absolutely love{" "}
          <a
            href="https://github.com/aymendps"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-400 hover:underline"
          >
            <b>programming.</b>
          </a>{" "}
          I mean, there's just something so satisfying about taking an idea and
          turning it into a reality through code.
        </Typography>
        <br />
        <Typography className="text-white text-center">
          When it comes to games, it's a bit of an emotional roller coaster for
          me. Whether I'm playing alone or with friends, I just get so caught up
          in the story and the world that's been created. It's like getting lost
          in a really good book - you just can't put it down.
        </Typography>
        <br />
        <Typography className="text-white text-center">
          I also really enjoy working closely with my teammates to create
          experiences that users will love. I've been fortunate enough to work
          on some amazing projects both on my own and as part of a team. There's
          nothing quite like that feeling of pride when you've worked together
          to create something truly meaningful.
        </Typography>
        <br />
        <Typography className="text-white text-center">
          If you're as passionate as I am for making games, web apps, and
          software projects, then don't hesitate to reach out.{" "}
          <a
            href="https://www.linkedin.com/in/aymendps/"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-400 hover:underline"
          >
            <b>Let's get in touch!</b>
          </a>
        </Typography>
      </div>
    </section>
  );

  const projectsSection = (
    <section className="w-full bg-white pb-12 relative">
      <div className="absolute top-[-70px] left-0" id="projects"></div>
      <Typography variant="h2" className="text-black text-center pt-12">
        Work & Projects
      </Typography>
      <Typography
        variant="subtitle1"
        className="text-center pb-12 text-cyan-600"
      >
        Click on a project to view it with more details
      </Typography>
      <ProjectList />
    </section>
  );

  const knowMoreSection = (
    <section className="w-full bg-darkblue py-12">
      <Typography variant="h2" className="text-center text-white pb-12">
        Know more about me
      </Typography>
      <div className="w-[80%] flex justify-evenly m-auto">
        <div className="basis-[35%]">
          <Button
            fullWidth
            size="large"
            variant="outlined"
            className="text-cyan-400 border-cyan-400 hover:border-cyan-300"
            startIcon={<ResumeIcon />}
            onClick={() => {
              navigate("/resume");
            }}
          >
            Resume Section
          </Button>
          <Typography
            variant="caption"
            className="text-cyan-200 text-center block pt-2"
          >
            My skills, projects, education & experience in PDF format
          </Typography>
        </div>
        <div className="basis-[35%]">
          <Button
            fullWidth
            size="large"
            variant="outlined"
            className="text-cyan-400 border-cyan-400 hover:border-cyan-300"
            startIcon={<AboutIcon />}
            onClick={() => {
              navigate("/about-me");
            }}
          >
            About me Section
          </Button>
          <Typography
            variant="caption"
            className="text-cyan-200 text-center block pt-2"
          >
            More about who I am, what I enjoy, what I do in my free time
          </Typography>
        </div>
      </div>
    </section>
  );

  const contactSection = (
    <section className="w-full bg-white py-12">
      <Typography variant="h2" className="text-center">
        Reach out to me
      </Typography>
      <Typography className="text-cyan-600 text-center pb-12">
        Let's talk! Feel free to send me a message through:
      </Typography>
      <div className="w-full flex justify-center items-center gap-8">
        {CONTACT_ICONS.map((icon) => {
          return (
            <div className="flex flex-col items-center justify-center">
              <a
                key={"contactSection" + icon.href}
                href={icon.href}
                target="_blank"
                rel="noreferrer"
                className="pb-2 peer"
              >
                {icon.icon}
              </a>
              <Typography
                variant="caption"
                className="peer-hover:text-cyan-600"
              >
                {icon.name}
              </Typography>
            </div>
          );
        })}
      </div>
    </section>
  );

  const copyrightSection = (
    <section className="bg-black w-full p-2">
      <Typography className="text-white text-center">
        Copyright © 2023 by Aymen Hammami -{" "}
        <a
          href="https://www.linkedin.com/in/aymendps/"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          Have feedback? Please let me know!
        </a>
      </Typography>
    </section>
  );
  return (
    <>
      {videoSection}
      {aboutSection}
      {projectsSection}
      {knowMoreSection}
      {contactSection}
      {copyrightSection}
    </>
  );
}

export default Home;
