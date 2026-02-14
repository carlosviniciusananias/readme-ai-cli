export async function generateReadme(projectContent: string) {
    const response = await fetch("http://127.0.0.1:11434/api/generate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            model: "llama3:8b",
            prompt: `You are a senior software engineer. Generate a professional README.md for the project below: ${projectContent}`,
            stream: false,
        }),
    });

    const data = await response.json();

    if (data.error) {
        throw new Error(`Ollama error: ${data.error}`);
    }

    if (!data.response) {
        throw new Error("The model did not return any content.");
    }

    return data.response;
}
