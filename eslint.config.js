// @ts-check
const antfu = require('@antfu/eslint-config').default

module.exports = antfu(
  {
    ignores: [
      // eslint ignore globs here
    ],
  },
  {
    rules: {
      // overrides
      'ts/no-require-imports': 'off',
      'ts/no-var-requires': 'off',
      'no-console': 'off',
    },
  },
)
