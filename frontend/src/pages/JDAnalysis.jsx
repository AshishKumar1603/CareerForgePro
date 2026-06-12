// import React, { useState } from "react";
// import Navbar from "../components/Navbar";

// const JDAnalysis = ({ setCurrentPage, setJdAnalyses }) => {
//   const [jd, setJd] = useState("");
//   const [keywords, setKeywords] = useState([]);
//   const [skills, setSkills] = useState([]);
//   const [experience, setExperience] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleAnalyze = async () => {
//     if (!jd.trim()) {
//       alert("Please paste Job Description")
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
//             content: `Analyze this job description and return ONLY a JSON object with no extra text:\n{\n  "keywords": ["top 10 important keywords"],\n  "skills": ["technical skills found"],\n  "experience": "experience requirement like 2 years or Not mentioned"\n}\n\nJob Description: ${jd}`
//           }],
//           max_tokens: 500
//         })
//       })
//       const data = await response.json()
//       const text = data.choices[0].message.content
//       const clean = text.replace(/```json|```/g, "").trim()
//       const parsed = JSON.parse(clean)
//       setKeywords(parsed.keywords || [])
//       setSkills(parsed.skills || [])
//       setExperience(parsed.experience || "Not mentioned")
//     } catch (err) {
//       alert("Analysis failed. Check your VITE_GROQ_API_KEY in .env file.")
//     } finally {
//       setLoading(false)
//     }
//   };

//   const handleSaveToDashboard = () => {
//     if (keywords.length === 0) {
//       alert("Please analyze JD first");
//       return;
//     }

//     const summary = [
//       `Experience Required: ${experience}`,
//       `Skills Found: ${skills.length > 0 ? skills.join(", ") : "No major skills detected"}`,
//       `Top Keywords: ${keywords.join(", ")}`,
//     ].join("\n");

//     const newAnalysis = {
//       id: Date.now(),
//       title: `JD Analysis ${new Date().toLocaleDateString()}`,
//       date: "Just now",
//       details: summary,
//       content: summary,
//       type: "JD Analysis",
//     };

//     setJdAnalyses((prev) => [newAnalysis, ...prev]);
//     alert("JD Analysis saved to Dashboard");
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-violet-50/80 to-pink-50/80 dark:from-gray-900 dark:to-gray-800 transition-all duration-300">
//       <Navbar onBack={() => setCurrentPage("builder")} showBack />

//       <div className="px-4 sm:px-8 py-8 max-w-6xl mx-auto">
//         <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-900 dark:text-white">
//           JD Analysis
//         </h1>
//         <p className="text-gray-500 dark:text-gray-400 mb-8">
//           Paste a job description and get AI-powered keyword, skills, and experience insights.
//         </p>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//           <div className="bg-white/90 dark:bg-gray-800/90 rounded-3xl p-6 shadow-xl backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
//             <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
//               What this task will do
//             </h2>
//             <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300 list-disc pl-5">
//               <li>Extract important keywords from the JD using AI</li>
//               <li>Detect technical and soft skills with context</li>
//               <li>Find required experience and qualifications</li>
//               <li>Provide a concise role summary</li>
//             </ul>

//             <textarea
//               rows="12"
//               placeholder="Paste Job Description here..."
//               value={jd}
//               onChange={(e) => setJd(e.target.value)}
//               className="w-full mt-5 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4 outline-none focus:ring-2 focus:ring-violet-500"
//             />

//             {error && (
//               <div className="mt-3 p-3 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-sm">
//                 {error}
//               </div>
//             )}

//             <button
//               onClick={handleAnalyze}
//               disabled={loading}
//               className="mt-4 px-5 py-3 bg-violet-600 text-white rounded-xl font-bold hover:bg-violet-700 transition-all active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-2"
//             >
//               {loading ? (
//                 <>
//                   <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
//                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
//                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
//                   </svg>
//                   Analyzing...
//                 </>
//               ) : "Analyze JD"}
//             </button>

//             <button
//               onClick={handleSaveToDashboard}
//               className="mt-3 ml-3 px-5 py-3 bg-white dark:bg-gray-900 text-violet-600 dark:text-violet-300 border border-violet-200 dark:border-violet-700 rounded-xl font-bold hover:bg-violet-50 dark:hover:bg-violet-900/30 transition-all active:scale-95"
//             >
//               Save to Dashboard
//             </button>
//           </div>

//           <div className="bg-white/90 dark:bg-gray-800/90 rounded-3xl p-6 shadow-xl backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
//             <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
//               Analysis Result
//             </h2>

//             {keywords.length > 0 ? (
//               <div>
//                 <h3 className="font-bold text-gray-900 dark:text-white">Keywords</h3>
//                 <ul className="mt-2 mb-5 flex flex-wrap gap-2 text-sm text-gray-700 dark:text-gray-200">
//                   {keywords.map((word, index) => (
//                     <li
//                       key={index}
//                       className="bg-violet-50 dark:bg-violet-900/30 rounded-lg px-3 py-2"
//                     >
//                       {word}
//                     </li>
//                   ))}
//                 </ul>

