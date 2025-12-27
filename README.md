# CogniFlow Consensus Engine (v2.4)

**The Universal "Answer Anything" Research Engine.**

CogniFlow is an advanced AI research platform that synthesizes answers from multiple AI models (Gemini, Llama 3, Mistral, Hermes 3) to provide verified, hallucination-free consensus. It features a robust failover system that guarantees an answer for *any* query, regardless of API availability.

![Status](https://img.shields.io/badge/Status-Production%20Ready-green)
![Version](https://img.shields.io/badge/Version-v2.4-blue)

## 🚀 Key Features

### 1. Universal Reliability Protocol ("Always Answer")
- **Multi-Model Consensus:** Aggregates insights from Gemini 1.5 Flash, Gemini Pro, and OpenRouter (Mistral/Llama).
- **Aggressive Chain:** If the primary AI fails, the system iterates through **5+ backup models** (Nous Hermes 3 405B, Phi-3, Zephyr, etc.) until an answer is found.
- **Local Knowledge Base:** Deterministic, offline answers for common concepts (e.g., "What is Cyber Security?", "What is Gravity?") ensure 0ms latency for core queries.
- **Meta-Heuristic Fallback:** If *all* networks fail, the engine synthesizes a "Structural Analysis Framework" based on the query topic, guaranteeing you never see a "Service Unavailable" error.

### 2. High-Performance Synthesis
- **6-Second Hard Timeout:** The system prioritizes speed. Slow providers are cut off to ensure the user never waits more than ~6 seconds for a result.
- **Parallel Processing:** All AI models are queried simultaneously.

### 3. Professional Research UI
- **Consensus Metrics:** Replaced arbitrary percentages with professional confidence phrasing (e.g., "Verified Multi-Model Consensus").
- **Strict Formatting:** All answers are enforced to use clean Markdown (Headings, Bullet Points) for readability.
- **Interactive Lightbox:** Zoom into diagrams and charts generated or retrieved during research.

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Framer Motion
- **AI Providers:** Google Gemini, OpenRouter, Hugging Face Inference
- **Deployment:** Vercel / Docker

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/kushal2846/CogniFlow-Consensus.git
   cd CogniFlow-Consensus
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run locally:**
   ```bash
   npm run dev
   ```
   Access the app at `http://localhost:3000`.

## 🚀 Deployment (Vercel)

This project is Vercel-native.

1. Push your code to GitHub.
2. Import the repository in Vercel.
3. (Optional) Set Environment Variables if you refactor API keys out of the codebase.
4. Click **Deploy**.

## 📄 License

MIT © 2025 Kushal
