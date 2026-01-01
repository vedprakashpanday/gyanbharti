import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Academics from "./pages/Academics";
import Admission from "./pages/Admission";
import GalleryPage from "./pages/GalleryPage";
import GalleryDetailPage from "./pages/GalleryDetailPage";
import ResultReportPage from "./pages/ResultReportPage";
import Notification from "./pages/Notification";

// Small helper to reset scroll position on page change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      {/* Ensures the user starts at the top of every new page */}
      <ScrollToTop />

      {/* Header stays visible on all pages */}
      <Header />

      {/* Main content changes based on the URL */}
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/photoes" element={<GalleryDetailPage />} />
          <Route path="/result" element={<ResultReportPage />} />
          <Route path="/notification" element={<Notification />} />

          {/* Optional: Add a 404 Not Found route */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      {/* Footer stays visible on all pages */}
      <Footer />
    </Router>
  );
}

export default App;
