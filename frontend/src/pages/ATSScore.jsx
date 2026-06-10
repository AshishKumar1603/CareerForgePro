// import React, { useState } from "react";
// import Navbar from "../components/Navbar";
// import {
//   Upload,
//   FileText,
//   Sparkles,
//   BarChart3,
//   FileSearch,
//   CheckCircle2,
//   AlertCircle,
//   Loader2,
//   Target,
//   ChevronLeft,
// } from "lucide-react";
// const ATSScore = ({ setCurrentPage, setAtsScores }) => {
//   const [resume, setResume] = useState("");
//   const [jobDescription, setJobDescription] = useState("");
//   const [resumeFile, setResumeFile] = useState(null);
//   const [jobFile, setJobFile] = useState(null);
//   const [extracting, setExtracting] = useState(false);
//   const [score, setScore] = useState(0);
//   const [matchedKeywords, setMatchedKeywords] = useState([]);
//   const [missingKeywords, setMissingKeywords] = useState([]);
//   const [analysis, setAnalysis] = useState("");
//   const [calculating, setCalculating] = useState(false);
//   const [improvement, setImprovement] = useState("");

//   const extractTextFromPDF = async (file) => {
//     try {
//       const pdfjsLib = await import("pdfjs-dist");
//       pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
//         "pdfjs-dist/build/pdf.worker.min.mjs",
//         import.meta.url,
//       ).toString();
//       const arrayBuffer = await file.arrayBuffer();
//       const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
//       let fullText = "";
//       for (let i = 1; i <= pdf.numPages; i++) {
//         const page = await pdf.getPage(i);
//         const textContent = await page.getTextContent();
//         const pageText = textContent.items.map((item) => item.str).join(" ");
//         fullText += pageText + "\n";
//       }
//       return fullText.trim();
//     } catch (err) {
//       const data = await file.arrayBuffer();
//       const uint8array = new Uint8Array(data);
//       let str = "";
//       for (let i = 0; i < uint8array.length; i++) {
//         str += String.fromCharCode(uint8array[i]);
//       }
//       const matches = str.match(/BT[\s\S]*?ET/g) || [];
//       let extractedText = "";
//       matches.forEach((block) => {
//         const parts = block.match(/\(([^)]+)\)/g) || [];
//         parts.forEach((part) => {
//           extractedText += part.slice(1, -1) + " ";
//         });
//       });
//       return extractedText.trim().length > 0
//         ? extractedText
//         : str.replace(/[^a-zA-Z0-9\s.,@:/+-]/g, " ").trim();
//     }
//   };

//   const extractText = async (file) => {
//     if (!file) return "";
//     if (file.type === "text/plain") return await file.text();
//     if (file.type === "application/pdf") return await extractTextFromPDF(file);
//     if (file.type.startsWith("image/")) {
//       try {
//         setExtracting(true);
//         const base64 = await new Promise((resolve) => {
//           const reader = new FileReader();
//           reader.onload = () => resolve(reader.result.split(",")[1]);
//           reader.readAsDataURL(file);
//         });
//         const response = await fetch(
//           "https://api.groq.com/openai/v1/chat/completions",
//           {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
//             },
//             body: JSON.stringify({
//               model: "llama-3.2-11b-vision-preview",
//               messages: [
//                 {
//                   role: "user",
//                   content: [
//                     {
//                       type: "image_url",
//                       image_url: { url: `data:${file.type};base64,${base64}` },
//                     },
//                     {
//                       type: "text",
//                       text: "Extract all text from this resume image exactly as written. Return only the extracted text, nothing else.",
//                     },
//                   ],
//                 },
//               ],
//               max_tokens: 1000,
//             }),
//           },
//         );
//         const data = await response.json();
//         return data.choices[0].message.content;
//       } catch (err) {
//         alert(
//           "Image extraction failed. Please paste your resume text manually.",
//         );
//         return "";
//       } finally {
//         setExtracting(false);
//       }
//     }
//     return "";
//   };

//   // const calculateATSScore = async () => {
//   //   setCalculating(true);

//   //   if (!resume.trim() || !jobDescription.trim()) {
//   //     alert("Please enter both resume and job description.");
//   //     setCalculating(false);
//   //     return;
//   //   }

