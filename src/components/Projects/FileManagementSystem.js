import React from "react";
import { FILE_MANAGER } from "../ProjectList";
import ProjectIntroduction from "./Shared/ProjectIntroduction";
import Footer from "../Footer";
import ProjectContent from "./Shared/ProjectContent";

function FileManagementSystem() {
  const usefulLinks = [
    {
      title:
        "Website of Cynoia: The company I worked for as a full-stack developer",
      href: "https://cynoia.com/",
    },
  ];

  const contentList = [];

  const workDone = FILE_MANAGER.workDone.map((work, index) => {
    return {
      id: work.replace(/\s+/g, ""),
      title: work,
      content: contentList[index] || "More details will be added soon!",
    };
  });

  return (
    <>
      <ProjectIntroduction
        title={FILE_MANAGER.title}
        picturesURL={FILE_MANAGER.picturesURL}
        projectType="Professional"
        role="Full-Stack Developer"
        solo={FILE_MANAGER.solo}
        platform="Web Application"
        softwareUsed="JS | TS | AWS S3 | React | Express | NestJS | MySQL"
        usefulLinks={usefulLinks}
        workDone={workDone}
        useLinksForWorkDone={false}
        outcomes={FILE_MANAGER.outcomes}
        description={`After a successful summer internship, I got to keep working at Cynoia as a part-time full stack developer.

I contributed to the development of the file management system. I worked on both front-end and back-end tasks, creating new features and improving the existing ones. I was also responsible for the database's design, as well as the system's performance and optimization.

This task challenged my engineering skills and forced me to think outside the box multiple times to implement a code that is optimized and cost-effective, while also taking into consideration the user experience.

I started working on migrating the back-end of the system from Express and JavaScript to NestJS and TypeScript, since this new stack is more robust, less error-prone, and relies on object oriented principles. It also has built-in features for working with micro-services.

Then I moved on to expanding the file manager's system with these features: uploading single or multiple files, previewing elements, downloading, renaming, deleting, moving, adding to favorites, sharing options, managing access, sending system emails, user activity log and action history.`}
      />
      <ProjectContent /*workDone={workDone}*/ />
      <Footer />
    </>
  );
}

export default FileManagementSystem;
