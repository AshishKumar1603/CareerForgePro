// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import toast from "react-hot-toast";
// import {
//   FileText,
//   Search,
//   Sparkles,
//   BarChart3,
//   Mail,
//   Star,
//   LayoutDashboard,
//   Lock,
// } from "lucide-react";

// const steps = [
//   {
//     title: "Create Resume",
//     desc: "Build your resume with live preview",
//     icon: FileText,
//     gradient: "from-violet-500 to-fuchsia-500",
//     bg: "from-violet-500/5 to-fuchsia-500/5 dark:from-violet-900/10 dark:to-fuchsia-900/10",
//     border: "border-violet-200/60 dark:border-violet-800/40",
//     page: "resume",
//     pro: false,
//   },
//   {
//     title: "Analyze Job Description",
//     desc: "Paste JD and extract key keywords",
//     icon: Search,
//     gradient: "from-blue-500 to-cyan-500",
//     bg: "from-blue-500/5 to-cyan-500/5 dark:from-blue-900/10 dark:to-cyan-900/10",
//     border: "border-blue-200/60 dark:border-blue-800/40",
//     page: "jd-analysis",
//     pro: true,
//   },
//   {
//     title: "Improve Resume",
//     return (
//       <motion.div
//         className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 transition-all duration-300 text-slate-200"
//     bg: "from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20",
//     border: "border-amber-200 dark:border-amber-700/50",
//     page: "improve-resume",
//         <Navbar onBack={() => setCurrentPage("home")} showBack />

//         <div className="px-4 sm:px-10 py-12">
//     title: "Check ATS Score",
//     desc: "See how well your resume matches",
//     icon: BarChart3,
//     gradient: "from-emerald-500 to-teal-500",
//     bg: "from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20",
//     border: "border-emerald-200 dark:border-emerald-700/50",
//             <span className="inline-block px-4 py-1.5 rounded-full bg-white/6 text-purple-300 text-sm font-medium mb-4">
//               Workspace
//             </span>
//             <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-3 leading-tight">
//               CareerForge <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-fuchsia-300">Workspace</span>
//             </h1>
//             <p className="text-slate-300 text-lg max-w-xl mx-auto">
//               Build your career documents step by step with polished tools and AI assistance
//             </p>
//   },
//   {
//     title: "My Dashboard",
//     desc: "View and manage saved resumes",
//                 className={`cursor-pointer rounded-3xl p-6 sm:p-7 shadow-2xl transition-all duration-300 group relative overflow-hidden ${step.pro && !isPro ? 'opacity-70' : 'bg-gradient-to-br from-white/3 to-white/2'}`}
//     gradient: "from-indigo-500 to-violet-500",
//     bg: "from-indigo-500/5 to-violet-500/5 dark:from-indigo-900/10 dark:to-indigo-900/10",
//     border: "border-indigo-200/60 dark:border-indigo-800/40",
//     page: "dashboard",
//     pro: false,
//   },
//   {
//     title: "Upgrade to Pro",
//     desc: "Unlock templates & unlimited builds",
//     icon: Star,
//     gradient: "from-yellow-500 to-amber-500",
//     bg: "from-yellow-500/10 to-amber-500/10 dark:from-yellow-900/20 dark:to-amber-900/20",
//     border: "border-yellow-200 dark:border-yellow-800/60",
//     page: "pricing",
//     pro: false,
//   },
// ];
//                 <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-white/6 flex items-center justify-center text-xs font-bold text-slate-300">
// function Builder({ setCurrentPage, isPro }) {
//   const [selectedStep, setSelectedStep] = useState("");

//   const handleStepClick = (step) => {
//     if (step.pro && !isPro) {
//       toast.error(
//         `"${step.title}" is a Pro Feature. Redirecting to Pricing...`,
//         {
//           icon: "🔒",
//           duration: 3000,
//         },
//       );
//       // Delay redirection to let user read toast notice
//       setTimeout(() => {
//         setCurrentPage("pricing");
//       }, 1000);
//     } else {
//       if (step.page) {
//         setCurrentPage(step.page);
//       } else {
//         setSelectedStep(step.title);
//       }
//     }
//   };

