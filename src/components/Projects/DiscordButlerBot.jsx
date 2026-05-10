import { DISCORD_BUTLER_BOT } from "../ProjectList";
import ProjectIntroduction from "./Shared/ProjectIntroduction";
import Footer from "../Footer";
import ProjectContent from "./Shared/ProjectContent";

function DiscordButlerBot() {
  const usefulLinks = [
    {
      title: "Project's GitHub Repository",
      href: "https://github.com/aymendps/discord-butler-bot",
    },
  ];

  const contentList = [];

  const workDone = DISCORD_BUTLER_BOT.workDone.map((work, index) => {
    return {
      id: work.replace(/\s+/g, ""),
      title: work,
      content: contentList[index] || "More details will be added soon!",
    };
  });

  return (
    <>
      <ProjectIntroduction
        title={DISCORD_BUTLER_BOT.title}
        youtubeURL={[""]}
        tags={DISCORD_BUTLER_BOT.tags}
        usefulLinks={usefulLinks}
        workDone={workDone}
        useLinksForWorkDone={false}
        outcomes={DISCORD_BUTLER_BOT.outcomes}
        description={`Butler Bot is a personal Discord bot that I programmed for me and my friends. The bot joins voice channels and is capable of:

          - Playing music from many sources using video/playlist URLs, search keywords, local files, or live-streams.

- Add, remove, skip, loop, rewind, fast forward, and seek songs in the queue.

- Manage favorites and playlists, with support for adding, removing, and playing from saved collections.

- Get song suggestions based on the current track or custom search terms.

- Get League of Legends related info and much more!
`}
      />
      <ProjectContent // workDone={workDone} this makes it so nothing is rendered but we still benefit from the scrollIntoView effect
      />
      <Footer />
    </>
  );
}

export default DiscordButlerBot;
