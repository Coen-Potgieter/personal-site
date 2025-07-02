import DesktopHeader from "../desktop/header/DesktopHeader";
import MobileHeader from "../mobile/header/MobileHeader";

type HeaderProps = {};
const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="font-tinos fixed top-0 left-0 right-0 z-40 text-black dark:text-white text-xl">
      <DesktopHeader />
      <MobileHeader />
    </div>
  );
};

export default Header;
