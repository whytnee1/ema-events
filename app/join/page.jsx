"use client";

import React from "react";
import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import {
  FiUser,
  FiBriefcase,
  FiMail,
  FiPhone,
  FiArrowRight,
  FiLoader,
  FiCheckCircle,
} from "react-icons/fi";

export default function JoinPage() {
  const [roleType, setRoleType] = React.useState("model");
  const [submitted, setSubmitted] = React.useState(false);

  const initialValues = {
    fullName: "",
    email: "",
    phone: "",
    category: "",
    experience: "",
    projectType: "",
    message: "",
  };

  const validationSchema = Yup.object({
    fullName: Yup.string()
      .required("Full name is required")
      .min(2, "Please enter your full name"),

    email: Yup.string()
      .email("Enter a valid email address")
      .required("Email is required"),

    phone: Yup.string()
      .required("Phone number is required")
      .min(7, "Enter a valid phone number"),

    category:
      roleType === "model"
        ? Yup.string().required("Please select a category")
        : Yup.string(),

    experience:
      roleType === "model"
        ? Yup.string().required("Please select your experience level")
        : Yup.string(),

    projectType:
      roleType === "client"
        ? Yup.string().required("Please select a project type")
        : Yup.string(),

    message: Yup.string()
      .required("Please tell us a little about your request")
      .min(10, "Please provide a little more information"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    try {
      if (typeof window !== "undefined") {
        const checkoutData = {
          roleType,
          formValues: values,
        };

        sessionStorage.setItem(
          "ema_pending_checkout",
          JSON.stringify(checkoutData)
        );

        setSubmitted(true);

        setTimeout(() => {
          window.location.href = "/payment";
        }, 700);
      }
    } catch (error) {
      console.error("Unable to save application:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#222222]">
      {/* HERO */}
      <section className="relative min-h-[420px] overflow-hidden bg-[#5A0000]">
        <div className="absolute inset-0">
          <Image
            src="/EmaLogo.png"
            alt="EMA Events Management"
            fill
            priority
            className="object-contain opacity-10"
          />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[420px] max-w-7xl items-center px-6 py-20 sm:px-10 lg:px-16">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#B8860B]">
              Join EMA
            </p>

            <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              Let&apos;s Create
              <span className="block text-[#B8860B]">
                The Best Day Ever
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
              Whether you are a model looking for opportunities or a client
              planning an unforgettable event, EMA is ready to work with you.
            </p>
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        {/* ROLE SELECTOR */}
        <div className="mx-auto mb-10 flex max-w-md rounded-2xl border border-black/10 bg-white p-2 shadow-sm">
          <button
            type="button"
            onClick={() => setRoleType("model")}
            className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 text-xs font-bold uppercase tracking-widest transition-all duration-300 sm:rounded-full sm:px-8 ${
              roleType === "model"
                ? "bg-[#5A0000] text-white shadow-lg"
                : "text-[#222222] hover:text-[#C94C5A]"
            }`}
          >
            <FiUser />
            Model
          </button>

          <button
            type="button"
            onClick={() => setRoleType("client")}
            className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 text-xs font-bold uppercase tracking-widest transition-all duration-300 sm:rounded-full sm:px-8 ${
              roleType === "client"
                ? "bg-[#5A0000] text-white shadow-lg"
                : "text-[#222222] hover:text-[#C94C5A]"
            }`}
          >
            <FiBriefcase />
            Client
          </button>
        </div>

        {/* FORM CARD */}
        <div className="rounded-3xl bg-white p-6 shadow-xl sm:p-10">
          <div className="mb-8">
            <h2 className="text-2xl font-black text-[#5A0000] sm:text-3xl">
              {roleType === "model"
                ? "Model Application"
                : "Client Application"}
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Please complete the form below. You will be taken to the payment
              page after submitting your information.
            </p>
          </div>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-6">
                {/* NAME + EMAIL */}
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="mb-2 block text-sm font-bold"
                    >
                      Full Name
                    </label>

                    <div className="relative">
                      <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#B8860B]" />

                      <Field
                        id="fullName"
                        name="fullName"
                        type="text"
                        placeholder="Enter your full name"
                        className="w-full rounded-xl border border-gray-200 bg-[#FAF9F6] py-3.5 pl-11 pr-4 outline-none transition focus:border-[#B8860B]"
                      />
                    </div>

                    <ErrorMessage
                      name="fullName"
                      component="p"
                      className="mt-1 text-xs text-red-600"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-bold"
                    >
                      Email Address
                    </label>

                    <div className="relative">
                      <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#B8860B]" />

                      <Field
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        className="w-full rounded-xl border border-gray-200 bg-[#FAF9F6] py-3.5 pl-11 pr-4 outline-none transition focus:border-[#B8860B]"
                      />
                    </div>

                    <ErrorMessage
                      name="email"
                      component="p"
                      className="mt-1 text-xs text-red-600"
                    />
                  </div>
                </div>

                {/* PHONE */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-bold"
                  >
                    Phone Number
                  </label>

                  <div className="relative">
                    <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-[#B8860B]" />

                    <Field
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      className="w-full rounded-xl border border-gray-200 bg-[#FAF9F6] py-3.5 pl-11 pr-4 outline-none transition focus:border-[#B8860B]"
                    />
                  </div>

                  <ErrorMessage
                    name="phone"
                    component="p"
                    className="mt-1 text-xs text-red-600"
                  />
                </div>

                {/* MODEL FIELDS */}
                {roleType === "model" && (
                  <>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <label
                          htmlFor="category"
                          className="mb-2 block text-sm font-bold"
                        >
                          Model Category
                        </label>

                        <Field
                          as="select"
                          id="category"
                          name="category"
                          className="w-full rounded-xl border border-gray-200 bg-[#FAF9F6] px-4 py-3.5 outline-none focus:border-[#B8860B]"
                        >
                          <option value="">Select a category</option>
                          <option value="Runway Model">
                            Runway Model
                          </option>
                          <option value="Editorial & Commercial Model">
                            Editorial & Commercial Model
                          </option>
                          <option value="Brand Ambassador">
                            Brand Ambassador
                          </option>
                          <option value="Event Host / Presenter">
                            Event Host / Presenter
                          </option>
                        </Field>

                        <ErrorMessage
                          name="category"
                          component="p"
                          className="mt-1 text-xs text-red-600"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="experience"
                          className="mb-2 block text-sm font-bold"
                        >
                          Experience
                        </label>

                        <Field
                          as="select"
                          id="experience"
                          name="experience"
                          className="w-full rounded-xl border border-gray-200 bg-[#FAF9F6] px-4 py-3.5 outline-none focus:border-[#B8860B]"
                        >
                          <option value="">Select experience</option>
                          <option value="Aspiring / New Face">
                            Aspiring / New Face
                          </option>
                          <option value="1 - 3 Years Professional Experience">
                            1 - 3 Years Professional Experience
                          </option>
                          <option value="3+ Years Experienced Professional">
                            3+ Years Experienced Professional
                          </option>
                        </Field>

                        <ErrorMessage
                          name="experience"
                          component="p"
                          className="mt-1 text-xs text-red-600"
                        />
                      </div>
                    </div>
                  </>
                )}

                {/* CLIENT FIELDS */}
                {roleType === "client" && (
                  <div>
                    <label
                      htmlFor="projectType"
                      className="mb-2 block text-sm font-bold"
                    >
                      Project Type
                    </label>

                    <Field
                      as="select"
                      id="projectType"
                      name="projectType"
                      className="w-full rounded-xl border border-gray-200 bg-[#FAF9F6] px-4 py-3.5 outline-none focus:border-[#B8860B]"
                    >
                      <option value="">Select project type</option>
                      <option value="Fashion Show / Runway Production">
                        Fashion Show / Runway Production
                      </option>
                      <option value="Corporate & Brand Event">
                        Corporate & Brand Event
                      </option>
                      <option value="Editorial & Commercial Production">
                        Editorial & Commercial Production
                      </option>
                      <option value="Talent Booking & Management">
                        Talent Booking & Management
                      </option>
                    </Field>

                    <ErrorMessage
                      name="projectType"
                      component="p"
                      className="mt-1 text-xs text-red-600"
                    />
                  </div>
                )}

                {/* MESSAGE */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-bold"
                  >
                    Message
                  </label>

                  <Field
                    as="textarea"
                    id="message"
                    name="message"
                    rows={5}
                    placeholder={
                      roleType === "model"
                        ? "Tell us about yourself and your modelling goals..."
                        : "Tell us about your event or project..."
                    }
                    className="w-full resize-none rounded-xl border border-gray-200 bg-[#FAF9F6] px-4 py-3.5 outline-none transition focus:border-[#B8860B]"
                  />

                  <ErrorMessage
                    name="message"
                    component="p"
                    className="mt-1 text-xs text-red-600"
                  />
                </div>

                {/* SUBMIT */}
                <button
                  type="submit"
                  disabled={isSubmitting || submitted}
                  className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#5A0000] px-6 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-lg transition hover:bg-[#450000] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {submitted ? (
                    <>
                      <FiCheckCircle className="text-lg" />
                      Redirecting...
                    </>
                  ) : isSubmitting ? (
                    <>
                      <FiLoader className="animate-spin text-lg" />
                      Processing...
                    </>
                  ) : (
                    <>
                      Proceed to Plan Selection
                      <FiArrowRight className="text-lg" />
                    </>
                  )}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </section>
    </main>
  );
}