// import { motion } from 'framer-motion';
// import Navbar from "../components/Navbar";

// function Home({ setCurrentPage, isPro }) {
//   return (
//     <motion.div
//       className="min-h-screen bg-gradient-to-br from-violet-50 via-pink-50 to-violet-100 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900 transition-all duration-1000"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.6 }}
//     >
// <Navbar onLogin={() => setCurrentPage("login")} />
//       {/* Hero Section */}
//       <motion.section
//         className="text-center py-20 sm:py-24 px-4 sm:px-6"
//         initial={{ y: 50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.8, delay: 0.2 }}
//       >
//         <motion.p
//           className="inline-block px-4 sm:px-5 py-2 rounded-full bg-violet-100/90 dark:bg-violet-900/50 text-violet-700 dark:text-violet-300 font-medium mb-6 shadow-lg backdrop-blur-sm"
//           whileHover={{ scale: 1.05 }}
//         >
//           AI Resume Builder {isPro && <span className="ml-2 px-2 py-0.5 rounded-full bg-yellow-400 text-yellow-900 text-xs font-bold">PRO</span>}
//         </motion.p>

//         <motion.h1
//           className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900 dark:text-white"
//           initial={{ y: 30, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//         >
//           Build ATS-Friendly <br />
//           <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent dark:from-violet-400 dark:to-fuchsia-400">
//             Resumes With AI
//           </span>
//         </motion.h1>

//         <motion.p
//           className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
//           initial={{ y: 30, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.8, delay: 0.6 }}
//         >
//           Upload your resume, paste job description, and improve your ATS score instantly
//         </motion.p>

//         <motion.button
//           onClick={() => setCurrentPage("builder")}
//           className="bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:from-violet-700 hover:to-fuchsia-600 text-white px-6 sm:px-8 py-4 rounded-2xl text-lg font-semibold shadow-xl hover:shadow-2xl active:scale-95 transition-all duration-300"
//           initial={{ scale: 0.9, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           whileHover={{ scale: 1.05, y: -3 }}
//           whileTap={{ scale: 0.98 }}
//           transition={{ duration: 0.4, type: 'spring' }}
//         >
//           Start Building Your Future
//         </motion.button>
//       </motion.section>

//       {/* Features Section */}
//       <motion.section
//         id="features"
//         className="px-4 sm:px-10 py-16 sm:py-20 bg-white/80 dark:bg-gray-800/50 backdrop-blur-md border-t border-gray-200/50 dark:border-gray-700/50"
//         initial={{ y: 50, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//       >
//         <h2 className="text-3xl sm:text-4xl font-bold text-center mb-14 text-gray-900 dark:text-white">
//           Why Choose CareerForge?
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
//           {[
//             { title: "JD Analysis", desc: "AI reads job description & extracts key keywords automatically.", icon: "🔍", action: () => setCurrentPage("jd-analysis") },
//             { title: "ATS Score", desc: "Real-time ATS compatibility score & improvement suggestions.", icon: "📊", action: () => setCurrentPage("ats-score") },
//             { title: "PDF Export", desc: "One-click professional PDF resume download.", icon: "📄", action: () => setCurrentPage("resume") }
//           ].map((feature, index) => (
//             <motion.div
//               key={feature.title}
//               onClick={feature.action}
//               className="group relative bg-white/90 dark:bg-gray-800/90 p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-2xl border border-white/50 dark:border-gray-700/50 backdrop-blur-sm cursor-pointer overflow-hidden"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               whileHover={{ y: -8, scale: 1.02 }}
//               viewport={{ once: true }}
//             >
//               <div className="absolute inset-0 bg-gradient-to-r from-violet-400/10 to-fuchsia-400/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
//               <span className="text-3xl p-3 rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-lg inline-block mb-4">
//                 {feature.icon}
//               </span>
//               <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 dark:text-white">
//                 {feature.title}
//               </h3>
//               <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
//                 {feature.desc}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </motion.section>
//             {/* Pricing Section */}
// <motion.section
//   id="pricing"
//   className="py-20 px-4 sm:px-10 bg-gradient-to-b from-white/60 to-violet-50/50 dark:from-gray-900/70 dark:to-slate-800/60"
//   initial={{ y: 50, opacity: 0 }}
//   whileInView={{ y: 0, opacity: 1 }}
//   transition={{ duration: 0.8 }}
//   viewport={{ once: true }}
// >
//   <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3 text-gray-900 dark:text-white">
//     Choose Your Plan
//   </h2>

