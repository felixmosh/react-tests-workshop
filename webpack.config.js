const Dotenv = require('dotenv-webpack');
const path = require('path');

const config = {
  mode: 'development',
  entry: ['./src/app.tsx'],

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/',
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },

  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[contenthash:6].[ext]',
              outputPath: 'assets/images',
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName:
                  process.env.NODE_ENV === 'production'
                    ? '[hash:base64:6]'
                    : '[path][name]__[local]--[hash:base64:5]',
              },
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
      },
    ],
  },

  plugins: [new Dotenv()],

  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
};

module.exports = config;
