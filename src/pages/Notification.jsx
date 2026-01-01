import React, { useState } from "react";
import {
    BellRing,
    Calendar,
    CheckCircle2,
    Clock,
    Trophy,
    Music,
    FileText,
    ChevronDown,
    ChevronUp,
    Sparkles,
    School,
    Palmtree,
    Palette,
    Megaphone
} from "lucide-react";

const Notifications = () => {
    const [expandedId, setExpandedId] = useState(null);

    const toggleDetails = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    const notificationList = [
        {
            id: 1,
            title: "Saraswati Pooja Celebration",
            message: "Join us for the divine blessings of Maa Saraswati. Cultural programs and Prasad distribution will follow the Puja. Students are requested to wear traditional ethnic attire and assemble in the main hall by 8:30 AM.",
            date: "Feb 14, 2025",
            type: "Cultural",
            status: "Upcoming",
            icon: <Music />,
            color: "bg-yellow-400"
        },
        {
            id: 2,
            title: "Final Examination Schedule",
            message: "The date sheet for the Annual Examinations (Session 2024-25) is now live. Exams will commence from March 5th. Please ensure all library books are returned and dues are cleared before Feb 25th to receive Admit Cards.",
            date: "Mar 01, 2025",
            type: "Exam",
            status: "Upcoming",
            icon: <FileText />,
            color: "bg-red-600"
        },
        {
            id: 3,
            title: "Scholarship Test Results",
            message: "Results for the Merit-Cum-Means Scholarship Test held in January are out. Top 10 rankers from each grade are eligible for a 50% tuition fee waiver. Check the list at the admin office.",
            date: "Feb 05, 2025",
            type: "Academic",
            status: "Completed",
            icon: <Trophy />,
            color: "bg-blue-900"
        },
        {
            id: 4,
            title: "Summer Camp Registration",
            message: "Enrollments are open for 'Creative Minds' Summer Camp 2025. Activities include Robotics, Swimming, Vedic Maths, and Theatre. Early bird discounts available until April 10th.",
            date: "Apr 15, 2025",
            type: "Extra-Curricular",
            status: "Upcoming",
            icon: <Palmtree />,
            color: "bg-green-500"
        },
        {
            id: 5,
            title: "New School Uniform Policy",
            message: "Starting from the new session (April 2025), a revised uniform pattern will be introduced for Middle and Senior wings. Samples are displayed in the school reception area for parents to view.",
            date: "Jan 28, 2025",
            type: "Notice",
            status: "Completed",
            icon: <Palette />,
            color: "bg-purple-600"
        },
        {
            id: 6,
            title: "Parent-Teacher Meeting (PTM)",
            message: "The final PTM for this academic year is scheduled for Saturday. Discuss your ward's progress and collect the graded answer scripts of the pre-final evaluations.",
            date: "Feb 22, 2025",
            type: "Meeting",
            status: "Upcoming",
            icon: <Megaphone />,
            color: "bg-orange-500"
        }
    ];

    return (
        <main className="font-sans bg-white min-h-screen">

            <section className="py-5 px-6 container mx-auto">
                <div className="text-center mb-5">
                    <h2 className="text-4xl md:text-5xl font-black text-blue-900 uppercase tracking-tighter">
                        Notice <span className="text-yellow-600">Board</span>
                    </h2>
                    <div className="w-24 h-2 bg-red-600 mx-auto mt-4"></div>
                </div>
            </section>


            {/* NOTIFICATIONS LIST */}
            <section className="py-20 px-6 container mx-auto max-w-5xl">
                <div className="space-y-12 relative">
                    {/* Vertical Timeline Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gray-100 -translate-x-1/2 hidden md:block"></div>

                    {notificationList.map((item, index) => {
                        const isExpanded = expandedId === item.id;

                        return (
                            <div
                                key={item.id}
                                className={`relative flex flex-col md:flex-row items-start gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Center Timeline Icon */}
                                <div className="absolute left-0 md:left-1/2 w-12 h-12 bg-white border-4 border-blue-900 rounded-full z-20 -translate-x-1/2 hidden md:flex items-center justify-center text-blue-900 shadow-xl mt-10">
                                    {item.status === "Upcoming" ? <Clock size={20} className="animate-pulse" /> : <CheckCircle2 size={20} />}
                                </div>

                                {/* Content Card */}
                                <div className="w-full md:w-[45%]">
                                    <div className={`bg-white p-8 rounded-[2.5rem] shadow-2xl border-t-[10px] transition-all duration-300 transform ${isExpanded ? "scale-[1.02]" : "hover:scale-[1.01]"
                                        } ${item.status === "Upcoming" ? "border-red-600" : "border-blue-900 opacity-90"
                                        }`}>

                                        <div className="flex justify-between items-start mb-6">
                                            <div className={`${item.color} p-4 rounded-2xl text-white shadow-lg transform -rotate-6`}>
                                                {React.cloneElement(item.icon, { size: 28 })}
                                            </div>
                                            <div className="flex flex-col items-end gap-2">
                                                <span className={`px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${item.status === "Upcoming" ? "bg-red-50 text-red-600 border border-red-100" : "bg-gray-100 text-gray-500"
                                                    }`}>
                                                    {item.status}
                                                </span>
                                            </div>
                                        </div>

                                        <p className="text-xs font-black text-yellow-600 uppercase tracking-widest mb-2 flex items-center gap-2">
                                            <Calendar size={14} /> {item.date}
                                        </p>

                                        <h3 className="text-2xl font-black text-blue-900 uppercase tracking-tighter mb-4 leading-tight">
                                            {item.title}
                                        </h3>

                                        {/* Expanded Detail Box */}
                                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? "max-h-96 opacity-100 mb-6" : "max-h-0 opacity-0"
                                            }`}>
                                            <div className="p-5 bg-gray-50 rounded-3xl border-l-4 border-red-600">
                                                <p className="text-blue-900 font-bold text-sm leading-relaxed">
                                                    {item.message}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Opposing Footer Actions */}
                                        <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                                            <div className="flex flex-col">
                                                <span className="text-[9px] font-black text-blue-900/30 uppercase tracking-[0.2em]">Category</span>
                                                <span className="text-[11px] font-black text-blue-900 uppercase">{item.type}</span>
                                            </div>

                                            <button
                                                onClick={() => toggleDetails(item.id)}
                                                className={`flex items-center gap-2 font-black text-xs uppercase transition-all px-4 py-2 rounded-xl ${isExpanded ? "bg-blue-900 text-white shadow-lg" : "text-red-600 hover:bg-red-50"
                                                    }`}
                                            >
                                                {isExpanded ? (
                                                    <>Close Details <ChevronUp size={18} /></>
                                                ) : (
                                                    <>View Details <ChevronDown size={18} /></>
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="hidden md:block md:w-[45%]"></div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* FOOTER CTA */}
            <section className="bg-blue-900 py-12 px-6 text-center text-white border-t-8 border-yellow-400">
                <div className="container mx-auto">
                    <School className="mx-auto mb-4 text-yellow-400" size={40} />
                    <h3 className="text-2xl font-black uppercase tracking-tighter">MYSCHOOL Academic Portal</h3>
                    <p className="text-white/50 text-[10px] font-black mt-2 uppercase tracking-[0.4em]">Integrated Learning Management System v2.0</p>
                </div>
            </section>
        </main>
    );
};

export default Notifications;