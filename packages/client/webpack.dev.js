const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack');
require('dotenv').config() 
const path = require('path')

if (!process.env.FOOD_URL) {
  console.error('please add FOOD_URL config to .env')
  process.exit(1);
}

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      { test: /\.(tsx?$)/, loader: 'babel-loader' },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]-[local]-[hash:base64:6]',
              camelCase: true
            }
          },
          { loader: 'sass-loader' }
        ]
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', 'scss' ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'}),
    new Dotenv()
  ]
}
