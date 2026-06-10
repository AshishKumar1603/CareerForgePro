// import { useState } from "react";

// function ResumeForm({
//   resumeData,
//   setResumeData,
//   handleDownloadPDF,
//   handleDownloadWord,
//   mode = "create",
//   isPro,
//   setCurrentPage,
// }) {
//   const [improvingField, setImprovingField] = useState(null);
//   const [pastedResume, setPastedResume] = useState("");
//   const [extracting, setExtracting] = useState(false);
//   const [extracted, setExtracted] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setResumeData({ ...resumeData, [name]: value });
//   };

//   const handleDownloadClick = () => {
//     if (resumeData.template === "template4" && !isPro) {
//       alert("Premium template download is available only for Pro users.");
//       setCurrentPage("pricing");
//       return;
//     }

//     handleDownloadPDF();
//   };

//   const handleAIImprove = async (fieldName, fieldValue) => {
//     if (!fieldValue.trim()) {
//       alert("Please add some content first before improving.");
//       return;
//     }
//     try {
//       setImprovingField(fieldName);
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
//                 content: `Rewrite this resume ${fieldName} section to sound more professional and impactful. Keep it concise. Return only the rewritten text, no explanation:\n\n${fieldValue}`,
//               },
//             ],
//             max_tokens: 500,
//           }),
//         },
//       );
//       const data = await response.json();
//       const improved = data.choices[0].message.content;
//       setResumeData({ ...resumeData, [fieldName]: improved });
//     } catch (err) {
//       alert("AI improve failed. Check your VITE_GROQ_API_KEY in .env file.");
//     } finally {
//       setImprovingField(null);
//     }
//   };

//   const handleImproveResume = async () => {
//     if (!pastedResume.trim()) {
//       alert("Please paste your resume first");
//       return;
//     }
//     try {
//       setExtracting(true);
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
//                 content: `You are a professional resume editor. Improve this resume and extract fields. Return ONLY a JSON object with no extra text:\n{\n  "name": "",\n  "role": "",\n  "email": "",\n  "phone": "",\n  "address": "",\n  "skills": "",\n  "experience": "",\n  "projects": "",\n  "certifications": ""\n}\n\nResume: ${pastedResume}`,
//               },
//             ],
//             max_tokens: 1000,
//           }),
//         },
//       );
//       const data = await response.json();
//       const text = data.choices[0].message.content;
//       const clean = text.replace(/```json|```/g, "").trim();
//       const parsed = JSON.parse(clean);
//       setResumeData({ ...resumeData, ...parsed });
//       setExtracted(true);
//     } catch (err) {
//       alert("AI improve failed. Check your VITE_GROQ_API_KEY in .env file.");
//     } finally {
//       setExtracting(false);
//     }
//   };

//   const inputClass =
//     "w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 p-3 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-violet-500 dark:focus:ring-violet-400 transition-all duration-200 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 shadow-sm text-sm";

//   const textareaClass = `${inputClass} resize-vertical h-24`;

//   return (
//     <div className="bg-white/90 dark:bg-gray-800/90 rounded-3xl p-6 shadow-md hover:shadow-xl transition-all duration-300 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
//       <h2 className="text-xl font-bold mb-5 text-gray-900 dark:text-white">
//         Resume Details
//       </h2>

//       <div className="space-y-3">
//         {mode === "improve" && (
//           <div className="space-y-3">
//             <div className="rounded-3xl border border-violet-200/70 dark:border-violet-700/50 bg-violet-50/80 dark:bg-violet-900/20 p-5 shadow-sm">
//               <p className="text-sm text-gray-700 dark:text-gray-200 mb-3">
//                 Paste your full resume below and CareerForge AI will extract and
//                 improve all fields automatically.
//               </p>
//               <textarea
//                 rows="6"
//                 placeholder="Paste your full resume text here..."
//                 value={pastedResume}
//                 onChange={(e) => setPastedResume(e.target.value)}
//                 className={`${textareaClass} h-auto`}
//               />
//               <button
//                 type="button"
//                 onClick={handleImproveResume}
//                 disabled={extracting}
//                 className="mt-3 w-full rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white px-4 py-2.5 text-sm font-semibold hover:from-violet-700 hover:to-fuchsia-600 transition-all shadow-sm disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//               >
//                 {extracting ? (
//                   <>
//                     <svg
//                       className="animate-spin h-4 w-4"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                     >
//                       <circle
//                         className="opacity-25"
//                         cx="12"
//                         cy="12"
//                         r="10"
//                         stroke="currentColor"
//                         strokeWidth="4"
//                       />
//                       <path
//                         className="opacity-75"
//                         fill="currentColor"
//                         d="M4 12a8 8 0 018-8v8z"
//                       />
//                     </svg>
//                     Improving with AI...
//                   </>
//                 ) : extracted ? (
//                   "✅ Improved! Paste again to re-improve"
//                 ) : (
//                   "✨ AI Improve Resume"
//                 )}
//               </button>
//             </div>
//           </div>
//         )}

