// import React, { useState } from "react";
// import Navbar from "../components/Navbar";

// const CoverLetter = ({ setCurrentPage, setCoverLetters }) => {
//   const [jobDescription, setJobDescription] = useState("");
//   const [companyName, setCompanyName] = useState("");
//   const [position, setPosition] = useState("");
//   const [yourName, setYourName] = useState("");
//   const [generatedLetter, setGeneratedLetter] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleGenerateLetter = async () => {
//     if (!jobDescription.trim() || !companyName.trim() || !position.trim() || !yourName.trim()) {
//       alert("Please fill in all fields")
//       return
//     }
//     try {
//       setLoading(true)
//       const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`
//         },
//         body: JSON.stringify({
//           model: "llama-3.3-70b-versatile",
//           messages: [{
//             role: "user",
//             content: `Write a professional cover letter for the following:\nName: ${yourName}\nPosition: ${position}\nCompany: ${companyName}\nJob Description: ${jobDescription}\n\nWrite a compelling 3 paragraph cover letter. Return only the letter text, no subject line, no extra explanation.`
//           }],
//           max_tokens: 800
//         })
//       })
//       const data = await response.json()
//       setGeneratedLetter(data.choices[0].message.content)
//     } catch (err) {
//       alert("Generation failed. Check your VITE_GROQ_API_KEY in .env file.")
//     } finally {
//       setLoading(false)
//     }
//   };

//   const handleSaveToDashboard = () => {
//     if (!generatedLetter.trim()) {
//       alert("Please generate a cover letter first");
//       return;
//     }

//     const newLetter = {
//       id: Date.now(),
//       title: `Cover Letter - ${position} at ${companyName}`,
//       content: generatedLetter,
//       date: "Just now",
//     };

//     setCoverLetters((prev) => [newLetter, ...prev]);
//     alert("Cover Letter saved to Dashboard");
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-violet-50/80 to-pink-50/80 dark:from-gray-900 dark:to-gray-800 transition-all duration-300">
//       <Navbar onBack={() => setCurrentPage("builder")} showBack />

//       <div className="px-4 sm:px-8 py-8 max-w-6xl mx-auto">
//         <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-900 dark:text-white">
//           Generate Cover Letter
//         </h1>
//         <p className="text-gray-500 dark:text-gray-400 mb-8">
//           Create a professional cover letter tailored to your job description.
//         </p>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           {/* Input Section */}
//           <div className="lg:col-span-2 space-y-4">
//             <div className="bg-white/90 dark:bg-gray-800/90 rounded-3xl p-6 shadow-xl backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
//               <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
//                 Your Information
//               </h2>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
//                     Your Name
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="John Doe"
//                     value={yourName}
//                     onChange={(e) => setYourName(e.target.value)}
//                     className="w-full rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-3 outline-none focus:ring-2 focus:ring-violet-500"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
//                     Position Title
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="e.g., Software Engineer"
//                     value={position}
//                     onChange={(e) => setPosition(e.target.value)}
//                     className="w-full rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-3 outline-none focus:ring-2 focus:ring-violet-500"
//                   />
//                 </div>
//               </div>

//               <div className="mb-4">
//                 <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
//                   Company Name
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="e.g., Google, Microsoft"
//                   value={companyName}
//                   onChange={(e) => setCompanyName(e.target.value)}
//                   className="w-full rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-3 outline-none focus:ring-2 focus:ring-violet-500"
//                 />
//               </div>

//               <div className="mb-4">
//                 <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
//                   Job Description
//                 </label>
//                 <textarea
//                   rows="8"
//                   placeholder="Paste the job description here..."
//                   value={jobDescription}
//                   onChange={(e) => setJobDescription(e.target.value)}
//                   className="w-full rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4 outline-none focus:ring-2 focus:ring-violet-500"
//                 />
//               </div>

