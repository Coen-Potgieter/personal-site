import BigHeader from "./headerComps/BigHeader";
import SmallHeader from "./headerComps/SmallHeader";

type HeaderProps = {
  currentPage: string;
  onPageChange: (newPage: string) => void;
};
const Header: React.FC<HeaderProps> = ({ currentPage, onPageChange }) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-40 text-black dark:text-white text-xl">
      <BigHeader currentPage={currentPage} onPageChange={onPageChange} />
      <SmallHeader currentPage={currentPage} onPageChange={onPageChange} />
    </div>
  );
};

export default Header;
