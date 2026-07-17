const API_KEY = "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";

async function generateText() {

    const lines = document.getElementById("lineCount").value;
    const language = document.getElementById("language").value;

    const masterPrompt = `Write a completely natural and human-sounding customer review for astrologer Dr Dashrath Rao Guruji (Sri Sai Samarth Astrology, Pune) based only on a genuine customer experience.

Business details:

35+ years of experience in Vedic Astrology and spiritual guidance.
Expertise in Horoscope Reading, Kundali Analysis, Numerology, Vastu Shastra, Face Reading, Marriage & Relationship guidance, Career & Business Astrology, and spiritual remedies.
Helps people with love issues, marriage problems, husband-wife disputes, career confusion, business growth, financial instability, family issues, and vastu-related concerns.
Known for practical remedies, accurate guidance, approachable nature, and detailed consultations.

Review requirements:

The review must sound like a real person sharing their own experience.
Avoid marketing language, promotional slogans, or AI-style wording.
Use conversational and emotional language where appropriate.
Mention specific situations such as career confusion, marriage delay, business problems, family stress, financial issues, home vastu concerns, or relationship challenges only if relevant to the reviewer's experience.
The review should feel personal and believable rather than generic praise.
Include both positive aspects and realistic details about the consultation process if applicable.
Use simple and natural wording that ordinary people use in daily life.
Generate reviews of varying lengths:
Very short (1 line)
Short (2-3 lines)
Medium (4-5 lines)
Support multiple languages and styles:
English
Hindi
Hinglish
Marathi
Ensure every review feels unique in vocabulary, sentence structure, and experience.
Avoid repetitive phrases such as 'highly recommended', 'best astrologer', or 'excellent service' unless they naturally fit the reviewer's experience.
The final output should read exactly like feedback written by an actual customer after a real consultation.
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
