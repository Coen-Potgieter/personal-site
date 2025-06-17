import DotSVG from "../assets/DotSVG";
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
  return (
    <div className=" flex flex-col gap-0 h-fit items-center">
      <button
        className="cursor-pointer"
        type="button"
        onClick={() => onPageChange(pageId)}
      >
        {text}
      </button>
      {currentPage === pageId && (
        <DotSVG size={15} className="text-my-green1" />
      )}
    </div>
  );
};

export default HeaderButton;
