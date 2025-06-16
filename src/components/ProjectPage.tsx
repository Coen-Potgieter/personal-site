import ProjectCard from "./ProjectCard";
import { PROJECT_DATA } from "../data";

const ProjectPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full items-center gap-10">
      {PROJECT_DATA.map((item) => {
        return <ProjectCard {...item} key={item.title} />;
      })}
    </div>
  );
};

export default ProjectPage;
