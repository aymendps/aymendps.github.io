import { Typography } from "@mui/material";

function Footer() {
  return (
    <section className="bg-black w-full p-2 screen-md:mb-[70px]">
      <Typography className="text-white text-center">
        Copyright 2022-2025 by Aymen HAMMAMI
        <br />
        Made with ❤️ using React
        <br />
        <a
          href="https://www.linkedin.com/in/aymendps/"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          Have feedback? Please let me know!
        </a>
      </Typography>
    </section>
  );
}

export default Footer;
