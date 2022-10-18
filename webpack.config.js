const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    entry: {
        Simple: './src/Simple/Index.ts',
        SimpleReact: './src/SimpleReact/Index.jsx',
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js']
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/public',
        library: {
            type: "module"
        }
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/static', to: 'static' }
            ]
        })
    ],
    optimization: {
        minimize: false,
        minimizer: [
          new TerserPlugin({
            exclude: /static/,
          }),
        ],
    },
    experiments: {
        outputModule: true
    }
};