import React from "react";
import { Typography, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Landing({ setIndustry }) {
  const isMobile = useMediaQuery("(max-width:768px)");
  const navigate = useNavigate();

  const handleIndustrySelection = (industry) => {
    setIndustry(industry);
    navigate("/home");
  };

  return (
    <div className="w-full flex flex-col justify-center items-center h-[90vh] screen-md:h-auto screen-md:mt-[30%] screen-sm:mt-[45%]">
      <div className="relative">
        <Typography
          variant={isMobile ? "h4" : "h2"}
          className="text-transparent absolute"
          style={{
            WebkitTextStroke: "1px  rgb(165 243 252)",
          }}
        >
          Aymen Hammami
        </Typography>
        <Typography
          variant={isMobile ? "h4" : "h2"}
          className="text-cyan-200"
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
      <Typography
        variant={isMobile ? "body2" : "h5"}
        className="mt-2 mb-6 text-white font-normal text-center"
      >
        Pick which projects you would like to see.
      </Typography>
      <div className="w-1/2 screen-lg:w-[90%]">
        <div
          className="bg-cyan-300 rounded-lg w-full p-4 screen-sm:p-2 mb-4 hover:cursor-pointer hover:scale-[1.02] hover:bg-cyan-200 duration-200 screen-sm:hover:scale-100"
          onClick={handleIndustrySelection.bind(this, "gaming")}
        >
          <Typography
            variant={isMobile ? "body1" : "h5"}
            className="text-darkblue font-bold"
          >
            Gaming Industry
          </Typography>
          <Typography
            variant={isMobile ? "body2" : "h6"}
            className="text-darkblue font-normal"
          >
            Includes games, tools, and engine development.
          </Typography>
        </div>
        <div
          className="bg-cyan-300 rounded-lg w-full p-4 screen-sm:p-2 mb-4 hover:cursor-pointer hover:scale-[1.02] hover:bg-cyan-200 duration-200 screen-sm:hover:scale-100"
          onClick={handleIndustrySelection.bind(this, "software")}
        >
          <Typography
            variant={isMobile ? "body1" : "h5"}
            className="text-darkblue font-bold"
          >
            Software & Web Industry
          </Typography>
          <Typography
            variant={isMobile ? "body2" : "h6"}
            className="text-darkblue font-normal"
          >
            Includes frontend, backend, tools, and application development.
          </Typography>
        </div>
        <div
          className="bg-cyan-300 rounded-lg w-full p-4 screen-sm:p-2 mb-4 hover:cursor-pointer hover:scale-[1.02] hover:bg-cyan-200 duration-200 screen-sm:hover:scale-100"
          onClick={handleIndustrySelection.bind(this, "all")}
        >
          <Typography
            variant={isMobile ? "body1" : "h5"}
            className="text-darkblue font-bold"
          >
            Show Both
          </Typography>
          <Typography
            variant={isMobile ? "body2" : "h6"}
            className="text-darkblue font-normal"
          >
            Explore all projects across both industries.
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Landing;
