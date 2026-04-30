"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { colleges } from "@/data/colleges";
import {
  Search,
  MapPin,
  Star,
  TrendingUp,
  IndianRupee,
  Filter,
  Heart,
  Scale,
} from "lucide-react";

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All");
  const [sort, setSort] = useState("rating");
  const [saved, setSaved] = useState<number[]>([]);

  useEffect(() => {
    const data = localStorage.getItem("savedColleges");
    if (data) setSaved(JSON.parse(data));
  }, []);

  const toggleSave = (id: number) => {
    let updated = [...saved];

    if (saved.includes(id)) {
      updated = saved.filter((item) => item !== id);
    } else {
      updated.push(id);
    }

    setSaved(updated);
    localStorage.setItem("savedColleges", JSON.stringify(updated));
  };

  const locations = useMemo(() => {
    const all = colleges.map((c) => c.location);
    return ["All", ...Array.from(new Set(all))];
  }, []);

  const filtered = useMemo(() => {
    let data = colleges.filter(
      (college) =>
        college.name.toLowerCase().includes(search.toLowerCase()) &&
        (location === "All" || college.location === location)
    );

    if (sort === "rating") {
      data.sort((a, b) => b.rating - a.rating);
    }

    if (sort === "fees-low") {
      data.sort(
        (a, b) =>
          Number(a.fees.replace(/[₹,]/g, "")) -
          Number(b.fees.replace(/[₹,]/g, ""))
      );
    }

    if (sort === "nirf") {
      data.sort((a, b) => a.nirf - b.nirf);
    }

    return data;
  }, [search, location, sort]);

  return (
    <main className="min-h-screen bg-[#050816] text-white">

      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/90 backdrop-blur-xl px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-blue-500">
          CollegeHub
        </h1>

        <div className="flex gap-3 items-center">
          <Link href="/saved">
            <button className="px-4 py-2 rounded-xl bg-pink-600 hover:bg-pink-700">
              Saved ({saved.length})
            </button>
          </Link>

          <Link href="/compare">
            <button className="px-4 py-2 rounded-xl bg-green-600 hover:bg-green-700 flex gap-2 items-center">
              <Scale size={16} />
              Compare
            </button>
          </Link>

          <Link href="/login">
            <button className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20">
              Login
            </button>
          </Link>

          <Link href="/signup">
            <button className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700">
              Sign Up
            </button>
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 py-14 text-center">
        <h2 className="text-5xl md:text-6xl font-bold leading-tight">
          Discover Top{" "}
          <span className="text-blue-500">
            Engineering Colleges
          </span>{" "}
          of India
        </h2>

        <p className="text-gray-400 mt-4 text-lg">
          Search, compare, save and choose from {colleges.length}+ colleges.
        </p>

        {/* Search Filters */}
        <div className="max-w-5xl mx-auto mt-10 grid md:grid-cols-3 gap-4">

          <div className="relative">
            <Search className="absolute left-4 top-4 text-gray-400" size={18} />
            <input
              placeholder="Search college..."
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-12 py-4 outline-none"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <select
            className="bg-white/5 border border-white/10 rounded-2xl px-4 py-4 outline-none"
            onChange={(e) => setLocation(e.target.value)}
          >
            {locations.map((loc, i) => (
              <option key={i} className="text-black">
                {loc}
              </option>
            ))}
          </select>

          <select
            className="bg-white/5 border border-white/10 rounded-2xl px-4 py-4 outline-none"
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="rating" className="text-black">
              Top Rated
            </option>
            <option value="fees-low" className="text-black">
              Lowest Fees
            </option>
            <option value="nirf" className="text-black">
              Best Rank
            </option>
          </select>
        </div>
      </section>

      {/* Cards */}
      <section className="px-6 pb-20">

        <div className="flex justify-between items-center mb-8">
          <h3 className="text-3xl font-bold">
            Colleges ({filtered.length})
          </h3>

          <div className="flex items-center gap-2 text-gray-400">
            <Filter size={18} />
            Smart Results
          </div>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map((college) => (
            <div
              key={college.id}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:scale-[1.02] transition"
            >
              <div className="flex justify-between items-start">

                <div>
                  <h4 className="text-2xl font-bold">
                    {college.name}
                  </h4>

                  <p className="text-gray-400 mt-2 flex gap-1 items-center">
                    <MapPin size={15} />
                    {college.location}
                  </p>
                </div>

                <button
                  onClick={() => toggleSave(college.id)}
                  className="p-2 rounded-full hover:bg-white/10"
                >
                  <Heart
                    size={20}
                    className={
                      saved.includes(college.id)
                        ? "fill-pink-500 text-pink-500"
                        : "text-gray-400"
                    }
                  />
                </button>
              </div>

              <p className="text-gray-400 mt-4 line-clamp-2">
                {college.description}
              </p>

              <div className="grid grid-cols-3 gap-3 mt-5 text-sm">

                <Stat
                  icon={<Star size={15} className="text-yellow-400" />}
                  value={college.rating}
                />

                <Stat
                  icon={<TrendingUp size={15} className="text-green-400" />}
                  value={college.placement}
                />

                <Stat
                  icon={<IndianRupee size={15} className="text-blue-400" />}
                  value={college.fees}
                />
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {college.courses.slice(0, 3).map((course, i) => (
                  <span
                    key={i}
                    className="bg-white/10 text-sm px-3 py-1 rounded-full"
                  >
                    {course}
                  </span>
                ))}
              </div>

              <Link href={`/college/${college.slug}`}>
                <button className="w-full mt-6 bg-blue-600 py-3 rounded-2xl hover:bg-blue-700">
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

function Stat({
  icon,
  value,
}: {
  icon: React.ReactNode;
  value: string | number;
}) {
  return (
    <div className="bg-white/5 rounded-2xl p-3 text-center">
      <div className="flex justify-center">{icon}</div>
      <p className="mt-2 font-semibold">{value}</p>
    </div>
  );
} 







// "use client";

// import Link from "next/link";
// import { useMemo, useState } from "react";
// import { colleges } from "@/data/colleges";
// import {
//   Search,
//   MapPin,
//   Star,
//   TrendingUp,
//   IndianRupee,
//   Filter,
// } from "lucide-react";

// export default function HomePage() {
//   const [search, setSearch] = useState("");
//   const [location, setLocation] = useState("All");
//   const [sort, setSort] = useState("rating");

//   const locations = useMemo(() => {
//     const all = colleges.map((c) => c.location);
//     return ["All", ...Array.from(new Set(all))];
//   }, []);

//   const filtered = useMemo(() => {
//     let data = colleges.filter(
//       (college) =>
//         college.name.toLowerCase().includes(search.toLowerCase()) &&
//         (location === "All" || college.location === location)
//     );

//     if (sort === "rating") {
//       data.sort((a, b) => b.rating - a.rating);
//     }

//     if (sort === "fees-low") {
//       data.sort(
//         (a, b) =>
//           Number(a.fees.replace(/[₹,]/g, "")) -
//           Number(b.fees.replace(/[₹,]/g, ""))
//       );
//     }

//     if (sort === "nirf") {
//       data.sort((a, b) => a.nirf - b.nirf);
//     }

//     return data;
//   }, [search, location, sort]);

//   return (
//     <main className="min-h-screen bg-[#050816] text-white">

//       {/* Navbar */}
//       <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/90 backdrop-blur-xl px-6 py-4 flex justify-between items-center">
//         <h1 className="text-3xl font-bold text-blue-500">
//           CollegeHub
//         </h1>

//         <div className="flex gap-3">
//           <Link href="/login">
//             <button className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20">
//               Login
//             </button>
//           </Link>

//           <Link href="/signup">
//             <button className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700">
//               Sign Up
//             </button>
//           </Link>
//         </div>
//       </nav>

//       {/* Hero */}
//       <section className="px-6 py-14 text-center">
//         <h2 className="text-5xl md:text-6xl font-bold leading-tight">
//           Discover Top{" "}
//           <span className="text-blue-500">
//             Engineering Colleges
//           </span>{" "}
//           of India
//         </h2>

//         <p className="text-gray-400 mt-4 text-lg">
//           Search, compare and choose from {colleges.length}+ colleges.
//         </p>

//         {/* Search */}
//         <div className="max-w-4xl mx-auto mt-10 grid md:grid-cols-3 gap-4">

//           <div className="relative md:col-span-1">
//             <Search className="absolute left-4 top-4 text-gray-400" size={18} />
//             <input
//               placeholder="Search college..."
//               className="w-full bg-white/5 border border-white/10 rounded-2xl px-12 py-4 outline-none"
//               onChange={(e) => setSearch(e.target.value)}
//             />
//           </div>

//           <select
//             className="bg-white/5 border border-white/10 rounded-2xl px-4 py-4 outline-none"
//             onChange={(e) => setLocation(e.target.value)}
//           >
//             {locations.map((loc, i) => (
//               <option key={i} className="text-black">
//                 {loc}
//               </option>
//             ))}
//           </select>

//           <select
//             className="bg-white/5 border border-white/10 rounded-2xl px-4 py-4 outline-none"
//             onChange={(e) => setSort(e.target.value)}
//           >
//             <option value="rating" className="text-black">
//               Top Rated
//             </option>
//             <option value="fees-low" className="text-black">
//               Lowest Fees
//             </option>
//             <option value="nirf" className="text-black">
//               Best Rank
//             </option>
//           </select>
//         </div>
//       </section>

//       {/* Section */}
//       <section className="px-6 pb-20">

//         <div className="flex justify-between items-center mb-8">
//           <h3 className="text-3xl font-bold">
//             Colleges ({filtered.length})
//           </h3>

//           <div className="flex items-center gap-2 text-gray-400">
//             <Filter size={18} />
//             Smart Results
//           </div>
//         </div>

//         {/* Cards */}
//         <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
//           {filtered.map((college) => (
//             <div
//               key={college.id}
//               className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:scale-[1.02] transition"
//             >
//               <div className="flex justify-between items-start gap-4">
//                 <div>
//                   <h4 className="text-2xl font-bold leading-tight">
//                     {college.name}
//                   </h4>

//                   <p className="text-gray-400 mt-2 flex gap-1 items-center">
//                     <MapPin size={15} />
//                     {college.location}
//                   </p>
//                 </div>

//                 <span className="bg-blue-600 text-sm px-3 py-1 rounded-full">
//                   #{college.nirf}
//                 </span>
//               </div>

//               <p className="text-gray-400 mt-4 line-clamp-2">
//                 {college.description}
//               </p>

//               <div className="grid grid-cols-3 gap-3 mt-5 text-sm">
//                 <Stat
//                   icon={<Star size={15} className="text-yellow-400" />}
//                   value={college.rating}
//                 />

//                 <Stat
//                   icon={<TrendingUp size={15} className="text-green-400" />}
//                   value={college.placement}
//                 />

//                 <Stat
//                   icon={<IndianRupee size={15} className="text-blue-400" />}
//                   value={college.fees}
//                 />
//               </div>

//               <div className="mt-4 flex flex-wrap gap-2">
//                 {college.courses.slice(0, 3).map((course, i) => (
//                   <span
//                     key={i}
//                     className="bg-white/10 text-sm px-3 py-1 rounded-full"
//                   >
//                     {course}
//                   </span>
//                 ))}
//               </div>

//               <Link href={`/college/${college.slug}`}>
//                 <button className="w-full mt-6 bg-blue-600 py-3 rounded-2xl hover:bg-blue-700">
//                   View Details
//                 </button>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// }

// function Stat({
//   icon,
//   value,
// }: {
//   icon: React.ReactNode;
//   value: string | number;
// }) {
//   return (
//     <div className="bg-white/5 rounded-2xl p-3 text-center">
//       <div className="flex justify-center">{icon}</div>
//       <p className="mt-2 font-semibold">{value}</p>
//     </div>
//   );
// }




