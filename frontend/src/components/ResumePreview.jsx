// function ResumePreview({ resumeData, mode = "create" }) {
//   const {
//     template,
//     name,
//     role,
//     email,
//     phone,
//     address,
//     skills,
//     experience,
//     projects,
//     certifications,
//     profilePic,
//   } = resumeData;

//   const N = name || "Your Name";
//   const R = role || "Your Role";
//   const E = email || "your@email.com";
//   const P = phone || "+91 XXXXX XXXXX";
//   const A = address || "Your Address";
//   const SK = skills || "Add your skills";
//   const EX = experience || "Add your experience";
//   const PR = projects || "Add your projects";
//   const CE = certifications || "Add your certifications";

//   const sectionTitle =
//     "text-sm font-bold uppercase tracking-widest mb-2 pb-1 border-b-2";
//   const sectionText =
//     "text-sm text-gray-600 whitespace-pre-line leading-relaxed";

//   // ── TEMPLATE 2: Sidebar ──
//   if (template === "template2") {
//     return (
//       <div
//         id="resume-preview"
//         className="w-full max-w-full bg-white mx-auto overflow-hidden"
//       >
//         <div className="flex flex-col lg:flex-row gap-6 min-h-full max-w-full">
//           <div className="w-full lg:w-[200px] bg-gradient-to-b from-fuchsia-600 to-violet-700 text-white p-4 lg:p-6 flex flex-col gap-5">
//             {profilePic && (
//               <img
//                 src={profilePic}
//                 alt="profile"
//                 className="w-20 lg:w-24 h-20 lg:h-24 rounded-full object-cover mx-auto border-4 border-white/50 shadow-lg"
//               />
//             )}

//             <div className="text-center">
//               <h1 className="text-base lg:text-lg font-bold leading-tight">
//                 {N}
//               </h1>
//               <p className="text-xs text-fuchsia-200 mt-1">{R}</p>
//             </div>

//             <div>
//               <p className="text-xs font-bold uppercase tracking-widest text-fuchsia-200 mb-2">
//                 Contact
//               </p>
//               <p className="text-xs mb-1 break-all">{E}</p>
//               <p className="text-xs mb-1">{P}</p>
//               <p className="text-xs">{A}</p>
//             </div>

//             <div>
//               <p className="text-xs font-bold uppercase tracking-widest text-fuchsia-200 mb-2">
//                 Skills
//               </p>
//               <p className="text-xs whitespace-pre-line leading-relaxed">
//                 {SK}
//               </p>
//             </div>
//           </div>

//           <div className="flex-1 p-4 lg:p-7 space-y-5">
//             <div className="break-inside-avoid">
//               <p
//                 className={`${sectionTitle} text-violet-700 border-violet-200`}
//               >
//                 Experience
//               </p>
//               <p className={sectionText}>{EX}</p>
//             </div>

//             <div className="break-inside-avoid">
//               <p
//                 className={`${sectionTitle} text-violet-700 border-violet-200`}
//               >
//                 Projects
//               </p>
//               <p className={sectionText}>{PR}</p>
//             </div>

//             <div className="break-inside-avoid">
//               <p
//                 className={`${sectionTitle} text-violet-700 border-violet-200`}
//               >
//                 Education & Certifications
//               </p>
//               <p className={sectionText}>{CE}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // ── TEMPLATE 3: Minimal Card ──
//   if (template === "template3") {
//     return (
//       <div
//         id="resume-preview"
//         className="w-full max-w-full bg-white overflow-hidden"
//       >
//         <div className="h-2 bg-gradient-to-r from-slate-700 to-slate-500" />

//         <div className="p-4 lg:p-8">
//           <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5 mb-6 pb-5 border-b border-slate-100">
//             {profilePic && (
//               <img
//                 src={profilePic}
//                 alt="profile"
//                 className="w-16 sm:w-20 h-16 sm:h-20 rounded-full object-cover border-2 border-slate-200 shadow"
//               />
//             )}

//             <div>
//               <h1 className="text-xl sm:text-2xl font-bold text-slate-800">
//                 {N}
//               </h1>
//               <p className="text-sm text-slate-500 mt-0.5">{R}</p>

//               <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
//                 <span className="text-xs text-slate-400">{E}</span>
//                 <span className="text-xs text-slate-400">{P}</span>
//                 <span className="text-xs text-slate-400">{A}</span>
//               </div>
//             </div>
//           </div>

//           <div className="space-y-5">
//             <div>
//               <p
//                 className={`${sectionTitle} text-slate-700 border-slate-200`}
//               >
//                 Skills
//               </p>
//               <p className={sectionText}>{SK}</p>
//             </div>

//             <div className="break-inside-avoid">
//               <p
//                 className={`${sectionTitle} text-slate-700 border-slate-200`}
//               >
//                 Experience
//               </p>
//               <p className={sectionText}>{EX}</p>
//             </div>

//             <div className="break-inside-avoid">
//               <p
//                 className={`${sectionTitle} text-slate-700 border-slate-200`}
//               >
//                 Projects
//               </p>
//               <p className={sectionText}>{PR}</p>
//             </div>

