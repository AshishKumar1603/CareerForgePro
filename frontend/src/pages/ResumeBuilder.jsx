// import Navbar from "../components/Navbar";
// import ResumeForm from "../components/ResumeForm";
// import ResumePreview from "../components/ResumePreview";
// import { useResume } from "../context/ResumeContext";

// function ResumeBuilder({ setCurrentPage, mode = "create", isPro }) {
//   const { resumeData, setResumeData } = useResume();

//   const handleDownloadPDF = async () => {
//     const element = document.getElementById("resume-preview");
//     if (!element) {
//       alert("Preview not found");
//       return;
//     }

//     // Get all computed styles from the page
//     const styleSheets = Array.from(document.styleSheets);
//     let cssText = "";
//     styleSheets.forEach((sheet) => {
//       try {
//         const rules = Array.from(sheet.cssRules || []);
//         rules.forEach((rule) => {
//           cssText += rule.cssText + "\n";
//         });
//       } catch (e) {
//         // Cross-origin stylesheets — skip
//       }
//     });

//     const html = `
//       <html>
//         <head>
//           <title>Resume</title>
//           <meta charset="UTF-8" />
//           <style>
//             ${cssText}
//             body { margin: 0; padding: 24px; background: white !important; font-family: sans-serif; }
//             #resume-preview { width: 100%; max-width: 800px; margin: 0 auto; background: white !important; box-shadow: none !important; }
//             * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
//             @page { size: A4; margin: 12mm; }
//             @media print {
//               body { margin: 0; }
//               #resume-preview { page-break-inside: avoid; }
//               .no-print { display: none !important; }
//             }
//           </style>
//         </head>
//         <body>${element.outerHTML}</body>
//       </html>`;

//     try {
//       const response = await fetch(`${import.meta.env.VITE_API_URL}/api/pdf/generate`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ html })
//       });

//       if (!response.ok) throw new Error("Backend PDF failed");

//       const blob = await response.blob();
//       const url = URL.createObjectURL(blob);
//       const a = document.createElement("a");
//       a.href = url;
//       a.download = `${resumeData.name || "resume"}.pdf`;
//       document.body.appendChild(a);
//       a.click();
//       document.body.removeChild(a);
//       URL.revokeObjectURL(url);

//     } catch (err) {
//       console.warn("Backend not available, using print fallback:", err);
//       const printWindow = window.open("", "_blank", "width=900,height=1200");
//       if (!printWindow) {
//         alert("Popup blocked. Please allow popups.");
//         return;
//       }
//       const el = document.getElementById("resume-preview");
//       printWindow.document.write(`
//         <html>
//           <head>
//             <title>Resume PDF</title>
//             <style>
//               ${cssText}
//               body { margin: 0; padding: 24px; background: white !important; }
//               #resume-preview { width: 100%; max-width: 800px; margin: 0 auto; background: white !important; }
//               * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
//               @page { size: A4; margin: 12mm; }
//               @media print {
//                 body { margin: 0; }
//                 #resume-preview { page-break-inside: avoid; }
//               }
//             </style>
//           </head>
//           <body>${el.outerHTML}</body>
//         </html>`);
//       printWindow.document.close();
//       setTimeout(() => {
//         printWindow.focus();
//         printWindow.print();
//         printWindow.close();
//       }, 1000);
//     }
//   };

//   const handleDownloadWord = () => {
//     if (!isPro) {
//       alert("Word download is a Pro feature. Upgrade to access this feature.");
//       setCurrentPage("pricing");
//       return;
//     }

//     const content = `
// ${resumeData.name || "Your Name"}
// ${resumeData.role || "Your Role"}

// Contact:
// ${resumeData.email || "your@email.com"}
// ${resumeData.phone || "+91 XXXXX XXXXX"}
// ${resumeData.address || "Your Address"}

// Skills:
// ${resumeData.skills || "Add your skills"}

// Experience:
// ${resumeData.experience || "Add your experience"}

// Projects:
// ${resumeData.projects || "Add your projects"}

// Certifications:
// ${resumeData.certifications || "Add your certifications"}
//     `;

//     const blob = new Blob([content], { type: 'application/msword' });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = `${resumeData.name || "resume"}.doc`;
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
//     URL.revokeObjectURL(url);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-violet-50/80 to-pink-50/80 dark:from-gray-900 dark:to-gray-800 transition-all duration-300">
//       <Navbar onBack={() => setCurrentPage("builder")} showBack />

