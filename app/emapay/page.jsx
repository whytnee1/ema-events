"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiCopy,
  FiCheckCircle,
  FiArrowRight,
  FiArrowLeft,
  FiShield,
  FiUploadCloud,
  FiAlertCircle,
  FiMessageCircle,
} from "react-icons/fi";

export default function PaymentPage() {
  const [checkoutData, setCheckoutData] = useState(null);
  const [copied, setCopied] = useState(false);
  const [receipt, setReceipt] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = sessionStorage.getItem("ema_pending_checkout");

        if (saved) {
          setCheckoutData(JSON.parse(saved));
        }
      } catch (error) {
        console.error("Unable to load checkout data:", error);
      }
    }
  }, []);

  // EMA BANK DETAILS
  const bankDetails = checkoutData?.bankDetails || {
    bankName: "ZENITH BANK",
    accountNumber: "1224728048",
    accountName: "EMA EVENTS MANAGEMENT",
  };

  // SELECTED PACKAGE
  const selectedPlan = checkoutData?.selectedPlan || {
    name: "Featured Talent Boost",
    price: "20,000",
    amount: 20000,
  };

  // REGISTRANT DETAILS
  const formValues = checkoutData?.formValues || {
    fullName: "Guest User",
    email: "guest@emagroup.com",
    phone: "+234 800 000 0000",
    location: "Nigeria",
  };

  // EMA WHATSAPP NUMBER
  // Replace this with your actual EMA WhatsApp number if different.
  const EMA_WHATSAPP_NUMBER = "2349021751114";

  const handleCopyAccount = async () => {
    try {
      await navigator.clipboard.writeText(bankDetails.accountNumber);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 3000);
    } catch (error) {
      console.error("Failed to copy account number:", error);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];

      // 10MB file size validation
      if (selectedFile.size > 10 * 1024 * 1024) {
        alert("Please select a file smaller than 10MB.");
        e.target.value = "";
        return;
      }

      setReceipt(selectedFile);
    }
  };

  const handleSubmitProof = (e) => {
    e.preventDefault();

    if (!receipt) {
      alert("Please upload your payment receipt or screenshot first.");
      return;
    }

    setIsSubmitting(true);

    /*
      Create the WhatsApp confirmation message.
    */
    const message = `
Hello EMA Team,

I have completed my payment and would like to confirm and verify my registration.

PAYMENT DETAILS
-------------------------
Full Name: ${formValues.fullName}
Email: ${formValues.email}
Phone: ${formValues.phone}
Location: ${formValues.location}

Package: ${selectedPlan.name}
Amount Paid: ₦${selectedPlan.price}

BANK DETAILS
-------------------------
Bank: ${bankDetails.bankName}
Account Number: ${bankDetails.accountNumber}
Account Name: ${bankDetails.accountName}

Receipt File: ${receipt.name}

Please verify my payment and confirm my registration.

Thank you.
EMA | Events Managements
Creating The Best Day Ever
    `.trim();

    const whatsappUrl = `https://wa.me/${EMA_WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    /*
      Open WhatsApp in a new tab.
    */
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    /*
      Show success state after opening WhatsApp.
    */
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
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

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* BACK BUTTON */}
        <div className="mb-8">
          <Link
            href="/join"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#5A0000] hover:text-[#C94C5A] transition-colors"
          >
            <FiArrowLeft />
            <span>Back to Registration</span>
          </Link>
        </div>

        {/* HEADER SECTION */}
        <section className="text-center mb-12">
          <span className="inline-block text-xs uppercase tracking-[0.3em] font-bold text-[#5A0000] bg-[#5A0000]/10 px-4 py-2 rounded-full border border-[#D4AF37]/30">
            Secure Direct Checkout
          </span>

          <h1 className="font-['Cinzel'] text-3xl sm:text-5xl font-bold mt-6 mb-4 tracking-tight">
            EMA Account{" "}
            <span className="bg-gradient-to-r from-[#5A0000] via-[#C94C5A] to-[#D4AF37] bg-clip-text text-transparent">
              Details
            </span>
          </h1>

          <p className="max-w-xl mx-auto text-sm sm:text-base text-[#222222]/80 leading-relaxed">
            Transfer the exact package amount to the official EMA corporate
            account below and send your payment confirmation through WhatsApp
            for verification.
          </p>
        </section>

        {/* SUCCESS MESSAGE */}
        {isSuccess ? (
          <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-[#D4AF37]/40 shadow-2xl text-center max-w-2xl mx-auto space-y-6">

            <div className="w-16 h-16 bg-[#5A0000] text-white rounded-full flex items-center justify-center mx-auto text-2xl shadow-lg">
              <FiCheckCircle className="text-[#D4AF37]" />
            </div>

            <h2 className="font-['Cinzel'] text-2xl sm:text-3xl font-bold">
              Payment Confirmation Sent
            </h2>

            <p className="text-xs sm:text-sm text-[#222222]/80 leading-relaxed">
              Thank you,{" "}
              <strong className="text-[#5A0000]">
                {formValues.fullName}
              </strong>
              . Your payment confirmation has been prepared for WhatsApp.
              Please make sure you attach your actual payment receipt in
              WhatsApp before sending the message.
            </p>

            <div className="bg-[#5A0000]/5 border border-[#D4AF37]/30 rounded-2xl p-4 text-left">
              <p className="text-xs font-bold text-[#5A0000] mb-2 uppercase tracking-wider">
                Important
              </p>

              <p className="text-xs text-[#222222]/80 leading-relaxed">
                Your registration is not considered fully verified until EMA
                confirms your payment.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">

              <button
                type="button"
                onClick={() => {
                  const message = `
Hello EMA Team,

I have completed my payment and would like to confirm and verify my registration.

Full Name: ${formValues.fullName}
Email: ${formValues.email}
Phone: ${formValues.phone}
Location: ${formValues.location}

Package: ${selectedPlan.name}
Amount Paid: ₦${selectedPlan.price}

Please verify my payment and confirm my registration.

Thank you.
EMA | Events Managements
                  `.trim();

                  const whatsappUrl = `https://wa.me/${EMA_WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    message
                  )}`;

                  window.open(
                    whatsappUrl,
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-7 py-4 rounded-full text-xs uppercase tracking-widest font-bold shadow-lg hover:opacity-90 transition-all"
              >
                <FiMessageCircle className="text-lg" />
                <span>Open WhatsApp Again</span>
              </button>

              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 bg-[#5A0000] text-white px-7 py-4 rounded-full text-xs uppercase tracking-widest font-bold shadow-lg hover:bg-[#450000] transition-all"
              >
                <span>Return to Home</span>
                <FiArrowRight className="text-[#D4AF37]" />
              </Link>

            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

            {/* LEFT: BANK DETAILS CARD */}
            <div className="md:col-span-7 bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-[#D4AF37]/40 shadow-xl flex flex-col justify-between">

              <div>

                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#D4AF37]/20">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-[#5A0000] bg-[#5A0000]/10 px-3 py-1.5 rounded-full border border-[#D4AF37]/30">
                    Official Corporate Account
                  </span>

                  <div className="flex items-center gap-1.5 text-xs text-[#5A0000] font-bold">
                    <FiShield className="text-[#D4AF37]" />
                    <span>Verified EMA Channel</span>
                  </div>
                </div>

                {/* BANK DETAILS */}
                <div className="space-y-4 mb-8">

                  {/* BANK NAME */}
                  <div className="bg-[#FAF9F6] border border-[#D4AF37]/30 rounded-2xl p-4">
                    <p className="text-xs text-[#222222]/60 uppercase tracking-wider">
                      Bank Name
                    </p>

                    <p className="font-bold text-base text-[#222222] mt-0.5">
                      {bankDetails.bankName}
                    </p>
                  </div>

                  {/* ACCOUNT NUMBER */}
                  <div className="bg-[#FAF9F6] border border-[#D4AF37]/30 rounded-2xl p-4 flex items-center justify-between gap-4">

                    <div className="min-w-0">
                      <p className="text-xs text-[#222222]/60 uppercase tracking-wider">
                        Account Number
                      </p>

                      <p className="font-['Cinzel'] text-xl sm:text-2xl font-bold text-[#5A0000] tracking-wider mt-0.5 break-all">
                        {bankDetails.accountNumber}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={handleCopyAccount}
                      className="inline-flex items-center gap-2 bg-[#5A0000] text-white px-4 py-3 rounded-xl text-xs uppercase tracking-widest font-bold shadow-md hover:bg-[#450000] transition-all shrink-0"
                    >
                      <FiCopy className="text-[#D4AF37]" />

                      <span>
                        {copied ? "Copied!" : "Copy"}
                      </span>
                    </button>

                  </div>

                  {/* ACCOUNT NAME */}
                  <div className="bg-[#FAF9F6] border border-[#D4AF37]/30 rounded-2xl p-4">
                    <p className="text-xs text-[#222222]/60 uppercase tracking-wider">
                      Account Name
                    </p>

                    <p className="font-bold text-base text-[#222222] mt-0.5">
                      {bankDetails.accountName}
                    </p>
                  </div>

                </div>
              </div>

              {/* WARNING */}
              <div className="bg-[#5A0000]/5 border border-[#5A0000]/20 rounded-2xl p-4 flex items-start gap-3">
                <FiAlertCircle className="text-[#5A0000] text-lg shrink-0 mt-0.5" />

                <p className="text-xs text-[#222222]/80 leading-relaxed">
                  Please ensure you transfer the exact amount of{" "}
                  <strong className="text-[#5A0000]">
                    ₦{selectedPlan.price}
                  </strong>{" "}
                  to avoid processing delays.
                </p>
              </div>

            </div>

            {/* RIGHT: SUMMARY & RECEIPT UPLOAD */}
            <div className="md:col-span-5 space-y-6">

              {/* ORDER SUMMARY */}
              <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 border border-[#D4AF37]/30 shadow-xl">

                <h3 className="font-['Cinzel'] text-lg font-bold mb-4 pb-3 border-b border-[#D4AF37]/20">
                  Order Summary
                </h3>

                <div className="space-y-3 text-xs">

                  <div className="flex justify-between gap-4">
                    <span className="text-[#222222]/70">
                      Registrant:
                    </span>

                    <span className="font-bold text-[#222222] text-right">
                      {formValues.fullName}
                    </span>
                  </div>

                  <div className="flex justify-between gap-4">
                    <span className="text-[#222222]/70">
                      Package Tier:
                    </span>

                    <span className="font-bold text-[#5A0000] text-right">
                      {selectedPlan.name}
                    </span>
                  </div>

                  <div className="flex justify-between pt-2 border-t border-[#D4AF37]/20 text-sm font-bold">
                    <span>Total Due:</span>

                    <span className="font-['Cinzel'] text-[#5A0000] text-lg">
                      ₦{selectedPlan.price}
                    </span>
                  </div>

                </div>
              </div>

              {/* UPLOAD PROOF FORM */}
              <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 border border-[#D4AF37]/30 shadow-xl">

                <h3 className="font-['Cinzel'] text-lg font-bold mb-4 pb-3 border-b border-[#D4AF37]/20">
                  Confirm Payment
                </h3>

                <form
                  onSubmit={handleSubmitProof}
                  className="space-y-4"
                >

                  {/* RECEIPT */}
                  <div>

                    <label className="block text-xs uppercase tracking-widest font-bold mb-2">
                      Upload Transfer Receipt / Screenshot
                    </label>

                    <label className="border-2 border-dashed border-[#D4AF37]/40 hover:border-[#5A0000] rounded-2xl p-6 flex flex-col items-center justify-center cursor-pointer bg-[#FAF9F6] transition-all">

                      <FiUploadCloud className="text-2xl text-[#5A0000] mb-2" />

                      <span className="text-xs font-bold text-[#222222] text-center break-all">
                        {receipt
                          ? receipt.name
                          : "Click to select or drag file here"}
                      </span>

                      <span className="text-[10px] text-[#222222]/60 mt-1">
                        PNG, JPG, or PDF up to 10MB
                      </span>

                      <input
                        type="file"
                        accept="image/*,application/pdf"
                        onChange={handleFileChange}
                        className="hidden"
                        required
                      />

                    </label>

                  </div>

                  {/* WHATSAPP NOTICE */}
                  <div className="bg-[#25D366]/10 border border-[#25D366]/30 rounded-2xl p-4 flex items-start gap-3">

                    <FiMessageCircle className="text-[#25D366] text-lg shrink-0 mt-0.5" />

                    <p className="text-xs text-[#222222]/80 leading-relaxed">
                      After clicking the button, WhatsApp will open with your
                      payment details already prepared.{" "}
                      <strong>
                        Please attach your actual payment receipt in WhatsApp
                        before sending.
                      </strong>
                    </p>

                  </div>

                  {/* SUBMIT BUTTON */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 rounded-2xl text-xs uppercase tracking-widest font-bold shadow-lg hover:bg-[#1ebe5d] transition-all disabled:opacity-60"
                  >

                    <FiMessageCircle className="text-lg" />

                    <span>
                      {isSubmitting
                        ? "Opening WhatsApp..."
                        : "Confirm Payment on WhatsApp"}
                    </span>

                    {!isSubmitting && (
                      <FiArrowRight className="text-white" />
                    )}

                  </button>

                </form>
              </div>

            </div>
          </div>
        )}
      </div>
    </main>
  );
}