import { CircularProgress, Typography } from "@mui/material";
import { useEffect } from "react";

function ProjectIntroduction({ title, subtitle, youtubeURL }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="w-full bg-white pt-[70px]">
        <Typography variant="h2" className="text-darkblue text-center pt-12">
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          className="text-cyan-600 text-center pb-12"
        >
          {subtitle}
        </Typography>
        <div className="w-[65%] aspect-video bg-cyan-600 border-2 border-darkblue m-auto relative flex justify-center items-center">
          <CircularProgress className="text-darkblue" size={80} thickness={1} />
          <iframe
            className="w-full h-full absolute top-0 left-0"
            title={title}
            src={youtubeURL}
            allowFullScreen
          ></iframe>
        </div>
        <div className="py-6"></div>
      </div>
    </>
  );
}

export default ProjectIntroduction;
