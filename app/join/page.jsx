"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiCheckCircle,
  FiArrowRight,
  FiSend,
  FiLoader,
} from "react-icons/fi";

export default function JoinPage() {
  const [roleType, setRoleType] = useState("model");
  const [submittedData, setSubmittedData] = useState(null);

  // =========================================================
  // YOUR WHATSAPP NUMBER
  // =========================================================
  // Nigeria country code = 234
  // Do NOT include +, spaces or the first 0.
  const WHATSAPP_NUMBER = "2349053020238";

  // =========================================================
  // VALIDATION
  // =========================================================
  const validationSchema = Yup.object({
    fullName: Yup.string()
      .min(2, "Name is too short")
      .required("Full name is required"),

    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Email address is required"),

    phone: Yup.string()
      .min(7, "Please enter a valid phone number")
      .required("Phone number is required"),

    category: Yup.string().when([], {
      is: () => roleType === "model",
      then: (schema) => schema.required("Please select a category"),
      otherwise: (schema) => schema.notRequired(),
    }),

    projectType: Yup.string().when([], {
      is: () => roleType === "client",
      then: (schema) => schema.required("Please select a project type"),
      otherwise: (schema) => schema.notRequired(),
    }),

    experience: Yup.string(),

    message: Yup.string(),
  });

  // =========================================================
  // CREATE WHATSAPP MESSAGE
  // =========================================================
  const getWhatsAppUrl = (values) => {
    const message = `
*EMA EVENTS MANAGEMENT*

*New ${
      roleType === "model" ? "Talent / Model Application" : "Client / Brand Inquiry"
    }*

━━━━━━━━━━━━━━━━━━━━

*ROLE*
${roleType === "model" ? "Talent / Model" : "Client / Brand"}

*FULL NAME*
${values.fullName}

*EMAIL*
${values.email}

*PHONE*
${values.phone}

${
  roleType === "model"
    ? `*CATEGORY*
${values.category}

*EXPERIENCE*
${values.experience}`
    : `*PROJECT TYPE*
${values.projectType}`
}

*MESSAGE / DETAILS*
${values.message || "No additional details provided."}

━━━━━━━━━━━━━━━━━━━━

Submitted through the EMA website.
`;

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;
  };

  // =========================================================
  // FORM SUBMIT
  // =========================================================
  const handleSubmit = (values, { setSubmitting }) => {
    const whatsappUrl = getWhatsAppUrl(values);

    // Save the submitted information so we can show
    // the success screen.
    setSubmittedData(values);

    setSubmitting(false);

    // Open WhatsApp
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  // =========================================================
  // NAVIGATION / ROLE DATA
  // =========================================================
  const modelCategories = [
    "Runway Model",
    "Editorial & Commercial Model",
    "Brand Ambassador",
    "Event Host / Presenter",
  ];

  const projectTypes = [
    "Fashion Show / Runway Production",
    "Corporate & Brand Event",
    "Editorial & Commercial Production",
    "Talent Booking & Management",
  ];

  const experienceLevels = [
    "Aspiring / New Face",
    "1 - 3 Years Professional Experience",
    "3+ Years Experienced Professional",
  ];

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#222222] pt-32 pb-24 relative overflow-hidden">

      {/* =====================================================
          BACKGROUND EMA LOGO (Fixed / Static behind content)
      ====================================================== */}
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

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ===================================================
            HEADER
        ==================================================== */}
        <section className="text-center mb-14">

          <span className="inline-block text-xs uppercase tracking-[0.3em] font-bold text-[#5A0000] bg-[#5A0000]/10 px-4 py-2 rounded-full border border-[#D4AF37]/30">
            Become Part of EMA
          </span>

          <h1 className="font-['Cinzel'] text-4xl sm:text-5xl lg:text-6xl font-bold mt-6 mb-5 tracking-tight">
            Join{" "}
            <span className="bg-gradient-to-r from-[#5A0000] via-[#C94C5A] to-[#D4AF37] bg-clip-text text-transparent">
              EMA
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#222222]/85 leading-relaxed">
            Whether you are an aspiring model looking to build your career or
            a brand looking for professional event and fashion services,
            complete the form below and connect with EMA directly on WhatsApp.
          </p>
        </section>

        {/* ===================================================
            ROLE SELECTOR
        ==================================================== */}
        <div className="flex justify-center mb-10">

          <div className="inline-flex flex-col sm:flex-row gap-1 p-1.5 bg-[#222222]/5 rounded-2xl sm:rounded-full border border-[#D4AF37]/30">

            <button
              type="button"
              onClick={() => {
                setRoleType("model");
                setSubmittedData(null);
              }}
              className={`px-6 sm:px-8 py-3 rounded-xl sm:rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                roleType === "model"
                  ? "bg-[#5A0000] text-white shadow-lg"
                  : "text-[#222222] hover:text-[#C94C5A]"
              }`}
            >
              Join as Talent / Model
            </button>

            <button
              type="button"
              onClick={() => {
                setRoleType("client");
                setSubmittedData(null);
              }}
              className={`px-6 sm:px-8 py-3 rounded-xl sm:rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                roleType === "client"
                  ? "bg-[#5A0000] text-white shadow-lg"
                  : "text-[#222222] hover:text-[#C94C5A]"
              }`}
            >
              Join as Client / Brand
            </button>

          </div>
        </div>

        {/* ===================================================
            FORM CARD
        ==================================================== */}
        <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#D4AF37]/30 shadow-xl">

          {submittedData ? (

            /* =================================================
               SUCCESS SCREEN
            ================================================== */
            <div className="text-center py-12 sm:py-16">

              <div className="w-20 h-20 bg-[#5A0000]/10 border border-[#D4AF37]/40 rounded-full flex items-center justify-center mx-auto mb-6">

                <FiCheckCircle className="text-4xl text-[#D4AF37]" />

              </div>

              <h2 className="font-['Cinzel'] text-2xl sm:text-3xl font-bold mb-4">
                Application Prepared Successfully
              </h2>

              <p className="text-[#222222]/70 max-w-lg mx-auto text-sm sm:text-base leading-relaxed mb-8">
                Your information has been prepared for WhatsApp. If WhatsApp
                did not open automatically, click the button below to send
                your application directly to EMA.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">

                <a
                  href={getWhatsAppUrl(submittedData)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold shadow-lg hover:bg-[#20BA5A] transition-all"
                >
                  <FiSend />
                  Open WhatsApp
                </a>

                <button
                  type="button"
                  onClick={() => setSubmittedData(null)}
                  className="inline-flex items-center justify-center gap-2 bg-[#5A0000] text-white px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-[#450000] transition-all"
                >
                  Edit Submission
                </button>

              </div>
            </div>

          ) : (

            /* =================================================
               FORMIK FORM
            ================================================== */
            <Formik
              initialValues={{
                fullName: "",
                email: "",
                phone: "",
                category: "Runway Model",
                experience: "Aspiring / New Face",
                projectType: "Fashion Show / Runway Production",
                message: "",
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (

                <Form className="space-y-6">

                  {/* =========================================
                      NAME + EMAIL
                  ========================================= */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* NAME */}
                    <div>

                      <label className="block text-xs uppercase tracking-widest font-bold mb-2">
                        {roleType === "model"
                          ? "Full Name"
                          : "Contact Person / Representative"}
                      </label>

                      <div className="relative">

                        <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37]" />

                        <Field
                          type="text"
                          name="fullName"
                          placeholder={
                            roleType === "model"
                              ? "Enter your full name"
                              : "Enter contact person's name"
                          }
                          className="w-full pl-11 pr-4 py-4 rounded-2xl bg-[#FAF9F6] border border-[#D4AF37]/30 text-sm focus:outline-none focus:border-[#C94C5A] focus:ring-2 focus:ring-[#C94C5A]/10 transition-all"
                        />

                      </div>

                      <ErrorMessage
                        name="fullName"
                        component="p"
                        className="text-red-500 text-xs mt-2 ml-2"
                      />

                    </div>

                    {/* EMAIL */}
                    <div>

                      <label className="block text-xs uppercase tracking-widest font-bold mb-2">
                        Email Address
                      </label>

                      <div className="relative">

                        <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37]" />

                        <Field
                          type="email"
                          name="email"
                          placeholder="name@example.com"
                          className="w-full pl-11 pr-4 py-4 rounded-2xl bg-[#FAF9F6] border border-[#D4AF37]/30 text-sm focus:outline-none focus:border-[#C94C5A] focus:ring-2 focus:ring-[#C94C5A]/10 transition-all"
                        />

                      </div>

                      <ErrorMessage
                        name="email"
                        component="p"
                        className="text-red-500 text-xs mt-2 ml-2"
                      />

                    </div>

                  </div>

                  {/* =========================================
                      PHONE
                  ========================================= */}
                  <div>

                    <label className="block text-xs uppercase tracking-widest font-bold mb-2">
                      Phone Number
                    </label>

                    <div className="relative">

                      <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37]" />

                      <Field
                        type="tel"
                        name="phone"
                        placeholder="+234 800 000 0000"
                        className="w-full pl-11 pr-4 py-4 rounded-2xl bg-[#FAF9F6] border border-[#D4AF37]/30 text-sm focus:outline-none focus:border-[#C94C5A] focus:ring-2 focus:ring-[#C94C5A]/10 transition-all"
                      />

                    </div>

                    <ErrorMessage
                      name="phone"
                      component="p"
                      className="text-red-500 text-xs mt-2 ml-2"
                    />

                  </div>

                  {/* =========================================
                      MODEL / CLIENT SELECT
                  ========================================= */}
                  {roleType === "model" ? (

                    <>

                      {/* CATEGORY */}
                      <div>

                        <label className="block text-xs uppercase tracking-widest font-bold mb-2">
                          Primary Category
                        </label>

                        <Field
                          as="select"
                          name="category"
                          className="w-full px-4 py-4 rounded-2xl bg-[#FAF9F6] border border-[#D4AF37]/30 text-sm focus:outline-none focus:border-[#C94C5A] transition-all"
                        >

                          {modelCategories.map((category) => (
                            <option key={category} value={category}>
                              {category}
                            </option>
                          ))}

                        </Field>

                      </div>

                      {/* EXPERIENCE */}
                      <div>

                        <label className="block text-xs uppercase tracking-widest font-bold mb-2">
                          Professional Experience
                        </label>

                        <Field
                          as="select"
                          name="experience"
                          className="w-full px-4 py-4 rounded-2xl bg-[#FAF9F6] border border-[#D4AF37]/30 text-sm focus:outline-none focus:border-[#C94C5A] transition-all"
                        >

                          {experienceLevels.map((level) => (
                            <option key={level} value={level}>
                              {level}
                            </option>
                          ))}

                        </Field>

                      </div>

                    </>

                  ) : (

                    /* CLIENT PROJECT */
                    <div>

                      <label className="block text-xs uppercase tracking-widest font-bold mb-2">
                        Service Interest / Project Type
                      </label>

                      <Field
                        as="select"
                        name="projectType"
                        className="w-full px-4 py-4 rounded-2xl bg-[#FAF9F6] border border-[#D4AF37]/30 text-sm focus:outline-none focus:border-[#C94C5A] transition-all"
                      >

                        {projectTypes.map((project) => (
                          <option key={project} value={project}>
                            {project}
                          </option>
                        ))}

                      </Field>

                    </div>

                  )}

                  {/* =========================================
                      MESSAGE
                  ========================================= */}
                  <div>

                    <label className="block text-xs uppercase tracking-widest font-bold mb-2">

                      {roleType === "model"
                        ? "Portfolio / Social Media / Bio"
                        : "Project Brief / Objectives"}

                    </label>

                    <Field
                      as="textarea"
                      name="message"
                      rows={6}
                      placeholder={
                        roleType === "model"
                          ? "Instagram handle, portfolio link, height, measurements, location, or anything else you would like EMA to know..."
                          : "Tell us about your event, project, date, location, expectations, budget, and vision..."
                      }
                      className="w-full p-4 rounded-2xl bg-[#FAF9F6] border border-[#D4AF37]/30 text-sm focus:outline-none focus:border-[#C94C5A] focus:ring-2 focus:ring-[#C94C5A]/10 transition-all resize-none"
                    />

                  </div>

                  {/* =========================================
                      SUBMIT
                  ========================================= */}
                  <div className="text-center pt-4">

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative inline-flex items-center justify-center gap-3 bg-[#5A0000] text-white px-8 sm:px-10 py-4 rounded-full text-xs uppercase tracking-widest font-bold border border-[#D4AF37]/50 shadow-xl hover:bg-[#450000] hover:shadow-2xl transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                    >

                      {isSubmitting ? (

                        <>
                          <FiLoader className="animate-spin text-[#D4AF37] text-base" />
                          Preparing Message...
                        </>

                      ) : (

                        <>
                          <FiSend className="text-[#D4AF37]" />

                          {roleType === "model"
                            ? "Send Application via WhatsApp"
                            : "Send Inquiry via WhatsApp"}

                          <FiArrowRight className="text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
                        </>

                      )}

                    </button>

                    <p className="mt-4 text-xs text-[#222222]/50">
                      Your information will open in WhatsApp for you to review
                      before sending.
                    </p>

                  </div>

                </Form>

              )}
            </Formik>

          )}

        </div>

      </div>
    </main>
  );
}