import { cp, copyFile, mkdir } from "node:fs/promises";

await cp("dist/sreeja_vaddi_portfolio", "dist/server", { recursive: true });
await mkdir("dist/.openai", { recursive: true });
await copyFile(".openai/hosting.json", "dist/.openai/hosting.json");
