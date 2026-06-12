const express = require("express");
const Groq = require("groq-sdk");

const router = express.Router();

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

router.post("/analyze", async (req, res) => {
  try {
    const { resume, jobDescription } = req.body;

    if (!resume || !jobDescription) {
      return res.status(400).json({
        error: "Resume and Job Description are required",
      });
    }

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      temperature: 0.2,
      messages: [
        {
          role: "user",
          content: `
Analyze this resume against the job description.

Resume:
${resume}

Job Description:
${jobDescription}

Scoring Rules:

90-100 = Nearly perfect match
75-89 = Strong match
60-74 = Moderate match
40-59 = Weak match
0-39 = Poor match

Consider:
- Skills match
- Technologies match
- Experience relevance
- Education relevance
- Keywords match

IMPORTANT:
Return ONLY raw JSON.
Do NOT use markdown.
Do NOT use \`\`\`json.
Do NOT provide explanations outside JSON.
Do not heavily penalize optional skills.
Focus primarily on required skills and core technologies.

Response Format:

{
  "score": 70,
  "matchedSkills": [
    "React",
    "Node.js",
    "MongoDB"
  ],
  "missingSkills": [
    "TypeScript",
    "AWS"
  ],
  "analysis": "The candidate is a good match for the role with strong MERN stack skills and backend experience.",
  "suggestions": "Add TypeScript, cloud platforms, and CI/CD experience to improve ATS compatibility."
}
`,
        },
      ],
    });

    let result = completion.choices[0].message.content;

    console.log("===== GROQ ATS RESPONSE =====");
    console.log(result);
    console.log("=============================");

    result = result
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    try {
      const parsedResult = JSON.parse(result);

      return res.json({
        score: parsedResult.score || 0,
        matchedSkills: parsedResult.matchedSkills || [],
        missingSkills: parsedResult.missingSkills || [],
        analysis: parsedResult.analysis || "",
        suggestions: parsedResult.suggestions || "",
      });
    } catch (parseError) {
      console.error("JSON Parse Error:", parseError);
      console.error("Raw Response:", result);

      return res.json({
        score: 50,
        matchedSkills: [],
        missingSkills: [],
        analysis:
          "AI generated a response but it was not in the expected format.",
        suggestions:
          "Please try again. The AI response could not be parsed correctly.",
      });
    }
  } catch (error) {
    console.error("ATS Route Error:", error);

    return res.status(500).json({
      error: "ATS Analysis Failed",
    });
  }
});

module.exports = router;
