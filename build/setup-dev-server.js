const fs = require('fs')
const path = require('path')
const MFS = require('memory-fs')
const webpack = require('webpack')
const clientConfig = require('./webpack.client.conf')
const serverConfig = require('./webpack.server.conf')
const webpackDevMiddleware = require('./koa/dev')
const webpackHotMiddleware = require('./koa/hot')

const readFile = (fs, file) => fs.readFileSync(path.join(clientConfig.output.path, file), 'utf-8')

module.exports = function setupDevServer(app, cb) {
  let bundle,
      ready,
      template,
      clientManifest
  const update = () => {
    if (bundle && template) {
      cb(bundle, {
          template,
          clientManifest
      })
    }
  }

  //客户端渲染部分
  // clientConfig.entry.app = ['webpack-hot-middleware/client?noInfo=true&reload=true', clientConfig.entry.app]
  clientConfig.output.filename = '[name].js'   //热更新不能跟 [chunkhash] 同用
  clientConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  )

  const clientCompiler = webpack(clientConfig)

  const devMiddleware = webpackDevMiddleware(clientCompiler, {
    publicPath: clientConfig.output.publicPath,
    stats: {
      colors: true,
      chunks: false
    },
    noInfo: true, // 显示无信息到控制台（仅警告和错误）
    serverSideRender: true //  关闭服务器端渲染模式。有关详细信息，请参阅服务器端渲染部分
  })
  app.use(devMiddleware)

  clientCompiler.plugin('done', stats => {
    const fs = devMiddleware.fileSystem
    stats = stats.toJson()
    stats.errors.forEach(err => console.error(err))
    stats.warnings.forEach(err => console.warn(err))
    if (stats.errors.length) return
    let filePath = path.join(clientConfig.output.path, 'index.html')

    if (fs.existsSync(filePath)) {
      template = fs.readFileSync(filePath, 'utf-8')
    }
    clientManifest = JSON.parse(readFile(
      fs,
      'vue-ssr-client-manifest.json'
    ))
    update()
  })

  app.use(webpackHotMiddleware(clientCompiler))

  //服务端渲染部分
  const serverCompiler = webpack(serverConfig)
  const mfs = new MFS()
  serverCompiler.outputFileSystem = mfs
  serverCompiler.watch({}, (err, stats) => {
    if (err) throw err
    stats = stats.toJson()
    stats.errors.forEach(err => console.error(err))
    stats.warnings.forEach(err => console.warn(err))
    bundle = JSON.parse(readFile(mfs, 'vue-ssr-server-bundle.json'))
    update()
  })
}
