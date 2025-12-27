const OpenAI = require("openai");

async function test() {
    try {
        console.log("Testing OR...");
        const openai = new OpenAI({
            baseURL: "https://openrouter.ai/api/v1",
            apiKey: "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",
        });
        const completion = await openai.chat.completions.create({
            model: "mistralai/mistral-7b-instruct",
            messages: [{ role: "user", content: "Test query" }],
        });
        console.log("Success:", completion.choices[0].message.content);
    } catch (e) {
        console.error("Fail:", e.message);
    }
}

test();
