import { Typography } from "@mui/material";

function ProjectLearningOutcomes({ outcomes = [] }) {
  const generateOutcomes = outcomes.map((outcome) => {
    return (
      <li
        key={"learning outcome " + outcome}
        className="text-white pt-1 underline-offset-4 text-justify"
      >
        {outcome}
      </li>
    );
  });

  return (
    <section className="w-full bg-darkblue">
      <div className="w-[90%] m-auto py-6">
        <Typography
          variant="h4"
          className="text-cyan-400 pb-2 screen-sm:text-2xl screen-lg:text-3xl screen-lg:font-bold"
        >
          Learning Outcomes
        </Typography>
        {outcomes.length !== 0 ? (
          <ul className="list-disc px-4 pb-2">{generateOutcomes}</ul>
        ) : (
          <Typography className="text-white">
            More details will be added soon!
          </Typography>
        )}
      </div>
    </section>
  );
}

export default ProjectLearningOutcomes;
