type ModalPageTitleProps = {
  isCurrentPage: boolean;
  children: React.ReactNode;
};

const ModalPageTitle: React.FC<ModalPageTitleProps> = ({
  isCurrentPage,
  children,
}) => {
  const acvtiveStyle = isCurrentPage ? " bg-transparant" : "";
  return <div className={`` + acvtiveStyle}>{children}</div>;
};

export default ModalPageTitle;
