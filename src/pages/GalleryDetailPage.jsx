import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
    ArrowLeft, Download, Heart, ZoomIn, Camera,
    Sparkles, X, ChevronLeft, ChevronRight, CalendarDays
} from "lucide-react";

// Local Assets
import hero1 from "../assets/images/hero1.png";
import hero2 from "../assets/images/hero2.png";
import hero3 from "../assets/images/hero3.png";
import hero4 from "../assets/images/hero4.png";
import hero5 from "../assets/images/hero5.png";

// Mixed Data Source
const mixedImages = [
    hero1,
    "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80",
    hero2,
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
    hero3,
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
    hero4,
    "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
    hero5,
    "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
];

const GalleryDetailPage = () => {
    const { id } = useParams();
    const [selectedImg, setSelectedImg] = useState(null);
    const [likedPhotos, setLikedPhotos] = useState({});

    const galleryName = id ? id.replace(/-/g, ' ') : "Annual Day Celebration";

    // --- DOWNLOAD LOGIC ---
    const handleDownload = async (e, imageUrl, index) => {
        e.stopPropagation(); // Prevent opening lightbox/modal
        try {
            const response = await fetch(imageUrl);
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = `school-memory-${index + 1}.jpg`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error("Download failed:", error);
            // Fallback for local assets or failed fetches
            const link = document.createElement("a");
            link.href = imageUrl;
            link.download = `school-memory-${index + 1}.jpg`;
            link.click();
        }
    };

    const toggleLike = (e, index) => {
        e.stopPropagation();
        setLikedPhotos(prev => ({ ...prev, [index]: !prev[index] }));
    };

    const openLightbox = (index) => setSelectedImg(index);
    const closeLightbox = () => setSelectedImg(null);

    const showNext = (e) => {
        e.stopPropagation();
        setSelectedImg((selectedImg + 1) % mixedImages.length);
    };

    const showPrev = (e) => {
        e.stopPropagation();
        setSelectedImg((selectedImg - 1 + mixedImages.length) % mixedImages.length);
    };

    return (
        <div className="font-sans bg-[#FDFCF0] min-h-screen pb-20 selection:bg-yellow-300 overflow-x-hidden">

            {/* LIGHTBOX MODAL */}
            {selectedImg !== null && (
                <div
                    className="fixed inset-0 z-[100] bg-blue-950/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300"
                    onClick={closeLightbox}
                >
                    <button className="absolute top-5 right-5 text-white hover:text-yellow-400 transition-colors z-[110]">
                        <X size={40} strokeWidth={3} />
                    </button>

                    <button onClick={showPrev} className="absolute left-4 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all">
                        <ChevronLeft size={40} />
                    </button>

                    <div className="relative max-w-5xl w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={mixedImages[selectedImg]}
                            className="max-h-[85vh] max-w-full object-contain rounded-lg shadow-2xl border-4 border-white/20"
                            alt="Full view"
                        />
                        <div className="absolute -bottom-16 flex items-center gap-6">
                            <span className="text-white font-black text-xl uppercase tracking-widest">
                                Moment {selectedImg + 1} / {mixedImages.length}
                            </span>
                            <button
                                onClick={(e) => handleDownload(e, mixedImages[selectedImg], selectedImg)}
                                className="bg-yellow-400 text-blue-900 p-3 rounded-full hover:scale-110 transition-transform shadow-lg"
                                title="Download this photo"
                            >
                                <Download size={24} />
                            </button>
                        </div>
                    </div>

                    <button onClick={showNext} className="absolute right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all">
                        <ChevronRight size={40} />
                    </button>
                </div>
            )}

            {/* HEADER NAVIGATION */}
            <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b-4 border-yellow-400 px-6 py-4">
                <div className="container mx-auto flex items-center justify-between">
                    <Link to="/gallery" className="flex items-center gap-2 text-blue-900 font-black uppercase text-sm hover:text-red-600 transition-colors group">
                        <ArrowLeft size={24} className="bg-yellow-400 p-1 rounded-full shadow-md group-hover:-translate-x-1 transition-transform" />
                        Back to Albums
                    </Link>
                    <div className="flex items-center gap-4">
                        <span className="bg-red-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-tighter animate-pulse">
                            Live Gallery
                        </span>
                    </div>
                </div>
            </nav>

            {/* HERO SECTION */}
            <section className="pt-12 pb-8 px-6 text-center relative overflow-hidden">
                <Sparkles className="absolute top-10 right-10 text-yellow-500/20 animate-spin-slow" size={120} />
                <Camera className="absolute -bottom-10 -left-10 text-blue-900/5 -rotate-12" size={200} />

                <h1 className="text-4xl md:text-7xl font-black text-blue-900 uppercase tracking-tighter mb-4 drop-shadow-sm">
                    {galleryName}
                </h1>

                <div className="flex flex-wrap items-center justify-center gap-6 text-red-600 font-bold text-lg">
                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-2xl shadow-sm border-2 border-red-50">
                        <CalendarDays size={20} />
                        <span>Dec 2023 - Jan 2024</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-2xl shadow-sm border-2 border-red-50">
                        <Camera size={20} />
                        <span>Mixed Collection</span>
                    </div>
                </div>
                <div className="w-40 h-2 bg-yellow-400 mx-auto mt-8 rounded-full shadow-inner"></div>
            </section>

            {/* MASONRY PHOTO GRID */}
            <section className="container mx-auto px-6 mt-10">
                <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                    {mixedImages.map((img, index) => (
                        <div
                            key={index}
                            onClick={() => openLightbox(index)}
                            className="relative group break-inside-avoid rounded-[2.5rem] overflow-hidden border-8 border-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer"
                        >
                            <img
                                src={img}
                                alt={`Moment ${index}`}
                                className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* HOVER OVERLAY */}
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 p-8 flex flex-col justify-end">
                                <div className="flex items-center justify-between transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <div className="flex gap-3">
                                        {/* <button
                                            onClick={(e) => toggleLike(e, index)}
                                            className={`p-4 rounded-2xl shadow-lg transition-all active:scale-75 ${likedPhotos[index] ? 'bg-red-500 text-white scale-110' : 'bg-white text-gray-800 hover:bg-red-50'}`}
                                        >
                                            <Heart size={24} fill={likedPhotos[index] ? "currentColor" : "none"} />
                                        </button> */}
                                        <button
                                            onClick={(e) => handleDownload(e, img, index)}
                                            className="p-4 bg-white text-gray-800 rounded-2xl shadow-lg hover:bg-yellow-400 transition-colors"
                                            title="Download"
                                        >
                                            <Download size={24} />
                                        </button>
                                    </div>
                                    <div className="bg-yellow-400 p-4 rounded-2xl shadow-lg text-blue-900">
                                        <ZoomIn size={24} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* COMPACT CTA FOOTER */}
            <section className="container mx-auto px-6 mt-20 mb-10 text-center">
                <div className="bg-[#0B2154] py-10 px-6 rounded-[40px] shadow-xl relative overflow-hidden border-b-4 border-blue-950">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full blur-2xl"></div>

                    <div className="relative z-10">
                        <Sparkles className="text-yellow-400 mx-auto mb-4 animate-pulse" size={32} />
                        <h3 className="text-2xl md:text-3xl font-black text-white uppercase mb-4 tracking-tight">
                            Treasured <span className="text-yellow-400">School</span> Days
                        </h3>
                        <div className="mb-8 space-y-2">
                            <p className="text-yellow-400 font-serif text-xl md:text-2xl italic">
                                "Ye lamhe kal bahut yaad aayenge..."
                            </p>
                            <p className="text-blue-100 font-medium text-sm md:text-base opacity-80 max-w-lg mx-auto">
                                Capturing today’s laughter to keep your school memories alive forever!
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <Link
                                to="/gallery"
                                className="flex items-center gap-2 bg-yellow-400 text-blue-900 px-8 py-3 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-white transition-all shadow-[0_4px_0_0_#a16207] active:translate-y-1 active:shadow-none"
                            >
                                View All Memories
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GalleryDetailPage;