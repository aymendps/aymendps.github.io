import { Card, Chip, Typography } from "@mui/material";
import NoThumbnailIcon from "@mui/icons-material/HideImageOutlined";
import { useEffect } from "react";

function ProjectThumbnail({
  title,
  subtitle,
  thumbnail,
  solo,
  workDone = [],
  tags = [],
  pageURL,
  navigate,
  isMobile,
  setIsLoadingProjectPage,
  accessible = false,
}) {
  const generateWorkDone = workDone.map((work) => {
    return <li key={title + work}>{work}</li>;
  });

  const generateTags = tags.map((tag) => {
    return (
      <Chip
        key={title + tag}
        label={tag.startsWith("$R") ? tag.substring(2) : tag}
        size="small"
        variant="filled"
        className={
          tag.startsWith("$R")
            ? "bg-red-900 text-white font-bold cursor-pointer"
            : "bg-blue-900 text-white font-bold cursor-pointer"
        }
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
      className="shining-effect basis-[23%] screen-lg:basis-[31%] screen-sm:basis-[90%] screen-md:basis-[44%] mb-[2%] screen-sm:mb-[5%] relative rounded-xl overflow-hidden cursor-pointer group"
      onClick={handleClick}
    >
      <div className="p-4">
        <Typography
          variant="h5"
          className="text-center text-darkblue group-hover:underline text-[1.4rem]"
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
        <div className="w-full py-4 px-2">
          {accessible && workDone.length !== 0 ? (
            <ul className="list-disc px-4">{generateWorkDone}</ul>
          ) : (
            <Typography variant="body2" className="text-center">
              Details about this project will be added soon
            </Typography>
          )}
        </div>
      </div>
    </Card>
  );
}

export default ProjectThumbnail;
