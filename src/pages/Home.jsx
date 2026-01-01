import React, { useState, useEffect, useCallback } from "react";
import {
  Trophy,
  ChevronRight,
  ChevronLeft,
  BookOpen,
  User,
  Bell,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  Star,
  Medal,
  Award,
  Palette
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// Assuming these are your local assets
import hero1 from "../assets/images/hero1.png";
import hero2 from "../assets/images/hero2.png";
import hero3 from "../assets/images/hero3.png";

const COLORS = {
  primary: "#0B2154",
  secondary: "#FFD700",
  accent: "#D32F2F",
  bgLight: "#F1F5F9",
};

const SLIDES = [
  {
    url: hero1,
    title: "20 Years of Nurturing Young Minds",
    subtitle: "A Second Home for Your Child (LKG to 8th Grade).",
  },
  {
    url: hero2,
    title: "Cultivating Character & Talent",
    subtitle: "Where Tradition Meets Modern Learning in Our Village.",
  },
];

const TOPPERS = [
  { name: "Aditya Kumar", class: "Class 8th", score: "98.4%", year: "2024" },
  { name: "Priya Singh", class: "Class 5th", score: "97.2%", year: "2024" },
  { name: "Rahul Verma", class: "Class 8th", score: "96.8%", year: "2024" },
  { name: "Sneha Raj", class: "Class 7th", score: "95.5%", year: "2024" },
];

const SPORTS_WINNERS = [
  { name: "Amit Raj", sport: "Kho-Kho Gold", img: "https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=400" },
  { name: "Sumit Roy", sport: "Athletics Champ", img: "https://images.unsplash.com/photo-1461891213886-4b0a9f7324b1?q=80&w=400" },
  { name: "Vikash Kr.", sport: "Kabaddi Captain", img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=400" },
];

const ART_WINNERS = [
  { name: "Ananya Roy", craft: "Painting 1st", img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=400" },
  { name: "Riya Kumari", craft: "Clay Modeling", img: "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?q=80&w=400" },
  { name: "Aryan Singh", craft: "Sketch Artist", img: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?q=80&w=400" },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="font-sans bg-white selection:bg-yellow-400">

      {/* 2. HERO SECTION */}
      <section className="relative h-[500px] md:h-[500px] overflow-hidden">
        {SLIDES.map((slide, index) => (
          <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}>
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.3)), url(${slide.url})` }} />
            <div className="relative h-full flex items-center container mx-auto px-6">
              <div className="max-w-3xl text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-xl leading-tight">{slide.title}</h1>
                <p className="text-xl md:text-2xl mb-8 text-yellow-400 font-bold border-l-4 border-yellow-500 pl-4 bg-black/20 inline-block py-2 pr-6">{slide.subtitle}</p>
                <div className="flex gap-4" onClick={() => navigate("/admission")}>
                  <button className="bg-yellow-500 cursor-pointer hover:bg-yellow-600 text-blue-900 px-8 py-3 rounded font-black text-sm tracking-widest uppercase transition-all shadow-xl">Admission Inquiry</button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Floating Notice Board */}
        <div className="absolute right-10 top-20 w-80 bg-white shadow-2xl rounded-lg hidden lg:block z-30 border-t-8 border-red-600 cursor-pointer" onClick={() => navigate("/notification")}>
          <div className="p-4 bg-gray-50 flex items-center gap-2 border-b">
            <Bell className="text-red-600" size={20} />
            <h3 className="font-bold text-blue-900 uppercase tracking-tighter text-sm">Announcement Hub</h3>
          </div>
          <div className="p-4 space-y-4 h-64 overflow-y-auto text-sm">
            <p className="border-b pb-2 hover:text-red-600 transition-colors font-medium">★ Final Exams starting from March 10, 2025.</p>
            <p className="border-b pb-2 hover:text-red-600 transition-colors font-medium">★ Result Day: March 25th (10AM to 1PM).</p>
            <p className="border-b pb-2 hover:text-red-600 transition-colors font-medium">★ Admission forms for Nursery-8th available at office.</p>
          </div>
        </div>

        <button onClick={prevSlide} className="absolute left-4 top-1/2 bg-black/40 p-2 text-white rounded-full z-20 hover:bg-yellow-500"><ChevronLeft /></button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 bg-black/40 p-2 text-white rounded-full z-20 hover:bg-yellow-500"><ChevronRight /></button>
      </section>

      {/* FLASH NEWS */}
      <div className="bg-yellow-400 py-3 flex items-center border-b-2 border-yellow-500">
        <div className="bg-red-600 text-white px-6 py-1 font-black z-10 shadow-lg ml-4 uppercase text-xs tracking-widest whitespace-nowrap">Flash News</div>
        <marquee className="text-blue-900 font-bold uppercase text-xs tracking-wider">
          New Admission Open 2025-26 | Best Middle School Award 2024 Winner | Limited Seats in LKG & UKG.
        </marquee>
      </div>

      {/* 5. ABOUT THE PRINCIPAL */}
      <section className="py-24 px-6 container mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <img src={hero3} alt="Principal" className="rounded-2xl shadow-2xl border-b-[12px] border-yellow-500 w-full object-cover h-[450px]" />
            <div className="absolute -bottom-6 -right-6 bg-blue-900 p-8 shadow-2xl rounded-lg">
              <p className="font-bold text-yellow-400 text-xl">Dr. Rajesh Kumar</p>
              <p className="text-xs text-white uppercase tracking-widest mt-1">School Principal (MA, B.Ed)</p>
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="text-red-600 font-bold uppercase tracking-[0.3em] text-xs">Principal's Desk</h4>
            <h2 className="text-4xl font-bold text-blue-950 leading-tight">Every Child Deserves <br /><span className="text-yellow-600 italic underline decoration-blue-900">A Great Beginning.</span></h2>
            <p className="text-gray-700 leading-relaxed text-lg italic">"We focus on 'Sanskars' alongside science. At this age (LKG to 8th), character building is as important as the syllabus."</p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <FeatureTag icon={<ShieldCheck className="text-green-600" />} text="Safe Campus" />
              <FeatureTag icon={<Clock className="text-green-600" />} text="Disciplined Life" />
              <FeatureTag icon={<BookOpen className="text-green-600" />} text="Modern Audio-Visuals" />
              <FeatureTag icon={<Trophy className="text-green-600" />} text="Value Education" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. ACADEMIC TOPPERS - NEW STYLE: MODERN TROPHY CASE */}
      <section className="py-24 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-blue-900 uppercase">Academic <span className="text-yellow-600">Stars</span></h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mt-2"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TOPPERS.map((topper, i) => (
              <div key={i} className="group relative bg-white p-2 shadow-xl hover:shadow-2xl transition-all">
                {/* Modern Image Frame */}
                <div className="relative aspect-[3/4] overflow-hidden bg-gray-200 border-b-4 border-blue-900 group-hover:border-yellow-500">
                  <img src="https://images.unsplash.com/photo-1544177259-19216cc759ab?q=80&w=400" alt={topper.name} className="w-full h-full object-cover" />
                  <div className="absolute top-2 right-2 bg-yellow-500 p-2 rounded-full shadow-lg">
                    <Trophy size={16} className="text-blue-900" />
                  </div>
                </div>
                {/* Stats Panel */}
                <div className="p-6 text-center">
                  <h3 className="text-lg font-black text-blue-900 uppercase tracking-tighter">{topper.name}</h3>
                  <p className="text-gray-500 text-xs font-bold mb-3">{topper.class} • {topper.year}</p>
                  <div className="bg-blue-900 text-yellow-400 py-2 font-black text-xl rounded-lg group-hover:bg-yellow-500 group-hover:text-blue-900 transition-colors">
                    {topper.score}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SPORTS WINNERS - Frame Style 2: Elegant Glassmorphism with Floating Badge */}
      <section className="py-20 bg-gray-50 overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="text-left">
              <h2 className="text-4xl font-bold text-blue-950 uppercase tracking-tighter">Sports Champions</h2>
              <div className="h-2 w-48 bg-red-600 mt-2"></div>
            </div>
            <p className="text-gray-500 font-bold hidden md:block uppercase tracking-widest text-xs">Winning at State & District levels</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {SPORTS_WINNERS.map((winner, i) => (
              <div key={i} className="relative group">
                {/* Sports Photo Frame */}
                <div className="relative p-2 bg-white shadow-2xl rounded-sm border-b-8 border-blue-900 transform group-hover:-rotate-2 transition-all">
                  <img src={winner.img} alt={winner.name} className="w-full h-80 object-cover grayscale group-hover:grayscale-0 transition-all" />
                  <div className="absolute -top-5 -right-5 bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                    <Medal className="text-blue-900" size={32} />
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-2xl font-black text-blue-950">{winner.name}</h3>
                  <p className="text-red-600 font-bold uppercase tracking-widest text-sm">{winner.sport}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute top-0 right-0 opacity-5 -translate-y-20"><Medal size={400} /></div>
      </section>

      {/* 8. ART & CRAFT WINNERS - Frame Style 3: Artistic Canvas Frame */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Palette className="mx-auto text-pink-600 mb-4" size={50} />
            <h2 className="text-4xl font-bold text-blue-950 uppercase tracking-tighter">Art & Creativity Gallery</h2>
            <p className="text-gray-400 font-medium">Recognizing our young artists and creators</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ART_WINNERS.map((winner, i) => (
              <div key={i} className="bg-yellow-50 p-6 rounded-3xl border-2 border-dashed border-yellow-400 hover:bg-yellow-100 transition-colors">
                {/* Artistic Frame */}
                <div className="bg-white p-4 shadow-xl rotate-3 group-hover:rotate-0 transition-transform mb-6 border-8 border-[#f4f1ea]">
                  <img src={winner.img} alt={winner.name} className="w-full h-64 object-cover rounded-md" />
                </div>
                <div className="text-center">
                  <p className="text-xs font-black text-yellow-600 uppercase tracking-[0.2em] mb-2">Young Creator</p>
                  <h3 className="text-2xl font-serif font-bold text-blue-950">{winner.name}</h3>
                  <p className="text-blue-800 font-bold text-sm mt-1">{winner.craft}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. ADMISSION CTA - FUNCTIONAL WITH CLICK-TO-CALL */}
      <section className="py-16 bg-yellow-500 relative overflow-hidden">
        {/* Decorative Background Icon */}
        <div className="absolute top-0 right-0 opacity-10 -translate-y-10 translate-x-10 pointer-events-none">
          <Award size={300} />
        </div>

        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between relative z-10 cursor-pointer" onClick={() => navigate("/admission")}>
          <div className="text-blue-950 mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-black mb-2 uppercase tracking-tighter">
              Admission Inquiry 2025
            </h2>
            <p className="text-lg font-bold opacity-80 underline decoration-blue-950 decoration-2 underline-offset-4">
              Limited slots for Nursery, LKG, and Classes 1 to 8.
            </p>
          </div>

          {/* CLICK TO CALL BUTTON */}
          <a
            href="tel:+916203594022"
            className="group"
          >
            <button className="bg-blue-950 text-white px-12 py-5 rounded-full font-black text-lg tracking-widest uppercase hover:bg-white hover:text-blue-950 transition-all duration-300 shadow-[0_20px_50px_rgba(8,24,61,0.3)] flex items-center gap-4 group-hover:scale-105 active:scale-95">
              Call Now
              <Phone
                size={24}
                className="group-hover:rotate-12 transition-transform fill-current"
              />
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

// Helper Components
const StatItem = ({ val, label }) => (
  <div>
    <div className="text-5xl font-black text-yellow-400 tracking-tighter">{val}</div>
    <div className="uppercase text-[10px] font-bold tracking-[0.2em] mt-2 opacity-80">{label}</div>
  </div>
);

const FeatureTag = ({ icon, text }) => (
  <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-lg font-bold text-blue-900 shadow-sm border border-blue-100">
    {icon} <span>{text}</span>
  </div>
);

export default Home;