//   <p className="text-center text-gray-500 dark:text-gray-300 mb-14 text-lg">
//     Start free and upgrade anytime
//   </p>

//   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//     {/* Free Plan */}
//     <motion.div
//       whileHover={{ scale: 1.02, y: -4 }}
//       className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-[2rem] shadow-xl border border-white/60 dark:border-gray-700/60 p-8"
//     >
//       <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
//         Free Plan
//       </h3>

//       <p className="text-5xl font-black text-slate-900 dark:text-white mb-6">
//         ₹0
//       </p>

//       <ul className="space-y-4 text-gray-600 dark:text-gray-300 text-base">
//         <li>✔ 1 Resume Build</li>
//         <li>✔ Basic ATS Score</li>
//         <li>✔ PDF Download</li>
//       </ul>
//     </motion.div>

//     {/* Pro Plan */}
//     <motion.div
//       whileHover={{ scale: 1.02, y: -4 }}
//       className="relative rounded-[2rem] p-8 shadow-2xl text-white bg-gradient-to-br from-violet-600 via-purple-500 to-fuchsia-500"
//     >
//       <span className="inline-block mb-5 rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold backdrop-blur-sm">
//         ⭐ Most Popular
//       </span>

//       <h3 className="text-2xl font-bold mb-3">
//         Pro Plan
//       </h3>

//       <p className="text-5xl font-black mb-6">
//         ₹499
//       </p>

//       <ul className="space-y-4 text-base">
//         <li>✔ Unlimited Resumes</li>
//         <li>✔ AI Rewrite</li>
//         <li>✔ Premium Templates</li>
//         <li>✔ Cover Letter Generator</li>
//       </ul>
//     </motion.div>
//   </div>
// </motion.section>

//       {/* How It Works */}
//       <motion.section
//         className="py-16 sm:py-20 px-4 sm:px-10 bg-gradient-to-b from-white/70 to-violet-50/50 dark:from-gray-900/70 dark:to-slate-800/50 border-y border-gray-200/30 dark:border-gray-700/30"
//         initial={{ y: 50, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         viewport={{ once: true }}
//       >
//         <h2 className="text-3xl sm:text-4xl font-bold text-center mb-14 text-gray-900 dark:text-white">
//           How It Works
//         </h2>

//         <div className="overflow-x-auto pb-4 -mx-4 px-4">
//           <div className="flex gap-4 sm:gap-6 min-w-max sm:min-w-0 sm:grid sm:grid-cols-4 lg:grid-cols-7 max-w-7xl mx-auto">
//             {[
//               { name: "Create Resume", page: "builder" },
//               { name: "Analyze JD", page: "jd-analysis" },
//               { name: "Improve Content", page: "improve-resume" },
//               { name: "Check ATS Score", page: "ats-score" },
//               { name: "Cover Letter", page: "cover-letter" },
//               { name: "Upgrade Pro", page: "pricing" },
//               { name: "Dashboard", page: "dashboard" }
//             ].map((step, index) => (
//               <motion.div
//                 key={typeof step === 'string' ? step : step.name}
//                 onClick={() => step.page ? setCurrentPage(step.page) : (step.action && step.action())}
//                 className="w-32 sm:w-auto p-4 sm:p-5 rounded-2xl shadow-md hover:shadow-xl border border-violet-100/50 dark:border-gray-700/50 bg-violet-50/90 dark:bg-gray-800/80 cursor-pointer group transition-all duration-300 text-center flex-shrink-0 sm:flex-shrink"
//                 initial={{ scale: 0.8, opacity: 0 }}
//                 whileInView={{ scale: 1, opacity: 1 }}
//                 whileHover={{ scale: 1.05, y: -5 }}
//                 transition={{ type: "spring", delay: index * 0.05 }}
//                 viewport={{ once: true }}
//               >
//                 <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white flex items-center justify-center font-bold text-lg shadow-lg">
//                   {index + 1}
//                 </div>
//                 <h3 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white leading-tight">
//                   {step.name || step}
//                 </h3>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.section>

