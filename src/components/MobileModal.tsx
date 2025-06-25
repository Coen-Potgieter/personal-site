import { createPortal } from "react-dom";
import { useEffect } from "react";

type MobileModalProps = {
  isOpen: boolean;
};

const MobileModal: React.FC<MobileModalProps> = ({ isOpen }) => {
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
        <div className="flex flex-col gap-4 justify-center items-center">
          <button className="text-xl">Projects</button>
          <button className="text-xl">Log</button>
          <button className="text-xl">CV</button>
          <button className="text-xl">IDK</button>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default MobileModal;
