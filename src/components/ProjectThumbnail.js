import { Chip, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectThumbnail({
  title,
  subtitle,
  thumbnail,
  gif,
  solo,
  workDone,
  tags,
  pageURL,
}) {
  const navigate = useNavigate();

  const generateWorkDone = workDone.map((wd) => {
    return (
      <Typography>
        <span className="text-cyan-600 font-bold">{wd[0]}</span>
        {wd.substring(1)}
      </Typography>
    );
  });

  const generateTags = tags.map((tag) => {
    return (
      <Chip
        label={tag}
        variant="outlined"
        className="bg-darkblue text-white font-bold border-darkblue"
      ></Chip>
    );
  });

  return (
    <div className="basis-1/4 relative rounded-xl overflow-hidden border-2 border-darkblue">
      <div className="bg-white p-4">
        <Typography variant="h5" className="text-center text-darkblue">
          {title}
        </Typography>
        <Typography className="text-center text-cyan-600">
          {subtitle}
        </Typography>
      </div>
      <div
        className="w-full aspect-square bg-cyan-600 cursor-pointer relative"
        onClick={() => {
          navigate(pageURL);
        }}
      >
        <img
          className="max-h-full max-w-full"
          onMouseEnter={(e) => {
            e.currentTarget.src = gif;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.src = thumbnail;
          }}
          src={thumbnail}
          alt=""
        ></img>
        <div className="absolute bottom-0 left-0 w-full">
          <div className="w-full p-4 flex flex-wrap gap-2 bg-white bg-opacity-70">
            {generateTags}
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full p-4">
          <Typography variant="h6" className="text-center text-darkblue pb-2">
            {solo ? "Work Done" : "Contributions"}
          </Typography>
          {generateWorkDone}
        </div>
      </div>
    </div>
  );
}

export default ProjectThumbnail;
