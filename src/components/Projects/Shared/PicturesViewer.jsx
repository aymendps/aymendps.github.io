import { ArrowLeft, ArrowRight, OpenInNew } from "@mui/icons-material";
import { CircularProgress, IconButton, Typography } from "@mui/material";
import { useState, useRef } from "react";
import { preload } from "react-dom";

function PicturesViewer({ picturesURL = [] }) {
  const [currentPicture, setCurrentPicture] = useState(0);
  const startX = useRef(null);

  // Multiple calls is same as single call, so this is fine for preloading all images
  picturesURL.forEach((url) => {
    preload(url, { as: "image" });
  });

  const handleTouchStart = (e) => {
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    startX.current = x;
  };

  const handleTouchEnd = (e) => {
    if (startX.current === null) return;

    const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const deltaX = endX - startX.current;

    if (deltaX > 50 && currentPicture > 0) {
      // Swiped right
      setCurrentPicture((prev) => prev - 1);
    } else if (deltaX < -50 && currentPicture < picturesURL.length - 1) {
      // Swiped left
      setCurrentPicture((prev) => prev + 1);
    }

    startX.current = null;
  };

  return (
    <div
      className="w-full aspect-video bg-darkblue overflow-hidden border-2 rounded-xl border-darkblue relative flex justify-center items-center select-none"
      onMouseDown={handleTouchStart}
      onMouseUp={handleTouchEnd}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-1">
        <CircularProgress
          className="text-cyan-600 z-1"
          size={90}
          thickness={1}
        />
      </div>
      <img
        key={"image-" + picturesURL[currentPicture]}
        src={picturesURL[currentPicture]}
        alt=""
        className="z-5 w-full h-full object-contain select-none pointer-events-none"
      />
      {currentPicture < picturesURL.length - 1 && (
        <IconButton
          className="z-5 absolute right-4 top-[50%] translate-y-[-50%] text-white bg-black bg-opacity-50 hover:bg-opacity-100 p-0 focus:bg-opacity-50"
          onClick={() => {
            setCurrentPicture((prev) => prev + 1);
          }}
        >
          <ArrowRight fontSize="large" />
        </IconButton>
      )}
      {currentPicture > 0 && (
        <IconButton
          className="z-5 absolute left-4 top-[50%] translate-y-[-50%] text-white bg-black bg-opacity-50 hover:bg-opacity-100 p-0 focus:bg-opacity-50"
          onClick={() => {
            setCurrentPicture((prev) => prev - 1);
          }}
        >
          <ArrowLeft fontSize="large" />
        </IconButton>
      )}
      <div className="z-5 absolute bottom-4 left-[50%] translate-x-[-50%] flex flex-row items-center justify-center gap-2">
        <div className="z-5 bg-black bg-opacity-50 text-white px-2 py-1 rounded-xl">
          <Typography>
            {currentPicture + 1} / {picturesURL.length}
          </Typography>
        </div>
        <IconButton
          className="z-5 text-white bg-black bg-opacity-50 hover:bg-opacity-100 focus:bg-opacity-50"
          onClick={() => {
            window.open(picturesURL[currentPicture], "_blank");
          }}
        >
          <OpenInNew className="text-xl" />
        </IconButton>
      </div>
    </div>
  );
}

export default PicturesViewer;
