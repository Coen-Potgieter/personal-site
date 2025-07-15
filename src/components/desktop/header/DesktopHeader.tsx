import HeaderNavButton from "./HeaderNavButton";
import DesktopThemeToggleButton from "./DesktopThemeToggleButton";

type DesktopHeaderProps = {};

const DesktopHeader: React.FC<DesktopHeaderProps> = ({}) => {
  return (
    <div className="hidden md:flex w-full bg-my-white1/10 dark:bg-my-black1/10 backdrop-blur-md h-fit">
      <div className="mx-auto flex justify-center h-fit">
        <div className="flex justify-center w-fit px-10 gap-x-10 pt-2 h-fit border-b-2 dark:border-white/50 rounded-b-xl">
          <HeaderNavButton label="About" endpoint="/" />
          <HeaderNavButton label="Projects" endpoint="projects/" />
          <HeaderNavButton label="CV" endpoint="/cv/" />
        </div>
      </div>
      <DesktopThemeToggleButton />
    </div>
  );
};

export default DesktopHeader;
