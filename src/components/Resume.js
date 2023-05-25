import { Download } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";

function Resume() {
  return (
    <>
      <div className="m-auto mt-[70px] flex flex-col justify-center items-center w-[90%] pt-12 pb-6 screen-md:mt-0">
        <Typography
          variant="h2"
          className="text-white text-center screen-sm:text-4xl screen-md:font-bold screen-md:text-5xl mb-2"
        >
          Check out my resume!
        </Typography>
        <img alt="" src="/resume-icon.png" className="h-[42.5vh]" />
        <Typography
          variant="subtitle1"
          className="text-cyan-400 text-center pb-2"
        >
          Last Update: May 2023
        </Typography>
      </div>
      <div className="w-[90%] flex justify-center m-auto gap-[5%] pb-12 screen-md:flex-col">
        <div className="basis-[20%] screen-md:mb-4">
          {/* <a href={""} download={true}> */}
          <Button
            fullWidth
            size="large"
            variant="outlined"
            startIcon={<Download />}
            className="text-cyan-400 border-cyan-400 hover:border-cyan-300 hover:text-cyan-300"
          >
            PDF FILE
          </Button>
          {/* </a> */}
        </div>
        <div className="basis-[20%]">
          {/* <a href={""} download={true}> */}
          <Button
            fullWidth
            size="large"
            variant="outlined"
            startIcon={<Download />}
            className="text-cyan-400 border-cyan-400 hover:border-cyan-300 hover:text-cyan-300"
          >
            PNG FILE
          </Button>
          {/* </a> */}
        </div>
      </div>
    </>
  );
}

export default Resume;
