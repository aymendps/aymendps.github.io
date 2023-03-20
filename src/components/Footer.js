import { Typography } from "@mui/material";

function Footer() {
  return (
    <section className="bg-black w-full p-2">
      <Typography className="text-white text-center">
        Copyright © 2023 by Aymen Hammami -{" "}
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
