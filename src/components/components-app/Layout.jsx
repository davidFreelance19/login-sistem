import { Outlet } from "react-router-dom";
import Aside from "./Aside";
import Footer from "./Footer";
const Layout = () => {
  return (
    <div className="bg-[#1D1D1D] overflow-x-hidden">
      <Aside />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
