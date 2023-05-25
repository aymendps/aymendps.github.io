import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import { Button, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";

function DesktopVersion() {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const generatedWorkSection = document.getElementById("generated-work");

    function checkVisible(element) {
      var rect = element.getBoundingClientRect();
      var viewHeight = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight
      );
      return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
    }

    const handleButtonVisibility = () => {
      if (checkVisible(generatedWorkSection)) {
        setHidden(true);
      } else {
        setHidden(
          generatedWorkSection.getBoundingClientRect().bottom >
            window.innerHeight
        );
      }
    };

    window.addEventListener("scroll", handleButtonVisibility);

    return () => {
      window.removeEventListener("scroll", handleButtonVisibility);
    };
  }, []);

  return (
    <div
      style={{ scale: hidden ? "0" : "1" }}
      className="fixed bottom-2 right-2 p-1 rounded-[50%] bg-cyan-400 hover:scale-105 duration-200 cursor-pointer overflow-hidden"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <ArrowCircleUpIcon fontSize="large" />
    </div>
  );
}

function MobileVersion() {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const generatedWorkSection = document.getElementById("generated-work");

    function checkVisible(element) {
      var rect = element.getBoundingClientRect();
      var viewHeight = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight
      );
      return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
    }

    var lastScrollTop = window.scrollY || document.documentElement.scrollTop;

    const handleButtonVisibility = function () {
      var st = window.scrollY || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        setHidden(true);
      } else if (st < lastScrollTop) {
        if (checkVisible(generatedWorkSection)) {
          setHidden(true);
        } else {
          setHidden(
            generatedWorkSection.getBoundingClientRect().bottom >
              window.innerHeight
          );
        }
      }
      lastScrollTop = st <= 0 ? 0 : st;
    };

    window.addEventListener("scroll", handleButtonVisibility, false);

    return () => {
      window.removeEventListener("scroll", handleButtonVisibility, false);
    };
  }, []);

  return (
    <div
      style={{ scale: hidden ? "0" : "1" }}
      className="fixed duration-200 overflow-hidden w-full top-4 z-50"
    >
      <div className="w-fit m-auto">
        <Button
          variant="contained"
          className="bg-cyan-400 text-black rounded-full"
          startIcon={<ArrowCircleUpIcon />}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Back to top
        </Button>
      </div>
    </div>
  );
}

function ProjectBackToTopButton() {
  const isMobile = useMediaQuery("(max-width:768px)");

  return isMobile ? <MobileVersion /> : <DesktopVersion />;
}

export default ProjectBackToTopButton;
