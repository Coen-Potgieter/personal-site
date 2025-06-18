import GitHubSVG from "../assets/GitHubSVG";
import LinkedInSVG from "../assets/LinkedInSVG";
import HeaderButton from "./HeaderButton";
import { availablePages } from "../data";

type HeaderProps = {
  height: number;
  width: number;
  currentPage: string;
  onPageChange: (newPage: string) => void;
};
const Header: React.FC<HeaderProps> = ({
  height,
  width,
  currentPage,
  onPageChange,
}) => {
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
      className="flex justify-start w-full bg-transparent text-black text-xl"
      style={{ height: `${height}vh` }}
    >
      <div
        className="flex flex-col w-fit h-screen justify-start bg-my-white1 pt-5 items-center text-3xl font-bold"
        style={{ width: `${width}vw` }}
      >
        <h1 className="text-my-green1 font-normal">Coen</h1>
        <h1>Potgieter</h1>
        <div className="flex gap-x-3 pt-3">
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
      <div className="flex justify-center w-full bg-my-white1/10 backdrop-blur-md h-fit">
        <div className="flex justify-center w-fit px-10 gap-x-10 pt-2 h-fit border-b-2 rounded-b-xl">
          <HeaderButton
            text="Projects"
            pageId={availablePages.PROJECTS}
            currentPage={currentPage}
            onPageChange={onPageChange}
          />
          <HeaderButton
            text="CV"
            pageId={availablePages.CV}
            currentPage={currentPage}
            onPageChange={onPageChange}
          />
          <HeaderButton
            text="About"
            pageId={availablePages.ABOUT}
            currentPage={currentPage}
            onPageChange={onPageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