//   //   const stopWords = [
//   //     "the",
//   //     "and",
//   //     "for",
//   //     "with",
//   //     "you",
//   //     "your",
//   //     "are",
//   //     "this",
//   //     "that",
//   //     "from",
//   //     "have",
//   //     "will",
//   //     "our",
//   //     "can",
//   //     "job",
//   //     "role",
//   //     "work",
//   //     "team",
//   //     "candidate",
//   //     "experience",
//   //   ];

//   //   const resumeWords = resume
//   //     .toLowerCase()
//   //     .replace(/[^a-zA-Z0-9\s]/g, " ")
//   //     .split(/\s+/)
//   //     .filter((word) => word.length > 3 && !stopWords.includes(word));

//   //   const jobWords = jobDescription
//   //     .toLowerCase()
//   //     .replace(/[^a-zA-Z0-9\s]/g, " ")
//   //     .split(/\s+/)
//   //     .filter((word) => word.length > 2 && !stopWords.includes(word));

//   //   const uniqueResumeWords = [...new Set(resumeWords)];
//   //   const uniqueJobWords = [...new Set(jobWords)];

//   //   const matched = uniqueJobWords.filter((word) =>
//   //     uniqueResumeWords.includes(word),
//   //   );

//   //   const missing = uniqueJobWords
//   //     .filter((word) => !uniqueResumeWords.includes(word))
//   //     .slice(0, 15);

//   //   const finalScore =
//   //     uniqueJobWords.length > 0
//   //       ? Math.round((matched.length / uniqueJobWords.length) * 100)
//   //       : 0;

//   //   setScore(finalScore);
//   //   setMatchedKeywords(matched.slice(0, 15));
//   //   setMissingKeywords(missing);

//   //   if (finalScore >= 75) {
//   //     setAnalysis(
//   //       "Excellent match! Your resume contains many important keywords from the job description.",
//   //     );
//   //   } else if (finalScore >= 50) {
//   //     setAnalysis(
//   //       "Good match, but you can improve your resume by adding more missing job-related keywords.",
//   //     );
//   //   } else {
//   //     setAnalysis(
//   //       "Your resume needs improvement. Add more relevant skills, tools, and keywords from the job description.",
//   //     );
//   //   }

//   //   if (finalScore < 50) {
//   //     setImprovement(
//   //       `Your resume is missing many key terms. Add these missing keywords naturally into your experience and skills sections: ${missing.slice(0, 5).join(", ")}`,
//   //     );
//   //   } else if (finalScore < 75) {
//   //     setImprovement(
//   //       `Good match! Strengthen your resume by adding these keywords: ${missing.slice(0, 3).join(", ")}`,
//   //     );
//   //   } else {
//   //     setImprovement(
//   //       "Excellent match! Your resume is well optimized for this job.",
//   //     );
//   //   }

//   //   if (setAtsScores) {
//   //     setAtsScores((prev) => [
//   //       ...prev,
//   //       {
//   //         score: finalScore,
//   //         date: new Date().toLocaleDateString(),
//   //       },
//   //     ]);
//   //   }

//   //   setCalculating(false);
//   // };

//   const calculateATSScore = async () => {
//     setCalculating(true);

//     try {
//       if (!resume.trim() || !jobDescription.trim()) {
//         alert("Please enter both resume and job description.");
//         setCalculating(false);
//         return;
//       }

//       const response = await fetch("http://localhost:5001/api/ats/analyze", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           resume,
//           jobDescription,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error("Backend request failed");
//       }

//       const data = await response.json();

//       console.log("ATS Response:", data);

//       setScore(Number(data.score) || 0);

//       setMatchedKeywords(
//         Array.isArray(data.matchedSkills) ? data.matchedSkills : [],
//       );

//       setMissingKeywords(
//         Array.isArray(data.missingSkills) ? data.missingSkills : [],
//       );

//       setAnalysis(data.suggestions || "AI analysis completed successfully.");

//       if ((data.score || 0) >= 75) {
//         setImprovement(
//           "Excellent match! Your resume is well optimized for this role.",
//         );
//       } else if ((data.score || 0) >= 50) {
//         setImprovement(
//           `Good match! Consider adding these skills: ${(
//             data.missingSkills || []
//           )
//             .slice(0, 3)
//             .join(", ")}`,
//         );
//       } else {
//         setImprovement(
//           `Your resume needs improvement. Add these skills: ${(
//             data.missingSkills || []
//           )
//             .slice(0, 5)
//             .join(", ")}`,
//         );
//       }

