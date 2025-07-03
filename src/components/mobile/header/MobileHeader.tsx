import LogoSVG from "../../../assets/svg/LogoSVG";
import GitHubSVG from "../../../assets/svg/GitHubSVG";
import LinkedInSVG from "../../../assets/svg/LinkedInSVG";
import HamburgerButton from "./HamburgerButton";
import MobileThemeToggleButton from "./MobileThemeToggleButton";

type MobileHeaderProps = {};

const MobileHeader: React.FC<MobileHeaderProps> = ({}) => {
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
    <div className="md:hidden z-30 fixed flex flex-row h-[6vh] w-screen pl-4 pr-2 bg-my-white2 dark:bg-my-black2 border-b-1 border-black/40 dark:border-white/30 items-center justify-between">
      <div className="flex gap-x-2">
        <LogoSVG size={30} className="text-my-orange1 dark:text-my-green1" />
        <div className="flex">
          <h1 className="text-my-orange1 dark:text-my-green1">Coen</h1>
          <h1 className="font-bold">Potgieter</h1>
        </div>
      </div>
      <div className="flex flex-row items-center gap-2">
        <HamburgerButton />
        <MobileThemeToggleButton />
        <button onClick={() => handleProfileClick("github")}>
          <GitHubSVG size={20} />
        </button>
        <button onClick={() => handleProfileClick("linkedin")}>
          <LinkedInSVG size={20} />
        </button>
      </div>
    </div>
  );
};

export default MobileHeader;
