import { createPortal } from "react-dom";
import { useEffect } from "react";
import ModalPageButton from "./ModalPageButton";
import GitHubOctoCatSVG from "../../../assets/svg/GitHubOctoCatSVG";
import DocumentSVG from "../../../assets/svg/DocumentSVG";
import LogoSVG from "../../../assets/svg/LogoSVG";

type MobileModalProps = {
  isOpen: boolean;
  closeModal: () => void;
};

const MobileModal: React.FC<MobileModalProps> = ({ isOpen, closeModal }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed w-full h-screen top-[6vh] z-50 flex">
      {/* Modal content */}
      <div className="relative z-10 w-full h-full bg-my-white1 dark:bg-my-black1 text-black dark:text-white p-4">
        <div className="flex flex-col gap-4 justify-center items-center h-[60vh] font-tinos">
          {/* About Button */}
          <ModalPageButton
            label="About"
            endpoint="/"
            Icon={
              <LogoSVG
                size={35}
                className="text-my-orange1 dark:text-my-green1"
              />
            }
            onClick={closeModal}
          />
          {/* Projects Button */}
          <ModalPageButton
            label="Projects"
            endpoint="projects/"
            Icon={<GitHubOctoCatSVG size={40} />}
            onClick={closeModal}
          />
          {/* CV Button */}
          <ModalPageButton
            label="CV"
            endpoint="cv/"
            Icon={<DocumentSVG size={35} />}
            onClick={closeModal}
          />
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default MobileModal;
