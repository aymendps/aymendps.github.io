import { Button, CircularProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ResumeIcon from "@mui/icons-material/AttachFile";
import AboutIcon from "@mui/icons-material/Person4";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import ProjectList from "./ProjectList";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import Footer from "./Footer";

function Home() {
  const [isLoadingVideo, setIsLoadingVideo] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.href.includes("#projects")) {
      document.getElementById("projects").scrollIntoView({ block: "start" });
    } else if (window.location.href.includes("#awards")) {
      document.getElementById("awards").scrollIntoView({ block: "start" });
    }
  }, []);

  const VIDEO_SRC = "/MainVideo.mp4";

  const CONTACT_ICONS = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/aymendps/",
      icon: (
        <LinkedInIcon className="text-darkblue text-7xl group-hover:text-cyan-600" />
      ),
    },
    {
      name: "Email",
      href: "mailto:hammami.aym@outlook.com",
      icon: (
        <EmailIcon className="text-darkblue text-7xl group-hover:text-cyan-600" />
      ),
    },
    {
      name: "GitHub",
      href: "https://github.com/aymendps",
      icon: (
        <GithubIcon className="text-darkblue text-7xl group-hover:text-cyan-600" />
      ),
    },
    {
      name: "StackOverflow",
      href: "https://stackoverflow.com/users/18047369/aymendps",
      icon: (
        <div className="pb-2">
          <img
            src="/stackoverflow-darkblue.png"
            alt=""
            className="w-16 group-hover:hidden"
          ></img>
          <img
            src="/stackoverflow-lightblue.png"
            alt=""
            className="w-16 hidden group-hover:block"
          ></img>
        </div>
      ),
    },
  ];

  const LINKEDIN_POSTS = [
    {
      title: "Second Prize at 24H Game Development Hackathon",
      image:
        "https://media.licdn.com/dms/image/D4D22AQH3Sj3vSU1aag/feedshare-shrink_1280/0/1681661480395?e=1686787200&v=beta&t=fVVkePIrAmUxddIQGUJrtGVkrjiTCXA1TtKrW8a6-JQ",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7053399477331591168/",
      origin: "object-center",
    },
    {
      title: "Best Senior Software Engineering Project, SMU - MedTech",
      image:
        "https://media.licdn.com/dms/image/D5622AQH_isjRRfH4Iw/feedshare-shrink_2048_1536/0/1683904542567?e=1686787200&v=beta&t=SPdNJC383ieUy5pHS-9MO_9exD_1GkPjq6Fqojd3NLw",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7062807576207360000/",
      origin: "object-right",
    },
    {
      title: "Best Junior Software Engineering Project, SMU - MedTech",
      image:
        "https://media.licdn.com/dms/image/C4E22AQF5hcII6r6VYg/feedshare-shrink_2048_1536/0/1652897730602?e=1686787200&v=beta&t=YIeRyWYdrSzuEWtuiXLSDmKlEleRzjXeMAj5iZkFw98",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:6932755568562462721/",
      origin: "object-center",
    },
  ];

  const videoSection = (
    <section className="relative h-[90vh] w-full mt-[70px] bg-gray-900 flex justify-center items-center screen-md:mt-0 screen-md:h-[50vh]">
      <div className="absolute w-full top-[-70px] left-0" id="t"></div>
      <div className="h-[90%] aspect-video z-10 bg-[rgb(0,20,40)] border-2 border-gray-500 screen-md:w-full screen-md:h-auto">
        <video
          key="small-video"
          loop
          muted
          autoPlay
          preload="none"
          poster="/MainVideoPoster.jpg"
          className="w-full h-full object-contain object-center screen-md:object-contain"
          onPlay={() => {
            setIsLoadingVideo(false);
          }}
        >
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>
      </div>
      <div className="absolute z-0 w-full h-[90%] top-0 left-0 screen-md:h-full">
        <video
          key="big-video"
          loop
          muted
          autoPlay
          preload="none"
          className="w-full h-full object-cover object-center blur-sm"
        >
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>
      </div>
      {isLoadingVideo ? (
        <div className="absolute z-20 w-full h-full top-0 left-0 flex justify-center items-center">
          <CircularProgress size={80} className="text-white" />
        </div>
      ) : null}
    </section>
  );

  const aboutSection = (
    <section className="w-full bg-darkblue z-10 translate-y-[-70px] pb-0 pt-[70px] screen-md:translate-y-0 screen-md:pt-4">
      <div className="m-auto w-[80%] pt-4 screen-md:w-[90%]">
        <Typography
          variant="h2"
          className="text-center text-white pb-4 screen-sm:text-4xl screen-md:font-bold screen-md:text-5xl"
        >
          Welcome to my portfolio!
        </Typography>
        <br />
        <Typography className="text-white text-center screen-md:text-justify">
          <HashLink
            smooth
            to="/home#projects"
            className="text-cyan-400 hover:underline"
          >
            <b>Below</b>
          </HashLink>{" "}
          you will find <b>some</b> of the projects that I've had the
          opportunity of contributing to, and also some of my personal projects
          that I worked on.
        </Typography>
        <br />
        <Typography className="text-white text-center screen-md:text-justify">
          Hi there! I'm <b>Aymen</b>, a final year Software Engineering student
          at{" "}
          <a
            href="https://www.smu.tn/medtech"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-400 hover:underline"
          >
            <b>South Mediterranean University, MedTech</b>
          </a>
          , set to graduate in <b>Summer/Fall 2024.</b>
        </Typography>
        <br className="hidden screen-md:block" />
        <Typography className="text-white text-center screen-md:text-justify">
          I've always had a passion for games and programming. I've been playing
          them since I was a kid, and I started making my own games and web apps
          in high school.
        </Typography>
        <br />
        <Typography className="text-white text-center screen-md:text-justify">
          Throughout my academic journey, I've been fortunate enough to work on
          some amazing projects both on my own and as part of a team.
          <br />
          These experiences have given me valuable insights into the software
          development lifecycle and helped me hone my technical and soft skills.
          <br />
          <br />
          As a good team player, I understand the significance of teamwork and
          its vital role in achieving success.
          <br />I have a proven track record of collaborating effectively with
          others, as demonstrated by{" "}
          <HashLink
            smooth
            to="/home#awards"
            className="text-cyan-400 hover:underline"
          >
            <b>multiple awards</b>
          </HashLink>{" "}
          I have received for my group projects.
        </Typography>
        <br />
        <Typography className="text-white text-center screen-md:text-justify">
          If you're looking for a resourceful software engineer who's constantly
          eager to learn something new every day and is passionate about making
          games and software projects, then I'd love to connect!{" "}
          <a
            href="https://www.linkedin.com/in/aymendps/"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-400 hover:underline"
          >
            <b>Let's get in touch!</b>
          </a>
        </Typography>
      </div>
    </section>
  );

  const projectsSection = (
    <section className="w-full bg-white pb-12 relative">
      <div
        className="absolute top-[-70px] left-0 screen-md:top-0"
        id="projects"
      ></div>
      <div className="w-[90%] m-auto">
        <Typography
          variant="h2"
          className="text-darkblue text-center pt-12 screen-sm:text-4xl screen-md:font-bold screen-md:text-5xl"
        >
          Pinned Projects
        </Typography>
        <Typography
          variant="subtitle1"
          className="text-center pb-12 text-cyan-600"
        >
          <b>Click</b> on a project to view it with more details
        </Typography>
      </div>
      <ProjectList />
      <div className="w-[90%] m-auto">
        <Typography variant="subtitle1" className="text-center text-darkblue">
          Other projects may be found on my{" "}
          <a
            href="https://github.com/aymendps"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-600 hover:underline"
          >
            GitHub
          </a>{" "}
          or{" "}
          <a
            href="https://www.youtube.com/@aymendps"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-600 hover:underline"
          >
            Youtube
          </a>{" "}
        </Typography>
      </div>
    </section>
  );

  const findMoreSection = (
    <section className="w-full bg-darkblue py-12">
      <div className="relative">
        <Typography
          variant="h2"
          className="text-center text-white pb-12 screen-sm:text-4xl screen-md:font-bold screen-md:text-5xl"
        >
          Project Awards
        </Typography>
        <div
          className="absolute top-[-118px] left-0 screen-md:top-0"
          id="awards"
        ></div>
      </div>
      <div className="w-full flex justify-evenly flex-wrap">
        {LINKEDIN_POSTS.map((post) => {
          return (
            <a
              key={post.url}
              href={post.url}
              className="block w-1/4 screen-md:w-[90%] mb-12"
              target="_blank"
              rel="noreferrer"
            >
              <div className="w-full overflow-hidden border-2 rounded-xl border-cyan-400 relative group">
                <img
                  alt=""
                  src={post.image}
                  className={
                    "w-full object-cover aspect-square group-hover:scale-110 duration-200 " +
                    post.origin
                  }
                />
                <div className="absolute w-full h-[22%] bg-black opacity-90 bottom-0 left-0 px-2 py-1">
                  <Typography
                    variant="h6"
                    className="text-cyan-300 underline-offset-4 text-center group-hover:underline font-normal"
                  >
                    {post.title + " ↗"}
                  </Typography>
                </div>
              </div>
            </a>
          );
        })}
      </div>

      <div className="w-[90%] m-auto">
        <Typography
          variant="h2"
          className="text-center text-white pb-12 screen-sm:text-4xl screen-md:font-bold screen-md:text-5xl"
        >
          Find more about me
        </Typography>
      </div>
      <div className="w-[80%] flex screen-md:flex-wrap justify-evenly m-auto screen-md:w-full">
        <div className="basis-[35%] screen-md:basis-[90%] screen-md:mb-6">
          <Button
            fullWidth
            size="large"
            variant="outlined"
            className="text-cyan-400 border-cyan-400 hover:border-cyan-300 hover:text-cyan-300"
            startIcon={<ResumeIcon />}
            onClick={() => {
              navigate("/resume");
            }}
          >
            Resume Section
          </Button>
          <Typography
            variant="caption"
            className="text-cyan-200 text-center block pt-2 screen-md:hidden"
          >
            My skills, projects, education & experience in PDF format
          </Typography>
        </div>
        <div className="basis-[35%] screen-md:basis-[90%]">
          <Button
            fullWidth
            size="large"
            variant="outlined"
            className="text-cyan-400 border-cyan-400 hover:border-cyan-300 hover:text-cyan-300"
            startIcon={<AboutIcon />}
            onClick={() => {
              navigate("/about-me");
            }}
          >
            About me Section
          </Button>
          <Typography
            variant="caption"
            className="text-cyan-200 text-center block pt-2 screen-md:hidden"
          >
            More about who I am, what I enjoy, what I do in my free time
          </Typography>
        </div>
      </div>
    </section>
  );

  const contactSection = (
    <section className="w-full bg-white py-12">
      <div className="w-[90%] m-auto">
        <Typography
          variant="h2"
          className="text-center screen-sm:text-4xl screen-md:font-bold screen-md:text-5xl"
        >
          Reach out to me
        </Typography>
        <Typography
          variant="subtitle1"
          className="text-cyan-600 text-center pb-12"
        >
          Let's talk! Feel free to send me a message through:
        </Typography>
      </div>
      <div className="w-full flex-wrap flex justify-center items-center gap-[5%] screen-md:gap-0">
        {CONTACT_ICONS.map((icon) => {
          return (
            <div
              key={"contactSection" + icon.href}
              className="flex flex-col items-center justify-center group screen-md:basis-[40%] screen-md:mb-6"
            >
              <a
                href={icon.href}
                target="_blank"
                rel="noreferrer"
                className="pb-2"
              >
                {icon.icon}
              </a>
              <Typography
                variant="caption"
                className="group-hover:text-cyan-600"
              >
                {icon.name}
              </Typography>
            </div>
          );
        })}
      </div>
    </section>
  );

  return (
    <>
      {videoSection}
      {aboutSection}
      {projectsSection}
      {findMoreSection}
      {contactSection}
      {<Footer />}
    </>
  );
}

export default Home;
