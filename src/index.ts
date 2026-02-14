import fs from "fs";
import path from "path";
import { scanProject } from "./scanner.js";
import { generateReadme } from "./ai.js";

async function main() {
    console.log("Starting...");

    const rootArg = process.argv[2] || ".";
    const root = path.resolve(rootArg);

    console.log("Scanning...");

    const docs = await scanProject(root);

    console.log("Generating...\n");

    const readme = await generateReadme(docs.join("\n"));

    const outputPath = path.join(root, "README.md");

    fs.writeFileSync(outputPath, readme);

    fs.writeFileSync("README.md", readme ?? "");

    console.log("README.md generated with success!");
}

main();
