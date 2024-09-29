const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devServer: {
    port: 3001,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'catalogoProductos',
      filename: 'remoteEntry.js',
      exposes: {
        './Catalogo': './src/Catalogo',
      },
      shared: ['react', 'react-dom'],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
