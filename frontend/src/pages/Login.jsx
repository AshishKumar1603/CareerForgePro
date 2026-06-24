// import { motion } from "framer-motion";
// import { Mail, Lock, Shield, ArrowRight, X } from "lucide-react";
// import { useState } from "react";

// function Login({ setCurrentPage, setIsAuthenticated }) {
//   const [loading, setLoading] = useState(false);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     // Fake API delay (simulate real auth)
//     setTimeout(() => {
//       setIsAuthenticated(true);
//       localStorage.setItem("isAuthenticated", "true");
//       setCurrentPage("dashboard");
//       setLoading(false);
//     }, 800);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 via-white to-slate-200 px-4">
      
//       <motion.div
//         initial={{ opacity: 0, y: 25, scale: 0.98 }}
//         animate={{ opacity: 1, y: 0, scale: 1 }}
//         transition={{ duration: 0.4 }}
//         className="relative w-full max-w-md"
//       >

//         {/* Close */}
//         <button
//           onClick={() => setCurrentPage("home")}
//           className="absolute -top-3 right-0 w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center text-gray-500 hover:text-violet-600 hover:shadow-lg transition"
//         >
//           <X className="w-5 h-5" />
//         </button>

//         {/* Card */}
//         <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8">

//           {/* Header */}
//           <div className="text-center mb-8">
//             <h1 className="text-3xl font-bold text-gray-900">
//               Welcome Back
//             </h1>
//             <p className="text-gray-500 mt-2 text-sm">
//               Sign in to continue to your dashboard
//             </p>
//           </div>

//           {/* Form */}
//           <form onSubmit={handleLogin} className="space-y-5">

//             {/* Email */}
//             <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus-within:border-violet-400 transition">
//               <Mail className="w-5 h-5 text-gray-400" />
//               <input
//                 type="email"
//                 required
//                 placeholder="Email address"
//                 className="w-full bg-transparent outline-none text-gray-700"
//               />
//             </div>

//             {/* Password */}
//             <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus-within:border-violet-400 transition">
//               <Lock className="w-5 h-5 text-gray-400" />
//               <input
//                 type="password"
//                 required
//                 placeholder="Password"
//                 className="w-full bg-transparent outline-none text-gray-700"
//               />
//             </div>

//             {/* Button */}
//             <motion.button
//               whileTap={{ scale: 0.97 }}
//               type="submit"
//               disabled={loading}
//               className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:from-violet-700 hover:to-fuchsia-600 transition disabled:opacity-60"
//             >
//               {loading ? "Signing in..." : "Sign In"}
//               {!loading && <ArrowRight className="w-4 h-4" />}
//             </motion.button>
//           </form>

//           {/* Footer links */}
//           <div className="mt-6 text-center text-sm">
//             <p className="text-gray-500">
//               New here?{" "}
//               <button
//                 onClick={() => setCurrentPage("signup")}
//                 className="text-violet-600 font-semibold hover:underline"
//               >
//                 Create account
//               </button>
//             </p>
//           </div>

//           {/* Security note */}
//           <div className="mt-6 pt-4 border-t flex items-center justify-center gap-2 text-xs text-gray-400">
//             <Shield className="w-4 h-4 text-emerald-500" />
//             <span>Protected with secure encryption</span>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// export default Login;
import { motion } from "framer-motion";
import {
  Mail,
  Lock,
  Shield,
  ArrowRight,
  X,
  Eye,
  EyeOff,
} from "lucide-react";
import { useState } from "react";

function Login({ setCurrentPage, setIsAuthenticated }) {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", "true");
      setCurrentPage("dashboard");
      setLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 via-white to-slate-200 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-xl"
      >
        <div className="relative bg-white/80 backdrop-blur-xl rounded-[32px] border border-white/50 shadow-[0_30px_80px_rgba(0,0,0,0.12)] p-10 md:p-12 min-h-[700px] flex flex-col justify-center">
          
          {/* Close Button */}
          <button
            onClick={() => setCurrentPage("home")}
            className="absolute top-6 right-6 w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center text-gray-500 hover:text-violet-600 hover:shadow-lg transition-all"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-violet-600 to-fuchsia-500 flex items-center justify-center shadow-xl shadow-violet-300/50">
              <Shield className="w-10 h-10 text-white" />
            </div>
          </div>

          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Welcome Back
            </h1>

            <p className="text-gray-500 mt-3 text-lg">
              Sign in to continue to your dashboard
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            
            {/* Email */}
            <div className="flex items-center gap-4 px-5 py-4 rounded-2xl bg-white border border-gray-200 shadow-sm focus-within:border-violet-500 focus-within:ring-4 focus-within:ring-violet-100 transition-all">
              <Mail className="w-5 h-5 text-gray-400" />

              <input
                type="email"
                required
                placeholder="Email address"
                className="w-full bg-transparent outline-none text-gray-700 placeholder:text-gray-400"
              />
            </div>

            {/* Password */}
            <div className="flex items-center gap-4 px-5 py-4 rounded-2xl bg-white border border-gray-200 shadow-sm focus-within:border-violet-500 focus-within:ring-4 focus-within:ring-violet-100 transition-all">
              <Lock className="w-5 h-5 text-gray-400" />

              <input
                type={showPassword ? "text" : "password"}
                required
                placeholder="Password"
                className="w-full bg-transparent outline-none text-gray-700 placeholder:text-gray-400"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-400 hover:text-violet-600 transition"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end">
              <button
                type="button"
                className="text-sm font-medium text-violet-600 hover:text-violet-700 hover:underline"
              >
                Forgot Password?
              </button>
            </div>

            {/* Sign In Button */}
            <motion.button
              whileTap={{ scale: 0.98 }}
              whileHover={{ scale: 1.01 }}
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl text-lg text-white font-semibold bg-gradient-to-r from-violet-600 to-fuchsia-500 shadow-lg shadow-violet-300/40 hover:shadow-xl hover:shadow-violet-400/50 transition-all disabled:opacity-70"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  Signing in...
                </>
              ) : (
                <>
                  Sign In
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </motion.button>
          </form>

          {/* Footer */}
          <div className="mt-10 text-center text-base">
            <p className="text-gray-500">
              New here?{" "}
              <button
                onClick={() => setCurrentPage("signup")}
                className="font-semibold text-violet-600 hover:text-violet-700 hover:underline"
              >
                Create account
              </button>
            </p>
          </div>

          {/* Security */}
          <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-center gap-2 text-sm text-gray-500">
            <Shield className="w-4 h-4 text-emerald-500" />
            <span>Protected with secure encryption</span>
          </div>

        </div>
      </motion.div>
    </div>
  );
}

export default Login;