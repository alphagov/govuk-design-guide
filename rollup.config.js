const babel = require('@rollup/plugin-babel')
const commonjs = require('@rollup/plugin-commonjs')
const resolve = require('@rollup/plugin-node-resolve')
const terser = require('@rollup/plugin-terser')
const { defineConfig } = require('rollup')

/**
 * Rollup config
 */
module.exports = defineConfig({
  input: 'docs/javascripts/application.mjs',
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'application',
    file: '_site/assets/javascripts/application.bundle.js',
  },

  // Input plugins
  plugins: [
    terser(),
    resolve(),
    commonjs(),
    babel({
      babelHelpers: 'bundled'
    })
  ]
})
