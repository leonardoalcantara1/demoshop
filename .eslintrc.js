module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"]
      }
    }
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'import'
  ],
  rules: {
    "no-console": 0,
    "react/prop-types": 0,
    "arrow-parens": 0,
    "react/jsx-props-no-spreading": 0,
    "import/prefer-default-export": 0
  },
};
