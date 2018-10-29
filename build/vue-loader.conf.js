'use strict'
const styleLoader = require('./style-loader')
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    loaders: styleLoader.cssLoader({
        sourceMap: !isProd,
        extract: isProd
    }),
    transformToRequire: {
        video: 'src',
        source: 'src',
        img: 'src',
        image: 'xlink:href'
    }
}

// const ExtractTextPlugin = require('extract-text-webpack-plugin')

// let loaders = {}
// if (process.env.NODE_ENV === 'production') {
//   loaders = {
//     css: ExtractTextPlugin.extract({ fallback: 'vue-style-loader', use: 'css-loader' }),
//     less: ExtractTextPlugin.extract({ fallback: 'vue-style-loader', use: 'css-loader!less-loader' })
//   }
// } else {
//   loaders = {
//     css: 'vue-style-loader!css-loader',
//     less: 'vue-style-loader!css-loader!less-loader'
//   }
// }
// module.exports = {
//   loaders
// }
