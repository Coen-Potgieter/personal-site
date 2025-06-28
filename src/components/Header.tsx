import DesktopHeader from "./headerComps/desktop/DesktopHeader";
import MobileHeader from "./headerComps/mobile/MobileHeader";

type HeaderProps = {
  currentPage: string;
  onPageChange: (newPage: string) => void;
};
const Header: React.FC<HeaderProps> = ({ currentPage, onPageChange }) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-40 text-black dark:text-white text-xl">
      <DesktopHeader currentPage={currentPage} onPageChange={onPageChange} />
      <MobileHeader currentPage={currentPage} onPageChange={onPageChange} />
    </div>
  );
};

export default Header;
