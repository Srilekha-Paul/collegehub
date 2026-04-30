'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import {
  GraduationCap,
  LogOut,
  Heart,
  BarChart3,
  ShieldCheck,
  User,
} from 'lucide-react';

export default function DashboardPage() {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState('');

  /* Check Logged User */
  const checkUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      router.push('/login');
    } else {
      setUserEmail(user.email || '');
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  /* Logout */
  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white">
      {/* Navbar */}
      <div className="border-b border-slate-800 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <GraduationCap className="text-green-400" size={28} />
          <h1 className="text-2xl font-bold">CollegeHub</h1>
        </div>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-xl transition"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Welcome Section */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
          <h2 className="text-4xl font-bold">Welcome Back 👋</h2>
          <p className="text-slate-400 mt-3 text-lg">{userEmail}</p>
        </div>

        {/* Dashboard Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <Heart className="text-pink-400 mb-4" size={28} />
            <h3 className="text-xl font-semibold">Saved Colleges</h3>
            <p className="text-slate-400 mt-2 text-sm">
              View all your shortlisted colleges.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <BarChart3 className="text-blue-400 mb-4" size={28} />
            <h3 className="text-xl font-semibold">Compare Colleges</h3>
            <p className="text-slate-400 mt-2 text-sm">
              Compare fees, ranking & placements.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <ShieldCheck className="text-green-400 mb-4" size={28} />
            <h3 className="text-xl font-semibold">AI Predictor</h3>
            <p className="text-slate-400 mt-2 text-sm">
              Predict your admission chances instantly.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <User className="text-yellow-400 mb-4" size={28} />
            <h3 className="text-xl font-semibold">Profile</h3>
            <p className="text-slate-400 mt-2 text-sm">
              Manage your account settings.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-8 text-black">
          <h3 className="text-3xl font-bold">
            Ready to find your dream college?
          </h3>

          <p className="mt-3 text-lg">
            Explore colleges, compare options and secure your future today.
          </p>

          <button
            onClick={() => router.push('/college')}
            className="mt-6 bg-black text-white px-6 py-3 rounded-xl hover:bg-slate-900 transition"
          >
            Explore Colleges
          </button>
        </div>
      </div>
    </div>
  );
}