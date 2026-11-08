"use client";

import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  FiMapPin,
  FiArrowLeft,
  FiCopy,
  FiCheck,
  FiMessageSquare,
  FiCreditCard,
  FiLoader,
} from "react-icons/fi";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "@/config/firebase";
import Navbar from "@/components/Navbar";

const VOTING_PACKAGES = [
  { votes: 10, amount: 500, label: "10 Votes - ₦500" },
  { votes: 20, amount: 1000, label: "20 Votes - ₦1,000" },
  { votes: 50, amount: 2500, label: "50 Votes - ₦2,500" },
  { votes: 100, amount: 5000, label: "100 Votes - ₦5,000" },
  { votes: 200, amount: 10000, label: "200 Votes - ₦10,000" },
  { votes: 500, amount: 25000, label: "500 Votes - ₦25,000" },
];

const BANK_DETAILS = {
  bankName: "ZENITH BANK",
  accountNumber: "1224728048",
  accountName: "EMA EVENTS MANAGEMENT",
};

// Obfuscated WhatsApp Number configuration
const WHATSAPP_PHONE_CONFIG = "234" + "9021751114";

function ContestantContent() {
  const searchParams = useSearchParams();

  // Extract parameters passed from app/vote/page.jsx (including initial votes)
  const contestantId = searchParams.get("contestantId") || "contestant_1";
  const name = searchParams.get("name") || "Contestant Model";
  const state = searchParams.get("state") || "Nigeria";
  const image = searchParams.get("image") || "/contestant1.jpg";
  const initialVotesParam = searchParams.get("votes");

  const [votes, setVotes] = useState(
    initialVotesParam !== null ? Number(initialVotesParam) : 0
  );
  const [isLoading, setIsLoading] = useState(initialVotesParam === null);

  // Form State
  const [selectedPackage, setSelectedPackage] = useState(VOTING_PACKAGES[0]);
  const [voterName, setVoterName] = useState("");
  const [orderCreated, setOrderCreated] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [copied, setCopied] = useState(false);

  // Real-time vote synchronization for this specific contestant from Firebase
  useEffect(() => {
    if (!contestantId) return;

    const docRef = doc(db, "ema_poll_counts", contestantId);
    const unsubscribe = onSnapshot(
      docRef,
      (docSnap) => {
        if (docSnap.exists()) {
          const data = docSnap.data();
          setVotes(Number(data.votes) || 0);
        } else {
          setVotes(0);
        }
        setIsLoading(false);
      },
      (error) => {
        console.error("Error fetching contestant live votes:", error);
        setIsLoading(false);
      }
    );

    return () => unsubscribe();
  }, [contestantId]);

  const handleCreateOrder = (e) => {
    e.preventDefault();
    if (!voterName.trim()) return;

    // Generate unique secure payment reference ID
    const randomHex = Math.floor(100000 + Math.random() * 900000);
    const generatedId = `EMA-${randomHex}-${selectedPackage.votes}V`;

    setOrderId(generatedId);
    setOrderCreated(true);
  };

  const handleCopyAccountNumber = () => {
    navigator.clipboard.writeText(BANK_DETAILS.accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  // Construct secure pre-filled WhatsApp URL with full order details
  const getWhatsAppLink = () => {
    const message = `Hello EMA Events Management, I've made payment for voting.\n\n*Order ID:* ${orderId}\n*Voter Name:* ${voterName}\n*Contestant:* ${name} (${state})\n*Votes Bundle:* ${selectedPackage.votes} Votes\n*Amount Paid:* ₦${selectedPackage.amount.toLocaleString()}\n\nHere is my payment proof/receipt:`;
    return `https://wa.me/${WHATSAPP_PHONE_CONFIG}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="min-h-screen text-[#FAF9F6] overflow-x-hidden relative" style={{ fontFamily: "Arial, sans-serif" }}>
      {/* BACKGROUND OVERLAY */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: "url('/queen2.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#111111]/95 backdrop-blur-[6px]" />
      </div>

      <div className="relative z-10" style={{ fontFamily: "Arial, sans-serif" }}>
        <Navbar />

        {/* TOP BACK NAVIGATION */}
        <div className="max-w-4xl mx-auto px-4 pt-28">
          <Link
            href="/vote"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#D4AF37] hover:underline"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            <FiArrowLeft /> Back to Main Poll Leaderboard
          </Link>
        </div>

        {/* CONTESTANT PROFILE HERO SECTION */}
        <section className="py-8 px-4 text-center">
          <div className="max-w-3xl mx-auto bg-[#161616]/90 border border-[#D4AF37]/30 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full overflow-hidden border-4 border-[#D4AF37] shadow-2xl mb-5">
              <Image
                src={image}
                alt={name}
                fill
                sizes="160px"
                className="object-cover"
                priority
              />
            </div>

            <span className="bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-[10px] font-extrabold uppercase px-3 py-1 rounded-full tracking-widest" style={{ fontFamily: "Arial, sans-serif" }}>
              Official Runway Finalist
            </span>

            <h1 className="text-2xl sm:text-4xl font-extrabold mt-3 text-white" style={{ fontFamily: "Arial, sans-serif" }}>
              {name}
            </h1>

            <p className="flex items-center justify-center gap-1.5 text-xs text-gray-300 mt-1 uppercase tracking-wider" style={{ fontFamily: "Arial, sans-serif" }}>
              <FiMapPin className="text-[#D4AF37]" /> {state}
            </p>

            <div className="mt-6 inline-flex items-center gap-6 bg-[#222]/80 border border-[#D4AF37]/20 px-6 py-3 rounded-2xl">
              <div>
                <p className="text-[9px] text-gray-400 uppercase tracking-widest" style={{ fontFamily: "Arial, sans-serif" }}>
                  Current Votes
                </p>
                <p className="text-xl font-bold text-[#D4AF37]" style={{ fontFamily: "Arial, sans-serif" }}>
                  {isLoading ? (
                    <FiLoader className="animate-spin inline" />
                  ) : (
                    votes.toLocaleString()
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* VOTING & PAYMENT SECTION */}
        <section className="py-8 px-4 sm:px-6 max-w-3xl mx-auto mb-20">
          <div className="bg-[#161616]/95 border border-[#D4AF37]/30 rounded-3xl p-6 sm:p-10 shadow-2xl">
            <div className="flex items-center gap-2 border-b border-[#D4AF37]/20 pb-4 mb-6">
              <FiCreditCard className="text-[#D4AF37] text-xl" />
              <h2 className="text-xl font-bold text-white" style={{ fontFamily: "Arial, sans-serif" }}>
                Select Voting Package & Pay
              </h2>
            </div>

            {!orderCreated ? (
              <form onSubmit={handleCreateOrder} className="space-y-6">
                {/* VOTER NAME INPUT WITH BRACKET MESSAGE */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-300 font-bold mb-1" style={{ fontFamily: "Arial, sans-serif" }}>
                    Your Full Name (Voter)
                  </label>
                  <p className="text-[11px] text-[#D4AF37] mb-2 italic" style={{ fontFamily: "Arial, sans-serif" }}>
                    (Use the exact name on your bank to verify payment)
                  </p>
                  <input
                    type="text"
                    required
                    value={voterName}
                    onChange={(e) => setVoterName(e.target.value)}
                    placeholder="Enter your name to track payment"
                    className="w-full bg-[#222] border border-[#D4AF37]/30 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37]"
                    style={{ fontFamily: "Arial, sans-serif" }}
                  />
                </div>

                {/* PACKAGE GRID */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-300 font-bold mb-3" style={{ fontFamily: "Arial, sans-serif" }}>
                    Choose Voting Bundle
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {VOTING_PACKAGES.map((pkg, idx) => {
                      const isSelected = selectedPackage.votes === pkg.votes;
                      return (
                        <div
                          key={idx}
                          onClick={() => setSelectedPackage(pkg)}
                          className={`cursor-pointer border rounded-2xl p-4 text-center transition-all ${
                            isSelected
                              ? "bg-[#D4AF37]/10 border-[#D4AF37] ring-1 ring-[#D4AF37]"
                              : "bg-[#222]/80 border-[#D4AF37]/20 hover:border-[#D4AF37]/50"
                          }`}
                          style={{ fontFamily: "Arial, sans-serif" }}
                        >
                          <p className="font-bold text-lg text-white" style={{ fontFamily: "Arial, sans-serif" }}>
                            {pkg.votes}{" "}
                            <span className="text-xs text-[#D4AF37]">Votes</span>
                          </p>
                          <p className="text-xs text-gray-300 font-semibold mt-1" style={{ fontFamily: "Arial, sans-serif" }}>
                            ₦{pkg.amount.toLocaleString()}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* SUMMARY BOX */}
                <div className="bg-[#222]/60 border border-[#D4AF37]/20 rounded-2xl p-4 flex items-center justify-between text-xs" style={{ fontFamily: "Arial, sans-serif" }}>
                  <span className="text-gray-400">
                    Selected Package Summary:
                  </span>
                  <span className="font-bold text-[#D4AF37]">
                    {selectedPackage.votes} Votes for ₦
                    {selectedPackage.amount.toLocaleString()}
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#5A0000] via-[#C94C5A] to-[#D4AF37] text-white py-4 rounded-full text-xs uppercase tracking-widest font-bold shadow-xl hover:scale-[1.01] transition-all"
                  style={{ fontFamily: "Arial, sans-serif" }}
                >
                  Create Payment Order
                </button>
              </form>
            ) : (
              /* PAYMENT INSTRUCTIONS & TRANSFER BOX */
              <div className="space-y-6 text-center" style={{ fontFamily: "Arial, sans-serif" }}>
                <div className="bg-[#222]/90 border border-[#D4AF37]/40 rounded-2xl p-6 space-y-4">
                  <span className="bg-[#D4AF37]/20 text-[#D4AF37] text-[10px] font-bold uppercase px-3 py-1 rounded-full" style={{ fontFamily: "Arial, sans-serif" }}>
                    Order Generated: {orderId}
                  </span>

                  <h3 className="text-sm font-semibold text-gray-200" style={{ fontFamily: "Arial, sans-serif" }}>
                    Make a bank transfer of{" "}
                    <strong className="text-[#D4AF37] text-base">
                      ₦{selectedPackage.amount.toLocaleString()}
                    </strong>{" "}
                    for{" "}
                    <strong className="text-white">
                      {selectedPackage.votes} Votes
                    </strong>{" "}
                    supporting{" "}
                    <strong className="text-[#D4AF37]">{name}</strong>.
                  </h3>

                  {/* BANK CARD DETAILS */}
                  <div className="bg-[#111] border border-[#D4AF37]/30 rounded-2xl p-5 text-left space-y-3 max-w-md mx-auto" style={{ fontFamily: "Arial, sans-serif" }}>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-400">Bank Name:</span>
                      <span className="font-bold text-white">
                        {BANK_DETAILS.bankName}
                      </span>
                    </div>

                    <div className="flex justify-between items-center text-xs">
                      <span className="text-gray-400">Account Number:</span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-base text-[#D4AF37] tracking-wider">
                          {BANK_DETAILS.accountNumber}
                        </span>
                        <button
                          onClick={handleCopyAccountNumber}
                          className="bg-[#222] hover:bg-[#333] border border-[#D4AF37]/30 text-[#D4AF37] p-2 rounded-lg transition-colors"
                          title="Copy account number"
                        >
                          {copied ? (
                            <FiCheck className="text-green-400" />
                          ) : (
                            <FiCopy />
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="flex justify-between text-xs">
                      <span className="text-gray-400">Account Name:</span>
                      <span className="font-bold text-white uppercase">
                        {BANK_DETAILS.accountName}
                      </span>
                    </div>
                  </div>

                  {copied && (
                    <p className="text-[11px] text-green-400 font-medium" style={{ fontFamily: "Arial, sans-serif" }}>
                      ✓ Account number copied to clipboard!
                    </p>
                  )}
                </div>

                {/* WHATSAPP ACTION BUTTON */}
                <div className="space-y-3 pt-2">
                  <p className="text-xs text-gray-400" style={{ fontFamily: "Arial, sans-serif" }}>
                    After making the transfer, click below to confirm payment on
                    WhatsApp:
                  </p>

                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-700 to-green-600 hover:from-green-600 hover:to-green-500 text-white px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold shadow-xl transition-all"
                    style={{ fontFamily: "Arial, sans-serif" }}
                  >
                    <FiMessageSquare className="text-base" /> I've Made Payment
                  </a>

                  <div>
                    <button
                      onClick={() => setOrderCreated(false)}
                      className="text-[11px] text-gray-400 hover:text-[#D4AF37] underline mt-4 inline-block"
                      style={{ fontFamily: "Arial, sans-serif" }}
                    >
                      Edit Order / Choose Different Package
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-10 px-4 bg-[#161616]/95 border-t border-[#D4AF37]/20 text-center" style={{ fontFamily: "Arial, sans-serif" }}>
          <p className="text-gray-400 text-xs" style={{ fontFamily: "Arial, sans-serif" }}>EMA Experience & Events</p>
          <p className="text-[#D4AF37] text-[10px] uppercase tracking-widest font-bold mt-2" style={{ fontFamily: "Arial, sans-serif" }}>
            All Rights Reserved
          </p>
        </footer>
      </div>
    </div>
  );
}

export default function ContestantPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#111] text-white flex items-center justify-center text-xs tracking-widest uppercase" style={{ fontFamily: "Arial, sans-serif" }}>
          Loading Contestant Profile...
        </div>
      }
    >
      <ContestantContent />
    </Suspense>
  );
}