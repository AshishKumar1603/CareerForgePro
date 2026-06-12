import React, { useState } from "react";
import {
  Mail,
  Lock,
  User,
  ArrowRight,
  ShieldCheck,
  X,
} from "lucide-react";

const CreateAccount = ({ setCurrentPage }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCreateAccount = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      alert("Please fill all fields.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    localStorage.setItem("careerforgeUser", JSON.stringify(formData));
    alert("Account created successfully!");
    setCurrentPage("login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-700 via-purple-700 to-fuchsia-700 flex items-center justify-center px-4 py-10">

      <div className="relative w-full max-w-6xl overflow-hidden rounded-[35px] bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">

        <button
          onClick={() => setCurrentPage("home")}
          className="absolute right-5 top-5 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30 transition"
        >
          <X />
        </button>

        <div className="grid lg:grid-cols-2">

          {/* Left Section */}
          <div className="hidden lg:flex flex-col justify-center p-12 text-white">
            <h1 className="text-5xl font-black leading-tight">
              Welcome to
              <span className="block text-yellow-300">
                CareerForge
              </span>
            </h1>

            <p className="mt-6 text-lg text-white/80">
              Create your account and unlock personalized career tools,
              learning resources, and job opportunities.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-green-300" />
                <span>Secure account creation</span>
              </div>

              <div className="flex items-center gap-3">
                <ShieldCheck className="text-green-300" />
                <span>Track your career progress</span>
              </div>

              <div className="flex items-center gap-3">
                <ShieldCheck className="text-green-300" />
                <span>Access premium resources</span>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-white p-8 sm:p-12">
            <div className="mb-8">
              <h2 className="text-4xl font-black text-slate-900">
                Create Account
              </h2>

              <p className="mt-2 text-slate-500">
                Join CareerForge today 🚀
              </p>
            </div>

            <form onSubmit={handleCreateAccount} className="space-y-5">

              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 px-5 py-4 focus-within:border-violet-600">
                <User className="text-slate-400" />
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full outline-none"
                />
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 px-5 py-4 focus-within:border-violet-600">
                <Mail className="text-slate-400" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full outline-none"
                />
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 px-5 py-4 focus-within:border-violet-600">
                <Lock className="text-slate-400" />
                <input
                  type="password"
                  name="password"
                  placeholder="Create Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full outline-none"
                />
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 px-5 py-4 focus-within:border-violet-600">
                <Lock className="text-slate-400" />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full outline-none"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 py-4 font-bold text-white shadow-lg hover:scale-[1.02] transition"
              >
                Create Account
                <ArrowRight />
              </button>
            </form>

            <p className="mt-6 text-center text-slate-500">
              Already have an account?{" "}
              <button
                onClick={() => setCurrentPage("login")}
                className="font-semibold text-violet-600 hover:text-fuchsia-600"
              >
                Login
              </button>
            </p>

            <div className="mt-8 flex items-center justify-center gap-2 border-t pt-6 text-sm text-slate-500">
              <ShieldCheck className="h-5 w-5 text-green-500" />
              Secure account creation with local storage
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;