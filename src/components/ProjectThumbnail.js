import { Chip, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function ProjectThumbnail({
  title,
  subtitle,
  thumbnail,
  solo,
  workDone = [],
  tags = [],
  pageURL,
}) {
  const generateWorkDone = workDone.map((work) => {
    return <li key={title + work}>{work}</li>;
  });

  const generateTags = tags.map((tag) => {
    return (
      <Chip
        key={title + tag}
        label={tag}
        size="small"
        variant="filled"
        className="bg-darkblue text-white font-bold border-darkblue cursor-pointer"
      ></Chip>
    );
  });

  return (
    <Link
      to={pageURL}
      onClick={() => {
        window.location.href = "#/home#projects";
      }}
      className="basis-[22%] screen-sm:basis-[90%] screen-md:basis-[80%] mb-[5%] relative rounded-xl overflow-hidden border-2 border-darkblue cursor-pointer group hover:bg-cyan-50"
    >
      <div className="p-4">
        <Typography
          variant="h5"
          className="text-center text-darkblue group-hover:underline"
        >
          {title}
        </Typography>
        <Typography className="text-center text-cyan-600">
          {subtitle}
        </Typography>
      </div>
      <div className="w-full aspect-square bg-cyan-600 relative border-y-2 border-darkblue">
        <img
          className="w-full object-center object-contain"
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
          <ul className="list-disc px-4">{generateWorkDone}</ul>
        </div>
      </div>
    </Link>
  );
}

export default ProjectThumbnail;
