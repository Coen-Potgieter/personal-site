import DotSVG from "../../../assets/DotSVG";
import { NavLink } from "react-router-dom";

type HeaderNavButtonProps = {
  label: string;
  endpoint: string;
};

const HeaderNavButton: React.FC<HeaderNavButtonProps> = ({
  label,
  endpoint,
}) => {
  return (
    <NavLink
      to={endpoint}
      className={({ isActive }) =>
        "flex flex-col font-bold gap-0 h-fit items-center pb-1 !transition-none" +
        (isActive
          ? " text-my-orange1 dark:text-my-green1 !transition-none"
          : " text-transparent hover:dark:text-my-green1/40 hover:text-my-orange1/40 !transition-none")
      }
      end
    >
      <p className="cursor-pointer text-lightmode-text-col1 dark:text-darkmode-text-col1 !transition-none">
        {label}
      </p>
      <DotSVG size={15} className="!transition-none" />
    </NavLink>
  );
};

export default HeaderNavButton;
