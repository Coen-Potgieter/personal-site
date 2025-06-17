import ProjectPage from "./ProjectPage";
import { availablePages } from "../data";

type RenderPageProps = {
  currentPage: string;
};
const RenderPage: React.FC<RenderPageProps> = ({ currentPage }) => {
  return (
    <>
      {currentPage === availablePages.PROJECTS && <ProjectPage />}
      {currentPage === availablePages.CV && <p>coming soon</p>}
      {currentPage === availablePages.ABOUT && <p>coming soon</p>}
    </>
  );
};

export default RenderPage;
