import {
  BottomNavigation,
  BottomNavigationAction,
  Button,
  Typography,
} from "@mui/material";
import PortfolioIcon from "@mui/icons-material/Star";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import GithubIcon from "@mui/icons-material/GitHub";
import AwardsIcon from "@mui/icons-material/EmojiEvents";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function NavBar() {
  const navBarItems = [
    {
      name: "Home",
      link: "home#t",
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
      name: "Awards",
      link: "home#awards",
      icon: (
        <AwardsIcon
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
      href: "https://github.com/aymendps",
      icon: <GithubIcon className="text-white hover:text-cyan-400 text-3xl" />,
    },
    {
      href: "https://stackoverflow.com/users/18047369/aymendps",
      icon: (
        <div className="group">
          <img
            src="/stackoverflow-white.png"
            alt=""
            className="w-6 group-hover:hidden"
          ></img>
          <img
            src="/stackoverflow-lighterblue.png"
            alt=""
            className="w-6 hidden group-hover:block"
          ></img>
        </div>
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
  ];

  const generateNavBarItems = navBarItems.map((item) => {
    return item.link.includes("#") ? (
      <HashLink
        smooth
        key={item.name + item.link}
        to={item.link}
        className="h-full group"
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

  const generateBottomNavigationItems = navBarItems.map((item) => {
    return (
      <BottomNavigationAction
        className="text-white"
        LinkComponent={item.link.includes("#") ? HashLink : Link}
        smooth="true"
        to={item.link}
        key={"bottom " + item.name + item.link}
        label={item.name}
        icon={item.icon}
      />
    );
  });

  return (
    <>
      {/* Navbar */}
      <div className="flex bg-black justify-around items-center fixed top-0 left-0 w-full h-[70px] z-50 screen-md:hidden">
        <HashLink to={"home#t"}>
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
        </HashLink>
        <div className="w-1/2 flex h-full justify-between">
          {generateNavBarItems}
          <div className="w-1/4 flex h-full justify-center items-center gap-2">
            {generateNavBarIcons}
          </div>
        </div>
      </div>
      {/* Bottom Navigation */}
      <div className="hidden fixed bottom-0 left-0 right-0 z-50 screen-md:block">
        <BottomNavigation showLabels className="bg-black h-[70px]">
          {generateBottomNavigationItems}
        </BottomNavigation>
      </div>
    </>
  );
}

export default NavBar;
