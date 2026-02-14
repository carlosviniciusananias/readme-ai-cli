import fs from "fs";

export function analyzeProject(files: string[], root: string) {
    const pkgPath = `${root}/package.json`;

    let packageJson: any = null;

    if (fs.existsSync(pkgPath)) {
        packageJson = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));
    }

    return {
        name: packageJson?.name || "Unknown project",
        dependencies: packageJson?.dependencies || {},
        scripts: packageJson?.scripts || {},
        fileCount: files.length,
    };
}
