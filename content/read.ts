import { readFile } from "node:fs/promises";
import path from "node:path";

/** content/<folder>/<name>.md, or null if there's no such file. */
export async function readContentFile(folder: "pages" | "courses", name: string): Promise<string | null> {
  if (!/^[\w-]+$/.test(name)) return null;
  try {
    return await readFile(path.join(process.cwd(), "content", folder, `${name}.md`), "utf8");
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return null;
    throw error;
  }
}
