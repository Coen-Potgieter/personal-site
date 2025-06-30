type PageNavButtonProps = {
  label: string;
  isActive: boolean;
};

const PageNavButton: React.FC<PageNavButtonProps> = ({ label, isActive }) => {
  const dynamicSpanStyle = isActive
    ? " bg-my-light-text1 w-24"
    : " w-12 bg-my-light-text2 group-hover:bg-my-light-text1 group-hover:w-24";
  const dynamicTextStyle = isActive
    ? " text-my-light-text1"
    : " text-my-light-text2 group-hover:text-my-light-text1";
  return (
    <button className="flex gap-x-2 w-fit justify-start items-center group">
      <span
        className={
          `h-1 transition-all ease-in-out duration-100` + dynamicSpanStyle
        }
      ></span>
      <h1
        className={`transition-all ease-in-out duration-100` + dynamicTextStyle}
      >
        {label}
      </h1>
    </button>
  );
};

export default PageNavButton;
