import { useState } from "react";
import ToggleArrow from "./ToggleArrow";

const Header: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  return (
    <header
      className={`
      bg-white shadow-md
      transition-all duration-300 ease-in-out
      overflow-hidden
      ${isExpanded ? "max-h-40" : "max-h-12"}
    `}
    >
      <div className="flex justify-between items-center p-4">
        <h1 className="text-4xl font-bold">Coen Potgieter</h1>
        <ToggleArrow
          isExpanded={isExpanded}
          toggle={() => setIsExpanded(!isExpanded)}
        />
      </div>

      {/* Header content that will collapse */}
      <div className="p-4">
        <nav>Your navigation links</nav>
        <p>Additional header content</p>
      </div>
    </header>
  );
};

export default Header;