//   return (
//                   className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${step.gradient} flex items-center justify-center text-2xl mb-5 shadow-lg text-white`}
//       className="min-h-screen bg-gradient-to-br from-violet-50 via-pink-50/40 to-violet-100 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900 transition-all duration-300"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.4 }}
//     >
//       {/* Local Navbar rendering is removed because App.jsx renders it globally now */}

//       <div className="max-w-7xl mx-auto">
//         {/* Header Block Section */}
//         <motion.div
//                     <span className="inline-block px-2 py-1 rounded-full bg-amber-500/80 text-white text-xs font-semibold shadow-sm">
//                       PRO
//                     </span>
//           transition={{ duration: 0.6 }}
//         >
//           <span className="inline-block px-4 py-1.5 rounded-full bg-violet-100 dark:bg-violet-900/50 text-violet-700 dark:text-violet-300 text-sm font-medium mb-4">
//                 <h3 className="text-lg font-semibold text-white mb-2 leading-tight">
//           </span>
//           <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-3">
//                 <p className="text-sm text-slate-300 leading-relaxed">
//             <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
//               Workspace
//             </span>
//           </h1>
//           <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto font-medium">
//             Supercharge your job application workflow step-by-step with AI
//             tools.
//           </p>
//         </motion.div>

//         {/* Dynamic Card Grids */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {steps.map((step, index) => {
//             const isLocked = step.pro && !isPro;

//             return (
//               <motion.div
//                 key={step.title}
//                 onClick={() => handleStepClick(step)}
//                 className={`group relative cursor-pointer overflow-hidden rounded-2xl border ${step.border} bg-gradient-to-br ${step.bg} p-6 shadow-lg transition-all duration-300 backdrop-blur-sm ${
//                   isLocked
//                     ? "hover:border-amber-500/40"
//                     : "hover:border-slate-700"
//                 }`}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.4, delay: index * 0.05 }}
//                 whileHover={{ y: -5 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 {/* Background Glow Effect on Hover */}
//                 <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-indigo-500/5 blur-2xl transition-all group-hover:scale-150" />

//                 {/* Step Counter Tag */}
//                 <div className="absolute top-4 right-4 flex h-6 w-6 items-center justify-center rounded-full bg-slate-900/80 text-xs font-bold text-slate-500 border border-slate-800/50">
//                   {index + 1}
//                 </div>

//                 {/* Main Feature Icon Wrap */}
//                 <motion.div
//                   className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r ${step.gradient} text-slate-950 mb-6 shadow-lg shadow-indigo-500/10`}
//                   whileHover={{ rotate: 5, scale: 1.05 }}
//                 >
//                   <step.icon className="w-6 h-6 text-slate-950" />
//                 </motion.div>

//                 {/* Exclusive Pro Tags Indicator */}
//                 {step.pro && (
//                   <div className="mb-3 flex items-center gap-1.5">
//                     <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 text-amber-400 text-[10px] font-bold uppercase tracking-wider shadow-sm">
//                       <Lock className="w-3 h-3" /> Pro Feature
//                     </span>
//                   </div>
//                 )}

//                 {/* Title & Description Context */}
//                 <h3 className="text-lg font-bold text-slate-100 mb-2 leading-tight group-hover:text-indigo-400 transition-colors duration-200">
//                   {step.title}
//                 </h3>
//                 <p className="text-sm text-slate-400 leading-relaxed font-medium">
//                   {step.desc}
//                 </p>

//                 {/* Action Arrow Shortcut Indicator */}
//                 <div className="absolute bottom-5 right-5 flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 border border-slate-800 text-slate-400 opacity-0 transform translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
//                   <span className="text-xs font-bold">→</span>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* Coming Soon Drawer Element */}
//         {selectedStep && (
//           <motion.div
//             className="mt-10 max-w-7xl mx-auto bg-white/5 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/6"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//           >
//             <h2 className="text-2xl font-bold mb-2 text-white">
//               {selectedStep}
//             </h2>
//             <p className="text-slate-300">
//               This feature is coming soon. Stay tuned! 🚀
//             </p>
//           </motion.div>
//         )}
//       </div>
//     </motion.div>
//   );
// }

