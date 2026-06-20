

import React from "react";
import { motion } from "framer-motion";

function Home({ setCurrentPage, isPro }) {
  return (
    <motion.div
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-violet-50 via-pink-50 to-slate-100 text-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-[-10%] top-20 h-72 w-72 rounded-full bg-violet-300/30 blur-3xl" />
        <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-fuchsia-300/20 blur-3xl" />
        <div className="absolute left-1/2 top-[75%] h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />
      </div>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center px-5 py-16 sm:px-10 sm:py-20 lg:px-16">
          <div className="max-w-2xl">
            <motion.div
              className="inline-flex items-center gap-2 rounded-full bg-white/90 dark:bg-slate-900/80 px-4 py-2 shadow-lg shadow-violet-500/10 border border-violet-200/70 dark:border-violet-500/30"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <span className="text-violet-600 dark:text-violet-300 font-semibold text-sm">
                AI Resume Builder
              </span>
              {isPro && (
                <span className="rounded-full bg-yellow-400/90 px-3 py-1 text-xs font-bold text-yellow-950">
                  PRO
                </span>
              )}
            </motion.div>

            <motion.h1
              className="mt-8 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight sm:leading-tight text-slate-950 dark:text-white"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              Create a resume that passes ATS and gets noticed by hiring
              managers.
            </motion.h1>

            <motion.p
              className="mt-6 text-lg sm:text-xl leading-8 text-slate-600 dark:text-slate-300 max-w-xl"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Boost your job search with tailored resume suggestions, job
              description analysis, and instant PDF export in one modern
              experience.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <button
                onClick={() => setCurrentPage("builder")}
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-8 py-4 text-base font-semibold text-white shadow-2xl shadow-violet-500/20 transition hover:-translate-y-0.5 hover:shadow-violet-500/30"
              >
                Start building now
              </button>
              <button
                onClick={() => setCurrentPage("pricing")}
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
                { label: "Resume Builds", value: "Fast & smart" },
                { label: "ATS insights", value: "Keyword matched" },
                { label: "PDF output", value: "Polished design" },
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

          {/* Right Insights Mock Card */}
          <motion.div
            className="relative mx-auto w-full max-w-xl"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.25 }}
          >
            <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-fuchsia-400/20 blur-3xl" />
            <div className="rounded-[2.5rem] border border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 p-6 shadow-2xl backdrop-blur-xl">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300">
                    Live preview
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-slate-950 dark:text-white">
                    Resume insights
                  </h2>
                </div>
                <span className="rounded-full bg-violet-600 px-3 py-1 text-xs font-semibold text-white">
                  New
                </span>
              </div>
              <div className="space-y-6">
                {[
                  { title: "ATS Match", value: "92%", accent: "bg-violet-500" },
                  {
                    title: "Readability",
                    value: "A+",
                    accent: "bg-fuchsia-500",
                  },
                  {
                    title: "Keyword strength",
                    value: "High",
                    accent: "bg-cyan-500",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-3xl bg-slate-100 p-4 dark:bg-slate-800/80"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
                        {item.title}
                      </p>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold text-white ${item.accent}`}
                      >
                        {item.value}
                      </span>
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

        {/* Features Section */}
        <section
          id="features"
          className="relative px-5 py-16 sm:px-10 sm:py-20 lg:px-16"
        >
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-600">
                What you get
              </p>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-950 dark:text-white">
                Everything needed to land your next big role.
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {[
                {
                  title: "Smart resume builder",
                  description:
                    "Generate clean, ATS-friendly resumes with AI-guided formatting and section suggestions.",
                  icon: "🚀",
                },
                {
                  title: "Job description parsing",
                  description:
                    "Extract the right keywords and tailor your resume to the exact role in seconds.",
                  icon: "🧠",
                },
                {
                  title: "Instant PDF export",
                  description:
                    "Download polished resumes and cover letters that look professional on every device.",
                  icon: "📄",
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
                  <h3 className="text-xl font-semibold text-slate-950 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section
          id="pricing"
          className="px-5 py-16 sm:px-10 sm:py-20 lg:px-16 bg-white/80 dark:bg-slate-950/80"
        >
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-600">
                Pricing
              </p>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-950 dark:text-white">
                Plans for every stage of your career.
              </h2>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <motion.div
                whileHover={{ y: -6 }}
                className="rounded-[2rem] border border-slate-200/80 bg-slate-50 p-8 shadow-lg shadow-slate-200/50 dark:border-slate-700/80 dark:bg-slate-900/80"
              >
                <h3 className="text-2xl font-bold text-slate-950 dark:text-white mb-4">
                  Free Plan
                </h3>
                <p className="text-5xl font-extrabold text-violet-600 dark:text-violet-400">
                  ₹0
                </p>
                <p className="mt-4 text-slate-600 dark:text-slate-300">
                  Perfect to get started with one polished resume and basic ATS
                  checks.
                </p>
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
                <h3 className="text-2xl font-bold mb-4">Pro Plan</h3>
                <p className="text-5xl font-extrabold mb-4">₹499</p>
                <p className="text-slate-100/90">
                  Unlimited resume builds, advanced AI rewriting, premium
                  templates, and cover letter assistance.
                </p>
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

        {/* Workflow Section */}
        <section className="px-5 py-16 sm:px-10 sm:py-20 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-600">
                How it works
              </p>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-950 dark:text-white">
                The perfect workflow for your job application.
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { step: "Paste job description" },
                { step: "Analyze required keywords" },
                { step: "Optimize your resume" },
                { step: "Download polished PDF" },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  whileHover={{ y: -8 }}
                  className="rounded-[2rem] border border-slate-200/80 bg-white/90 p-8 shadow-lg shadow-slate-200/50 dark:border-slate-700/80 dark:bg-slate-900/80"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-violet-500 text-white font-bold text-lg">
                    {index + 1}
                  </div>
                  <p className="text-lg font-semibold text-slate-950 dark:text-white">
                    {item.step}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="border-t border-slate-200/70 bg-white/90 dark:border-slate-800/70 dark:bg-slate-950/95">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-12 sm:px-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
              CareerForge
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
              Smart resume building, ATS optimization, and cover letter support
              in one beautiful platform.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
                Links
              </h3>
              <ul className="mt-5 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                <li
                  className="cursor-pointer hover:text-violet-600"
                  onClick={() =>
                    document
                      .getElementById("features")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Features
                </li>
                <li
                  className="cursor-pointer hover:text-violet-600"
                  onClick={() =>
                    document
                      .getElementById("pricing")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Pricing
                </li>
                <li
                  className="cursor-pointer hover:text-violet-600"
                  onClick={() => setCurrentPage("dashboard")}
                >
                  Dashboard
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
                Contact
              </h3>
              <p className="mt-5 text-sm text-slate-600 dark:text-slate-300">
                support@careerforge.ai
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Chennai, Tamil Nadu
              </p>
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

