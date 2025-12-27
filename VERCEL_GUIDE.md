# How to Add Environment Variables in Vercel

To make your AI Engine work online, Vercel needs your API keys.

## Step 1: Find Your Keys Locally
1. In VS Code, look at the file explorer on the left.
2. Open the file named `.env.local`.
3. You will see 3 lines like `GEMINI_API_KEY=AIza...`. Keep this file open.

## Step 2: Go to Vercel
1. Go to your [Vercel Dashboard](https://vercel.com/dashboard).
2. Click on your project (**CogniFlow-Consensus**).
3. Click the **Settings** tab (top navigation).
4. Click **Environment Variables** (left sidebar).

## Step 3: Add the Variables
Copy and paste the **Key** and **Value** for each one:

### Variable 1
- **Key:** `GEMINI_API_KEY`
- **Value:** *(Copy the long string starting with `AIza` from your .env.local file)*

### Variable 2
- **Key:** `OPENROUTER_API_KEY`
- **Value:** *(Copy the long string starting with `sk-or-v1-b660...` from your .env.local file)*

### Variable 3
- **Key:** `HUGGINGFACE_API_KEY`
- **Value:** *(Copy the long string starting with `hf_` from your .env.local file)*

---
**After adding all 3:**
1. Go to the **Deployments** tab.
2. Click the **three dots** on the latest deployment -> **Redeploy**.
3. Your app is now live!
