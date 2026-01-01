import React from "react";
import {
  ClipboardCheck,
  FileText,
  UserPlus,
  CheckCircle2,
  AlertCircle,
  CalendarDays,
  Download,
  ArrowRight,
  PhoneCall
} from "lucide-react";

const COLORS = {
  primary: "#0B2154", // Deep Navy from Home
  secondary: "#FFD700", // Golden Yellow from Home
  accent: "#D32F2F", // Red Accent from Home
};

const Admission = () => {
  return (
    <main className="font-sans bg-white selection:bg-yellow-400">
      {/* 3. ADMISSION PROCESS - BOLD CARD STYLE */}
      <section className="py-5 px-6 container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-blue-900 uppercase tracking-tighter">
            Admission <span className="text-yellow-600">Roadmap</span>
          </h2>
          <div className="w-24 h-2 bg-red-600 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              step: "01",
              title: "Inquiry",
              desc: "Visit the school campus or fill the online inquiry form for registration.",
              icon: <FileText />,
            },
            {
              step: "02",
              title: "Interaction",
              desc: "A friendly interaction with parents and child to align aspirations.",
              icon: <UserPlus />,
            },
            {
              step: "03",
              title: "Evaluation",
              desc: "Age-appropriate assessment for grade placement and skills.",
              icon: <ClipboardCheck />,
            },
            {
              step: "04",
              title: "Enrollment",
              desc: "Submission of documents and fee to confirm the admission.",
              icon: <CheckCircle2 />,
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group relative p-10 bg-white shadow-2xl hover:shadow-red-100 transition-all border-b-8 border-blue-900 hover:border-yellow-500"
            >
              <span className="text-6xl font-black text-gray-100 absolute top-4 right-4 group-hover:text-yellow-100 transition-colors">
                {item.step}
              </span>
              <div className="mb-6 relative z-10 text-red-600">
                {React.cloneElement(item.icon, { size: 48 })}
              </div>
              <h3 className="text-2xl font-black text-blue-900 uppercase tracking-tighter mb-3 relative z-10">
                {item.title}
              </h3>
              <p className="text-gray-600 font-medium text-sm leading-relaxed relative z-10">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>


      {/* 2. FLASH NEWS MARQUEE */}
      <div className="bg-yellow-400 py-3 flex items-center border-b-2 border-yellow-500 shadow-sm">
        <div className="bg-red-600 text-white px-6 py-1 font-black z-10 shadow-lg ml-4 uppercase text-xs tracking-widest whitespace-nowrap">Important</div>
        <marquee className="text-blue-900 font-bold uppercase text-xs tracking-wider">
          Limited Seats available for Class 1 to 5 | Scholarship Entrance Test on Coming Sunday | Office hours: 8:00 AM to 3:00 PM.
        </marquee>
      </div>


      {/* 4. DOCUMENTATION & DATES - SPLIT SECTION */}
      <section className="py-24 bg-blue-50 relative overflow-hidden">
        {/* Background Decorative Icon */}
        <div className="absolute top-0 right-0 opacity-5 -translate-y-10 translate-x-10">
          <ClipboardCheck size={400} />
        </div>

        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 relative z-10">
          {/* Document Checklist */}
          <div className="bg-white p-12 shadow-2xl border-t-8 border-red-600">
            <h3 className="text-3xl font-black text-blue-900 uppercase tracking-tighter mb-8 flex items-center gap-3">
              <AlertCircle className="text-red-600" /> Necessary Documents
            </h3>
            <ul className="space-y-5">
              {[
                "Birth Certificate (Original for Verification)",
                "6 Passport Size Photographs of the Child",
                "Transfer Certificate (TC) from Previous School",
                "Photocopy of Parent's Aadhar Cards",
                "Previous Year Report Card / Marksheet",
                "Medical Fitness Certificate",
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-4 text-blue-900 font-bold text-sm bg-gray-50 p-3 rounded-lg border border-gray-100">
                  <ArrowRight size={16} className="text-yellow-600" />
                  {text}
                </li>
              ))}
            </ul>
          </div>

          {/* Policy & Dates */}
          <div className="flex flex-col justify-center">
            <h3 className="text-4xl font-black text-blue-900 uppercase tracking-tighter mb-6">
              Admission <span className="text-yellow-600">Policy</span>
            </h3>
            <p className="text-gray-700 font-medium leading-relaxed mb-8 text-lg">
              We follow a transparent and merit-based admission policy. Priority is given to siblings of existing students and staff children. Seats are limited to maintain a healthy <span className="text-red-600 font-bold underline">25:1 student-teacher ratio.</span>
            </p>

            <div className="bg-blue-900 p-8 rounded-sm text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-20">
                <CalendarDays size={80} />
              </div>
              <h4 className="text-yellow-400 font-black uppercase tracking-widest text-sm mb-4 flex items-center gap-2">
                <CalendarDays size={18} /> Key Deadlines
              </h4>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span>Forms Availability</span>
                  <span className="text-yellow-400 font-black">15 Jan 2025</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span>Entrance Test Phase 1</span>
                  <span className="text-yellow-400 font-black">Feb 2nd Week</span>
                </div>
                <div className="flex justify-between">
                  <span>New Session Begins</span>
                  <span className="text-yellow-400 font-black">02 April 2025</span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              {/* 1. DOWNLOAD PROSPECTUS (PDF LINK) */}
              <a
                href="/path-to-your-prospectus.pdf"
                download
                className="flex-1"
              >
                <button className="w-full bg-red-600 text-white py-5 rounded-full font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3 hover:bg-red-700 transition-all shadow-xl active:scale-95">
                  Download Prospectus <Download size={20} />
                </button>
              </a>

              {/* 2. CALL ADMISSIONS (CLICK-TO-CALL) */}
              <a
                href="tel:+916203594022"
                className="flex-1"
              >
                <button className="w-full bg-blue-950 text-white py-5 rounded-full font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3 hover:bg-black transition-all shadow-xl active:scale-95">
                  Call Admissions <PhoneCall size={20} />
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FOOTER CTA */}
      <section className="py-20 bg-blue-900 text-center relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase mb-8">
            Give Your Child the <span className="text-yellow-400">MYSCHOOL Advantage</span>
          </h2>
          <p className="text-white/60 font-bold mb-10 max-w-2xl mx-auto uppercase tracking-widest text-sm">
            Visit our campus today for a personalized tour and counseling session with our academic experts.
          </p>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-10"></div>
        </div>
      </section>
    </main>
  );
};

export default Admission;