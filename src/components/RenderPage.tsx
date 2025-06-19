import ProjectPage from "./ProjectPage";
import CVPage from "./CVPage";
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
    </>
  );
};

export default RenderPage;
