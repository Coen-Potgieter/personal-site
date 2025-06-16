import Header from "./components/Header";
import RenderPage from "./components/RenderPage";
function App() {
  const headerHeight = 10;
  return (
    <div className="flex flex-col h-screen">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header height={headerHeight} />
      </div>

      <div
        className="flex-1 + mainPaddingStyle"
        style={{ marginTop: `${headerHeight * 1.2}vh` }}
      >
        <RenderPage />
      </div>
    </div>
  );
}

export default App;
