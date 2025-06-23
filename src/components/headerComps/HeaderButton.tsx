import DotSVG from "../../assets/DotSVG";
type HeaderButtonProps = {
  text: string;
  pageId: string;
  currentPage: string;
  onPageChange: (newPage: string) => void;
};
const HeaderButton: React.FC<HeaderButtonProps> = ({
  text,
  pageId,
  currentPage,
  onPageChange,
}) => {
  const activePageStyle = "text-my-orange1 dark:text-my-green1";
  return (
    <div className="flex flex-col font-bold gap-0 h-fit items-center pb-1 text-transparent hover:dark:text-my-green1/40 hover:text-my-orange1/40">
      <button
        className="cursor-pointer text-black dark:text-white"
        type="button"
        onClick={() => onPageChange(pageId)}
      >
        {text}
      </button>
      <DotSVG
        size={15}
        className={currentPage === pageId ? activePageStyle : ""}
      />
    </div>
  );
};

export default HeaderButton;
