const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");

module.exports={
    entry: './src/index.js',
    output: {
        path: path.join(__dirname,'/dist'),
        filename: "./bundle.js"
    },
    module: {
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader'],
            },
            {
                test: /\.(png|jp?g|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {plugin:['lodash']}

                },
            ],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },

    devServer: {
        historyApiFallback: true,
    },
    plugins:[
        new HtmlWebpackPlugin({
            title: 'Production',
            template: './src/index.html',
        }),
        new CaseSensitivePathsPlugin(),
    ]
}
