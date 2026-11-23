module.exports = {
  root: true,
  env: { browser: true, es2022: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    // Proyecto en JavaScript sin PropTypes.
    'react/prop-types': 'off',
    // Los proveedores de contexto exportan también su hook (useSound, useProgress).
    'react-refresh/only-export-components': 'off',
  },
  overrides: [{ files: ['.eslintrc.cjs'], env: { node: true } }],
};
