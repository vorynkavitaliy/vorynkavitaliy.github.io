const autoprefixer = require('autoprefixer')

module.exports = {
    plugins: [
        autoprefixer({
            Browserslist: {
                config: ['ie >= 8', 'last 4 version']
            }
        })
    ],
    sourceMap: true
}