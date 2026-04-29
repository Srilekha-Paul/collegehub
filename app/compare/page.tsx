"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Trophy } from "lucide-react";

const colleges = [
  {
    id: 1,
    name: "IIT Delhi",
    location: "Delhi",
    fees: 200000,
    rating: 4.9,
    placement: 95,
  },
  {
    id: 2,
    name: "Jadavpur University",
    location: "Kolkata",
    fees: 20000,
    rating: 4.7,
    placement: 88,
  },
  {
    id: 3,
    name: "NIT Trichy",
    location: "Tamil Nadu",
    fees: 150000,
    rating: 4.8,
    placement: 91,
  },
];

export default function ComparePage() {
  const [first, setFirst] = useState("1");
  const [second, setSecond] = useState("2");

  const college1 = colleges.find((c) => c.id === Number(first));
  const college2 = colleges.find((c) => c.id === Number(second));

  if (!college1 || !college2) return null;

  return (
    <main className="min-h-screen bg-[#050816] text-white px-6 py-8">
      {/* Top */}
      <div className="flex justify-between items-center mb-10">
        <Link href="/">
          <button className="flex items-center gap-2 text-gray-300 hover:text-white">
            <ArrowLeft size={18} />
            Back
          </button>
        </Link>

        <h1 className="text-3xl font-bold text-blue-500">
          Compare Colleges
        </h1>
      </div>

      {/* Selectors */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <select
          value={first}
          onChange={(e) => setFirst(e.target.value)}
          className="bg-white/5 border border-white/10 p-4 rounded-xl outline-none"
        >
          {colleges.map((college) => (
            <option
              key={college.id}
              value={college.id}
              className="text-black"
            >
              {college.name}
            </option>
          ))}
        </select>

        <select
          value={second}
          onChange={(e) => setSecond(e.target.value)}
          className="bg-white/5 border border-white/10 p-4 rounded-xl outline-none"
        >
          {colleges.map((college) => (
            <option
              key={college.id}
              value={college.id}
              className="text-black"
            >
              {college.name}
            </option>
          ))}
        </select>
      </div>

      {/* Compare Table */}
      <div className="overflow-x-auto">
        <table className="w-full border border-white/10 rounded-2xl overflow-hidden">
          <thead className="bg-blue-600">
            <tr>
              <th className="p-4 text-left">Feature</th>
              <th className="p-4 text-left">{college1.name}</th>
              <th className="p-4 text-left">{college2.name}</th>
            </tr>
          </thead>

          <tbody>
            <Row
              label="Location"
              a={college1.location}
              b={college2.location}
            />

            <Row
              label="Fees"
              a={`₹${college1.fees.toLocaleString()}`}
              b={`₹${college2.fees.toLocaleString()}`}
              better={college1.fees < college2.fees ? 1 : 2}
            />

            <Row
              label="Rating"
              a={college1.rating}
              b={college2.rating}
              better={college1.rating > college2.rating ? 1 : 2}
            />

            <Row
              label="Placement %"
              a={`${college1.placement}%`}
              b={`${college2.placement}%`}
              better={college1.placement > college2.placement ? 1 : 2}
            />
          </tbody>
        </table>
      </div>

      {/* Winner */}
      <div className="mt-10 bg-green-600/20 border border-green-500 rounded-2xl p-6">
        <h2 className="text-2xl font-bold flex gap-2 items-center">
          <Trophy className="text-yellow-400" />
          Recommended Choice:
        </h2>

        <p className="mt-3 text-lg">
          {college1.rating + college1.placement / 100 >
          college2.rating + college2.placement / 100
            ? college1.name
            : college2.name}
        </p>
      </div>
    </main>
  );
}

function Row({
  label,
  a,
  b,
  better,
}: {
  label: string;
  a: string | number;
  b: string | number;
  better?: number;
}) {
  return (
    <tr className="border-t border-white/10">
      <td className="p-4 font-semibold">{label}</td>

      <td
        className={`p-4 ${
          better === 1 ? "text-green-400 font-bold" : ""
        }`}
      >
        {a}
      </td>

      <td
        className={`p-4 ${
          better === 2 ? "text-green-400 font-bold" : ""
        }`}
      >
        {b}
      </td>
    </tr>
  );
}