"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiCalendar,
  FiUsers,
  FiCamera,
  FiMic,
  FiCheckCircle,
  FiArrowRight,
  FiStar,
} from "react-icons/fi";

export default function ServicesPage() {
  const coreServices = [
    {
      icon: FiUsers,
      title: "Runway & Fashion Shows",
      description:
        "We plan and manage professional fashion shows, designer showcases, and runway events. From model selection to backstage coordination, we make sure every detail is handled professionally.",
      features: [
        "Professional Model Casting",
        "Stage & Runway Direction",
        "Backstage Coordination",
        "Lighting & Sound Production",
      ],
    },
    {
      icon: FiCalendar,
      title: "Corporate & Brand Events",
      description:
        "We create memorable corporate and brand events that represent your business professionally. From product launches to award nights, we help make every occasion special.",
      features: [
        "Product Launches & Openings",
        "Gala Dinners & Award Nights",
        "Brand Activations",
        "VIP Guest Management",
      ],
    },
    {
      icon: FiCamera,
      title: "Editorial & Commercial Production",
      description:
        "We help bring creative ideas to life through professional photography, fashion campaigns, videos, and commercial productions using talented models and creative professionals.",
      features: [
        "Lookbook & Campaign Shoots",
        "Fashion Films & Commercials",
        "Art Direction & Styling",
        "Production Coordination",
      ],
    },
    {
      icon: FiMic,
      title: "Talent Management & Booking",
      description:
        "We connect brands and event organizers with professional models, brand ambassadors, hosts, and other talented individuals for different types of events and productions.",
      features: [
        "Professional Talent Selection",
        "Model & Talent Bookings",
        "Brand Ambassador Placements",
        "Event Host Management",
      ],
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Vision",
      desc: "We listen to your ideas, understand your goals, and learn what you want to achieve.",
    },
    {
      number: "02",
      title: "Planning & Preparation",
      desc: "Our team creates a clear plan covering talent, styling, logistics, timing, and production.",
    },
    {
      number: "03",
      title: "Execution",
      desc: "Our experienced team manages the event or production and makes sure everything runs smoothly.",
    },
    {
      number: "04",
      title: "Review & Delivery",
      desc: "After the project, we review the results and make sure you are completely satisfied.",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#FAF9F6] text-[#222222] pt-32 pb-24">

      {/* =====================================================
          BACKGROUND WATERMARK
      ====================================================== */}
      <div
        className="
          fixed
          inset-0
          z-0
          pointer-events-none
          flex
          items-center
          justify-center
          overflow-hidden
        "
        aria-hidden="true"
      >
        <div
          className="
            relative
            w-[75vw]
            h-[75vw]
            max-w-[850px]
            max-h-[850px]
            opacity-[0.18]
          "
        >
          <Image
            src="/EmaLogo.png"
            alt=""
            fill
            priority={false}
            sizes="75vw"
            className="object-contain"
          />
        </div>
      </div>

      {/* Soft background glow */}
      <div
        className="
          fixed
          top-1/3
          left-1/2
          -translate-x-1/2
          w-[500px]
          h-[500px]
          rounded-full
          bg-[#D4AF37]/5
          blur-[120px]
          pointer-events-none
          z-0
        "
      />

      {/* =====================================================
          CONTENT
      ====================================================== */}
      <div className="relative z-10">

        {/* =================================================
            HERO
        ================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">

          <span
            className="
              inline-flex
              items-center
              gap-2
              text-[10px]
              sm:text-xs
              uppercase
              tracking-[0.3em]
              font-bold
              text-[#5A0000]
              bg-[#5A0000]/5
              px-5
              py-2
              rounded-full
              border
              border-[#D4AF37]/40
            "
          >
            <FiStar className="text-[#D4AF37]" />
            What We Do
          </span>

          <h1
            className="
              font-['Cinzel']
              text-4xl
              sm:text-5xl
              lg:text-6xl
              font-bold
              mt-7
              mb-6
              tracking-tight
              text-[#222222]
            "
          >
            Our{" "}
            <span className="text-[#5A0000]">
              Services
            </span>
          </h1>

          <p
            className="
              max-w-2xl
              mx-auto
              text-base
              sm:text-lg
              text-[#222222]/80
              leading-relaxed
            "
          >
            From fashion and modelling to events, styling and
            creative production, EMA provides professional services
            designed to bring your ideas to life.
          </p>

          <div className="w-20 h-[2px] bg-[#D4AF37] mx-auto mt-8" />

        </section>


        {/* =================================================
            SERVICES
        ================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-28">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">

            {coreServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <article
                  key={index}
                  className="
                    group
                    relative
                    bg-white/90
                    backdrop-blur-xl
                    rounded-3xl
                    p-7
                    sm:p-9
                    border
                    border-[#D4AF37]/20
                    shadow-[0_10px_40px_rgba(0,0,0,0.04)]
                    hover:shadow-[0_20px_60px_rgba(90,0,0,0.12)]
                    hover:-translate-y-1
                    transition-all
                    duration-500
                    overflow-hidden
                  "
                >

                  {/* Gold top accent */}
                  <div
                    className="
                      absolute
                      top-0
                      left-0
                      w-0
                      h-1
                      bg-[#D4AF37]
                      group-hover:w-full
                      transition-all
                      duration-500
                    "
                  />

                  {/* Icon */}
                  <div
                    className="
                      w-16
                      h-16
                      rounded-2xl
                      bg-[#FAF9F6]
                      border
                      border-[#D4AF37]/30
                      flex
                      items-center
                      justify-center
                      mb-7
                      group-hover:bg-[#5A0000]
                      group-hover:border-[#5A0000]
                      transition-all
                      duration-300
                    "
                  >
                    <Icon
                      size={27}
                      className="
                        text-[#5A0000]
                        group-hover:text-[#D4AF37]
                        transition-colors
                        duration-300
                      "
                    />
                  </div>

                  {/* Title */}
                  <h2
                    className="
                      font-['Cinzel']
                      text-xl
                      sm:text-2xl
                      font-bold
                      mb-4
                      text-[#222222]
                      group-hover:text-[#C94C5A]
                      transition-colors
                      duration-300
                    "
                  >
                    {service.title}
                  </h2>

                  {/* Description */}
                  <p
                    className="
                      text-[#222222]/65
                      text-sm
                      sm:text-base
                      leading-relaxed
                      mb-7
                    "
                  >
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">

                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="
                          flex
                          items-center
                          gap-3
                          text-xs
                          sm:text-sm
                          font-medium
                          text-[#222222]/75
                        "
                      >
                        <FiCheckCircle
                          className="
                            text-[#D4AF37]
                            shrink-0
                          "
                          size={16}
                        />

                        <span>
                          {feature}
                        </span>
                      </li>
                    ))}

                  </ul>

                  {/* CTA */}
                  <Link
                    href="/contact"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      border-t
                      border-black/5
                      pt-5
                      w-full
                      text-[10px]
                      sm:text-xs
                      uppercase
                      tracking-[0.15em]
                      font-bold
                      text-[#5A0000]
                      group-hover:text-[#C94C5A]
                      transition-colors
                      duration-300
                    "
                  >
                    Inquire About This Service

                    <FiArrowRight
                      className="
                        group-hover:translate-x-1
                        transition-transform
                        duration-300
                      "
                    />
                  </Link>

                </article>
              );
            })}

          </div>

        </section>


        {/* =================================================
            HOW WE WORK
        ================================================= */}
        <section
          className="
            py-24
            bg-[#222222]/[0.035]
            border-y
            border-[#D4AF37]/20
            mb-28
          "
        >

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-center max-w-2xl mx-auto mb-16">

              <span
                className="
                  text-[10px]
                  sm:text-xl
                  uppercase
                  tracking-[0.3em]
                  font-bold
                  text-[#5A0000]
                "
              >
                How We Work
              </span>

              <h2
                className="
                  font-['Cinzel']
                  text-3xl
                  sm:text-4xl
                  font-bold
                  mt-3
                  text-[#222222]
                "
              >
                Our Process
              </h2>

              <p className="text-md text-[#222222]/80 mt-4">
                A simple and professional process designed to make
                every project smooth from beginning to end.
              </p>

            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

              {processSteps.map((step, index) => (

                <div
                  key={index}
                  className="
                    group
                    bg-white/90
                    backdrop-blur-xl
                    rounded-2xl
                    p-7
                    border
                    border-[#D4AF37]/20
                    hover:border-[#D4AF37]/60
                    hover:-translate-y-1
                    shadow-sm
                    hover:shadow-xl
                    transition-all
                    duration-300
                  "
                >

                  <span
                    className="
                      font-['Cinzel']
                      text-4xl
                      font-bold
                      text-[#D4AF37]/40
                      group-hover:text-[#D4AF37]
                      transition-colors
                      duration-300
                      block
                      mb-5
                    "
                  >
                    {step.number}
                  </span>

                  <h3
                    className="
                      font-['Cinzel']
                      text-lg
                      font-bold
                      mb-3
                    "
                  >
                    {step.title}
                  </h3>

                  <p
                    className="
                      text-xm
                      sm:text-md
                      text-[#222222]/70
                      leading-relaxed
                    "
                  >
                    {step.desc}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>


        {/* =================================================
            CTA
        ================================================= */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <div
            className="
              relative
              overflow-hidden
              bg-[#5A0000]
              text-white
              rounded-3xl
              p-10
              sm:p-16
              border
              border-[#D4AF37]/50
              shadow-[0_20px_70px_rgba(90,0,0,0.25)]
              text-center
            "
          >

            {/* Gold glow */}
            <div
              className="
                absolute
                -top-32
                -right-32
                w-80
                h-80
                rounded-full
                bg-[#D4AF37]/15
                blur-3xl
              "
            />

            <div
              className="
                absolute
                -bottom-32
                -left-32
                w-80
                h-80
                rounded-full
                bg-[#C94C5A]/20
                blur-3xl
              "
            />

            <div className="relative z-10 max-w-2xl mx-auto">

              <span
                className="
                  text-[#D4AF37]
                  text-[15px]
                  uppercase
                  tracking-[0.3em]
                  font-bold
                "
              >
                LET'S WORK TOGETHER
              </span>

              <h2
                className="
                  font-['Cinzel']
                  text-3xl
                  sm:text-4xl
                  font-bold
                  mt-4
                  mb-5
                "
              >
                Bring Your Vision to Life
              </h2>

              <p
                className="
                  text-white/75
                  text-sm
                  sm:text-base
                  leading-relaxed
                  mb-9
                "
              >
                Whether you are planning an event, launching a
                fashion campaign, looking for professional models,
                or need creative production support, EMA is ready
                to work with you.
              </p>

              <Link
                href="/contact"
                className="
                  inline-flex
                  items-center
                  gap-3
                  bg-white
                  text-[#5A0000]
                  px-8
                  py-4
                  rounded-full
                  text-[10px]
                  sm:text-xs
                  uppercase
                  tracking-[0.18em]
                  font-bold
                  border
                  border-[#D4AF37]/50
                  shadow-lg
                  hover:bg-[#C94C5A]
                  hover:text-white
                  hover:border-[#C94C5A]
                  transition-all
                  duration-300
                "
              >
                Get in Touch

                <FiArrowRight
                  size={16}
                  className="text-[#D4AF37]"
                />

              </Link>

            </div>

          </div>

        </section>

      </div>

    </main>
  );
}