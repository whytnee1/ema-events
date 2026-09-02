"use client";

import React from "react";
import Link from "next/link";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-[#FAF9F6] font-sans border-t border-[#D4AF37]/20 relative z-10 overflow-hidden">
      
      {/* Background Logo Watermark */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden opacity-[0.35]">
        <img 
          src="/EmaLogo.png" 
          alt="" 
          className="w-[800px] h-[800px] object-contain select-none filter grayscale brightness-200" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 relative z-10">
        
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-16 border-b border-gray-800">
          
          {/* Brand & Logo Column (Spans 2 columns on lg) */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <Link href="/" className="inline-block mb-6">
              <img 
                src="/EmaLogo.png" 
                alt="EMA Logo" 
                className="h-10 sm:h-12 w-auto object-contain filter brightness-110" 
              />
            </Link>
            <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed max-w-sm">
              Representing premier international talent, curating high-end editorial campaigns, and setting global standards in luxury fashion and bespoke casting.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h4 className="font-['Cinzel'] text-sm sm:text-base font-bold tracking-wider text-white mb-5 uppercase">
              Navigation
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm font-light text-gray-400">
              <li>
                <Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/models" className="hover:text-[#D4AF37] transition-colors">Roster</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#D4AF37] transition-colors">About Agency</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#D4AF37] transition-colors">Bookings</Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col lg:col-span-2">
            <h4 className="font-['Cinzel'] text-sm sm:text-base font-bold tracking-wider text-white mb-5 uppercase">
              Headquarters
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm font-light text-gray-400">
              <li className="flex items-start gap-2.5">
                <FiMapPin className="text-[#D4AF37] mt-1 flex-shrink-0" size={14} />
                <span>Suit C17, Gostu plaza Gwarimpa Oposite MIB plaza first Avenue by oando filling station. Aso driving school</span>
              </li>

              <h4 className="font-['Cinzel'] text-sm sm:text-base font-bold tracking-wider text-white mt-6 mb-3 uppercase">Kuje Office</h4>
              <li className="flex items-start gap-2.5">
                <FiMapPin className="text-[#D4AF37] mt-1 flex-shrink-0" size={14} />
                <span>Opposit New hope international school, Kuje Abuja</span>
              </li>
            
              <li className="flex items-center gap-2.5 pt-2">
                <FiMail className="text-[#D4AF37] flex-shrink-0" size={14} />
                <a href="mailto:Queenlikemie@gmail.com" className="hover:text-[#D4AF37] transition-colors">Queenlikemie@gmail.com</a>
              </li>
              <li className="flex items-center gap-2.5">
                <FiPhone className="text-[#D4AF37] flex-shrink-0" size={14} />
                <a href="tel:+2349021751114" className="hover:text-[#D4AF37] transition-colors">+234 (0) 90 217 51114</a>
              </li>
            </ul>
          </div>
          

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-light">
          <p>&copy; {new Date().getFullYear()} EMA Management. All rights reserved.</p>
          <div className="flex gap-6">
             <Link href="/privacy" className="hover:text-gray-300 cursor-pointer transition-colors">Privacy Policy</Link>
             <Link href="/term" className="hover:text-gray-300 cursor-pointer transition-colors">Terms of Service</Link>
             <Link href="/cast" className="hover:text-gray-300 cursor-pointer transition-colors">Casting Compliance</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}