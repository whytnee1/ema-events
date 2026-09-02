"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  FiArrowRight, 
  FiGlobe, 
  FiUserPlus,
  FiAward, 
  FiStar, 
  FiShield, 
  FiCompass, 
  FiMail,
  FiX
} from "react-icons/fi";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [showAlert, setShowAlert] = useState(true);

  const services = [
    { 
      title: "Runway & Haute Couture", 
      desc: "Providing world-class portfolios for global fashion weeks, premier designers, and historic fashion houses across Nigeria.",
      icon: FiGlobe 
    },
    { 
      title: "Editorial & Campaigns", 
      desc: "Collaborating with elite photographers, stylists, and luxury publications to curate unforgettable visual narratives and magazine covers.",
      icon: FiStar 
    },
    { 
      title: "Commercial & Brand Ambassadorship", 
      desc: "Connecting high-profile corporate entities and luxury beauty brands with faces that command attention and drive global markets.",
      icon: FiAward 
    },
    { 
      title: "Global Talent Incubation", 
      desc: "Rigorous training, career strategy, and international placement programs designed to turn raw potential into legendary icons.",
      icon: FiShield 
    },
  ];

  return (
    <div className="min-h-screen bg-[#111111] text-[#FAF9F6] font-sans selection:bg-[#FF3366] selection:text-white overflow-x-hidden relative">
      
      {/* ALERT MESSAGE POPUP */}
      {showAlert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="relative w-full max-w-md bg-[#161616] border border-[#D4AF37]/50 rounded-3xl p-6 sm:p-8 text-center shadow-2xl">
            
            {/* Exit Button */}
            <button
              onClick={() => setShowAlert(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white bg-[#222222] p-2 rounded-full border border-[#D4AF37]/30 transition-all"
              aria-label="Close alert"
            >
              <FiX className="text-base text-[#D4AF37]" />
            </button>

            {/* Content */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF3366]/10 border border-[#FF3366]/30 mb-4 mt-2">
              <span className="w-2 h-2 rounded-full bg-[#FF3366] animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FF3366]">Official Announcement</span>
            </div>

            <h3 className="font-['Cinzel'] text-2xl sm:text-3xl font-extrabold text-[#FAF9F6] mb-3 tracking-wide">
              <span className="font-bold text-6xl text-[#C94C5A]">E</span>ma Queen Nigeria 6.0 Loading...
            </h3>

            <p className="text-gray-300 text-sm sm:text-base font-light tracking-wide mb-6">
              Stay Tuned!
            </p>

            <button
              onClick={() => setShowAlert(false)}
              className="w-full bg-[#5A0000] hover:bg-[#450000] text-white py-3 rounded-full text-xs uppercase tracking-widest font-bold border border-[#D4AF37]/50 transition-all shadow-lg"
            >
              Got It
            </button>

          </div>
        </div>
      )}

      {/* Navigation Component Integration */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative w-full h-[100dvh] flex items-center justify-center overflow-hidden px-4 sm:px-6">
        
        {/* Background Image (Usher.jpg) with dark overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/Usher.jpg"
            alt="EMA Global Modeling Hero"
            className="w-full h-full object-cover scale-105 filter brightness-[0.65] contrast-125"
          />
          {/* Deep charcoal/black gradient overlay for the professional dark look */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/50 to-black/70"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center mt-16 sm:mt-20 w-full">
          
          {/* Subheading Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#222222]/80 border border-[#D4AF37]/40 backdrop-blur-md mb-5 sm:mb-6 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[#FF3366] animate-pulse"></span>
            <span className="text-[9px] sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.25em] text-[#FAF9F6] uppercase">
              International Modeling Agency
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-['Cinzel'] text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-[#FAF9F6] mb-4 sm:mb-6 leading-[1.15] sm:leading-[1.1]">
            REDEFINING <br className="hidden xs:inline" />
            <span className="bg-gradient-to-r from-white via-[#FAF9F6] to-[#D4AF37] bg-clip-text text-transparent">
              GLOBAL ELEGANCE
            </span>
          </h1>

          {/* Description */}
          <p className="max-w-xl sm:max-w-2xl mx-auto text-xs sm:text-base md:text-lg italic text-gray-300 font-light mb-8 sm:mb-10 tracking-wide leading-relaxed px-2">
            Connecting talented people with top fashion brands and creating opportunities around the world.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full px-4 sm:px-0">
            {/* Explore Portfolios */}
            <Link
              href="/models"
              className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 bg-[#222222]/80 hover:bg-[#222222] text-[#FAF9F6] px-7 py-3.5 sm:px-8 sm:py-4 text-xs sm:text-sm uppercase tracking-[0.2em] font-bold rounded-full border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-300 backdrop-blur-sm"
            >
              <span>EXPLORE MODELS</span>
              <FiArrowRight className="text-[#D4AF37] transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

        </div>

        {/* Bottom Scroll Indicator / Brand Footnote */}
        <div className="absolute bottom-6 sm:bottom-8 left-0 w-full px-4 sm:px-6 flex justify-between items-end z-10 text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] uppercase text-gray-400">
          <div className="hidden sm:block border-l border-[#D4AF37]/40 pl-3">
            <span>Abuja / Kaduna / Dubai / Lagos / Port-Harcourt</span>
          </div>
          <div className="mx-auto sm:mx-0 flex items-center gap-2 text-[#D4AF37]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
            <span>EST. 2021</span>
          </div>
        </div>

      </section>

      {/* ABOUT THE AGENCY SECTION */}
      <section className="py-14 sm:py-28 px-4 sm:px-6 bg-[#111111] border-t border-[#D4AF37]/20 relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF3366]/10 border border-[#FF3366]/30 mb-4">
              <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-[#FF3366]">The EMA Legacy</span>
            </div>
            <h2 className="font-['Cinzel'] text-2xl xs:text-3xl sm:text-5xl font-bold text-[#FAF9F6] mb-5 sm:mb-6 leading-tight">
              A PREMIER HOUSE FOR <br />
              <span className="text-[#D4AF37]">AVANT-GARDE</span> TALENT
            </h2>
            <p className="text-gray-300 font-light text-xs sm:text-base leading-relaxed mb-5 sm:mb-6">
             Founded on discipline, diversity, and excellence,(EMA) Events Management is committed to the world of international fashion. We discover and develop unique talent, helping them build successful careers and connect with opportunities across Nigeria and Africa.
            </p>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8">
             EMA blends event management, modelling, styling, and fashion to deliver exceptional experiences and shape unforgettable moments.
            </p>
            <Link 
              href="/about" 
              className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-bold text-[#FAF9F6] hover:text-[#FF3366] transition-colors border-b border-[#D4AF37] pb-1"
            >
              <span>Discover Our History</span>
              <FiArrowRight className="text-[#D4AF37]" />
            </Link>
          </div>
          <div className="relative mt-6 lg:mt-0">
            <div className="absolute -inset-1 sm:-inset-2 rounded-3xl bg-gradient-to-r from-[#D4AF37]/30 to-[#FF3366]/30 filter blur-xl opacity-50"></div>
            <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/40 bg-[#161616] aspect-[4/5]">
              <img 
                src="/Usher2.jpg" 
                alt="EMA Agency Atmosphere" 
                className="w-full h-full object-cover filter brightness-90 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6 sm:p-8">
                <div>
                  <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-bold mb-1">Global Standard</p>
                  <p className="font-['Cinzel'] text-lg sm:text-xl font-bold text-white">Excellence in Every Frame</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES & DIVISIONS SECTION */}
      <div className="max-w-7xl mx-auto py-16 sm:py-28 px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.25em] text-[#FF3366] block mb-2">Our Expertise</span>
          <h2 className="font-['Cinzel'] text-2xl xs:text-3xl sm:text-5xl font-bold text-[#FAF9F6] mb-4 sm:mb-6">GLOBAL DIVISIONS</h2>
          <p className="text-gray-300 text-xs sm:text-base font-light px-2">
            We deliver comprehensive management and booking structures tailored to the highest benchmarks of the international fashion ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          {services.map((srv, idx) => {
            const IconComponent = srv.icon;
            return (
              <div key={idx} className="p-5 sm:p-10 rounded-2xl bg-[#161616] border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-[#222222] border border-[#D4AF37]/40 flex items-center justify-center text-[#FF3366] mb-4 sm:mb-6 group-hover:bg-[#FF3366] group-hover:text-white transition-colors duration-300">
                  <IconComponent className="text-xl" />
                </div>
                <h3 className="font-['Cinzel'] text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">{srv.title}</h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light">{srv.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* GLOBAL HUBS SECTION */}
      <div className="max-w-7xl mx-auto py-12 sm:py-20 px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 text-center">
          <div className="p-4 sm:p-6 rounded-2xl bg-[#161616] border border-[#D4AF37]/20">
            <FiCompass className="text-[#D4AF37] text-xl sm:text-2xl mx-auto mb-2.5 sm:mb-3" />
            <h4 className="font-['Cinzel'] font-bold text-xs sm:text-lg text-white mb-1">ABUJA</h4>
            <p className="text-[8px] sm:text-[10px] uppercase tracking-widest text-gray-400">Headquarters</p>
          </div>
          <div className="p-4 sm:p-6 rounded-2xl bg-[#161616] border border-[#D4AF37]/20 flex flex-col justify-center">
            <FiCompass className="text-[#D4AF37] text-xl sm:text-2xl mx-auto mb-2.5 sm:mb-3" />
            <h4 className="font-['Cinzel'] font-bold text-xs sm:text-lg text-white mb-1">PORT_HARCOURT</h4>
          </div>
          <div className="p-4 sm:p-6 rounded-2xl bg-[#161616] border border-[#D4AF37]/20 flex flex-col justify-center">
            <FiCompass className="text-[#D4AF37] text-xl sm:text-2xl mx-auto mb-2.5 sm:mb-3" />
            <h4 className="font-['Cinzel'] font-bold text-xs sm:text-lg text-white mb-1">KADUNA</h4>
          </div>
          <div className="p-4 sm:p-6 rounded-2xl bg-[#161616] border border-[#D4AF37]/20 flex flex-col justify-center">
            <FiCompass className="text-[#D4AF37] text-xl sm:text-2xl mx-auto mb-2.5 sm:mb-3" />
            <h4 className="font-['Cinzel'] font-bold text-xs sm:text-lg text-white mb-1">LAGOS</h4>
          </div>
        </div>
      </div>

      {/* FINAL JOIN CTA BANNER */}
      <section className="py-16 sm:py-28 px-4 sm:px-6 bg-[#161616] border-t border-[#D4AF37]/20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <img src="/Usher.jpg" alt="Background" className="w-full h-full object-cover filter grayscale" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.25em] text-[#FF3366] block mb-3">Begin Your Journey</span>
          <h2 className="font-['Cinzel'] text-2xl xs:text-3xl sm:text-6xl font-extrabold text-[#FAF9F6] mb-4 sm:mb-6 leading-tight">
            STEP ONTO THE <span className="text-[#D4AF37]">GLOBAL STAGE</span>
          </h2>
          <p className="text-gray-300 text-xs sm:text-base max-w-xl mx-auto font-light mb-8 sm:mb-10 leading-relaxed px-2">
            Whether you are an aspiring icon looking to join our roster or a brand seeking elite collaboration, EMA is ready to elevate your vision.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 w-full px-2 sm:px-0">
             <Link
               href="/join"
               className="w-full sm:w-40 flex items-center justify-center gap-2 bg-[#5A0000] text-white py-3.5 text-xs uppercase tracking-widest font-bold 
               rounded-full border border-[#D4AF37]/50 shadow-lg hover:bg-opacity-90 transition-all"
             >
               <FiUserPlus className="text-sm text-[#D4AF37]" />
               <span>JOIN EMA</span>
             </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 bg-[#222222] hover:bg-[#2b2b2b] text-[#FAF9F6] px-8 sm:px-10 py-4 sm:py-5 text-xs sm:text-sm uppercase tracking-[0.2em] font-bold rounded-full border border-[#D4AF37]/40 transition-all duration-300"
            >
              <FiMail className="text-[#D4AF37]" />
              <span>CONTACT BOOKING</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}