import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import banner2 from 'rollup-plugin-banner2';

const extensions = ['js', 'jsx', 'ts', 'tsx', 'mjs', 'cjs'];

const pkg = require('./package.json');

const config = [
    {
        external: [/node_modules/, 'react', 'react-dom', 'prop-types'],
        input: './src/index.ts',
        output: {
            dir: './dist',
            format: 'es',
            preserveModules: true,
            preserveModulesRoot: 'src',
            globals: {
                react: 'React',
                'react-dom': 'ReactDOM',
                'prop-types': 'PropTypes',
                'style-inject': 'styleInject',
            },
        },
        plugins: [
            nodeResolve({ extensions }),
            babel({
                exclude: 'node_modules/**',
                extensions,
                include: ['src/**/*'],
            }),
            commonjs({ include: 'node_modules/**' }),
            peerDepsExternal(),
            typescript({ tsconfig: './tsconfig.json' }),
            postcss({
                extract: false,
                inject: (cssVariableName) => `import styleInject from 'style-inject';\nstyleInject(${cssVariableName});`,
                modules: true,
                sourceMap: false,
                use: ['sass'],
            }),
            banner2(() => {
                return `'use client';
                `;
            }),
        ],
    },
];

export default config;
