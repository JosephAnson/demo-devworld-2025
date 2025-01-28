import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  antfu({
    vue: true,
    markdown: true,
    stylistic: true,
    typescript: true,
    standalone: false,
    rules: {
      'ts/strict-boolean-expressions': 'off',
    },
  }),
)
