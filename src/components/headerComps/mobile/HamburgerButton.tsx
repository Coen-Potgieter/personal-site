import { useState } from "react";
import MobileModal from "./MobileModal";

type HamburgerButtonProps = {
  currentPage: string;
  onPageChange: (newPage: string) => void;
};
const HamburgerButton: React.FC<HamburgerButtonProps> = ({
  currentPage,
  onPageChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen && (
        <MobileModal
          currentPage={currentPage}
          onPageChange={onPageChange}
          isOpen={isOpen}
          closeModal={toggleMenu}
        />
      )}
      <button
        onClick={toggleMenu}
        className="relative w-fit h-fit bg-transparent border-none rounded-md"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <div className="w-6 h-6 relative">
          {/* Top line */}
          <span
            className={`absolute left-0 w-full h-[7%] bg-black dark:bg-white transition-all duration-200 ease-in-out transform origin-center rounded-lg ${
              isOpen ? "top-[45%] rotate-45" : "top-[20%]"
            }`}
          />

          {/* Middle line */}
          <span
            className={`absolute left-0 w-full top-[50%] h-[7%] bg-black dark:bg-white transition-all duration-200 ease-in-out rounded-lg ${
              isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
            }`}
          />

          {/* Bottom line */}
          <span
            className={`absolute left-0 w-full h-[7%] bg-black dark:bg-white transition-all duration-200 ease-in-out transform origin-center rounded-lg ${
              isOpen ? "top-[45%] -rotate-45" : "top-[80%]"
            }`}
          />
        </div>
      </button>
    </>
  );
};

export default HamburgerButton;
