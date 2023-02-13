import { CircularProgress, IconButton, Typography } from "@mui/material";
import { useRef, useState } from "react";
import GoDownIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";

function Home() {
  const [isLoadingVideo, setIsLoadingVideo] = useState(true);

  const goDownRef = useRef();

  return (
    <>
      <div className="relative h-[85vh] w-full mt-[70px] bg-gray-900 flex justify-center items-center">
        <div className="w-[90%] h-[90%] z-10 bg-[rgb(0,20,40)] border border-gray-500">
          <video
            key="small-video"
            loop
            muted
            autoPlay
            className="w-full h-full object-cover object-center"
            onPlay={() => {
              setIsLoadingVideo(false);
            }}
          >
            <source src="/test.webm" />
          </video>
        </div>
        <div className="absolute z-0 w-full h-[90%] top-0 left-0">
          <video
            key="big-video"
            loop
            muted
            autoPlay
            className="w-full h-full object-cover object-center blur"
          >
            <source src="/test.webm" />
          </video>
        </div>
        {isLoadingVideo ? (
          <div className="absolute z-20 w-full h-full top-0 left-0 flex justify-center items-center">
            <CircularProgress size={60} className="text-white" />
          </div>
        ) : null}
      </div>
      <div className="w-full bg-darkblue py-4 z-10 translate-y-[-10vh] pt-[5vh]">
        <div className="h-[10vh] flex justify-center items-center">
          <div
            ref={goDownRef}
            className="w-fit h-fit hover:scale-110 duration-200"
          >
            <IconButton
              onClick={() => {
                goDownRef.current.scrollIntoView({
                  alignToTop: true,
                  behavior: "smooth",
                });
              }}
            >
              <GoDownIcon fontSize="large" className="text-white" />
            </IconButton>
          </div>
        </div>
        <div className="m-auto w-[70%] py-4">
          <Typography variant="h2" className="text-center text-white pb-4">
            Welcome to my portfolio!
          </Typography>
          <Typography className="text-white whitespace-pre-line">
            {`a
            a
            a
            a
            a
            a
            a
            a
            a
            a
            a
            a
            a
            a
            a
            a
            a
            a
            a
            a
            a
            a
            a
            a
            `}
          </Typography>
        </div>
      </div>
    </>
  );
}

export default Home;
