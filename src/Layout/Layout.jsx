import Footer from "@/components/Footer";
import Navbar from "../components/Navbar";
import { Outlet, useLocation } from "react-router-dom";

export default function Layout() {
  const location = useLocation(); //take the location of page (route)

  // List of paths where Footer should be shown
  const showFooterPaths = ["/about", "/projects", "/contact"];

  const shouldShowFooter = showFooterPaths.includes(location.pathname); //show footer when location route is same with the routes with are in showFooterPaths

  return (
    <div className="dark:bg-[#2a2a2a]">
      <Navbar />
      <Outlet />
      {shouldShowFooter && <Footer />}
    </div>
  );
}
