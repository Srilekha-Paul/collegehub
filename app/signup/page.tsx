'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Eye, EyeOff, Mail, Lock, User, ShieldCheck, GraduationCap } from 'lucide-react';

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center px-4 py-8">
      {/* Main Medium Container */}
      <div className="w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl border border-slate-800 grid md:grid-cols-2">

        {/* Left Side */}
        <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-8 md:p-12 flex flex-col justify-center">
          <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-8">
            <GraduationCap className="text-white w-8 h-8" />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Join <br />
            CollegeHub 🚀
          </h1>

          <p className="text-white/90 text-lg mt-6 leading-relaxed">
            Compare top colleges, save your favorites, predict admissions,
            and build your future smarter.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-10">
            <div className="bg-white/10 rounded-2xl p-4 text-white text-sm">
              500+ Verified Colleges
            </div>
            <div className="bg-white/10 rounded-2xl p-4 text-white text-sm">
              AI Predictor Tool
            </div>
            <div className="bg-white/10 rounded-2xl p-4 text-white text-sm">
              Smart Compare System
            </div>
            <div className="bg-white/10 rounded-2xl p-4 text-white text-sm">
              Save Favorites
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="bg-[#0f172a] p-8 md:p-12">
          <h2 className="text-4xl font-bold text-white">Create Account</h2>
          <p className="text-slate-400 mt-2">Start your college journey today.</p>

          <form className="space-y-5 mt-8">
            {/* Full Name */}
            <div className="relative">
              <User className="absolute left-4 top-3.5 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Full Name"
                className="w-full h-12 rounded-xl bg-slate-800 border border-slate-700 pl-12 pr-4 text-white outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <Mail className="absolute left-4 top-3.5 text-slate-400 w-5 h-5" />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full h-12 rounded-xl bg-slate-800 border border-slate-700 pl-12 pr-4 text-white outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <Lock className="absolute left-4 top-3.5 text-slate-400 w-5 h-5" />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className="w-full h-12 rounded-xl bg-slate-800 border border-slate-700 pl-12 pr-12 text-white outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3.5 text-slate-400"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <Lock className="absolute left-4 top-3.5 text-slate-400 w-5 h-5" />
              <input
                type={showConfirm ? 'text' : 'password'}
                placeholder="Confirm Password"
                className="w-full h-12 rounded-xl bg-slate-800 border border-slate-700 pl-12 pr-12 text-white outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-4 top-3.5 text-slate-400"
              >
                {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Terms */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-slate-400">
                <input type="checkbox" className="accent-green-500" />
                I agree Terms
              </label>

              <div className="flex items-center gap-1 text-green-400">
                <ShieldCheck size={16} />
                Secure Signup
              </div>
            </div>

            {/* Button */}
            <button className="w-full h-12 rounded-xl bg-green-500 hover:bg-green-600 transition text-white font-semibold text-lg">
              Create Account
            </button>

            {/* Divider */}
            <div className="relative text-center text-sm text-slate-500 py-2">
              <span className="bg-[#0f172a] px-3 relative z-10">OR CONTINUE WITH</span>
              <div className="absolute top-1/2 left-0 w-full h-px bg-slate-700 -z-0"></div>
            </div>

            {/* Google */}
            <button
              type="button"
              className="w-full h-12 rounded-xl bg-white text-black font-medium hover:bg-slate-100 transition"
            >
              Google
            </button>

            {/* Login */}
            <p className="text-center text-slate-400 pt-2">
              Already have an account?{' '}
              <Link href="/login" className="text-green-400 hover:underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import {
//   Eye,
//   EyeOff,
//   Mail,
//   Lock,
//   User,
//   GraduationCap,
//   ShieldCheck,
// } from "lucide-react";

// export default function SignupPage() {
//   const [show, setShow] = useState(false);
//   const [show2, setShow2] = useState(false);

//   return (
//     <main className="min-h-screen bg-gradient-to-br from-[#020617] via-[#050816] to-[#07122c] flex items-center justify-center px-4 py-8">

//       <div className="w-full max-w-7xl grid lg:grid-cols-2 bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">

//         {/* LEFT PANEL */}
//         <div className="relative hidden lg:flex flex-col justify-center p-14 bg-gradient-to-br from-green-500 via-emerald-600 to-teal-700">

//           <div className="absolute top-10 left-10 w-28 h-28 bg-white/10 rounded-full blur-2xl"></div>
//           <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>

//           <div className="relative z-10">
//             <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-8">
//               <GraduationCap size={34} className="text-white" />
//             </div>

//             <h1 className="text-6xl font-bold text-white leading-tight">
//               Join <br /> CollegeHub 🚀
//             </h1>

//             <p className="text-white/90 text-lg mt-6 leading-8 max-w-lg">
//               Compare top colleges, save your favorites, predict admissions,
//               and build your future smarter.
//             </p>

//             <div className="grid grid-cols-2 gap-5 mt-10">
//               <Feature text="500+ Verified Colleges" />
//               <Feature text="AI Predictor Tool" />
//               <Feature text="Smart Compare System" />
//               <Feature text="Save Favorites" />
//             </div>
//           </div>
//         </div>

//         {/* RIGHT PANEL */}
//         <div className="p-6 sm:p-10 lg:p-14 text-white">

//           <div className="max-w-xl mx-auto">
//             <h2 className="text-4xl sm:text-5xl font-bold mb-3">
//               Create Account
//             </h2>

//             <p className="text-gray-400 mb-8">
//               Start your college journey today.
//             </p>

//             {/* Full Name */}
//             <Input icon={<User size={18} />} placeholder="Full Name" />

//             {/* Email */}
//             <Input icon={<Mail size={18} />} placeholder="Email Address" />

//             {/* Password */}
//             <PasswordInput
//               placeholder="Create Password"
//               show={show}
//               setShow={setShow}
//             />

//             {/* Confirm */}
//             <PasswordInput
//               placeholder="Confirm Password"
//               show={show2}
//               setShow={setShow2}
//             />

//             {/* Terms */}
//             <div className="flex items-center justify-between mt-4 text-sm text-gray-400">
//               <label className="flex gap-2 items-center">
//                 <input type="checkbox" className="accent-green-500" />
//                 I agree Terms
//               </label>

//               <div className="flex items-center gap-1 text-green-400">
//                 <ShieldCheck size={16} />
//                 Secure Signup
//               </div>
//             </div>

//             {/* Button */}
//             <button className="w-full mt-6 bg-gradient-to-r from-green-500 to-emerald-600 py-4 rounded-2xl font-semibold text-lg hover:scale-[1.02] transition">
//               Create Account
//             </button>

//             {/* Divider */}
//             <div className="relative my-8">
//               <div className="border-t border-white/10"></div>
//               <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-[#0a1022] px-4 text-gray-500 text-sm">
//                 OR CONTINUE WITH
//               </span>
//             </div>

//             {/* Google */}
//             <button className="w-full bg-white text-black py-4 rounded-2xl font-semibold hover:bg-gray-100 flex items-center justify-center gap-3 transition">
//               <img
//                 src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
//                 className="w-5 h-5"
//                 alt="Google"
//               />
//               Google
//             </button>

//             {/* Bottom */}
//             <p className="text-center text-gray-400 mt-8">
//               Already have an account?{" "}
//               <Link
//                 href="/login"
//                 className="text-green-400 font-semibold hover:text-green-300"
//               >
//                 Login
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

// function Feature({ text }: { text: string }) {
//   return (
//     <div className="bg-white/10 rounded-2xl p-4 text-white font-medium text-sm backdrop-blur-md">
//       {text}
//     </div>
//   );
// }

// function Input({
//   icon,
//   placeholder,
// }: {
//   icon: React.ReactNode;
//   placeholder: string;
// }) {
//   return (
//     <div className="relative mb-5">
//       <div className="absolute left-4 top-4 text-gray-400">{icon}</div>

//       <input
//         placeholder={placeholder}
//         className="w-full bg-white/5 border border-white/10 rounded-2xl px-12 py-4 outline-none focus:border-green-500 transition"
//       />
//     </div>
//   );
// }

// function PasswordInput({
//   placeholder,
//   show,
//   setShow,
// }: {
//   placeholder: string;
//   show: boolean;
//   setShow: (v: boolean) => void;
// }) {
//   return (
//     <div className="relative mb-5">
//       <Lock className="absolute left-4 top-4 text-gray-400" size={18} />

//       <input
//         type={show ? "text" : "password"}
//         placeholder={placeholder}
//         className="w-full bg-white/5 border border-white/10 rounded-2xl px-12 py-4 pr-12 outline-none focus:border-green-500 transition"
//       />

//       <button
//         type="button"
//         onClick={() => setShow(!show)}
//         className="absolute right-4 top-4 text-gray-400"
//       >
//         {show ? <EyeOff size={18} /> : <Eye size={18} />}
//       </button>
//     </div>
//   );
// }