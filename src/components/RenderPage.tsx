import ProjectPage from "./pages/project/ProjectPage";
import CVPage from "./pages/cv/CVPage";
import LogPage from "./pages/log/LogPage";
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
