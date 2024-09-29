const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devServer: {
    port: 3000,
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
      name: 'hostApp',
      remotes: {
        catalogoProductos: 'catalogoProductos@http://localhost:3001/remoteEntry.js',
        carritoCompras: 'carritoCompras@http://localhost:3002/remoteEntry.js',
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
