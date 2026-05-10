import React from "react";
import { Card, CardContent, Avatar, Typography } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

function Referrals() {
  const REFERRALS = [
    {
      name: "Oussama Ben Mariem",
      position: "Chief Technology Officer at Lanterns Studios",
      picture: "/referrals/ref0.jpg",
      description: `Aymen did an amazing job ... I really admire his way of thinking to solve issues and how he manages to deliver his work on time.`,
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

  const generateReferralCards = REFERRALS.map((referral, index) => {
    return (
      <Card
        key={referral.name}
        className="w-[30%] screen-lg:w-[90%] rounded-[24px] to-fade-in transition-all duration-300 hover:-translate-y-3 border border-cyan-500/20 shadow-[0_15px_35px_rgba(34,211,238,0.08)] overflow-hidden group relative"
        sx={{
          background:
            "linear-gradient(135deg, rgba(15,23,42,0.95), rgba(8,47,73,0.92))",
          backdropFilter: "blur(16px)",
        }}
      >
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-500/0 via-cyan-500/60 to-cyan-500/0"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/4 via-transparent to-blue-500/4 pointer-events-none"></div>

        <CardContent className="relative z-10 px-6 py-7 flex flex-col h-full">
          <div className="mb-4 flex items-start gap-3">
            <FormatQuoteIcon
              sx={{ fontSize: 28, color: "rgba(34, 211, 238, 0.45)" }}
            />
          </div>

          <Typography
            variant="body1"
            className="text-slate-50 leading-relaxed mb-6 italic font-normal text-[1.05rem] flex-grow drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]"
          >
            "{referral.description}"
          </Typography>

          <div className="flex items-center gap-5 pt-5 border-t border-cyan-500/20">
            <Avatar
              alt={referral.name}
              src={referral.picture}
              sx={{
                width: "56px",
                height: "56px",
                border: "1.5px solid rgba(34, 211, 238, 0.5)",
                boxShadow: "0 0 0 10px rgba(34, 211, 238, 0.08)",
              }}
            />
            <div className="flex-1 min-w-0">
              <a
                href={referral.link}
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-300 transition-colors block"
              >
                <Typography className="text-white font-bold text-[1.1rem] leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                  {referral.name}
                </Typography>
              </a>
              <Typography
                variant="body2"
                className="text-cyan-300/80 text-[0.95rem] font-semibold leading-tight mt-0.5 drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]"
              >
                {referral.position}
              </Typography>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  });

  return (
    <section className="w-full">
      <div className="w-full m-auto flex justify-center gap-8 pb-12 screen-lg:flex-col screen-lg:items-center screen-lg:gap-6 px-4 relative z-10">
        {generateReferralCards}
      </div>
    </section>
  );
}

export default Referrals;
