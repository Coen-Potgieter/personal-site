import { ThemeProvider } from "./context/theme-context";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import CVPage from "./pages/CVPage";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";
import LogPage from "./pages/LogPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <AboutPage /> },
      { path: "projects", element: <ProjectPage /> },
      { path: "cv", element: <CVPage /> },
      { path: "log", element: <LogPage /> },
    ],
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