//               <button
//                 onClick={handleGenerateLetter}
//                 disabled={loading}
//                 className="w-full px-5 py-3 bg-violet-600 text-white rounded-xl font-bold hover:bg-violet-700 transition-all active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//               >
//                 {loading ? (
//                   <>
//                     <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
//                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
//                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
//                     </svg>
//                     Generating...
//                   </>
//                 ) : "Generate Cover Letter"}
//               </button>
//             </div>
//           </div>

//           {/* Preview Section */}
//           <div className="bg-white/90 dark:bg-gray-800/90 rounded-3xl p-6 shadow-xl backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 h-fit sticky top-24">
//             <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
//               Preview
//             </h2>

//             {generatedLetter ? (
//               <div>
//                 <div className="bg-slate-50 dark:bg-gray-700/50 rounded-2xl p-4 mb-6 max-h-96 overflow-y-auto text-sm text-gray-700 dark:text-gray-200 whitespace-pre-line leading-relaxed">
//                   {generatedLetter}
//                 </div>

//                 <button
//                   onClick={handleSaveToDashboard}
//                   className="w-full px-5 py-3 bg-white dark:bg-gray-900 text-violet-600 dark:text-violet-300 border border-violet-200 dark:border-violet-700 rounded-xl font-bold hover:bg-violet-50 dark:hover:bg-violet-900/30 transition-all active:scale-95"
//                 >
//                   Save to Dashboard
//                 </button>
//               </div>
//             ) : (
//               <p className="text-sm text-gray-500 dark:text-gray-400 text-center py-8">
//                 Fill in your information and job description, then click Generate to see your cover letter.
//               </p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CoverLetter;

// import React, { useState } from "react";
// import {
//   ChevronLeft,
//   Sparkles,
//   User,
//   Briefcase,
//   Building,
//   ScrollText,
//   Wand2,
//   Bookmark,
//   Loader2,
//   CheckCircle2,
//   FileCheck,
// } from "lucide-react";
// import toast from "react-hot-toast";

// const CoverLetter = ({ setCurrentPage, setCoverLetters }) => {
//   const [jobDescription, setJobDescription] = useState("");
//   const [companyName, setCompanyName] = useState("");
//   const [position, setPosition] = useState("");
//   const [yourName, setYourName] = useState("");
//   const [generatedLetter, setGeneratedLetter] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleGenerateLetter = async () => {
//     if (
//       !jobDescription.trim() ||
//       !companyName.trim() ||
//       !position.trim() ||
//       !yourName.trim()
//     ) {
//       toast.error("Please fill in all identity and criteria parameters.");
//       return;
//     }

//     const toastId = toast.loading("Synthesizing cover letter dynamics...");
//     setLoading(true);

//     try {
//       const response = await fetch(
//         "https://api.groq.com/openai/v1/chat/completions",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
//           },
//           body: JSON.stringify({
//             model: "llama-3.3-70b-versatile",
//             messages: [
//               {
//                 role: "user",
//                 content: `You are an elite career development assistant. Write a professional, metric-driven, and highly tailored cover letter based on the following input parameters:
// Name: ${yourName}
// Position: ${position}
// Company: ${companyName}
// Job Description Criteria: ${jobDescription}

// Structural Rules:
// 1. Deliver exactly 3-4 compelling paragraphs detailing qualification alignments.
// 2. Return ONLY the actual raw body of the letter. No subject lines, no explanations, no conversational markers, no introductory or concluding filler chat.`,
//               },
//             ],
//             max_tokens: 800,
//             temperature: 0.7,
//           }),
//         },
//       );

//       if (!response.ok) throw new Error("API handshake failed.");

