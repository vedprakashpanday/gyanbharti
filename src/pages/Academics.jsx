import React from "react";
import {
  Book,
  Microscope,
  Pencil,
  Clock,
  GraduationCap,
  Laptop,
  CheckCircle2,
  Users,
  Award,
  BookOpenCheck,
  CreditCard,
  CalendarDays
} from "lucide-react";

const COLORS = {
  primary: "#1A237E",
  secondary: "#C5A059",
  bgLight: "#F8F9FA",
};

const Academics = () => {
  return (
    <main className="font-sans">


      {/* --- CURRICULUM & BOOKS --- */}
      <section className="py-5 px-6 container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-blue-900 uppercase tracking-tighter">
            Prescribed <span className="text-yellow-600">Curriculum</span>
          </h2>
          <div className="w-24 h-2 bg-red-600 mx-auto mt-4"></div>
        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { subject: "Mathematics", author: "Dr. R.D. Sharma / NCERT", publisher: "Dhanpat Rai" },
            { subject: "English", author: "Beehive & Moments", publisher: "NCERT" },
            { subject: "Science", author: "Lakhmir Singh / Manjit Kaur", publisher: "S. Chand" },
            { subject: "Social Science", author: "India & Contemporary World", publisher: "NCERT" },
          ].map((item, idx) => (
            <div key={idx} className="bg-gray-50 p-6 rounded-xl border-l-4" style={{ borderColor: COLORS.secondary }}>
              <h4 className="font-bold text-lg mb-1">{item.subject}</h4>
              <p className="text-sm text-gray-500 italic">Author: {item.author}</p>
              <p className="text-xs font-bold uppercase mt-2 text-gray-400">{item.publisher} Publications</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- MONTHLY FEE STRUCTURE --- */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-10 justify-center">
            <CreditCard style={{ color: COLORS.secondary }} />
            <h2 className="text-3xl font-serif font-bold text-[#1A237E]">Monthly Fee Structure</h2>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-[#1A237E] text-white">
                <tr>
                  <th className="p-6">Grade / Level</th>
                  <th className="p-6">Monthly Tuition Fee</th>
                  <th className="p-6">Activity Charges</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="p-6 font-bold">Pre-Primary (Nur - UKG)</td>
                  <td className="p-6">₹2,500</td>
                  <td className="p-6">₹300</td>
                </tr>
                <tr>
                  <td className="p-6 font-bold">Primary (I - V)</td>
                  <td className="p-6">₹3,200</td>
                  <td className="p-6">₹400</td>
                </tr>
                <tr>
                  <td className="p-6 font-bold">Middle (VI - VIII)</td>
                  <td className="p-6">₹3,800</td>
                  <td className="p-6">₹500</td>
                </tr>
                <tr>
                  <td className="p-6 font-bold">Secondary (IX - X)</td>
                  <td className="p-6">₹4,500</td>
                  <td className="p-6">₹600</td>
                </tr>
              </tbody>
            </table>
            <div className="p-4 bg-yellow-50 text-[10px] text-gray-500 uppercase text-center font-bold tracking-widest">
              * Note: Transport and Lab charges are additional where applicable.
            </div>
          </div>
        </div>
      </section>

      {/* --- ACADEMIC CALENDAR (MONTHLY) --- */}
      <section className="py-20 px-6 container mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <CalendarDays style={{ color: COLORS.secondary }} />
          <h2 className="text-3xl font-serif font-bold text-[#1A237E]">Monthly Academic Focus</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { month: "April - May", event: "New Session Starts & Periodic Test 1", color: "#E8EAF6" },
            { month: "July - August", event: "Inter-School Competitions & PT 2", color: "#FFF9C4" },
            { month: "September", event: "Half-Yearly Examinations", color: "#F8BBD0" },
            { month: "October - Nov", event: "Excursions & Annual Sports Meet", color: "#DCEDC8" },
            { month: "December", event: "Pre-Boards (X) & Periodic Test 3", color: "#E1F5FE" },
            { month: "Feb - March", event: "Annual Examinations & Result Declaration", color: "#FFE0B2" },
          ].map((item, idx) => (
            <div key={idx} className="p-8 rounded-2xl flex flex-col justify-between h-40" style={{ backgroundColor: item.color }}>
              <h3 className="text-xl font-bold" style={{ color: COLORS.primary }}>{item.month}</h3>
              <p className="text-sm font-medium text-gray-700">{item.event}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- SCHOOL TIMINGS (Keeping your existing table) --- */}
      <section className="py-20 px-6 container mx-auto bg-gray-50 rounded-3xl mb-20">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-serif font-bold text-[#1A237E]">Daily Schedule</h2>
        </div>
        <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-gray-100 shadow-2xl bg-white">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-white" style={{ backgroundColor: COLORS.primary }}>
                <th className="p-6 uppercase text-xs tracking-widest font-bold">Category</th>
                <th className="p-6 uppercase text-xs tracking-widest font-bold">Summer Timings</th>
                <th className="p-6 uppercase text-xs tracking-widest font-bold">Winter Timings</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b"><td className="p-6 font-bold">Pre-Primary</td><td className="p-6">08:00 AM – 12:30 PM</td><td className="p-6">09:00 AM – 01:30 PM</td></tr>
              <tr className="border-b"><td className="p-6 font-bold">Primary & Secondary</td><td className="p-6">07:30 AM – 01:30 PM</td><td className="p-6">08:30 AM – 02:30 PM</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="py-20 bg-[#C5A059] text-center">
        <div className="container mx-auto px-6">
          <Award className="mx-auto mb-6 text-white" size={48} />
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            Join the Journey of Academic Excellence
          </h2>
          <button className="bg-[#1A237E] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:shadow-2xl transition-all">
            Download Prospectus
          </button>
        </div>
      </section>
    </main>
  );
};

export default Academics;