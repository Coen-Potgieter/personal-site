import GitHubSVG from "../assets/GitHubSVG";

type ProjectTitleProps = {
  title: string;
};

const ProjectTitle: React.FC<ProjectTitleProps> = ({ title }) => {
  const gitHubLogoSize = 30;
  return (
    <div className="flex w-full items-center justify-between md:w-fit md:justify-center md:gap-x-3 md:pb-0 md:h-full">
      <h1 className="text-xl md:text-4xl font-bold mb-0 md:border-b-3 pb-0">
        {title}
      </h1>
      <GitHubSVG size={gitHubLogoSize} />
    </div>
  );
};

export default ProjectTitle;
