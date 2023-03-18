import { CircularProgress, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Home() {
  const [isLoadingVideo, setIsLoadingVideo] = useState(true);

  const videoSection = (
    <section className="relative h-[85vh] w-full mt-[70px] bg-gray-900 flex justify-center items-center">
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
          <source src="/test.webm" />
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
          <source src="/test.webm" />
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
          <HashLink smooth to="/home#projects" className="text-cyan-400">
            <b>Below </b>
          </HashLink>
          you will find some of the projects that I've had the opportunity of
          contributing to, and also some of my personal projects that I worked
          on.
        </Typography>
        <br />
        <Typography className="text-white text-center">
          My name is{" "}
          <Link to="/about-me" className="text-cyan-400">
            <b>Aymen</b>
          </Link>{" "}
          and I am a final year Software Engineering student at{" "}
          <a
            href="https://www.smu.tn/medtech"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-400"
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
            className="text-cyan-400"
          >
            <b>programming. </b>
          </a>
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
            className="text-cyan-400"
          >
            <b>Let's get in touch!</b>
          </a>
        </Typography>
      </div>
    </section>
  );

  const projectsSection = (
    <section className="w-full bg-white pb-12">
      <Typography
        variant="h2"
        className="text-black text-center py-12"
        id="projects"
      >
        Work & Projects
      </Typography>
      <div className="w-full flex justify-evenly items-center">
        <div className="bg-red-500 basis-[25%] flex items-start">
          <div className="basis-[85%] aspect-square bg-black"></div>
        </div>
      </div>
    </section>
  );

  const copyrightSection = (
    <section className="bg-black w-full p-2">
      <Typography className="text-white text-center">
        Copyright © 2023 by Aymen Hammami
      </Typography>
    </section>
  );
  return (
    <>
      {videoSection}
      {aboutSection}
      {projectsSection}
      {copyrightSection}
    </>
  );
}

export default Home;
