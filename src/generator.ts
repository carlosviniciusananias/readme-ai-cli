import fs from "fs";

export function saveReadme(root: string, content: string) {
    fs.writeFileSync(`${root}/README.generated.md`, content);
}
