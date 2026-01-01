import React, { useRef, useCallback } from "react";
import { Download, PartyPopper, Sparkles, Star, Trophy } from "lucide-react";
import { toPng } from 'html-to-image';

const AchievementCard = ({ studentName, schoolName, grade, percentage, session, studentClass, fatherName, achievementType, quote, wishes }) => {
    const cardRef = useRef(null);

    const downloadCard = useCallback(async () => {
        if (cardRef.current === null) {
            return;
        }

        // Add a small delay to ensure all icons/styles are fully painted
        await new Promise((resolve) => setTimeout(resolve, 100));

        toPng(cardRef.current, {
            cacheBust: true,
            pixelRatio: 2, // High definition
            quality: 1.0,
            backgroundColor: '#E31E24',
            style: {
                borderRadius: '2.5rem', // Force rounding in export
            },
        })
            .then((dataUrl) => {
                const link = document.createElement('a');
                link.download = `${studentName.replace(/\s+/g, '_')}_Achievement.png`;
                link.href = dataUrl;
                link.click();
            })
            .catch((err) => {
                console.error("Capture Error:", err);
                alert("Image generation failed. Please try a different browser or check your console.");
            });
    }, [cardRef, studentName]);

    return (
        <div className="space-y-4">
            {/* The Visual Card */}
            <div
                ref={cardRef}
                className="relative bg-[#E31E24] text-white rounded-[2.5rem] p-10 md:p-16 overflow-hidden shadow-2xl min-h-[550px] flex flex-col justify-center border-[12px] border-white/10"
            >
                {/* Background Decorations - Fixed Opacity for Capture */}
                <div className="absolute top-[-40px] left-[-40px] opacity-20 rotate-12 pointer-events-none">
                    <Star size={300} fill="white" stroke="none" />
                </div>
                <div className="absolute bottom-[-60px] right-[-40px] opacity-20 pointer-events-none">
                    <Sparkles size={350} strokeWidth={1} />
                </div>
                <div className="absolute top-1/2 right-20 transform -translate-y-1/2 opacity-10 pointer-events-none">
                    <Trophy size={400} />
                </div>

                {/* Content Layer */}
                <div className="relative z-10 w-full max-w-4xl mx-auto">
                    <div className="flex items-center justify-between mb-12">
                        <div className="flex items-center gap-6">
                            <div className="bg-white p-5 rounded-3xl shadow-2xl transform -rotate-12 border-4 border-yellow-400">
                                <PartyPopper size={50} className="text-[#E31E24]" />
                            </div>
                            <div>
                                <p className="text-sm font-black tracking-[0.6em] text-white/80 uppercase">{schoolName}</p>
                                <h4 className="text-xl font-bold text-yellow-300">Session {session} • Class {studentClass}</h4>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">
                            KUDOS, <br />
                            <span className="text-yellow-400 italic">
                                {studentName}!
                            </span>
                        </h1>

                        <div className="inline-block bg-yellow-400 text-red-700 px-6 py-2 rounded-full font-black uppercase tracking-widest text-sm">
                            {achievementType} • GRADE {grade}
                        </div>

                        <div className="grid md:grid-cols-2 gap-10 mt-8 items-end">
                            <div className="space-y-4 border-l-4 border-yellow-400 pl-6">
                                <p className="text-xl md:text-2xl font-medium italic leading-relaxed text-white/90">
                                    "{quote}"
                                </p>
                                <p className="text-sm font-bold text-yellow-200/80 leading-relaxed uppercase tracking-wide">
                                    {wishes}
                                </p>
                            </div>

                            <div className="text-right flex flex-col items-end">
                                <span className="text-xs font-black tracking-widest opacity-60 uppercase">Final Score</span>
                                <div className="text-8xl font-black leading-none">{percentage}%</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer details inside the card */}
                <div className="absolute bottom-10 left-12 text-[10px] font-black tracking-[0.3em] opacity-40 uppercase">
                    Official Recognition Certificate • S/O {fatherName} • Class {studentClass}
                </div>
            </div>

            {/* Download Button */}
            <button
                onClick={downloadCard}
                className="flex items-center gap-3 bg-blue-900 hover:bg-black text-white px-10 py-5 rounded-2xl font-bold text-sm uppercase tracking-widest transition-all mx-auto shadow-xl no-print"
            >
                <Download size={20} />
                Download Achievement Card (PNG)
            </button>
        </div>
    );
};

export default AchievementCard;