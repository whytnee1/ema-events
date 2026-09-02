"use client";

import React from "react";
import Link from "next/link";
import {
  FiCheckCircle,
  FiAward,
  FiGlobe,
  FiTarget,
  FiArrowRight,
} from "react-icons/fi";

export default function AboutPage() {
  return (
    <main className="bg-[#111111] text-[#FAF9F6] font-sans selection:bg-[#8B0000] selection:text-white">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <section className="relative min-h-[650px] h-[75vh] flex items-center justify-center overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0">

          <img
            src="/Queen2.jpg"
            alt="EMA Events Management"
            className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
              object-center
              scale-105
            "
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/45" />

          {/* Gradient for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-[#111111]" />

          {/* Subtle red overlay */}
          <div className="absolute inset-0 bg-[#660000]/10" />
        </div>

        {/* HERO CONTENT */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center pt-20">

          <span className="inline-block text-[#C9A227] uppercase tracking-[0.35em] text-xs sm:text-sm font-semibold mb-5">
            ESTABLISHED EXCELLENCE
          </span>

          <h1 className="font-['Cinzel'] text-4xl sm:text-6xl lg:text-7xl font-bold tracking-wider text-white mb-7">
            ABOUT{" "}
            <span className="text-[#C94C5A]">
              EMA
            </span>
          </h1>

          <div className="w-20 h-[2px] bg-[#C94C5A] mx-auto mb-7" />

          <p className="text-gray-200 text-base sm:text-lg lg:text-xl font-light max-w-3xl mx-auto leading-relaxed">
            EMA brings together event management, modelling, styling, and
            fashion to create exceptional experiences and develop talented
            individuals for opportunities around the world.
          </p>

        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#111111] to-transparent" />

      </section>


      {/* =====================================================
          WHO WE ARE
      ===================================================== */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-5 sm:px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* TEXT */}
          <div>

            <span className="text-[#C94C5A] uppercase tracking-[0.25em] text-xs font-semibold">
              Our Identity
            </span>

            <h2 className="font-['Cinzel'] text-3xl sm:text-4xl font-bold text-white mt-3 mb-7">
              WHO WE ARE
            </h2>

            <p className="text-gray-300 text-base sm:text-lg font-light leading-relaxed mb-6">

              <span className="font-bold text-5xl text-[#C94C5A] float-left mr-2 leading-[0.8]">
                E
              </span>

              MA is a platform committed to becoming a global leader in the
              modelling industry. We train and support the next generation
              of talent through skills development, professional training,
              seminars, and mentorship.

            </p>

            <p className="text-gray-300 text-base sm:text-lg font-light leading-relaxed mb-6">
              Our vision is to connect and train young individuals who have
              a passion for humanitarian services, modelling, entertainment,
              styling, and fashion.
            </p>

            <p className="text-gray-400 text-sm sm:text-base font-light leading-relaxed">
              At EMA, we believe that every individual has unique potential.
              We provide the guidance, skills, confidence, and opportunities
              needed to help our talents grow and build successful careers.
            </p>

          </div>


          {/* IMAGE */}
          <div className="relative group">

            {/* Glow */}
            <div className="
              absolute
              -inset-1
              bg-gradient-to-r
              from-[#8B0000]
              via-[#C94C5A]
              to-transparent
              rounded-2xl
              blur-lg
              opacity-30
              group-hover:opacity-50
              transition
              duration-700
            " />

            <div className="
              relative
              h-[420px]
              sm:h-[500px]
              rounded-2xl
              overflow-hidden
              border
              border-[#C94C5A]/30
              bg-[#1a1a1a]
            ">

              <img
                src="/EmaLogo.png"
                alt="EMA Logo"
                className="
                  w-full
                  h-full
                  object-contain
                  p-10
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY CHOOSE US
      ===================================================== */}
      <section className="py-20 sm:py-28 bg-[#171717] border-y border-[#8B0000]/30">

        <div className="max-w-7xl mx-auto px-5 sm:px-6">

          <div className="text-center max-w-3xl mx-auto mb-16">

            <span className="text-[#C94C5A] uppercase tracking-[0.25em] text-xs font-semibold">
              The EMA Standard
            </span>

            <h2 className="font-['Cinzel'] text-3xl sm:text-4xl font-bold text-white mt-3 mb-5">
              WHY CHOOSE US
            </h2>

            <p className="text-gray-300 text-sm sm:text-base font-light leading-relaxed">

              <span className="font-bold text-[#F4A6C1]">
                EMA QUEEN NIGERIA
              </span>{" "}
              is one of EMA's annual projects. It is a pageantry and award
              project that brings together young ladies from Nigeria and
              Africa for a contest.

            </p>

            <p className="text-gray-400 text-sm sm:text-base mt-4 font-light">
              One of the highlights of the project is a compulsory
              three-day camping experience for all contestants.

            </p>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">

            {/* CARD 1 */}
            <div className="
              bg-[#111111]
              p-8
              rounded-2xl
              border
              border-white/10
              hover:border-[#C94C5A]/60
              transition-all
              duration-300
              group
            ">

              <div className="
                w-13
                h-13
                rounded-xl
                bg-[#8B0000]/20
                flex
                items-center
                justify-center
                text-[#C94C5A]
                mb-6
                group-hover:bg-[#8B0000]
                group-hover:text-white
                transition-all
              ">
                <FiGlobe size={24} />
              </div>

              <h3 className="font-['Cinzel'] text-xl font-bold text-white mb-3">
                Global Opportunities
              </h3>

              <p className="text-gray-400 text-sm font-light leading-relaxed">
                We connect talented individuals with opportunities across
                Nigeria, Africa, and the international fashion and
                entertainment industry.
              </p>

            </div>


            {/* CARD 2 */}
            <div className="
              bg-[#111111]
              p-8
              rounded-2xl
              border
              border-white/10
              hover:border-[#C94C5A]/60
              transition-all
              duration-300
              group
            ">

              <div className="
                w-13
                h-13
                rounded-xl
                bg-[#8B0000]/20
                flex
                items-center
                justify-center
                text-[#C94C5A]
                mb-6
                group-hover:bg-[#8B0000]
                group-hover:text-white
                transition-all
              ">
                <FiAward size={24} />
              </div>

              <h3 className="font-['Cinzel'] text-xl font-bold text-white mb-3">
                Talent Development
              </h3>

              <p className="text-gray-400 text-sm font-light leading-relaxed">
                We provide professional training, skills development,
                seminars, mentorship, and practical guidance to help
                upcoming talent grow.
              </p>

            </div>


            {/* CARD 3 */}
            <div className="
              bg-[#111111]
              p-8
              rounded-2xl
              border
              border-white/10
              hover:border-[#C94C5A]/60
              transition-all
              duration-300
              group
            ">

              <div className="
                w-13
                h-13
                rounded-xl
                bg-[#8B0000]/20
                flex
                items-center
                justify-center
                text-[#C94C5A]
                mb-6
                group-hover:bg-[#8B0000]
                group-hover:text-white
                transition-all
              ">
                <FiCheckCircle size={24} />
              </div>

              <h3 className="font-['Cinzel'] text-xl font-bold text-white mb-3">
                Professional Excellence
              </h3>

              <p className="text-gray-400 text-sm font-light leading-relaxed">
                We promote professionalism, discipline, confidence,
                creativity, and respect while creating a supportive
                environment for our talents.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          MISSION
      ===================================================== */}
      <section className="py-20 sm:py-28 max-w-5xl mx-auto px-5 sm:px-6">

        <div className="
          relative
          overflow-hidden
          bg-gradient-to-b
          from-[#1b1b1b]
          to-[#111111]
          p-10
          sm:p-16
          rounded-3xl
          border
          border-[#8B0000]/40
        ">

          <div className="absolute top-0 right-0 p-8 opacity-5 text-[#C94C5A]">
            <FiTarget size={180} />
          </div>

          <div className="relative z-10 text-center">

            <span className="text-[#C94C5A] uppercase tracking-[0.25em] text-xs font-semibold">
              Our Purpose
            </span>

            <h2 className="font-['Cinzel'] text-3xl sm:text-5xl font-bold text-white mt-3 mb-7">
              OUR MISSION
            </h2>

            <p className="text-gray-200 text-lg sm:text-xl font-light leading-relaxed max-w-3xl mx-auto mb-8">
              Our mission is to empower the next generation of models and
              talents through professional training, skills development,
              seminars, and mentorship, helping them build confidence,
              develop their abilities, and achieve their dreams.
            </p>

            <div className="w-20 h-[2px] bg-[#C94C5A] mx-auto" />

          </div>

        </div>

      </section>


      {/* =====================================================
          CEO
      ===================================================== */}
      <section className="relative py-20 sm:py-28 border-t border-[#8B0000]/30 overflow-hidden">

        {/* CEO Background Image & Overlays */}
        <div className="absolute inset-0 z-0">
          <img
            src="/ceo4.jpg"
            alt="CEO Background"
            className="w-full h-full object-cover object-center filter grayscale brightness-125 contrast-110 opacity-[1.0] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#171717]/80 via-[#171717]/70 to-[#171717]" />
        </div>

        <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* CEO IMAGES GRID COMPOSITION */}
            <div className="lg:col-span-5">
              <div className="grid grid-cols-12 gap-3 sm:gap-4 items-center">
                
                {/* Main featured image (CEO.jpg) */}
                <div className="col-span-8 relative h-[380px] sm:h-[460px] rounded-2xl overflow-hidden border border-[#C94C5A]/40 shadow-2xl group">
                  <img
                    src="/CEO.jpg"
                    alt="Founder and CEO of EMA"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-5 sm:p-6">
                    <h3 className="font-['Cinzel'] text-xl sm:text-2xl font-bold text-white">
                      Founder & CEO
                    </h3>
                    <p className="text-[#D4AF37] text-xs sm:text-sm uppercase tracking-wider mt-1">
                      EMA Management
                    </p>
                  </div>
                </div>

                {/* Side stacked secondary images (ceo2.jpg & ceo3.jpg) */}
                <div className="col-span-4 flex flex-col gap-3 sm:gap-4 h-[380px] sm:h-[460px]">
                  
                  <div className="relative flex-1 rounded-xl overflow-hidden border border-white/15 shadow-lg group">
                    <img
                      src="/ceo2.jpg"
                      alt="Evidence Aso Sunday - EMA CEO"
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                  </div>

                  <div className="relative flex-1 rounded-xl overflow-hidden border border-white/15 shadow-lg group">
                    <img
                      src="/ceo3.jpg"
                      alt="Evidence Aso Sunday in action"
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                  </div>

                </div>

              </div>
            </div>


            {/* CEO TEXT */}
            <div className="lg:col-span-7">

              <span className="text-[#C94C5A] uppercase tracking-[0.25em] text-xs font-semibold">
                Leadership
              </span>

              <h2 className="font-['Cinzel'] text-3xl sm:text-4xl font-bold text-white mt-3 mb-7">
                ABOUT THE CEO
              </h2>

              <p className="text-gray-300 text-base sm:text-lg font-light leading-relaxed mb-6">
                Evidence Aso Sunday was born on June 24, 1998, in Kubwa, FCT, into the family of Hon. Aso Nehemiah Sunday and Mrs. Monica Sunday. She is the second of six children and hails from Gizagwai, Kaura Local Government Area of Kaduna State.

                Her educational journey began at LEA Primary School, Gizagwai, followed by her secondary education at Government Girls Secondary School, Sabon Wuse, Niger State. She earned her NCE from the College of Education, Zuba, and furthered her studies at the Universal School of Aviation. She later graduated from the University of Abuja with a degree in Educational Management and Planning.

                She successfully completed the National Youth Service Corps (NYSC) program, fulfilling her service year in the Federal Capital Territory.
              </p>

              <p className="text-gray-300 text-sm sm:text-base font-light leading-relaxed mb-8">
                Evidence is the visionary founder of EMA Events Management and the prestigious EMA Queen Nigeria pageant. She is also the founder of Love with Evidence, an initiative rooted in compassion, faith, and community impact.

                A vibrant humanitarian and a devoted lover of God, Evidence continues to inspire others through her service, creativity, and leadership. She currently manages Aso Driving School, contributing actively to skill development and empowerment within her community.
              </p>

              <Link
                href="/contact"
                className="
                  inline-flex
                  items-center
                  gap-2
                  bg-[#8B0000]
                  text-white
                  font-semibold
                  px-7
                  py-3.5
                  rounded-full
                  text-sm
                  tracking-wider
                  uppercase
                  hover:bg-[#A00000]
                  transition-all
                  duration-300
                "
              >
                Get in Touch
                <FiArrowRight size={16} />
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}