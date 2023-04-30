import { Typography } from "@mui/material";
import { useEffect } from "react";

function ProjectContent({ workDone = [] }) {
  /* eslint-disable */
  useEffect(() => {
    const foundID = workDone.find((work) =>
      window.location.href.includes("#" + work.id)
    );
    if (foundID) {
      document.getElementById(foundID.id).scrollIntoView({ block: "start" });
    } else {
      window.scrollTo(0, 0);
    }
  }, []);
  /* eslint-enable */

  const generateWorkDone = workDone.map((work, index) => {
    return (
      <section
        key={"section" + work.id + work.title}
        className={
          index % 2 === 0 ? "w-full bg-white py-6" : "w-full bg-gray-200 py-6"
        }
      >
        <div className="w-full relative">
          <div
            className="absolute top-[-80px] left-0 screen-md:top-[-10px]"
            id={work.id}
          ></div>
        </div>
        <div className="w-[90%] m-auto">
          <Typography
            variant="h4"
            className="text-cyan-600 pb-2 screen-sm:text-2xl screen-md:text-3xl screen-md:font-bold"
          >
            {work.title}
          </Typography>
          {work.content}
        </div>
      </section>
    );
  });

  return <div>{generateWorkDone}</div>;
}

export default ProjectContent;
