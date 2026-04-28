"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { colleges } from "@/data/colleges";

export default function Home() {
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState<string[]>([]);

  const filtered = colleges.filter((college) =>
    college.name.toLowerCase().includes(search.toLowerCase())
  );

  const toggleFavorite = (id: string) => {
    let updated = favorites.includes(id)
      ? favorites.filter((fav) => fav !== id)
      : [...favorites, id];

    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  useEffect(() => {
    const saved = localStorage.getItem("favorites");
    if (saved) setFavorites(JSON.parse(saved));
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-8">
      {/* Navbar */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold text-blue-400">CollegeHub</h1>

        <div className="space-x-4">
          <Link href="/login">
            <button className="px-4 py-2 bg-zinc-800 rounded-xl hover:bg-zinc-700">
              Login
            </button>
          </Link>

          <Link href="/signup">
            <button className="px-4 py-2 bg-blue-600 rounded-xl hover:bg-blue-500">
              Sign Up
            </button>
          </Link>
        </div>
      </div>

      {/* Hero */}
      <div className="mb-10">
        <h2 className="text-5xl font-bold mb-3">
          Discover Your Dream College
        </h2>
        <p className="text-zinc-400">
          Search, compare and save top colleges in India.
        </p>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search colleges..."
        className="w-full p-4 rounded-2xl bg-zinc-900 border border-zinc-700 mb-8"
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {filtered.map((college) => (
          <div
            key={college.id}
            className="bg-zinc-900 border border-zinc-800 p-5 rounded-2xl hover:scale-105 transition"
          >
            <h2 className="text-2xl font-bold">{college.name}</h2>
            <p className="text-zinc-400">{college.location}</p>
            <p className="mt-2">{college.fees}</p>
            <p>⭐ {college.rating}</p>

            {/* Favorite Button */}
            <button
              onClick={() => toggleFavorite(college.id)}
              className="mt-4 w-full bg-pink-600 py-2 rounded-xl hover:bg-pink-500"
            >
              {favorites.includes(college.id)
                ? "❤️ Saved"
                : "🤍 Save Favorite"}
            </button>

            {/* View Details */}
            <Link href={`/college/${college.id}`}>
              <button className="mt-3 px-4 py-2 bg-blue-600 rounded-xl w-full hover:bg-blue-500">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* Compare */}
      <Link href="/compare">
        <button className="mt-10 px-6 py-3 bg-green-600 rounded-xl hover:bg-green-500">
          Compare Colleges
        </button>
      </Link>
    </div>
  );
}