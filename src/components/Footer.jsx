import { Typography } from "@mui/material";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <section className="relative w-full overflow-hidden bg-[linear-gradient(180deg,rgba(2,6,23,0.98),rgba(2,6,23,1))] px-4 py-6 screen-md:mb-25">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/65 to-transparent"></div>
      <div className="mx-auto flex w-[min(1200px,100%)] items-center justify-between gap-6 screen-md:flex-col screen-md:text-center">
        <div>
          <Typography className="text-slate-100 font-semibold tracking-wide">
            Aymen Hammami
          </Typography>
          <Typography className="text-slate-400 text-sm">
            Copyright 2022-{year}
          </Typography>
        </div>

        <div className="flex items-center gap-6 screen-sm:flex-col screen-sm:gap-3">
          <a
            href="https://www.linkedin.com/in/aymendps/"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-300 text-sm font-medium hover:text-cyan-200 transition-colors"
          >
            Have some feedback?
          </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
