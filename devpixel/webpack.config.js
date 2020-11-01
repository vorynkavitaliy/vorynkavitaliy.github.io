const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    entry: './src/assets/scripts/index.js',
    output: {
        filename: 'bundle.[chunkhash].js',
        path: path.resolve(__dirname, 'public')
    },
    // devtool: "source-map",
    devServer: {
        port: 5000
    },
    plugins:[
        new HTMLPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            // {
            //     test: /\.js$/,
            //     include: path.resolve(__dirname, 'src/assets/scripts/'),
            //     use: {
            //         loader: 'babel-loader',
            //         options: {
            //             presets: 'env'
            //         }
            //     }
            // },
            // {
            //     test: /\.(sass|scss)$/,
            //     include: path.resolve(__dirname, 'src/assets/sass'),
            //     use: ExtractTextPlugin.extract({
            //         use: [
            //             {
            //                 loader: "css-loader",
            //                 options: {
            //                     sourceMap: true,
            //                     minimize: true,
            //                     url: false
            //                 }
            //             },
            //             {
            //                 loader: "sass-loader",
            //                 options: {
            //                     sourceMap: true
            //                 }
            //             }
            //         ]
            //     })
            // }
        ]
    }
}