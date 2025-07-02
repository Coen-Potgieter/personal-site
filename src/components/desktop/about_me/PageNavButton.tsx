type PageNavButtonProps = {
  label: string;
  isActive: boolean;
};

const PageNavButton: React.FC<PageNavButtonProps> = ({ label, isActive }) => {
  const dynamicSpanStyle = isActive
    ? " bg-lightmode-text-col1 dark:bg-darkmode-text-col1 w-24"
    : " bg-lightmode-text-col2 w-12 dark:bg-darkmode-text-col2 group-hover:bg-lightmode-text-col1 dark:group-hover:bg-darkmode-text-col1 group-hover:w-24";
  const dynamicTextStyle = isActive
    ? " dark:text-darkmode-text-col1 text-lightmode-text-col1"
    : " text-lightmode-text-col2 dark:text-darkmode-text-col2 group-hover:text-lightmode-text-col1 dark:group-hover:text-darkmode-text-col1";
  return (
    <button className="flex gap-x-2 py-1.5 w-4/12 justify-start items-center group cursor-pointer">
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