// export default Builder;

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   FileText,
//   Search,
//   Sparkles,
//   BarChart3,
//   Mail,
//   Star,
//   Terminal,
//   ChevronLeft,
// } from "lucide-react";

// export default function Builder({ setCurrentPage, isPro }) {
//   const [selectedStep, setSelectedStep] = useState(null);

//   // Original list of steps from Screenshot 2026-06-24 171039.jpg
//   const steps = [
//     {
//       num: 1,
//       title: "Create Resume",
//       desc: "Build your resume with live preview",
//       icon: <FileText className="w-5 h-5 text-white" />,
//       gradient: "from-purple-500 to-indigo-500",
//       borderGlow: "group-hover:border-purple-500/40",
//       page: "create-resume",
//       pro: false,
//     },
//     {
//       num: 2,
//       title: "Analyze Job Description",
//       desc: "Paste JD and extract key keywords",
//       icon: <Search className="w-5 h-5 text-white" />,
//       gradient: "from-blue-500 to-cyan-500",
//       borderGlow: "group-hover:border-blue-500/40",
//       page: "jd-analysis",
//       pro: true,
//     },
//     {
//       num: 3,
//       title: "Improve Resume",
//       desc: "AI rewrites your content",
//       icon: <Sparkles className="w-5 h-5 text-white" />,
//       gradient: "from-amber-500 to-orange-500",
//       borderGlow: "group-hover:border-orange-500/40",
//       page: "improve-resume",
//       pro: true,
//     },
//     {
//       num: 4,
//       title: "Check ATS Score",
//       desc: "See how well your resume matches",
//       icon: <BarChart3 className="w-5 h-5 text-white" />,
//       gradient: "from-teal-500 to-emerald-500",
//       borderGlow: "group-hover:border-emerald-500/40",
//       page: "ats-score",
//       pro: false,
//     },
//     {
//       num: 5,
//       title: "Generate Cover Letter",
//       desc: "Create a matching cover letter",
//       icon: <Mail className="w-5 h-5 text-white" />,
//       gradient: "from-pink-500 to-fuchsia-500",
//       borderGlow: "group-hover:border-pink-500/40",
//       page: "cover-letter",
//       pro: true,
//     },
//     {
//       num: 6,
//       title: "Upgrade to Pro",
//       desc: "Unlock templates & unlimited builds",
//       icon: <Star className="w-5 h-5 text-white" />,
//       gradient: "from-yellow-400 to-amber-500",
//       borderGlow: "group-hover:border-amber-500/40",
//       page: "pricing",
//       pro: false,
//     },
//     {
//       num: 7,
//       title: "My Dashboard",
//       desc: "View and manage saved resumes",
//       icon: <Terminal className="w-5 h-5 text-white" />,
//       gradient: "from-indigo-500 to-blue-600",
//       borderGlow: "group-hover:border-indigo-500/40",
//       page: "dashboard",
//       pro: false,
//     },
//   ];

//   const handleNodeAction = (tool) => {
//     if (tool.pro && !isPro) {
//       setSelectedStep(tool.title);
//       return;
//     }
//     setCurrentPage(tool.page);
//   };

//   return (
//     <div className="w-full h-[calc(100vh-68px)] bg-[#0B111E] text-slate-100 flex flex-col relative overflow-y-auto overflow-x-hidden select-none scrollbar-thin">
//       <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
//         <div className="absolute left-[10%] top-[15%] h-[400px] w-[400px] rounded-full bg-violet-600/10 blur-[130px]" />
//         <div className="absolute right-[10%] top-[30%] h-[450px] w-[450px] rounded-full bg-fuchsia-600/5 blur-[140px]" />
//       </div>

//       <main className="relative z-10 max-w-6xl mx-auto px-6 py-10 w-full flex flex-col gap-8 shrink-0">
//         <div className="flex items-center justify-between">
//           <button
//             onClick={() => setCurrentPage("home")}
//             className="inline-flex items-center gap-1 text-xs font-bold text-slate-400 hover:text-white transition duration-200"
//           >
//             <ChevronLeft className="h-4 w-4" /> Back
//           </button>
//         </div>

