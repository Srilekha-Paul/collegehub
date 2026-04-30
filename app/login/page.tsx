// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { Eye, EyeOff, Mail, Lock } from "lucide-react";

// export default function LoginPage() {
//   const [show, setShow] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//     remember: false,
//   });

//   const [error, setError] = useState("");

//   const handleLogin = async () => {
//     setError("");

//     if (!form.email || !form.password) {
//       return setError("All fields are required.");
//     }

//     setLoading(true);

//     setTimeout(() => {
//       setLoading(false);
//       alert("Login Successful 🚀");
//     }, 1500);
//   };

//   return (
//     <main className="min-h-screen bg-[#050816] flex items-center justify-center px-4">
//       <div className="grid md:grid-cols-2 w-full max-w-6xl bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">

//         {/* Left */}
//         <div className="hidden md:flex flex-col justify-center p-10 bg-gradient-to-br from-blue-600 to-indigo-700">
//           <h1 className="text-5xl font-bold text-white">
//             Welcome Back 👋
//           </h1>

//           <p className="text-white/80 mt-5 text-lg">
//             Login to compare colleges, save favorites and access predictor tools.
//           </p>
//         </div>

//         {/* Right */}
//         <div className="p-10 text-white">
//           <h2 className="text-4xl font-bold mb-8">Login</h2>

//           {error && (
//             <div className="bg-red-500/20 border border-red-500 text-red-300 p-3 rounded-xl mb-5">
//               {error}
//             </div>
//           )}

//           {/* Email */}
//           <div className="relative mb-5">
//             <Mail className="absolute left-4 top-4 text-gray-400" size={18} />
//             <input
//               type="email"
//               placeholder="Enter email"
//               className="w-full bg-white/10 border border-white/10 rounded-xl px-12 py-4 outline-none focus:border-blue-500"
//               onChange={(e) =>
//                 setForm({ ...form, email: e.target.value })
//               }
//             />
//           </div>

//           {/* Password */}
//           <div className="relative mb-3">
//             <Lock className="absolute left-4 top-4 text-gray-400" size={18} />

//             <input
//               type={show ? "text" : "password"}
//               placeholder="Enter password"
//               className="w-full bg-white/10 border border-white/10 rounded-xl px-12 py-4 pr-12 outline-none focus:border-blue-500"
//               onChange={(e) =>
//                 setForm({ ...form, password: e.target.value })
//               }
//             />

//             <button
//               type="button"
//               onClick={() => setShow(!show)}
//               className="absolute right-4 top-4"
//             >
//               {show ? <EyeOff size={18} /> : <Eye size={18} />}
//             </button>
//           </div>

//           {/* Options */}
//           <div className="flex justify-between text-sm text-gray-400 mb-5">
//             <label className="flex gap-2 items-center">
//               <input
//                 type="checkbox"
//                 onChange={(e) =>
//                   setForm({
//                     ...form,
//                     remember: e.target.checked,
//                   })
//                 }
//               />
//               Remember me
//             </label>

//             <Link href="#" className="hover:text-white">
//               Forgot Password?
//             </Link>
//           </div>

//           {/* Button */}
//           <button
//             onClick={handleLogin}
//             className="w-full bg-blue-600 py-4 rounded-xl hover:bg-blue-700 transition"
//           >
//             {loading ? "Please wait..." : "Login"}
//           </button>

//           {/* Divider */}
//           <div className="my-6 text-center text-gray-500">OR</div>

//           {/* Google */}

//           <button className="w-full bg-white text-black py-4 rounded-xl font-semibold hover:bg-gray-200 flex items-center justify-center gap-3 transition">
//            <img
//             src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
//             alt="Google"
//             className="w-5 h-5"
//             />
//            Continue with Google
//           </button>

//           {/* <button className="w-full bg-white text-black py-4 rounded-xl font-semibold hover:bg-gray-200">
//             Continue with Google
//           </button> */}


//           <p className="text-gray-400 mt-6 text-center">
//             Don’t have an account?{" "}
//             <Link href="/signup" className="text-blue-400">
//               Sign Up
//             </Link>
//           </p>
//         </div>
//       </div>
//     </main>
//   );
// }




'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Lock, Eye, EyeOff, GraduationCap } from 'lucide-react';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center px-4 py-8">
      {/* Same Size Container as Signup */}
      <div className="w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl border border-slate-800 grid md:grid-cols-2">

        {/* Left Section */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 md:p-12 flex flex-col justify-center">
          <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-8">
            <GraduationCap className="text-white w-8 h-8" />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Welcome <br />
            Back 👋
          </h1>

          <p className="text-white/90 text-lg mt-6 leading-relaxed">
            Login to compare colleges, save favorites and access predictor tools.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-10">
            <div className="bg-white/10 rounded-2xl p-4 text-white text-sm">
              Compare Colleges
            </div>
            <div className="bg-white/10 rounded-2xl p-4 text-white text-sm">
              Save Favorites
            </div>
            <div className="bg-white/10 rounded-2xl p-4 text-white text-sm">
              Predictor Access
            </div>
            <div className="bg-white/10 rounded-2xl p-4 text-white text-sm">
              Dashboard Tools
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-[#0f172a] p-8 md:p-12">
          <h2 className="text-4xl font-bold text-white">Login</h2>
          <p className="text-slate-400 mt-2">Access your CollegeHub account.</p>

          <form className="space-y-5 mt-8">
            {/* Email */}
            <div className="relative">
              <Mail className="absolute left-4 top-3.5 text-slate-400 w-5 h-5" />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full h-12 rounded-xl bg-slate-800 border border-slate-700 pl-12 pr-4 text-white outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <Lock className="absolute left-4 top-3.5 text-slate-400 w-5 h-5" />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className="w-full h-12 rounded-xl bg-slate-800 border border-slate-700 pl-12 pr-12 text-white outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3.5 text-slate-400"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-slate-400">
                <input type="checkbox" className="accent-blue-500" />
                Remember me
              </label>

              <Link
                href="/forgot-password"
                className="text-blue-400 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Login Button */}
            <button className="w-full h-12 rounded-xl bg-blue-600 hover:bg-blue-700 transition text-white font-semibold text-lg">
              Login
            </button>

            {/* Divider */}
            <div className="relative text-center text-sm text-slate-500 py-2">
              <span className="bg-[#0f172a] px-3 relative z-10">OR</span>
              <div className="absolute top-1/2 left-0 w-full h-px bg-slate-700 -z-0"></div>
            </div>

            {/* Google Login */}
            <button
              type="button"
              className="w-full h-12 rounded-xl bg-white text-black font-medium hover:bg-slate-100 transition"
            >
              Continue with Google
            </button>

            {/* Signup Link */}
            <p className="text-center text-slate-400 pt-2">
              Don&apos;t have an account?{' '}
              <Link href="/signup" className="text-blue-400 hover:underline">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}