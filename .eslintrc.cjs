module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    /* 'import/no-unresolved': 'error',
    'import/order': 'warn', */
    'import/no-named-as-default-member': 'off',
    '@typescript-eslint/no-namespace': 'off',
    /* 'import/newline-after-import': ['error'], */
    'lines-between-class-members': ['error', 'always'],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': { typescript: {}, node: {} },
  },
}
