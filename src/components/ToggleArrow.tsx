type ToggleArrowProps = {
  isExpanded: boolean;
  toggle: () => void;
};

const ToggleArrow: React.FC<ToggleArrowProps> = ({ isExpanded, toggle }) => (
  <button
    onClick={toggle}
    className="p-2 focus:outline-none transition-transform duration-300 cursor-pointer hover:bg-gray-100"
    aria-label={isExpanded ? "Collapse header" : "Expand header"}
  >
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
    >
      <path
        d="M19 9L12 16L5 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>
);

export default ToggleArrow;
