"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, Star, MapPin, Heart, Scale, TrendingUp } from "lucide-react";

const colleges = [
  {
    id: 1,
    name: "IIT Delhi",
    location: "Delhi",
    fees: "₹2,00,000",
    rating: 4.9,
    placement: "95%",
    type: "Engineering",
  },
  {
    id: 2,
    name: "Jadavpur University",
    location: "Kolkata",
    fees: "₹20,000",
    rating: 4.7,
    placement: "88%",
    type: "Engineering",
  },
  {
    id: 3,
    name: "NIT Trichy",
    location: "Tamil Nadu",
    fees: "₹1,50,000",
    rating: 4.8,
    placement: "91%",
    type: "Engineering",
  },
];

export default function HomePage() {
  const [search, setSearch] = useState("");

  const filtered = colleges.filter((college) =>
    college.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-5 border-b border-white/10 backdrop-blur-md sticky top-0 z-50 bg-[#050816]/80">
        <h1 className="text-3xl font-bold text-blue-500">CollegeHub</h1>

        <div className="flex gap-4">
          <Link href="/login">
            <button className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 transition">
              Login
            </button>
          </Link>

          <Link href="/signup">
            <button className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 transition">
              Sign Up
            </button>
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center py-20 px-6">
        <h2 className="text-6xl font-bold leading-tight">
          Discover Your <span className="text-blue-500">Dream College</span>
        </h2>

        <p className="text-gray-400 mt-5 text-lg">
          Search, compare & choose top colleges in India smarter.
        </p>

        {/* Search */}
        <div className="mt-10 max-w-3xl mx-auto relative">
          <Search className="absolute left-4 top-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search colleges..."
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-12 py-4 outline-none focus:border-blue-500"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mt-14 max-w-5xl mx-auto">
          <StatCard title="500+" desc="Top Colleges" />
          <StatCard title="95%" desc="Placement Accuracy" />
          <StatCard title="10K+" desc="Students Helped" />
        </div>
      </section>

      {/* College Cards */}
      <section className="px-8 pb-20">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-3xl font-bold">Trending Colleges</h3>

          <Link href="/compare">
            <button className="bg-green-600 px-5 py-3 rounded-xl hover:bg-green-700 flex gap-2">
              <Scale size={18} /> Compare Colleges
            </button>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {filtered.map((college) => (
            <div
              key={college.id}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:scale-105 transition"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-2xl font-semibold">{college.name}</h4>

                  <p className="text-gray-400 flex items-center gap-1 mt-2">
                    <MapPin size={15} /> {college.location}
                  </p>
                </div>

                <button>
                  <Heart className="text-pink-500" />
                </button>
              </div>

              <div className="mt-5 space-y-2 text-gray-300">
                <p>Fees: {college.fees}</p>
                <p className="flex gap-1 items-center">
                  <Star size={16} className="text-yellow-400" />
                  {college.rating}
                </p>
                <p className="flex gap-1 items-center">
                  <TrendingUp size={16} className="text-green-400" />
                  Placement: {college.placement}
                </p>
              </div>

              <div className="mt-4">
                <span className="bg-blue-600 text-sm px-3 py-1 rounded-full">
                  {college.type}
                </span>
              </div>

              <Link href={`/college/${college.id}`}>
                <button className="mt-6 w-full bg-blue-600 py-3 rounded-xl hover:bg-blue-700">
                  View Details
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function StatCard({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
      <h3 className="text-4xl font-bold text-blue-500">{title}</h3>
      <p className="text-gray-400 mt-2">{desc}</p>
    </div>
  );
}