//                 <h3 className="font-bold text-gray-900 dark:text-white">Skills Found</h3>
//                 <ul className="mt-2 mb-5 flex flex-wrap gap-2 text-sm text-gray-700 dark:text-gray-200">
//                   {skills.length > 0 ? (
//                     skills.map((skill, index) => (
//                       <li
//                         key={index}
//                         className="bg-emerald-50 dark:bg-emerald-900/30 rounded-lg px-3 py-2"
//                       >
//                         {skill}
//                       </li>
//                     ))
//                   ) : (
//                     <li className="text-gray-500 dark:text-gray-400">
//                       No major skills detected
//                     </li>
//                   )}
//                 </ul>

//                 <h3 className="font-bold text-gray-900 dark:text-white">
//                   Experience Required
//                 </h3>
//                 <p className="mt-2 text-sm text-gray-700 dark:text-gray-200 bg-amber-50 dark:bg-amber-900/20 rounded-lg px-3 py-2 inline-block">
//                   {experience}
//                 </p>
//               </div>
//             ) : (
//               <p className="text-sm text-gray-500 dark:text-gray-400">
//                 Results will appear here after you click Analyze JD.
//               </p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JDAnalysis;

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import {
  ChevronLeft,
  Terminal,
  Cpu,
  Sparkles,
  Layers,
  Clock,
  Bookmark,
  RefreshCw,
} from "lucide-react";

