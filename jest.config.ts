import nextJest from 'next/jest';
import type { Config } from 'jest';

// Create a custom Jest config using Next.js settings
const createJestConfig = nextJest({
  dir: './', // path to your Next.js app (usually root)
});

const customJestConfig: Config = {
  testEnvironment: 'jsdom',
  clearMocks: true,
  coverageProvider: 'v8',
};

export default createJestConfig(customJestConfig);
