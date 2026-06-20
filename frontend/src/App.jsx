// import Login from "./pages/Login";
// import Home from "./pages/Home";
// import Builder from "./pages/Builder";
// import ResumeBuilder from "./pages/ResumeBuilder";
// import Dashboard from "./pages/Dashboard";
// import JDAnalysis from "./pages/JDAnalysis";
// import ATSScore from "./pages/ATSScore";
// import CoverLetter from "./pages/CoverLetter";
// import Pricing from "./pages/Pricing";
// import { Toaster } from "react-hot-toast";
// import React, { useState, useEffect } from "react";
// import CreateAccount from "./pages/CreateAccount";
// import { ResumeProvider } from "./context/ResumeContext";

// function App() {
//   // console.log("GROQ KEY:", import.meta.env.VITE_GROQ_API_KEY)
//   const [currentPage, setCurrentPage] = useState(() => {
//     return localStorage.getItem("currentPage") || "home";
//   });
//   useEffect(() => {
//     localStorage.setItem("currentPage", currentPage);
//   }, [currentPage]);

//   useEffect(() => {
//     const pageTitles = {
//       home: "CareerForge Pro",
//       builder: "Builder — CareerForge Pro",
//       resume: "Resume Builder — CareerForge Pro",
//       "improve-resume": "Improve Resume — CareerForge Pro",
//       "jd-analysis": "JD Analysis — CareerForge Pro",
//       "ats-score": "ATS Score — CareerForge Pro",
//       "cover-letter": "Cover Letter — CareerForge Pro",
//       dashboard: "Dashboard — CareerForge Pro",
//       pricing: "Pricing — CareerForge Pro",
//       login: "Login — CareerForge Pro",
//     };
//     document.title = pageTitles[currentPage] || "CareerForge Pro";
//   }, [currentPage]);

//   const [isDark, setIsDark] = useState(() => {
//     return document.documentElement.classList.contains("dark");
//   });
//   const [isPro, setIsPro] = useState(() => {
//     return localStorage.getItem("isPro") === "true";
//   });
//   const [isAuthenticated, setIsAuthenticated] = useState(() => {
//     return localStorage.getItem("isAuthenticated") === "true";
//   });

//   // --- GLOBAL DATA STATE ---
//   // Shared across the app so Dashboard and Builders can talk to each other
//   const [resumes, setResumes] = useState([
//     {
//       id: 1,
//       name: "Fullstack_Developer_v1.pdf",
//       date: "2 days ago",
//       content: "Resume Content for Fullstack Developer...",
//       type: "Resume",
//     },
//     {
//       id: 2,
//       name: "Python_Backend_v2.pdf",
//       date: "5 days ago",
//       content: "Resume Content for Python Backend...",
//       type: "Resume",
//     },
//   ]);

//   const [jobs, setJobs] = useState([
//     {
//       id: 101,
//       company: "Google",
//       role: "Frontend Intern",
//       location: "Hyderabad",
//       details: "Requires React and Tailwind CSS knowledge.",
//     },
//     {
//       id: 102,
//       company: "Microsoft",
//       role: "Software Engineer",
//       location: "Bangalore",
//       details: "Focus on Azure and C# development.",
//     },
//   ]);

//   const [coverLetters, setCoverLetters] = useState([
//     {
//       id: 201,
//       title: "Cover Letter - Google",
//       content:
//         "Dear Hiring Manager, I am excited to apply for the position at Google...",
//       date: "Yesterday",
//     },
//   ]);

//   const [jdAnalyses, setJdAnalyses] = useState([]);

//   const [atsScores, setAtsScores] = useState([]);

//   // Global helper to trigger a browser download
//   const handleDownload = (filename, content) => {
//     const element = document.createElement("a");
//     const file = new Blob([content || "CareerForge Pro Document Content"], {
//       type: "text/plain",
//     });
//     element.href = URL.createObjectURL(file);
//     element.download = filename
//       ? `${filename.split(".")[0]}.txt`
//       : "document.txt";
//     document.body.appendChild(element);
//     element.click();
//     document.body.removeChild(element);
//   };

//   const toggleDark = () => {
//     const root = document.documentElement;
//     if (root.classList.contains("dark")) {
//       root.classList.remove("dark");
//       localStorage.theme = "light";
//       setIsDark(false);
//     } else {
//       root.classList.add("dark");
//       localStorage.theme = "dark";
//       setIsDark(true);
//     }
//   };

//   const upgradeToPro = () => {
//     setIsPro(true);
//     localStorage.setItem("isPro", "true");
//     // Simulate payment success - in real app, this would be after actual payment
//     alert("Payment successful! Pro features activated.");
//   };

