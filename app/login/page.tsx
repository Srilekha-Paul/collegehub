"use client";

import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";

export default function LoginPage() {
  const [show, setShow] = useState(false);

  return (
    <main className="min-h-screen bg-[#050816] flex items-center justify-center px-4">
      <div className="grid md:grid-cols-2 w-full max-w-5xl bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">

        {/* Left */}
        <div className="hidden md:flex flex-col justify-center p-10 bg-gradient-to-br from-blue-600 to-indigo-700">
          <h1 className="text-5xl font-bold text-white">
            Welcome Back 👋
          </h1>

          <p className="text-white/80 mt-5 text-lg">
            Login to access saved colleges, compare tools, predictors and more.
          </p>
        </div>

        {/* Right */}
        <div className="p-10 text-white">
          <h2 className="text-4xl font-bold mb-8">Login</h2>

          {/* Email */}
          <div className="relative mb-5">
            <Mail className="absolute left-4 top-4 text-gray-400" size={18} />
            <input
              type="email"
              placeholder="Enter email"
              className="w-full bg-white/10 border border-white/10 rounded-xl px-12 py-4 outline-none focus:border-blue-500"
            />
          </div>

          {/* Password */}
          <div className="relative mb-5">
            <Lock className="absolute left-4 top-4 text-gray-400" size={18} />

            <input
              type={show ? "text" : "password"}
              placeholder="Enter password"
              className="w-full bg-white/10 border border-white/10 rounded-xl px-12 py-4 pr-12 outline-none focus:border-blue-500"
            />

            <button
              onClick={() => setShow(!show)}
              className="absolute right-4 top-4"
            >
              {show ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <button className="w-full bg-blue-600 py-4 rounded-xl hover:bg-blue-700 transition">
            Login
          </button>

          <p className="text-gray-400 mt-6 text-center">
            Don’t have an account?{" "}
            <Link href="/signup" className="text-blue-400">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}