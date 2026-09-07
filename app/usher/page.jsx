"use client";

import React from "react";
import Link from "next/link";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import Navbar from "@/components/Navbar";

export default function UshersPage() {
  const ushers = [
    {
      description: "Immaculate presentation and warm hospitality. Designed to provide VIP guest reception, seamless event coordination, and an aura of absolute prestige.",
      image: "/usher1.jpg"
    },
    {
      description: "Poised and professional event hosts combining sharp corporate etiquette with refined grace to manage high-profile guest lists effortlessly.",
      image: "/usher2.jpg"
    },
    {
      description: "Charming, articulate, and dedicated to delivering exceptional front-of-house coordination, ensuring every attendee feels welcomed and valued.",
      image: "/usher3.jpg"
    },
    {
      description: "Confident leadership and immaculate grooming tailored for red-carpet management, VIP escorting, and elite ceremony direction.",
      image: "/usher4.jpg"
    },
    {
      description: "Exquisite poise and attentive service standards. Perfect for luxury weddings, corporate galas, and prestigious brand launches.",
      image: "/usher5.jpg"
    },
    {
      description: "Dynamic energy combined with disciplined protocol handling, ensuring smooth seating logistics and guest assistance throughout major productions.",
      image: "/usher6.jpg"
    },
    {
      description: "A harmonious team of professional ushers embodying elegance, swift problem-solving, and superior guest relations expertise.",
      image: "/usher7.jpg"
    },
    {
      description: "The epitome of hospitality and sophistication, bringing polished charm and flawless execution to every stage of your event.",
      image: "/usher8.jpg"
    }
  ];

  return (
    <div className="min-h-screen text-[#FAF9F6] font-sans selection:bg-[#FF3366] selection:text-white overflow-x-hidden relative">
      
      {/* BACKGROUND IMAGE CONTAINER */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: `url('/Queen.png')` }}
      >
        <div className="absolute inset-0 bg-[#111111]/95 backdrop-blur-[5px]"></div>
      </div>

      {/* PAGE CONTENT */}
      <div className="relative z-10">
        <Navbar />

        {/* HEADER SECTION */}
        <section className="pt-28 pb-12 sm:pt-36 sm:px-6 px-4 border-b border-[#D4AF37]/20 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#222222]/90 border border-[#D4AF37]/40 mb-4 shadow-lg backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF3366] animate-pulse"></span>
              <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.25em] text-[#FAF9F6] uppercase">
                Hospitality & Protocol Division
              </span>
            </div>
            <h1 className="font-['Cinzel'] text-3xl xs:text-4xl sm:text-6xl font-extrabold tracking-tight text-[#FAF9F6] leading-tight mb-4 drop-shadow-md">
            EMA <span className="text-[#D4AF37]">USHERS</span>
            </h1>
            <p className="text-gray-300 text-xs sm:text-sm font-light max-w-xl mx-auto drop-shadow">
              Professional guest management, immaculate presentation, and refined protocol for world-class events and galas.
            </p>
          </div>
        </section>

        {/* GALLERY SECTION */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-8 lg:gap-10">
            {ushers.map((usher, idx) => (
              <div 
                key={idx} 
                className="flex flex-col bg-[#161616]/90 backdrop-blur-md rounded-2xl overflow-hidden border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all duration-500 shadow-2xl w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm group"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/5] overflow-hidden bg-black">
                  <img 
                    src={usher.image} 
                    alt="Professional usher representation" 
                    className="w-full h-full object-cover filter brightness-95 contrast-110 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent opacity-80"></div>
                  <div className="absolute top-4 right-4 bg-[#222222]/80 backdrop-blur-md border border-[#D4AF37]/40 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#D4AF37] flex items-center gap-1.5 shadow-md">
                    <FiCheckCircle />
                    <span>Verified Protocol</span>
                  </div>
                </div>

                {/* Description Container */}
                <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between">
                  <p className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed">
                    {usher.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER / CTA SECTION */}
        <section className="py-12 px-4 sm:px-6 bg-[#161616]/90 backdrop-blur-md border-t border-[#D4AF37]/20 text-center">
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-300 text-xs sm:text-sm font-light mb-4">
              Book professional ushers and hostesses for your weddings, corporate conferences, and red-carpet ceremonies.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-[#D4AF37] hover:text-white transition-colors border-b border-[#D4AF37] pb-1"
            >
              <span>Book Ushering Team</span>
              <FiArrowRight />
            </Link>
          </div>
        </section>
      </div>

    </div>
  );
}