import Tag from "./Tag";
import ProjectTitle from "./ProjectTitle";

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
  const cardWidth = isWideCard ? " w-12/12" : " w-[49%]";

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
      <div className="flex w-full h-[8vh] justify-between items-center pl-10 pr-5">
        <ProjectTitle title={title} />
        <div className="flex flex-col-reverse flex-wrap-reverse gap-x-2 gap-y-0.5 h-[4em] w-fit">
          {topicTags.map((item, id) => {
            return <Tag tagName={item} key={id} />;
          })}
        </div>
      </div>
      <div className="flex max-h-[40vh] justify-evenly gap-x-2 pl-2 pr-4">
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
      <p className="text-xl/tight w-10/12 h-1/6 pt-2 pb-5">{description}</p>
    </div>
  );
};

export default ProjectCard;
