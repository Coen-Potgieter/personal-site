import ProjectPage from "./ProjectPage";
import CVPage from "./CVPage";
import LogPage from "./LogPage";
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
    </>
  );
};

export default RenderPage;