//       if (setAtsScores) {
//         setAtsScores((prev) => [
//           ...prev,
//           {
//             score: Number(data.score) || 0,
//             date: new Date().toLocaleDateString(),
//           },
//         ]);
//       }
//     } catch (error) {
//       console.error("ATS Error:", error);

//       setScore(0);
//       setMatchedKeywords([]);
//       setMissingKeywords([]);

//       setAnalysis(
//         "Unable to analyze resume. Please check backend connection and try again.",
//       );

//       alert("ATS analysis failed.");
//     }

//     setCalculating(false);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-fuchsia-50 relative overflow-hidden">
//       <div className="absolute top-28 left-10 h-72 w-72 rounded-full bg-purple-300/30 blur-3xl" />
//       <div className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-fuchsia-300/30 blur-3xl" />

//       <Navbar setCurrentPage={setCurrentPage} />
//       <div className="mb-8">
//         <button
//           onClick={() => setCurrentPage("builder")}
//           className="inline-flex items-center gap-2 rounded-xl px-1 py-2 text-sm font-bold text-slate-600 hover:text-purple-700 transition-all duration-300"
//         >
//           <ChevronLeft className="h-5 w-5" />
//           Back
//         </button>
//       </div>
//       <main className="relative z-10 max-w-7xl mx-auto px-6 py-12">
//         <section className="mb-10">
//           <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-sm font-bold text-purple-700 mb-5">
//             <Sparkles className="h-4 w-4" />
//             Smart Resume Optimization
//           </div>

//           <h1 className="text-4xl md:text-5xl font-black text-slate-950">
//             ATS Score Checker
//           </h1>

//           <p className="mt-4 max-w-2xl text-lg text-slate-600">
//             Upload your resume and job description to check your compatibility
//             score, matched keywords, missing skills, and improvement areas.
//           </p>

//           <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
//             <div className="rounded-3xl bg-white/80 backdrop-blur-xl p-5 shadow-md border border-white">
//               <p className="text-2xl font-black text-purple-600">ATS</p>
//               <p className="text-sm text-slate-500">Friendly Analysis</p>
//             </div>

//             <div className="rounded-3xl bg-white/80 backdrop-blur-xl p-5 shadow-md border border-white">
//               <p className="text-2xl font-black text-fuchsia-600">PDF</p>
//               <p className="text-sm text-slate-500">Resume Support</p>
//             </div>

//             <div className="rounded-3xl bg-white/80 backdrop-blur-xl p-5 shadow-md border border-white">
//               <p className="text-2xl font-black text-indigo-600">AI</p>
//               <p className="text-sm text-slate-500">Smart Suggestions</p>
//             </div>
//           </div>
//         </section>

//         <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           <div className="lg:col-span-2 space-y-8">
//             <div className="rounded-[2rem] bg-white/90 backdrop-blur-xl p-8 shadow-xl border border-white">
//               <div className="flex items-center justify-between mb-6">
//                 <div>
//                   <h2 className="text-2xl font-black text-slate-900">
//                     Upload Resume
//                   </h2>
//                   <p className="text-slate-500 mt-1">
//                     Upload your resume or paste the content manually.
//                   </p>
//                 </div>

//                 <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-purple-600 to-fuchsia-500 flex items-center justify-center shadow-lg">
//                   <Upload className="h-7 w-7 text-white" />
//                 </div>
//               </div>

//               <label className="group block cursor-pointer rounded-3xl border-2 border-dashed border-purple-200 bg-gradient-to-br from-purple-50 to-fuchsia-50 p-10 text-center transition-all duration-300 hover:border-purple-500 hover:scale-[1.01]">
//                 <input
//                   type="file"
//                   accept=".pdf,.txt,.png,.jpg,.jpeg"
//                   onChange={(e) => {
//                     const file = e.target.files[0];
//                     setResumeFile(file);

//                     if (file) {
//                       setExtracting(true);
//                       extractText(file)
//                         .then((text) => setResume(text))
//                         .finally(() => setExtracting(false));
//                     }
//                   }}
//                   className="hidden"
//                 />

//                 <div className="mx-auto mb-4 h-16 w-16 rounded-2xl bg-white flex items-center justify-center shadow-md group-hover:rotate-6 transition">
//                   {extracting ? (
//                     <Loader2 className="h-8 w-8 animate-spin text-purple-600" />
//                   ) : (
//                     <Upload className="h-8 w-8 text-purple-600" />
//                   )}
//                 </div>

