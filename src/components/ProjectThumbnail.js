import { Chip, Typography } from "@mui/material";
import React, { useState } from "react";
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

  const [imageSrc, setImageSrc] = useState(thumbnail);

  const generateWorkDone = workDone.map((wd) => {
    return (
      <Typography key={title + wd}>
        <span className="text-cyan-600 font-bold">{wd[0]}</span>
        {wd.substring(1)}
      </Typography>
    );
  });

  const generateTags = tags.map((tag) => {
    return (
      <Chip
        key={title + tag}
        label={tag}
        size="small"
        variant="outlined"
        className="bg-darkblue text-white font-bold border-darkblue cursor-pointer"
      ></Chip>
    );
  });

  return (
    <div
      onClick={() => {
        navigate(pageURL);
      }}
      onMouseEnter={() => {
        if (gif) setImageSrc(gif);
      }}
      onMouseLeave={() => {
        setImageSrc(thumbnail);
      }}
      className="basis-[25%] relative rounded-xl overflow-hidden border-2 border-darkblue cursor-pointer group mb-[5%] hover:bg-cyan-50"
    >
      <div className="p-4">
        <Typography
          variant="h5"
          className="text-center text-darkblue group-hover:underline"
        >
          {title}
        </Typography>
        <Typography className="text-center text-cyan-600 group-hover:underline">
          {subtitle}
        </Typography>
      </div>
      <div className="w-full aspect-square bg-cyan-600 relative border-y-2 border-darkblue">
        <img
          className="w-full h-full object-center"
          src={imageSrc}
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
