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
          Last Update: September 2023
        </Typography>
      </div>
      <div className="m-auto w-1/2 screen-md:w-3/4">
        <a href={"/resume/Aymen_Hammami_CV.pdf"} download={true}>
          <Button
            fullWidth
            size="large"
            variant="outlined"
            startIcon={<Download />}
            className="text-cyan-400 border-cyan-400 hover:border-cyan-300 hover:text-cyan-300"
          >
            PDF FILE
          </Button>
        </a>
      </div>
    </>
  );
}

export default Resume;
