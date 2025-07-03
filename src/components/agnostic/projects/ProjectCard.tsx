import Tag from "../../desktop/projects/Tag";
import ProjectTitle from "./ProjectTitle";
import DemoVidCarousel from "../../mobile/projects/DemoVidCarousel";

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
        `flex dark:text-white flex-col h-fit rounded-2xl items-center shadow-xl dark:shadow-white/20
md:cursor-pointer md:transition md:duration-100 md:ease-in-out md:hover:scale-101 md:hover:bg-my-white2 
md:hover:dark:bg-my-black2 md:hover:shadow-2xl` + cardWidth
      }
    >
      <div className="flex w-full h-fit md:h-[8vh] justify-between items-center px-3 md:pl-10 md:pr-5">
        <ProjectTitle title={title} />
        <div className="hidden md:grid grid-rows-2 grid-flow-col gap-x-1">
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

      {/* Description */}
      <p className="text-md md:text-xl leading-tight w-10/12 overflow-hidden pb-5 pt-2">
        <span className="line-clamp-2 md:line-clamp-none">{description}</span>
      </p>
    </div>
  );
};

export default ProjectCard;