//       {/* Footer (Quick Links updated to work) */}
//       <footer className="bg-gradient-to-r from-slate-950 to-slate-900 text-white pt-16 pb-8">
//         <div className="max-w-7xl mx-auto px-4 sm:px-10 grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
//           <div>
//             <h2 className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent mb-4">
//               CareerForge
//             </h2>
//             <p className="text-slate-300 leading-7 text-sm">
//               Build ATS-friendly resumes with AI powered insights and land your dream job.
//             </p>
//           </div>
//           <div>
//             <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
//             <ul className="space-y-2 text-slate-300 text-sm">
//               <li onClick={() => document.getElementById('features').scrollIntoView()} className="hover:text-violet-400 cursor-pointer transition-colors">Features</li>
//               <li onClick={() => document.getElementById('pricing').scrollIntoView()} className="hover:text-violet-400 cursor-pointer transition-colors">Pricing</li>
//               <li onClick={() => setCurrentPage("dashboard")} className="hover:text-violet-400 cursor-pointer transition-colors">Dashboard</li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="text-lg font-bold mb-4 text-white">Contact</h3>
//             <p className="text-slate-300 mb-2 text-sm">support@careerforge.ai</p>
//             <p className="text-slate-300 text-sm">Chennai, Tamil Nadu</p>
//           </div>
//         </div>
//         <div className="text-center text-slate-400 border-t border-slate-700/50 pt-6 text-sm">
//           © 2026 CareerForge. All rights reserved.
//         </div>
//       </footer>
//     </motion.div>
//   );
// }

// export default Home;

// import { motion } from "framer-motion";
// import Navbar from "../components/Navbar";

// function Home({ setCurrentPage, isPro }) {
//   return (
//     <motion.div
//       className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-indigo-500/30 overflow-x-hidden"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.6 }}
//     >
//       <Navbar onLogin={() => setCurrentPage("login")} />

//       {/* Hero Section */}
//       <motion.section
//         className="relative text-center py-24 sm:py-32 px-4 sm:px-6 max-w-5xl mx-auto z-10"
//         initial={{ y: 40, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.8, delay: 0.1 }}
//       >
//         {/* Glow Element behind Hero */}
//         <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-500/10 blur-[120px] rounded-full -z-10" />

//         <motion.p
//           className="inline-flex items-center px-4 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-indigo-400 font-medium mb-8 text-sm shadow-xl"
//           whileHover={{ scale: 1.03 }}
//         >
//           ✨ Next-Gen AI Resume Builder
//           {isPro && (
//             <span className="ml-2.5 px-2 py-0.5 rounded-md bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 text-xs font-black shadow-md">
//               PRO
//             </span>
//           )}
//         </motion.p>

//         <motion.h1
//           className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-8"
//           initial={{ y: 20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//         >
//           Build ATS-Friendly <br />
//           <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
//             Resumes With AI Insight
//           </span>
//         </motion.h1>

//         <motion.p
//           className="text-base sm:text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed"
//           initial={{ y: 20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.8, delay: 0.5 }}
//         >
//           Upload your core profile, map real-time industry job descriptions, and
//           engineer your engineering compatibility score instantly.
//         </motion.p>

//         <motion.button
//           onClick={() => setCurrentPage("builder")}
//           className="relative group bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl text-lg font-bold shadow-[0_0_30px_rgba(99,102,241,0.2)] hover:shadow-[0_0_40px_rgba(99,102,241,0.4)] transition-all duration-300"
//           initial={{ scale: 0.95, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           whileHover={{ scale: 1.02, y: -2 }}
//           whileTap={{ scale: 0.98 }}
//           transition={{ duration: 0.3 }}
//         >
//           <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//           <span className="relative z-10">Start Building Your Future</span>
//         </motion.button>
//       </motion.section>

