import { Outlet } from "react-router-dom";
import Header from "../components/Header";
function Layout_main() {
  return (
    <div className="">
      <Header />
      <div className="w-5/6 mx-auto ">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout_main;
