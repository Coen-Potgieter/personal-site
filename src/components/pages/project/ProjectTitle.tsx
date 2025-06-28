import GitHubSVG from "../../../assets/GitHubSVG";

type ProjectTitleProps = {
  title: string;
};

const ProjectTitle: React.FC<ProjectTitleProps> = ({ title }) => {
  const gitHubLogoSizeDesktop = 30;
  const gitHubLogoSizeMobile = 25;
  return (
    <div className="flex w-full items-center justify-between md:w-fit md:justify-center gap-x-3 md:pb-0 md:h-full">
      <h1 className="text-xl md:text-4xl font-bold mb-0 md:border-b-3 pb-0">
        {title}
      </h1>
      <div className="hidden md:block w-fit h-fit">
        <GitHubSVG size={gitHubLogoSizeDesktop} />
      </div>
      <div className="md:hidden flex gap-x-1 pl-1.5 border-1 rounded-2xl border-black dark:border-white w-fit h-fit">
        <p>Source</p>
        <GitHubSVG size={gitHubLogoSizeMobile} />
      </div>
    </div>
  );
};

export default ProjectTitle;
