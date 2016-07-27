module.exports = {
  root: true,
  extends: [
    'standard',
    'standard-react',
  ],
  parser: 'babel-eslint',
  plugins: [
    'ava',
    'react',
  ],
  env: {
    browser: true,
    node: true,
    mocha: true,
  },
  ecmaFeatures: {
    jsx: true,
    es6: true,
    classes: true,
  },
  'rules': {
    'arrow-parens': 0,
    'comma-dangle': [1, 'always-multiline'],
    'no-underscore-dangle' : 0,
    'max-len': [1, 180, 4],
    'arrow-body-style': [0],
    'react/jsx-no-bind': [0],
    'import/no-unresolved': [0] // Until import plugin supports webpack 2 resolveModules
  }
}