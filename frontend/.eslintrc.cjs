module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
  ],
  "plugins": [
    "jest",
    "react"
  ],
  "overrides": [
    {
      "env": {
        "node": true
      },
      "files": [
        ".eslintrc.{js,cjs}"
      ],
      "parserOptions": {
        "sourceType": "script"
      }
    }
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "rules": { "indent": [
    "error",
    2
  ],
  'eqeqeq': 'error',
  'no-trailing-spaces': 'error',
  'object-curly-spacing': [
    'error', 'always'
  ],
  'arrow-spacing': [
    'error', { 'before': true, 'after': true }
  ],
  'no-console': 0,
  "react/jsx-uses-react": "off",
  "react/react-in-jsx-scope": "off",
  }
}