//             <div className="break-inside-avoid">
//               <p
//                 className={`${sectionTitle} text-slate-700 border-slate-200`}
//               >
//                 Education & Certifications
//               </p>
//               <p className={sectionText}>{CE}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // ── TEMPLATE 4: Premium Executive ──
//   if (template === "template4") {
//     return (
//       <div
//         id="resume-preview"
//         className="w-full max-w-full bg-white mx-auto overflow-hidden text-slate-900"
//       >
//         <div className="relative bg-slate-950 text-white overflow-hidden">
//           <div className="absolute top-0 right-0 w-56 h-56 bg-violet-500/20 rounded-full blur-3xl" />
//           <div className="absolute bottom-0 left-0 w-52 h-52 bg-fuchsia-500/20 rounded-full blur-3xl" />

//           <div className="relative p-5 lg:p-8">
//             <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
//               {profilePic && (
//                 <img
//                   src={profilePic}
//                   alt="profile"
//                   className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl object-cover border-4 border-white/20 shadow-xl"
//                 />
//               )}

//               <div className="flex-1">
//                 <p className="text-xs uppercase tracking-[0.3em] text-violet-300 mb-2">
//                   Professional Resume
//                 </p>

//                 <h1 className="text-2xl lg:text-4xl font-black tracking-tight">
//                   {N}
//                 </h1>

//                 <p className="mt-2 text-sm lg:text-base text-violet-100 font-medium">
//                   {R}
//                 </p>

//                 <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-white/75">
//                   <span>{E}</span>
//                   <span>{P}</span>
//                   <span>{A}</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.4fr] gap-0">
//           <div className="bg-slate-50 p-5 lg:p-7 border-r border-slate-100">
//             <div className="mb-6">
//               <p className="text-xs font-black uppercase tracking-[0.25em] text-violet-700 mb-3">
//                 Core Skills
//               </p>

//               <div className="flex flex-wrap gap-2">
//                 {SK.split(/,|\n/)
//                   .filter(Boolean)
//                   .map((skill, index) => (
//                     <span
//                       key={index}
//                       className="rounded-full bg-white border border-violet-100 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm"
//                     >
//                       {skill.trim()}
//                     </span>
//                   ))}
//               </div>
//             </div>

//             <div>
//               <p className="text-xs font-black uppercase tracking-[0.25em] text-violet-700 mb-3">
//                 Education & Certifications
//               </p>

//               <p className="text-sm leading-relaxed text-slate-600 whitespace-pre-line">
//                 {CE}
//               </p>
//             </div>
//           </div>

//               <div className="p-5 lg:p-8 space-y-7">
//             <div className="break-inside-avoid">
//               <div className="flex items-center gap-3 mb-3">
//                 <div className="h-8 w-1.5 rounded-full bg-gradient-to-b from-violet-600 to-fuchsia-500" />
//                 <p className="text-sm font-black uppercase tracking-[0.25em] text-slate-800">
//                   Experience
//                 </p>
//               </div>

//               <p className="text-sm leading-7 text-slate-600 whitespace-pre-line">
//                 {EX}
//               </p>
//             </div>

//             <div className="break-inside-avoid">
//               <div className="flex items-center gap-3 mb-3">
//                 <div className="h-8 w-1.5 rounded-full bg-gradient-to-b from-violet-600 to-fuchsia-500" />
//                 <p className="text-sm font-black uppercase tracking-[0.25em] text-slate-800">
//                   Projects & Achievements
//                 </p>
//               </div>

//               <p className="text-sm leading-7 text-slate-600 whitespace-pre-line">
//                 {PR}
//               </p>
//             </div>

//             <div className="rounded-3xl bg-gradient-to-r from-violet-50 to-fuchsia-50 p-5 border border-violet-100">
//               <p className="text-xs font-black uppercase tracking-[0.25em] text-violet-700 mb-2">
//                 Career Summary
//               </p>

//               <p className="text-sm leading-7 text-slate-600">
//                 A focused and detail-oriented professional with skills in {R}.
//                 Experienced in building impactful projects and continuously
//                 improving technical and professional abilities.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // ── TEMPLATE 1: Classic Default ──
//   return (
//     <div
//       id="resume-preview"
//       className="w-full max-w-full bg-white overflow-hidden"
//     >
//       <div className="bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white p-4 lg:p-7">
//         <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5">
//           {profilePic && (
//             <img
//               src={profilePic}
//               alt="profile"
//               className="w-16 sm:w-20 h-16 sm:h-20 rounded-full object-cover border-3 border-white/60 shadow-md flex-shrink-0"
//             />
//           )}

//           <div>
//             <h1 className="text-xl sm:text-2xl font-bold">{N}</h1>
//             <p className="text-fuchsia-100 text-sm mt-0.5">{R}</p>

//             <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
//               <span className="text-xs text-white/80">{E}</span>
//               <span className="text-xs text-white/80">{P}</span>
//             </div>

//             <p className="text-xs text-white/70 mt-1">{A}</p>
//           </div>
//         </div>
//       </div>

//       <div className="p-4 lg:p-7 space-y-5">
//         <div>
//           <p className={`${sectionTitle} text-violet-700 border-violet-200`}>
//             Skills
//           </p>
//           <p className={sectionText}>{SK}</p>
//         </div>

//         <div>
//           <p className={`${sectionTitle} text-violet-700 border-violet-200`}>
//             Experience
//           </p>
//           <p className={sectionText}>{EX}</p>
//         </div>

//         <div>
//           <p className={`${sectionTitle} text-violet-700 border-violet-200`}>
//             Projects & Achievements
//           </p>
//           <p className={sectionText}>{PR}</p>
//         </div>

//         <div>
//           <p className={`${sectionTitle} text-violet-700 border-violet-200`}>
//             Education & Certifications
//           </p>
//           <p className={sectionText}>{CE}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ResumePreview;

