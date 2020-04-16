import * as path from 'path'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'

const base = path.resolve(__dirname)
const tsconfig = path.join(base, 'tsconfig.json')

export default [
  {
    input: 'src/index.ts',
    output: {
      dir: './dist',
      entryFileNames: '[name].js',
      format: 'cjs',
      sourcemap: true,
    },
    plugins: [
      typescript({
        tsconfig,
      }),
      resolve(),
      commonjs({ extensions: ['.js', '.ts', '.mjs'] }),
    ],
  },
  {
    input: 'src/index.ts',
    output: {
      dir: './dist',
      entryFileNames: '[name].mjs',
      format: 'esm',
      sourcemap: true,
    },
    plugins: [
      typescript({
        tsconfig,
      }),
      resolve(),
      commonjs({ extensions: ['.js', '.ts', '.mjs'] }),
    ],
  },
]
