import { ArrowLeft, ArrowRight, OpenInNew } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import { useState, useRef } from "react";

function PicturesViewer({ picturesURL = [] }) {
  const [currentPicture, setCurrentPicture] = useState(0);
  const startX = useRef(null);

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
      className="w-full aspect-video bg-darkblue border-2 border-darkblue relative flex justify-center items-center select-none"
      onMouseDown={handleTouchStart}
      onMouseUp={handleTouchEnd}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <img
        key={"image-" + picturesURL[currentPicture]}
        src={picturesURL[currentPicture]}
        alt=""
        className="w-full h-full object-contain select-none pointer-events-none"
      />
      {currentPicture < picturesURL.length - 1 && (
        <IconButton
          className="absolute right-4 top-[50%] translate-y-[-50%] text-white bg-black bg-opacity-50 hover:bg-opacity-100 p-0 focus:bg-opacity-50"
          onClick={() => {
            setCurrentPicture((prev) => prev + 1);
          }}
        >
          <ArrowRight fontSize="large" />
        </IconButton>
      )}
      {currentPicture > 0 && (
        <IconButton
          className="absolute left-4 top-[50%] translate-y-[-50%] text-white bg-black bg-opacity-50 hover:bg-opacity-100 p-0 focus:bg-opacity-50"
          onClick={() => {
            setCurrentPicture((prev) => prev - 1);
          }}
        >
          <ArrowLeft fontSize="large" />
        </IconButton>
      )}
      <div className="absolute bottom-4 left-[50%] translate-x-[-50%] flex flex-row items-center justify-center gap-2">
        <div className="bg-black bg-opacity-50 text-white px-2 py-1 rounded-xl">
          <Typography>
            {currentPicture + 1} / {picturesURL.length}
          </Typography>
        </div>
        <IconButton
          className="text-white bg-black bg-opacity-50 hover:bg-opacity-100 focus:bg-opacity-50"
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
