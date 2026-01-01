import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";

const COLORS = {
  primary: "#0B2154",      // Royal Navy Blue
  secondary: "#FFD700",    // Golden Yellow
  accent: "#D32F2F",       // Red
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Academics", path: "/academics" },
    { name: "Admission", path: "/admission" },
    { name: "Gallery", path: "/gallery" },
    { name: "Result", path: "/result" },
    { name: "Notification", path: "/notification" },
  ];

  return (
    // ✅ CHANGE HERE: Used 'sticky' instead of 'fixed'. 
    // This keeps the header in the flow (content won't go behind it) but sticks it to top on scroll.
    <header className="w-full z-[100] sticky top-0 font-sans shadow-2xl">

      {/* --- 1. MAIN NAVIGATION (Premium Blue Theme) --- */}
      <nav
        className={`w-full transition-all duration-500 ${isScrolled
          ? "bg-[#041c4b] py-2 shadow-xl"
          : "bg-[#041c4b] py-5 md:py-6"
          }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* LOGO SECTION */}
          <Link to="/" className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded bg-white flex items-center justify-center text-[#0B2154] font-black text-xl shadow-[0_0_15px_rgba(255,255,255,0.3)] group-hover:scale-105 transition-transform">
              MS
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-black tracking-tighter text-white leading-none">
                MYSCHOOL
              </h1>
              <div className="h-0.5 w-full bg-yellow-400 mt-1 origin-left group-hover:scale-x-110 transition-transform"></div>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-yellow-400/90 block mt-1">
                Excellence in Education
              </span>
            </div>
          </Link>

          {/* DESKTOP MENU (White text for contrast) */}
          <div className="hidden lg:flex items-center gap-8 font-bold text-[12px] uppercase tracking-widest">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`transition-all relative group py-2 ${location.pathname === link.path
                  ? "text-yellow-400"
                  : "text-white/80 hover:text-white"
                  }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-yellow-400 transition-all duration-300 ${location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                ></span>
              </Link>
            ))}
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="lg:hidden p-2 text-white bg-white/10 rounded-lg"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* --- 2. INFO BAR (Matching Theme) --- */}
      <div className="bg-[#08183d] text-white/90 py-2 px-6 hidden md:block border-t border-white/5">
        <div className="container mx-auto flex justify-between items-center text-[10px] font-bold tracking-widest uppercase">
          <div className="flex gap-10">
            <span className="flex items-center gap-2 hover:text-yellow-400 transition-colors cursor-pointer">
              <Phone size={13} className="text-yellow-400" /> +91 62035 XXXXX
            </span>
            <span className="flex items-center gap-2 hover:text-yellow-400 transition-colors cursor-pointer">
              <MapPin size={13} className="text-yellow-400" /> Patna, Bihar
            </span>
            <span className="flex items-center gap-2 hover:text-yellow-400 transition-colors cursor-pointer border-l border-white/10 pl-10">
              <Mail size={13} className="text-yellow-400" /> info@myschool.com
            </span>
          </div>
          <div>
            <span className="bg-yellow-400 text-[#0B2154] px-3 py-1 rounded text-[9px] font-black animate-pulse">
              ADMISSIONS 2025-26 OPEN
            </span>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#0B2154] border-t border-white/10 p-8 space-y-6 shadow-2xl z-[101] animate-in slide-in-from-top-5 duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`block font-black text-2xl uppercase tracking-tighter ${location.pathname === link.path ? "text-yellow-400" : "text-white"
                }`}
            >
              {link.name}
            </Link>
          ))}

          <div className="pt-6 border-t border-white/10 space-y-4">
            <div className="flex items-center gap-4 text-white/70 font-bold text-sm">
              <Phone size={18} className="text-yellow-400" /> +91 98765 43210
            </div>
            <Link to="/admission" className="block">
              <button className="w-full bg-red-600 text-white font-black py-4 rounded-xl uppercase tracking-widest shadow-xl active:scale-95 transition-transform">
                Enroll Now
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;