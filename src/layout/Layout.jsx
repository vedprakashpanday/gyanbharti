import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "../components/ScrollToTop";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      {/* 1. Header is now fixed at the top */}
      <div className="fixed top-0 left-0 w-full z-[1000]">
        <Header />
      </div>

      {/* 2. Add padding top to prevent content from hiding under header */}
      {/* Adjust pt-20 based on your actual Header height */}
      <main className="flex-grow pt-20">
        <Outlet />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Layout;