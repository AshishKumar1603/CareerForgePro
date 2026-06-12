// import { Sun, Moon, ChevronLeft } from 'lucide-react';
// function Navbar({ onBack, showBack = false, className = '', onLogin, isAuthenticated, setIsAuthenticated, setCurrentPage }) {
//   const handleLogout = () => {
//     setIsAuthenticated(false);
//     localStorage.removeItem('careerforge_auth');
//     setCurrentPage('home');
//   };

//   return (
//     <nav className={`sticky top-0 z-50 flex items-center justify-between px-4 sm:px-8 py-3 bg-white/95 dark:bg-gray-900/95 shadow-sm dark:shadow-gray-800/50 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 ${className}`}>

//       <div className="flex items-center gap-3">
//         {showBack && onBack && (
//           <button
//           onClick={() => onBack && onBack()}
//             className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 active:scale-95 transition-all duration-200 text-gray-600 dark:text-gray-300 font-medium text-sm"
//             aria-label="Go back"
//           >
//             <ChevronLeft className="w-4 h-4" />
//             Back
//           </button>
//         )}
//         <h1 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-500 dark:from-violet-400 dark:to-fuchsia-400 bg-clip-text text-transparent">
//           CareerForge
//         </h1>
//       </div>

//       <div className="flex items-center gap-2">
//         {!showBack && (
//           <div className="hidden md:flex gap-1 text-sm font-medium text-gray-600 dark:text-gray-300 mr-2">
//             <a href="#features" className="hover:text-violet-600 dark:hover:text-violet-400 px-3 py-2 rounded-lg hover:bg-violet-50 dark:hover:bg-violet-900/30 transition-all">Features</a>
//             <a href="#pricing" className="hover:text-violet-600 dark:hover:text-violet-400 px-3 py-2 rounded-lg hover:bg-violet-50 dark:hover:bg-violet-900/30 transition-all">Pricing</a>
//             {!isAuthenticated ? (
//               <button
//                 onClick={onLogin}
//                 className="hover:text-violet-600 dark:hover:text-violet-400 px-3 py-2 rounded-lg hover:bg-violet-50 dark:hover:bg-violet-900/30 transition-all font-semibold"
//               >
//                 Login
//               </button>
//             ) : (
//               <button
//                 onClick={handleLogout}
//                 className="hover:text-red-600 dark:hover:text-red-400 px-3 py-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/30 transition-all font-semibold"
//               >
//                 Logout
//               </button>
//             )}
//           </div>
//         )}

//         <div className="w-10"></div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import React from "react";
import {
  Sun,
  Moon,
  ChevronLeft,
  LogOut,
  LogIn,
  LayoutDashboard,
} from "lucide-react";

function Navbar({
  onBack,
  showBack = false,
  className = "",
  onLogin,
  isAuthenticated,
  setIsAuthenticated,
  setCurrentPage,
  isDarkMode = true, // Default to dark premium theme
  toggleTheme,
}) {
  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("careerforge_auth");
    setCurrentPage("home");
  };

  return (
    <nav
      className={`sticky top-0 z-50 flex items-center justify-between px-4 sm:px-8 py-3.5 bg-slate-950/70 backdrop-blur-md border-b border-slate-900 shadow-xl transition-all duration-300 ${className}`}
    >
      {/* Left Area: Back Button & Branding */}
      <div className="flex items-center gap-4">
        {showBack && onBack && (
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 active:scale-95 transition-all duration-200 text-slate-300 hover:text-slate-100 text-xs font-semibold uppercase tracking-wider"
            aria-label="Go back"
          >
            <ChevronLeft className="w-4 h-4 text-indigo-400" />
            Back
          </button>
        )}
        <h1
          onClick={() => setCurrentPage("home")}
          className="text-lg sm:text-2xl font-black bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent cursor-pointer tracking-tight selection:bg-transparent"
        >
          CareerForge<span className="text-indigo-500">.</span>
        </h1>
      </div>

      {/* Right Area: Navigation & User Auth Controls */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Desktop Links - Hidden only when on specific child setups, but links adapt properly */}
        <div className="hidden md:flex items-center gap-2 text-sm font-semibold text-slate-400">
          {!showBack && (
            <>
              <a
                href="#features"
                className="hover:text-slate-100 px-3 py-1.5 rounded-md hover:bg-slate-900/60 border border-transparent hover:border-slate-800/60 transition-all duration-200"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="hover:text-slate-100 px-3 py-1.5 rounded-md hover:bg-slate-900/60 border border-transparent hover:border-slate-800/60 transition-all duration-200"
              >
                Pricing
              </a>
            </>
          )}

          {/* Quick Dashboard shortcut if user is logged in but on Home/Landing */}
          {isAuthenticated && !showBack && (
            <button
              onClick={() => setCurrentPage("dashboard")}
              className="flex items-center gap-1.5 text-slate-300 hover:text-slate-100 px-3 py-1.5 rounded-md hover:bg-slate-900/60 transition-all duration-200"
            >
              <LayoutDashboard className="w-4 h-4 text-purple-400" />
              Dashboard
            </button>
          )}

          <div className="h-4 w-[1px] bg-slate-800 mx-2" />

          {/* Core Auth Action Trigger */}
          {!isAuthenticated ? (
            <button
              onClick={onLogin}
              className="flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 px-3 py-1.5 rounded-md bg-indigo-500/5 hover:bg-indigo-500/10 border border-indigo-500/10 hover:border-indigo-500/20 transition-all duration-200 active:scale-95"
            >
              <LogIn className="w-3.5 h-3.5" />
              Login
            </button>
          ) : (
            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 text-rose-400 hover:text-rose-300 px-3 py-1.5 rounded-md bg-rose-500/5 hover:bg-rose-500/10 border border-rose-500/10 hover:border-rose-500/20 transition-all duration-200 active:scale-95"
            >
              <LogOut className="w-3.5 h-3.5" />
              Logout
            </button>
          )}
        </div>

        {/* Reusable Dynamic Theme Switcher Element */}
        {toggleTheme && (
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700 transition active:scale-95"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-400" />
            )}
          </button>
        )}

        {/* Mobile View Authentication Shortcuts */}
        <div className="md:hidden flex items-center gap-2">
          {isAuthenticated && !showBack && (
            <button
              onClick={() => setCurrentPage("dashboard")}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-purple-400"
            >
              <LayoutDashboard className="w-4 h-4" />
            </button>
          )}

          {!isAuthenticated ? (
            <button
              onClick={onLogin}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 active:scale-95 transition"
            >
              <LogIn className="w-4 h-4 text-indigo-400" />
            </button>
          ) : (
            <button
              onClick={handleLogout}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-rose-400 active:scale-95 transition"
            >
              <LogOut className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
