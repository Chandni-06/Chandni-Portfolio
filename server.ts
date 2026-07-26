import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';
import { createServer as createViteServer } from 'vite';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-initialized Gemini client helper
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error('GEMINI_API_KEY environment variable is not configured.');
    }
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return aiClient;
}

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

// AI Assistant Chat Route
app.post('/api/chat', async (req, res) => {
  try {
    const { message, history } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Message text is required.' });
    }

    const ai = getGeminiClient();

    // Prepare contents with history if provided
    const contents: Array<{ role: string; parts: Array<{ text: string }> }> = [];

    if (Array.isArray(history)) {
      for (const item of history) {
        if (item.role && item.text) {
          contents.push({
            role: item.role === 'user' ? 'user' : 'model',
            parts: [{ text: item.text }],
          });
        }
      }
    }

    contents.push({
      role: 'user',
      parts: [{ text: message }],
    });

    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents,
      config: {
        systemInstruction: CHANDNI_SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.9,
      },
    });

    const replyText = response.text || "I'm happy to tell you more about my portfolio, projects, and skills!";

    return res.json({ reply: replyText });
  } catch (err: any) {
    console.error('Error in /api/chat:', err);
    return res.status(500).json({
      error: 'Failed to process AI request.',
      details: err.message || 'Server error',
    });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
