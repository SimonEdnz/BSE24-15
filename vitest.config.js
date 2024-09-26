import { defineConfig } from "vitest/config";
//vitest to run tests
export default defineConfig({
  test: {
    include: ["src/routes/**/*.test.js"],
    setupFiles: ["src/test/setup.js"],
  },
});
