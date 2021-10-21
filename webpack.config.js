const path = require('path');
const NODE_ENV = process.env.NODE_ENV; // 获取环境变量
const isProd = NODE_ENV === 'production';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 每次构建清除上一次打包出来的文件
const nodeExternals = require('webpack-node-externals');
const plugins = isProd ? [new CleanWebpackPlugin()] : [
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
    template: 'examples/public/index.html'
  }),
]

module.exports = {
  mode: isProd ? 'production' : 'development',
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
    libraryTarget: isProd ? 'umd' : undefined,  // 包需要被module.exports，这就要用到common
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@static': path.resolve(__dirname, 'src/static'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@server': path.resolve(__dirname, 'src/server')
    },
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(css|less)$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader', // translates CSS into CommonJS
        }, {
          loader: 'less-loader', // compiles Less to CSS
          options: {
           
            lessOptions: {
              // modifyVars: { '@primary-color': '#bbb' },
              javascriptEnabled: true
            }

          },
        }]
      }
    ]
  },
  devServer: {
    // contentBase: './dist',
    static: ['dist'],
  },
  externals: isProd ? [nodeExternals()] : [], // nodeExternals 使得打包的组件中不包括任何 node_modules 里面的第三方组件，起到减小体积的作用。
  plugins,
};