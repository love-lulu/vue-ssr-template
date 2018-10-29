const path = require('path')
const webpack = require('webpack')
const baseConfig = require('../config').base
const vueConfig = require('./vue-loader.conf.js')
const isProd = process.env.NODE_ENV === 'production'
const resolve = dir => path.join(__dirname, '..', dir)
const assetsPath = dir => path.posix.join(baseConfig.assetsPath, dir)


module.exports = {
  mode: isProd ? 'production':'development',
  devtool: '#source-map',
  //配置模块如何被解析
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: [".js", ".vue", ".json"],// 自动解析文件扩展名(补全文件后缀)(从左->右)
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'src': resolve('src'),
      'components': resolve('src/components'),
      'assets': resolve('src/assets'),
      'views': resolve('src/views'),
      'store': resolve('src/store')
    }
  },
  output: {
    path:  resolve('../output'),
    publicPath: baseConfig.publicPath,
    filename: '[name]-[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/, //资源路径
        loader: 'babel-loader', //该路径执行的loader
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        include: resolve("src"),
        options: vueConfig
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        include: [resolve('src/icons')]
      },

      {
        test: /\.(png|jpe?g|gif|svg|ico)(\?.*)?$/,
        loader: 'url-loader',
        exclude: [resolve('src/icons')],
        options: {
          limit: 10000,
          name: assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}