//         <header className="text-center space-y-4 flex flex-col items-center">
//           <div className="inline-flex items-center gap-2 rounded-full bg-violet-500/10 px-4 py-1.5 border border-violet-500/20 shadow-sm">
//             <span className="text-violet-400 font-extrabold text-xs tracking-wider uppercase">
//               Workspace
//             </span>
//           </div>

//           <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
//             CareerForge{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
//               Workspace
//             </span>
//           </h1>
//           <p className="text-slate-400 text-xs sm:text-sm font-medium">
//             Build your career documents step by step
//           </p>
//         </header>

//         <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
//           {steps.map((tool) => (
//             <div
//               key={tool.num}
//               onClick={() => handleNodeAction(tool)}
//               className={`group relative bg-[#111827]/40 border border-slate-900 rounded-[1.75rem] p-6 cursor-pointer overflow-hidden transition-all duration-300 flex flex-col justify-between min-h-[190px] shadow-lg hover:shadow-2xl hover:scale-[1.01] ${tool.borderGlow}`}
//             >
//               <div className="space-y-4">
//                 <div className="flex items-center justify-between">
//                   <div
//                     className={`h-11 w-11 rounded-2xl bg-gradient-to-br ${tool.gradient} flex items-center justify-center shadow-md`}
//                   >
//                     {tool.icon}
//                   </div>

//                   <span className="text-slate-700 text-xs font-extrabold font-mono">
//                     {tool.num}
//                   </span>
//                 </div>

//                 <div className="space-y-1.5">
//                   <div className="flex items-center gap-2">
//                     <h3 className="text-sm sm:text-base font-extrabold text-white group-hover:text-violet-400 transition-colors">
//                       {tool.title}
//                     </h3>
//                     {tool.pro && (
//                       <span className="px-1.5 py-0.5 rounded text-[8px] bg-amber-500/15 border border-amber-500/20 text-amber-400 font-black tracking-wider uppercase">
//                         PRO
//                       </span>
//                     )}
//                   </div>
//                   <p className="text-xs text-slate-400 leading-relaxed font-medium">
//                     {tool.desc}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </section>

//         {selectedStep && (
//           <motion.div
//             className="rounded-3xl border border-amber-500/20 bg-amber-500/5 p-6 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4 mt-6"
//             initial={{ opacity: 0, y: 15 }}
//             animate={{ opacity: 1, y: 0 }}
//           >
//             <div className="space-y-1">
//               <h3 className="text-sm font-bold text-amber-400 flex items-center gap-2">
//                 ⚠️ Premium Access Restriction
//               </h3>
//               <p className="text-xs text-slate-400 font-medium">
//                 The workspace node{" "}
//                 <span className="text-slate-200 font-bold font-mono">
//                   "{selectedStep}"
//                 </span>{" "}
//                 requires a Pro upgrade activation pass to proceed.
//               </p>
//             </div>
//             <button
//               onClick={() => setCurrentPage("pricing")}
//               className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-yellow-500 to-amber-600 text-slate-950 text-xs font-black uppercase tracking-wider shadow-md hover:opacity-95 transition active:scale-95 shrink-0"
//             >
//               Unlock Terminal
//             </button>
//           </motion.div>
//         )}
//       </main>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import toast from "react-hot-toast";
// import {
//   FileText,
//   Search,
//   Sparkles,
//   BarChart3,
//   Mail,
//   Star,
//   LayoutDashboard,
//   Lock,
// } from "lucide-react";

