import { Outlet } from "react-router-dom";
import Header from "../components/Header";
function Layout_main() {
  return (
    <div className="bg-gray-200">
      <Header />
      <div className="w-5/6 mx-auto h-screen">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout_main;