//       const data = await response.json();
//       setGeneratedLetter(data.choices[0].message.content.trim());
//       toast.success("Cover letter synthesized successfully!", { id: toastId });
//     } catch (err) {
//       console.error("Cover Letter Synthesis Exception:", err);
//       toast.error("Handshake timed out. Verify your API credentials key.", {
//         id: toastId,
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSaveToDashboard = () => {
//     if (!generatedLetter.trim()) {
//       toast.error("Please generate a cover letter block first.");
//       return;
//     }

//     const newLetter = {
//       id: Date.now(),
//       title: `Cover Letter - ${position} at ${companyName}`,
//       content: generatedLetter,
//       date: "Just now",
//       type: "Cover Letter",
//     };

//     setCoverLetters((prev) => [newLetter, ...prev]);
//     toast.success("Document block appended to Dashboard history stream!", {
//       icon: "🎉",
//     });
//   };

//   const inputClass =
//     "w-full border border-slate-800 bg-slate-900/60 p-3 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 text-slate-100 placeholder-slate-600 text-sm shadow-inner";

//   const textareaClass = `${inputClass} resize-y min-h-[160px] leading-relaxed`;

//   return (
//     <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.15),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(236,72,153,0.12),_transparent_30%),#f8fafc] dark:bg-slate-950 transition-all duration-300">
//       <Navbar onBack={() => setCurrentPage("builder")} showBack />

//       <div className="px-4 sm:px-8 py-10 max-w-7xl mx-auto">
//         <div className="rounded-[2rem] border border-violet-200/60 dark:border-violet-500/30 bg-white/95 dark:bg-slate-900/95 shadow-[0_30px_80px_rgba(99,102,241,0.1)] backdrop-blur-xl p-8 mb-10">
//           <div className="md:flex md:items-center md:justify-between gap-8">
//             <div className="max-w-3xl">
//               <p className="text-sm uppercase tracking-[0.4em] font-semibold text-violet-600 dark:text-violet-300">
//                 Cover Letter Builder
//               </p>
//               <h1 className="mt-4 text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-white">
//                 Write a polished cover letter in seconds
//               </h1>
//               <p className="mt-4 text-base text-slate-600 dark:text-slate-300 leading-7">
//                 Enter your details, paste the job description, and generate a concise, tailored cover letter with a confident professional tone.
//               </p>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <div className="rounded-3xl bg-violet-600/10 dark:bg-violet-500/10 p-5 border border-violet-200/70 dark:border-violet-500/40">
//                 <p className="text-xs uppercase tracking-[0.3em] font-semibold text-violet-700 dark:text-violet-200">
//                   Fast results
//                 </p>
//                 <p className="mt-3 text-sm font-semibold text-slate-900 dark:text-white">
//                   Tailored letter with strong structure and clear tone.
//                 </p>
//               </div>
//               <div className="rounded-3xl bg-slate-100/90 dark:bg-slate-800/90 p-5 border border-slate-200/70 dark:border-slate-700/60">
//                 <p className="text-xs uppercase tracking-[0.3em] font-semibold text-slate-500 dark:text-slate-400">
//                   Save & reuse
//                 </p>
//                 <p className="mt-3 text-sm font-semibold text-slate-900 dark:text-white">
//                   Store your best letters in the dashboard with one click.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 xl:grid-cols-[1.7fr_1fr] gap-8">
//           <div className="space-y-6">
//             <div className="rounded-[2rem] bg-white/95 dark:bg-slate-900/95 border border-slate-200/70 dark:border-slate-700/70 shadow-xl p-8">
//               <div className="flex items-center justify-between gap-4 mb-8">
//                 <div>
//                   <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
//                     Your information
//                   </h2>
//                   <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
//                     Complete all fields to generate a letter that reflects your experience and the role.
//                   </p>
//                 </div>
//                 <div className="rounded-3xl bg-violet-100 dark:bg-violet-900/30 px-4 py-2 text-sm font-semibold text-violet-700 dark:text-violet-200">
//                   3 paragraph output
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                 <div>
//                   <label className="block text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">
//                     Your Name
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="John Doe"
//                     value={yourName}
//                     onChange={(e) => setYourName(e.target.value)}
//                     className="w-full rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 p-3 outline-none focus:ring-2 focus:ring-violet-500"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">
//                     Position Title
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="Software Engineer"
//                     value={position}
//                     onChange={(e) => setPosition(e.target.value)}
//                     className="w-full rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 p-3 outline-none focus:ring-2 focus:ring-violet-500"
//                   />
//                 </div>
//               </div>

//               <div className="mb-4">
//                 <label className="block text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">
//                   Company Name
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Google, Microsoft, Amazon"
//                   value={companyName}
//                   onChange={(e) => setCompanyName(e.target.value)}
//                   className="w-full rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 p-3 outline-none focus:ring-2 focus:ring-violet-500"
//                 />
//               </div>

//               <div className="mb-6">
//                 <label className="block text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">
//                   Job Description
//                 </label>
//                 <textarea
//                   rows="8"
//                   placeholder="Paste the job description here..."
//                   value={jobDescription}
//                   onChange={(e) => setJobDescription(e.target.value)}
//                   className="w-full rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 p-4 outline-none focus:ring-2 focus:ring-violet-500"
//                 />
//               </div>
//             </div>

//               <button
//                 onClick={handleGenerateLetter}
//                 disabled={loading}
//                 className="w-full inline-flex items-center justify-center gap-3 rounded-3xl bg-violet-600 text-white px-6 py-3 font-semibold shadow-lg shadow-violet-500/20 hover:bg-violet-700 transition-all active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
//               >
//                 {loading ? (
//                   <>
//                     <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
//                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
//                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
//                     </svg>
//                     Generating...
//                   </>
//                 ) : (
//                   "Generate Cover Letter"
//                 )}
//               </button>
//             </div>

//             <div>
//               <label className="block text-[11px] font-bold text-slate-400 mb-1.5 uppercase tracking-widest flex items-center gap-1">
//                 <ScrollText className="w-3 h-3 text-indigo-400" /> Target Role
//                 Requirements Matrix
//               </label>
//               <textarea
//                 rows="8"
//                 placeholder="// Dump target job criteria requirements here..."
//                 value={jobDescription}
//                 onChange={(e) => setJobDescription(e.target.value)}
//                 className={textareaClass}
//               />
//             </div>

//             <button
//               onClick={handleGenerateLetter}
//               disabled={loading}
//               className="w-full rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-3.5 text-xs font-black tracking-wider text-white uppercase shadow-md transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:opacity-95"
//             >
//               {loading ? (
//                 <>
//                   <Loader2 className="h-3.5 w-3.5 animate-spin" />
//                   Compiling Synthesis Protocols...
//                 </>
//               ) : (
//                 <>
//                   <Wand2 className="w-4 h-4" /> Synthesize Cover Letter
//                 </>
//               )}
//             </button>
//           </div>

//           <div className="space-y-6">
//             <div className="rounded-[2rem] bg-white/95 dark:bg-slate-900/95 border border-slate-200/70 dark:border-slate-700/70 shadow-xl p-8 sticky top-6">
//               <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
//                 Letter preview
//               </h2>
//               <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
//                 Your generated cover letter will appear here. Review and save it to your dashboard once ready.
//               </p>

//               {generatedLetter ? (
//                 <div>
//                   <div className="bg-slate-50 dark:bg-slate-950/80 rounded-3xl p-5 mb-6 max-h-[26rem] overflow-y-auto text-sm leading-7 text-slate-800 dark:text-slate-100 whitespace-pre-line border border-slate-200/70 dark:border-slate-700/70">
//                     {generatedLetter}
//                   </div>
//                   <button
//                     onClick={handleSaveToDashboard}
//                     className="w-full rounded-3xl border border-violet-500/70 bg-violet-50 text-violet-700 font-semibold px-5 py-3 hover:bg-violet-100 transition-all active:scale-[0.98]"
//                   >
//                     Save to Dashboard
//                   </button>
//                 </div>
//               ) : (
//                 <div className="rounded-3xl border border-dashed border-slate-200 dark:border-slate-700/70 bg-slate-50 dark:bg-slate-950/60 p-6 text-center text-sm text-slate-500 dark:text-slate-400">
//                   Fill in all fields and click "Generate Cover Letter" to preview your custom letter.
//                 </div>
//               )}
//             </div>

//             <div className="rounded-[2rem] bg-violet-600/10 dark:bg-slate-900/90 border border-violet-200/60 dark:border-violet-500/40 p-6 text-slate-900 dark:text-slate-100">
//               <h3 className="text-lg font-semibold mb-4 text-violet-700 dark:text-violet-200">
//                 Tips for a stronger letter
//               </h3>
//               <ul className="space-y-3 text-sm leading-6">
//                 <li>• Keep it concise, highlight your most relevant strengths, and tie them to the role.</li>
//                 <li>• Use the company name and position title to create a tailored introduction.</li>
//                 <li>• Emphasize results and impact, not just responsibilities.</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CoverLetter;

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import {
  Sparkles,
  User,
  Briefcase,
  Building,
  ScrollText,
  Wand2,
  Bookmark,
  Loader2,
  FileCheck,
} from "lucide-react";
import toast from "react-hot-toast";

const CoverLetter = ({ setCurrentPage, setCoverLetters }) => {
  const [jobDescription, setJobDescription] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [position, setPosition] = useState("");
  const [yourName, setYourName] = useState("");
  const [generatedLetter, setGeneratedLetter] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerateLetter = async () => {
    if (
      !jobDescription.trim() ||
      !companyName.trim() ||
      !position.trim() ||
      !yourName.trim()
    ) {
      toast.error("Please fill in all identity and criteria parameters.");
      return;
    }

    const toastId = toast.loading("Synthesizing cover letter dynamics...");
    setLoading(true);

    try {
      const response = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
          },
          body: JSON.stringify({
            model: "llama-3.3-70b-versatile",
            messages: [
              {
                role: "user",
                content: `You are an elite career development assistant. Write a professional, metric-driven, and highly tailored cover letter based on the following input parameters:
Name: ${yourName}
Position: ${position}
Company: ${companyName}
Job Description Criteria: ${jobDescription}

Structural Rules:
1. Deliver exactly 3-4 compelling paragraphs detailing qualification alignments.
2. Return ONLY the actual raw body of the letter. No subject lines, no explanations, no conversational markers, no introductory or concluding filler chat.`,
              },
            ],
            max_tokens: 800,
            temperature: 0.7,
          }),
        },
      );

      if (!response.ok) throw new Error("API handshake failed.");

      const data = await response.json();
      setGeneratedLetter(data.choices[0].message.content.trim());
      toast.success("Cover letter synthesized successfully!", { id: toastId });
    } catch (err) {
      console.error("Cover Letter Synthesis Exception:", err);
      toast.error("Handshake timed out. Verify your API credentials key.", {
        id: toastId,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSaveToDashboard = () => {
    if (!generatedLetter.trim()) {
      toast.error("Please generate a cover letter block first.");
      return;
    }

    const newLetter = {
      id: Date.now(),
      title: `Cover Letter - ${position} at ${companyName}`,
      content: generatedLetter,
      date: "Just now",
      type: "Cover Letter",
    };

    if (setCoverLetters) {
      setCoverLetters((prev) => [newLetter, ...prev]);
    }
    toast.success("Document block appended to Dashboard history stream!", {
      icon: "🎉",
    });
  };

  const inputClass =
    "w-full border border-slate-800 bg-slate-900/60 p-3 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 text-slate-100 placeholder-slate-600 text-sm shadow-inner";

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative overflow-hidden selection:bg-indigo-500/30">
      {/* Background Ambience Shaders */}
      <div className="absolute top-28 left-1/3 h-96 w-96 rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-20 h-80 w-80 rounded-full bg-pink-500/5 blur-[100px] pointer-events-none" />

      <Navbar onBack={() => setCurrentPage("builder")} showBack />

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-6">
        <div>
          <button
            onClick={() => setCurrentPage("builder")}
            className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-bold text-slate-400 border border-slate-900 bg-slate-900/40 hover:text-indigo-400 hover:border-slate-800 transition-all duration-200"
          >
            <ChevronLeft className="h-3.5 w-3.5" /> Back to Matrix
          </button>
        </div>

        {/* Header Block Section */}
        <header className="bg-slate-900/20 border border-slate-900 rounded-3xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 rounded-md bg-pink-500/10 border border-pink-500/20 px-2.5 py-0.5 text-xs font-bold text-pink-400">
              <Sparkles className="h-3.5 w-3.5" /> AI Synthesis Module
            </div>
            <h1 className="text-3xl font-black tracking-tight text-slate-100">
              Cover Letter Constructor
            </h1>
            <p className="text-xs text-slate-400 max-w-xl">
              Construct professional tailored introduction documents matching
              core keywords constraints automatically.
            </p>
          </div>
        </header>

        {/* Structural Ingestion splits */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Left Form Parameter Matrix */}
          <div className="lg:col-span-2 space-y-4 bg-slate-900/40 border border-slate-900 rounded-3xl p-6 shadow-xl">
            <div className="border-b border-slate-800/80 pb-3 mb-5">
              <h2 className="text-sm font-bold text-slate-200 flex items-center gap-2">
                <ScrollText className="w-4 h-4 text-pink-400" /> Identity
                Parameter Settings
              </h2>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Define criteria limits.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold text-slate-400 mb-1.5 uppercase tracking-widest flex items-center gap-1">
                  <User className="w-3 h-3 text-indigo-400" /> Professional
                  Identity Name
                </label>
                <input
                  type="text"
                  placeholder="e.g., John Doe"
                  value={yourName}
                  onChange={(e) => setYourName(e.target.value)}
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-400 mb-1.5 uppercase tracking-widest flex items-center gap-1">
                  <Briefcase className="w-3 h-3 text-indigo-400" /> Target
                  Designation Title
                </label>
                <input
                  type="text"
                  placeholder="e.g., Software Architect"
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                  className={inputClass}
                />
              </div>
            </div>

            <button
              onClick={handleGenerateLetter}
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-3 rounded-3xl bg-violet-600 text-white px-6 py-3 font-semibold shadow-lg shadow-violet-500/20 hover:bg-violet-700 transition-all active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                  </svg>
                  Generating...
                </>
              ) : (
                "Generate Cover Letter"
              )}
            </button>
          </div>

          {/* Right Preview Output Frame */}
          <div className="bg-slate-900/40 border border-slate-900 rounded-3xl p-6 shadow-xl sticky top-24 space-y-4">
            <div className="border-b border-slate-800/80 pb-3">
              <h2 className="text-sm font-bold text-slate-200 flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-emerald-400" /> Virtual Sheet
                Preview
              </h2>
              <p className="text-[11px] text-slate-500 mt-0.5 font-medium">
                Synthesized draft preview sheet.
              </p>
            </div>

            {generatedLetter ? (
              <div className="space-y-4">
                <div className="bg-slate-950/80 border border-slate-900 rounded-xl p-4 max-h-[380px] overflow-y-auto text-xs text-slate-300 font-medium whitespace-pre-line leading-relaxed scrollbar-thin">
                  {generatedLetter}
                </div>

                <button
                  onClick={handleSaveToDashboard}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 hover:text-indigo-400 hover:border-slate-700 px-4 py-3 text-xs font-bold transition-all active:scale-95"
                >
                  <Bookmark className="w-3.5 h-3.5 text-indigo-400" />
                  Append Document to Dashboard
                </button>
              </div>
            ) : (
              <div className="py-16 text-center border border-dashed border-slate-900 rounded-2xl bg-slate-950/20">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 border border-slate-900">
                  <ScrollText className="h-5 w-5 text-slate-600" />
                </div>
                <p className="text-xs text-slate-500 max-w-[200px] mx-auto leading-relaxed font-medium">
                  Workspace idle. Populate parameters and trigger generator
                  array to output compiling results.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default CoverLetter;
