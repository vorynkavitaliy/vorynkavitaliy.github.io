const isDev = process.env.NODE_ENV !== 'production'
const sortMediaQueries = require('postcss-sort-media-queries')
const combineMediaQueries = require('postcss-combine-media-query')
const extractMediaQueries = require('postcss-extract-media-query')
const postcssPreset = require('postcss-preset-env')

module.exports = {
    plugins: [
        !isDev &&
            postcssPreset({
                browsers: ['ie >= 8', 'last 4 version'],
                stage: 0,
            }),
        !isDev && combineMediaQueries(true),
        !isDev &&
            extractMediaQueries({
                stats: true,
                extractAll: false,
            }),
        !isDev &&
            sortMediaQueries({
                sort: 'mobile-first',
            }),
    ],
    sourceMap: true,
}
