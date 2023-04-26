import { Chip, CircularProgress, Typography } from "@mui/material";
import { useEffect } from "react";
import { HashLink } from "react-router-hash-link";

function ProjectIntroduction({
  title,
  subtitle,
  youtubeURL,
  projectType,
  role,
  teamSize,
  platform,
  softwareUsed,
  when,
  description,
  usefulLinks = [],
  workDone = [],
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const generateUsefulLinks = usefulLinks.map((link) => {
    return (
      <li className="text-darkblue">
        <a
          className="underline text-darblue"
          key={link.href + link.title}
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
      <li className="text-white">
        <HashLink className="underline text-white" smooth to={work.id}>
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
    when,
  ].map((tag) => {
    return (
      <Chip
        key={title + tag}
        label={tag}
        size="medium"
        variant="filled"
        className="bg-darkblue text-white font-bold border-darkblue"
      ></Chip>
    );
  });

  return (
    <section className="w-full bg-white pt-[70px] screen-md:pt-0">
      <div className="w-[90%] m-auto">
        <Typography
          variant="h2"
          className="text-darkblue text-center pt-12 screen-md:pt-6 screen-sm:text-4xl screen-md:font-bold screen-md:text-5xl"
        >
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          className="text-cyan-600 text-center pb-4"
        >
          {subtitle}
        </Typography>
      </div>
      <div className="w-full flex justify-center gap-2 flex-wrap pb-12 screen-md:pb-6">
        {generateTags}
      </div>
      <div className="w-[80%] m-auto pb-8 flex justify-between screen-md:w-[90%] screen-md:block screen-md:pb-6">
        <div className="w-[70%] screen-md:w-full aspect-video bg-cyan-600 border-2 border-darkblue relative flex justify-center items-center">
          <CircularProgress className="text-darkblue" size={80} thickness={1} />
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
          <Typography className="text-darkblue whitespace-pre-line break-words">
            {description}
          </Typography>
          <Typography
            variant="h4"
            className="text-cyan-600 pt-4 pb-2 screen-sm:text-2xl screen-md:text-3xl screen-md:font-bold"
          >
            Useful Links
          </Typography>
          <ul className="list-disc px-4">{generateUsefulLinks}</ul>
        </div>
      </div>
      <div className="w-full bg-darkblue">
        <div className="w-[80%] m-auto py-8 screen-md:w-[90%]">
          <Typography
            variant="h4"
            className="text-cyan-400 pb-2 screen-sm:text-2xl screen-md:text-3xl screen-md:font-bold"
          >
            {teamSize === "1" ? "Work Done" : "Contributions"}
          </Typography>
          <ul className="list-disc px-4">{generateWorkDone}</ul>
        </div>
      </div>
    </section>
  );
}

export default ProjectIntroduction;