//   return (
//     <ResumeProvider>
//       <Toaster position="top-right" reverseOrder={false} />
//       <div className={isDark ? "dark" : ""}>
//         {currentPage === "home" && (
//           <Home setCurrentPage={setCurrentPage} isPro={isPro} />
//         )}

//         {currentPage === "builder" && (
//           <Builder
//             setCurrentPage={setCurrentPage}
//             setCoverLetters={setCoverLetters}
//             isPro={isPro}
//           />
//         )}

//         {currentPage === "resume" && (
//           <ResumeBuilder
//             setCurrentPage={setCurrentPage}
//             setResumes={setResumes}
//             isPro={isPro}
//           />
//         )}

//         {currentPage === "improve-resume" && (
//           <ResumeBuilder
//             setCurrentPage={setCurrentPage}
//             setResumes={setResumes}
//             mode="improve"
//             isPro={isPro}
//           />
//         )}

//         {currentPage === "jd-analysis" && (
//           <JDAnalysis
//             setCurrentPage={setCurrentPage}
//             setJdAnalyses={setJdAnalyses}
//           />
//         )}

//         {currentPage === "ats-score" && (
//           <ATSScore
//             setCurrentPage={setCurrentPage}
//             setAtsScores={setAtsScores}
//           />
//         )}

//         {currentPage === "cover-letter" && (
//           <CoverLetter
//             setCurrentPage={setCurrentPage}
//             setCoverLetters={setCoverLetters}
//           />
//         )}

//         {currentPage === "pricing" && (
//           <Pricing
//             setCurrentPage={setCurrentPage}
//             isPro={isPro}
//             upgradeToPro={upgradeToPro}
//           />
//         )}

//         {currentPage === "dashboard" && (
//           <Dashboard
//             setCurrentPage={setCurrentPage}
//             onDownload={handleDownload}
//             resumes={resumes}
//             setResumes={setResumes}
//             jobs={jobs}
//             setJobs={setJobs}
//             coverLetters={coverLetters}
//             setCoverLetters={setCoverLetters}
//             jdAnalyses={jdAnalyses}
//             setJdAnalyses={setJdAnalyses}
//             atsScores={atsScores}
//             setAtsScores={setAtsScores}
//           />
//         )}

//         {currentPage === "login" && (
//           <Login
//             setCurrentPage={setCurrentPage}
//             setIsAuthenticated={setIsAuthenticated}
//           />
//         )}
//         {currentPage === "signup" && (
//           <CreateAccount setCurrentPage={setCurrentPage} />
//         )}
//       </div>
//     </ResumeProvider>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";

// Context & Navigation Component
import { ResumeProvider } from "./context/ResumeContext";
import Navbar from "./components/Navbar";

// Core UI Screen Pages
import Home from "./pages/Home";
import Builder from "./pages/Builder";
import ResumeBuilder from "./pages/ResumeBuilder";
import Dashboard from "./pages/Dashboard";
import JDAnalysis from "./pages/JDAnalysis";
import ATSScore from "./pages/ATSScore";
import CoverLetter from "./pages/CoverLetter";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";

