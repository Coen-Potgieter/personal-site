import { createPortal } from "react-dom";
import { useEffect } from "react";
import { availablePages } from "../data";
import ModalPageTitle from "./mobileComps/ModalPageTitle";
import GitHubOctoCatSVG from "../assets/GitHubOctoCatSVG";

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
        <div className="flex flex-col gap-4 justify-center items-center">
          {/* Projects Button */}
          <button onClick={() => moveToPage(availablePages.PROJECTS)}>
            <ModalPageTitle
              isCurrentPage={currentPage === availablePages.PROJECTS}
            >
              <GitHubOctoCatSVG />
            </ModalPageTitle>
          </button>
          {/* CV Button */}
          <button onClick={() => moveToPage(availablePages.CV)}>
            <ModalPageTitle isCurrentPage={currentPage === availablePages.CV}>
              <p>CV</p>
            </ModalPageTitle>
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default MobileModal;
