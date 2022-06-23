const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  "^variables$": "variables/dist/cjs",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  transform: {},
  moduleNameMapper: {
    "\\.(scss|sass|css)$": "identity-obj-proxy",
  },
  verbose: true,
  testEnvironment: "jest-environment-jsdom",
  // transformIgnorePatterns: ["node_modules/(?!variables/.*)"],
};

module.exports = createJestConfig(customJestConfig);