// import React from "react";

// function ResumePreview({ resumeData = {}, mode = "create" }) {
//   const {
//     template,
//     name,
//     role,
//     email,
//     phone,
//     address,
//     skills,
//     experience,
//     projects,
//     certifications,
//     profilePic,
//   } = resumeData;

//   // Dynamic Telemetry Filter: Strips out trailing performance numbers, accuracy/success percentages & manual bullet flags
//   const sanitizeText = (text) => {
//     if (!text) return "";
//     return text
//       .replace(/\s*\(\d+%\s*[^)]*\)/gi, "") // Removes "(99% success rate)", "(90% optimization rate)"
//       .replace(/\s*\(\d+%\)/g, "") // Removes simple "(95%)", "(80%)"
//       .replace(/(^|\n)[•\-\*]\s*/g, "$1"); // Cleans manually typed list markers (•, -, *) to avoid double bullets
//   };

//   const N = name || "Your Name";
//   const R = role || "Your Role";
//   const E = email || "your@email.com";
//   const P = phone || "+91 XXXXX XXXXX";
//   const A = address || "Your Address";

//   // Safe sanitized parameter parsing bound to user inputs dynamically
//   const SK = sanitizeText(skills || "Add your skills");
//   const EX = sanitizeText(experience || "Add your experience");
//   const PR = sanitizeText(projects || "Add your projects");
//   const CE = sanitizeText(certifications || "Add your certifications");

//   const sectionTitle =
//     "text-sm font-bold uppercase tracking-widest mb-2 pb-1 border-b-2";
//   const sectionText =
//     "text-sm text-gray-600 whitespace-pre-line leading-relaxed";

//   // ── TEMPLATE 2: Sidebar ──
//   if (template === "template2") {
//     return (
//       <div
//         id="resume-preview"
//         className="w-full max-w-full bg-white mx-auto overflow-hidden text-slate-800"
//       >
//         <div className="flex flex-col lg:flex-row gap-6 min-h-full max-w-full">
//           <div className="w-full lg:w-[200px] bg-gradient-to-b from-fuchsia-600 to-violet-700 text-white p-4 lg:p-6 flex flex-col gap-5">
//             {profilePic && (
//               <img
//                 src={profilePic}
//                 alt="profile"
//                 className="w-20 lg:w-24 h-20 lg:h-24 rounded-full object-cover mx-auto border-4 border-white/50 shadow-lg"
//               />
//             )}

//             <div className="text-center">
//               <h1 className="text-base lg:text-lg font-bold leading-tight">
//                 {N}
//               </h1>
//               <p className="text-xs text-fuchsia-200 mt-1">{R}</p>
//             </div>

//             <div>
//               <p className="text-xs font-bold uppercase tracking-widest text-fuchsia-200 mb-2">
//                 Contact
//               </p>
//               <p className="text-xs mb-1 break-all">{E}</p>
//               <p className="text-xs mb-1">{P}</p>
//               <p className="text-xs">{A}</p>
//             </div>

//             <div>
//               <p className="text-xs font-bold uppercase tracking-widest text-fuchsia-200 mb-2">
//                 Skills
//               </p>
//               <p className="text-xs whitespace-pre-line leading-relaxed">
//                 {SK}
//               </p>
//             </div>
//           </div>

//           <div className="flex-1 p-4 lg:p-7 space-y-5">
//             <div className="break-inside-avoid">
//               <p
//                 className={`${sectionTitle} text-violet-700 border-violet-200`}
//               >
//                 Experience
//               </p>
//               <p className={sectionText}>{EX}</p>
//             </div>

//             <div className="break-inside-avoid">
//               <p
//                 className={`${sectionTitle} text-violet-700 border-violet-200`}
//               >
//                 Projects
//               </p>
//               <p className={sectionText}>{PR}</p>
//             </div>

//             <div className="break-inside-avoid">
//               <p
//                 className={`${sectionTitle} text-violet-700 border-violet-200`}
//               >
//                 Education & Certifications
//               </p>
//               <p className={sectionText}>{CE}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // ── TEMPLATE 3: Minimal Card ──
//   if (template === "template3") {
//     return (
//       <div
//         id="resume-preview"
//         className="w-full max-w-full bg-white overflow-hidden text-slate-800"
//       >
//         <div className="h-2 bg-gradient-to-r from-slate-700 to-slate-500" />

//         <div className="p-4 lg:p-8">
//           <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5 mb-6 pb-5 border-b border-slate-100">
//             {profilePic && (
//               <img
//                 src={profilePic}
//                 alt="profile"
//                 className="w-16 sm:w-20 h-16 sm:h-20 rounded-full object-cover border-2 border-slate-200 shadow"
//               />
//             )}

//             <div>
//               <h1 className="text-xl sm:text-2xl font-bold text-slate-800">
//                 {N}
//               </h1>
//               <p className="text-sm text-slate-500 mt-0.5">{R}</p>

//               <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
//                 <span className="text-xs text-slate-400">{E}</span>
//                 <span className="text-xs text-slate-400">{P}</span>
//                 <span className="text-xs text-slate-400">{A}</span>
//               </div>
//             </div>
//           </div>

//           <div className="space-y-5">
//             <div>
//               <p className={`${sectionTitle} text-slate-700 border-slate-200`}>
//                 Skills
//               </p>
//               <p className={sectionText}>{SK}</p>
//             </div>

