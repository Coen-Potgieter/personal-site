import { availablePages } from "../../../data/site_data";
import HeaderButton from "./HeaderButton";
import DesktopThemeToggleButton from "./DesktopThemeToggleButton";

type DesktopHeaderProps = {
  currentPage: string;
  onPageChange: (newPage: string) => void;
};

const DesktopHeader: React.FC<DesktopHeaderProps> = ({
  currentPage,
  onPageChange,
}) => {
  return (
    <div className="hidden md:flex w-full bg-my-white1/10 dark:bg-my-black1/10 backdrop-blur-md h-fit">
      <div className="mx-auto flex justify-center h-fit">
        <div className="flex justify-center w-fit px-10 gap-x-10 pt-2 h-fit border-b-2 dark:border-white/50 rounded-b-xl">
          <HeaderButton
            text="About"
            pageId={availablePages.ABOUT}
            currentPage={currentPage}
            onPageChange={onPageChange}
          />
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
            text="Log"
            pageId={availablePages.LOG}
            currentPage={currentPage}
            onPageChange={onPageChange}
          />
        </div>
      </div>
      <DesktopThemeToggleButton />
    </div>
  );
};

export default DesktopHeader;
