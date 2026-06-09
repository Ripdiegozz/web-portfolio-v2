import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./test/setup.ts"],
    coverage: {
      provider: "v8",
      thresholds: {
        statements: 70,
        branches: 70,
        functions: 70,
        lines: 70,
      },
      exclude: [
        "node_modules/",
        ".astro/",
        "dist/",
        "test/",
        "**/*.test.*",
        "**/*.d.ts",
      ],
    },
  },
});
