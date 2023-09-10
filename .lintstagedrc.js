module.exports = {
  // Type check TypeScript files - currently disabled due to versioning problems with TypeScript
  // 'src/**/*.(ts|tsx)': (filenames) => `npx tsc --noEmit ${filenames.join(" ")}`,

  // Lints and formats all staged files under src/ with ESLint and Prettier
  "src/**/*.(ts|tsx|js)": (filenames) => [
    `npx eslint ${filenames.join(" ")}`,
    `npx prettier --write ${filenames.join(" ")}`
  ],

  // Formats all staged files under /*.md and /*.json with Prettier
  "**/*.(md|json)": (filenames) => `npx prettier --write ${filenames.join(" ")}`
};
