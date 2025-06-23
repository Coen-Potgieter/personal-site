type HamburgerButtonProps = {
  isOpen: boolean;
  onClick: () => void;
};

const HamburgerButton: React.FC<HamburgerButtonProps> = ({
  isOpen,
  onClick,
}) => {
  return (
    <button
      className="relative w-10 h-10 focus:outline-none group"
      onClick={onClick}
    >
      {/* Top line */}
      <span
        className={`block absolute h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${
          isOpen
            ? "rotate-45 translate-y-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            : "top-3 left-2"
        }`}
      ></span>

      {/* Middle line */}
      <span
        className={`block absolute h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${
          isOpen ? "opacity-0" : "opacity-100 top-1/2 left-2 -translate-y-1/2"
        }`}
      ></span>

      {/* Bottom line */}
      <span
        className={`block absolute h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${
          isOpen
            ? "-rotate-45 translate-y-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            : "bottom-3 left-2"
        }`}
      ></span>
    </button>
  );
};

export default HamburgerButton;
