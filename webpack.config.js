const path = require('path');

module.exports = {
    mode: "development", //실서비스: production
    devtool: "eval", // hidden-source-map
    resolve: {
        extensions: ['.js', '.jsx']
    }, //확장자 생략방법
    entry: {
        app: ['./client.jsx', './WordChain.jsx']

    }, //입력
    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            options: {
                presets: [
                    '@babel/preset-env', '@babel/preset-react'
                ],
                plugins: ['@babel/plugin-proposal-class-properties']
            }
        }]
    },

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js'
    } // 출력
}