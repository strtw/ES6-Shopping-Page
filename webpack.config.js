const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');


module.exports = {
    entry: './src/index.js',
    devtool: 'inline-source-map',
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    optimization:{
      minimizer: [new OptimizeCssAssetsPlugin({
       // assetNameRegExp: /\.optimize\.css$/g,
        cssProcessor: require('cssnano'),
        cssProcessorPluginOptions: {
          preset: ['default', { discardComments: { removeAll: true } }],
        },
        canPrint: true
      })],
    },
    plugins: [
      new TerserJSPlugin({}),
      new MiniCssExtractPlugin({
        filename: 'main.min.css',
      }),
      
    ],
    module: {
        rules: [
          {
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          },
          {
            test: /\.css$/,
            use: [
            MiniCssExtractPlugin.loader,
              'css-loader'
            ]
          }
        ]
      },
     
      resolve: {
        extensions: ['*', '.js']
      },
    devServer: {
      contentBase: './dist',
    },
  };



