"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  FiArrowRight, 
  FiCalendar, 
  FiMapPin, 
  FiCamera, 
  FiAward, 
  FiX, 
  FiChevronLeft, 
  FiChevronRight 
} from "react-icons/fi";

export default function EventGalleryPage() {
  const [activeImage, setActiveImage] = useState(null);

  // Generate 24 event gallery items with rich modelling event descriptions
  const eventGallery = Array.from({ length: 24 }, (_, index) => {
    const num = index + 1;
    const categories = [
      "Runway Couture", 
      "Editorial Backstage", 
      "High Fashion Showcase", 
      "Designer Spotlight", 
      "Vogue Moments"
    ];
    const category = categories[index % categories.length];
    
    return {
      id: num,
      src: `/event${num}.jpg`,
      title: `${category} - Phase ${num}`,
      subtitle: "EMA Experience & Events Showcase",
      description: `Capturing the raw elegance, intense glamour, and precise artistry of elite runway modelling. Phase ${num} highlights breathtaking designer collections, immaculate lighting, and world-class stage presence.`
    };
  });

  const handlePrev = (e) => {
    e.stopPropagation();
    if (activeImage) {
      const prevId = activeImage.id === 1 ? 24 : activeImage.id - 1;
      setActiveImage(eventGallery.find(item => item.id === prevId));
    }
  };

  const handleNext = (e) => {
    e.stopPropagation();
    if (activeImage) {
      const nextId = activeImage.id === 24 ? 1 : activeImage.id + 1;
      setActiveImage(eventGallery.find(item => item.id === nextId));
    }
  };

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#222222] pt-32 pb-24 relative overflow-hidden">
      {/* BACKGROUND EMA LOGO */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center">
        <div className="absolute w-[100vw] h-[100vh] max-w-[1400px] max-h-[1400px] opacity-[0.18]">
          <Image
            src="/EmaLogo.png"
            alt=""
            fill
            priority
            className="object-cover object-center"
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER SECTION */}
        <section className="text-center mb-16">
          <span className="inline-block text-xs uppercase tracking-[0.3em] font-bold text-[#5A0000] bg-[#5A0000]/10 px-4 py-2 rounded-full border border-[#D4AF37]/30">
            Exclusive Visual Archive
          </span>

          <h1 className="font-['Cinzel'] text-3xl sm:text-5xl font-bold mt-6 mb-4 tracking-tight">
            The Runway{" "}
            <span className="bg-gradient-to-r from-[#5A0000] via-[#C94C5A] to-[#D4AF37] bg-clip-text text-transparent">
              Gallery
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#222222]/80 leading-relaxed">
            Immerse yourself in 24 curated moments of high-fashion mastery, breathtaking backstage energy, and iconic modelling showcases presented by EMA Experience.
          </p>
        </section>

        {/* GALLERY GRID (24 IMAGES) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {eventGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
              className="group relative bg-white/80 backdrop-blur-md rounded-3xl overflow-hidden border border-[#D4AF37]/30 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col"
            >
              <div className="relative h-80 w-full overflow-hidden bg-[#FAF9F6]">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-[#D4AF37] mb-1">
                    {item.subtitle}
                  </span>
                  <h3 className="font-['Cinzel'] text-white font-bold text-lg">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center justify-between text-xs text-[#5A0000] font-bold mb-2">
                    <span>{item.subtitle}</span>
                    <FiCamera className="text-[#D4AF37]" />
                  </div>
                  <h3 className="font-['Cinzel'] font-bold text-base mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#222222]/70 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-[#D4AF37]/20 flex items-center justify-between text-xs uppercase tracking-widest font-bold text-[#5A0000]">
                  <span>View Full Shot</span>
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CALL TO ACTION BANNER */}
        <div className="mt-20 bg-white/95 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-[#D4AF37]/40 shadow-2xl text-center max-w-4xl mx-auto space-y-6">
          <span className="text-[10px] uppercase tracking-widest font-bold text-[#5A0000] bg-[#5A0000]/10 px-3 py-1.5 rounded-full border border-[#D4AF37]/30">
            Be Part of the Next Stage
          </span>
          <h2 className="font-['Cinzel'] text-2xl sm:text-4xl font-bold">
            Ready to Walk Our Runway?
          </h2>
          <p className="text-xs sm:text-sm text-[#222222]/80 max-w-xl mx-auto leading-relaxed">
            Secure your registration slot or brand partnership for our upcoming fashion shows and experience elite industry exposure.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              href="/join"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#5A0000] via-[#C94C5A] to-[#D4AF37] text-white px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold shadow-lg hover:opacity-95 transition-all"
            >
              <span>Register / Book Now</span>
              <FiArrowRight className="text-[#D4AF37]" />
            </Link>
          </div>
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      {activeImage && (
        <div 
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
        >
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/25 transition-all z-50"
          >
            <FiX className="text-2xl text-[#D4AF37]" />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/25 transition-all z-50"
          >
            <FiChevronLeft className="text-2xl text-[#D4AF37]" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/25 transition-all z-50"
          >
            <FiChevronRight className="text-2xl text-[#D4AF37]" />
          </button>

          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row shadow-2xl border border-[#D4AF37]/30"
          >
            <div className="relative md:w-3/5 h-72 md:h-auto bg-black">
              <Image
                src={activeImage.src}
                alt={activeImage.title}
                fill
                className="object-contain object-center"
              />
            </div>
            <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between bg-[#FAF9F6]">
              <div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-[#5A0000] bg-[#5A0000]/10 px-3 py-1.5 rounded-full border border-[#D4AF37]/30">
                  Image {activeImage.id} of 24
                </span>
                <h3 className="font-['Cinzel'] text-2xl font-bold mt-4 mb-2">
                  {activeImage.title}
                </h3>
                <p className="text-xs text-[#222222]/80 leading-relaxed mb-6">
                  {activeImage.description}
                </p>
              </div>

              <div className="pt-6 border-t border-[#D4AF37]/20 flex items-center justify-between">
                <span className="text-xs font-bold text-[#5A0000] uppercase tracking-wider">
                  EMA Experience
                </span>
                <Link
                  href="/join"
                  className="inline-flex items-center gap-1.5 bg-[#5A0000] text-white px-5 py-2.5 rounded-xl text-xs uppercase tracking-widest font-bold shadow-md hover:bg-[#5A0000]/90 transition-all"
                >
                  <span>Book Slot</span>
                  <FiArrowRight className="text-[#D4AF37]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}