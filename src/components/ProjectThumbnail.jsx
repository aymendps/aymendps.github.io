import { Card, Chip, Typography } from "@mui/material";
import NoThumbnailIcon from "@mui/icons-material/HideImageOutlined";
import { useEffect } from "react";

function ProjectThumbnail({
  title,
  subtitle,
  thumbnail,
  workDone = [],
  tags = [],
  pageURL,
  navigate,
  isMobile,
  setIsLoadingProjectPage,
  accessible = false,
}) {
  const generateWorkDone = workDone.map((work) => {
    return (
      <li
        key={title + work}
        className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-[0.92rem] leading-snug text-black"
      >
        {work}
      </li>
    );
  });

  const getTagsClassName = (tag) => {
    if (tag.startsWith("$R")) {
      return "bg-red-900 text-white font-bold cursor-pointer";
    } else if (tag.startsWith("$G")) {
      return "bg-green-900 text-white font-bold cursor-pointer";
    } else if (tag.startsWith("$Y")) {
      return "bg-yellow-900 text-white font-bold cursor-pointer";
    } else {
      return "bg-blue-900 text-white font-bold cursor-pointer";
    }
  };

  const generateTags = tags.map((tag) => {
    return (
      <Chip
        key={title + tag}
        label={tag.startsWith("$") ? tag.substring(2) : tag}
        size="small"
        variant="filled"
        className={getTagsClassName(tag)}
      ></Chip>
    );
  });

  let projectPageTimeout;

  const handleClick = () => {
    if (accessible) {
      window.location.href = "#/home#projects";
      if (isMobile) {
        setIsLoadingProjectPage(true);
        projectPageTimeout = setTimeout(() => {
          navigate("/projects" + pageURL);
        }, 500);
      } else {
        navigate("/projects" + pageURL);
      }
    }
  };

  useEffect(() => {
    return () => {
      clearTimeout(projectPageTimeout);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <Card
      className="shining-effect basis-[23%] screen-lg:basis-[31%] screen-sm:basis-[90%] screen-md:basis-[44%] mb-[2%] screen-sm:mb-[5%] relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.08)] cursor-pointer group transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)]"
      onClick={handleClick}
    >
      <div className="p-4 pb-3">
        <Typography
          variant="h5"
          className="text-center text-darkblue group-hover:underline text-[1.35rem] leading-tight"
        >
          {title}
        </Typography>
        <Typography className="text-center text-cyan-600 font-medium">
          {subtitle}
        </Typography>
      </div>
      <div className="w-full aspect-square bg-cyan-600 relative ">
        <img
          className="w-full object-center object-contain"
          src={thumbnail}
          alt=""
        ></img>
        <div className="absolute bottom-0 left-0 w-full">
          <div className="w-full p-2 flex flex-wrap gap-2 screen-sm:gap-1 justify-center">
            {generateTags}
          </div>
        </div>
        {!thumbnail && (
          <div className="absolute flex w-full h-full top-0 left-0 justify-center items-center">
            <NoThumbnailIcon className="text-darkblue text-5xl" />
          </div>
        )}
      </div>
      <div className="w-full">
        <div className="w-full px-4 py-4">
          {workDone.length !== 0 ? (
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {generateWorkDone}
            </ul>
          ) : (
            <Typography variant="body2" className="text-center text-slate-600">
              Details about this project will be added soon
            </Typography>
          )}
        </div>
      </div>
    </Card>
  );
}

export default ProjectThumbnail;
