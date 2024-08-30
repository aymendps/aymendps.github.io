import { Chip, CircularProgress, Typography } from "@mui/material";
import { HashLink } from "react-router-hash-link";
import ProjectBackToTopButton from "./ProjectBackToTopButton";
import ProjectLearningOutcomes from "./ProjectLearningOutcomes";
import React from "react";

function ProjectIntroduction({
  title,
  youtubeURL,
  projectType,
  role,
  solo,
  platform,
  softwareUsed,
  description,
  usefulLinks = [],
  workDone = [],
  useLinksForWorkDone = true,
  outcomes = [],
}) {
  const generateUsefulLinks = usefulLinks.map((link) => {
    return (
      <li
        key={link.href + link.title}
        className="text-darkblue pt-1 underline-offset-4 text-justify"
      >
        <a
          className="underline text-darblue"
          href={link.href}
          target="_blank"
          rel="noreferrer"
        >
          {link.title + " ↗"}
        </a>
      </li>
    );
  });

  const generateWorkDone = workDone.map((work) => {
    return (
      <li
        key={"hashlink" + work.id}
        className="text-white pt-1 underline-offset-4 text-justify"
      >
        {useLinksForWorkDone ? (
          <HashLink
            className="underline text-white text-justify"
            smooth
            to={"#" + work.id}
          >
            {work.title}
          </HashLink>
        ) : (
          work.title
        )}
      </li>
    );
  });

  const generateTags = [
    projectType,
    role,
    solo ? "Solo Project" : "Team Project",
    platform,
    softwareUsed,
  ].map((tag) => {
    return (
      <Chip
        key={title + tag}
        label={tag}
        size="medium"
        variant="filled"
        className="bg-darkblue text-white font-bold"
      ></Chip>
    );
  });

  const generateYoutubeVideos = youtubeURL.map((url, index) => {
    return (
      <React.Fragment key={"video " + url}>
        <div className="w-full aspect-video bg-cyan-600 border-2 border-darkblue relative flex justify-center items-center mb">
          <CircularProgress className="text-darkblue" size={90} thickness={1} />
          <iframe
            className="w-full h-full absolute top-0 left-0"
            title={title}
            src={url}
            allowFullScreen
          ></iframe>
        </div>
        {index !== youtubeURL.length - 1 && <br />}
      </React.Fragment>
    );
  });

  return (
    <>
      <section className="w-full bg-white pt-[70px] screen-lg:pt-0">
        <div className="w-[90%] m-auto pb-4">
          <Typography
            variant="h2"
            className="text-darkblue text-center pt-12 screen-lg:pt-6 screen-sm:text-3xl screen-lg:font-bold screen-lg:text-5xl"
          >
            {title}
          </Typography>
        </div>
        <div className="w-[90%] m-auto flex justify-center gap-2 flex-wrap pb-12 screen-lg:pb-6 screen-sm:w-[98%] screen-sm:gap-1">
          {generateTags}
        </div>
        <div className="w-[90%] m-auto hidden screen-lg:block">
          <Typography
            variant="h4"
            className="text-cyan-600 pb-2 screen-sm:text-2xl screen-lg:text-3xl screen-lg:font-bold"
          >
            {youtubeURL.length > 1 ? "Demo Videos" : "Demo Video"}
          </Typography>
        </div>
        <div className="w-[90%] m-auto pb-8 flex justify-between screen-lg:block screen-lg:pb-6">
          <div className="w-[70%] screen-lg:w-full">
            {generateYoutubeVideos}
          </div>
          <div className="w-[25%] screen-lg:w-full screen-lg:pt-4">
            <Typography
              variant="h4"
              className="text-cyan-600 pb-2 screen-sm:text-2xl screen-lg:text-3xl screen-lg:font-bold"
            >
              Description
            </Typography>
            <Typography className="text-darkblue whitespace-pre-line break-words text-[16px] leading-5 text-justify">
              {description}
            </Typography>
          </div>
        </div>
        <div className="w-[90%] m-auto pb-6">
          <Typography
            variant="h4"
            className="text-cyan-600 pb-2 screen-sm:text-2xl screen-lg:text-3xl screen-lg:font-bold"
          >
            Useful Links
          </Typography>
          <ul className="list-disc px-4">{generateUsefulLinks}</ul>
        </div>
        <div className="w-full bg-darkblue">
          <div className="w-[90%] m-auto pt-6" id="generated-work">
            <Typography
              variant="h4"
              className="text-cyan-400 pb-2 screen-sm:text-2xl screen-lg:text-3xl screen-lg:font-bold"
            >
              {solo ? "Highlighted Work" : "Contributions"}
            </Typography>
            {workDone.length !== 0 ? (
              <ul className="list-disc px-4 pb-2">{generateWorkDone}</ul>
            ) : (
              <Typography className="text-white">
                More details will be added soon!
              </Typography>
            )}
          </div>
        </div>
        <ProjectLearningOutcomes outcomes={outcomes} />
      </section>
      <ProjectBackToTopButton />
    </>
  );
}

export default ProjectIntroduction;
