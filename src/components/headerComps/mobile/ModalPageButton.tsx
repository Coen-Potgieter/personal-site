type ModalPageButtonProps = {
  onTap: () => void;
  label: string;
  isCurrentPage: boolean;
  Icon: React.ReactNode;
};

const ModalPageButton: React.FC<ModalPageButtonProps> = ({
  onTap,
  label,
  isCurrentPage,
  Icon,
}) => {
  const acvtiveStyle = isCurrentPage
    ? " shadow-2xs bg-my-white2 dark:bg-my-black2"
    : "";
  return (
    <button
      onClick={onTap}
      className={
        `flex w-9/12 h-fit justify-center  items-center gap-x-3 text-2xl text-black dark:text-white rounded-3xl px-2 py-3` +
        acvtiveStyle
      }
    >
      {Icon}
      <div>{label}</div>
    </button>
  );
};

export default ModalPageButton;