//                 <p className="text-lg font-bold text-purple-700">
//                   {resumeFile
//                     ? resumeFile.name
//                     : "Upload your resume as PDF, text, or image"}
//                 </p>

//                 <p className="mt-2 text-slate-500">
//                   PDF uploads are preferred for better ATS scoring.
//                 </p>
//               </label>

//               <textarea
//                 value={resume}
//                 onChange={(e) => setResume(e.target.value)}
//                 placeholder="Or paste your resume content here if needed..."
//                 className="mt-6 min-h-[190px] w-full resize-none rounded-3xl border border-slate-200 bg-white p-5 text-slate-700 outline-none shadow-sm transition focus:border-purple-400 focus:ring-4 focus:ring-purple-100"
//               />
//             </div>

//             <div className="rounded-[2rem] bg-white/90 backdrop-blur-xl p-8 shadow-xl border border-white">
//               <div className="flex items-center justify-between mb-6">
//                 <div>
//                   <h2 className="text-2xl font-black text-slate-900">
//                     Job Description
//                   </h2>
//                   <p className="text-slate-500 mt-1">
//                     Upload or paste the job description to compare.
//                   </p>
//                 </div>

//                 <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-500 flex items-center justify-center shadow-lg">
//                   <FileText className="h-7 w-7 text-white" />
//                 </div>
//               </div>

//               <label className="group block cursor-pointer rounded-3xl border-2 border-dashed border-indigo-200 bg-gradient-to-br from-indigo-50 to-purple-50 p-8 text-center transition-all duration-300 hover:border-indigo-500 hover:scale-[1.01] mb-6">
//                 <input
//                   type="file"
//                   accept=".pdf,.txt,.png,.jpg,.jpeg"
//                   onChange={(e) => {
//                     const file = e.target.files[0];
//                     setJobFile(file);

//                     if (file) {
//                       setExtracting(true);
//                       extractText(file)
//                         .then((text) => setJobDescription(text))
//                         .finally(() => setExtracting(false));
//                     }
//                   }}
//                   className="hidden"
//                 />

//                 <div className="mx-auto mb-3 h-14 w-14 rounded-2xl bg-white flex items-center justify-center shadow-md">
//                   <FileText className="h-7 w-7 text-indigo-600" />
//                 </div>

//                 <p className="font-bold text-indigo-700">
//                   {jobFile ? jobFile.name : "Upload job description file"}
//                 </p>
//               </label>

//               <textarea
//                 value={jobDescription}
//                 onChange={(e) => setJobDescription(e.target.value)}
//                 placeholder="Paste the job description here..."
//                 className="min-h-[220px] w-full resize-none rounded-3xl border border-slate-200 bg-white p-5 text-slate-700 outline-none shadow-sm transition focus:border-purple-400 focus:ring-4 focus:ring-purple-100"
//               />

//               <button
//                 onClick={calculateATSScore}
//                 disabled={calculating}
//                 className="mt-6 w-full rounded-2xl bg-gradient-to-r from-purple-600 to-fuchsia-500 px-6 py-4 text-lg font-bold text-white shadow-lg shadow-purple-300/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
//               >
//                 {calculating ? (
//                   <>
//                     <Loader2 className="h-5 w-5 animate-spin" />
//                     Calculating...
//                   </>
//                 ) : (
//                   "Calculate ATS Score"
//                 )}
//               </button>
//             </div>
//           </div>

//           <aside className="lg:col-span-1">
//             <div className="sticky top-28 rounded-[2rem] bg-white/90 backdrop-blur-xl p-8 shadow-2xl border border-white">
//               <div className="flex items-center gap-3 mb-6">
//                 <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-purple-600 to-fuchsia-500 flex items-center justify-center">
//                   <BarChart3 className="h-6 w-6 text-white" />
//                 </div>

//                 <h2 className="text-2xl font-black text-slate-900">
//                   Score Result
//                 </h2>
//               </div>

//               {score > 0 ? (
//                 <div>
//                   <div className="text-center">
//                     <div className="mx-auto flex h-44 w-44 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-fuchsia-500 shadow-xl">
//                       <div className="flex h-36 w-36 items-center justify-center rounded-full bg-white">
//                         <div>
//                           <p className="text-5xl font-black text-purple-600">
//                             {score}%
//                           </p>
//                           <p className="text-sm font-medium text-slate-500">
//                             ATS Match
//                           </p>
//                         </div>
//                       </div>
//                     </div>

