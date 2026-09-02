"use client";

import React from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import Navbar from "@/components/Navbar";

export default function ModelsPage() {
  const models = [
    {
      description: "A confident and elegant presence that combines natural beauty, strong character, and a timeless sense of style. With grace and confidence, every look reflects the creativity, beauty, and unique expression of modern fashion.",
      image: "/model1.jpg"
    },
    {
      description: "Sharp architectural features paired with an intense, narrative-driven gaze tailored for high-impact editorial storytelling.",
      image: "/model2.jpg"
    },
    {
      description: "Effortless poise and contemporary grace that bridges modern commercial appeal with sophisticated luxury standards.",
      image: "/model3.jpg"
    },
    {
      description: "A bold and confident look that speaks through strong style and personality. Her powerful presence brings energy and character to every frame.",
      image: "/model4.jpg"
    },
    {
      description: "A natural beauty that shines with simplicity and confidence. Her effortless look, warm expression, and graceful presence create a truly captivating image.",
      image: "/model5.jpg"
    },
    {
      description: "A creative and confident style that embraces modern fashion with individuality. Her ability to carry different looks makes every appearance fresh, expressive, and exciting.",
      image: "/model6.jpg"
    },
    {
        description: "Where beauty meets confidence. A captivating group of exceptional models.",
        image: "/model7.jpg"
    },
     {
     description: "More than just beautiful faces; a powerful representation of elegance, confidence and style.",
     image: "/model8.jpg"
 },
  {
     description: "A breathtaking collection of beauty, elegance and undeniable charisma.",
     image: "/brandA.jpg"
 },
  ];

  return (
    <div className="min-h-screen text-[#FAF9F6] font-sans selection:bg-[#FF3366] selection:text-white overflow-x-hidden relative">
      
      {/* BACKGROUND IMAGE CONTAINER */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: `url('/Queen.png')` }}
      >
        {/* Dark overlay to ensure readability against the background */}
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
                Visual Roster Collection
              </span>
            </div>
            <h1 className="font-['Cinzel'] text-3xl xs:text-4xl sm:text-6xl font-extrabold tracking-tight text-[#FAF9F6] leading-tight mb-4 drop-shadow-md">
              CREATIVE <span className="text-[#D4AF37]">EXPRESSIONS</span>
            </h1>
            <p className="text-gray-300 text-xs sm:text-sm font-light max-w-xl mx-auto drop-shadow">
              An exploration of form, attitude, and visual storytelling across our premier talent directory.
            </p>
          </div>
        </section>

        {/* FLEX PATTERN GALLERY */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-8 lg:gap-10">
            {models.map((model, idx) => (
              <div 
                key={idx} 
                className="flex flex-col bg-[#161616]/90 backdrop-blur-md rounded-2xl overflow-hidden border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all duration-500 shadow-2xl w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm group"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/5] overflow-hidden bg-black">
                  <img 
                    src={model.image} 
                    alt="Talent visual representation" 
                    className="w-full h-full object-cover filter brightness-95 contrast-110 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent opacity-80"></div>
                </div>

                {/* Description Container */}
                <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between">
                  <p className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed">
                    {model.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER NOTE */}
        <section className="py-12 px-4 sm:px-6 bg-[#161616]/90 backdrop-blur-md border-t border-[#D4AF37]/20 text-center">
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-300 text-xs sm:text-sm font-light mb-4">
              For specialized bookings, composite references, and creative collaborations, connect with our management team.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-[#D4AF37] hover:text-white transition-colors border-b border-[#D4AF37] pb-1"
            >
              <span>Contact Division</span>
              <FiArrowRight />
            </Link>
          </div>
        </section>
      </div>

    </div>
  );
}