// const steps = [
//   {
//     title: "Create Resume",
//     desc: "Build your resume with live preview",
//     icon: FileText,
//     gradient: "from-violet-500 to-fuchsia-500",
//     bg: "from-violet-500/5 to-fuchsia-500/5 dark:from-violet-900/10 dark:to-fuchsia-900/10",
//     border: "border-violet-200/60 dark:border-violet-800/40",
//     page: "resume",
//     pro: false,
//   },
//   {
//     title: "Analyze Job Description",
//     desc: "Paste JD and extract key keywords",
//     icon: Search,
//     gradient: "from-blue-500 to-cyan-500",
//     bg: "from-blue-500/5 to-cyan-500/5 dark:from-blue-900/10 dark:to-cyan-900/10",
//     border: "border-blue-200/60 dark:border-blue-800/40",
//     page: "jd-analysis",
//     pro: true,
//   },
//   {
//     title: "Improve Resume",
//     desc: "AI rewrites your content for impact",
//     icon: Sparkles,
//     gradient: "from-amber-500 to-orange-500",
//     bg: "from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20",
//     border: "border-amber-200 dark:border-amber-700/50",
//     page: "improve-resume",
//     pro: true,
//   },
//   {
//     title: "Check ATS Score",
//     desc: "See how well your resume matches",
//     icon: BarChart3,
//     gradient: "from-emerald-500 to-teal-500",
//     bg: "from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20",
//     border: "border-emerald-200 dark:border-emerald-700/50",
//     page: "ats-score",
//     pro: false,
//   },
//   {
//     title: "Generate Cover Letter",
//     desc: "Create a matching cover letter",
//     icon: Mail,
//     gradient: "from-pink-500 to-rose-500",
//     bg: "from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20",
//     border: "border-pink-200 dark:border-pink-700/50",
//     page: "cover-letter",
//     pro: true,
//   },
//   {
//     title: "Upgrade to Pro",
//     desc: "Unlock templates & unlimited builds",
//     icon: Star,
//     gradient: "from-yellow-500 to-amber-500",
//     bg: "from-yellow-500/10 to-amber-500/10 dark:from-yellow-900/20 dark:to-amber-900/20",
//     border: "border-yellow-200 dark:border-yellow-800/60",
//     page: "pricing",
//     pro: false,
//   },
//   {
//     title: "My Dashboard",
//     desc: "View and manage saved resumes",
//     icon: LayoutDashboard,
//     gradient: "from-indigo-500 to-violet-500",
//     bg: "from-indigo-500/5 to-violet-500/5 dark:from-indigo-900/10 dark:to-indigo-900/10",
//     border: "border-indigo-200/60 dark:border-indigo-800/40",
//     page: "dashboard",
//     pro: false,
//   },
// ];

// function Builder({ setCurrentPage, isPro }) {
//   const [selectedStep, setSelectedStep] = useState("");

//   const handleStepClick = (step) => {
//     if (step.pro && !isPro) {
//       toast.error(
//         `"${step.title}" is a Pro Feature. Redirecting to Pricing...`,
//         {
//           icon: "🔒",
//           duration: 3000,
//         },
//       );
//       setTimeout(() => setCurrentPage("pricing"), 1000);
//     } else {
//       if (step.page) setCurrentPage(step.page);
//       else setSelectedStep(step.title);
//     }
//   };

//   return (
//     <motion.div
//       className="min-h-screen bg-gradient-to-br from-violet-50 via-pink-50/40 to-violet-100 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900 transition-all duration-300"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.4 }}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
//         {/* Header */}
//         <motion.div
//           className="text-center mb-12"
//           initial={{ y: 30, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.6 }}
//         >
//           <span className="inline-block px-4 py-1.5 rounded-full bg-violet-100 dark:bg-violet-900/50 text-violet-700 dark:text-violet-300 text-sm font-semibold mb-4 tracking-wider uppercase">
//             Workspace
//           </span>
//           <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-3">
//             CareerForge{" "}
//             <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
//               Workspace
//             </span>
//           </h1>
//           <p className="text-slate-500 dark:text-slate-400 text-base sm:text-lg max-w-xl mx-auto">
//             Build your career documents step by step
//           </p>
//         </motion.div>

//         {/* Step Cards Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
//           {steps.map((step, index) => {
//             const isLocked = step.pro && !isPro;
//             const Icon = step.icon;

//             return (
//               <motion.div
//                 key={step.title}
//                 onClick={() => handleStepClick(step)}
//                 className={`group relative cursor-pointer overflow-hidden rounded-2xl border bg-gradient-to-br p-6 shadow-md transition-all duration-300 backdrop-blur-sm
//                   ${step.bg} ${step.border}
//                   ${isLocked ? "hover:border-amber-500/40" : "hover:border-violet-400/60 hover:shadow-lg"}`}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.4, delay: index * 0.05 }}
//                 whileHover={{ y: -4 }}
//                 whileTap={{ scale: 0.97 }}
//               >
//                 {/* Glow orb */}
//                 <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-indigo-500/5 blur-2xl transition-all group-hover:scale-150 pointer-events-none" />

