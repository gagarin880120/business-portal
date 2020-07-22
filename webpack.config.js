const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: ['react-hot-loader/patch', './src/index.tsx'],
  mode: 'development',
  devServer: {
    contentBase: './dist',
    port: 8000,
    hot: true,
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader',
        options: {
          context: path.resolve(__dirname, 'src'),
          name: '[path][name].[ext]',
        },
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        loader: 'file-loader',
        options: {
          context: path.resolve(__dirname, 'src'),
          name: '[path][name].[ext]',
        },
      },
    ],
  },
  resolve: { extensions: ['.ts', '.tsx'] },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
};
