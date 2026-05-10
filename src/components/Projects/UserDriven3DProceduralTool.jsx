import React from "react";
import { USER_DRIVEN_3D_PROCEDURAL_TOOL } from "../ProjectList";
import ProjectIntroduction from "./Shared/ProjectIntroduction";
import Footer from "../Footer";
import ProjectContent from "./Shared/ProjectContent";
import { Typography } from "@mui/material";

function UserDriven3DProceduralTool() {
  const usefulLinks = [
    {
      title:
        "Successfully defended this capstone project and received highest grade of 'Outstanding'",
      href: "https://www.linkedin.com/feed/update/urn:li:activity:7212445756081799168/",
    },
    {
      title: "Capstone Project's Final Report",
      href: "https://github.com/aymendps/User-Driven-Procedural-Generation-Of-3D-Environments/blob/main/Aymen%20HAMMAMI%20_%20Capstone%20Project%20Report.pdf",
    },
    {
      title: "Capstone Project's Final Presentation",
      href: "https://github.com/aymendps/User-Driven-Procedural-Generation-Of-3D-Environments/blob/main/Aymen%20HAMMAMI%20-%20Capstone%20Project%20Presentation.pptx",
    },
  ];

  const coreFeatures = (
    <>
      <Typography variant="h6" className="text-justify text-green-600">
        Using Prompts & Feedback
      </Typography>
      <Typography className="leading-5 text-justify">
        To create their environments, users would mainly write{" "}
        <b>a sequence of prompts</b>, such as “make me a forest”, “reduce the
        number of trees”, and “add a river on the right”, which the tool would{" "}
        <b>interpret using AI</b>, and then <b>generate using PCG</b>. This
        iterative feedback loop encourages creativity and makes adjusting the
        environments super easy.
      </Typography>
      <div className="w-1/2 m-auto mt-4 screen-lg:w-full">
        <video controls className="w-full">
          <source src="/pcg/20 Seconds Demo.mp4" type="video/mp4" />
        </video>
      </div>
      <Typography variant="caption" className="text-center block mt-2">
        Example of the tool in action using prompts
      </Typography>
      <br />
      <Typography variant="h6" className="text-justify text-green-600">
        Reverting Unwanted Changes
      </Typography>
      <Typography className="leading-5 text-justify">
        Mistakes happen. Whether it's AI deciding that "a river on the right"
        really means "flood the entire forest" or realizing that your brilliant
        idea of tree-sized flowers was, well, not so brilliant, sometimes you
        just need an undo. The tool <b>supports reverting the last change</b>{" "}
        through a simple <b>click of a button</b>.
      </Typography>
      <div className="w-1/2 m-auto mt-4 screen-lg:w-full">
        <video controls className="w-full">
          <source src="/pcg/Gif-2.mp4" type="video/mp4" />
        </video>
      </div>
      <Typography variant="caption" className="text-center block mt-2">
        Example of reverting the last change
      </Typography>
      <br />
      <Typography variant="h6" className="text-justify text-green-600">
        Supporting Multiple Themes
      </Typography>
      <Typography className="leading-5 text-justify">
        Users can choose from a <b>variety of themes</b> to personalize their
        environments, and can easily <b>swap between them</b> through simple
        prompts. <b>Adding custom themes is also possible</b> and very
        straightforward: just add a few settings in the tool’s{" "}
        <b>data asset file</b>, and boom! You can pick which models to use, and
        which parameters to randomize, like sizes and rotations.
      </Typography>
      <div className="w-1/2 m-auto mt-4 screen-lg:w-full">
        <video controls className="w-full">
          <source src="/pcg/Gif-3.mp4" type="video/mp4" />
        </video>
      </div>
      <Typography variant="caption" className="text-center block mt-2">
        Example of swapping between multiple themes
      </Typography>
      <br />
      <Typography variant="h6" className="text-justify text-green-600">
        Generating Foliage
      </Typography>
      <Typography className="leading-5 text-justify">
        When it comes to foliage, the AI figures out{" "}
        <b>the types and density of foliage</b> to generate based on{" "}
        <b>the prompt</b>, whether it’s grass, flowers, trees, or boulders. For
        instance, the prompt “Make me a desert” will result in sparse plants and
        dry terrain, while “Create a rainy forest” will fill the area with lush
        greenery. The tool also{" "}
        <b>groups trees and flowers in natural clusters</b> for added realism.
        However, it’s still possible for the users to{" "}
        <b>tweak the generated foliage</b> by using specific prompts like “Make
        the boulders bigger” to get exactly what they need. Yes, that includes
        making absurdly large rocks, if that’s your thing.
      </Typography>
      <div className="w-1/2 m-auto mt-4 screen-lg:w-full">
        <video controls className="w-full">
          <source src="/pcg/Gif-4.mp4" type="video/mp4" />
        </video>
      </div>
      <Typography variant="caption" className="text-center block mt-2">
        Example of generating and adjusting foliage
      </Typography>
      <br />
      <Typography variant="h6" className="text-justify text-green-600">
        Generating Rivers
      </Typography>
      <Typography className="leading-5 text-justify">
        The tool allows <b>creating rivers</b> that seamlessly{" "}
        <b>blend into their environments</b>. Using prompts like “Add a river on
        the left” or “Make the river wider”, users can pick the{" "}
        <b>river's location and dimensions</b>. I've also implemented{" "}
        <b>
          an algorithm to calculate a spline that mimics the shape of real-life
          rivers
        </b>
        , which is then used to generate the meshes. It’s also possible to{" "}
        <b>spawn foliage alongside the riverbanks</b> to make the environment
        more visually appealing.
      </Typography>
      <div className="w-1/2 m-auto mt-4 screen-lg:w-full">
        <video controls className="w-full">
          <source src="/pcg/Gif-5.mp4" type="video/mp4" />
        </video>
      </div>
      <Typography variant="caption" className="text-center block mt-2">
        Example of generating and adjusting rivers
      </Typography>
      <br />
      <Typography variant="h6" className="text-justify text-green-600">
        Generating Buildings
      </Typography>
      <Typography className="leading-5 text-justify">
        Similarly, users can <b>populate their environments with buildings</b>{" "}
        through prompts. The tool automatically picks <b>logical spots</b> for
        the buildings, avoiding placements that would create weird rotations or
        cause heavy overlap with rivers or foliage. Users can easily adjust the{" "}
        <b>density and size of the buildings</b>, as well as{" "}
        <b>draw roads or paths from one to another</b>, making it seem like the
        structures naturally belong together, forming <b>towns or villages</b>.
      </Typography>
      <div className="w-1/2 m-auto mt-4 screen-lg:w-full">
        <video controls className="w-full">
          <source src="/pcg/Gif-6.mp4" type="video/mp4" />
        </video>
      </div>
      <Typography variant="caption" className="text-center block mt-2">
        Example of generating and adjusting buildings
      </Typography>
      <br />
      <Typography variant="h6" className="text-justify text-green-600">
        Generating Many Variations
      </Typography>
      <Typography className="leading-5 text-justify">
        <b>Creativity thrives on options</b>, and this tool delivers many cool
        ones. Thanks to the power of the <b>procedural generation</b>, users can
        create <b>multiple variations</b> of their environments based on the{" "}
        <b>same prompts and parameters</b> by simply clicking a button. This can
        be very helpful for game designers who want to experiment with{" "}
        <b>different layouts</b> to find the right fit for their levels. Why
        settle for one forest when you can have five slightly different, equally
        awesome ones?
      </Typography>
      <div className="w-1/2 m-auto mt-4 screen-lg:w-full">
        <video controls className="w-full">
          <source src="/pcg/Gif-7.mp4" type="video/mp4" />
        </video>
      </div>
      <Typography variant="caption" className="text-center block mt-2">
        Example of generating multiple variations of the same params
      </Typography>
      <br />
      <Typography variant="h6" className="text-justify text-green-600">
        Saving Generations/Environments
      </Typography>
      <Typography className="leading-5 text-justify">
        Once users are satisfied with their generated environments, they can{" "}
        <b>
          easily save them as reusable blueprint files, which can be accessed
          later or shared with others
        </b>
        . This allows placing the created environments in your levels{" "}
        <b>without having to generate them during runtime!</b> That’s a win for
        both productivity and performance.
      </Typography>
      <div className="w-1/2 m-auto mt-4 screen-lg:w-full">
        <video controls className="w-full">
          <source src="/pcg/Gif-8.mp4" type="video/mp4" />
        </video>
      </div>
      <Typography variant="caption" className="text-center block mt-2">
        Example of saving a generated environment as an asset
      </Typography>
      <br />
    </>
  );

  const pcgContent = (
    <>
      <Typography className="leading-5 text-justify">
        Implementing the main system that would generate the whole 3D
        environments procedurally is a complex task. I started by defining the
        requirements and designing the general process, which is depicted by the
        activity diagram below.
      </Typography>
      <img
        alt=""
        src="/pcg/activity1.png"
        className="w-[50%] m-auto mt-4 mb-2 screen-lg:w-full"
      ></img>
      <Typography variant="caption" className="text-center block mb-4">
        Activity Diagram for environment generation
      </Typography>
      <br />
      <Typography className="leading-5 text-justify">
        The system relies on <b>AI</b> to retrieve the selected <b>theme</b>,
        relevant <b>categories</b>, and any specific <b>requirements</b> from
        the <b>user's prompt</b>. From there, it determines whether layers like
        rivers, foliage, or buildings are needed. For each layer, it loads the{" "}
        <b>appropriate configurations and 3D assets</b>, then{" "}
        <b>procedurally</b> generates the content. It then reserves the occupied
        positions so that the next layers don't generate on top of them, mainly
        to avoid collisions, overlaps, and illogical placements, like a tree
        standing inside a river for example. Once all elements are in place, the
        final environment is assembled and displayed, resulting in a coherent
        and immersive 3D environment.
        <br />
      </Typography>
      <img
        alt=""
        src="/pcg/class.png"
        className="w-[50%] m-auto mt-4 mb-2 screen-lg:w-full"
      ></img>
      <Typography variant="caption" className="text-center block mb-4">
        Class Diagram for the main system
      </Typography>
      <br />
      <Typography className="leading-5 text-justify">
        I've built upon the new{" "}
        <b>Procedural Content Generation (PCG) system</b> in Unreal Engine 5 to
        develop the main system responsible for generating the 3D environments.
        <br />
        <br />
        Most important classes are:
      </Typography>
      <ul className="list-disc px-4">
        <li>
          <Typography className="leading-5 text-justify">
            <b>Master Generator</b>: the central class and responsible for
            controlling and updating themes, categories, requirements,
            randomness, and generated elements of the 3D environment.
          </Typography>
        </li>
        <li>
          <Typography className="leading-5 text-justify">
            <b>Data Manager Component</b>: is part of the Master Generator class
            and used to retrieve the necessary 3D models that are going to be
            placed, along with their information
          </Typography>
        </li>
        <li>
          <Typography className="leading-5 text-justify">
            <b>PCG Component</b>: is from the PCG plugin and is part of the
            Master Generator class and uses a PCG Graph to understand tasks and
            execute the procedural environment generation process.
          </Typography>
        </li>
      </ul>
      <br />
      <Typography variant="h6" className="text-justify text-green-600">
        PCG - Main Graph
      </Typography>
      <Typography className="leading-5 text-justify">
        The main PCG graph is the heart of the system and works exactly like the
        designed workflow I've presented above. Here is how it looks like in
        Blueprint:
      </Typography>
      <img
        alt=""
        src="/pcg/mastergraph.png"
        className="w-[50%] m-auto mt-4 mb-2 screen-lg:w-full"
      ></img>
      <Typography variant="caption" className="text-center block mb-4">
        Blueprint representation of the main PCG graph
      </Typography>
      <Typography variant="h6" className="text-justify text-green-600">
        PCG - Foliage Graph
      </Typography>
      <Typography className="leading-5 text-justify">
        The foliage PCG graph is a subgraph of the main PCG graph and is
        responsible for generating the foliage layer. Here is how it looks in
        Blueprint:
      </Typography>
      <img
        alt=""
        src="/pcg/foliagegraph.jpeg"
        className="w-[50%] m-auto mt-4 mb-2 screen-lg:w-full"
      ></img>
      <Typography variant="caption" className="text-center block mb-4">
        Blueprint representation of the foliage PCG graph
      </Typography>
      <Typography className="leading-5 text-justify">
        Here are some examples of the foliage generated by this graph when
        executed on a landscape:
      </Typography>
      <div className="flex justify-between items-center mt-4 screen-lg:flex-col">
        <div className="w-[48%] screen-lg:w-full">
          <img alt="" src="/pcg/foliage-1.png" className="w-full"></img>
          <Typography variant="caption" className="text-center block mb-4 mt-2">
            Example of foliage generated by the PCG graph
          </Typography>
        </div>
        <div className="w-[48%] screen-lg:w-full">
          <img alt="" src="/pcg/foliage-2.png" className="w-full"></img>
          <Typography variant="caption" className="text-center block mb-4 mt-2">
            Example of foliage generated by the PCG graph
          </Typography>
        </div>
      </div>
      <Typography variant="h6" className="text-justify text-green-600">
        PCG - River Graph
      </Typography>
      <Typography className="leading-5 text-justify">
        The river PCG graph is a subgraph of the main PCG graph and is
        responsible for generating the river layer. Here is how it looks in
        Blueprint:
      </Typography>
      <img
        alt=""
        src="/pcg/riversgraph.png"
        className="w-[50%] m-auto mt-4 mb-2 screen-lg:w-full"
      ></img>
      <Typography variant="caption" className="text-center block mb-4">
        Blueprint representation of the rivers PCG graph
      </Typography>
      <Typography className="leading-5 text-justify">
        Here are some examples of the rivers generated by this graph when
        executed on a landscape:
      </Typography>
      <div className="flex justify-between items-center mt-4 screen-lg:flex-col">
        <div className="w-[48%] screen-lg:w-full">
          <img alt="" src="/pcg/river-1.png" className="w-full"></img>
          <Typography variant="caption" className="text-center block mb-4 mt-2">
            Example of a river passing through the middle vertically
          </Typography>
        </div>
        <div className="w-[48%] screen-lg:w-full">
          <img alt="" src="/pcg/river-2.png" className="w-full"></img>
          <Typography variant="caption" className="text-center block mb-4 mt-2">
            Example of a river passing through the middle horizontally
          </Typography>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4 screen-lg:flex-col">
        <div className="w-[48%] screen-lg:w-full">
          <img alt="" src="/pcg/river-4.png" className="w-full"></img>
          <Typography variant="caption" className="text-center block mb-4 mt-2">
            Example of a river generated on the left side
          </Typography>
        </div>
        <div className="w-[48%] screen-lg:w-full">
          <img alt="" src="/pcg/river-3.png" className="w-full"></img>
          <Typography variant="caption" className="text-center block mb-4 mt-2">
            Example of a river generated on the right side
          </Typography>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4 screen-lg:flex-col">
        <div className="w-[48%] screen-lg:w-full">
          <img alt="" src="/pcg/river-5.png" className="w-full"></img>
          <Typography variant="caption" className="text-center block mb-4 mt-2">
            Example of a river generated in a random pattern
          </Typography>
        </div>
        <div className="w-[48%] screen-lg:w-full">
          <img alt="" src="/pcg/river-8.png" className="w-full"></img>
          <Typography variant="caption" className="text-center block mb-4 mt-2">
            Example of a river generated in a random pattern
          </Typography>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4 screen-lg:flex-col">
        <div className="w-[48%] screen-lg:w-full">
          <img alt="" src="/pcg/river-6.jpeg" className="w-full"></img>
          <Typography variant="caption" className="text-center block mb-4 mt-2">
            Example of rocks generated alongside the river
          </Typography>
        </div>
        <div className="w-[48%] screen-lg:w-full">
          <img alt="" src="/pcg/river-7.png" className="w-full"></img>
          <Typography variant="caption" className="text-center block mb-4 mt-2">
            Example of trees generated alongside the river
          </Typography>
        </div>
      </div>
      <Typography variant="h6" className="text-justify text-green-600">
        PCG - Buildings Graph
      </Typography>
      <Typography className="leading-5 text-justify">
        The buildings PCG graph is a subgraph of the main PCG graph and is
        responsible for generating the buildings layer. Here is how it looks in
        Blueprint:
      </Typography>
      <img
        alt=""
        src="/pcg/buildingsgraph.png"
        className="w-[50%] m-auto mt-4 mb-2 screen-lg:w-full"
      ></img>
      <Typography variant="caption" className="text-center block mb-4">
        Blueprint representation of the buildings PCG graph
      </Typography>
      <Typography className="leading-5 text-justify">
        Here are some examples of the buildings generated by this graph when
        executed on a landscape:
      </Typography>
      <div className="flex justify-between items-center mt-4 screen-lg:flex-col">
        <div className="w-[48%] screen-lg:w-full">
          <img alt="" src="/pcg/building-1.png" className="w-full"></img>
          <Typography variant="caption" className="text-center block mb-4 mt-2">
            Example of buildings with a path between them
          </Typography>
        </div>
        <div className="w-[48%] screen-lg:w-full">
          <img alt="" src="/pcg/building-2.png" className="w-full"></img>
          <Typography variant="caption" className="text-center block mb-4 mt-2">
            Example of buildings without a path between them
          </Typography>
        </div>
      </div>
    </>
  );

  const contentList = [coreFeatures, pcgContent];

  const workDone = USER_DRIVEN_3D_PROCEDURAL_TOOL.workDone.map(
    (work, index) => {
      return {
        id: work.replace(/\s+/g, ""),
        title: work,
        content: contentList[index] || "More details will be added soon!",
      };
    }
  );

  return (
    <>
      <ProjectIntroduction
        title={USER_DRIVEN_3D_PROCEDURAL_TOOL.title}
        youtubeURL={[
          "https://www.youtube.com/embed/rcqNS54urFU",
          "https://www.youtube.com/embed/NiAo5jXZ7UU",
        ]}
        tags={USER_DRIVEN_3D_PROCEDURAL_TOOL.tags}
        usefulLinks={usefulLinks}
        workDone={workDone}
        outcomes={USER_DRIVEN_3D_PROCEDURAL_TOOL.outcomes}
        description={`As part of my capstone project, I successfully developed a user-driven tool that is capable of procedurally generating 3D environments. A complete software development lifecycle was conducted where I worked on all the features of the tool.
          
          The goal behind this tool is to provide a way for developers to easily, quickly, and cheaply create believable 3D environments for their games.

          The tool is integrated within Unreal Engine 5 and given a user prompt such as "Make me a forest", can procedurally generate a 3D environment based on the user's request.
          
          The tool is capable of generating many environmental themes (forests, deserts, snowy or japanese areas, fantasy...) that are composed of three layers: foliage, rivers, and buildings. 
          
          All the elements blend together seamlessly and are completely customizable by the user, who can provide additional feedback to adjust the environment to their liking, like "Remove all the trees", "Make the flowers bigger", "Move the river to the right" or "Add a path that leads from a building to another". They are also able to see many variations of the same environment.
          
          Once a user likes the generated environment, they can save it and use it as any other object in their level. This allows the user to build a complete level in a fraction of the time it would take to do it manually.
          
          The tool's implementation prioritized performance, scalability, and ease of use. It can be quickly modified or extended to add new customization options and environmental themes.`}
      />
      <ProjectContent workDone={workDone} />
      <Footer />
    </>
  );
}

export default UserDriven3DProceduralTool;
