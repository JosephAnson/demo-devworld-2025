import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  markdown: true,
  stylistic: true,
  typescript: true,
  standalone: false,
  rules: {
    'ts/strict-boolean-expressions': 'off',
    'no-console': 'off',
  },
})
