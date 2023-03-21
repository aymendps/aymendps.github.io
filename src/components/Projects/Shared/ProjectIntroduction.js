import { CircularProgress, Typography } from "@mui/material";
import { useEffect } from "react";

function ProjectIntroduction({
  title,
  subtitle,
  youtubeURL,
  projectType,
  role,
  teamSize,
  platform,
  softwareUsed,
  languagesUsed,
  introduction,
  workDone,
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const introductionSection = (
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
              <b>Languages Used: </b> {languagesUsed}
            </td>
          </tr>
        </table>
      </div>
      <div className="w-[65%] aspect-video bg-cyan-600 border-2 border-darkblue m-auto relative flex justify-center items-center">
        <CircularProgress className="text-darkblue" size={80} thickness={1} />
        <iframe
          className="w-full h-full absolute top-0 left-0"
          title={title}
          src={youtubeURL}
          allowFullScreen
        ></iframe>
      </div>
      <div className="w-[80%] m-auto py-6">
        <Typography variant="h4" className="text-cyan-600 pb-2">
          Introduction
        </Typography>
        <Typography className="text-darkblue whitespace-pre-line break-words">
          {introduction}
        </Typography>
      </div>
    </section>
  );

  const workDoneSection = (
    <section className="bg-darkblue py-8 w-[80%] m-auto">
      <Typography variant="h4" className="text-cyan-300 pb-2">
        {teamSize === "1" ? "Work Done" : "Contributions"}
      </Typography>
      <ul className="px-4 list-disc">
        {/* <Typography
          component="li"
          className="text-white underline cursor-pointer"
          onClick={() => {
            document
              .getElementById("some id")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          Lead responsibilities
        </Typography> */}
      </ul>
    </section>
  );

  return (
    <>
      {introductionSection} {workDoneSection}
    </>
  );
}

export default ProjectIntroduction;
