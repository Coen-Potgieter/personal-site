import Tag from "./Tag";
import ProjectTitle from "./ProjectTitle";
import DemoVidCarousel from "./mobileComps/demoVidCarousel";

// TODO:    1. for mobile, when clicked it is highlighted with hover animation. Take this away
//          2. Titles Look a lil weird on mobile
//          3. Add Go to github button on tilte cards for mobile to indicate its a link
//          4. For mobile, make functional: This means add pages when hamburger button is clicked, and all that jazz

type ProjectCardProps = {
  title: string;
  topicTags: string[];
  description: string;
  demoVids: string[];
  gitHubLink: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  topicTags,
  description,
  demoVids,
  gitHubLink,
}) => {
  const isWideCard: boolean = demoVids.length >= 2;
  const cardWidth = isWideCard ? " md:w-full" : " md:w-[49%]";

  const handleClick = () => {
    // Could add click analytics here??
    window.open(gitHubLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      onClick={handleClick}
      className={
        `flex cursor-pointer dark:text-white flex-col h-fit rounded-2xl items-center shadow-xl dark:shadow-white/20 transition duration-100 ease-in-out hover:scale-101 hover:bg-my-white2 hover:dark:bg-my-black2 hover:shadow-2xl` +
        cardWidth
      }
    >
      <div className="flex w-full md:h-[8vh] h-fit justify-between items-center px-3 md:pl-10 md:pr-5">
        <ProjectTitle title={title} />
        <div className="hidden md:flex flex-col-reverse flex-wrap-reverse gap-x-2 gap-y-0.5 h-[4em] w-fit">
          {topicTags.map((item, id) => {
            return <Tag tagName={item} key={id} />;
          })}
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex max-h-[40vh] justify-evenly gap-x-2 pl-2 pr-4">
        {demoVids.map((link, id) => {
          return (
            <img
              src={link}
              key={id}
              className="min-w-1/2"
              alt={"Demo Gif #" + id}
            />
          );
        })}
      </div>

      {/* Mobile View */}
      <DemoVidCarousel demoVids={demoVids} />
      <p className="text-md md:text-xl leading-tight w-10/12 overflow-hidden pb-5 pt-2">
        <span className="line-clamp-2 md:line-clamp-none">{description}</span>
      </p>
    </div>
  );
};

export default ProjectCard;