const JDAnalysis = ({ setCurrentPage, setJdAnalyses }) => {
  const [jd, setJd] = useState("");
  const [keywords, setKeywords] = useState([]);
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAnalyze = async () => {
    if (!jd.trim()) {
      alert(
        "Payload stream mismatch. Please enter Job Description parameters.",
      );
      return;
    }

    setError("");
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
                content: `Analyze this job description and extract structure arrays. Return ONLY a valid JSON block enclosed inside curly braces. No preamble, no conversational markup text, no markdown backticks outside. Ensure proper escapes inside.

Structure Template:
{
  "keywords": ["top 10 strategic keywords"],
  "skills": ["technical domain requirements and soft modules"],
  "experience": "standard duration requirement or Not mentioned"
}

Job Description:
${jd}`,
              },
            ],
            max_tokens: 600,
            temperature: 0.1, // Token sequencing variance prevent karne ke liye low temperature
          }),
        },
      );

      if (!response.ok)
        throw new Error(
          "Network architecture returned unauthorized handshake.",
        );

      const data = await response.json();
      const rawContent = data.choices[0].message.content.trim();

      // Robust Core Regex Parsing Engine: Markdown blocks aur text garbage clear karne ke liye
      const jsonMatch = rawContent.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        throw new Error(
          "Target JSON block was not detected in neural output payload.",
        );
      }

      const parsed = JSON.parse(jsonMatch[0]);

      setKeywords(Array.isArray(parsed.keywords) ? parsed.keywords : []);
      setSkills(Array.isArray(parsed.skills) ? parsed.skills : []);
      setExperience(parsed.experience || "Not mentioned");
    } catch (err) {
      console.error("Extraction Sequence Exception:", err);
      setError(
        "Parsing protocol runtime anomaly. Check VITE_GROQ_API_KEY parameters or matrix structures.",
      );
      alert("Data compilation aborted.");
    } finally {
      setLoading(false);
    }
  };

  const handleSaveToDashboard = () => {
    if (keywords.length === 0) {
      alert(
        "Compile metrics evaluation array sequence before mounting parameters.",
      );
      return;
    }

    const summary = [
      `Experience Required: ${experience}`,
      `Skills Found: ${skills.length > 0 ? skills.join(", ") : "No major skills detected"}`,
      `Top Keywords: ${keywords.join(", ")}`,
    ].join("\n");

    const newAnalysis = {
      id: Date.now(),
      title: `JD Mapping Analysis ${new Date().toLocaleDateString()}`,
      date: "Just now",
      details: summary,
      content: summary,
      type: "JD Analysis",
    };

    setJdAnalyses((prev) => [newAnalysis, ...prev]);
    alert("Target profile structural snapshot appended to dashboard stream.");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative overflow-hidden selection:bg-indigo-500/30 font-sans antialiased">
      {/* Structural Glassmorphic Glow Systems */}
      <div className="absolute top-28 left-1/4 h-96 w-96 rounded-full bg-violet-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-pink-500/5 blur-[100px] pointer-events-none" />

      <Navbar onBack={() => setCurrentPage("builder")} showBack />

      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 py-8 space-y-6">
        <div>
          <button
            onClick={() => setCurrentPage("builder")}
            className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-bold text-slate-400 border border-slate-900 bg-slate-900/40 hover:text-indigo-400 hover:border-slate-800 transition-all duration-200"
          >
            <ChevronLeft className="h-3.5 w-3.5" /> Back to Workspace
          </button>
        </div>

        {/* Console Node Header */}
        <header className="bg-slate-900/20 border border-slate-900 rounded-3xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 rounded-md bg-violet-500/10 border border-violet-500/20 px-2.5 py-0.5 text-xs font-bold text-violet-400">
              <Layers className="h-3.5 w-3.5" /> Requirement Ingestion Protocol
            </div>
            <h1 className="text-3xl font-black tracking-tight text-slate-100">
              JD Extraction Terminal
            </h1>
            <p className="text-xs text-slate-400 max-w-xl">
              Deconstruct employment frameworks using deep parsing arrays to
              identify skill patterns and operational tracking keywords.
            </p>
          </div>
        </header>

        {/* Ingestion Matrix Layout split columns */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* Input Panel Module */}
          <div className="bg-slate-900/40 border border-slate-900 rounded-3xl p-6 space-y-4">
            <div className="border-b border-slate-800/60 pb-3">
              <h2 className="text-sm font-bold text-slate-200 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-violet-400" /> Source
                Requirement Map
              </h2>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Parse matrix logic parameters.
              </p>
            </div>

            <ul className="space-y-1.5 text-[11px] text-slate-400 font-mono bg-slate-950/60 border border-slate-900 rounded-xl p-3">
              <li className="flex items-center gap-2">
                <Sparkles className="w-3 h-3 text-violet-500" /> [Core Array]
                Extract keyword target chains
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="w-3 h-3 text-violet-500" /> [Tech Stack]
                Audit framework and library scopes
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="w-3 h-3 text-violet-500" /> [Experience]
                Compute duration threshold constants
              </li>
            </ul>

            <textarea
              rows="12"
              placeholder="// Dump target employment description log streams here..."
              value={jd}
              onChange={(e) => setJd(e.target.value)}
              className="w-full rounded-2xl border border-slate-800 bg-slate-950/80 p-4 text-xs font-mono text-slate-200 placeholder-slate-600 outline-none transition duration-200 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 shadow-inner resize-y leading-relaxed"
            />

            {error && (
              <div className="p-3 rounded-xl bg-rose-500/5 border border-rose-500/10 text-rose-400 text-xs font-mono">
                🛑 ERROR:: {error}
              </div>
            )}

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={handleAnalyze}
                disabled={loading}
                className="inline-flex items-center gap-2 px-5 py-3 bg-violet-600 text-xs font-black tracking-wider uppercase text-white rounded-xl hover:bg-violet-700 transition active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <RefreshCw className="h-3.5 w-3.5 animate-spin" />
                    Executing Neural Framework...
                  </>
                ) : (
                  "Compile Analytics Vector"
                )}
              </button>

              <button
                onClick={handleSaveToDashboard}
                className="inline-flex items-center gap-2 px-5 py-3 bg-slate-950 text-xs font-black tracking-wider uppercase text-violet-400 border border-slate-800 rounded-xl hover:bg-slate-900 hover:border-slate-700 transition active:scale-95"
              >
                <Bookmark className="w-3.5 h-3.5" /> Store State Block
              </button>
            </div>
          </div>

          {/* Metrics Visualization Output Block */}
          <div className="bg-slate-900/40 border border-slate-900 rounded-3xl p-6 space-y-5">
            <div className="border-b border-slate-800/60 pb-3">
              <h2 className="text-sm font-bold text-slate-200 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-emerald-400" /> Output Analytics
                Stream
              </h2>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Decompiled system parameters array block.
              </p>
            </div>

            {keywords.length > 0 ? (
              <div className="space-y-4">
                {/* Keywords Sub-Array */}
                <div className="space-y-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                    // Computed Search Arrays
                  </h3>
                  <ul className="flex flex-wrap gap-1.5">
                    {keywords.map((word, index) => (
                      <li
                        key={index}
                        className="bg-violet-500/5 border border-violet-500/10 text-violet-400 rounded-lg px-2.5 py-1 text-xs font-mono"
                      >
                        {word}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills Detected Sub-Array */}
                <div className="space-y-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                    // Operational Stack Modules
                  </h3>
                  <ul className="flex flex-wrap gap-1.5">
                    {skills.length > 0 ? (
                      skills.map((skill, index) => (
                        <li
                          key={index}
                          className="bg-emerald-500/5 border border-emerald-500/10 text-emerald-400 rounded-lg px-2.5 py-1 text-xs font-mono"
                        >
                          {skill}
                        </li>
                      ))
                    ) : (
                      <li className="text-xs text-slate-600 font-mono italic">
                        No parameters detected inside core loop.
                      </li>
                    )}
                  </ul>
                </div>

                {/* Experience Threshold String */}
                <div className="space-y-2 pt-1">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                    // Required Timeline Constraint
                  </h3>
                  <div className="flex items-center gap-2 bg-amber-500/5 border border-amber-500/10 text-amber-400 rounded-xl px-3 py-2 text-xs font-mono w-fit">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{experience}</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="py-16 text-center border border-dashed border-slate-900 rounded-2xl bg-slate-950/20">
                <p className="text-xs text-slate-500 max-w-[220px] mx-auto font-mono leading-relaxed">
                  [SYSTEM_AWAITING_INPUT]:: Execute alignment mapping logic
                  pipeline to print variables block.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default JDAnalysis;