//         {/* Template Selector */}
//         <div>
//           <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wide">
//             Template{" "}
//             {isPro && (
//               <span className="ml-2 px-1.5 py-0.5 rounded text-xs bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 font-bold">
//                 PRO
//               </span>
//             )}
//           </label>

//           <select
//             name="template"
//             value={resumeData.template}
//             onChange={handleChange}
//             className={inputClass}
//           >
//             <option value="template1">Template 1 — Classic Header</option>
//             <option value="template2">Template 2 — Sidebar</option>
//             <option value="template3">Template 3 — Minimal Card</option>
//             <option value="template4">Premium Executive 👑</option>
//           </select>

//           {!isPro && resumeData.template === "template4" && (
//             <p className="text-xs text-yellow-700 dark:text-yellow-300 mt-2 font-semibold">
//               Premium template can be previewed, but download requires Pro.
//             </p>
//           )}
//         </div>

//         {/* Profile Photo */}
//         <div>
//           <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wide">
//             Profile Photo
//           </label>

//           <input
//             type="file"
//             accept="image/*"
//             onChange={(e) => {
//               const file = e.target.files[0];

//               if (file) {
//                 const imageURL = URL.createObjectURL(file);
//                 setResumeData({ ...resumeData, profilePic: imageURL });
//               }
//             }}
//             className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 p-2.5 rounded-xl text-gray-900 dark:text-white text-xs file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 dark:file:bg-violet-900/40 dark:file:text-violet-300 cursor-pointer"
//           />
//         </div>

//         {/* Basic Info */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//           <div>
//             <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wide">
//               Full Name *
//             </label>

//             <input
//               type="text"
//               name="name"
//               placeholder="John Doe"
//               value={resumeData.name}
//               onChange={handleChange}
//               className={inputClass}
//             />
//           </div>

//           <div>
//             <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wide">
//               Job Role
//             </label>

//             <input
//               type="text"
//               name="role"
//               placeholder="Frontend Developer"
//               value={resumeData.role}
//               onChange={handleChange}
//               className={inputClass}
//             />
//           </div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//           <div>
//             <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wide">
//               Email
//             </label>

//             <input
//               type="email"
//               name="email"
//               placeholder="john@email.com"
//               value={resumeData.email}
//               onChange={handleChange}
//               className={inputClass}
//             />
//           </div>

//           <div>
//             <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wide">
//               Phone
//             </label>

//             <input
//               type="tel"
//               name="phone"
//               placeholder="+91 98765 43210"
//               value={resumeData.phone}
//               onChange={handleChange}
//               className={inputClass}
//             />
//           </div>
//         </div>

//         <div>
//           <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wide">
//             Location
//           </label>

//           <input
//             type="text"
//             name="address"
//             placeholder="Mumbai, Maharashtra"
//             value={resumeData.address}
//             onChange={handleChange}
//             className={inputClass}
//           />
//         </div>

//         {/* Detailed sections */}
//         {[
//           {
//             name: "skills",
//             label: "Skills",
//             placeholder: "React, Node.js, Python, SQL...",
//           },
//           {
//             name: "experience",
//             label: "Experience",
//             placeholder:
//               "Company Name — Role (Year)\nDescribe your responsibilities...",
//           },
//           {
//             name: "projects",
//             label: "Projects & Achievements",
//             placeholder:
//               "Project Name — Brief description\nTech used, impact...",
//           },
//           {
//             name: "certifications",
//             label: "Education & Certifications",
//             placeholder: "B.Tech CSE — XYZ University (2022)\nAWS Certified...",
//           },
//         ].map(({ name, label, placeholder }) => (
//           <div key={name}>
//             <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wide">
//               {label}
//             </label>

