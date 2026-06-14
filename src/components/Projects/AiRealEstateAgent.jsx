import { AI_REAL_ESTATE_AGENT } from "../ProjectList";
import ProjectIntroduction from "./Shared/ProjectIntroduction";
import Footer from "../Footer";
import ProjectContent from "./Shared/ProjectContent";

function AiRealEstateAgent() {
  const usefulLinks = [];

  const contentList = [];

  const workDone = AI_REAL_ESTATE_AGENT.workDone.map((work, index) => {
    return {
      id: work.replace(/\s+/g, ""),
      title: work,
      content: contentList[index] || "More details will be added soon!",
    };
  });

  return (
    <>
      <ProjectIntroduction
        title={AI_REAL_ESTATE_AGENT.title}
        youtubeURL={["https://www.youtube.com/embed/bpqh79CaRNo"]}
        tags={AI_REAL_ESTATE_AGENT.tags}
        usefulLinks={usefulLinks}
        workDone={workDone}
        useLinksForWorkDone={false}
        outcomes={AI_REAL_ESTATE_AGENT.outcomes}
        description={`One of the projects I led while working at Lanterns Studios is an immersive AI-powered real estate experience in AR and VR for the Meta Quest. It features a lifelike Metahuman & AI agent that guides users through an overview of Dubai in AR, and then takes them on a tour of a luxurious penthouse in VR.
          
          The agent engages in real-time conversations with users, listening, interpreting, responding, and even asking questions to enhance the user experience. It's also capable of executing tools such as changing the time of day, adjusting the lighting mood, swapping kitchen/bedroom themes, and teleporting between rooms on demand. 
          
          I have programmed the logic for all these functionalities.

          To enable communication between the AI and the application, I developed a custom Unreal Engine plugin in C++ that uses WebSockets to stream audio, handle connection state, and send/receive commands.

          The Metahuman agent also features realistic lip-syncing, which I implemented using Nvidia ACE in C++. It also plays dynamic hand gestures based on speech flow, and can express emotions through facial animation. To achieve this, I worked closely with skeletal meshes, custom state machines, and programmed logic that controls when and how gestures and expressions are triggered.`}
      />
      <ProjectContent /*workDone={workDone}*/ />
      <Footer />
    </>
  );
}

export default AiRealEstateAgent;