//       {/* Features Section */}
//       <motion.section
//         id="features"
//         className="px-4 sm:px-10 py-24 border-t border-slate-900 bg-slate-950"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//       >
//         <h2 className="text-3xl sm:text-5xl font-black text-center mb-16 tracking-tight">
//           Engineered Features for Developers
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
//           {[
//             {
//               title: "JD Analysis",
//               desc: "AI reads target job descriptions & maps industry standard system keywords automatically.",
//               icon: "🔍",
//               action: () => setCurrentPage("jd-analysis"),
//             },
//             {
//               title: "ATS Optimizer",
//               desc: "Real-time parsing layout verification engine with contextual telemetry feedback.",
//               icon: "📊",
//               action: () => setCurrentPage("ats-score"),
//             },
//             {
//               title: "Vector PDF Export",
//               desc: "One-click clean compiled print-ready native vector PDF layouts.",
//               icon: "📄",
//               action: () => setCurrentPage("resume"),
//             },
//           ].map((feature, index) => (
//             <motion.div
//               key={feature.title}
//               onClick={feature.action}
//               className="dark-glass p-8 rounded-2xl cursor-pointer overflow-hidden relative group"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               whileHover={{ y: -6, borderColor: "rgba(99, 102, 241, 0.4)" }}
//               viewport={{ once: true }}
//             >
//               <div className="absolute -right-10 -top-10 w-32 h-32 bg-indigo-500/5 blur-2xl group-hover:bg-indigo-500/10 transition-all duration-500 rounded-full" />
//               <span className="text-2xl p-3.5 rounded-xl bg-slate-900 border border-slate-800 shadow-inner inline-block mb-6 group-hover:scale-110 transition-transform duration-300">
//                 {feature.icon}
//               </span>
//               <h3 className="text-xl sm:text-2xl font-bold mb-4 text-slate-100">
//                 {feature.title}
//               </h3>
//               <p className="text-slate-400 text-sm leading-relaxed">
//                 {feature.desc}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </motion.section>

//       {/* Pricing Section */}
//       <motion.section
//         id="pricing"
//         className="py-24 px-4 sm:px-10 border-t border-slate-900 bg-slate-950/40 relative"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//       >
//         <h2 className="text-3xl sm:text-5xl font-black text-center mb-4 tracking-tight">
//           Flexible Scalable Pricing
//         </h2>
//         <p className="text-center text-slate-400 mb-16 text-base max-w-md mx-auto">
//           Deploy premium capabilities as per requirement criteria tier system
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//           {/* Free Plan */}
//           <motion.div
//             whileHover={{ y: -4 }}
//             className="dark-glass rounded-2xl p-8 flex flex-col justify-between"
//           >
//             <div>
//               <h3 className="text-xl font-bold text-slate-300 mb-2">
//                 Essential Access
//               </h3>
//               <p className="text-5xl font-extrabold text-slate-100 mb-6 tracking-tight">
//                 ₹0
//               </p>
//               <ul className="space-y-4 text-slate-400 text-sm border-t border-slate-800/80 pt-6">
//                 <li className="flex items-center gap-2.5">
//                   <span className="text-emerald-500 text-xs">✔</span> 1 Active
//                   Resume Base
//                 </li>
//                 <li className="flex items-center gap-2.5">
//                   <span className="text-emerald-500 text-xs">✔</span> Standard
//                   ATS Layout Verification
//                 </li>
//                 <li className="flex items-center gap-2.5">
//                   <span className="text-emerald-500 text-xs">✔</span> Standard
//                   Vector Export
//                 </li>
//               </ul>
//             </div>
//           </motion.div>

//           {/* Pro Plan */}
//           <motion.div
//             whileHover={{ y: -4 }}
//             className="relative rounded-2xl p-8 text-white bg-gradient-to-b from-slate-900 to-slate-950 border border-indigo-500/40 shadow-[0_0_40px_rgba(99,102,241,0.15)] overflow-hidden flex flex-col justify-between"
//           >
//             <div className="absolute top-0 right-0 bg-gradient-to-l from-pink-500 to-indigo-500 text-slate-950 font-black text-[10px] tracking-widest uppercase px-4 py-1 rounded-bl-xl shadow-lg">
//               POPULAR NODE
//             </div>
//             <div>
//               <h3 className="text-xl font-bold text-indigo-400 mb-2">
//                 Pro Framework
//               </h3>
//               <p className="text-5xl font-extrabold text-slate-100 mb-6 tracking-tight">
//                 ₹499
//               </p>
//               <ul className="space-y-4 text-slate-300 text-sm border-t border-slate-800/80 pt-6">
//                 <li className="flex items-center gap-2.5">
//                   <span className="text-indigo-400 text-xs">★</span> Unlimited
//                   Concurrent Ecosystems
//                 </li>
//                 <li className="flex items-center gap-2.5">
//                   <span className="text-indigo-400 text-xs">★</span> Full AI
//                   Text Generation Integration
//                 </li>
//                 <li className="flex items-center gap-2.5">
//                   <span className="text-indigo-400 text-xs">★</span> Enterprise
//                   Template Vault
//                 </li>
//                 <li className="flex items-center gap-2.5">
//                   <span className="text-indigo-400 text-xs">★</span> Integrated
//                   Cover Letter Engine
//                 </li>
//               </ul>
//             </div>
//           </motion.div>
//         </div>
//       </motion.section>

