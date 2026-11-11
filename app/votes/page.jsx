"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  FiAward,
  FiTrendingUp,
  FiPieChart,
  FiShield,
  FiUsers,
  FiLoader,
  FiExternalLink,
  FiMapPin,
  FiArrowRight,
} from "react-icons/fi";

import {
  collection,
  onSnapshot,
} from "firebase/firestore";

import { db } from "@/config/firebase";
import Navbar from "@/components/Navbar";

// ==========================================
// CONTESTANTS DATA
// ==========================================

const INITIAL_CONTESTANTS = [
  {
    id: "contestant_1",
    name: "Emmanuel Blessing",
    state: "EMA Benue",
    image: "/contestant1.jpg",
    votes: 19,
  },
  {
    id: "contestant_2",
    name: "Faith Minan Barnabas",
    state: "EMA Kano",
    image: "/contestant2.jpg",
    votes: 0,
  },
  {
    id: "contestant_3",
    name: "Nicole Bemu",
    state: "EMA Lagos",
    image: "/contestant3.jpg",
    votes: 202,
  },
  {
    id: "contestant_4",
    name: "Patience Ekwere Robinson",
    state: "EMA Cross River",
    image: "/contestant4.jpg",
    votes: 10,
  },
  {
    id: "contestant_5",
    name: "Ezekiel Barat Victory",
    state: "EMA Kaduna",
    image: "/contestant5.jpg",
    votes: 59,
  },
  {
    id: "contestant_6",
    name: "Princess Okoro",
    state: "EMA Abia",
    image: "/contestant6.jpg",
    votes: 0,
  },
  {
    id: "contestant_7",
    name: "Mbre Miracle Mkpouto",
    state: "EMA Akwa Ibom",
    image: "/contestant7.jpg",
    votes: 0,
  },
  {
    id: "contestant_8",
    name: "Esin Lawrence",
    state: "EMA FCT",
    image: "/contestant8.jpg",
    votes: 400,
  },
  {
    id: "contestant_9",
    name: "Olabode Esther Eniola",
    state: "EMA Ogun",
    image: "/contestant9.jpg",
    votes: 336,
  },
  {
    id: "contestant_10",
    name: "Lucky Elozino Natasha",
    state: "EMA Delta",
    image: "/contestant10.jpg",
    votes: 0,
  },
];

const VOTING_COLLECTION = "ema_poll_counts";

// ==========================================
// MAIN VOTING PAGE
// ==========================================

