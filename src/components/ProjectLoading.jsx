import { CircularProgress, Typography } from "@mui/material";
import React from "react";

function ProjectLoading() {
  return (
    <div className="hidden screen-md:block fixed z-[1000] bg-darkblue top-0 left-0 right-0 bottom-0">
      <div className="w-full h-[90%] flex flex-col items-center justify-center gap-8">
        <div className="relative">
          <Typography
            variant="h4"
            className="text-black absolute text-transparent"
            style={{ WebkitTextStroke: "1px white" }}
          >
            Aymen Hammami
          </Typography>
          <Typography
            variant="h4"
            className="text-white"
            style={{
              animationName: "liquid",
              animationDuration: "3s",
              animationTimingFunction: "ease-in-out",
              animationIterationCount: "infinite",
            }}
          >
            Aymen Hammami
          </Typography>
        </div>
        <CircularProgress
          variant="indeterminate"
          disableShrink
          className="text-white"
          size={50}
          thickness={2}
        />
      </div>
    </div>
  );
}

export default ProjectLoading;
