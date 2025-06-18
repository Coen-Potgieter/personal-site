import { useState } from "react";
import Header from "./components/Header";
import RenderPage from "./components/RenderPage";
import { availablePages } from "./data";

function App() {
  const [currentPage, setCurrentPage] = useState<string>(
    availablePages.PROJECTS,
  );

  function handleChangePage(newPage: string) {
    if (newPage === currentPage) return;
    setCurrentPage(newPage);
  }

  const headerHeight = 8;
  const sidePanelWidth = 10;
  return (
    <div className="flex flex-col h-screen bg-my-white1 font-tinos">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header
          height={headerHeight}
          width={sidePanelWidth}
          currentPage={currentPage}
          onPageChange={handleChangePage}
        />
      </div>

      <div
        className="flex-1 + mainPaddingStyle bg-my-white1"
        style={{
          marginTop: `${headerHeight * 1.2}vh`,
          marginLeft: `${sidePanelWidth * 0.5}vw`,
        }}
      >
        <RenderPage currentPage={currentPage} />
      </div>
    </div>
  );
}

export default App;
