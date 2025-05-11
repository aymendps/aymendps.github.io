import React from "react";
import { STUDENT_SPECIALTY_ADVISOR } from "../ProjectList";
import ProjectIntroduction from "./Shared/ProjectIntroduction";
import Footer from "../Footer";
import ProjectContent from "./Shared/ProjectContent";

function StudentSpecialtyAdvisor() {
  const usefulLinks = [
    {
      title: "My Appearance on Express FM Radio to Talk About the Project",
      href: "https://www.linkedin.com/feed/update/urn:li:activity:6933406717351219200/",
    },
    {
      title: "Project's GitHub Repository",
      href: "https://github.com/aymendps/student-specialty-advisor",
    },
    {
      title: "Project's Presentation",
      href: "https://github.com/aymendps/student-specialty-advisor/blob/master/documentation/Student%20Specialty%20Advisor%20Presentation.pdf",
    },
    {
      title: "Project's Report",
      href: "https://github.com/aymendps/student-specialty-advisor/blob/master/documentation/Student%20Specialty%20Advisor%20Report.docx",
    },
    {
      title: "Project's Poster",
      href: "https://github.com/aymendps/student-specialty-advisor/blob/master/documentation/Student%20Specialty%20Advisor%20Poster.pdf",
    },
  ];

  const contentList = [];

  const workDone = STUDENT_SPECIALTY_ADVISOR.workDone.map((work, index) => {
    return {
      id: work.replace(/\s+/g, ""),
      title: work,
      content: contentList[index] || "More details will be added soon!",
    };
  });

  return (
    <>
      <ProjectIntroduction
        title={STUDENT_SPECIALTY_ADVISOR.title}
        youtubeURL={["https://www.youtube.com/embed/Svc3JQEW03E"]}
        tags={STUDENT_SPECIALTY_ADVISOR.tags}
        usefulLinks={usefulLinks}
        workDone={workDone}
        useLinksForWorkDone={false}
        outcomes={STUDENT_SPECIALTY_ADVISOR.outcomes}
        description={`Student Specialty Advisor is a free web application made for the South Mediterranean University (SMU). The goal was to help new students pick the right specialty that suits them best. The project ended up being chosen as the best junior software engineering project of the year.

            I contributed to the project as a full-stack developer. I worked on the front-end using React and the back-end using Express and MongoDB. I also was responsible for deploying the project on Heroku.

            Features of the project include a personality quiz, chatbot assistance, community forum where students can discuss their specialties, meeting scheduler with advisors, and more. The project also supports account creation, verification, and role-based access control. The admin has access to dashboard and statistics.

            The project's UI is responsive and works well on both desktop and mobile devices. 
`}
      />
      <ProjectContent // workDone={workDone} this makes it so nothing is rendered but we still benefit from the scrollIntoView effect
      />
      <Footer />
    </>
  );
}

export default StudentSpecialtyAdvisor;