//             <div className="break-inside-avoid">
//               <p className={`${sectionTitle} text-slate-700 border-slate-200`}>
//                 Experience
//               </p>
//               <p className={sectionText}>{EX}</p>
//             </div>

//             <div className="break-inside-avoid">
//               <p className={`${sectionTitle} text-slate-700 border-slate-200`}>
//                 Projects
//               </p>
//               <p className={sectionText}>{PR}</p>
//             </div>

//             <div className="break-inside-avoid">
//               <p className={`${sectionTitle} text-slate-700 border-slate-200`}>
//                 Education & Certifications
//               </p>
//               <p className={sectionText}>{CE}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // ── TEMPLATE 4: Premium Executive ──
//   if (template === "template4") {
//     return (
//       <div
//         id="resume-preview"
//         className="w-full max-w-full bg-white mx-auto overflow-hidden text-slate-900"
//       >
//         <div className="relative bg-slate-950 text-white overflow-hidden">
//           <div className="absolute top-0 right-0 w-56 h-56 bg-violet-500/20 rounded-full blur-3xl" />
//           <div className="absolute bottom-0 left-0 w-52 h-52 bg-fuchsia-500/20 rounded-full blur-3xl" />

//           <div className="relative p-5 lg:p-8">
//             <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
//               {profilePic && (
//                 <img
//                   src={profilePic}
//                   alt="profile"
//                   className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl object-cover border-4 border-white/20 shadow-xl"
//                 />
//               )}

//               <div className="flex-1">
//                 <p className="text-xs uppercase tracking-[0.3em] text-violet-300 mb-2">
//                   Professional Resume
//                 </p>

//                 <h1 className="text-2xl lg:text-4xl font-black tracking-tight">
//                   {N}
//                 </h1>

//                 <p className="mt-2 text-sm lg:text-base text-violet-100 font-medium">
//                   {R}
//                 </p>

//                 <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-white/75">
//                   <span>{E}</span>
//                   <span>{P}</span>
//                   <span>{A}</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.4fr] gap-0">
//           <div className="bg-slate-50 p-5 lg:p-7 border-r border-slate-100">
//             <div className="mb-6">
//               <p className="text-xs font-black uppercase tracking-[0.25em] text-violet-700 mb-3">
//                 Core Skills
//               </p>

//               <div className="flex flex-wrap gap-2">
//                 {SK.split(/,|\n/)
//                   .filter(Boolean)
//                   .map((skill, index) => (
//                     <span
//                       key={index}
//                       className="rounded-full bg-white border border-violet-100 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm"
//                     >
//                       {skill.trim()}
//                     </span>
//                   ))}
//               </div>
//             </div>

//             <div>
//               <p className="text-xs font-black uppercase tracking-[0.25em] text-violet-700 mb-3">
//                 Education & Certifications
//               </p>

//               <p className="text-sm leading-relaxed text-slate-600 whitespace-pre-line">
//                 {CE}
//               </p>
//             </div>
//           </div>

//           <div className="p-5 lg:p-8 space-y-7">
//             <div className="break-inside-avoid">
//               <div className="flex items-center gap-3 mb-3">
//                 <div className="h-8 w-1.5 rounded-full bg-gradient-to-b from-violet-600 to-fuchsia-500" />
//                 <p className="text-sm font-black uppercase tracking-[0.25em] text-slate-800">
//                   Experience
//                 </p>
//               </div>

//               <p className="text-sm leading-7 text-slate-600 whitespace-pre-line">
//                 {EX}
//               </p>
//             </div>

//             <div className="break-inside-avoid">
//               <div className="flex items-center gap-3 mb-3">
//                 <div className="h-8 w-1.5 rounded-full bg-gradient-to-b from-violet-600 to-fuchsia-500" />
//                 <p className="text-sm font-black uppercase tracking-[0.25em] text-slate-800">
//                   Projects & Achievements
//                 </p>
//               </div>

//               <p className="text-sm leading-7 text-slate-600 whitespace-pre-line">
//                 {PR}
//               </p>
//             </div>

//             <div className="rounded-3xl bg-gradient-to-r from-violet-50 to-fuchsia-50 p-5 border border-violet-100">
//               <p className="text-xs font-black uppercase tracking-[0.25em] text-violet-700 mb-2">
//                 Career Summary
//               </p>

//               <p className="text-sm leading-7 text-slate-600">
//                 A focused and detail-oriented professional with skills in {R}.
//                 Experienced in building impactful projects and continuously
//                 improving technical and professional abilities.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // ── TEMPLATE 1: Classic Default ──
//   return (
//     <div
//       id="resume-preview"
//       className="w-full max-w-full bg-white overflow-hidden text-slate-800"
//     >
//       <div className="bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white p-4 lg:p-7">
//         <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5">
//           {profilePic && (
//             <img
//               src={profilePic}
//               alt="profile"
//               className="w-16 sm:w-20 h-16 sm:h-20 rounded-full object-cover border-3 border-white/60 shadow-md flex-shrink-0"
//             />
//           )}

//           <div>
//             <h1 className="text-xl sm:text-2xl font-bold">{N}</h1>
//             <p className="text-fuchsia-100 text-sm mt-0.5">{R}</p>

//             <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
//               <span className="text-xs text-white/80">{E}</span>
//               <span className="text-xs text-white/80">{P}</span>
//             </div>

//             <p className="text-xs text-white/70 mt-1">{A}</p>
//           </div>
//         </div>
//       </div>

