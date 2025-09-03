const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './src/index.ts'),
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: 'auto',
    },
    resolve: {
        extensions: ['.jsx', '.js', '.tsx', '.ts', '.css'],
    },
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
