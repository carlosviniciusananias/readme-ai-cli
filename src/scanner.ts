import fs from "fs";
import path from "path";

const IGNORED = ["node_modules", ".git", "dist", "build"];

export function scanProject(root: string): string[] {
    function walk(dir: string, files: string[] = []) {
        const items = fs.readdirSync(dir);

        for (const item of items) {
            if (IGNORED.includes(item)) continue;

            const fullPath = path.join(dir, item);
            const stat = fs.statSync(fullPath);

            if (stat.isDirectory()) {
                walk(fullPath, files);
            } else {
                files.push(fullPath);
            }
        }

        return files;
    }

    return walk(root);
}
