import React from "react";
import { Target, Eye, Award, Users, Heart, GraduationCap, Quote } from "lucide-react";
import hero1 from "../assets/images/hero1.png";

const COLORS = {
  primary: "#0B2154", // Trustworthy Deep Navy
  secondary: "#C5A059", // Elegant Gold
  bgLight: "#F8F9FA",
};

const AboutUs = () => {
  return (
    <main className="font-sans selection:bg-yellow-200">

      {/* --- OUR IDENTITY --- */}
      <section className="py-5 px-6 container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-blue-900 uppercase tracking-tighter">
            Our <span className="text-yellow-600">Heritage</span>
          </h2>
          <div className="w-24 h-2 bg-red-600 mx-auto mt-4"></div>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-serif font-bold text-blue-900">
              Transforming Lives <br />
              <span className="text-yellow-600">Since 2005</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              For over two decades, our school has stood as a pillar of quality education in the heart of our community. We bridge the gap between rural roots and global aspirations.
            </p>
            <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-900">
              <p className="text-blue-900 font-semibold italic">
                "The goal of education is not just to increase knowledge, but to create the possibility for a child to invent and discover."
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <StatBox label="Alumni Network" value="5000+" />
              <StatBox label="Years of Legacy" value="20" />
            </div>
          </div>
          <div className="relative">
            <img src={hero1} alt="Campus" className="rounded-2xl shadow-2xl border-8 border-white" />
            <div className="absolute -bottom-6 -right-6 bg-yellow-500 text-blue-900 p-8 rounded-lg shadow-xl hidden md:block">
              <p className="text-4xl font-black">#1</p>
              <p className="font-bold text-xs uppercase tracking-tighter">School in the Region</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- DIRECTOR'S SECTION (NEW) --- */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center bg-white p-8 md:p-16 rounded-[40px] shadow-xl border border-gray-100">
            <div className="w-full md:w-1/3">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80"
                alt="Director"
                className="rounded-3xl shadow-lg border-4 border-yellow-500 w-full h-[400px] object-fit"
              />
            </div>
            <div className="w-full md:w-2/3 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1 bg-blue-100 text-blue-900 rounded-full text-xs font-bold uppercase tracking-widest">
                <Award size={14} /> From the Director's Office
              </div>
              <h2 className="text-4xl font-serif font-bold text-blue-900">Shri. Anand R. Mishra</h2>
              <p className="text-yellow-600 font-bold -mt-4 uppercase tracking-widest text-sm text-sm">Founder & Managing Director</p>

              <div className="relative text-gray-600 text-lg leading-relaxed italic">
                <Quote className="absolute -left-8 -top-4 opacity-10 text-blue-900" size={60} />
                "Our school was built on the dream that every child in our village deserves the same quality of education as those in the biggest cities. For 20 years, we have nurtured that dream with honesty and hard work. शिक्षा ही वह माध्यम है जिससे हम समाज में सकारात्मक बदलाव ला सकते हैं।"
              </div>
              <p className="text-gray-600">
                Mr. Mishra is a visionary educationist with over 30 years of experience in social development. His leadership has guided MySchool from a small 5-room building to this sprawling modern campus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- PRINCIPAL'S MESSAGE --- */}
      <section className="py-24 px-6 container mx-auto">
        <div className="flex flex-col md:flex-row-reverse gap-16 items-center">
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
              alt="Principal"
              className="rounded-[20% 50% 20% 50%] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="md:w-1/2 space-y-6">
            <h3 className="text-3xl font-serif font-bold text-blue-900">Principal's Thought</h3>
            <h4 className="text-xl text-yellow-600 font-bold">Dr. S. K. Sharma <span className="text-gray-400 font-normal text-sm">(M.A, Ph.D)</span></h4>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong>"सा विद्या या विमुक्तये"</strong> — Education is that which liberates. My goal as a principal is to create an atmosphere where children are not afraid to ask 'Why?'.
              </p>
              <p>
                In our school, discipline is not a punishment; it is a way of life. We focus on the 'Holistic Growth' of our students, ensuring they are as good at sports and arts as they are at mathematics and science.
              </p>
              <p className="font-semibold text-blue-900">
                "Your child's future is a joint journey between the school and the parents. Together, we will make them leaders of tomorrow."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- MISSION & VISION (Grid) --- */}
      <section className="py-24 bg-blue-900 text-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div className="p-10 border border-white/20 rounded-3xl hover:bg-white/5 transition-all">
            <Target className="text-yellow-500 mb-6" size={48} />
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-blue-100 leading-relaxed">
              To provide affordable yet world-class education that empowers rural talent. We aim to produce graduates who are technically skilled and morally upright.
            </p>
          </div>
          <div className="p-10 border border-white/20 rounded-3xl hover:bg-white/5 transition-all">
            <Eye className="text-yellow-500 mb-6" size={48} />
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-blue-100 leading-relaxed">
              To be recognized as the premier institution in the state, known for creating the perfect balance between modern technology and ancient Indian values.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

const StatBox = ({ label, value }) => (
  <div className="border-t-4 border-yellow-500 pt-4">
    <span className="text-4xl font-black text-blue-900 block">{value}</span>
    <span className="text-xs font-bold uppercase tracking-widest text-gray-400">{label}</span>
  </div>
);

export default AboutUs;