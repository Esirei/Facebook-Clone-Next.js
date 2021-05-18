module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },

  extends: [
    'plugin:prettier/recommended', // Prettier rules
    'plugin:react/recommended', // React rules
    'plugin:react-hooks/recommended', // React hooks rules
    'plugin:jsx-a11y/recommended', // Accessibility rules
  ],

  plugins: ['react', 'react-hooks', 'jsx-a11y'],

  settings: {
    react: {
      version: 'detect',
    },
  },

  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint/eslint-plugin'],
      rules: {
        'react/prop-types': 0,
        '@typescript-eslint/no-unused-vars': [2, { argsIgnorePattern: '^_' }],
        'no-unused-vars': 0,
      },
    },
  ],

  rules: {
    'react/react-in-jsx-scope': 0, // NextJS does not require it
    'react-hooks/exhaustive-deps': 2,
    'jsx-a11y/anchor-is-valid': 0, // This rule is not compatible with NextJS's <Link /> components
  },
};
