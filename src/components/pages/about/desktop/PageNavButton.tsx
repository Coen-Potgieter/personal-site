type PageNavButtonProps = {
  label: string;
  isActive: boolean;
};

const PageNavButton: React.FC<PageNavButtonProps> = ({ label, isActive }) => {
  const dynamicButtonStyle = isActive
    ? " w-full text-my-light-text1"
    : " hover:w-full text-my-light-text2 hover:text-my-light-text1";
  const dynamicTextStyle = isActive
    ? " w-full text-my-light-text1"
    : " hover:w-full text-my-light-text2 hover:text-my-light-text1";
  return (
    <button
      className={
        `flex gap-x-2 w-3/6 justify-start items-center transition-all ease-in-out duration-100` +
        dynamicButtonStyle
      }
    >
      <span className="bg-white h-1 w-2/12"></span>
      <h1 className={`` + dynamicTextStyle}>{label}</h1>
    </button>
  );
};

export default PageNavButton;
