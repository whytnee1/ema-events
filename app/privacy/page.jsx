"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FiShield,
  FiLock,
  FiEye,
  FiServer,
  FiMail,
  FiArrowLeft,
  FiCheckCircle,
} from "react-icons/fi";
import Navbar from "@/components/Navbar";

export default function PrivacyPolicyPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0A0A0A] font-sans text-[#FAF9F6] selection:bg-[#FF3366] selection:text-white">

      {/* =========================================================
          BACKGROUND / EMA WATERMARK
      ========================================================= */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* EMA Logo Watermark */}
        <div className="absolute left-1/2 top-1/2 h-[90vw] w-[90vw] max-h-[1200px] max-w-[1200px] -translate-x-1/2 -translate-y-1/2 opacity-[0.025]">
          <Image
            src="/EmaLogo.png"
            alt=""
            fill
            priority
            sizes="90vw"
            className="object-contain grayscale"
          />
        </div>

        {/* Burgundy Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#5A0000]/25 via-[#0A0A0A]/90 to-[#0A0A0A]" />

        {/* Subtle bottom glow */}
        <div className="absolute bottom-0 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#5A0000]/10 blur-[140px]" />
      </div>

      {/* =========================================================
          NAVBAR
      ========================================================= */}
      <Navbar />

      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <section className="relative z-10 mx-auto max-w-7xl border-b border-[#D4AF37]/15 px-4 pb-16 pt-36 sm:px-6 sm:pb-24 sm:pt-44">

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">

          {/* LEFT SIDE */}
          <div className="space-y-6 lg:col-span-7">

            {/* Back Home */}
            <Link
              href="/"
              className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37] transition-colors duration-300 hover:text-[#FF3366]"
            >
              <FiArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
              <span>Return Home</span>
            </Link>

            {/* Legal Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#5A0000]/30 px-4 py-1.5 backdrop-blur-md">
              <FiShield className="text-xs text-[#D4AF37]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#FAF9F6]">
                Legal Framework & Data Protection
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-['Cinzel'] text-4xl font-extrabold leading-[1.1] tracking-tight text-[#FAF9F6] sm:text-6xl">
              PRIVACY{" "}
              <span className="bg-gradient-to-r from-[#D4AF37] via-[#FF3366] to-[#C94C5A] bg-clip-text text-transparent">
                POLICY
              </span>
            </h1>

            {/* Description */}
            <p className="max-w-2xl text-sm font-light leading-relaxed text-gray-300 sm:text-base">
              At EMA Events Management, we treat your personal data with the
              same level of care, professionalism, and security that we bring
              to our fashion, modelling, and event productions. This policy
              explains how we collect, use, protect, and manage your
              information.
            </p>

            {/* Information Badges */}
            <div className="flex flex-wrap gap-4 pt-2 font-mono text-[10px] tracking-wider text-gray-400 sm:text-xs">
              <span className="rounded-md border border-[#D4AF37]/20 bg-[#161616] px-3 py-1.5">
                EFFECTIVE DATE: JAN 2026
              </span>

              <span className="rounded-md border border-[#D4AF37]/20 bg-[#161616] px-3 py-1.5">
                JURISDICTION: NIGERIA / GLOBAL
              </span>
            </div>
          </div>

          {/* =====================================================
              RIGHT SIDE COMMITMENT CARD
          ===================================================== */}
          <div className="lg:col-span-5">

            <div className="relative rounded-3xl border border-[#D4AF37]/30 bg-[#141414]/95 p-6 shadow-2xl backdrop-blur-xl sm:p-8">

              {/* Secure Protocol Badge */}
              <div className="absolute -top-3 right-6 rounded-full bg-[#FF3366] px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-white shadow-lg">
                Secure Protocol
              </div>

              {/* Card Heading */}
              <h3 className="mb-5 flex items-center gap-2 font-['Cinzel'] text-xl font-bold text-white">
                <FiLock className="text-[#D4AF37]" />
                Key Commitments
              </h3>

              {/* Commitments */}
              <ul className="space-y-5 text-xs font-light text-gray-300 sm:text-sm">

                <li className="flex items-start gap-3">
                  <FiCheckCircle className="mt-1 flex-shrink-0 text-[#D4AF37]" />

                  <span>
                    Absolute confidentiality for talent portfolios and
                    client briefs.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <FiCheckCircle className="mt-1 flex-shrink-0 text-[#D4AF37]" />

                  <span>
                    Secure handling of information submitted through our
                    official communication channels.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <FiCheckCircle className="mt-1 flex-shrink-0 text-[#D4AF37]" />

                  <span>
                    No unauthorized commercial sharing of personal profiles
                    or submitted information.
                  </span>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PRIVACY CONTENT
      ========================================================= */}
      <section className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

          {/* =====================================================
              SECTION 1
          ===================================================== */}
          <div className="group flex flex-col justify-between rounded-3xl border border-[#D4AF37]/20 bg-[#141414]/90 p-8 transition-all duration-300 hover:border-[#D4AF37]/50 hover:bg-[#171717]">

            <div>

              {/* Icon */}
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#D4AF37]/30 bg-[#1E1E1E] text-[#D4AF37] transition-transform duration-300 group-hover:scale-105">
                <FiEye className="text-xl" />
              </div>

              {/* Heading */}
              <h2 className="mb-4 font-['Cinzel'] text-2xl font-bold text-white">
                1. Information We Collect
              </h2>

              {/* Paragraph */}
              <p className="mb-4 text-xs font-light leading-relaxed text-gray-300 sm:text-sm">
                When you interact with EMA Events Management, whether you are
                applying to join our talent roster or contacting us about a
                project, we may collect information needed to respond to your
                request and provide our services.
              </p>

              {/* List */}
              <ul className="space-y-2 pl-2 text-xs font-light text-gray-400">

                <li className="flex gap-2">
                  <span className="text-[#D4AF37]">•</span>
                  <span>Full name and professional details.</span>
                </li>

                <li className="flex gap-2">
                  <span className="text-[#D4AF37]">•</span>
                  <span>Email address and phone number.</span>
                </li>

                <li className="flex gap-2">
                  <span className="text-[#D4AF37]">•</span>
                  <span>
                    Professional experience, modelling information, and
                    portfolio materials where applicable.
                  </span>
                </li>

                <li className="flex gap-2">
                  <span className="text-[#D4AF37]">•</span>
                  <span>
                    Project details, event requirements, timelines, and
                    related information supplied by clients.
                  </span>
                </li>

              </ul>
            </div>

            {/* Label */}
            <div className="mt-6 border-t border-white/5 pt-6 font-mono text-[10px] uppercase tracking-widest text-gray-500">
              [COLLECTION SCOPE]
            </div>
          </div>

          {/* =====================================================
              SECTION 2
          ===================================================== */}
          <div className="group flex flex-col justify-between rounded-3xl border border-[#D4AF37]/20 bg-[#141414]/90 p-8 transition-all duration-300 hover:border-[#D4AF37]/50 hover:bg-[#171717]">

            <div>

              {/* Icon */}
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#D4AF37]/30 bg-[#1E1E1E] text-[#FF3366] transition-transform duration-300 group-hover:scale-105">
                <FiServer className="text-xl" />
              </div>

              {/* Heading */}
              <h2 className="mb-4 font-['Cinzel'] text-2xl font-bold text-white">
                2. Use of Information
              </h2>

              {/* Paragraph */}
              <p className="mb-4 text-xs font-light leading-relaxed text-gray-300 sm:text-sm">
                The information you provide may be used to support the
                services and communication you request from EMA Events
                Management.
              </p>

              {/* List */}
              <ul className="space-y-2 pl-2 text-xs font-light text-gray-400">

                <li className="flex gap-2">
                  <span className="text-[#FF3366]">•</span>
                  <span>
                    Communicating with applicants, models, clients, and
                    partners.
                  </span>
                </li>

                <li className="flex gap-2">
                  <span className="text-[#FF3366]">•</span>
                  <span>
                    Reviewing talent applications for modelling and
                    commercial opportunities.
                  </span>
                </li>

                <li className="flex gap-2">
                  <span className="text-[#FF3366]">•</span>
                  <span>
                    Preparing event management, modelling, styling, and
                    production proposals.
                  </span>
                </li>

                <li className="flex gap-2">
                  <span className="text-[#FF3366]">•</span>
                  <span>
                    Managing bookings, enquiries, and other legitimate
                    business activities.
                  </span>
                </li>

              </ul>
            </div>

            {/* Label */}
            <div className="mt-6 border-t border-white/5 pt-6 font-mono text-[10px] uppercase tracking-widest text-gray-500">
              [OPERATIONAL USE]
            </div>
          </div>

          {/* =====================================================
              SECTION 3
          ===================================================== */}
          <div className="group flex flex-col justify-between rounded-3xl border border-[#D4AF37]/20 bg-[#141414]/90 p-8 transition-all duration-300 hover:border-[#D4AF37]/50 hover:bg-[#171717]">

            <div>

              {/* Icon */}
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#D4AF37]/30 bg-[#1E1E1E] text-[#D4AF37] transition-transform duration-300 group-hover:scale-105">
                <FiLock className="text-xl" />
              </div>

              {/* Heading */}
              <h2 className="mb-4 font-['Cinzel'] text-2xl font-bold text-white">
                3. Data Protection & Security
              </h2>

              {/* Paragraph */}
              <p className="text-xs font-light leading-relaxed text-gray-300 sm:text-sm">
                We take reasonable administrative, technical, and
                organizational measures to protect the information entrusted
                to us against unauthorized access, misuse, loss, alteration,
                or disclosure. Access to submitted information is limited to
                authorized personnel who need it for legitimate EMA business
                purposes.
              </p>
            </div>

            {/* Label */}
            <div className="mt-6 border-t border-white/5 pt-6 font-mono text-[10px] uppercase tracking-widest text-gray-500">
              [DATA SECURITY]
            </div>
          </div>

          {/* =====================================================
              SECTION 4
          ===================================================== */}
          <div className="group flex flex-col justify-between rounded-3xl border border-[#D4AF37]/20 bg-[#141414]/90 p-8 transition-all duration-300 hover:border-[#D4AF37]/50 hover:bg-[#171717]">

            <div>

              {/* Icon */}
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#D4AF37]/30 bg-[#1E1E1E] text-[#FF3366] transition-transform duration-300 group-hover:scale-105">
                <FiMail className="text-xl" />
              </div>

              {/* Heading */}
              <h2 className="mb-4 font-['Cinzel'] text-2xl font-bold text-white">
                4. Inquiries & Contact
              </h2>

              {/* Paragraph */}
              <p className="mb-4 text-xs font-light leading-relaxed text-gray-300 sm:text-sm">
                If you have questions, formal requests, or concerns regarding
                this Privacy Policy or how your information is managed, you
                can contact the EMA management team directly.
              </p>

              {/* Email */}
              <a
                href="mailto:Queenlikemie@gmail.com"
                className="block rounded-xl border border-[#D4AF37]/30 bg-[#1A1A1A] p-4 font-mono text-xs text-[#D4AF37] transition-colors duration-300 hover:border-[#FF3366]/50 hover:text-[#FF3366]"
              >
                EMAIL: Queenlikemie@gmail.com
              </a>
            </div>

            {/* Label */}
            <div className="mt-6 border-t border-white/5 pt-6 font-mono text-[10px] uppercase tracking-widest text-gray-500">
              [LEGAL DESK]
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          FOOTER CALLOUT
      ========================================================= */}
      <section className="relative z-10 border-t border-[#D4AF37]/20 bg-[#121212] px-4 py-12 text-center sm:px-6">

        <div className="mx-auto max-w-3xl space-y-4">

          <p className="font-['Cinzel'] text-lg font-bold text-white">
            EMA Events Management
          </p>

          <p className="text-xs font-light leading-relaxed text-gray-400">
            Redefining elegance through professional event management,
            modelling, fashion, and responsible handling of personal
            information.
          </p>

          <div className="pt-2">

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-[#D4AF37]/50 bg-[#5A0000] px-8 py-3 text-xs font-bold uppercase tracking-widest text-white shadow-lg transition-all duration-300 hover:bg-[#450000] hover:shadow-[#5A0000]/30"
            >
              Contact Support
            </Link>

          </div>
        </div>
      </section>

    </div>
  );
}