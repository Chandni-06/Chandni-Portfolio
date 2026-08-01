import type { Express, Request, Response } from "express";
import { GoogleGenAI } from "@google/genai";
import { PORTFOLIO_DATA } from "../src/data/portfolioData";

type ChatHistoryItem = {
  role?: string;
  text?: string;
};

type ChatRequestBody = {
  message?: string;
  history?: ChatHistoryItem[];
};

const CHANDNI_SYSTEM_INSTRUCTION = `You are "AI Chandni", an interactive AI Career Assistant representing Chandni Kumari on her personal data analyst portfolio website.
You speak strictly in the FIRST PERSON ("I", "my", "me") as if you ARE Chandni Kumari.

RULES & PERSONA:
1. Always speak in the FIRST PERSON as Chandni Kumari. Example: Say "I built an interactive Power BI sales dashboard using DAX measures" NOT "Chandni built..." or "Chandni knows...".
2. NEVER say "As an AI...", "As a language model...", "As an AI assistant...", or "I am ChatGPT". You are AI Chandni representing Chandni Kumari.
3. Personality: Professional, Friendly, Confident, Honest, Enthusiastic, Recruiter-friendly. Keep answers conversational, warm, and concise.
4. KNOWLEDGE BOUNDARY: Answer ONLY based on Chandni Kumari's real resume, portfolio projects, skills, education, and career experience detailed below. Never fabricate achievements or work experience.
5. UNRELATED QUESTIONS: If a visitor asks questions completely unrelated to Chandni, her background, skills, or career (e.g. "Who won the World Cup?", "What is Bitcoin?", "Latest News", "Movies", "Politics", "Sports", "Weather", etc.), reply EXACTLY with:
   "I'm designed to answer questions about Chandni, her projects, skills and career. I'd be happy to tell you more about those!"
6. UNKNOWN/UNHANDLED TECH OR EXPERIENCES: If a visitor asks about a skill, tool, or experience that isn't in Chandni's portfolio or resume, reply politely:
   "I haven't worked on that yet, but I'm currently learning and would love the opportunity to explore it."
7. CALL TO ACTION: Regularly encourage visitors to check out my interactive Power BI project case studies, GitHub repositories, and downloadable resume on this website!

CHANDNI KUMARI'S PROFILE DATA:
- Full Name: Chandni Kumari (Chandni 🤎)
- Role: Aspiring Data Analyst
- Tagline: Turning Data into Meaningful Insights
- Summary: Aspiring Data Analyst pursuing BCA with an 8.8 CGPA at Bengaluru City University. Knowledgeable in Power BI, SQL, Python, and Excel. Passionate about data visualization, database modeling, DAX calculations, and solving business challenges with data.
- Status: Actively seeking Data Analyst Internship opportunities (2025/2026 Batch).
- Education:
  • Bachelor of Computer Applications (BCA) at Bengaluru City University (Pursuing, CGPA 8.8, 2022 - Present)
  • Higher Secondary Education (12th Grade) at CBSE Board (2022 - 2024, 60%, School topper in English)
  • Matriculation (10th Grade) at JAC Board (2020, 79.06% with distinction)
- Core Skills:
  • Power BI: Power Query (M Language), DAX Calculations, Star Schema Modeling, Interactive Dashboards, Custom Slicers, Report Publishing.
  • SQL: Relational DBMS, Joins (Inner/Left/Right/Full), Aggregations (GROUP BY, HAVING), Subqueries, CTEs, Window Functions, DML/DDL.
  • Python: Data Manipulation & Cleaning with Pandas, Numerical Analysis with NumPy, Visualizations with Matplotlib & Seaborn.
  • Excel: Advanced Formulas (XLOOKUP, INDEX/MATCH, SUMIFS), Pivot Tables, Data Cleaning, Conditional Formatting, KPI Alerts.
  • Soft Competencies: Problem Solving, Critical Thinking, Business Intelligence, Data Storytelling, Collaboration.
- Projects:
  1. "Sales & Financial Performance Dashboard" (Power BI):
     - Built an interactive Power BI report analyzing revenue, profit margins, regional sales distribution, and product profitability.
     - Created custom DAX time-intelligence measures (YoY Growth, YTD Revenue, Moving Averages).
     - Resulted in identifying top 15% revenue-generating customer segments and uncovering a 12% margin slippage in underperforming regions.
  2. "India Demographics & Urbanization Study" (Python):
     - Executed exploratory data analysis (EDA) on state-wise census & population metrics using Pandas and Matplotlib.
     - Cleared missing values, normalized literacy rates vs. urban growth indicators, and generated distribution plots.
     - Uncovered key correlations between female literacy rates and urbanization density across Indian states.
  3. "Retail Supply Chain & Inventory Optimizer" (Excel):
     - Developed an advanced Excel workbook model to calculate stock turnover rates, safety stock thresholds, and reorder alerts.
     - Utilized dynamic XLOOKUP, INDEX/MATCH, nested IFs, and automated Pivot Tables with conditional formatting.
     - Reduced modeled stock-out risk by 18% and improved inventory forecasting accuracy.
- Target Roles: Data Analyst Intern, Junior BI Developer, Business Intelligence Intern, SQL & Analytics Associate.
- Location: Bengaluru, Karnataka, India.
- Contact: Email: vchandni040@gmail.com, Phone: +91 7019549199, LinkedIn: www.linkedin.com/in/chandni-kumari-099117371, GitHub: https://github.com/Chandni-06.`;

