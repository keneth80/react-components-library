const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');
const Dotenv = require('dotenv-webpack');

module.exports = merge(common, {
    mode: 'production',
    entry: path.resolve(__dirname, './src/index.ts'), // 배포용 진입점
    plugins: [
        new Dotenv({
            path: './.env.production',
        }),
    ],
});
