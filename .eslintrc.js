module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
    './.eslintrc-auto-import.json',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  rules: {
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-unused-vars': ['error'],
    semi: [2, 'always'],
    indent: ['error', 2, { SwitchCase: 1 }],
    'no-trailing-spaces': "error",
    'no-shadow': ['error', { allow: ['state'] }],
    'no-param-reassign': [2, { props: false }],
    'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }],
    'vue/no-v-for-template-key': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/valid-v-slot': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-reserved-component-names': 'off',
    'vue/no-v-text-v-html-on-component': 'off',
    'vue/max-len': [
      'error',
      {
        code: 120,
        template: 140,
        ignoreComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
  },
};
