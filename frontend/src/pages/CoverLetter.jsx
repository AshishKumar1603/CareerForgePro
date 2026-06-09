import React, { useState } from "react";
import Navbar from "../components/Navbar";

const CoverLetter = ({ setCurrentPage, setCoverLetters }) => {
  const [jobDescription, setJobDescription] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [position, setPosition] = useState("");
  const [yourName, setYourName] = useState("");
  const [generatedLetter, setGeneratedLetter] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerateLetter = async () => {
    if (!jobDescription.trim() || !companyName.trim() || !position.trim() || !yourName.trim()) {
      alert("Please fill in all fields")
      return
    }
    try {
      setLoading(true)
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [{
            role: "user",
            content: `Write a professional cover letter for the following:\nName: ${yourName}\nPosition: ${position}\nCompany: ${companyName}\nJob Description: ${jobDescription}\n\nWrite a compelling 3 paragraph cover letter. Return only the letter text, no subject line, no extra explanation.`
          }],
          max_tokens: 800
        })
      })
      const data = await response.json()
      setGeneratedLetter(data.choices[0].message.content)
    } catch (err) {
      alert("Generation failed. Check your VITE_GROQ_API_KEY in .env file.")
    } finally {
      setLoading(false)
    }
  };

  const handleSaveToDashboard = () => {
    if (!generatedLetter.trim()) {
      alert("Please generate a cover letter first");
      return;
    }

    const newLetter = {
      id: Date.now(),
      title: `Cover Letter - ${position} at ${companyName}`,
      content: generatedLetter,
      date: "Just now",
    };

    setCoverLetters((prev) => [newLetter, ...prev]);
    alert("Cover Letter saved to Dashboard");
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.15),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(236,72,153,0.12),_transparent_30%),#f8fafc] dark:bg-slate-950 transition-all duration-300">
      <Navbar onBack={() => setCurrentPage("builder")} showBack />

      <div className="px-4 sm:px-8 py-10 max-w-7xl mx-auto">
        <div className="rounded-[2rem] border border-violet-200/60 dark:border-violet-500/30 bg-white/95 dark:bg-slate-900/95 shadow-[0_30px_80px_rgba(99,102,241,0.1)] backdrop-blur-xl p-8 mb-10">
          <div className="md:flex md:items-center md:justify-between gap-8">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.4em] font-semibold text-violet-600 dark:text-violet-300">
                Cover Letter Builder
              </p>
              <h1 className="mt-4 text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-white">
                Write a polished cover letter in seconds
              </h1>
              <p className="mt-4 text-base text-slate-600 dark:text-slate-300 leading-7">
                Enter your details, paste the job description, and generate a concise, tailored cover letter with a confident professional tone.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-3xl bg-violet-600/10 dark:bg-violet-500/10 p-5 border border-violet-200/70 dark:border-violet-500/40">
                <p className="text-xs uppercase tracking-[0.3em] font-semibold text-violet-700 dark:text-violet-200">
                  Fast results
                </p>
                <p className="mt-3 text-sm font-semibold text-slate-900 dark:text-white">
                  Tailored letter with strong structure and clear tone.
                </p>
              </div>
              <div className="rounded-3xl bg-slate-100/90 dark:bg-slate-800/90 p-5 border border-slate-200/70 dark:border-slate-700/60">
                <p className="text-xs uppercase tracking-[0.3em] font-semibold text-slate-500 dark:text-slate-400">
                  Save & reuse
                </p>
                <p className="mt-3 text-sm font-semibold text-slate-900 dark:text-white">
                  Store your best letters in the dashboard with one click.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[1.7fr_1fr] gap-8">
          <div className="space-y-6">
            <div className="rounded-[2rem] bg-white/95 dark:bg-slate-900/95 border border-slate-200/70 dark:border-slate-700/70 shadow-xl p-8">
              <div className="flex items-center justify-between gap-4 mb-8">
                <div>
                  <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                    Your information
                  </h2>
                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                    Complete all fields to generate a letter that reflects your experience and the role.
                  </p>
                </div>
                <div className="rounded-3xl bg-violet-100 dark:bg-violet-900/30 px-4 py-2 text-sm font-semibold text-violet-700 dark:text-violet-200">
                  3 paragraph output
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={yourName}
                    onChange={(e) => setYourName(e.target.value)}
                    className="w-full rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 p-3 outline-none focus:ring-2 focus:ring-violet-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">
                    Position Title
                  </label>
                  <input
                    type="text"
                    placeholder="Software Engineer"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    className="w-full rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 p-3 outline-none focus:ring-2 focus:ring-violet-500"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="Google, Microsoft, Amazon"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 p-3 outline-none focus:ring-2 focus:ring-violet-500"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  Job Description
                </label>
                <textarea
                  rows="8"
                  placeholder="Paste the job description here..."
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  className="w-full rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 p-4 outline-none focus:ring-2 focus:ring-violet-500"
                />
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
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] bg-white/95 dark:bg-slate-900/95 border border-slate-200/70 dark:border-slate-700/70 shadow-xl p-8 sticky top-6">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                Letter preview
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
                Your generated cover letter will appear here. Review and save it to your dashboard once ready.
              </p>

              {generatedLetter ? (
                <div>
                  <div className="bg-slate-50 dark:bg-slate-950/80 rounded-3xl p-5 mb-6 max-h-[26rem] overflow-y-auto text-sm leading-7 text-slate-800 dark:text-slate-100 whitespace-pre-line border border-slate-200/70 dark:border-slate-700/70">
                    {generatedLetter}
                  </div>
                  <button
                    onClick={handleSaveToDashboard}
                    className="w-full rounded-3xl border border-violet-500/70 bg-violet-50 text-violet-700 font-semibold px-5 py-3 hover:bg-violet-100 transition-all active:scale-[0.98]"
                  >
                    Save to Dashboard
                  </button>
                </div>
              ) : (
                <div className="rounded-3xl border border-dashed border-slate-200 dark:border-slate-700/70 bg-slate-50 dark:bg-slate-950/60 p-6 text-center text-sm text-slate-500 dark:text-slate-400">
                  Fill in all fields and click "Generate Cover Letter" to preview your custom letter.
                </div>
              )}
            </div>

            <div className="rounded-[2rem] bg-violet-600/10 dark:bg-slate-900/90 border border-violet-200/60 dark:border-violet-500/40 p-6 text-slate-900 dark:text-slate-100">
              <h3 className="text-lg font-semibold mb-4 text-violet-700 dark:text-violet-200">
                Tips for a stronger letter
              </h3>
              <ul className="space-y-3 text-sm leading-6">
                <li>• Keep it concise, highlight your most relevant strengths, and tie them to the role.</li>
                <li>• Use the company name and position title to create a tailored introduction.</li>
                <li>• Emphasize results and impact, not just responsibilities.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverLetter;