//       {/* How It Works */}
//       <motion.section
//         className="py-24 px-4 sm:px-10 border-t border-slate-900 bg-slate-950"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//       >
//         <h2 className="text-3xl sm:text-5xl font-black text-center mb-16 tracking-tight">
//           System Execution Pipeline
//         </h2>

//         <div className="overflow-x-auto pb-6 -mx-4 px-4 scrollbar-thin">
//           <div className="flex gap-4 min-w-max max-w-7xl mx-auto lg:grid lg:grid-cols-7 lg:min-w-0">
//             {[
//               { name: "Compile Architecture", page: "builder" },
//               { name: "Parse Job Data", page: "jd-analysis" },
//               { name: "Optimize Content", page: "improve-resume" },
//               { name: "Verify Match Score", page: "ats-score" },
//               { name: "Generate Cover", page: "cover-letter" },
//               { name: "Elevate Subscription", page: "pricing" },
//               { name: "Access Panel", page: "dashboard" },
//             ].map((step, index) => (
//               <motion.div
//                 key={step.name}
//                 onClick={() => step.page && setCurrentPage(step.page)}
//                 className="w-36 lg:w-auto p-5 rounded-xl border border-slate-900 bg-slate-900/40 hover:bg-slate-900/80 cursor-pointer text-center flex-shrink-0 transition-all duration-300"
//                 initial={{ scale: 0.9, opacity: 0 }}
//                 whileInView={{ scale: 1, opacity: 1 }}
//                 whileHover={{
//                   scale: 1.03,
//                   y: -4,
//                   borderColor: "rgba(99,102,241,0.2)",
//                 }}
//                 transition={{ duration: 0.3, delay: index * 0.04 }}
//                 viewport={{ once: true }}
//               >
//                 <div className="w-10 h-10 mx-auto mb-4 rounded-lg bg-slate-950 border border-slate-800 text-indigo-400 flex items-center justify-center font-bold text-sm shadow-md">
//                   0{index + 1}
//                 </div>
//                 <h3 className="text-xs font-semibold text-slate-300 leading-tight">
//                   {step.name}
//                 </h3>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.section>

//       {/* Footer */}
//       <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 pt-20 pb-10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-10 grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
//           <div>
//             <h2 className="text-2xl font-black tracking-tight text-slate-100 mb-4">
//               CareerForge<span className="text-indigo-500">.</span>
//             </h2>
//             <p className="text-slate-400 leading-relaxed text-sm max-w-sm">
//               Next-generation pipeline layout parser generating structural
//               industry optimized standard data configurations.
//             </p>
//           </div>
//           <div>
//             <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-slate-200">
//               System Navigation
//             </h3>
//             <ul className="space-y-3 text-sm">
//               <li
//                 onClick={() =>
//                   document
//                     .getElementById("features")
//                     .scrollIntoView({ behavior: "smooth" })
//                 }
//                 className="hover:text-indigo-400 cursor-pointer transition-colors"
//               >
//                 Core Features
//               </li>
//               <li
//                 onClick={() =>
//                   document
//                     .getElementById("pricing")
//                     .scrollIntoView({ behavior: "smooth" })
//                 }
//                 className="hover:text-indigo-400 cursor-pointer transition-colors"
//               >
//                 Pricing Metrics
//               </li>
//               <li
//                 onClick={() => setCurrentPage("dashboard")}
//                 className="hover:text-indigo-400 cursor-pointer transition-colors"
//               >
//                 User Panel
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-slate-200">
//               Terminal Node
//             </h3>
//             <p className="text-slate-400 mb-2 text-sm">
//               support@careerforge.ai
//             </p>
//             <p className="text-slate-400 text-sm">Chennai, Tamil Nadu</p>
//           </div>
//         </div>
//         <div className="text-center text-slate-600 border-t border-slate-900/80 pt-8 text-xs tracking-wider">
//           © 2026 CAREERFORGE CORE DESIGNS. OPEN ENGINE RIGHTS INCLUDED.
//         </div>
//       </footer>
//     </motion.div>
//   );
// }

// export default Home;

import { motion } from "framer-motion";
﻿import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

