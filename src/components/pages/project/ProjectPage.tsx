import ProjectCard from "./ProjectCard";
import { PROJECT_DATA } from "../../../data/projects_data";

const ProjectPage: React.FC = () => {
  return (
    <div
      className="flex w-full h-full justify-center pb-[50vh] md:ml-30"
      style={{
        marginTop: "10vh",
      }}
    >
      <div className="flex flex-wrap w-10/12 justify-center items-center gap-y-5 md:gap-y-10 gap-x-5">
        {PROJECT_DATA.map((item) => {
          return <ProjectCard {...item} key={item.title} />;
        })}
      </div>
    </div>
  );
};

export default ProjectPage;
