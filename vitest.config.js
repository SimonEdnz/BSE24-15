import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["src/routes/**/*.test.js"],
    setupFiles: ["src/test/setup.js"],
  },
});
