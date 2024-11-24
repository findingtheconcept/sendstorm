module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: false,
    },
  },
  plugins: [
    '@typescript-eslint',
    'simple-import-sort',
    'import',
    'unicorn',
    'prettier',
    'unused-imports',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:unicorn/recommended',
    'prettier',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js', 'dist'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'prettier/prettier': [
      'error',
      {
        parser: 'typescript',
        singleQuote: true,
        tabWidth: 2,
        useTabs: false,
        semi: true,
        arrowParens: 'avoid',
        trailingComma: 'all',
        endOfLine: 'auto',
      },
    ],
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/filename-case': 'off',
    'unicorn/no-null': 'off',
    'unicorn/prefer-module': 'off',
    'unicorn/no-nested-ternary': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': 'off',
    'unicorn/prefer-switch': 'off',
    'unicorn/prefer-top-level-await': 'off',
    'unicorn/no-process-exit': 'off',
    'unicorn/prefer-string-replace-all': 'off',
    'unicorn/no-await-expression-member': 'off',
    'unicorn/prefer-ternary': 'off',
    'unicorn/no-static-only-class': 'off',
    'unicorn/prefer-array-some': 'off',
    'unicorn/no-array-reduce': 'off',
  },
};
