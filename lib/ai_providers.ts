import { GoogleGenerativeAI } from "@google/generative-ai";
import OpenAI from "openai";
import { HfInference } from "@huggingface/inference";
import { getSecret } from "./secrets";

export interface AIProviderResult {
    id: 'gemini' | 'openrouter' | 'huggingface';
    name: string;
    content: string | null;
    status: 'success' | 'failure';
    latency: number;
}

// 1. GEMINI PROVIDER
export async function callGemini(query: string): Promise<AIProviderResult> {
    const start = Date.now();
    console.log("Calling Gemini...");
    try {
        const genAI = new GoogleGenerativeAI(getSecret("GEMINI_API_KEY"));
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent(query);
        const text = result.response.text();
        return { id: 'gemini', name: 'Gemini 1.5 Flash', content: text, status: 'success', latency: Date.now() - start };
    } catch (error: any) {
        console.error("Gemini Error:", error.message);
        return { id: 'gemini', name: 'Gemini 1.5 Flash', content: null, status: 'failure', latency: Date.now() - start };
    }
}

// 2. OPENROUTER PROVIDER (Simplified logic that matched debug script)
export async function callOpenRouter(query: string): Promise<AIProviderResult> {
    const start = Date.now();
    console.log("Calling OpenRouter...");
    try {
        const openai = new OpenAI({
            baseURL: "https://openrouter.ai/api/v1",
            apiKey: getSecret("OPENROUTER_API_KEY"),
        });

        const completion = await openai.chat.completions.create({
            model: "mistralai/mistral-7b-instruct",
            messages: [{ role: "user", content: query }],
        });

        const text = completion.choices[0].message.content || "";
        console.log("OpenRouter Success, length:", text.length);
        return { id: 'openrouter', name: 'Mistral 7B (OpenRouter)', content: text, status: 'success', latency: Date.now() - start };
    } catch (error: any) {
        console.error("OpenRouter Error:", error.message);
        return { id: 'openrouter', name: 'Mistral 7B (OpenRouter)', content: null, status: 'failure', latency: Date.now() - start };
    }
}

// 3. HUGGING FACE PROVIDER
export async function callHuggingFace(query: string): Promise<AIProviderResult> {
    const start = Date.now();
    console.log("Calling HF...");
    try {
        const hf = new HfInference(getSecret("HUGGINGFACE_API_KEY"));
        const result = await hf.textGeneration({
            model: "meta-llama/Meta-Llama-3-8B-Instruct",
            inputs: `[INST] ${query} [/INST]`,
            parameters: { max_new_tokens: 500 }
        });
        const text = result.generated_text.replace(`[INST] ${query} [/INST]`, "").trim();
        return { id: 'huggingface', name: 'Llama 3 (HF)', content: text, status: 'success', latency: Date.now() - start };
    } catch (error: any) {
        console.error("HF Error:", error.message);
        return { id: 'huggingface', name: 'Llama 3 (HF)', content: null, status: 'failure', latency: Date.now() - start };
    }
}
