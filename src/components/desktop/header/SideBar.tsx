import GitHubSVG from "../../../assets/svg/GitHubSVG";
import LinkedInSVG from "../../../assets/svg/LinkedInSVG";
import LogoSVG from "../../../assets/svg/LogoSVG";
import { handleProfileClick } from "../../../lib/helper-funcs";

type SideBarProps = {};

const SideBar: React.FC<SideBarProps> = () => {
  return (
    <div className="font-tinos fixed top-0 left-0 w-[12vw] right-0 z-50 hidden md:flex text-black dark:text-white flex-col gap-y-3 h-screen justify-start bg-my-white1 dark:bg-my-black1 px-5 pt-5 items-center text-3xl font-bold">
      <div className="flex flex-col items-center">
        <LogoSVG size={50} className="text-my-orange1 dark:text-my-green1" />
        <h1 className="text-my-orange1 dark:text-my-green1 font-normal">
          Coen
        </h1>
        <h1>Potgieter</h1>

        <p className="font-space-mono font-normal text-center text-sm pt-2">
          I Am A Final Year Data Engineering Student At Stellenbosch University
          Looking For A Job
        </p>
      </div>
      <div className="flex gap-x-3">
        <button
          onClick={() => handleProfileClick("github")}
          className="cursor-pointer hover:text-my-green1 transition duration-100 ease-in-out hover:scale-120"
        >
          <GitHubSVG size={25} />
        </button>

        <button
          onClick={() => handleProfileClick("linkedin")}
          className="cursor-pointer hover:text-linkedin-highlight transition duration-100 ease-in-out hover:scale-120"
        >
          <LinkedInSVG size={25} />
        </button>
      </div>
    </div>
  );
};

export default SideBar;
