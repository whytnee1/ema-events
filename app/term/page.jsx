"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiFileText, FiCheckSquare, FiAlertCircle, FiUserCheck, FiMail, FiArrowLeft, FiShield } from "react-icons/fi";
import Navbar from "@/components/Navbar";

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#FAF9F6] font-sans selection:bg-[#FF3366] selection:text-white overflow-x-hidden relative">

      {/* BACKGROUND ASSETS & STATIC LOGO WATERMARK */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center">
        <div className="absolute w-[120vw] h-[120vh] max-w-[1600px] max-h-[1600px] opacity-[0.02]">
          <Image
            src="/EmaLogo.png"
            alt=""
            fill
            priority
            className="object-cover object-center filter grayscale"
          />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#5A0000]/20 via-[#0A0A0A] to-[#0A0A0A]"></div>
      </div>

      {/* Navigation Component Integration */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative z-10 pt-36 pb-16 sm:pt-44 sm:pb-24 px-4 sm:px-6 max-w-7xl mx-auto border-b border-[#D4AF37]/15">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-[#D4AF37] hover:text-[#FF3366] transition-colors"
            >
              <FiArrowLeft />
              <span>Return Home</span>
            </Link>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#5A0000]/30 border border-[#D4AF37]/30 backdrop-blur-md">
              <FiFileText className="text-[#D4AF37] text-xs" />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#FAF9F6]">
                User Agreement & Conditions
              </span>
            </div>

            <h1 className="font-['Cinzel'] text-4xl sm:text-6xl font-extrabold tracking-tight text-[#FAF9F6] leading-[1.1]">
              TERMS OF <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FF3366] to-[#C94C5A]">USE</span>
            </h1>

            <p className="text-gray-300 text-sm sm:text-base font-light leading-relaxed max-w-2xl">
              Welcome to EMA Events Management. By accessing our platform, booking our services, or applying to our talent roster, you agree to comply with our professional standards and legal conditions.
            </p>

            <div className="flex flex-wrap gap-4 pt-2 text-xs text-gray-400 font-mono tracking-wider">
              <span className="px-3 py-1 bg-[#161616] rounded-md border border-[#D4AF37]/20">EFFECTIVE DATE: JAN 2026</span>
              <span className="px-3 py-1 bg-[#161616] rounded-md border border-[#D4AF37]/20">GOVERNING BODY: EMA MANAGEMENT</span>
            </div>
          </div>

          {/* Right Side Visual Info Card */}
          <div className="lg:col-span-5">
            <div className="relative p-6 sm:p-8 rounded-3xl bg-[#141414] border border-[#D4AF37]/30 shadow-2xl backdrop-blur-xl">
              <div className="absolute -top-3 right-6 px-3 py-1 bg-[#D4AF37] text-black text-[9px] font-bold tracking-widest uppercase rounded-full shadow-lg">
                BINDING AGREEMENT
              </div>

              <h3 className="font-['Cinzel'] text-xl font-bold text-white mb-4 flex items-center gap-2">
                <FiShield className="text-[#D4AF37]" />
                Summary of Rules
              </h3>

              <ul className="space-y-4 text-xs sm:text-sm text-gray-300 font-light">
                <li className="flex items-start gap-3">
                  <FiCheckSquare className="text-[#D4AF37] mt-1 flex-shrink-0" />
                  <span>Accurate representation required for all model and talent submissions.</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckSquare className="text-[#D4AF37] mt-1 flex-shrink-0" />
                  <span>Strict protection of EMA intellectual property and proprietary brand assets.</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckSquare className="text-[#D4AF37] mt-1 flex-shrink-0" />
                  <span>Professional conduct mandated during all events and client interactions.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Section 1 */}
          <div className="p-8 rounded-3xl bg-[#141414]/90 border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#1E1E1E] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mb-6">
                <FiUserCheck className="text-xl" />
              </div>
              <h2 className="font-['Cinzel'] text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light mb-4">
                By browsing, registering with, or utilizing services offered by EMA Events Management, you acknowledge that you have read, understood, and agreed to be bound by these Terms of Use. If you disagree with any portion of these provisions, you must discontinue use of our platform immediately.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-white/5 text-[10px] tracking-widest uppercase text-gray-500 font-mono">
              [AGREEMENT SCOPE]
            </div>
          </div>

          {/* Section 2 */}
          <div className="p-8 rounded-3xl bg-[#141414]/90 border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#1E1E1E] border border-[#D4AF37]/30 flex items-center justify-center text-[#FF3366] mb-6">
                <FiFileText className="text-xl" />
              </div>
              <h2 className="font-['Cinzel'] text-2xl font-bold text-white mb-4">2. Talent & Model Submissions</h2>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light mb-4">
                Individuals submitting portfolios or casting applications to EMA declare that:
              </p>
              <ul className="list-disc list-inside space-y-2 text-xs text-gray-400 font-light pl-2">
                <li>All provided measurements, media, and credentials are completely truthful and accurate.</li>
                <li>You hold full rights to any imagery or portfolio content uploaded through our systems.</li>
                <li>EMA maintains full discretion in evaluating, accepting, or declining talent applications without mandatory explanation.</li>
              </ul>
            </div>
            <div className="pt-6 mt-6 border-t border-white/5 text-[10px] tracking-widest uppercase text-gray-500 font-mono">
              [TALENT GUIDELINES]
            </div>
          </div>

          {/* Section 3 */}
          <div className="p-8 rounded-3xl bg-[#141414]/90 border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#1E1E1E] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mb-6">
                <FiAlertCircle className="text-xl" />
              </div>
              <h2 className="font-['Cinzel'] text-2xl font-bold text-white mb-4">3. Intellectual Property</h2>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light">
                All visual assets, brand logos, typography choices (including Cinzel styling), text copy, and web design frameworks belonging to EMA Events Management are protected under intellectual property laws. Unauthorized reproduction, redistribution, or commercial exploitation of our proprietary layout is strictly prohibited.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-white/5 text-[10px] tracking-widest uppercase text-gray-500 font-mono">
              [BRAND PROTECTION]
            </div>
          </div>

          {/* Section 4 */}
          <div className="p-8 rounded-3xl bg-[#141414]/90 border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#1E1E1E] border border-[#D4AF37]/30 flex items-center justify-center text-[#FF3366] mb-6">
                <FiMail className="text-xl" />
              </div>
              <h2 className="font-['Cinzel'] text-2xl font-bold text-white mb-4">4. Modifications & Inquiries</h2>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light mb-4">
                EMA reserves the right to modify these terms at any time to reflect structural evolution or legal compliance updates. For inquiries concerning these terms, contact our administrative department:
              </p>
              <div className="p-4 rounded-xl bg-[#1A1A1A] border border-[#D4AF37]/30 text-xs font-mono text-[#D4AF37]">
                EMAIL: Queenlikemie@gmail.com
              </div>
            </div>
            <div className="pt-6 mt-6 border-t border-white/5 text-[10px] tracking-widest uppercase text-gray-500 font-mono">
              [LEGAL INQUIRIES]
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER CALLOUT BANNER */}
      <section className="py-12 px-4 sm:px-6 bg-[#121212] border-t border-[#D4AF37]/20 text-center relative z-10">
        <div className="max-w-3xl mx-auto space-y-4">
          <p className="font-['Cinzel'] text-lg font-bold text-white">EMA Events Management</p>
          <p className="text-xs text-gray-400 font-light">
            Upholding rigorous industry standards across high-fashion production, event orchestration, and talent booking.
          </p>
          <div className="pt-2">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center bg-[#5A0000] hover:bg-[#450000] text-white px-8 py-3 rounded-full text-xs uppercase tracking-widest font-bold border border-[#D4AF37]/50 transition-all shadow-lg"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}