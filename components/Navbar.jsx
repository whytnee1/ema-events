"use client"
import React, { useState } from "react";
import Link from "next/link";
import { 
  FiUserPlus, 
  FiMenu, 
  FiX 
} from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'HOME', href: '/' },
    { name: 'PAGEANTRY/MODELS', href: '/models' },
    { name: 'EVENTS', href: '/event' },
    { name: 'USHERING', href: '/usher' },
    { name: 'OUR SERVICES', href: '/services' },
    { name: 'VOTE POLE', href: '/vote' },
    { name: 'ABOUT EMA', href: '/about' },
    { name: 'CONTACT/BOOKINGS', href: '/contact' },
  ];

  return (
    <header className="fixed top-3 sm:top-5 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 bg-[#FAF9F6]/85 rounded-full backdrop-blur-md border border-[#D4AF37]/30 transition-all duration-300 shadow-md">
      <style jsx>{`
        @keyframes waveHover {
          0% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-3px) rotate(-2deg); }
          50% { transform: translateY(-1px) rotate(1deg); }
          75% { transform: translateY(-4px) rotate(-1deg); }
          100% { transform: translateY(-2px) rotate(0deg); }
        }
        .wave-text span {
          display: inline-block;
          transition: transform 0.3s ease;
        }
        .group:hover .wave-text span {
          animation: waveHover 0.6s ease-in-out infinite alternate;
        }
        .group:hover .wave-text span:nth-child(odd) {
          animation-delay: 0.1s;
        }
        .group:hover .wave-text span:nth-child(even) {
          animation-delay: 0.2s;
        }

        @keyframes dropdownSlide {
          0% { opacity: 0; transform: translateY(-12px) scale(0.98); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .mobile-dropdown-anim {
          animation: dropdownSlide 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      <div className="w-full mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-2">
        
        {/* EXTREME LEFT: Logo & Brand Name */}
        <Link href="/" className="flex items-center gap-1.5 sm:gap-2 group shrink-0 border-0 outline-none focus:outline-none">
          <div className="relative w-20 sm:w-28 md:w-32 lg:w-36 h-10 sm:h-14 flex items-center justify-center overflow-hidden border-0 bg-transparent">
            <img 
              src="/EmaLogo.png" 
              alt="Events Management Logo" 
              className="w-full h-full object-contain border-0 transform group-hover:scale-110 transition-transform duration-500" 
            />
          </div>
          <span className="text-xl sm:text-2xl text-[#222222]/35 hidden md:inline">|</span>
          <div className="flex flex-col border-0">
            <span className="font-['Cinzel'] text-[11px] sm:text-xs md:text-sm font-bold tracking-tight lg:tracking-wider bg-gradient-to-r from-[#222222] via-[#FF3366] to-[#D4AF37] bg-clip-text text-transparent group-hover:opacity-90 transition-opacity whitespace-nowrap border-0">
              Events Management
            </span>
            
            <span className="text-[8px] sm:text-[9px] tracking-widest text-[#7A5C00] font-semibold uppercase whitespace-nowrap mt-[-0.5px]">
             
            </span>
          </div>
        </Link>

        {/* CENTER: Wavy Navigation Menu */}
        <nav className="hidden xl:flex items-center space-x-0.5 2xl:space-x-1.5 bg-[#222222]/5 p-1.5 rounded-full border border-[#D4AF37]/30 shadow-inner backdrop-blur-sm shrink-0">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative px-2.5 2xl:px-4 py-2 rounded-full text-[10px] 2xl:text-xs font-bold tracking-wider uppercase text-[#222222] transition-all duration-300 ease-out overflow-hidden group hover:text-[#C94C5A] hover:bg-[#5A0000]/10 hover:shadow-[0_0_20px_rgba(201,76,90,0.2)] border border-transparent hover:border-[#C94C5A]/40 whitespace-nowrap"
            >
              <span className="wave-text relative z-10 inline-block">
                {item.name.split("").map((char, index) => (
                  <span key={index} style={{ animationDelay: `${index * 0.05}s` }}>
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </span>
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#C94C5A] transition-all duration-300 group-hover:w-3/4"></span>
            </Link>
          ))}
        </nav>

        {/* EXTREME RIGHT: JOIN EMA CTA & Hamburger Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <Link
            href="/join"
            className="group relative hidden xl:inline-flex items-center gap-2 bg-[#5A0000] text-white px-5 2xl:px-6 py-2.5 text-xs uppercase tracking-widest font-bold overflow-hidden rounded-full border border-[#D4AF37]/50 shadow-[0_4px_20px_rgba(90,0,0,0.3)] transition-all duration-300 hover:shadow-[0_6px_25px_rgba(90,0,0,0.5)] hover:bg-[#450000] whitespace-nowrap"
          >
            <span className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span> 
            <FiUserPlus className="text-sm text-[#D4AF37] group-hover:text-white transition-colors duration-300" />
            <span className="relative z-10">JOIN EMA</span>
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#222222]/5 border border-[#D4AF37]/30 text-[#222222] hover:text-[#C94C5A] hover:border-[#C94C5A] focus:outline-none text-xl sm:text-2xl transition-all shadow-sm"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <FiX className="transform rotate-90 transition-transform duration-300" /> : <FiMenu className="transform rotate-0 transition-transform duration-300" />}
          </button>
        </div>

      </div>

      {/* Animated Dropdown Menu for Mobile and Laptops */}
      {isOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-[#FAF9F6]/95 border-b border-[#D4AF37]/40 px-6 py-6 space-y-3 backdrop-blur-2xl shadow-2xl mobile-dropdown-anim rounded-b-3xl max-h-[80vh] overflow-y-auto">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block text-xs sm:text-sm font-bold tracking-widest uppercase text-[#222222] hover:text-[#C94C5A] transition-all py-3 border-b border-black/5 group"
            >
              <span className="wave-text inline-block">
                {item.name.split("").map((char, index) => (
                  <span key={index} style={{ animationDelay: `${index * 0.05}s` }}>
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </span>
            </Link>
          ))}
          <div className="pt-3">
            <Link
              href="/join"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-[#5A0000] text-white py-3.5 text-xs uppercase tracking-widest font-bold rounded-full border border-[#D4AF37]/50 shadow-lg hover:bg-[#450000] transition-all"
            >
              <FiUserPlus className="text-sm text-[#D4AF37]" />
              <span>JOIN EMA</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}