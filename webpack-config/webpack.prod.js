const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const Dotenv = require('dotenv-webpack');

module.exports = merge(common, {
    mode: 'production',
    entry: '../src/index.ts', // 배포용 진입점
    plugins: [
        new Dotenv({
            path: '../.env.production',
        }),
    ],
});