//                 {/* Step number */}
//                 <div className="absolute top-4 right-4 flex h-6 w-6 items-center justify-center rounded-full bg-white/20 dark:bg-slate-900/60 text-xs font-bold text-slate-500 dark:text-slate-400 border border-slate-200/40 dark:border-slate-700/50">
//                   {index + 1}
//                 </div>

//                 {/* Icon */}
//                 <div
//                   className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${step.gradient} mb-5 shadow-md`}
//                 >
//                   <Icon className="w-5 h-5 text-white" />
//                 </div>

//                 {/* Pro badge */}
//                 {step.pro && (
//                   <div className="mb-2 flex items-center gap-1.5">
//                     <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-500/15 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-[10px] font-bold uppercase tracking-wider">
//                       <Lock className="w-2.5 h-2.5" /> PRO
//                     </span>
//                   </div>
//                 )}

//                 {/* Text */}
//                 <h3 className="text-base font-bold text-slate-800 dark:text-slate-100 mb-1.5 leading-tight group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-200">
//                   {step.title}
//                 </h3>
//                 <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
//                   {step.desc}
//                 </p>

//                 {/* Arrow indicator */}
//                 <div className="absolute bottom-4 right-4 flex h-6 w-6 items-center justify-center rounded-full bg-white/40 dark:bg-slate-900/60 border border-slate-200/40 dark:border-slate-700 text-slate-400 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
//                   <span className="text-xs font-bold">→</span>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* Selected step detail panel */}
//         {selectedStep && (
//           <motion.div
//             className="mt-10 bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/10 dark:border-white/5"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//           >
//             <h2 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">
//               {selectedStep}
//             </h2>
//             <p className="text-slate-500 dark:text-slate-300">
//               This feature is coming soon. Stay tuned! 🚀
//             </p>
//           </motion.div>
//         )}
//       </div>
//     </motion.div>
//   );
// }

// export default Builder;

