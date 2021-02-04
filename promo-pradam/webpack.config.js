const path = require('path')
const fs = require('fs');
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

const mainPath = isDev ? 'dist' : 'public'
const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`

const PATHS = {
    js: 'js',
    img: `${mainPath}/img`,
    css: `css`
}

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: "all"
        }
    }

    if(isProd) {
        config.minimizer = [
            new OptimizeCssAssetWebpackPlugin(),
            new TerserWebpackPlugin()
        ]
    }

    return config
}



const plugins = () => {
    const base = [
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            minify: {
                collapseWhitespace: isProd
            }
        }),

        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: `${PATHS.css}/${filename('css')}`
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/assets/images'),
                    to: path.resolve(__dirname, PATHS.img)
                }
            ]
        }),
    ]

    // const PAGES_DIR = path.join(__dirname, 'src/pages')
    // const PAGES = fs.readdirSync(PAGES_DIR).filter( fileName => fileName.endsWith('.html'))

    // base.push( ...PAGES.map( page => {
    //     return new HTMLWebpackPlugin({
    //         filename: page,
    //         template: `./pages/${page}`,
    //         minify: {
    //             collapseWhitespace: isProd
    //         }
    //     })
    // }))

    return base
}

const cssLoaders = extra => {
    const loaders = [
        {
            loader: MiniCssExtractPlugin.loader,
            options: {
                publicPath: '/'
            },
        },
        'css-loader',
        {
            loader: 'postcss-loader',
            options: {
                postcssOptions: {
                    config: path.resolve(__dirname, "postcss.config.js")
                },
            },
        }
    ]

    if(extra) {
        loaders.push(extra)
    }

    return loaders
}

const babelOptions = preset => {
    const opts = {
        presets: [
            '@babel/preset-env'
        ],
        plugins: [
            '@babel/plugin-proposal-class-properties'
        ]
    }

    if (preset) {
        opts.presets.push(preset)
    }

    return opts
}

const jsLoaders = () => {
    const loaders = [
        {
            loader: 'babel-loader',
            options: babelOptions()
        }
    ]
    return loaders
}

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        index: ['@babel/polyfill', './index.js']
    },
    output: {
        filename: `${PATHS.js}/${filename('js')}`,
        path: path.resolve(__dirname, mainPath)
    },
    optimization: optimization(),
    devServer: {
        port: 4200,
        hot: true,
        contentBase: mainPath,
        liveReload: true,
        watchContentBase: true,
        publicPath: '/'
    },
    devtool: isDev && 'source-map',
    plugins: plugins(),
    resolve: {
        extensions: ['.js', '.png', '.jpg', '.svg', '.css', '.sass', '.scss'],
        alias: {
            '@': path.resolve(__dirname, 'src/assets')
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: cssLoaders()
            },
            {
                test: /\.s[ac]ss$/i,
                use: cssLoaders('sass-loader'),
            },

            {
                test: /\.(png|jpg|svg|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false,
                            name: '[name].[ext]',
                            outputPath: `/img`,
                        },
                    },
                ],
            },

            {
                test: /\.(ttf|woff|woff2|eot)$/i,
                use: ['file-loader']
            },

            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: jsLoaders()
            },
        ]
    }
}
