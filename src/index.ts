import "dotenv/config";
import { scanProject } from "./scanner.js";
import { generateReadme } from "./ai.js";
import fs from "fs";

async function main() {
    console.log("Starting CLI...");

    const projectPath = process.argv[2] || ".";

    console.log("Scanning project...");

    const docs = await scanProject(projectPath);

    console.log("Generating README with AI...\n");

    const readme = await generateReadme(docs.join("\n"));

    fs.writeFileSync("README.md", readme ?? "");

    console.log("README.md generated with success!");
}

main();
