import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0B2154] text-white pt-20 pb-10 px-6 border-t-8 border-yellow-500">
      {/* Grid Container: 1 col mobile, 2 col tablet, 4 col desktop */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* COLUMN 1: Brand & Socials */}
        <div className="space-y-6">
          <div className="flex flex-col items-start">
            <h2 className="text-3xl font-black text-yellow-500 italic tracking-tighter uppercase">
              MySchool
            </h2>
            <span className="bg-yellow-500 text-[#0B2154] text-[10px] font-bold px-2 py-0.5 mt-1 rounded uppercase tracking-widest">
              Est. Since 1991
            </span>
          </div>

          <p className="text-gray-300 leading-relaxed font-medium text-sm">
            A heritage of over 30 years in providing quality education. We don't just teach, we build the future leaders of our society.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 pt-2">
            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-yellow-500 hover:text-[#0B2154] transition-all duration-300 group">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-yellow-500 hover:text-[#0B2154] transition-all duration-300 group">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-yellow-500 hover:text-[#0B2154] transition-all duration-300 group">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* COLUMN 2: Navigation */}
        <div className="space-y-6">
          <h4 className="text-xl font-bold border-l-4 border-yellow-500 pl-4 uppercase tracking-widest">
            Navigation
          </h4>
          <ul className="grid grid-cols-1 gap-3 text-gray-300 font-bold uppercase text-xs tracking-tighter">
            <li className="hover:text-yellow-400 cursor-pointer transition-colors flex items-center gap-2">
              <span className="text-yellow-500">→</span> Home
            </li>
            <li className="hover:text-yellow-400 cursor-pointer transition-colors flex items-center gap-2">
              <span className="text-yellow-500">→</span> Academic Winners
            </li>
            <li className="hover:text-yellow-400 cursor-pointer transition-colors flex items-center gap-2">
              <span className="text-yellow-500">→</span> Admission Process
            </li>
            <li className="hover:text-yellow-400 cursor-pointer transition-colors flex items-center gap-2">
              <span className="text-yellow-500">→</span> Bus Route
            </li>
          </ul>
        </div>

        {/* COLUMN 3: Contact Info (NEW) */}
        <div className="space-y-6">
          <h4 className="text-xl font-bold border-l-4 border-yellow-500 pl-4 uppercase tracking-widest">
            Contact Us
          </h4>
          <ul className="space-y-4 text-gray-300 text-sm font-medium">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
              <span>
                Nawada Main Road, <br />
                Near Gandhi Maidan, <br />
                Nawada, Bihar - 805110
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-yellow-500 shrink-0" />
              <span>+91 99340 00000</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-yellow-500 shrink-0" />
              <span className="lowercase">contact@myschool.com</span>
            </li>
          </ul>
        </div>

        {/* COLUMN 4: Office Hours */}
        <div className="space-y-6">
          <h4 className="text-xl font-bold border-l-4 border-yellow-500 pl-4 uppercase tracking-widest">
            Office Hours
          </h4>
          <div className="bg-white/5 p-6 rounded-xl border border-white/10 text-center hover:border-yellow-500/50 transition-colors">
            <p className="text-yellow-400 font-black text-2xl uppercase">
              08:00 AM
            </p>
            <p className="text-white font-bold text-sm my-1">TO</p>
            <p className="text-yellow-400 font-black text-2xl uppercase">
              02:00 PM
            </p>
            <div className="w-full h-px bg-white/20 my-3"></div>
            <p className="text-[10px] text-gray-300 uppercase tracking-widest font-bold">
              Monday to Saturday
            </p>
          </div>
        </div>
      </div>

      {/* Copyright Footer */}
      <div className="container mx-auto mt-20 pt-8 border-t border-white/10 text-center">
        <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.3em]">
          © 2025 MYSCHOOL NAWADA | EST. 1991 | BUILT FOR THE NEXT GENERATION
        </p>
      </div>
    </footer>
  );
};

export default Footer;