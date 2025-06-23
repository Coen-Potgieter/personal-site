import BigHeader from "./headerComps/BigHeader";
import SmallHeader from "./headerComps/SmallHeader";
import SideBar from "./headerComps/SideBar";

type HeaderProps = {
  width: number;
  currentPage: string;
  onPageChange: (newPage: string) => void;
};
const Header: React.FC<HeaderProps> = ({
  width,
  currentPage,
  onPageChange,
}) => {
  return (
    <div className="flex justify-start w-full bg-transparent text-black dark:text-white text-xl">
      <SideBar width={width} />
      <BigHeader currentPage={currentPage} onPageChange={onPageChange} />
      <SmallHeader currentPage={currentPage} onPageChange={onPageChange} />
    </div>
  );
};

export default Header;
