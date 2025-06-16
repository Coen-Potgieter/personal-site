import Tag from "./Tag";
import ProjectTitle from "./ProjectTitle";

type ProjectCardProps = {
  title: string;
  techStack: string[];
  description: string;
  demoVids: string[];
  gitHubLink: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  techStack,
  description,
  demoVids,
  gitHubLink,
}) => {
  const cardWidth = demoVids.length >= 2 ? " w-8/12" : " w-1/3";
  return (
    <div
      className={
        `flex flex-col h-[50vh] border-2 border-yellow-300 rounded-2xl items-center shadow-lg` +
        cardWidth
      }
    >
      <div className="flex w-full h-1/6 justify-between items-center bg-yellow-400">
        <ProjectTitle title={title} gitHubLink={gitHubLink} />
        <div className="flex flex-col-reverse flex-wrap-reverse gap-x-2 gap-y-0.5 h-[4em] w-fit border-2 border-black">
          {techStack.map((item, id) => {
            return <Tag tagName={item} key={id} />;
          })}
        </div>
      </div>
      <div className="flex w-fit justify-around h-2/3 gap-x-2">
        {demoVids.map((link, id) => {
          return <img src={link} key={id} alt={"Demo Gif #" + id} />;
        })}
      </div>
      <p className="text-xl/tight w-10/12 h-1/6 pt-2 line-clamp-1">
        {description}
      </p>
    </div>
  );
};

export default ProjectCard;
