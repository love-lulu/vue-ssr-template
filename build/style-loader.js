'use strict'
const path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

exports.cssLoader = function(opts) {
  function generateLoaders(loader, loaderOpts) {
    const loaders = [ 
      { 
        loader: 'css-loader',
        options: {
            minimize: process.env.NODE_ENV === 'production',
            sourceMap: opts.sourceMap
        }
      }
    ]
    if (loader) { // 需要增加的loader
      loaders.push({
        loader: `${loader}-loader`,
        options: Object.assign({}, loaderOpts, {
            sourceMap: opts.sourceMap
        })
      })
    }
    return ['vue-style-loader'].concat(loaders)
    if (opts.extract) { //是否需要抽离css
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader',
        publicPath: '../../' //抽离出来的css 添加路径前缀, 让其打包出来的路径正确
      })
        
    }else{
      return ['vue-style-loader'].concat(loaders)
    }
  }
  
  return {
    css: generateLoaders(),
    less: generateLoaders('less')
  }
}

exports.styleLoader = function(opts) {
  const output = []
  const cssLoaders = exports.cssLoader(opts)
  for ( let extension in  cssLoaders) {
    let loader = cssLoaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'), //路径匹配
      use: loader
    })
  }
  return output
}