//       <div className="p-4 lg:p-7 space-y-5">
//         <div>
//           <p className={`${sectionTitle} text-violet-700 border-violet-200`}>
//             Skills
//           </p>
//           <p className={sectionText}>{SK}</p>
//         </div>

//         <div>
//           <p className={`${sectionTitle} text-violet-700 border-violet-200`}>
//             Experience
//           </p>
//           <p className={sectionText}>{EX}</p>
//         </div>

//         <div>
//           <p className={`${sectionTitle} text-violet-700 border-violet-200`}>
//             Projects & Achievements
//           </p>
//           <p className={sectionText}>{PR}</p>
//         </div>

//         <div>
//           <p className={`${sectionTitle} text-violet-700 border-violet-200`}>
//             Education & Certifications
//           </p>
//           <p className={sectionText}>{CE}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ResumePreview;

import React, { useState, useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  // LinkedinIcon,
  // GithubIcon,
  Printer,
  Sliders,
  Eye,
  EyeOff,
  Sparkles,
  FolderKanban,
  GraduationCap,
  Briefcase,
  Wand2,
  BookmarkCheck,
  Award,
  BookOpen,
  CheckCircle2,
} from "lucide-react";

function ResumePreview({ resumeData = {} }) {
  const componentRef = useRef();

  // Safeguard values against undefined inputs
  const name = resumeData.name || "Ashish Kumar";
  const role = resumeData.role || "Software Engineer";
  const email = resumeData.email || "akgautam1603@gmail.com";
  const phone = resumeData.phone || "+91 9026596250";
  const address = resumeData.address || "Gorakhpur, India";

  // Clean raw percentages, telemetry strings and manual bullets automatically
  const sanitizeValue = (text) => {
    if (!text) return "";
    return text
      .replace(/\s*\(\d+%\s*[^)]*\)/gi, "") // Removes "(95% success rate)", etc.
      .replace(/\s*\(\d+%\)/g, "") // Removes simple "(95%)"
      .replace(/(^|\n)[•\-\*]\s*/g, "$1"); // Cleans manual list bullets
  };

  const rawSummary = sanitizeValue(
    resumeData.summary ||
      "Full-Stack Developer with experience in MERN stack development and AI-powered applications. Skilled in RAG, LLM integration, REST APIs, MongoDB, and Docker. Strong interest in AI engineering, backend systems, and scalable software development.",
  );
  const rawEducation = sanitizeValue(
    resumeData.certifications ||
      "Rajkiya Engineering College Azamgarh  2022-2026  CGPA: 7.1\nB.Tech Information Technology\nNeena Thapa Inter College Gorakhpur UP: Intermediate  2020-2021  Percentage: 73%",
  );
  const rawExperience = sanitizeValue(
    resumeData.experience ||
      "Zaalima Development Pvt. Ltd. | Mar 2026 - May 2026 | Remote\nWeb Development Intern\n• Developed full-stack applications using React.js, Node.js, Express.js, and MongoDB.\n• Built REST APIs and contributed to AI-powered SaaS products using LLMs, RAG pipelines, and MongoDB Atlas.\n• Collaborated on scalable SaaS products using Git, Docker, and MongoDB Atlas.",
  );
  const rawProjects = sanitizeValue(
    resumeData.projects ||
      "• StudyNotion - Full Stack Ed-Tech Platform (Live link) | Nov - 2025\nDeveloped a full-stack platform enabling instructors to create courses and students to securely enroll, purchase, and review content.\n• Tech Stack: React.js, Node.js, Express.js, MongoDB, REST APIs, Tailwind CSS, JWT, Bcrypt, Cloudinary.\n• Designed REST APIs for seamless communication. Debugged API and database issues.\n• Enterprise SOP Agent (Github) | March 2026 - Present\nBuilt an AI-powered knowledge assistant for querying enterprise SOP documents using RAG.\n• Tech Stack: React.js, Node.js, Express.js, MongoDB Atlas Vector Search, OpenRouter, Gemini 1.5 Flash, RAG.\n• Implemented semantic search and Retrieval-Augmented Generation (RAG) to improve response relevance.",
  );
  const rawSkills = sanitizeValue(
    resumeData.skills ||
      "Languages: C++, JavaScript, Python, HTML, CSS\nAI and Generative AI: Retrieval-Augmented Generation (RAG), Large Language Models (LLMs), Prompt Engineering, Semantic Search, Vector Search\nBackend and APIs: Node.js, Express.js, REST API Development, API Integration\nFrontend: React.js, Tailwind CSS\nDatabases: MongoDB, MongoDB Atlas, MySQL\nTools: Git, , Postman, VS Code, Docker\nConcepts: SDLC, Backend System Design, Authentication, Database Schema Design, API Debugging\nSoft Skills: Collaboration, Public Speaking, Communication and Leadership.\nInterests: Full Stack Development, Data Structures and Algorithms.",
  );
  const rawAchievements = sanitizeValue(
    resumeData.achievements ||
      "• GeeksforGeeks & LeetCode\nSolved 100+ Data Structures and Algorithms problems. Strengthened problem-solving skills and optimized solutions using efficient approaches.",
  );
  const rawCertifications = sanitizeValue(
    resumeData.certificationsList ||
      "• Full Stack Web Development | Coursera | Dec 2025\nCompleted training in frontend and backend technologies including React, Node.js, Express.js, and MongoDB.\n• Built real-world applications featuring REST APIs, authentication, and database integration.",
  );

  // Section Configuration State for flexible toggles and custom headers
  const [sectionConfig, setSectionConfig] = useState({
    summary: { show: true, label: "Professional Summary" },
    education: { show: true, label: "Education" },
    experience: { show: true, label: "Experience" },
    projects: { show: true, label: "Personal Projects" },
    skills: { show: true, label: "Technical Skills & Interests" },
    achievements: { show: true, label: "Achievements" },
    certifications: { show: true, label: "Certifications" },
  });

  const handleToggleSection = (sectionKey) => {
    setSectionConfig((prev) => ({
      ...prev,
      [sectionKey]: { ...prev[sectionKey], show: !prev[sectionKey].show },
    }));
  };

  const handleRenameSection = (sectionKey, newLabel) => {
    setSectionConfig((prev) => ({
      ...prev,
      [sectionKey]: { ...prev[sectionKey], label: newLabel },
    }));
  };

  // Preset layouts to instantly adapt content for Technical, Non-Technical and Academic variants
  const applyPreset = (presetType) => {
    if (presetType === "non-tech") {
      setSectionConfig({
        summary: { show: true, label: "Professional Profile" },
        education: { show: true, label: "Education Background" },
        experience: { show: true, label: "Work Experience" },
        projects: { show: false, label: "Initiatives & Projects" }, // Projects hidden for non-tech functional setups
        skills: { show: true, label: "Core Competencies & Expertise" },
        achievements: { show: true, label: "Key Accomplishments" },
        certifications: { show: true, label: "Professional Credentials" },
      });
    } else if (presetType === "academic") {
      setSectionConfig({
        summary: { show: true, label: "Research Summary" },
        education: { show: true, label: "Education & Academic Record" },
        experience: { show: true, label: "Teaching & Professional Roles" },
        projects: { show: true, label: "Academic Projects & Research" },
        skills: { show: true, label: "Areas of Specialization" },
        achievements: { show: true, label: "Scholastic Honors" },
        certifications: { show: true, label: "Certifications & Training" },
      });
    } else {
      setSectionConfig({
        summary: { show: true, label: "Professional Summary" },
        education: { show: true, label: "Education" },
        experience: { show: true, label: "Experience" },
        projects: { show: true, label: "Personal Projects" },
        skills: { show: true, label: "Technical Skills and Interests" },
        achievements: { show: true, label: "Achievements" },
        certifications: { show: true, label: "Certifications" },
      });
    }
  };

  // High-performance parser to handle bold labels and clean key-value listings
  const renderListContent = (rawText) => {
    if (!rawText) return null;
    const lines = rawText
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean);
    const sectionTitle =
      "text-sm font-bold uppercase tracking-widest mb-2 pb-1 border-b-2";
    const sectionText =
      "text-sm text-slate-600 whitespace-pre-line leading-relaxed";

    return (
      <ul className="space-y-1.5 text-[11px] text-slate-700 leading-relaxed font-sans">
        {lines.map((line, idx) => {
          const colonIndex = line.indexOf(":");
          if (colonIndex > -1 && colonIndex < 40) {
            const key = line.slice(0, colonIndex).trim();
            const value = line.slice(colonIndex + 1).trim();
            return (
              <li key={idx} className="flex items-start gap-1.5">
                <span className="text-[6px] text-slate-400 mt-2 select-none shrink-0">
                  ■
                </span>
                <span className="text-slate-700">
                  <strong className="text-slate-900 font-bold">{key}:</strong>{" "}
                  {value}
                </span>
              </li>
            );
          }
          return (
            <li key={idx} className="flex items-start gap-1.5">
              <span className="text-[6px] text-indigo-500 mt-2 select-none shrink-0">
                •
              </span>
              <span className="text-slate-700">{line}</span>
            </li>
          );
        })}
      </ul>
    );
  };

  // Parser to extract Experience blocks cleanly with Duration Badges
  const renderExperienceBlocks = (rawText) => {
    if (!rawText) return null;
    const blocks = rawText
      .split(/(?=\n[A-Z0-9])/)
      .map((b) => b.trim())
      .filter(Boolean);

    return (
      <div className="space-y-3">
        {blocks.map((block, index) => {
          const lines = block
            .split("\n")
            .map((l) => l.trim())
            .filter(Boolean);
          const header = lines[0] || "";
          const subtitle = lines[1] || "";
          const bulletLines = lines.slice(2);

          const metaParts = header.split("|").map((p) => p.trim());
          const company = metaParts[0] || header;
          const duration = metaParts[1] || "";
          const location = metaParts[2] || "";

          return (
            <div key={index} className="space-y-1 break-inside-avoid">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <span className="font-extrabold text-slate-950 text-xs tracking-tight">
                  {company}
                </span>
                <div className="flex items-center gap-2 font-mono text-[9px] text-slate-500 font-semibold shrink-0">
                  {location && (
                    <span className="bg-slate-100 px-1.5 py-0.5 rounded">
                      {location}
                    </span>
                  )}
                  {duration && (
                    <span className="text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded font-bold">
                      {duration}
                    </span>
                  )}
                </div>
              </div>
              {subtitle && (
                <p className="text-[10px] font-bold text-indigo-800 italic">
                  {subtitle}
                </p>
              )}
              {bulletLines.length > 0 && (
                <div className="mt-1 pl-1">
                  {renderListContent(bulletLines.join("\n"))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  // Grid Parser for Education entries
  const renderEducationBlocks = (rawText) => {
    if (!rawText) return null;
    const lines = rawText
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean);

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {lines.map((line, idx) => {
          const parts = line.split(/\s{2,}/);
          const institution = parts[0] || line;
          const timeline = parts[1] || "";
          const score = parts[2] || "";

          return (
            <div
              key={idx}
              className="bg-slate-50/60 p-2.5 rounded-xl border border-slate-100/80 flex flex-col justify-between break-inside-avoid"
            >
              <p className="font-bold text-slate-900 text-xs tracking-tight leading-tight">
                {institution}
              </p>
              <div className="flex items-center justify-between mt-2 pt-1 border-t border-slate-100 text-[9px] font-mono text-slate-500 font-bold">
                <span>{timeline}</span>
                {score && (
                  <span className="text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded">
                    {score}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  // High-fidelity Parser for Projects as formatted in "Ashish_Resume.pdf"
  const renderProjectBlocks = (rawText) => {
    if (!rawText) return null;
    const blocks = rawText
      .split(/(?=\n•\s*[A-Z0-9]|•\s*[A-Z0-9])/)
      .map((b) => b.trim())
      .filter(Boolean);

    return (
      <div className="space-y-3.5">
        {blocks.map((block, index) => {
          const lines = block
            .split("\n")
            .map((l) => l.trim())
            .filter(Boolean);
          const header = lines[0] || "";
          const detailsLines = lines.slice(1);

          const headerParts = header.split("|").map((p) => p.trim());
          const title = headerParts[0] || header;
          const timeline = headerParts[1] || "";

          return (
            <div key={index} className="space-y-1.5 break-inside-avoid">
              <div className="flex items-baseline justify-between gap-2">
                <h4 className="font-extrabold text-slate-950 text-xs tracking-tight">
                  {title}
                </h4>
                {timeline && (
                  <span className="text-[9px] font-mono font-bold text-slate-400 shrink-0">
                    {timeline}
                  </span>
                )}
              </div>
              {detailsLines.length > 0 && (
                <div className="pl-0.5">
                  {renderListContent(detailsLines.join("\n"))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-4 space-y-6 selection:bg-indigo-500/30">
      {/* Control Deck for custom profile edits and dynamic visibility toggles */}
      <section className="bg-slate-900 border border-slate-800 rounded-3xl p-5 backdrop-blur-md shadow-2xl no-print space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-3">
          <div className="space-y-0.5">
            <h2 className="text-xs font-black text-slate-100 flex items-center gap-1.5 uppercase tracking-wider">
              <Sliders className="w-3.5 h-3.5 text-indigo-400" /> Professional
              Segment Matrix
            </h2>
            <p className="text-[10px] text-slate-400">
              Customize dynamic headers, apply functional templates or toggle
              sections for diverse target roles.
            </p>
          </div>
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition shadow-lg shadow-indigo-600/10 active:scale-95"
          >
            <Printer className="w-3.5 h-3.5" /> Compile Vector PDF
          </button>
        </div>

        {/* Dynamic Formatting Presets */}
        <div className="flex flex-wrap items-center gap-2 bg-slate-950 p-2 rounded-xl border border-slate-800/60">
          <span className="text-[9px] font-mono font-bold text-slate-500 uppercase px-1.5">
            Preset Profiles:
          </span>
          <button
            onClick={() => applyPreset("tech")}
            className="px-2.5 py-1 rounded-lg bg-indigo-600/10 border border-indigo-500/20 hover:border-indigo-500/40 text-indigo-400 text-[10px] font-bold transition"
          >
            💻 Tech Stack Core
          </button>
          <button
            onClick={() => applyPreset("non-tech")}
            className="px-2.5 py-1 rounded-lg bg-purple-600/10 border border-purple-500/20 hover:border-purple-500/40 text-purple-400 text-[10px] font-bold transition"
          >
            🎨 Non-Tech / Functional
          </button>
          <button
            onClick={() => applyPreset("academic")}
            className="px-2.5 py-1 rounded-lg bg-emerald-600/10 border border-emerald-500/20 hover:border-emerald-500/40 text-emerald-400 text-[10px] font-bold transition"
          >
            🎓 Academic Curriculum
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-1">
          {/* Section State Controls */}
          <div className="space-y-2 bg-slate-950/40 border border-slate-800/60 p-3.5 rounded-xl">
            <h3 className="text-[10px] font-bold uppercase text-slate-300 font-mono flex items-center gap-1 pb-1.5 border-b border-slate-800">
              <Eye className="w-3.5 h-3.5 text-indigo-400" /> Visibility
              Switches
            </h3>
            <div className="grid grid-cols-2 gap-1.5">
              {Object.keys(sectionConfig).map((key) => (
                <button
                  key={key}
                  onClick={() => handleToggleSection(key)}
                  className={`flex items-center justify-between p-1.5 rounded-lg text-left text-[10px] font-bold border transition ${
                    sectionConfig[key].show
                      ? "bg-indigo-500/5 border-indigo-500/20 text-indigo-300"
                      : "bg-slate-950/60 border-slate-900 text-slate-500 hover:text-slate-400"
                  }`}
                >
                  <span className="capitalize">{key}</span>
                  {sectionConfig[key].show ? (
                    <CheckCircle2 className="w-3 h-3 text-indigo-400" />
                  ) : (
                    <EyeOff className="w-3 h-3 text-slate-600" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Section Labels Rename */}
          <div className="space-y-2 bg-slate-950/40 border border-slate-800/60 p-3.5 rounded-xl">
            <h3 className="text-[10px] font-bold uppercase text-slate-300 font-mono flex items-center gap-1 pb-1.5 border-b border-slate-800">
              <Wand2 className="w-3.5 h-3.5 text-purple-400" /> Custom Headers
              Labeling
            </h3>
            <div className="space-y-1.5 max-h-[110px] overflow-y-auto pr-1 scrollbar-thin">
              {Object.keys(sectionConfig).map((key) => (
                <div key={key} className="flex items-center gap-2">
                  <span className="text-[9px] font-mono text-slate-400 w-20 shrink-0 capitalize">
                    {key}:
                  </span>
                  <input
                    type="text"
                    value={sectionConfig[key].label}
                    onChange={(e) => handleRenameSection(key, e.target.value)}
                    disabled={!sectionConfig[key].show}
                    className="flex-1 bg-slate-950 border border-slate-800 rounded-md p-1 text-[10px] text-slate-200 outline-none focus:border-purple-500 transition disabled:opacity-30 disabled:cursor-not-allowed"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Printable Sheet Area */}
      <div className="bg-slate-900/10 border border-slate-900 rounded-3xl p-2 md:p-6 flex justify-center overflow-x-auto">
        <div
          ref={componentRef}
          id="resume-preview"
          className="print-container w-[210mm] min-h-[297mm] bg-white text-slate-800 p-[15mm] shadow-2xl font-serif text-xs relative"
        >
          {/* Header Contact Block */}
          <header className="text-center border-b border-slate-200 pb-3 space-y-1">
            <h1 className="text-xl font-bold text-slate-950 tracking-wide uppercase leading-none">
              {name}
            </h1>
            <p className="text-[10px] font-bold text-indigo-700 font-mono tracking-wider">
              {role}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-x-3.5 gap-y-1 text-[10px] text-slate-600 font-mono font-medium pt-1">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-slate-400" /> {address}
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-slate-400" /> {email}
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3 text-slate-400" /> {phone}
              </span>
            </div>

            <div className="flex items-center justify-center gap-3.5 text-[9px] font-mono font-bold text-indigo-600/90 pt-0.5">
              <span className="hover:underline cursor-pointer">
                LinkedIn Profile
              </span>
              <span className="hover:underline cursor-pointer">
                GitHub Profile
              </span>
            </div>
          </header>

          {/* Section Stack */}
          <div className="mt-3.5 space-y-3.5 font-sans text-[10px]">
            {/* Summary */}
            {sectionConfig.summary.show && rawSummary && (
              <div className="space-y-1">
                <h3 className="text-[10px] font-extrabold uppercase tracking-wider text-slate-950 border-b border-slate-200 pb-0.5">
                  {sectionConfig.summary.label}
                </h3>
                <p className="text-slate-700 leading-relaxed text-[10px]">
                  {rawSummary}
                </p>
              </div>
            )}

            {/* Education */}
            {sectionConfig.education.show && rawEducation && (
              <div className="space-y-1">
                <h3 className="text-[10px] font-extrabold uppercase tracking-wider text-slate-950 border-b border-slate-200 pb-0.5">
                  {sectionConfig.education.label}
                </h3>
                {renderEducationBlocks(rawEducation)}
              </div>
            )}

            {/* Experience */}
            {sectionConfig.experience.show && rawExperience && (
              <div className="space-y-1">
                <h3 className="text-[10px] font-extrabold uppercase tracking-wider text-slate-950 border-b border-slate-200 pb-0.5">
                  {sectionConfig.experience.label}
                </h3>
                {renderExperienceBlocks(rawExperience)}
              </div>
            )}

            {/* Personal Projects */}
            {sectionConfig.projects.show && rawProjects && (
              <div className="space-y-1">
                <h3 className="text-[10px] font-extrabold uppercase tracking-wider text-slate-950 border-b border-slate-200 pb-0.5">
                  {sectionConfig.projects.label}
                </h3>
                {renderProjectBlocks(rawProjects)}
              </div>
            )}

            {/* Technical Skills */}
            {sectionConfig.skills.show && rawSkills && (
              <div className="space-y-1">
                <h3 className="text-[10px] font-extrabold uppercase tracking-wider text-slate-950 border-b border-slate-200 pb-0.5">
                  {sectionConfig.skills.label}
                </h3>
                <div className="pl-0.5">{renderListContent(rawSkills)}</div>
              </div>
            )}

            {/* Achievements */}
            {sectionConfig.achievements.show && rawAchievements && (
              <div className="space-y-1">
                <h3 className="text-[10px] font-extrabold uppercase tracking-wider text-slate-950 border-b border-slate-200 pb-0.5">
                  {sectionConfig.achievements.label}
                </h3>
                <div className="pl-0.5">
                  {renderListContent(rawAchievements)}
                </div>
              </div>
            )}

            {/* Certifications */}
            {sectionConfig.certifications.show && rawCertifications && (
              <div className="space-y-1">
                <h3 className="text-[10px] font-extrabold uppercase tracking-wider text-slate-950 border-b border-slate-200 pb-0.5">
                  {sectionConfig.certifications.label}
                </h3>
                <div className="pl-0.5">
                  {renderListContent(rawCertifications)}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media print {
          body {
            background-color: white !important;
            color: black !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          .no-print {
            display: none !important;
          }
          .print-container {
            box-shadow: none !important;
            padding: 0 !important;
            margin: 0 !important;
            border: none !important;
            width: 100% !important;
            min-height: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}

export default ResumePreview;
