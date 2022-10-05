const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    menuPage: './src/menuPage.js',
    onLoad: './src/onLoad.js',
    eventListeners: './src/eventListeners.js',
    contactPage: './src/contactPage.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Nadis Kitchen',
      favicon: './src/food.svg',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  output: {
    filename: '[name].main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};