export default function VotingPollPage() {
  const [contestants, setContestants] = useState(
    INITIAL_CONTESTANTS
  );

  const [isLoading, setIsLoading] = useState(true);

  // ==========================================
  // REAL-TIME FIREBASE LISTENER
  // ==========================================

  useEffect(() => {
    const votingRef = collection(db, VOTING_COLLECTION);

    const unsubscribe = onSnapshot(
      votingRef,
      (snapshot) => {
        const voteCounts = {};

        snapshot.forEach((document) => {
          const data = document.data();
          const votes = Number(data.votes);

          voteCounts[document.id] =
            Number.isFinite(votes) && votes >= 0
              ? votes
              : 0;
        });

        const updatedContestants = INITIAL_CONTESTANTS.map(
          (contestant) => ({
            ...contestant,
            votes: voteCounts[contestant.id] ?? 0,
          })
        );

        setContestants(updatedContestants);
        setIsLoading(false);
      },
      (error) => {
        console.error(
          "Firebase voting listener error:",
          error
        );

        setIsLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  // ==========================================
  // TOTAL VOTES
  // ==========================================

  const totalVotes = contestants.reduce(
    (total, contestant) => total + contestant.votes,
    0
  );

  // ==========================================
  // LIVE RANKINGS
  // ==========================================

  const sortedContestants = [...contestants].sort(
    (a, b) => b.votes - a.votes
  );

  // ==========================================
  // PERCENTAGE CALCULATION
  // ==========================================

  const getPercentage = (votes) => {
    if (totalVotes === 0) return 0;

    return (votes / totalVotes) * 100;
  };

  // ==========================================
  // CONTESTANT REDIRECT URL TO /contestant (INCLUDES VOTES)
  // ==========================================

  const getPackageUrl = (contestant) => {
    const params = new URLSearchParams({
      contestantId: contestant.id,
      name: contestant.name,
      state: contestant.state,
      image: contestant.image,
      votes: contestant.votes,
    });

    return `/contestant?${params.toString()}`;
  };

  // ==========================================
  // RANK BADGES
  // ==========================================

  const getRankBadge = (rank) => {
    if (rank === 1) {
      return (
        <span className="bg-[#D4AF37] text-black font-extrabold px-3 py-1 rounded-full text-[9px] uppercase flex items-center gap-1 shadow-md font-sans" style={{ fontFamily: "Arial, sans-serif" }}>
          <FiAward />
          1st Place
        </span>
      );
    }

    if (rank === 2) {
      return (
        <span className="bg-[#C0C0C0] text-black font-extrabold px-3 py-1 rounded-full text-[9px] uppercase shadow-md font-sans" style={{ fontFamily: "Arial, sans-serif" }}>
          2nd Place
        </span>
      );
    }

    if (rank === 3) {
      return (
        <span className="bg-[#CD7F32] text-white font-extrabold px-3 py-1 rounded-full text-[9px] uppercase shadow-md font-sans" style={{ fontFamily: "Arial, sans-serif" }}>
          3rd Place
        </span>
      );
    }

    return (
      <span className="bg-[#222] text-gray-300 px-3 py-1 rounded-full text-[9px] font-bold uppercase font-sans" style={{ fontFamily: "Arial, sans-serif" }}>
        Rank #{rank}
      </span>
    );
  };

  // ==========================================
  // PAGE
  // ==========================================

  return (
    <div className="min-h-screen text-[#FAF9F6] overflow-x-hidden relative" style={{ fontFamily: "Arial, sans-serif" }}>

      {/* BACKGROUND */}

      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{
          backgroundImage: "url('/queen2.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-[#111111]/95 backdrop-blur-[6px]" />
      </div>

      <div className="relative z-10" style={{ fontFamily: "Arial, sans-serif" }}>

        <Navbar />

        {/* HEADER */}

        <section className="pt-28 pb-12 px-4 sm:pt-36 text-center border-b border-[#D4AF37]/20">

          <div className="max-w-4xl mx-auto">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#222]/90 border border-[#D4AF37]/40 mb-5">

              <FiShield className="text-[#D4AF37]" />

              <span className="text-[10px] font-bold tracking-[0.2em] uppercase" style={{ fontFamily: "Arial, sans-serif" }}>
                Official EMA Voting Poll
              </span>

            </div>

            <h1 className="text-3xl sm:text-6xl font-extrabold mb-4" style={{ fontFamily: "Arial, sans-serif" }}>

              EMA <span className="text-[#D4AF37]">
                VOTING POLL
              </span>

            </h1>

            <p className="text-gray-400 text-xs italic sm:text-sm max-w-xl mx-auto leading-relaxed" style={{ fontFamily: "Arial, sans-serif" }}>

              Support your favourite EMA runway model.
              Select your preferred contestant and purchase
              votes to help them climb to the top of the leaderboard. You can vote multiple times.

            </p>

          </div>

        </section>

        {/* STATISTICS */}

        <section className="max-w-5xl mx-auto px-4 mt-8">

          <div className="grid grid-cols-2 gap-4 max-w-xl mx-auto">

            <div className="bg-[#161616]/90 border border-[#D4AF37]/30 rounded-2xl p-5 text-center">

              <FiUsers className="text-[#D4AF37] text-2xl mx-auto mb-2" />

              <p className="text-gray-400 text-[10px] uppercase tracking-widest" style={{ fontFamily: "Arial, sans-serif" }}>
                Total Votes
              </p>

              <h2 className="text-2xl font-bold text-[#D4AF37]" style={{ fontFamily: "Arial, sans-serif" }}>
                {totalVotes.toLocaleString()}
              </h2>

            </div>

            <div className="bg-[#161616]/90 border border-[#D4AF37]/30 rounded-2xl p-5 text-center">

              <FiTrendingUp className="text-[#D4AF37] text-2xl mx-auto mb-2" />

              <p className="text-gray-400 text-[10px] uppercase tracking-widest" style={{ fontFamily: "Arial, sans-serif" }}>
                Contestants
              </p>

              <h2 className="text-2xl font-bold text-[#D4AF37]" style={{ fontFamily: "Arial, sans-serif" }}>
                {contestants.length.toString().padStart(2, "0")}
              </h2>

            </div>

          </div>

          <p className="text-center text-xs text-gray-400 mt-5" style={{ fontFamily: "Arial, sans-serif" }}>
            Select your favourite contestant to purchase voting packages.
          </p>

        </section>

        {/* CONTESTANTS */}

        <section className="py-12 px-4 sm:px-6 max-w-6xl mx-auto">

          {isLoading ? (

            <div className="py-16 text-center">

              <FiLoader className="animate-spin text-3xl text-[#D4AF37] mx-auto" />

              <p className="text-gray-400 text-sm mt-4" style={{ fontFamily: "Arial, sans-serif" }}>
                Loading contestants...
              </p>

            </div>

          ) : (

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">

              {contestants.map((contestant) => {

                const percentage = getPercentage(
                  contestant.votes
                );

                const rank =
                  sortedContestants.findIndex(
                    (item) => item.id === contestant.id
                  ) + 1;

                return (

                  <div
                    key={contestant.id}
                    className="relative bg-[#161616]/95 backdrop-blur-md rounded-2xl border border-[#D4AF37]/20 p-4 sm:p-6 text-center transition-all duration-300 hover:border-[#D4AF37]/80 hover:-translate-y-1"
                    style={{ fontFamily: "Arial, sans-serif" }}
                  >

                    {/* RANK BADGE */}

                    <div className="flex justify-center mb-4">

                      {getRankBadge(rank)}

                    </div>

                    {/* CONTESTANT IMAGE - REDIRECTS TO /contestant */}

                    <div className="relative w-20 h-20 sm:w-28 sm:h-28 mx-auto group">

                      <Link
                        href={getPackageUrl(contestant)}
                        className="relative block w-full h-full rounded-full overflow-hidden border-[3px] border-[#D4AF37] shadow-xl group-hover:scale-105 transition-transform duration-300"
                        title={`Vote for ${contestant.name}`}
                      >

                        <Image
                          src={contestant.image}
                          alt={contestant.name}
                          fill
                          sizes="(max-width: 640px) 80px, 112px"
                          className="object-cover"
                        />

                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">

                          <FiExternalLink className="text-white text-xl" />

                        </div>

                      </Link>

                    </div>

                    {/* CONTESTANT NAME */}

                    <div className="mt-4">

                      <Link
                        href={getPackageUrl(contestant)}
                        className="text-sm sm:text-base font-bold text-white hover:text-[#D4AF37] inline-block transition-colors"
                        style={{ fontFamily: "Arial, sans-serif" }}
                      >

                        {contestant.name}

                      </Link>

                    </div>

                    {/* STATE */}

                    <div className="flex items-center justify-center gap-1 text-[10px] text-[#D4AF37] font-semibold mt-1" style={{ fontFamily: "Arial, sans-serif" }}>

                      <FiMapPin className="text-[10px]" />

                      <span>{contestant.state}</span>

                    </div>

                    {/* VOTE INFORMATION */}

                    <div className="mt-5 pt-4 border-t border-[#D4AF37]/20" style={{ fontFamily: "Arial, sans-serif" }}>

                      <div className="flex justify-between text-xs mb-2">

                        <span className="text-gray-400">
                          Votes
                        </span>

                        <span className="font-bold text-[#D4AF37]">
                          {contestant.votes.toLocaleString()}
                        </span>

                      </div>

                      {/* PROGRESS BAR */}

                      <div className="w-full h-2 bg-[#333] rounded-full overflow-hidden">

                        <div
                          className="h-full bg-gradient-to-r from-[#5A0000] via-[#C94C5A] to-[#D4AF37] rounded-full transition-all duration-700"
                          style={{
                            width: `${percentage}%`,
                          }}
                        />

                      </div>

                      {/* PERCENTAGE */}

                      <div className="text-right mt-2">

                        <span className="text-[#D4AF37] font-bold text-sm">
                          {percentage.toFixed(1)}%
                        </span>

                      </div>

                    </div>

                    {/* BUY VOTES BUTTON */}

                    <div className="mt-4">

                      <Link
                        href={getPackageUrl(contestant)}
                        className="inline-flex items-center gap-2 justify-center text-[9px] font-bold uppercase px-3 py-3 rounded-full w-full bg-gradient-to-r from-[#5A0000] via-[#C94C5A] to-[#D4AF37] text-white hover:scale-105 transition-all"
                        style={{ fontFamily: "Arial, sans-serif" }}
                      >

                        Buy Votes

                        <FiArrowRight />

                      </Link>

                    </div>

                  </div>

                );

              })}

            </div>

          )}

        </section>

        {/* LIVE LEADERBOARD */}

        <section className="py-12 px-4 sm:px-6 max-w-4xl mx-auto border-t border-[#D4AF37]/20">

          <div className="bg-[#161616]/95 rounded-3xl p-5 sm:p-10 border border-[#D4AF37]/30 shadow-2xl">

            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pb-6 border-b border-[#D4AF37]/20">

              <div className="text-center sm:text-left">

                <div className="flex items-center justify-center sm:justify-start gap-2 text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-2" style={{ fontFamily: "Arial, sans-serif" }}>

                  <FiTrendingUp />

                  Live Leaderboard

                </div>

                <h2 className="text-2xl font-bold" style={{ fontFamily: "Arial, sans-serif" }}>
                  Poll Rankings
                </h2>

              </div>

              <div className="bg-[#222] border border-[#D4AF37]/30 px-5 py-3 rounded-xl text-center">

                <p className="text-[9px] text-gray-400 uppercase tracking-widest" style={{ fontFamily: "Arial, sans-serif" }}>
                  Total Votes
                </p>

                <p className="text-2xl font-bold text-[#D4AF37]" style={{ fontFamily: "Arial, sans-serif" }}>
                  {totalVotes.toLocaleString()}
                </p>

              </div>

            </div>

            {totalVotes === 0 ? (

              <div className="py-12 text-center">

                <FiPieChart className="text-4xl text-[#D4AF37] mx-auto mb-3" />

                <p className="text-gray-400 text-sm" style={{ fontFamily: "Arial, sans-serif" }}>
                  No votes recorded yet.
                </p>

                <p className="text-gray-500 text-xs mt-2" style={{ fontFamily: "Arial, sans-serif" }}>
                  Be the first to support your favourite contestant!
                </p>

              </div>

            ) : (

              <div className="space-y-4 mt-6">

                {sortedContestants.map((contestant, index) => {

                  const percentage = getPercentage(
                    contestant.votes
                  );

                  return (

                    <div
                      key={contestant.id}
                      className="bg-[#222]/80 border border-[#D4AF37]/20 rounded-xl p-4 hover:border-[#D4AF37]/50 transition-all"
                      style={{ fontFamily: "Arial, sans-serif" }}
                    >

                      <div className="flex items-center justify-between gap-3">

                        <div className="flex items-center gap-3 min-w-0">

                          <span className="text-[#D4AF37] font-bold text-sm w-6" style={{ fontFamily: "Arial, sans-serif" }}>
                            #{index + 1}
                          </span>

                          <Link
                            href={getPackageUrl(contestant)}
                            className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#D4AF37]/50 shrink-0"
                          >

                            <Image
                              src={contestant.image}
                              alt={contestant.name}
                              fill
                              sizes="48px"
                              className="object-cover"
                            />

                          </Link>

                          <div className="min-w-0">

                            <Link
                              href={getPackageUrl(contestant)}
                              className="text-sm font-bold text-white hover:text-[#D4AF37] transition-colors block"
                              style={{ fontFamily: "Arial, sans-serif" }}
                            >
                              {contestant.name}
                            </Link>

                            <p className="text-[10px] text-[#D4AF37] font-medium flex items-center gap-1" style={{ fontFamily: "Arial, sans-serif" }}>

                              <FiMapPin className="text-[9px]" />

                              {contestant.state} • {contestant.votes.toLocaleString()} Votes

                            </p>

                          </div>

                        </div>

                        <span className="text-[#D4AF37] font-bold text-sm shrink-0" style={{ fontFamily: "Arial, sans-serif" }}>
                          {percentage.toFixed(1)}%
                        </span>

                      </div>

                      <div className="w-full h-2 bg-[#333] rounded-full overflow-hidden mt-4">

                        <div
                          className="h-full bg-gradient-to-r from-[#5A0000] to-[#D4AF37] rounded-full transition-all duration-700"
                          style={{
                            width: `${percentage}%`,
                          }}
                        />

                      </div>

                    </div>

                  );

                })}

              </div>

            )}

          </div>

        </section>

        {/* FOOTER */}

        <footer className="py-10 px-4 bg-[#161616]/95 border-t border-[#D4AF37]/20 text-center">

          <p className="text-gray-400 text-xs" style={{ fontFamily: "Arial, sans-serif" }}>
            EMA Experience & Events
          </p>

          <p className="text-[#D4AF37] text-[10px] uppercase tracking-widest font-bold mt-2" style={{ fontFamily: "Arial, sans-serif" }}>
            All Rights Reserved
          </p>

        </footer>

      </div>

    </div>
  );
}