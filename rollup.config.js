import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import { defineConfig } from 'rollup'

/**
 * Rollup config
 */
export default defineConfig({
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