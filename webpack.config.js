const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  context: `${__dirname}/dev`,
  entry: './main.js',
  output: {
    path: `${__dirname}/public`,
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: 'pug-loader?pretty=true',
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader', // creates style nodes from JS strings
        }, {
          loader: 'css-loader', // translates CSS into CommonJS
        }, {
          loader: 'sass-loader',
        }],
      },
      {
        test: /\.(png|jpg|gif|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: `${__dirname}/static`,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.pug',
      minify: false,
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};

module.exports = (env, argv) => {

  if (argv.mode === 'development') {
    config.devtool = 'source-map';
    config.watch = true;
  }
  if (argv.mode === 'production') {
  }
  return config;

};