//       <div className="px-4 sm:px-8 py-8">
//         <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
//           {mode === "improve" ? "Improve Resume" : "Create Resume"}
//         </h1>
//         <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-3xl">
//           {mode === "improve"
//             ? "Paste your current resume content or update the fields below, and CareerForge will help rewrite your experience with clearer language, better structure, and stronger keyword focus."
//             : "Build your resume from scratch with live preview and instant formatting so you can export a polished PDF in minutes."}
//         </p>

//         {mode === "improve" && (
//           <div className="mb-6 rounded-3xl border border-violet-200/70 dark:border-violet-700/50 bg-violet-50/80 dark:bg-violet-900/20 p-5 shadow-sm">
//             <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What this page does</h2>
//             <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
//               This page is designed to improve your existing resume copy. Enter your current details and career highlights, then use the live preview to see the improved version before downloading.
//             </p>
//           </div>
//         )}

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//           <ResumeForm
//             resumeData={resumeData}
//             setResumeData={setResumeData}
//             handleDownloadPDF={handleDownloadPDF}
//             handleDownloadWord={handleDownloadWord}
//             mode={mode}
//             isPro={isPro}
//           />

//           <div className="lg:sticky lg:top-20 lg:self-start bg-white p-4 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
//             <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">
//               {mode === "improve" ? "Improved Resume Preview" : "Live Preview"}
//             </p>
//             <div className="overflow-x-auto">
//               <ResumePreview resumeData={resumeData} mode={mode} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ResumeBuilder;

import React from "react";
import toast from "react-hot-toast";
import ResumeForm from "../components/ResumeForm";
import ResumePreview from "../components/ResumePreview";
import { useResume } from "../context/ResumeContext";