//                     <p className="mt-6 text-slate-600">
//                       Your resume has been compared with the job description.
//                     </p>
//                   </div>

//                   <div className="mt-6 space-y-3">
//                     <div className="rounded-2xl bg-green-50 p-4">
//                       <div className="flex items-center gap-2 mb-2">
//                         <CheckCircle2 className="h-5 w-5 text-green-600" />
//                         <p className="font-bold text-green-700">
//                           Matched Keywords
//                         </p>
//                       </div>

//                       <p className="text-sm text-slate-600">
//                         {matchedKeywords.length > 0
//                           ? matchedKeywords.join(", ")
//                           : "No matched keywords found yet."}
//                       </p>
//                     </div>

//                     <div className="rounded-2xl bg-red-50 p-4">
//                       <div className="flex items-center gap-2 mb-2">
//                         <AlertCircle className="h-5 w-5 text-red-600" />
//                         <p className="font-bold text-red-700">
//                           Missing Keywords
//                         </p>
//                       </div>

//                       <p className="text-sm text-slate-600">
//                         {missingKeywords.length > 0
//                           ? missingKeywords.join(", ")
//                           : "No missing keywords found."}
//                       </p>
//                     </div>

//                     {analysis && (
//                       <div className="rounded-2xl bg-purple-50 p-4">
//                         <div className="flex items-center gap-2 mb-2">
//                           <Target className="h-5 w-5 text-purple-600" />
//                           <p className="font-bold text-purple-700">
//                             Resume Analysis
//                           </p>
//                         </div>

//                         <p className="text-sm text-slate-600 leading-relaxed">
//                           {analysis}
//                         </p>
//                       </div>
//                     )}

//                     {improvement && (
//                       <div className="rounded-2xl bg-blue-50 p-4">
//                         <div className="flex items-center gap-2 mb-2">
//                           <Sparkles className="h-5 w-5 text-blue-600" />
//                           <p className="font-bold text-blue-700">
//                             How to Improve
//                           </p>
//                         </div>
//                         <p className="text-sm text-slate-600 leading-relaxed">
//                           {improvement}
//                         </p>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               ) : (
//                 <div className="py-12 text-center">
//                   <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-3xl bg-purple-100">
//                     <FileSearch className="h-10 w-10 text-purple-600" />
//                   </div>

//                   <p className="text-slate-600 leading-relaxed">
//                     Enter resume and job description, then click Calculate to
//                     see your ATS score.
//                   </p>
//                 </div>
//               )}
//             </div>
//           </aside>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default ATSScore;

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import {
  Upload,
  FileText,
  Sparkles,
  BarChart3,
  FileSearch,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Target,
  ChevronLeft,
  Terminal,
  Cpu,
  RefreshCw,
} from "lucide-react";

