module.exports = {
  plugins: ['import', '@typescript-eslint', '@stylistic'],
  extends: ['plugin:@stylistic/recommended'],
  rules: {
    '@stylistic/padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
      { blankLine: 'always', prev: ['case', 'default'], next: '*' },
      { blankLine: 'always', prev: '*', next: ['const', 'let', 'var', 'function'] },
      { blankLine: 'always', prev: '*', next: 'return' }
    ]
  }
};
