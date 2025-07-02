import Header from "../components/agnostic/Header";
import SideBar from "../components/desktop/header/SideBar";
import { Outlet, useLocation } from "react-router-dom";

type RootProps = {};

const Root: React.FC<RootProps> = () => {
  const location = useLocation();
  const isRootPath = location.pathname === "/";
  return (
    <div className="w-full h-full bg-my-col2">
      <Header />
      {!isRootPath && <SideBar />}
      {/* Page content */}

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
