import { createPortal } from "react-dom";
import { useEffect } from "react";
import { availablePages } from "../../../data/site_data";
import ModalPageButton from "./ModalPageButton";
import GitHubOctoCatSVG from "../../../assets/GitHubOctoCatSVG";
import DocumentSVG from "../../../assets/DocumentSVG";
import LogoSVG from "../../../assets/LogoSVG";

type MobileModalProps = {
  currentPage: string;
  onPageChange: (newPage: string) => void;
  isOpen: boolean;
  closeModal: () => void;
};

const MobileModal: React.FC<MobileModalProps> = ({
  currentPage,
  onPageChange,
  isOpen,
  closeModal,
}) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [isOpen]);

  const moveToPage = (newPage: string) => {
    closeModal();
    onPageChange(newPage);
  };

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed w-full h-screen top-[6vh] z-50 flex">
      {/* Modal content */}
      <div className="relative z-10 w-full h-full bg-my-white1 dark:bg-my-black1 text-black dark:text-white p-4">
        <div className="flex flex-col gap-4 justify-center items-center h-[60vh] font-tinos">
          {/* Projects Button */}
          <ModalPageButton
            onTap={() => moveToPage(availablePages.PROJECTS)}
            label="Projects"
            isCurrentPage={availablePages.PROJECTS === currentPage}
            Icon={<GitHubOctoCatSVG size={40} />}
          />
          {/* CV Button */}
          <ModalPageButton
            onTap={() => moveToPage(availablePages.CV)}
            label="CV"
            isCurrentPage={availablePages.CV === currentPage}
            Icon={<DocumentSVG size={35} />}
          />
          {/* About Button */}
          <ModalPageButton
            onTap={() => moveToPage(availablePages.ABOUT)}
            label="About"
            isCurrentPage={availablePages.ABOUT === currentPage}
            Icon={
              <LogoSVG
                size={35}
                className="text-my-orange1 dark:text-my-green1"
              />
            }
          />
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default MobileModal;
