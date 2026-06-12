import { motion } from "framer-motion";
import {
  Mail,
  Lock,
  User,
  Shield,
  ArrowRight,
  X,
  Eye,
  EyeOff,
} from "lucide-react";
import { useState } from "react";

function Signup({ setCurrentPage, setIsAuthenticated }) {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (!form.terms) {
      alert("Please accept terms & conditions");
      return;
    }

    setIsAuthenticated(true);
    localStorage.setItem("careerforge_auth", "true");
    setCurrentPage("dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 px-4">

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative w-full max-w-md"
      >

        {/* Close */}
        <button
          onClick={() => setCurrentPage("home")}
          className="absolute -top-3 right-0 w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8">

          <h2 className="text-3xl font-bold text-center mb-6">
            Create Account 🚀
          </h2>

          <form onSubmit={handleSignup} className="space-y-4">

            {/* Name */}
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 rounded-xl">
              <User className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                onChange={handleChange}
                className="w-full bg-transparent outline-none"
                required
              />
            </div>

            {/* Email */}
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 rounded-xl">
              <Mail className="w-5 h-5 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                className="w-full bg-transparent outline-none"
                required
              />
            </div>

            {/* Password */}
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 rounded-xl">
              <Lock className="w-5 h-5 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                onChange={handleChange}
                className="w-full bg-transparent outline-none"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* Confirm Password */}
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 rounded-xl">
              <Lock className="w-5 h-5 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                onChange={handleChange}
                className="w-full bg-transparent outline-none"
                required
              />
            </div>

            {/* Terms */}
            <label className="flex items-center gap-2 text-sm text-gray-600">
              <input
                type="checkbox"
                name="terms"
                onChange={handleChange}
              />
              I agree to Terms & Conditions
            </label>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2"
            >
              Create Account
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Login */}
          <p className="text-center text-sm mt-4">
            Already have account?{" "}
            <button
              onClick={() => setCurrentPage("login")}
              className="text-violet-600 font-semibold"
            >
              Login
            </button>
          </p>

          {/* Footer */}
          <div className="mt-5 text-center text-xs text-gray-400 flex items-center justify-center gap-2">
            <Shield className="w-4 h-4 text-green-500" />
            Secure signup system
          </div>

        </div>
      </motion.div>
    </div>
  );
}

export default Signup;