import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** Resolves Figma Make exports: import x from "figma:asset/<hash>.png" */
export function figmaAssetPlugin() {
  const prefix = "figma:asset/";
  return {
    name: "figma-asset",
    resolveId(id) {
      if (id.startsWith(prefix)) {
        const file = id.slice(prefix.length);
        return path.resolve(__dirname, "src/assets/figma", file);
      }
    },
  };
}