let aiClient: GoogleGenAI | null = null;

function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is not configured.");
    }

    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }

  return aiClient;
}

const getProjectAnswer = (): string => {
  const projectTitles = PORTFOLIO_DATA.projects.map((project) => project.title);
  const projectSummary = PORTFOLIO_DATA.projects
    .slice(0, 3)
    .map((project) => `${project.title} (${project.category})`)
    .join(", ");

  return [
    `I have built ${projectTitles.length} portfolio projects so far, including ${projectSummary}.`,
    `A few highlights:`,
    `• ${PORTFOLIO_DATA.projects[0].title}: a Power BI dashboard for restaurant performance, ratings, pricing, cuisines, and city trends.`,
    `• ${PORTFOLIO_DATA.projects[1].title}: a Power BI sales dashboard focused on revenue, profit, and regional analysis.`,
    `• ${PORTFOLIO_DATA.projects[2].title}: a Power BI population analysis dashboard covering state-wise demographics, density, and literacy.`,
    `• ${PORTFOLIO_DATA.projects[3].title}: a Python EDA project that identified churn drivers and retention insights.`,
    `You can also check out my GitHub and resume for more detail if you'd like.`,
  ].join("\n");
};

const getSkillsAnswer = (): string => {
  const skillGroups = PORTFOLIO_DATA.skills.map((group) => group.title);

  return [
    `My main skill areas are ${skillGroups.join(", ")}.`,
    `I work with SQL, Python, Power BI, and Excel, and I use them for data cleaning, dashboarding, analysis, and reporting.`,
    `If you want, I can also break down my Power BI, SQL, Python, or Excel skills one by one.`,
  ].join("\n");
};

const getProfileAnswer = (): string =>
  [
    `I am Chandni Kumari, an aspiring Data Analyst based in Bengaluru.`,
    `I am pursuing BCA, and I focus on Power BI, SQL, Python, Excel, and business intelligence projects.`,
    `I am actively looking for Data Analyst Intern, Junior BI Developer, and related analytics roles.`,
  ].join("\n");

const getDirectPortfolioAnswer = (message: string): string | null => {
  const normalizedMessage = message.toLowerCase();

  if (
    /\b(project|projects|built|portfolio project|case study|dashboards?)\b/.test(
      normalizedMessage,
    )
  ) {
    return getProjectAnswer();
  }

  if (
    /(skill|skills|technology|technologies|tools|stack)/.test(normalizedMessage)
  ) {
    return getSkillsAnswer();
  }

  if (
    /(tell me about yourself|about you|who are you|introduce yourself|your background)/.test(
      normalizedMessage,
    )
  ) {
    return getProfileAnswer();
  }

  if (/(resume|cv|contact|email|linkedin|github)/.test(normalizedMessage)) {
    return [
      `My resume is available on the portfolio site, and my contact details are on the contact section.`,
      `Email: ${PORTFOLIO_DATA.personal.email}`,
      `LinkedIn: ${PORTFOLIO_DATA.personal.linkedin}`,
      `GitHub: ${PORTFOLIO_DATA.personal.github}`,
    ].join("\n");
  }

  return null;
};

export function registerChatRoute(app: Express) {
  app.post("/api/chat", async (req: Request, res: Response) => {
    try {
      const { message, history } = req.body as ChatRequestBody;

      if (!message || typeof message !== "string") {
        return res.status(400).json({ error: "Message text is required." });
      }

      const directAnswer = getDirectPortfolioAnswer(message);

      if (directAnswer) {
        return res.json({ reply: directAnswer });
      }

      const ai = getGeminiClient();

      const contents: Array<{ role: string; parts: Array<{ text: string }> }> =
        [];

      if (Array.isArray(history)) {
        for (const item of history) {
          if (item.role && item.text) {
            contents.push({
              role: item.role === "user" ? "user" : "model",
              parts: [{ text: item.text }],
            });
          }
        }
      }

      contents.push({
        role: "user",
        parts: [{ text: message }],
      });

      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents,
        config: {
          systemInstruction: CHANDNI_SYSTEM_INSTRUCTION,
          temperature: 0.7,
          topP: 0.9,
        },
      });

      const replyText =
        response.text ||
        "I'm happy to tell you more about my portfolio, projects, and skills!";

      return res.json({ reply: replyText });
    } catch (err: any) {
      console.error("Error in /api/chat:", err);
      return res.status(500).json({
        error: "Failed to process AI request.",
        details: err.message || "Server error",
      });
    }
  });
}
