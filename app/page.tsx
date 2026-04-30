"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { colleges } from "@/data/colleges";
import {
  Search,
  MapPin,
  Star,
  IndianRupee,
  TrendingUp,
  Heart,
  Scale,
  Filter,
  ExternalLink,
} from "lucide-react";

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All");
  const [sortBy, setSortBy] = useState("Top Rated");
  const [saved, setSaved] = useState<number[]>([]);
  const [visible, setVisible] = useState(12);

  const locations = useMemo(() => {
    const list = colleges.map((c) => c.location);
    return ["All", ...Array.from(new Set(list))];
  }, []);

  const toggleSave = (id: number) => {
    setSaved((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  const filteredColleges = useMemo(() => {
    let data = [...colleges];

    // Search
    data = data.filter((college) =>
      college.name.toLowerCase().includes(search.toLowerCase())
    );

    // Location filter
    if (location !== "All") {
      data = data.filter((college) => college.location === location);
    }

    // Sorting
    if (sortBy === "Top Rated") {
      data.sort((a, b) => b.rating - a.rating);
    }

    if (sortBy === "Lowest Fees") {
      data.sort(
        (a, b) =>
          Number(a.fees.replace(/[₹,]/g, "")) -
          Number(b.fees.replace(/[₹,]/g, ""))
      );
    }

    if (sortBy === "Best Placement") {
      data.sort(
        (a, b) =>
          Number(b.placement.replace("%", "")) -
          Number(a.placement.replace("%", ""))
      );
    }

    return data.slice(0, visible);
  }, [search, location, sortBy, visible]);

  return (
    <div className="min-h-screen bg-[#020617] text-white">
      {/* NAVBAR */}
      <nav className="border-b border-white/10 px-6 py-4 flex justify-between items-center sticky top-0 bg-[#020617]/90 backdrop-blur z-50">
        <h1 className="text-4xl font-bold text-blue-500">
          CollegeHub
        </h1>

        <div className="flex gap-3">
          <button className="bg-pink-600 px-5 py-3 rounded-xl font-semibold">
            Saved ({saved.length})
          </button>

          <Link
            href="/compare"
            className="bg-green-600 px-5 py-3 rounded-xl font-semibold flex items-center gap-2"
          >
            <Scale size={18} />
            Compare
          </Link>

          <Link
            href="/login"
            className="bg-white/10 px-5 py-3 rounded-xl"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="bg-blue-600 px-5 py-3 rounded-xl"
          >
            Sign Up
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="text-center py-20 px-6">
        <h2 className="text-6xl font-bold max-w-6xl mx-auto leading-tight">
          Discover Top{" "}
          <span className="text-blue-500">
            Engineering Colleges
          </span>{" "}
          of India
        </h2>

        <p className="text-gray-400 mt-6 text-xl">
          Search, compare, save and choose from 100+
          colleges.
        </p>

        {/* FILTERS */}
        <div className="grid md:grid-cols-3 gap-5 mt-12 max-w-6xl mx-auto">
          {/* Search */}
          <div className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 flex items-center gap-3">
            <Search size={20} />
            <input
              type="text"
              placeholder="Search college..."
              className="bg-transparent outline-none w-full"
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />
          </div>

          {/* Location */}
          <select
            className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none"
            value={location}
            onChange={(e) =>
              setLocation(e.target.value)
            }
          >
            {locations.map((loc) => (
              <option
                key={loc}
                value={loc}
                className="text-black"
              >
                {loc}
              </option>
            ))}
          </select>

          {/* Sort */}
          <select
            className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none"
            value={sortBy}
            onChange={(e) =>
              setSortBy(e.target.value)
            }
          >
            <option className="text-black">
              Top Rated
            </option>
            <option className="text-black">
              Lowest Fees
            </option>
            <option className="text-black">
              Best Placement
            </option>
          </select>
        </div>
      </section>

      {/* LISTING */}
      <section className="px-6 pb-20">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-5xl font-bold">
            Colleges ({filteredColleges.length})
          </h3>

          <div className="text-gray-400 flex items-center gap-2">
            <Filter size={18} />
            Smart Results
          </div>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {filteredColleges.map((college) => (
            <div
              key={college.id}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:scale-[1.02] transition"
            >
              {/* Header */}
              <div className="flex justify-between">
                <div>
                  <h4 className="text-4xl font-bold">
                    {college.name}
                  </h4>

                  <p className="text-gray-400 flex items-center gap-2 mt-3">
                    <MapPin size={18} />
                    {college.location}
                  </p>
                </div>

                <button
                  onClick={() =>
                    toggleSave(college.id)
                  }
                >
                  <Heart
                    size={26}
                    className={
                      saved.includes(college.id)
                        ? "fill-pink-500 text-pink-500"
                        : "text-pink-500"
                    }
                  />
                </button>
              </div>

              {/* Description */}
              <p className="text-gray-400 mt-6 text-lg">
                {college.description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="bg-white/5 rounded-2xl p-4 text-center">
                  <Star className="mx-auto text-yellow-400 mb-2" />
                  <p className="font-bold text-xl">
                    {college.rating}
                  </p>
                </div>

                <div className="bg-white/5 rounded-2xl p-4 text-center">
                  <TrendingUp className="mx-auto text-green-400 mb-2" />
                  <p className="font-bold text-xl">
                    {college.placement}
                  </p>
                </div>

                <div className="bg-white/5 rounded-2xl p-4 text-center">
                  <IndianRupee className="mx-auto text-blue-400 mb-2" />
                  <p className="font-bold text-xl">
                    {college.fees}
                  </p>
                </div>
              </div>

              {/* Courses */}
              <div className="flex flex-wrap gap-3 mt-6">
                {college.courses
                  ?.slice(0, 3)
                  .map((course: string) => (
                    <span
                      key={course}
                      className="bg-white/10 px-4 py-2 rounded-full text-sm"
                    >
                      {course}
                    </span>
                  ))}
              </div>

              {/* Buttons */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {/* Internal Page */}
                <Link
                  href={`/college/${college.slug}`}
                  className="bg-blue-600 hover:bg-blue-700 text-center py-4 rounded-2xl font-semibold"
                >
                  Explore
                </Link>

                {/* Official Website */}
                <a
                  href={
                    college.website ||
                    "https://google.com"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 text-center py-4 rounded-2xl font-semibold flex items-center justify-center gap-2"
                >
                  Official
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* LOAD MORE */}
        {visible < colleges.length && (
          <div className="text-center mt-12">
            <button
              onClick={() =>
                setVisible((prev) => prev + 12)
              }
              className="bg-blue-600 px-8 py-4 rounded-2xl font-semibold text-lg"
            >
              Load More Colleges
            </button>
          </div>
        )}
      </section>
    </div>
  );
}





// "use client";

// import Link from "next/link";
// import { useEffect, useMemo, useState } from "react";
// import { colleges } from "@/data/colleges";
// import {
//   Search,
//   MapPin,
//   Star,
//   TrendingUp,
//   IndianRupee,
//   Filter,
//   Heart,
//   Scale,
// } from "lucide-react";

// export default function HomePage() {
//   const [search, setSearch] = useState("");
//   const [location, setLocation] = useState("All");
//   const [sort, setSort] = useState("rating");
//   const [saved, setSaved] = useState<number[]>([]);

//   useEffect(() => {
//     const data = localStorage.getItem("savedColleges");
//     if (data) setSaved(JSON.parse(data));
//   }, []);

//   const toggleSave = (id: number) => {
//     let updated = [...saved];

//     if (saved.includes(id)) {
//       updated = saved.filter((item) => item !== id);
//     } else {
//       updated.push(id);
//     }

//     setSaved(updated);
//     localStorage.setItem("savedColleges", JSON.stringify(updated));
//   };

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

//         <div className="flex gap-3 items-center">
//           <Link href="/saved">
//             <button className="px-4 py-2 rounded-xl bg-pink-600 hover:bg-pink-700">
//               Saved ({saved.length})
//             </button>
//           </Link>

//           <Link href="/compare">
//             <button className="px-4 py-2 rounded-xl bg-green-600 hover:bg-green-700 flex gap-2 items-center">
//               <Scale size={16} />
//               Compare
//             </button>
//           </Link>

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
//           Search, compare, save and choose from {colleges.length}+ colleges.
//         </p>

//         {/* Search Filters */}
//         <div className="max-w-5xl mx-auto mt-10 grid md:grid-cols-3 gap-4">

//           <div className="relative">
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

//       {/* Cards */}
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

//         <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
//           {filtered.map((college) => (
//             <div
//               key={college.id}
//               className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:scale-[1.02] transition"
//             >
//               <div className="flex justify-between items-start">

//                 <div>
//                   <h4 className="text-2xl font-bold">
//                     {college.name}
//                   </h4>

//                   <p className="text-gray-400 mt-2 flex gap-1 items-center">
//                     <MapPin size={15} />
//                     {college.location}
//                   </p>
//                 </div>

//                 <button
//                   onClick={() => toggleSave(college.id)}
//                   className="p-2 rounded-full hover:bg-white/10"
//                 >
//                   <Heart
//                     size={20}
//                     className={
//                       saved.includes(college.id)
//                         ? "fill-pink-500 text-pink-500"
//                         : "text-gray-400"
//                     }
//                   />
//                 </button>
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






