import {
  BottomNavigation,
  BottomNavigationAction,
  Button,
  Typography,
  useMediaQuery,
} from "@mui/material";
import PortfolioIcon from "@mui/icons-material/Star";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import GithubIcon from "@mui/icons-material/GitHub";
import AwardsIcon from "@mui/icons-material/EmojiEvents";
import ReferralsIcon from "@mui/icons-material/Reviews";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();
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
    {
      name: "Referrals",
      link: "home#referrals",
      icon: (
        <ReferralsIcon
          fontSize="medium"
          className="text-white group-hover:text-cyan-400"
        />
      ),
    },
  ];

  const isMobile = useMediaQuery("(max-width:768px)");

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
          <Typography className="text-center text-white group-hover:text-cyan-400 normal-case">
            {item.name}
          </Typography>
        </Button>
      </HashLink>
    ) : (
      <Link key={item.name + item.link} to={item.link} className="h-full group">
        <Button
          variant="text"
          className="w-full flex h-full justify-center items-center gap-2 normal-case"
        >
          {item.icon}
          <Typography className="text-center text-white group-hover:text-cyan-400 normal-case">
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
      {!isMobile ? (
        <div className="fixed top-4 left-1/2 z-50 flex h-17.5 w-[min(1200px,calc(100%-2rem))] -translate-x-1/2 items-center justify-around rounded-full border border-white/10 bg-slate-950/70 px-4 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl screen-lg:hidden">
          <div className="w-[29%] flex justify-center items-center">
            <HashLink to={"home#t"}>
              <div className="relative">
                <Typography
                  variant="h4"
                  className="absolute text-transparent"
                  style={{ WebkitTextStroke: "1px white" }}
                >
                  Aymen Hammami
                </Typography>
                <Typography
                  variant="h4"
                  className="gradient-text"
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
          </div>
          <div className="flex h-full grow justify-between">
            <div className="flex h-full w-3/4 items-center justify-center gap-4">
              {generateNavBarItems}
            </div>
            <div className="flex h-full w-1/4 items-center justify-center gap-2">
              {generateNavBarIcons}
            </div>
          </div>
        </div>
      ) : (
        <div className="hidden fixed bottom-4 left-1/2 z-50 w-[min(760px,calc(100%-1rem))] -translate-x-1/2 screen-lg:block">
          <BottomNavigation
            showLabels
            className="glass-panel h-17.5 rounded-full overflow-hidden border border-white/10 bg-slate-950/75"
          >
            {generateBottomNavigationItems}
          </BottomNavigation>
        </div>
      )}
    </>
  );
}

export default NavBar;
