"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import {
  FiArrowRight,
  FiCheckCircle,
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin,
  FiAward,
} from "react-icons/fi";

export default function JoinPage() {
  const router = useRouter();

  const [roleType, setRoleType] = useState("model");

  const [selectedPlan, setSelectedPlan] = useState({
    id: "featured-talent-boost",
    name: "Featured Talent Boost",
    price: "20,000",
    amount: 20000,
  });

  // =========================================================
  // EMA BANK DETAILS
  // =========================================================

  const emaBankDetails = {
    bankName: "ZENITH BANK",
    accountNumber: "1224728048",
    accountName: "EMA EVENTS MANAGEMENT",
  };

  // =========================================================
  // PRICING PLANS
  // =========================================================

  const pricingPlans = {
    model: [
      {
        id: "featured-talent-boost",
        name: "Featured Talent Boost",
        price: "20,000",
        amount: 20000,
        description:
          "Maximum visibility, priority runway slot, and professional digital portfolio feature.",
        features: [
          "Priority Runway Placement",
          "Professional Digital Portfolio Feature",
          "Dedicated Social Media Spotlight",
          "VIP Backstage Access & Support",
        ],
      },
      {
        id: "early-bird",
        name: "Early Bird Option",
        price: "15,000",
        amount: 15000,
        description:
          "Standard runway participation for early registrants at a discounted rate.",
        features: [
          "Standard Runway Participation",
          "Official Event ID & Badge",
          "Backstage Professional Guidance",
          "Digital Participation Certificate",
        ],
      },
    ],

    client: [
      {
        id: "brand-showcase",
        name: "Brand Showcase Partner",
        price: "50,000",
        amount: 50000,
        description:
          "Showcase your fashion brand, collection, or business on our high-profile runway stage.",
        features: [
          "Dedicated Brand Runway Slot",
          "VIP Front Row Seating for Guests",
          "Brand Logo on Event Backdrop & Media",
          "Professional Media & Footage Package",
        ],
      },
    ],
  };

  // =========================================================
  // FORM VALIDATION
  // =========================================================

  const validationSchema = Yup.object({
    fullName: Yup.string()
      .min(2, "Name is too short")
      .required("Full name is required"),

    email: Yup.string()
      .email("Invalid email address")
      .required("Email address is required"),

    phone: Yup.string()
      .min(7, "Invalid phone number")
      .required("Phone number is required"),

    location: Yup.string().required("Location / City is required"),
  });

  // =========================================================
  // SUBMIT FORM
  // =========================================================

  const handleSubmit = (values, { setSubmitting }) => {
    const checkoutPayload = {
      roleType,
      selectedPlan,
      formValues: values,
      bankDetails: emaBankDetails,
      submittedAt: new Date().toISOString(),
    };

    try {
      sessionStorage.setItem(
        "ema_pending_checkout",
        JSON.stringify(checkoutPayload)
      );

      // DIRECTLY GO TO EMA PAYMENT PAGE
      router.push("/emapay");
    } catch (error) {
      console.error("Unable to save checkout information:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#FAF9F6] pb-24 pt-32 text-[#222222]">
      {/* =====================================================
          BACKGROUND EMA LOGO
      ====================================================== */}

      <div className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center overflow-hidden">
        <div className="absolute h-[100vh] w-[100vw] max-h-[1400px] max-w-[1400px] opacity-[0.12]">
          <Image
            src="/EmaLogo.png"
            alt=""
            fill
            priority
            className="object-contain object-center"
          />
        </div>
      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* HEADER */}

        <section className="mb-16 text-center">
          <span className="inline-block rounded-full border border-[#D4AF37]/30 bg-[#5A0000]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-[#5A0000]">
            Registration & Bookings
          </span>

          <h1 className="mt-6 mb-4 font-['Cinzel'] text-3xl font-bold tracking-tight sm:text-5xl">
            Join the{" "}
            <span className="bg-gradient-to-r from-[#5A0000] via-[#C94C5A] to-[#D4AF37] bg-clip-text text-transparent">
              Experience
            </span>
          </h1>

          <p className="mx-auto max-w-xl text-sm leading-relaxed text-[#222222]/80 sm:text-base">
            Select your participation category, choose your registration
            option, and fill out your details to secure your spot.
          </p>
        </section>

        {/* ROLE SELECTOR */}

        <div className="mb-12 flex justify-center">
          <div className="inline-flex rounded-full border border-[#D4AF37]/30 bg-white/90 p-1.5 shadow-md backdrop-blur-md">
            <button
              type="button"
              onClick={() => {
                setRoleType("model");
                setSelectedPlan(pricingPlans.model[0]);
              }}
              className={`rounded-full px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all sm:px-8 ${
                roleType === "model"
                  ? "bg-[#5A0000] text-white shadow-lg"
                  : "text-[#222222]/70 hover:text-[#5A0000]"
              }`}
            >
              Runway Model Registration
            </button>

            <button
              type="button"
              onClick={() => {
                setRoleType("client");
                setSelectedPlan(pricingPlans.client[0]);
              }}
              className={`rounded-full px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all sm:px-8 ${
                roleType === "client"
                  ? "bg-[#5A0000] text-white shadow-lg"
                  : "text-[#222222]/70 hover:text-[#5A0000]"
              }`}
            >
              Client / Brand Booking
            </button>
          </div>
        </div>

        {/* PRICING PLANS */}

        <section className="mb-16">
          <h2 className="mb-8 text-center font-['Cinzel'] text-xl font-bold">
            Choose Your Registration Option
          </h2>

          <div
            className={`grid grid-cols-1 gap-6 ${
              pricingPlans[roleType].length > 1
                ? "md:grid-cols-2"
                : "mx-auto max-w-md"
            }`}
          >
            {pricingPlans[roleType].map((plan) => {
              const isSelected = selectedPlan.id === plan.id;

              return (
                <div
                  key={plan.id}
                  onClick={() => setSelectedPlan(plan)}
                  className={`relative flex cursor-pointer flex-col justify-between rounded-3xl border p-8 backdrop-blur-md transition-all duration-300 ${
                    isSelected
                      ? "scale-[1.02] border-[#5A0000] bg-white/95 shadow-2xl ring-2 ring-[#C94C5A]/30"
                      : "border-[#D4AF37]/30 bg-white/80 shadow-lg hover:border-[#D4AF37]"
                  }`}
                >
                  {isSelected && (
                    <div className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full bg-[#5A0000] text-white">
                      <FiCheckCircle className="text-lg text-[#D4AF37]" />
                    </div>
                  )}

                  <div>
                    <span className="rounded-full border border-[#D4AF37]/30 bg-[#5A0000]/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#5A0000]">
                      {roleType === "model"
                        ? "Model Tier"
                        : "Partner Tier"}
                    </span>

                    <h3 className="mt-4 mb-2 font-['Cinzel'] text-xl font-bold">
                      {plan.name}
                    </h3>

                    <div className="mb-4 flex items-baseline gap-1">
                      <span className="font-['Cinzel'] text-3xl font-bold text-[#5A0000] sm:text-4xl">
                        ₦{plan.price}
                      </span>
                    </div>

                    <p className="mb-6 text-xs leading-relaxed text-[#222222]/70">
                      {plan.description}
                    </p>

                    <ul className="mb-8 space-y-3">
                      {plan.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-xs text-[#222222]/80"
                        >
                          <FiAward className="shrink-0 text-[#D4AF37]" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between border-t border-[#D4AF37]/20 pt-4 text-xs font-bold uppercase tracking-wider text-[#5A0000]">
                    <span>
                      {isSelected ? "Selected Option" : "Click to Select"}
                    </span>

                    <FiArrowRight
                      className={`transition-transform ${
                        isSelected ? "translate-x-1" : ""
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* REGISTRATION FORM */}

        <section className="rounded-3xl border border-[#D4AF37]/30 bg-white/95 p-8 shadow-xl backdrop-blur-md sm:p-12">
          <div className="mb-8 border-b border-[#D4AF37]/20 pb-4">
            <h2 className="font-['Cinzel'] text-2xl font-bold">
              Enter Your Information
            </h2>

            <p className="mt-1 text-xs text-[#222222]/60">
              Selected Package:{" "}
              <strong className="text-[#5A0000]">
                {selectedPlan.name} (₦{selectedPlan.price})
              </strong>
            </p>
          </div>

          <Formik
            initialValues={{
              fullName: "",
              email: "",
              phone: "",
              location: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {/* FULL NAME */}

                  <div>
                    <label
                      htmlFor="fullName"
                      className="mb-2 block text-xs font-bold uppercase tracking-widest"
                    >
                      Full Name
                    </label>

                    <div className="relative">
                      <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37]" />

                      <Field
                        id="fullName"
                        type="text"
                        name="fullName"
                        placeholder="Enter your full name"
                        className="w-full rounded-2xl border border-[#D4AF37]/30 bg-[#FAF9F6] px-4 py-4 pl-11 text-sm transition-all focus:border-[#C94C5A] focus:outline-none focus:ring-2 focus:ring-[#C94C5A]/10"
                      />
                    </div>

                    <ErrorMessage
                      name="fullName"
                      component="p"
                      className="ml-2 mt-2 text-xs text-red-500"
                    />
                  </div>

                  {/* EMAIL */}

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-xs font-bold uppercase tracking-widest"
                    >
                      Email Address
                    </label>

                    <div className="relative">
                      <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37]" />

                      <Field
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        className="w-full rounded-2xl border border-[#D4AF37]/30 bg-[#FAF9F6] px-4 py-4 pl-11 text-sm transition-all focus:border-[#C94C5A] focus:outline-none focus:ring-2 focus:ring-[#C94C5A]/10"
                      />
                    </div>

                    <ErrorMessage
                      name="email"
                      component="p"
                      className="ml-2 mt-2 text-xs text-red-500"
                    />
                  </div>

                  {/* PHONE */}

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-xs font-bold uppercase tracking-widest"
                    >
                      WhatsApp Phone Number
                    </label>

                    <div className="relative">
                      <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37]" />

                      <Field
                        id="phone"
                        type="tel"
                        name="phone"
                        placeholder="+234 800 000 0000"
                        className="w-full rounded-2xl border border-[#D4AF37]/30 bg-[#FAF9F6] px-4 py-4 pl-11 text-sm transition-all focus:border-[#C94C5A] focus:outline-none focus:ring-2 focus:ring-[#C94C5A]/10"
                      />
                    </div>

                    <ErrorMessage
                      name="phone"
                      component="p"
                      className="ml-2 mt-2 text-xs text-red-500"
                    />
                  </div>

                  {/* LOCATION */}

                  <div>
                    <label
                      htmlFor="location"
                      className="mb-2 block text-xs font-bold uppercase tracking-widest"
                    >
                      Location / City
                    </label>

                    <div className="relative">
                      <FiMapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37]" />

                      <Field
                        id="location"
                        type="text"
                        name="location"
                        placeholder="e.g. Abuja, Lagos"
                        className="w-full rounded-2xl border border-[#D4AF37]/30 bg-[#FAF9F6] px-4 py-4 pl-11 text-sm transition-all focus:border-[#C94C5A] focus:outline-none focus:ring-2 focus:ring-[#C94C5A]/10"
                      />
                    </div>

                    <ErrorMessage
                      name="location"
                      component="p"
                      className="ml-2 mt-2 text-xs text-red-500"
                    />
                  </div>
                </div>

                {/* PAYMENT NOTICE */}

                <div className="rounded-2xl border border-[#D4AF37]/30 bg-[#FAF9F6] p-5">
                  <div className="flex gap-3">
                    <FiCheckCircle className="mt-0.5 shrink-0 text-xl text-[#5A0000]" />

                    <div>
                      <h3 className="text-sm font-bold text-[#5A0000]">
                        Secure Direct Bank Transfer
                      </h3>

                      <p className="mt-1 text-xs leading-6 text-[#222222]/70">
                        After submitting your information, you will be taken
                        directly to the EMA payment page where the official
                        account details will be displayed.
                      </p>
                    </div>
                  </div>
                </div>

                {/* PROCEED BUTTON */}

                <div className="pt-6 text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#5A0000] via-[#C94C5A] to-[#D4AF37] px-10 py-5 text-xs font-bold uppercase tracking-widest text-white shadow-2xl transition-all hover:scale-105 hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60 sm:px-12"
                  >
                    <span>
                      {isSubmitting
                        ? "Processing..."
                        : "Proceed to Secure Payment"}
                    </span>

                    <FiArrowRight className="text-lg text-[#D4AF37]" />
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </section>
      </div>
    </main>
  );
}