const path = require('path');
const NODE_ENV = process.env.NODE_ENV; // 获取环境变量
const isProd = NODE_ENV === 'production';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 每次构建清除上一次打包出来的文件
const nodeExternals = require('webpack-node-externals');
const plugins = isProd ? [new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
    template: 'examples/src/template/index.html',
    fileName: 'index.html',
    inject: true
}),
new copyWebpackPlugin({
    patterns: [{
        from: path.resolve(__dirname, 'examples/src/static'),
        to:'static'
    }]
})] : [
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
    template: 'examples/src/template/index.html'
  }),
  new copyWebpackPlugin({
    patterns: [{
      from: path.resolve(__dirname, 'examples/src/static'),
      to: 'static'
    }]
  })
]

module.exports = {
  mode: isProd ? 'production' : 'development',
  entry: './examples/src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './examples/build'),
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
    static: ['build'],
  },
  externals: [], // nodeExternals 使得打包的组件中不包括任何 node_modules 里面的第三方组件，起到减小体积的作用。
  plugins,
};