import { NavLink } from "react-router-dom";

type ModalPageButtonProps = {
  label: string;
  endpoint: string;
  Icon: React.ReactNode;
  onClick: () => void;
};

const ModalPageButton: React.FC<ModalPageButtonProps> = ({
  label,
  endpoint,
  Icon,
  onClick,
}) => {
  return (
    <>
      <NavLink
        to={endpoint}
        onClick={onClick}
        className={({ isActive }) =>
          "flex w-9/12 h-fit justify-center  items-center gap-x-3 text-2xl text-black dark:text-white rounded-3xl px-2 py-3" +
          (isActive ? " shadow-2xs bg-my-white2 dark:bg-my-black2" : "")
        }
      >
        {Icon}
        <div>{label}</div>
      </NavLink>
    </>
  );
};

export default ModalPageButton;