//             <textarea
//               name={name}
//               placeholder={placeholder}
//               value={resumeData[name]}
//               onChange={handleChange}
//               className={textareaClass}
//             />

//             {(name === "skills" || name === "experience") && (
//               <button
//                 type="button"
//                 onClick={() => handleAIImprove(name, resumeData[name])}
//                 disabled={improvingField === name}
//                 className="mt-2 w-full rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 text-sm font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
//               >
//                 {improvingField === name
//                   ? "Improving with AI..."
//                   : `✨ AI Improve ${label}`}
//               </button>
//             )}
//           </div>
//         ))}

//         <div className="space-y-3 pt-2">
//           <button
//             type="button"
//             onClick={handleDownloadClick}
//             className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:from-violet-700 hover:to-fuchsia-600 text-white px-6 py-3.5 rounded-xl font-semibold hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 shadow-md text-sm"
//           >
//             📄{" "}
//             {resumeData.template === "template4" && !isPro
//               ? "Unlock Premium Download"
//               : mode === "improve"
//                 ? "Download Improved Resume"
//                 : "Download Resume as PDF"}
//           </button>

//           {handleDownloadWord && (
//             <button
//               type="button"
//               onClick={handleDownloadWord}
//               className="w-full border border-violet-200 dark:border-violet-700 bg-violet-50 dark:bg-violet-900/20 text-violet-700 dark:text-violet-300 px-6 py-3.5 rounded-xl font-semibold hover:bg-violet-100 dark:hover:bg-violet-900/30 transition-all duration-300 text-sm"
//             >
//               📝 Download Resume as Word
//             </button>
//           )}

//           <p className="text-xs text-gray-400 dark:text-gray-500 text-center mt-1">
//             💡 For best results, use Chrome browser for PDF download
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ResumeForm;

import { useState } from "react";
import {
  Sparkles,
  FileText,
  FileSpreadsheet,
  Sparkle,
  UploadCloud,
  User,
  Briefcase,
  Mail,
  Phone,
  MapPin,
  Wand2,
  CheckCircle2,
  Loader2,
  Crown,
} from "lucide-react";

