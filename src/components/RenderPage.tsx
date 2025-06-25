import ProjectPage from "./ProjectPage";
import CVPage from "./CVPage";
import LogPage from "./LogPage";
import MobileModal from "./MobileModal";
import { availablePages } from "../data";

type RenderPageProps = {
  currentPage: string;
};
const RenderPage: React.FC<RenderPageProps> = ({ currentPage }) => {
  return (
    <>
      {currentPage === availablePages.PROJECTS && <ProjectPage />}
      {currentPage === availablePages.CV && <CVPage />}
      {currentPage === availablePages.ABOUT && <p>coming soon</p>}
      {currentPage === availablePages.LOG && <LogPage />}
      {currentPage === availablePages.MOBILE_MODAL && <MobileModal />}
    </>
  );
};

export default RenderPage;