function ResumeBuilder({ setCurrentPage, mode = "create", isPro, setResumes }) {
  const { resumeData, setResumeData } = useResume();

  const handleDownloadPDF = async () => {
    const element = document.getElementById("resume-preview");
    if (!element) {
      toast.error("Resume Preview frame element not detected.");
      return;
    }

    // Capture all client styles runtime seamlessly
    const styleSheets = Array.from(document.styleSheets);
    let cssText = "";
    styleSheets.forEach((sheet) => {
      try {
        const rules = Array.from(sheet.cssRules || []);
        rules.forEach((rule) => {
          cssText += rule.cssText + "\n";
        });
      } catch (e) {
        // Cross-origin fallback skip
      }
    });

    const html = `
      <html>
        <head>
          <title>Resume</title>
          <meta charset="UTF-8" />
          <style>
            ${cssText}
            body { margin: 0; padding: 24px; background: white !important; font-family: sans-serif; color: #0f172a !important; }
            #resume-preview { width: 100%; max-width: 800px; margin: 0 auto; background: white !important; box-shadow: none !important; }
            * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
            @page { size: A4; margin: 12mm; }
            @media print {
              body { margin: 0; background: white !important; }
              #resume-preview { page-break-inside: avoid; }
              .no-print { display: none !important; }
            }
          </style>
        </head>
        <body>${element.outerHTML}</body>
      </html>`;

    const loadToastId = toast.loading("Generating your clean PDF...");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/pdf/generate`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ html }),
        },
      );

      if (!response.ok) throw new Error("Server engine failed");

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${resumeData.name || "careerforge_resume"}.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      // --- SAVE ENGINE LINK TO DASHBOARD STATE ARRAY ---
      if (setResumes) {
        setResumes((prev) => [
          {
            id: Date.now(),
            name: `${resumeData.name || "Untitled"}_v1.pdf`,
            date: "Just now",
            content: JSON.stringify(resumeData),
            type: "Resume",
          },
          ...prev,
        ]);
      }

      toast.success("PDF Downloaded successfully!", { id: loadToastId });
    } catch (err) {
      console.warn(
        "Backend pipeline down, pulling local print stream engine:",
        err,
      );
      toast.dismiss(loadToastId);

      const printWindow = window.open("", "_blank", "width=900,height=1200");
      if (!printWindow) {
        toast.error(
          "Popup blocked! Please allow popups to export files locally.",
        );
        return;
      }

      printWindow.document.write(`
        <html>
          <head>
            <title>Resume Export</title>
            <style>
              ${cssText}
              body { margin: 0; padding: 24px; background: white !important; color: #0f172a !important; }
              #resume-preview { width: 100%; max-width: 800px; margin: 0 auto; background: white !important; }
              * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
              @page { size: A4; margin: 12mm; }
            </style>
          </head>
          <body>${element.outerHTML}</body>
        </html>`);
      printWindow.document.close();

      setTimeout(() => {
        printWindow.focus();
        printWindow.print();
        printWindow.close();

        if (setResumes) {
          setResumes((prev) => [
            {
              id: Date.now(),
              name: `${resumeData.name || "Untitled"}_v1.pdf`,
              date: "Just now",
              content: JSON.stringify(resumeData),
              type: "Resume",
            },
            ...prev,
          ]);
        }
      }, 800);
    }
  };

  const handleDownloadWord = () => {
    if (!isPro) {
      toast.error("MS Word export is an exclusive Pro feature.", {
        icon: "🔒",
      });
      setTimeout(() => setCurrentPage("pricing"), 1000);
      return;
    }

    const content = `
${resumeData.name || "Your Name"}
${resumeData.role || "Your Role"}

Contact:
${resumeData.email || "your@email.com"}
${resumeData.phone || "+91 XXXXX XXXXX"}
${resumeData.address || "Your Address"}

Skills:
${resumeData.skills || "Add your skills"}

Experience:
${resumeData.experience || "Add your experience"}

Projects:
${resumeData.projects || "Add your projects"}

Certifications:
${resumeData.certifications || "Add your certifications"}
    `;

    const blob = new Blob([content], { type: "application/msword" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${resumeData.name || "resume"}.doc`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success("DOC Document generated!");
  };

  return (
    <div className="min-h-[calc(100vh-68px)] bg-slate-950 text-slate-100 px-4 sm:px-8 py-10">
      {/* Local Navbar is removed. Handled centrally via App.jsx global wrapper layout */}

      <div className="max-w-7xl mx-auto">
        {/* Dynamic Descriptive Header Block */}
        <div className="mb-10">
          <h1 className="text-2xl sm:text-4xl font-black text-slate-100 mb-3 tracking-tight">
            {mode === "improve" ? (
              <>
                Optimize &{" "}
                <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  Improve Resume
                </span>
              </>
            ) : (
              <>
                Forge a New{" "}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Professional Resume
                </span>
              </>
            )}
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-4xl font-medium leading-relaxed">
            {mode === "improve"
              ? "Paste your existing resume details into the builder fields. CareerForge AI optimization protocols engine rewrites metrics structure, keywords intensity, and descriptions layout dynamically."
              : "Build your technical asset index step-by-step with synchronized compilation sheets to output production-ready models."}
          </p>
        </div>

        {/* AI Action Notice Panel only on Improve Mode */}
        {mode === "improve" && (
          <div className="mb-8 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-5 backdrop-blur-sm">
            <h2 className="text-base font-bold text-amber-400 flex items-center gap-2 mb-1.5">
              ✨ AI Revision Optimization Engine Active
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed font-medium">
              Fill or update your core data streams in the sheet parameters
              container. The target dynamic renderer window compilation adapts
              automatically before code execution export.
            </p>
          </div>
        )}

        {/* Structural Interactive Layout Splits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left: Input Form Sheet Fields */}
          <div className="bg-slate-900/40 border border-slate-900 rounded-2xl p-5 sm:p-6 shadow-xl backdrop-blur-md">
            <ResumeForm
              resumeData={resumeData}
              setResumeData={setResumeData}
              handleDownloadPDF={handleDownloadPDF}
              handleDownloadWord={handleDownloadWord}
              mode={mode}
              isPro={isPro}
            />
          </div>

          {/* Right: Live Virtual Sheet Preview Terminal Wrapper */}
          <div className="lg:sticky lg:top-24 bg-slate-900/50 border border-slate-800 p-5 rounded-2xl shadow-2xl backdrop-blur-md">
            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-4 pb-2 border-b border-slate-800">
              {mode === "improve"
                ? "⚡ AI Refined Target Layout"
                : "📄 Live Generation Sheet Preview"}
            </p>

            {/* Scrollable Container keeping background neat, while the resume itself remains realistic crisp white sheet */}
            <div className="overflow-x-auto rounded-xl bg-slate-950/60 p-4 border border-slate-900/80">
              <div className="min-w-[650px] sm:min-w-0">
                <ResumePreview resumeData={resumeData} mode={mode} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumeBuilder;
