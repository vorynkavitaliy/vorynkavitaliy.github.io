const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        filename: 'bundle.[chunkhash].js',
        path: path.resolve(__dirname, 'public')
    },
    devServer: {
        port: 3000
    },
    plugins:[
        new HTMLPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin()
    ],
    devtool: 'inline-source-map',
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
          {
              test: /\.s[ac]ss$/i,
              use: [
                'style-loader',
                'css-loader',
                {
                  loader: 'sass-loader',
                  options: {
                    // Prefer `dart-sass`
                    implementation: require('sass'),
                  },
                },
              ],
          },

          {
              // Fonts
              test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
              loader: 'file-loader',
              options: {
                name: `[name].[ext]`,
                outputPath: '/assets/fonts/',
              },
            },
            {
              test: /\.(png|jpg|gif|svg)$/,
              use: [
                {
                  loader: 'file-loader',
                  options: {
                    // esModule: false,
                    name: 'images/[name].[ext]',
                    // outputPath: '/assets/images/',
                  },
                },
              ],
            },
        ]
    }
}