function Home({ setCurrentPage, isPro }) {
  return (
    <motion.div
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-violet-50 via-pink-50 to-slate-100 text-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-[-10%] top-20 h-72 w-72 rounded-full bg-violet-300/30 blur-3xl" />
        <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-fuchsia-300/20 blur-3xl" />
        <div className="absolute left-1/2 top-[75%] h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />
      </div>

      <Navbar onLogin={() => setCurrentPage('login')} />

      <main className="relative z-10">
        <section className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center px-5 py-16 sm:px-10 sm:py-20 lg:px-16">
          <div className="max-w-2xl">
            <motion.div
              className="inline-flex items-center gap-2 rounded-full bg-white/90 dark:bg-slate-900/80 px-4 py-2 shadow-lg shadow-violet-500/10 border border-violet-200/70 dark:border-violet-500/30"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <span className="text-violet-600 dark:text-violet-300 font-semibold text-sm">AI Resume Builder</span>
              {isPro && (
                <span className="rounded-full bg-yellow-400/90 px-3 py-1 text-xs font-bold text-yellow-950">PRO</span>
              )}
            </motion.div>

            <motion.h1
              className="mt-8 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight sm:leading-tight text-slate-950 dark:text-white"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              Create a resume that passes ATS and gets noticed by hiring managers.
            </motion.h1>

            <motion.p
              className="mt-6 text-lg sm:text-xl leading-8 text-slate-600 dark:text-slate-300 max-w-xl"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Boost your job search with tailored resume suggestions, job description analysis, and instant PDF export in one modern experience.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <button
                onClick={() => setCurrentPage('builder')}
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-8 py-4 text-base font-semibold text-white shadow-2xl shadow-violet-500/20 transition hover:-translate-y-0.5 hover:shadow-violet-500/30"
              >
                Start building now
              </button>
              <button
                onClick={() => setCurrentPage('pricing')}
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/90 px-8 py-4 text-base font-semibold text-slate-700 shadow-lg shadow-slate-200/50 transition hover:bg-violet-50 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100 dark:shadow-slate-900/40"
              >
                Explore plans
              </button>
            </motion.div>

            <motion.div
              className="mt-10 grid gap-4 sm:grid-cols-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {[
                { label: 'Resume Builds', value: 'Fast & smart' },
                { label: 'ATS insights', value: 'Keyword matched' },
                { label: 'PDF output', value: 'Polished design' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl bg-white/90 dark:bg-slate-900/80 border border-slate-200/70 dark:border-slate-700/70 p-5 shadow-sm"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300">
                    {item.label}
                  </p>
                  <p className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">
                    {item.value}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="relative mx-auto w-full max-w-xl"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.25 }}
          >
            <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-fuchsia-400/20 blur-3xl" />
            <div className="rounded-[2.5rem] border border-white/70 bg-white/95 p-6 shadow-2xl shadow-slate-300/20 backdrop-blur-xl dark:border-slate-700/80 dark:bg-slate-900/95 dark:shadow-black/20">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300">Live preview</p>
                  <h2 className="mt-2 text-2xl font-bold text-slate-950 dark:text-white">Resume insights</h2>
                </div>
                <span className="rounded-full bg-violet-600 px-3 py-1 text-xs font-semibold text-white">New</span>
              </div>
              <div className="space-y-6">
                {[
                  { title: 'ATS Match', value: '92%', accent: 'bg-violet-500' },
                  { title: 'Readability', value: 'A+', accent: 'bg-fuchsia-500' },
                  { title: 'Keyword strength', value: 'High', accent: 'bg-cyan-500' },
                ].map((item) => (
                  <div key={item.title} className="rounded-3xl bg-slate-100 p-4 dark:bg-slate-800/80">
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-sm font-medium text-slate-600 dark:text-slate-300">{item.title}</p>
                      <span className={`rounded-full px-3 py-1 text-xs font-semibold text-white ${item.accent}`}>{item.value}</span>
                    </div>
                    <div className="mt-3 h-2 rounded-full bg-slate-200 dark:bg-slate-700">
                      <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <section
          id="features"
          className="relative px-5 py-16 sm:px-10 sm:py-20 lg:px-16"
        >
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-600">What you get</p>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-950 dark:text-white">Everything needed to land your next big role.</h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {[
                {
                  title: 'Smart resume builder',
                  description: 'Generate clean, ATS-friendly resumes with AI-guided formatting and section suggestions.',
                  icon: '🚀',
                },
                {
                  title: 'Job description parsing',
                  description: 'Extract the right keywords and tailor your resume to the exact role in seconds.',
                  icon: '🧠',
                },
                {
                  title: 'Instant PDF export',
                  description: 'Download polished resumes and cover letters that look professional on every device.',
                  icon: '📄',
                },
              ].map((feature) => (
                <motion.div
                  key={feature.title}
                  whileHover={{ y: -8 }}
                  className="group rounded-[2rem] border border-slate-200/80 bg-white/90 p-8 shadow-lg shadow-slate-200/60 transition duration-300 hover:border-violet-300 hover:bg-violet-50 dark:border-slate-700/80 dark:bg-slate-900/80 dark:hover:border-violet-500"
                >
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-violet-100 text-2xl shadow-sm dark:bg-violet-500/10">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-950 dark:text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="pricing"
          className="px-5 py-16 sm:px-10 sm:py-20 lg:px-16 bg-white/80 dark:bg-slate-950/80"
        >
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-600">Pricing</p>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-950 dark:text-white">Plans for every stage of your career.</h2>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <motion.div
                whileHover={{ y: -6 }}
                className="rounded-[2rem] border border-slate-200/80 bg-slate-50 p-8 shadow-lg shadow-slate-200/50 dark:border-slate-700/80 dark:bg-slate-900/80"
              >
                <h3 className="text-2xl font-bold text-slate-950 dark:text-white mb-4">Free</h3>
                <p className="text-5xl font-extrabold text-violet-600 dark:text-violet-400">₹0</p>
                <p className="mt-4 text-slate-600 dark:text-slate-300">Perfect to get started with one polished resume and basic ATS checks.</p>
                <ul className="mt-8 space-y-4 text-slate-600 dark:text-slate-300">
                  <li>✔ One resume build</li>
                  <li>✔ ATS score overview</li>
                  <li>✔ PDF export</li>
                </ul>
              </motion.div>

              <motion.div
                whileHover={{ y: -6 }}
                className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-violet-600 via-fuchsia-500 to-pink-500 p-8 text-white shadow-2xl shadow-violet-500/30"
              >
                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-white/10 blur-3xl" />
                <h3 className="text-2xl font-bold mb-4">Pro</h3>
                <p className="text-5xl font-extrabold mb-4">₹499</p>
                <p className="text-slate-100/90">Unlimited resume builds, advanced AI rewriting, premium templates, and cover letter assistance.</p>
                <ul className="mt-8 space-y-4 text-slate-100">
                  <li>✔ Unlimited resumes</li>
                  <li>✔ AI rewrite engine</li>
                  <li>✔ Premium templates</li>
                  <li>✔ Cover letter generator</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-10 sm:py-20 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-600">How it works</p>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-950 dark:text-white">The perfect workflow for your job application.</h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { step: 'Paste job description' },
                { step: 'Analyze required keywords' },
                { step: 'Optimize your resume' },
                { step: 'Download polished PDF' },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  whileHover={{ y: -8 }}
                  className="rounded-[2rem] border border-slate-200/80 bg-white/90 p-8 shadow-lg shadow-slate-200/50 dark:border-slate-700/80 dark:bg-slate-900/80"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-violet-500 text-white font-bold text-lg">
                    {index + 1}
                  </div>
                  <p className="text-lg font-semibold text-slate-950 dark:text-white">{item.step}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200/70 bg-white/90 dark:border-slate-800/70 dark:bg-slate-950/95">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-12 sm:px-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <h2 className="text-2xl font-bold text-slate-950 dark:text-white">CareerForge</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
              Smart resume building, ATS optimization, and cover letter support in one beautiful platform.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">Links</h3>
              <ul className="mt-5 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                <li className="cursor-pointer hover:text-violet-600" onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}>Features</li>
                <li className="cursor-pointer hover:text-violet-600" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>Pricing</li>
                <li className="cursor-pointer hover:text-violet-600" onClick={() => setCurrentPage('dashboard')}>Dashboard</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">Contact</h3>
              <p className="mt-5 text-sm text-slate-600 dark:text-slate-300">support@careerforge.ai</p>
              <p className="text-sm text-slate-600 dark:text-slate-300">Chennai, Tamil Nadu</p>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-200/70 py-6 text-center text-sm text-slate-500 dark:text-slate-400">
          © 2026 CareerForge. All rights reserved.
        </div>
      </footer>
    </motion.div>
  );
}

export default Home;
