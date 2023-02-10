import { CircularProgress, Typography } from "@mui/material";
import { useRef, useState } from "react";

function Home() {
  const [isLoadingSmallVideo, setIsLoadingSmallVideo] = useState(true);

  const smallVideoRef = useRef();

  return (
    <>
      <div className="h-[85vh] w-full mt-[35px] bg-gray-900 flex justify-center items-center">
        <div className="w-full h-[85vh] absolute top-0 left-0 z-20">
          <video
            ref={smallVideoRef}
            loop
            muted
            className={
              isLoadingSmallVideo ? "w-full h-full hidden" : "w-full h-full"
            }
            onLoadedData={() => {
              if (smallVideoRef.current.readyState === 4) {
                setIsLoadingSmallVideo(false);
                smallVideoRef.current.play();
              }
            }}
          >
            <source src="/test.webm" />
          </video>
        </div>
        {!isLoadingSmallVideo && (
          <video
            loop
            muted
            autoPlay
            className="w-full absolute blur-lg left-0 top-0 z-0"
          >
            <source src="/test.webm" />
          </video>
        )}
        <CircularProgress size={60} />
      </div>
      <div className="w-full bg-darkblue translate-y-[-35px] py-4">
        <div className="m-auto w-[70%]">
          <Typography variant="h2" className="text-center text-white pb-4 ">
            Welcome to my portfolio!
          </Typography>
          <Typography className="text-white text-center">
            Hey! Thank you for taking the time to visit my portfolio! I'm{" "}
            <b>Aymen</b>, a software engineering student from Tunisia.
            <br />
            I've been making games and apps since I was in high school, and
            there are many reasons as to why I enjoy it so much:
          </Typography>
        </div>
      </div>
    </>
  );
}

export default Home;