function App() {
  // 1. Core Reactive States
  const [currentPage, setCurrentPage] = useState(() => {
    return localStorage.getItem("currentPage") || "home";
  });

  const [isDark, setIsDark] = useState(() => {
    // Initial sync with localStorage/System Prefs
    return (
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  const [isPro, setIsPro] = useState(() => {
    return localStorage.getItem("isPro") === "true";
  });

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return (
      localStorage.getItem("isAuthenticated") === "true" ||
      !!localStorage.getItem("careerforge_auth")
    );
  });

  // 2. Global Synchronizers (Effects)
  useEffect(() => {
    localStorage.setItem("currentPage", currentPage);

    // Manage Document Title Meta dynamically
    const pageTitles = {
      home: "CareerForge Pro",
      builder: "Builder — CareerForge Pro",
      resume: "Resume Builder — CareerForge Pro",
      "improve-resume": "Improve Resume — CareerForge Pro",
      "jd-analysis": "JD Analysis — CareerForge Pro",
      "ats-score": "ATS Score — CareerForge Pro",
      "cover-letter": "Cover Letter — CareerForge Pro",
      dashboard: "Dashboard — CareerForge Pro",
      pricing: "Pricing — CareerForge Pro",
      login: "Login — CareerForge Pro",
      signup: "Sign Up — CareerForge Pro",
    };
    document.title = pageTitles[currentPage] || "CareerForge Pro";
  }, [currentPage]);

  useEffect(() => {
    // Sync Tailwind Dark Mode structure directly with HTML Root elements
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  useEffect(() => {
    localStorage.setItem("isAuthenticated", isAuthenticated ? "true" : "false");
  }, [isAuthenticated]);

  // --- GLOBAL MOCK DATA ENGINE STATES ---
  const [resumes, setResumes] = useState([
    {
      id: 1,
      name: "Fullstack_Developer_v1.pdf",
      date: "2 days ago",
      content: "Resume Content for Fullstack Developer...",
      type: "Resume",
    },
    {
      id: 2,
      name: "Python_Backend_v2.pdf",
      date: "5 days ago",
      content: "Resume Content for Python Backend...",
      type: "Resume",
    },
  ]);

  const [jobs, setJobs] = useState([
    {
      id: 101,
      company: "Google",
      role: "Frontend Intern",
      location: "Hyderabad",
      details: "Requires React and Tailwind CSS knowledge.",
    },
    {
      id: 102,
      company: "Microsoft",
      role: "Software Engineer",
      location: "Bangalore",
      details: "Focus on Azure and C# development.",
    },
  ]);

  const [coverLetters, setCoverLetters] = useState([
    {
      id: 201,
      title: "Cover Letter - Google",
      content:
        "Dear Hiring Manager, I am excited to apply for the position at Google...",
      date: "Yesterday",
    },
  ]);

  const [jdAnalyses, setJdAnalyses] = useState([]);
  const [atsScores, setAtsScores] = useState([]);

  // 3. Central Operational Handlers
  const handleDownload = (filename, content) => {
    const element = document.createElement("a");
    const file = new Blob([content || "CareerForge Pro Document Content"], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = filename
      ? `${filename.split(".")[0]}.txt`
      : "document.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const toggleDark = () => setIsDark((prev) => !prev);

  const upgradeToPro = () => {
    setIsPro(true);
    localStorage.setItem("isPro", "true");
    alert("Payment successful! Pro features activated.");
  };

  // Helper dynamic controller to toggle navbar configurations safely
  const isAuthScreen = currentPage === "login" || currentPage === "signup";
  const showBackButton =
    currentPage !== "home" && currentPage !== "dashboard" && !isAuthScreen;

  return (
    <ResumeProvider>
      <Toaster position="top-right" reverseOrder={false} />

      {/* Core Base Wrap */}
      <div className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-indigo-500/30 selection:text-indigo-200">
        {/* Global Injection Layout of Refactored Navbar */}
        <Navbar
          setCurrentPage={setCurrentPage}
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
          onLogin={() => setCurrentPage("login")}
          showBack={showBackButton}
          onBack={() => setCurrentPage(isAuthenticated ? "dashboard" : "home")}
          isDarkMode={isDark}
          toggleTheme={toggleDark}
        />

        {/* Dynamic Route Switch Shell */}
        <main className="overflow-x-hidden">
          {currentPage === "home" && (
            <Home setCurrentPage={setCurrentPage} isPro={isPro} />
          )}

          {currentPage === "builder" && (
            <Builder
              setCurrentPage={setCurrentPage}
              setCoverLetters={setCoverLetters}
              isPro={isPro}
            />
          )}

          {currentPage === "resume" && (
            <ResumeBuilder
              setCurrentPage={setCurrentPage}
              setResumes={setResumes}
              isPro={isPro}
            />
          )}

          {currentPage === "improve-resume" && (
            <ResumeBuilder
              setCurrentPage={setCurrentPage}
              setResumes={setResumes}
              mode="improve"
              isPro={isPro}
            />
          )}

          {currentPage === "jd-analysis" && (
            <JDAnalysis
              setCurrentPage={setCurrentPage}
              setJdAnalyses={setJdAnalyses}
            />
          )}

          {currentPage === "ats-score" && (
            <ATSScore
              setCurrentPage={setCurrentPage}
              setAtsScores={setAtsScores}
            />
          )}

          {currentPage === "cover-letter" && (
            <CoverLetter
              setCurrentPage={setCurrentPage}
              setCoverLetters={setCoverLetters}
            />
          )}

          {currentPage === "pricing" && (
            <Pricing
              setCurrentPage={setCurrentPage}
              isPro={isPro}
              upgradeToPro={upgradeToPro}
            />
          )}

          {currentPage === "dashboard" && (
            <Dashboard
              setCurrentPage={setCurrentPage}
              onDownload={handleDownload}
              resumes={resumes}
              setResumes={setResumes}
              jobs={jobs}
              setJobs={setJobs}
              coverLetters={coverLetters}
              setCoverLetters={setCoverLetters}
              jdAnalyses={jdAnalyses}
              setJdAnalyses={setJdAnalyses}
              atsScores={atsScores}
              setAtsScores={setAtsScores}
            />
          )}

          {currentPage === "login" && (
            <Login
              setCurrentPage={setCurrentPage}
              setIsAuthenticated={setIsAuthenticated}
            />
          )}

          {currentPage === "signup" && (
            <CreateAccount setCurrentPage={setCurrentPage} />
          )}
        </main>
      </div>
    </ResumeProvider>
  );
}

export default App;
