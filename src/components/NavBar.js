import { Button, Typography } from "@mui/material";
import React from "react";
import AboutIcon from "@mui/icons-material/Person4";
import PortfolioIcon from "@mui/icons-material/Star";
import ResumeIcon from "@mui/icons-material/AttachFile";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import GithubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function NavBar() {
  const navBarItems = [
    {
      name: "Home",
      link: "home",
      icon: (
        <HomeIcon
          fontSize="medium"
          className="text-white group-hover:text-cyan-400"
        />
      ),
    },
    {
      name: "Projects",
      link: "home#projects",
      icon: (
        <PortfolioIcon
          fontSize="medium"
          className="text-white group-hover:text-cyan-400"
        />
      ),
    },
    {
      name: "Resume",
      link: "resume",
      icon: (
        <ResumeIcon
          fontSize="medium"
          className="text-white group-hover:text-cyan-400"
        />
      ),
    },
    {
      name: "About Me",
      link: "about-me",
      icon: (
        <AboutIcon
          fontSize="medium"
          className="text-white group-hover:text-cyan-400"
        />
      ),
    },
  ];

  const navBarIcons = [
    {
      href: "https://www.linkedin.com/in/aymendps/",
      icon: (
        <LinkedInIcon
          fontSize="large"
          className="text-white hover:text-cyan-400"
        />
      ),
    },
    {
      href: "mailto:hammami.aym@outlook.com",
      icon: (
        <EmailIcon
          fontSize="large"
          className="text-white hover:text-cyan-400"
        />
      ),
    },
    {
      href: "https://github.com/aymendps",
      icon: (
        <GithubIcon
          fontSize="large"
          className="text-white hover:text-cyan-400"
        />
      ),
    },
  ];

  const generateNavBarItems = navBarItems.map((item) => {
    return item.link.includes("#") ? (
      <HashLink
        smooth
        key={item.name + item.link}
        to={item.link}
        className="w-1/5 h-full group"
      >
        <Button
          variant="text"
          className="w-full flex h-full justify-center items-center gap-2 normal-case"
        >
          {item.icon}
          <Typography className="text-center text-white group-hover:text-cyan-400">
            {item.name}
          </Typography>
        </Button>
      </HashLink>
    ) : (
      <Link
        key={item.name + item.link}
        to={item.link}
        className="w-1/5 h-full group"
      >
        <Button
          variant="text"
          className="w-full flex h-full justify-center items-center gap-2 normal-case"
        >
          {item.icon}
          <Typography className="text-center text-white group-hover:text-cyan-400">
            {item.name}
          </Typography>
        </Button>
      </Link>
    );
  });

  const generateNavBarIcons = navBarIcons.map((icon) => {
    return (
      <a key={icon.href} href={icon.href} target="_blank" rel="noreferrer">
        {icon.icon}
      </a>
    );
  });

  return (
    <div className="flex bg-black justify-around items-center  fixed top-0 left-0 w-full h-[70px] z-50">
      <div className="relative">
        <Typography
          variant="h4"
          className="text-black absolute text-transparent"
          style={{ WebkitTextStroke: "1px white" }}
        >
          Aymen Hammami
        </Typography>
        <Typography
          variant="h4"
          className="text-white"
          style={{
            animationName: "liquid",
            animationDuration: "3s",
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
          }}
        >
          Aymen Hammami
        </Typography>
      </div>
      <div className="w-1/2 flex h-full">
        {generateNavBarItems}

        <div className="w-1/5 flex h-full justify-center items-center gap-2">
          {generateNavBarIcons}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
