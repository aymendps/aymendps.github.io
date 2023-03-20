import { Download } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import Footer from "./Footer";

function Resume() {
  const RESUME_LINK = "/thumbnails/cat.png";

  return (
    <div className="fixed top-[70px] bottom-[70px] left-0 right-0 flex justify-center items-center">
      <div className="w-full">
        <div className="py-12">
          <Typography variant="h2" className="text-white text-center">
            Check out my resume!
          </Typography>
          <Typography
            variant="subtitle1"
            className="text-cyan-400 text-center pb-2"
          >
            Last Update: Month 2023
          </Typography>
        </div>
        <div className="w-full flex justify-center m-auto gap-[5%] pb-12">
          <div className="basis-[20%]">
            <a href={RESUME_LINK} download={true}>
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
          <div className="basis-[20%]">
            <a href={RESUME_LINK} download={true}>
              <Button
                fullWidth
                size="large"
                variant="outlined"
                startIcon={<Download />}
                className="text-cyan-400 border-cyan-400 hover:border-cyan-300 hover:text-cyan-300"
              >
                PNG FILE
              </Button>
            </a>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 w-full">
        <Footer />
      </div>
    </div>
  );
}

export default Resume;