function ResumeForm({
  resumeData,
  setResumeData,
  handleDownloadPDF,
  handleDownloadWord,
  mode = "create",
  isPro,
  setCurrentPage,
}) {
  const [improvingField, setImprovingField] = useState(null);
  const [pastedResume, setPastedResume] = useState("");
  const [extracting, setExtracting] = useState(false);
  const [extracted, setExtracted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResumeData({ ...resumeData, [name]: value });
  };

  const handleDownloadClick = () => {
    if (resumeData.template === "template4" && !isPro) {
      alert("Premium template download is available only for Pro users.");
      setCurrentPage("pricing");
      return;
    }
    handleDownloadPDF();
  };

  const handleAIImprove = async (fieldName, fieldValue) => {
    if (!fieldValue || !fieldValue.trim()) {
      alert("Please add some content first before improving.");
      return;
    }
    try {
      setImprovingField(fieldName);
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
                content: `Rewrite this resume ${fieldName} section to sound more professional, metric-driven, and impactful for ATS compliance. Keep it crisp. Return ONLY the rewritten text, without any explanations or extra quotes:\n\n${fieldValue}`,
              },
            ],
            max_tokens: 600,
          }),
        },
      );
      const data = await response.json();
      const improved = data.choices[0].message.content.trim();
      setResumeData({ ...resumeData, [fieldName]: improved });
    } catch (err) {
      alert("AI optimization failed. Please verify your VITE_GROQ_API_KEY.");
    } finally {
      setImprovingField(null);
    }
  };

  const handleImproveResume = async () => {
    if (!pastedResume.trim()) {
      alert("Please paste your raw resume data structure first.");
      return;
    }
    try {
      setExtracting(true);
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
                content: `You are an expert resume parsing engine. Extrapolate and rewrite fields efficiently into structured data. Return ONLY a pure JSON block with no markdown formatting backticks or wrapper code text:\n{\n  "name": "",\n  "role": "",\n  "email": "",\n  "phone": "",\n  "address": "",\n  "skills": "",\n  "experience": "",\n  "projects": "",\n  "certifications": ""\n}\n\nResume Context:\n${pastedResume}`,
              },
            ],
            max_tokens: 1200,
          }),
        },
      );
      const data = await response.json();
      const text = data.choices[0].message.content;
      const clean = text.replace(/```json|```/g, "").trim();
      const parsed = JSON.parse(clean);
      setResumeData({ ...resumeData, ...parsed });
      setExtracted(true);
    } catch (err) {
      alert(
        "Parser failed to parse text elements. Check api payload or env string.",
      );
    } finally {
      setExtracting(false);
    }
  };

  const inputClass =
    "w-full border border-slate-800 bg-slate-900/60 p-3 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 text-slate-100 placeholder-slate-500 text-sm shadow-inner";

  const textareaClass = `${inputClass} resize-vertical min-h-[100px] leading-relaxed`;

  const sectionsConfig = [
    {
      name: "skills",
      label: "Professional Skills",
      placeholder: "React, Node.js, Cloud Architectures, Python...",
    },
    {
      name: "experience",
      label: "Work Experience",
      placeholder:
        "Company Name — Role (Year)\n• Bullet point out core metric impact achievements...",
    },
    {
      name: "projects",
      label: "Projects & Innovations",
      placeholder:
        "Project Name — Tech Stack\n• Explain problem statements and solution architectures...",
    },
    {
      name: "certifications",
      label: "Education & Credentials",
      placeholder:
        "Degree/Certification — Institute (Timeline)\n• Relevant scholastic honors or scores...",
    },
  ];

  return (
    <div className="bg-slate-900/40 rounded-3xl p-6 backdrop-blur-md border border-slate-900 shadow-xl space-y-6">
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
        <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2">
          <FileText className="w-5 h-5 text-indigo-400" /> Resume Parameters
        </h2>
        <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-slate-400 uppercase tracking-widest">
          {mode} Mode
        </span>
      </div>

      <div className="space-y-4">
        {mode === "improve" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl border border-indigo-500/20 bg-indigo-500/5 p-5 space-y-3"
          >
            <p className="text-xs font-medium text-indigo-300 leading-relaxed flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 shrink-0" /> Copilot Text Extractor
              Terminal
            </p>
            <textarea
              rows="5"
              placeholder="Drop or paste your existing legacy resume plain text copy here..."
              value={pastedResume}
              onChange={(e) => setPastedResume(e.target.value)}
              className={`${textareaClass} bg-slate-950/80`}
            />
            <button
              type="button"
              onClick={handleImproveResume}
              disabled={extracting}
              className="w-full rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-95 text-white px-4 py-2.5 text-xs font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {extracting ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  Analyzing Structural Matrix Logs...
                </>
              ) : extracted ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Fields Optimized! Rewrite to append more
                </>
              ) : (
                <>
                  <Wand2 className="w-3.5 h-3.5" /> Inject & Auto-Fill Matrix
                </>
              )}
            </button>
          </motion.div>
        )}

        {/* Template Engine Dropdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] font-bold text-slate-400 mb-1.5 uppercase tracking-widest flex items-center justify-between">
              <span>Layout Framework</span>
              {isPro && (
                <span className="px-1.5 py-0.5 rounded text-[9px] bg-amber-500/10 border border-amber-500/20 text-amber-400 font-black flex items-center gap-0.5">
                  <Crown className="w-2.5 h-2.5" /> PRO USER
                </span>
              )}
            </label>
            <select
              name="template"
              value={resumeData.template}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="template1">Classic Left-Align Minimal</option>
              <option value="template2">Split Minimal Sidebar</option>
              <option value="template3">Modern Glass Centered Card</option>
              <option value="template4">Premium Executive Suite 👑</option>
            </select>
            {!isPro && resumeData.template === "template4" && (
              <p className="text-[11px] text-amber-400/90 mt-1.5 font-medium flex items-center gap-1">
                <span>
                  ⚡ Preview allowed, compilation download triggers Pro.
                </span>
              </p>
            )}
          </div>

          {/* Profile Picture Upload Section */}
          <div>
            <label className="block text-[11px] font-bold text-slate-400 mb-1.5 uppercase tracking-widest">
              Avatar Identity Vector
            </label>
            <div className="relative">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const imageURL = URL.createObjectURL(file);
                    setResumeData({ ...resumeData, profilePic: imageURL });
                  }
                }}
                className="w-full border border-slate-800 bg-slate-900/60 p-2 rounded-xl text-slate-400 text-xs file:mr-3 file:py-1 file:px-2.5 file:rounded-md file:border-0 file:text-[11px] file:font-bold file:bg-indigo-500/10 file:text-indigo-400 hover:file:bg-indigo-500/20 cursor-pointer focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Identity Context Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label className="text-[11px] font-bold text-slate-400 mb-1 block uppercase tracking-widest">
              Full Character Name *
            </label>
            <input
              type="text"
              name="name"
              placeholder="Alex Mercer"
              value={resumeData.name || ""}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
          <div>
            <label className="text-[11px] font-bold text-slate-400 mb-1 block uppercase tracking-widest">
              Target Designation
            </label>
            <input
              type="text"
              name="role"
              placeholder="Systems Architect"
              value={resumeData.role || ""}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label className="text-[11px] font-bold text-slate-400 mb-1 block uppercase tracking-widest">
              Secure Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="alex@workspace.io"
              value={resumeData.email || ""}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
          <div>
            <label className="text-[11px] font-bold text-slate-400 mb-1 block uppercase tracking-widest">
              Phone Axis
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="+1 (555) 019-2831"
              value={resumeData.phone || ""}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label className="text-[11px] font-bold text-slate-400 mb-1 block uppercase tracking-widest">
            Geographical Node
          </label>
          <input
            type="text"
            name="address"
            placeholder="San Francisco, CA"
            value={resumeData.address || ""}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        {/* Dynamic Structural Content Loop Blocks */}
        {sectionsConfig.map(({ name, label, placeholder }) => (
          <div key={name} className="space-y-1.5 pt-1">
            <label className="text-[11px] font-bold text-slate-400 block uppercase tracking-widest">
              {label}
            </label>
            <textarea
              name={name}
              placeholder={placeholder}
              value={resumeData[name] || ""}
              onChange={handleChange}
              className={textareaClass}
            />
            <button
              type="button"
              onClick={() => handleAIImprove(name, resumeData[name])}
              disabled={improvingField === name}
              className="w-full rounded-xl bg-slate-950 border border-slate-800 text-slate-300 hover:text-indigo-400 hover:border-slate-700 px-4 py-2 text-xs font-bold transition-all flex items-center justify-center gap-1.5 disabled:opacity-50"
            >
              {improvingField === name ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-indigo-400" />
                  Calibrating Text Synthetics...
                </>
              ) : (
                <>
                  <Sparkle className="w-3.5 h-3.5 text-indigo-400" />
                  Optimize {label} with AI
                </>
              )}
            </button>
          </div>
        ))}

        {/* Compile Triggers Actions Footer Block */}
        <div className="space-y-2.5 pt-4 border-t border-slate-800/80">
          <button
            type="button"
            onClick={handleDownloadClick}
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-3.5 rounded-xl text-xs font-black tracking-wider uppercase transition-all shadow-lg hover:opacity-95 flex items-center justify-center gap-2"
          >
            <FileText className="w-4 h-4" />
            {resumeData.template === "template4" && !isPro
              ? "Unlock Premium Download Pass"
              : mode === "improve"
                ? "Download Optimized Asset"
                : "Compile & Export PDF"}
          </button>

          {handleDownloadWord && (
            <button
              type="button"
              onClick={handleDownloadWord}
              className="w-full border border-slate-800 bg-slate-950 text-slate-300 px-5 py-3.5 rounded-xl text-xs font-bold tracking-wider uppercase hover:bg-slate-900 hover:text-slate-100 transition-all flex items-center justify-center gap-2"
            >
              <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
              Download MS Word Object Document
            </button>
          )}

          <p className="text-[10px] text-slate-500 text-center leading-relaxed">
            * Note: For flawless typography alignment bounds, use an engine
            built on Blink (Chrome/Edge/Brave).
          </p>
        </div>
      </div>
    </div>
  );
}

export default ResumeForm;
