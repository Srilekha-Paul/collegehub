"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Signup() {
  const router = useRouter();

  const [email, setEmail] = useState("");

  const handleSignup = () => {
    localStorage.setItem("user", email);
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex justify-center items-center">
      <div className="bg-zinc-900 p-8 rounded-2xl w-[400px]">
        <h1 className="text-3xl font-bold mb-6">Create Account</h1>

        <input
          placeholder="Email"
          className="w-full p-3 mb-4 rounded-xl bg-zinc-800"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 rounded-xl bg-zinc-800"
        />

        <button
          onClick={handleSignup}
          className="w-full bg-green-600 p-3 rounded-xl"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}