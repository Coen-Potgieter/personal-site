import LogoSVG from "../../assets/LogoSVG";
import GitHubSVG from "../../assets/GitHubSVG";
import LinkedInSVG from "../../assets/LinkedInSVG";
import { useState } from "react";
// import { availablePages } from "../../data";
import HamburgerButton from "./HamburgerButton";
type BigHeaderProps = {
  currentPage: string;
  onPageChange: (newPage: string) => void;
};

const BigHeader: React.FC<BigHeaderProps> = () => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const handleMenuOpen = () => {
    setMenuIsOpen((prevState) => !prevState);
  };
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
    <div className="md:hidden fixed flex flex-row h-[6vh] w-screen px-4 bg-my-black2 border-b-1 border-white/30 items-center justify-between">
      <div className="flex gap-x-2">
        <LogoSVG size={30} className="text-my-green1" />
        <h1>Coen Potgieter</h1>
      </div>
      <div className="flex flex-row items-center gap-2 mr-">
        <HamburgerButton isOpen={menuIsOpen} onClick={handleMenuOpen} />
        <button onClick={() => handleProfileClick("github")}>
          <GitHubSVG size={25} />
        </button>
        <button onClick={() => handleProfileClick("linkedin")}>
          <LinkedInSVG size={25} />
        </button>
      </div>
    </div>
  );
};

export default BigHeader;
