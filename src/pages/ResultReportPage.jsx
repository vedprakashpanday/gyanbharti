import React, { useState } from "react";
import AchievementCard from "../components/AchievementCard";
import { toast, ToastContainer } from "react-toastify";
import { ArrowLeft, Printer, BookOpen, ChevronRight, Award } from "lucide-react";

const ResultReportPage = () => {
    const [showResult, setShowResult] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [formData, setFormData] = useState({
        rollNo: "",
        studentName: "",
        studentClass: "",
        fatherName: ""
    });

    // Expanded Subject List
    const academicResults = [
        { subject: "Mathematics", theory: 78, practical: 20, total: 98, grade: "O" },
        { subject: "Science", theory: 65, practical: 24, total: 89, grade: "A+" },
        { subject: "English", theory: 85, practical: "-", total: 85, grade: "A+" },
        { subject: "Hindi", theory: 82, practical: "-", total: 82, grade: "A+" },
        { subject: "Sanskrit", theory: 90, practical: "-", total: 90, grade: "O" },
        { subject: "History", theory: 74, practical: "-", total: 74, grade: "A" },
        { subject: "Social Studies", theory: 72, practical: "-", total: 72, grade: "A" },
    ];

    // Dynamic Percentage Calculation
    const totalMarksObtained = academicResults.reduce((sum, row) => sum + row.total, 0);
    const totalPossibleMarks = academicResults.length * 100;
    const overallPercentage = ((totalMarksObtained / totalPossibleMarks) * 100).toFixed(1);

    const handleViewResult = (e) => {
        e.preventDefault();
        if (!formData.rollNo || !formData.studentName || !formData.studentClass || !formData.fatherName) {
            toast.error("All fields are required!");
            return;
        }
        setIsTransitioning(true);
        setTimeout(() => {
            setShowResult(true);
            setIsTransitioning(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 600);
    };

    const customizedWishes = `We are immensely proud of your outstanding performance and unwavering dedication, ${formData.studentName} son of ${formData.fatherName}. May this achievement be the first of many milestones in your bright future.`;

    return (
        <div className="font-sans bg-white min-h-screen pb-20">
            <section className="pt-5 px-6 container mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-4xl md:text-5xl font-black text-blue-900 uppercase tracking-tighter">
                        Result <span className="text-yellow-600">Portal</span>
                    </h2>
                    <div className="w-24 h-2 bg-red-600 mx-auto mt-4"></div>
                </div>
            </section>

            <main className="container mx-auto px-4 max-w-6xl">
                {!showResult ? (
                    <div className={`max-w-2xl mx-auto transition-all duration-500 ${isTransitioning ? "scale-95 opacity-0" : "scale-100 opacity-100"}`}>
                        <form onSubmit={handleViewResult} className="bg-white rounded-[2.5rem] p-10 shadow-2xl border-2 border-gray-50 space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                {/* 1st Row: Class & Roll */}
                                <div className="space-y-1">
                                    <label className="text-[10px] font-black text-blue-900/50 uppercase ml-1 tracking-widest">Class</label>
                                    <select
                                        required
                                        className="w-full border-2 border-gray-100 rounded-2xl px-5 py-4 focus:border-blue-900 outline-none transition-all appearance-none bg-gray-50/50"
                                        value={formData.studentClass}
                                        onChange={(e) => setFormData({ ...formData, studentClass: e.target.value })}
                                    >
                                        <option value="">Select Class</option>
                                        <option value="LKG">Class LKG</option>
                                        {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                                            <option key={num} value={num}>Class {num}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="space-y-1">
                                    <label className="text-[10px] font-black text-blue-900/50 uppercase ml-1 tracking-widest">Roll Number</label>
                                    <input
                                        required
                                        type="text"
                                        placeholder="Enter Roll No"
                                        className="w-full border-2 border-gray-100 rounded-2xl px-5 py-4 focus:border-blue-900 outline-none transition-all bg-gray-50/50"
                                        value={formData.rollNo}
                                        onChange={(e) => setFormData({ ...formData, rollNo: e.target.value })}
                                    />
                                </div>

                                {/* 2nd Row: Name & Father's Name */}
                                <div className="space-y-1">
                                    <label className="text-[10px] font-black text-blue-900/50 uppercase ml-1 tracking-widest">Student Name</label>
                                    <input
                                        required
                                        type="text"
                                        placeholder="Full Name"
                                        className="w-full border-2 border-gray-100 rounded-2xl px-5 py-4 focus:border-blue-900 outline-none transition-all bg-gray-50/50"
                                        value={formData.studentName}
                                        onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label className="text-[10px] font-black text-blue-900/50 uppercase ml-1 tracking-widest">Father's Name</label>
                                    <input
                                        required
                                        type="text"
                                        placeholder="Father's Name"
                                        className="w-full border-2 border-gray-100 rounded-2xl px-5 py-4 focus:border-blue-900 outline-none transition-all bg-gray-50/50"
                                        value={formData.fatherName}
                                        onChange={(e) => setFormData({ ...formData, fatherName: e.target.value })}
                                    />
                                </div>

                                {/* 3rd Row: Search Button (Spans full width) */}
                                <div className="md:col-span-2 pt-4">
                                    <button
                                        type="submit"
                                        className="w-full group bg-blue-950 hover:bg-black text-white py-5 rounded-2xl font-black uppercase text-sm tracking-[0.3em] transition-all flex items-center justify-center gap-3 shadow-xl hover:shadow-blue-200"
                                    >
                                        <span>Search Result</span>
                                        <div className="flex items-center">
                                            <ChevronRight size={20} className="transition-transform group-hover:translate-x-1" />
                                        </div>
                                    </button>
                                </div>

                            </div>
                        </form>
                    </div>
                ) : (
                    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-10 duration-700">
                        <div className="flex justify-between items-center">
                            <button onClick={() => setShowResult(false)} className="flex items-center gap-2 text-blue-900 font-bold hover:text-red-600 transition-colors uppercase text-xs tracking-widest">
                                <ArrowLeft size={16} /> Back to Search
                            </button>
                            <div className="text-right">
                                <p className="text-xs font-black text-blue-900/40 uppercase">Report For</p>
                                <p className="font-bold text-blue-900">{formData.studentName.toUpperCase()}</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-2">
                                <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-gray-100">
                                    <div className="bg-blue-950 p-8 flex items-center gap-4 text-white">
                                        <BookOpen size={28} className="text-yellow-400" />
                                        <span className="text-xl font-black uppercase tracking-widest">Mark Sheet Details</span>
                                    </div>
                                    <div className="overflow-x-auto">
                                        <table className="w-full">
                                            <thead className="bg-gray-50 border-b">
                                                <tr>
                                                    <th className="p-6 text-left text-xs font-black text-blue-900 uppercase">Subject</th>
                                                    <th className="p-6 text-center text-xs font-bold text-blue-900 uppercase">Theory</th>
                                                    <th className="p-6 text-center text-xs font-black text-blue-900 uppercase">Practical</th>
                                                    <th className="p-6 text-right text-xs font-black text-blue-900 uppercase">Total</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-100">
                                                {academicResults.map((row, i) => (
                                                    <tr key={i} className="hover:bg-yellow-50/50 transition-colors">
                                                        <td className="p-6 font-bold text-gray-800">{row.subject}</td>
                                                        <td className="p-6 text-center text-gray-500 font-bold">{row.theory}</td>
                                                        <td className="p-6 text-center text-gray-500 font-bold">{row.practical}</td>
                                                        <td className="p-6 text-right font-black text-xl text-red-600">{row.total}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-blue-950 text-white rounded-[2.5rem] p-10 text-center shadow-2xl">
                                    <Award size={60} className="text-yellow-400 mx-auto mb-4" />
                                    <p className="text-xs font-black tracking-widest text-blue-300 uppercase mb-2">Final Percentage</p>
                                    <h3 className="text-6xl font-black">{overallPercentage}%</h3>
                                </div>
                                <button onClick={() => window.print()} className="w-full flex items-center justify-center gap-4 bg-red-600 hover:bg-black text-white py-6 rounded-[2rem] font-black uppercase text-sm tracking-[0.2em] shadow-xl transition-all">
                                    <Printer size={20} /> Print Report
                                </button>
                            </div>
                        </div>

                        <AchievementCard
                            studentName={formData.studentName.toUpperCase()}
                            schoolName="MYSCHOOL ACADEMY"
                            percentage={overallPercentage}
                            grade="Distinction"
                            session="2024-25"
                            studentClass={formData.studentClass}
                            fatherName={formData.fatherName}
                            achievementType="Academic Excellence"
                            quote="Success is the sum of small efforts, repeated day in and day out. – Robert Collier"
                            wishes={customizedWishes}
                        />
                    </div>
                )}
            </main>
            <ToastContainer />
        </div>
    );
};

export default ResultReportPage;