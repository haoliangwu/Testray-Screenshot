import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
var CopyWebpackPlugin = require('copy-webpack-plugin')
/**
 * @param {Object} config - webpack config which merged cli options and settings in package.json
 * @param {Object} options - cli arguments
 * @return {Object} config - new webpack config
 */
export default function (config, options) {
  // modify config can override everything defined via CLI and package.json
  config.entry = {
    index: ['./src/index.js'],
    option: ['./src/option.js']
  }

  config.watch = true

  config.output = {
    libraryTarget: 'var',
    filename: '[name].build.js',
    chunkFilename: '[chunkhash:8].[name].chunk.js',
    publicPath: '/',
    path: path.join(__dirname, 'build')
  }

  config.externals = {
    'jquery': 'jQuery',
    'react': 'React',
    'react-dom': 'ReactDOM',
    'react-bootstrap': 'ReactBootstrap'
  }

  config.plugins.push(
    new HtmlWebpackPlugin(
      Object.assign({}, {
        title: 'Testray Screenshot',
        filename: 'index.html',
        template: path.join(__dirname, 'template/index.jade'),
        inject: false
      })
    ),
    new HtmlWebpackPlugin(
      Object.assign({}, {
        title: 'Testray Screenshot',
        filename: 'option.html',
        template: path.join(__dirname, 'template/option.html'),
        inject: false
      })
    )
  )

  config.plugins.push(
    new CopyWebpackPlugin([
      {from: 'src/auth.js', to: 'auth.js'}
    ])
  )
}
