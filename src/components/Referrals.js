import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Typography,
} from "@mui/material";

function Referrals() {
  const REFERRALS = [
    {
      name: "Oussama Ben Mariem",
      position: "Chief Technology Officer at Lanterns Studios",
      picture: "/referrals/ref0.jpg",
      description: `Aymen did an amazing job on his summer internship, by learning unreal engine 5 and making an early prototype of "Prince of Persia", i really admire his way of thinking to solve issues and how he manage to deliver his work in time.`,
      link: "https://www.linkedin.com/in/oussama-ben-mariem/",
    },
    {
      name: "Ayoub Rabeh",
      position: "Cofounder of Cynoia",
      picture: "/referrals/ref1.jpg",
      description: `Aymen is an excellent team player, always willing to go the extra mile to help and contribute to the success of the project, his positive attitude and strong work ethic make him a pleasure to work with.

I strongly recommend Aymen for any software engineering project, his technical skills and contributions speak for themselves and i have no doubt he will continue to excel in his future endeavors.`,
      link: "https://www.linkedin.com/in/ayoub-rabeh/",
    },
    {
      name: "Nermine Slimane",
      position: "Software Engineering Lead at Cynoia",
      picture: "/referrals/ref2.jpg",
      description: `In addition to his technical skills, Aymen is a team player who is always willing to go the extra mile to ensure the success of a project. He has excellent communication skills and is able to effectively collaborate with cross-functional teams, including designers, product managers, and other developers.

I am confident that Aymen would be a valuable asset to any development team`,
      link: "https://www.linkedin.com/in/nermine-slimane/",
    },
  ];

  const generateReferralCards = REFERRALS.map((referral) => {
    return (
      <Card
        key={referral.name}
        className="w-[30%] screen-lg:w-[90%] border-cyan-400 border-2"
        variant="outlined"
      >
        <CardHeader
          avatar={
            <Avatar
              alt={referral.name}
              src={referral.picture}
              sx={{ width: "56px", height: "56px" }}
            />
          }
          title={
            <a href={referral.link} target="_blank" rel="noreferrer">
              {referral.name}
            </a>
          }
          subheader={referral.position}
          titleTypographyProps={{
            className: "text-cyan-600 text-[1.25rem] hover:underline",
          }}
          subheaderTypographyProps={{ className: "text-[1rem]" }}
        />
        <CardContent>
          <Typography variant="body1" className="text-justify">
            {`“${referral.description}”`}
          </Typography>
        </CardContent>
      </Card>
    );
  });

  return (
    <section>
      <div className="w-full m-auto flex justify-evenly pb-8 screen-lg:flex-col screen-lg:items-center screen-lg:gap-6">
        {generateReferralCards}
      </div>
    </section>
  );
}

export default Referrals;