const ATSScore = ({ setCurrentPage, setAtsScores }) => {
  const [resume, setResume] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [resumeFile, setResumeFile] = useState(null);
  const [jobFile, setJobFile] = useState(null);
  const [extracting, setExtracting] = useState(false);
  const [score, setScore] = useState(0);
  const [matchedKeywords, setMatchedKeywords] = useState([]);
  const [missingKeywords, setMissingKeywords] = useState([]);
  const [analysis, setAnalysis] = useState("");
  const [calculating, setCalculating] = useState(false);
  const [improvement, setImprovement] = useState("");

  const extractTextFromPDF = async (file) => {
    try {
      const pdfjsLib = await import("pdfjs-dist");
      pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
        "pdfjs-dist/build/pdf.worker.min.mjs",
        import.meta.url,
      ).toString();
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
      let fullText = "";
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        const pageText = textContent.items.map((item) => item.str).join(" ");
        fullText += pageText + "\n";
      }
      return fullText.trim();
    } catch (err) {
      const data = await file.arrayBuffer();
      const uint8array = new Uint8Array(data);
      let str = "";
      for (let i = 0; i < uint8array.length; i++) {
        str += String.fromCharCode(uint8array[i]);
      }
      const matches = str.match(/BT[\s\S]*?ET/g) || [];
      let extractedText = "";
      matches.forEach((block) => {
        const parts = block.match(/\(([^)]+)\)/g) || [];
        parts.forEach((part) => {
          extractedText += part.slice(1, -1) + " ";
        });
      });
      return extractedText.trim().length > 0
        ? extractedText
        : str.replace(/[^a-zA-Z0-9\s.,@:/+-]/g, " ").trim();
    }
  };

  const extractText = async (file) => {
    if (!file) return "";
    if (file.type === "text/plain") return await file.text();
    if (file.type === "application/pdf") return await extractTextFromPDF(file);
    if (file.type.startsWith("image/")) {
      try {
        setExtracting(true);
        const base64 = await new Promise((resolve) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result.split(",")[1]);
          reader.readAsDataURL(file);
        });
        const response = await fetch(
          "https://api.groq.com/openai/v1/chat/completions",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
            },
            body: JSON.stringify({
              model: "llama-3.2-11b-vision-preview",
              messages: [
                {
                  role: "user",
                  content: [
                    {
                      type: "image_url",
                      image_url: { url: `data:${file.type};base64,${base64}` },
                    },
                    {
                      type: "text",
                      text: "Extract all text from this resume image exactly as written. Return only the extracted text, nothing else.",
                    },
                  ],
                },
              ],
              max_tokens: 1000,
            }),
          },
        );
        const data = await response.json();
        return data.choices[0].message.content;
      } catch (err) {
        alert(
          "Vision processor configuration logs failed. Paste character structures manually.",
        );
        return "";
      } finally {
        setExtracting(false);
      }
    }
    return "";
  };

  const calculateATSScore = async () => {
    setCalculating(true);
    try {
      if (!resume.trim() || !jobDescription.trim()) {
        alert("Payload mismatch. Please enrich both raw text segments.");
        setCalculating(false);
        return;
      }

      const response = await fetch("http://localhost:5001/api/ats/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ resume, jobDescription }),
      });

      if (!response.ok)
        throw new Error("Server engine returned anomaly state.");

      const data = await response.json();
      const extractedScore = Number(data.score) || 0;

      setScore(extractedScore);
      setMatchedKeywords(
        Array.isArray(data.matchedSkills) ? data.matchedSkills : [],
      );
      setMissingKeywords(
        Array.isArray(data.missingSkills) ? data.missingSkills : [],
      );
      setAnalysis(data.suggestions || "Neural matrix compatibility complete.");

      if (extractedScore >= 75) {
        setImprovement(
          "Excellent match profile optimization. ATS score requirements exceeded.",
        );
      } else if (extractedScore >= 50) {
        setImprovement(
          `Target convergence average. Remediate payload mismatch by inserting skills: ${(data.missingSkills || []).slice(0, 3).join(", ")}`,
        );
      } else {
        setImprovement(
          `Critical optimization anomaly detected. Inject core parameters immediately: ${(data.missingSkills || []).slice(0, 5).join(", ")}`,
        );
      }

      if (setAtsScores) {
        setAtsScores((prev) => [
          ...prev,
          { score: extractedScore, date: new Date().toLocaleDateString() },
        ]);
      }
    } catch (error) {
      console.error("ATS System Exception:", error);
      setScore(0);
      setMatchedKeywords([]);
      setMissingKeywords([]);
      setAnalysis(
        "Local node interface communication timed out. Ensure endpoint port 5001 is active.",
      );
      alert("Verification sequence interrupted.");
    } finally {
      setCalculating(false);
    }
  };

  // SVG Circular Ring Variable Parameters
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  const textareaClass =
    "w-full min-h-[180px] text-sm resize-y rounded-2xl border border-slate-800 bg-slate-950/80 p-4 text-slate-200 placeholder-slate-600 outline-none transition duration-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 font-mono leading-relaxed shadow-inner";

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative overflow-hidden selection:bg-indigo-500/30">
      {/* Background Ambience Shaders */}
      <div className="absolute top-24 left-1/4 h-96 w-96 rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-purple-500/5 blur-[100px] pointer-events-none" />

      <Navbar setCurrentPage={setCurrentPage} />

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-8 space-y-6">
        <div>
          <button
            onClick={() => setCurrentPage("builder")}
            className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-bold text-slate-400 border border-slate-900 bg-slate-900/40 hover:text-indigo-400 hover:border-slate-800 transition-all duration-200"
          >
            <ChevronLeft className="h-3.5 w-3.5" /> Back to Matrix
          </button>
        </div>

        {/* Dashboard Header Terminal */}
        <section className="bg-slate-900/20 border border-slate-900 rounded-3xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 rounded-md bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-1 text-xs font-bold text-indigo-400">
              <Sparkles className="h-3.5 w-3.5" /> Core Parsing Protocol v2.8
            </div>
            <h1 className="text-3xl font-black tracking-tight text-slate-100 md:text-4xl">
              ATS Score Framework
            </h1>
            <p className="max-w-xl text-xs text-slate-400 leading-relaxed">
              Drop structural vector file systems or text maps to test
              algorithmic keyword alignment arrays.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 w-full md:w-auto shrink-0">
            {[
              { title: "ATS Engine", desc: "Boolean Vectors" },
              { title: "File Engine", desc: "PDF Framework" },
              { title: "AI Sync", desc: "LLM Weights" },
            ].map((node, idx) => (
              <div
                key={idx}
                className="bg-slate-950 border border-slate-900 rounded-xl p-3 text-center min-w-[95px]"
              >
                <p className="text-xs font-black text-indigo-400">
                  {node.title}
                </p>
                <p className="text-[10px] text-slate-500 font-mono mt-0.5">
                  {node.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Main Processing Area */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          <div className="lg:col-span-2 space-y-6">
            {/* Resume Upload Module Container */}
            <div className="rounded-3xl bg-slate-900/40 border border-slate-900 p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800/60 pb-3">
                <div className="space-y-0.5">
                  <h2 className="text-base font-bold text-slate-200 flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-indigo-400" /> Resume
                    Workspace
                  </h2>
                  <p className="text-[11px] text-slate-500">
                    Inject structured personnel logs.
                  </p>
                </div>
                <div className="h-9 w-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                  <Upload className="h-4 w-4 text-indigo-400" />
                </div>
              </div>

              <label className="group block cursor-pointer rounded-2xl border border-dashed border-slate-800 bg-slate-950/40 p-6 text-center transition hover:border-indigo-500/40">
                <input
                  type="file"
                  accept=".pdf,.txt,.png,.jpg,.jpeg"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    setResumeFile(file);
                    if (file) {
                      setExtracting(true);
                      extractText(file)
                        .then((text) => setResume(text))
                        .finally(() => setExtracting(false));
                    }
                  }}
                  className="hidden"
                />
                <div className="mx-auto mb-3 h-11 w-11 rounded-xl bg-slate-950 border border-slate-900 flex items-center justify-center shadow-md transition group-hover:scale-105">
                  {extracting ? (
                    <Loader2 className="h-4 w-4 animate-spin text-indigo-400" />
                  ) : (
                    <Upload className="h-4 w-4 text-slate-400 group-hover:text-indigo-400" />
                  )}
                </div>
                <p className="text-xs font-bold text-slate-300">
                  {resumeFile
                    ? resumeFile.name
                    : "Mount Local Identity File Buffer"}
                </p>
                <p className="mt-1 text-[10px] text-slate-500 font-mono">
                  PDF, TXT, PNG binary maps allowed.
                </p>
              </label>

              <textarea
                value={resume}
                onChange={(e) => setResume(e.target.value)}
                placeholder="// Or dump character raw content data structures directly into this layout stream..."
                className={textareaClass}
              />
            </div>

            {/* Job Description Target Container */}
            <div className="rounded-3xl bg-slate-900/40 border border-slate-900 p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800/60 pb-3">
                <div className="space-y-0.5">
                  <h2 className="text-base font-bold text-slate-200 flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-purple-400" /> Requirement
                    Thresholds
                  </h2>
                  <p className="text-[11px] text-slate-500">
                    Provide targeted parameter requirements.
                  </p>
                </div>
                <div className="h-9 w-9 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                  <FileText className="h-4 w-4 text-purple-400" />
                </div>
              </div>

              <label className="group block cursor-pointer rounded-2xl border border-dashed border-slate-800 bg-slate-950/40 p-4 text-center transition hover:border-purple-500/40">
                <input
                  type="file"
                  accept=".pdf,.txt,.png,.jpg,.jpeg"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    setJobFile(file);
                    if (file) {
                      setExtracting(true);
                      extractText(file)
                        .then((text) => setJobDescription(text))
                        .finally(() => setExtracting(false));
                    }
                  }}
                  className="hidden"
                />
                <p className="text-xs font-bold text-slate-400 group-hover:text-purple-400 transition">
                  {jobFile
                    ? `📎 Loaded: ${jobFile.name}`
                    : "Mount Job Description Matrix Architecture"}
                </p>
              </label>

              <textarea
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                placeholder="// Paste job descriptions or criteria logs..."
                className={textareaClass}
              />

              <button
                onClick={calculateATSScore}
                disabled={calculating}
                className="w-full rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-3.5 text-xs font-black tracking-wider text-white uppercase shadow-md transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:opacity-95"
              >
                {calculating ? (
                  <>
                    <RefreshCw className="h-3.5 w-3.5 animate-spin" />
                    Executing Alignment Match Pipelines...
                  </>
                ) : (
                  "Compile Convergence Evaluation"
                )}
              </button>
            </div>
          </div>

          {/* Results Analysis Console */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 rounded-3xl bg-slate-900/40 border border-slate-900 p-6 space-y-5 shadow-2xl">
              <div className="flex items-center gap-2.5 border-b border-slate-800/60 pb-3">
                <div className="h-8 w-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                  <BarChart3 className="h-4 w-4 text-indigo-400" />
                </div>
                <h2 className="text-sm font-black text-slate-200 uppercase tracking-widest">
                  Matrix Output Logs
                </h2>
              </div>

              {score > 0 ? (
                <div className="space-y-4">
                  {/* Dynamic SVG Circle Ring Display */}
                  <div className="flex justify-center py-2">
                    <div className="relative flex items-center justify-center">
                      <svg className="w-40 h-40 transform -rotate-90">
                        <circle
                          cx="80"
                          cy="80"
                          r={radius}
                          className="stroke-slate-800 fill-none"
                          strokeWidth="10"
                        />
                        <circle
                          cx="80"
                          cy="80"
                          r={radius}
                          className="stroke-indigo-500 fill-none transition-all duration-1000 ease-out"
                          strokeWidth="10"
                          strokeDasharray={circumference}
                          strokeDashoffset={strokeDashoffset}
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute text-center">
                        <p className="text-3xl font-black font-mono tracking-tight text-indigo-400">
                          {score}%
                        </p>
                        <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">
                          Match Target
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Quantized Logs Feedback Blocks */}
                  <div className="space-y-2.5">
                    <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/10 p-3.5 space-y-1.5">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                        <CheckCircle2 className="h-3.5 w-3.5" /> Converged
                        Tokens
                      </div>
                      <p className="text-[11px] text-slate-400 leading-normal font-mono">
                        {matchedKeywords.length > 0
                          ? matchedKeywords.join(", ")
                          : "Empty array sequence."}
                      </p>
                    </div>

                    <div className="rounded-xl bg-rose-500/5 border border-rose-500/10 p-3.5 space-y-1.5">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-rose-400">
                        <AlertCircle className="h-3.5 w-3.5" /> Deficit
                        Parameters
                      </div>
                      <p className="text-[11px] text-slate-400 leading-normal font-mono">
                        {missingKeywords.length > 0
                          ? missingKeywords.join(", ")
                          : "Zero voids detected."}
                      </p>
                    </div>

                    {analysis && (
                      <div className="rounded-xl bg-slate-950/80 border border-slate-800 p-3.5 space-y-1.5">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-400">
                          <Target className="h-3.5 w-3.5" /> Telemetry
                          Evaluation
                        </div>
                        <p className="text-[11px] text-slate-400 leading-relaxed">
                          {analysis}
                        </p>
                      </div>
                    )}

                    {improvement && (
                      <div className="rounded-xl bg-purple-500/5 border border-purple-500/10 p-3.5 space-y-1.5">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-purple-400">
                          <Sparkles className="h-3.5 w-3.5" /> Rectification
                          Logic
                        </div>
                        <p className="text-[11px] text-slate-400 leading-relaxed font-mono">
                          {improvement}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="py-12 text-center border border-dashed border-slate-900 rounded-2xl bg-slate-950/20">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 border border-slate-900">
                    <FileSearch className="h-5 w-5 text-slate-600" />
                  </div>
                  <p className="text-xs text-slate-500 max-w-[200px] mx-auto leading-relaxed">
                    Awaiting compiler parameters. Trigger conversion script to
                    populate telemetry data.
                  </p>
                </div>
              )}
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
};

export default ATSScore;
