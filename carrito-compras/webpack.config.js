const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    publicPath: 'http://localhost:3002/', // Asegúrate de que este es el puerto correcto
    filename: 'main.js',
    clean: true,
  },
  
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    port: 3002,
    historyApiFallback: true, // Permite la navegación en el lado del cliente
  },
};
