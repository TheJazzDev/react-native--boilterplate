import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

export default [
   // Specify the files to lint
   { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },

   // Define global variables based on the environment
   { languageOptions: { globals: globals.browser } },

 // Include recommended ESLint rules
  pluginJs.configs.recommended,

  // Include recommended TypeScript ESLint rules
  ...tseslint.configs.recommended,

  // Include recommended React ESLint rules
  pluginReact.configs.flat.recommended,
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    ignores: [
      '**/temp.js',
      'config/*',
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/*.min.js',
      '**/coverage/**',
      '**/.expo/**',
      '**/.git/**',
      '**/babel.config.js',
      '**/metro.config.js',
      '**/jest.config.js',
      '**/storybook/**',
      '**/*.snap',
    ],
  },
];
