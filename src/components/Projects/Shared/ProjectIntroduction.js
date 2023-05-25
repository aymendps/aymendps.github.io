import { Chip, CircularProgress, Typography } from "@mui/material";
import { HashLink } from "react-router-hash-link";
import ProjectBackToTopButton from "./ProjectBackToTopButton";

function ProjectIntroduction({
  title,
  youtubeURL,
  projectType,
  role,
  teamSize,
  platform,
  softwareUsed,
  description,
  usefulLinks = [],
  workDone = [],
}) {
  const generateUsefulLinks = usefulLinks.map((link) => {
    return (
      <li
        key={link.href + link.title}
        className="text-darkblue pt-1 underline-offset-4"
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
        className="text-white pt-1 underline-offset-4"
      >
        <HashLink className="underline text-white" smooth to={"#" + work.id}>
          {work.title}
        </HashLink>
      </li>
    );
  });

  const generateTags = [
    projectType,
    role,
    teamSize === "1" ? "Solo" : "Team of " + teamSize,
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

  return (
    <>
      <section className="w-full bg-white pt-[70px] screen-md:pt-0">
        <div className="w-[90%] m-auto pb-4">
          <Typography
            variant="h2"
            className="text-darkblue text-center pt-12 screen-md:pt-6 screen-sm:text-4xl screen-md:font-bold screen-md:text-5xl"
          >
            {title}
          </Typography>
        </div>
        <div className="w-[90%] m-auto flex justify-center gap-2 flex-wrap pb-12 screen-md:pb-6 screen-sm:w-[98%] screen-sm:gap-1">
          {generateTags}
        </div>
        <div className="w-[90%] m-auto hidden screen-md:block">
          <Typography
            variant="h4"
            className="text-cyan-600 pb-2 screen-sm:text-2xl screen-md:text-3xl screen-md:font-bold"
          >
            Demo Video
          </Typography>
        </div>
        <div className="w-[90%] m-auto pb-8 flex justify-between screen-md:block screen-md:pb-6">
          <div className="w-[70%] screen-md:w-full aspect-video bg-cyan-600 border-2 border-darkblue relative flex justify-center items-center">
            <CircularProgress
              className="text-darkblue"
              size={90}
              thickness={1}
            />
            <iframe
              className="w-full h-full absolute top-0 left-0"
              title={title}
              src={youtubeURL}
              allowFullScreen
            ></iframe>
          </div>
          <div className="w-[25%] screen-md:w-full screen-md:pt-4">
            <Typography
              variant="h4"
              className="text-cyan-600 pb-2 screen-sm:text-2xl screen-md:text-3xl screen-md:font-bold"
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
            className="text-cyan-600 pb-2 screen-sm:text-2xl screen-md:text-3xl screen-md:font-bold"
          >
            Useful Links
          </Typography>
          <ul className="list-disc px-4">{generateUsefulLinks}</ul>
        </div>
        <div className="w-full bg-darkblue">
          <div className="w-[90%] m-auto py-6" id="generated-work">
            <Typography
              variant="h4"
              className="text-cyan-400 pb-2 screen-sm:text-2xl screen-md:text-3xl screen-md:font-bold"
            >
              {teamSize === "1" ? "Highlighted Work" : "Contributions"}
            </Typography>
            <ul className="list-disc px-4 pb-2">{generateWorkDone}</ul>
          </div>
        </div>
      </section>
      <ProjectBackToTopButton />
    </>
  );
}

export default ProjectIntroduction;