import React, { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import {
  FileText,
  Search,
  Sparkles,
  BarChart3,
  Mail,
  Star,
  LayoutDashboard,
  Lock,
} from "lucide-react";

const steps = [
  {
    title: "Create Resume",
    desc: "Build your resume with live preview",
    icon: FileText,
    gradient: "from-violet-500 to-fuchsia-500",
    bg: "from-violet-500/5 to-fuchsia-500/5 dark:from-violet-900/10 dark:to-fuchsia-900/10",
    border: "border-violet-200/80 dark:border-violet-800/40",
    page: "resume",
    pro: false,
  },
  {
    title: "Analyze Job Description",
    desc: "Paste JD and extract key keywords",
    icon: Search,
    gradient: "from-blue-500 to-cyan-500",
    bg: "from-blue-500/5 to-cyan-500/5 dark:from-blue-900/10 dark:to-cyan-900/10",
    border: "border-blue-200/80 dark:border-blue-800/40",
    page: "jd-analysis",
    pro: true,
  },
  {
    title: "Improve Resume",
    desc: "AI rewrites your content for impact",
    icon: Sparkles,
    gradient: "from-amber-500 to-orange-500",
    bg: "from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20",
    border: "border-amber-200 dark:border-amber-700/50",
    page: "improve-resume",
    pro: true,
  },
  {
    title: "Check ATS Score",
    desc: "See how well your resume matches",
    icon: BarChart3,
    gradient: "from-emerald-500 to-teal-500",
    bg: "from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20",
    border: "border-emerald-200 dark:border-emerald-700/50",
    page: "ats-score",
    pro: false,
  },
  {
    title: "Generate Cover Letter",
    desc: "Create a matching cover letter",
    icon: Mail,
    gradient: "from-pink-500 to-rose-500",
    bg: "from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20",
    border: "border-pink-200 dark:border-pink-700/50",
    page: "cover-letter",
    pro: true,
  },
  {
    title: "Upgrade to Pro",
    desc: "Unlock templates & unlimited builds",
    icon: Star,
    gradient: "from-yellow-500 to-amber-500",
    bg: "from-yellow-500/10 to-amber-500/10 dark:from-yellow-900/20 dark:to-amber-900/20",
    border: "border-yellow-200 dark:border-yellow-800/60",
    page: "pricing",
    pro: false,
  },
  {
    title: "My Dashboard",
    desc: "View and manage saved resumes",
    icon: LayoutDashboard,
    gradient: "from-indigo-500 to-violet-500",
    bg: "from-indigo-500/5 to-violet-500/5 dark:from-indigo-900/10 dark:to-indigo-900/10",
    border: "border-indigo-200/80 dark:border-indigo-800/40",
    page: "dashboard",
    pro: false,
  },
];

function Builder({ setCurrentPage, isPro }) {
  const [selectedStep, setSelectedStep] = useState("");

  const handleStepClick = (step) => {
    if (step.pro && !isPro) {
      toast.error(
        `"${step.title}" is a Pro Feature. Redirecting to Pricing...`,
        {
          icon: "🔒",
          duration: 3000,
        },
      );
      setTimeout(() => setCurrentPage("pricing"), 1000);
    } else {
      if (step.page) setCurrentPage(step.page);
      else setSelectedStep(step.title);
    }
  };

  return (
    <motion.div
      /* Updated styling: removed inner overflow-y-auto to allow standard browser window scrolling without duplication issues */
      className="min-h-screen bg-gradient-to-br from-violet-50 via-pink-50/40 to-violet-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-slate-900 dark:text-slate-100 transition-all duration-300 pt-28 pb-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* Background ambient light shaders */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute left-[5%] top-1/4 h-96 w-96 rounded-full bg-violet-400/10 dark:bg-violet-600/5 blur-3xl" />
        <div className="absolute right-[5%] top-1/3 h-96 w-96 rounded-full bg-fuchsia-400/10 dark:bg-fuchsia-600/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header Block Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-100/80 dark:bg-violet-950/40 text-violet-700 dark:text-violet-300 text-xs font-extrabold mb-4 tracking-wider uppercase border border-violet-200/50 dark:border-violet-900/30">
            Workspace
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 dark:text-white mb-3 tracking-tight">
            CareerForge{" "}
            <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
              Workspace
            </span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base max-w-xl mx-auto font-medium">
            Build your career documents step by step
          </p>
        </motion.div>

        {/* Step Cards Grid Stream */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const isLocked = step.pro && !isPro;
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                onClick={() => handleStepClick(step)}
                className={`group relative cursor-pointer overflow-hidden rounded-3xl border bg-white/70 dark:bg-slate-900/30 p-6 shadow-md transition-all duration-300 backdrop-blur-md flex flex-col justify-between min-h-[210px]
                  ${step.border}
                  ${isLocked ? "hover:border-amber-500/40 hover:shadow-lg hover:shadow-amber-500/5" : "hover:border-violet-400/60 hover:shadow-xl hover:shadow-violet-500/5"}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Glow orb */}
                <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-indigo-500/5 blur-2xl transition-all group-hover:scale-150 pointer-events-none" />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    {/* Icon Container */}
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r ${step.gradient} shadow-md`}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>

                    {/* Step number at top right */}
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-950/60 text-xs font-black text-slate-500 dark:text-slate-400 border border-slate-200/50 dark:border-slate-800">
                      {index + 1}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    {/* Pro badge flag */}
                    {step.pro && (
                      <div className="flex items-center">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-[9px] font-extrabold uppercase tracking-widest">
                          <Lock className="w-2.5 h-2.5" /> PRO
                        </span>
                      </div>
                    )}

                    {/* Title & Desc */}
                    <h3 className="text-sm sm:text-base font-extrabold text-slate-950 dark:text-slate-100 leading-tight group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-200">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Arrow slide-in indicator */}
                <div className="absolute bottom-4 right-4 flex h-6 w-6 items-center justify-center rounded-full bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 text-slate-400 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  <span className="text-xs font-bold font-mono">→</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Selected step coming-soon container */}
        {selectedStep && (
          <motion.div
            className="mt-10 bg-white/70 dark:bg-slate-900/40 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-slate-200/60 dark:border-slate-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-xl font-bold mb-2 text-slate-950 dark:text-white">
              {selectedStep}
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
              This workspace module sequence is coming soon. Stay tuned! 🚀
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default Builder;
