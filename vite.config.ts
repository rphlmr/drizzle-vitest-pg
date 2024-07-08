/// <reference types="vitest" />

// Configure Vitest (https://vitest.dev/config/)
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vite";

export default defineConfig({
  test: {
    setupFiles: ["./test/setup.ts"],
  },
  plugins: [tsconfigPaths()],
});
