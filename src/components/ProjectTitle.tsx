import GitHubSVG from "../assets/GitHubSVG";

type ProjectTitleProps = {
  title: string;
};

const ProjectTitle: React.FC<ProjectTitleProps> = ({ title }) => {
  const gitHubLogoSize = 30;
  return (
    <div className="flex items-center justify-start gap-x-3 h-full text-black">
      <h1 className="text-4xl font-bold mb-0 border-b-3 pb-0 font-project-title">
        {title}
      </h1>
      <GitHubSVG size={gitHubLogoSize} />
    </div>
  );
};

export default ProjectTitle;
