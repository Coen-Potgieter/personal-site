import { useState } from "react";
import Header from "./components/Header";
import RenderPage from "./components/RenderPage";
import { availablePages } from "./data/site_data";
import { ThemeProvider } from "./context/theme-context";
import SideBar from "./components/headerComps/desktop/SideBar";

function App() {
  const [currentPage, setCurrentPage] = useState<string>(
    availablePages.PROJECTS,
  );

  function handleChangePage(newPage: string) {
    if (newPage === currentPage) return;
    setCurrentPage(newPage);
  }

  const sidePanelWidth = 15;

  return (
    <ThemeProvider>
      <div className="flex flex-col h-screen bg-my-white1 dark:bg-my-black1 font-tinos">
        {currentPage != availablePages.ABOUT && (
          <SideBar width={sidePanelWidth} />
        )}
        <Header currentPage={currentPage} onPageChange={handleChangePage} />

        <div className="flex-1 bg-my-white1 dark:bg-my-black1 z-20">
          <RenderPage currentPage={currentPage} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
