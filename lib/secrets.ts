// lib/secrets.ts
// 🔐 SECURE KEY MANAGEMENT
// This module simulates a secure// SECURE CONFIG
// Refactored to use Environment Variables for GitHub Security

export const AI_CONFIG = {
    GEMINI_API_KEY: process.env.GEMINI_API_KEY || "",
    OPENROUTER_API_KEY: process.env.OPENROUTER_API_KEY || "",
    HUGGINGFACE_API_KEY: process.env.HUGGINGFACE_API_KEY || ""
};

export const getSecret = (key: keyof typeof AI_CONFIG) => {
    if (typeof window !== 'undefined') {
        throw new Error("❌ SEGURITY ALERT: Attempted to access secrets from client-side!");
    }
    return AI_CONFIG[key];
};
