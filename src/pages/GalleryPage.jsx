import React from "react";
import { Link } from "react-router-dom";
import { CalendarDays, Camera, ArrowRight, Sparkles } from "lucide-react";

const COLORS = {
    primary: "#0B2154", // Royal Navy Blue
    secondary: "#FFD700", // Golden Yellow
    accent: "#D32F2F", // Red
};

// Dummy Data - Replace with real data later
const galleries = [
    {
        id: "annual-day-2023",
        name: "Annual Day Celebration 2023",
        date: "Dec 15, 2023",
        thumbnail: "https://images.unsplash.com/photo-1501290836512-b22f1864e891?auto=format&fit=crop&w=600&h=400&q=80",
        description: "A vibrant showcase of talent and creativity by our students during the Annual Day.",
        photoCount: 48,
    },
    {
        id: "sports-meet-2024",
        name: "Sports Meet 2024 Highlights",
        date: "Jan 22, 2024",
        thumbnail: "https://images.unsplash.com/photo-1560073577-94770258163f?auto=format&fit=crop&w=600&h=400&q=80",
        description: "Moments of athleticism, teamwork, and sportsmanship from our annual sports event.",
        photoCount: 72,
    },
    {
        id: "science-exhibition-2023",
        name: "Science Exhibition 2023",
        date: "Nov 10, 2023",
        thumbnail: "https://images.unsplash.com/photo-1542810634-71277d95ae35?auto=format&fit=crop&w=600&h=400&q=80",
        description: "Young scientists demonstrating innovative projects and experiments.",
        photoCount: 35,
    },
    {
        id: "founders-day-2024",
        name: "Founders' Day Assembly",
        date: "Apr 05, 2024",
        thumbnail: "https://images.unsplash.com/photo-1524178232363-2ce95c035385?auto=format&fit=crop&w=600&h=400&q=80",
        description: "Honoring our school's legacy with a special assembly and cultural program.",
        photoCount: 29,
    },
    {
        id: "art-fest-2024",
        name: "Inter-House Art Festival",
        date: "Mar 18, 2024",
        thumbnail: "https://images.unsplash.com/photo-1579783900882-c0d3ce7c8d76?auto=format&fit=crop&w=600&h=400&q=80",
        description: "Creative expressions and artistic masterpieces from our talented students.",
        photoCount: 64,
    },
    {
        id: "yoga-day-2023",
        name: "International Yoga Day",
        date: "June 21, 2023",
        thumbnail: "https://images.unsplash.com/photo-1582234380674-d4b8e23971c6?auto=format&fit=crop&w=600&h=400&q=80",
        description: "Promoting health and well-being through yoga and meditation.",
        photoCount: 41,
    },
];

const GalleryPage = () => {
    return (
        <div className="font-sans bg-gradient-to-br from-blue-50 via-yellow-50 to-red-50 min-h-screen selection:bg-yellow-300">

            <section className="py-5 px-6 container mx-auto">

                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-black text-blue-900 uppercase tracking-tighter">
                        Our Happy <span className="text-yellow-600">Memories</span>
                    </h2>
                    <div className="w-24 h-2 bg-red-600 mx-auto mt-4"></div>
                    <p className="text-xl md:text-2xl font-bold text-red-600 mt-4 flex items-center justify-center gap-3">
                        <Sparkles className="text-yellow-500" size={32} />
                        Moments That Make Us Smile!
                        <Sparkles className="text-yellow-500" size={32} />
                    </p>
                </div>
            </section>

            {/* FLASH NEWS */}
            <div className="bg-yellow-400 py-3 mb-10 flex items-center border-b-2 border-yellow-500">
                <div className="bg-red-600 text-white px-6 py-1 font-black z-10 shadow-lg ml-4 uppercase text-xs tracking-widest whitespace-nowrap">Hot News!</div>
                <marquee className="text-blue-900 font-bold uppercase text-xs tracking-wider">
                    🎉 Annual Day Photos are now live! | 🏃 Sports Meet 2024 albums updated | 🔬 Science Exhibition glimpses added | More fun coming soon!
                </marquee>
            </div>

            {/* POLAROID-STYLE GALLERY GRID */}
            <section className="container mx-auto px-6 pb-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                    {galleries.map((gallery, index) => (
                        <Link
                            to={`/photoes`}  // to={`/gallery/${gallery.id}`}
                            key={gallery.id}
                            className="group block transform transition-all duration-500 hover:scale-105 hover:-rotate-1"
                        >
                            <div
                                className={`relative bg-white p-6 pt-12 rounded-lg shadow-2xl hover:shadow-3xl border-8 border-white 
                  ${index % 2 === 0 ? "rotate-2" : "-rotate-3"} 
                  hover:rotate-0 transition-transform duration-500`}
                            >
                                {/* Photo */}
                                <div className="relative overflow-hidden rounded-md shadow-inner">
                                    <img
                                        src={gallery.thumbnail}
                                        alt={gallery.name}
                                        className="w-full h-64 object-cover rounded-md transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    {/* Overlay on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                                        <div className="flex items-center gap-3 text-white font-bold text-lg">
                                            <Camera size={28} className="text-yellow-400 drop-shadow" />
                                            <span>View {gallery.photoCount} Photos</span>
                                            <ArrowRight size={24} className="text-yellow-400" />
                                        </div>
                                    </div>
                                </div>

                                {/* Caption Area (Polaroid style) */}
                                <div className="mt-6 text-center">
                                    <h3 className="text-xl font-black text-blue-900 uppercase tracking-tight leading-tight">
                                        {gallery.name}
                                    </h3>
                                    <div className="flex items-center justify-center gap-2 mt-3 text-blue-700">
                                        <CalendarDays size={18} className="text-red-600" />
                                        <span className="font-semibold text-sm">{gallery.date}</span>
                                    </div>

                                    {/* Photo count badge */}
                                    <div className="inline-flex items-center gap-2 mt-4 bg-red-600 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                                        <Camera size={16} />
                                        {gallery.photoCount} Photos
                                    </div>
                                </div>

                                {/* Fun hover sparkles */}
                                <Sparkles
                                    size={30}
                                    className="absolute -top-4 -right-4 text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"
                                />
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default GalleryPage;