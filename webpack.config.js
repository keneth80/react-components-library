const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = (env, argv) => {
    const isDevelopment = argv.mode === 'development';
    return {
        entry: {
            // npm 패키지용 진입점 (별도로 번들링)
            lib: path.resolve(__dirname, './src/index.ts'),
        },
        mode: argv.mode,
        output: {
            filename: () => {
                // main과 lib 번들 파일명 분리
                return 'lib.js';
            },
            path: path.resolve(__dirname, './dist/mf'),
            libraryTarget: 'umd', // npm 패키지용 포맷
        },
        resolve: {
            extensions: ['.jsx', '.js', '.tsx', '.ts', '.css'],
        },
        devServer: isDevelopment
            ? {
                  static: path.join(__dirname, './dist/mf'),
                  port: 3300,
              }
            : undefined,
        module: {
            rules: [
                {
                    test: /\.(js|jsx|ts|tsx)$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-typescript'],
                    },
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader', 'postcss-loader'],
                },
            ],
        },
        plugins: [
            new Dotenv({
                path: isDevelopment ? './.env.development' : './.env.production',
            }),
            new ModuleFederationPlugin({
                name: 'zds',
                filename: 'remoteEntry.js',
                exposes: {
                    './FeButton': './src/components/button/FeButton.tsx',
                },
                shared: {
                    react: { singleton: true, requiredVersion: '18.2.0', eager: true },
                    'react-dom': { singleton: true, requiredVersion: '18.2.0', eager: true },
                },
            }),
        ],
    };
};
