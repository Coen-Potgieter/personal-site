import GitHubSVG from "../../assets/GitHubSVG";
import LinkedInSVG from "../../assets/LinkedInSVG";
import { aboutMe } from "../../data";
import LogoSVG from "../../assets/LogoSVG";

type SideBarProps = {
  width: number;
};

const SideBar: React.FC<SideBarProps> = ({ width }) => {
  const handleProfileClick = (platform: string) => {
    if (platform === "github") {
      window.open(
        "https://github.com/Coen-Potgieter",
        "_blank",
        "noopener,noreferrer",
      );
    } else if (platform === "linkedin") {
      window.open(
        "https://www.linkedin.com/in/coen-potgieter/",
        "_blank",
        "noopener,noreferrer",
      );
    }
  };

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 hidden md:flex text-black dark:text-white flex-col gap-y-3 w-fit h-screen justify-start bg-my-white1 dark:bg-my-black1 px-5 pt-5 items-center text-3xl font-bold"
      style={{ width: `${width}vw` }}
    >
      <div className="flex flex-col items-center">
        <LogoSVG size={50} className="text-my-orange1 dark:text-my-green1" />
        <h1 className="text-my-orange1 dark:text-my-green1 font-normal">
          Coen
        </h1>
        <h1>Potgieter</h1>

        <p className="font-space-mono font-normal text-center text-sm pt-2">
          {aboutMe.small}
        </p>
      </div>
      <div className="flex gap-x-3">
        <button
          onClick={() => handleProfileClick("github")}
          className="cursor-pointer hover:text-my-green1 transition duration-50 ease-in-out hover:scale-120"
        >
          <GitHubSVG size={25} />
        </button>

        <button
          onClick={() => handleProfileClick("linkedin")}
          className="cursor-pointer hover:text-linkedin-highlight transition duration-50 ease-in-out hover:scale-120"
        >
          <LinkedInSVG size={25} />
        </button>
      </div>
    </div>
  );
};

export default SideBar;
