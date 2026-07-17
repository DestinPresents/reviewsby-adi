const API_KEY = "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";

async function generateText() {

    const lines = document.getElementById("lineCount").value;
    const language = document.getElementById("language").value;

    const masterPrompt = `
Generate a completely unique greeting in ${language}.
Keep it exactly ${lines} line(s).
Follow the hidden master instructions here.
`;

    document.getElementById("output").innerText = "Generating...";

    try {

        const response = await fetch(
            "https://api.openai.com/v1/responses",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + API_KEY
                },
                body: JSON.stringify({
                    model: "gpt-5",
                    input: masterPrompt
                })
            }
        );

        const data = await response.json();

        document.getElementById("output").innerText =
            data.output?.[0]?.content?.[0]?.text ||
            "No response received";

    } catch (error) {

        document.getElementById("output").innerText =
            "Error: " + error.message;

    }
}
