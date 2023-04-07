import { CircularProgress, Typography } from "@mui/material";
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

  return (
    <section className="w-full bg-white pt-[70px]">
      <Typography variant="h2" className="text-darkblue text-center pt-12">
        {title}
      </Typography>
      <Typography
        variant="subtitle1"
        className="text-cyan-600 text-center pb-8"
      >
        {subtitle}
      </Typography>
      <div className="w-[65%] m-auto">
        <table className="border-collapsew-full m-auto text-darkblue mb-8 max-w-full">
          <tr>
            <td className="px-8 py-1">
              <b>Project Type: </b>
              {projectType}
            </td>
            <td className="px-8 py-1">
              <b>My Role: </b>
              {role}
            </td>
          </tr>
          <tr>
            <td className="px-8 py-1">
              <b>Team Size: </b> {teamSize === "1" ? "Solo" : teamSize}
            </td>
            <td className="px-8 py-1">
              <b>Platform: </b> {platform}
            </td>
          </tr>
          <tr>
            <td className="px-8 py-1">
              <b>Software Used: </b> {softwareUsed}
            </td>
            <td className="px-8 py-1">
              <b>When: </b> {when}
            </td>
          </tr>
        </table>
      </div>
      <div className="w-[80%] m-auto pb-8 flex justify-between">
        <div className="w-[70%] aspect-video bg-cyan-600 border-2 border-darkblue relative flex justify-center items-center">
          <CircularProgress className="text-darkblue" size={80} thickness={1} />
          <iframe
            className="w-full h-full absolute top-0 left-0"
            title={title}
            src={youtubeURL}
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-[25%]">
          <Typography variant="h4" className="text-cyan-600 pb-2">
            Description
          </Typography>
          <Typography className="text-darkblue whitespace-pre-line break-words">
            {description}
          </Typography>
          <Typography variant="h4" className="text-cyan-600 pt-4 pb-2">
            Useful Links:
          </Typography>
          <ul className="list-disc px-4">{generateUsefulLinks}</ul>
        </div>
      </div>
      <div className="w-full bg-darkblue">
        <div className="w-[80%] m-auto py-4">
          <Typography variant="h4" className="text-cyan-400 pt-4 pb-2">
            {teamSize === "1" ? "Work Done" : "Contributions"}
          </Typography>
          <ul className="list-disc px-4">{generateWorkDone}</ul>
        </div>
      </div>
    </section>
  );
}

export default ProjectIntroduction;
