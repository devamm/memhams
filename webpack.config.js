const path = require('path');

module.exports = {
  entry: [
    '@babel/polyfill',
    './src/main/resources/static/JS/index.js'
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
         use: ['style-loader', 'css-loader']
      } 
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: path.join(__dirname, '/src/main/resources/static/build'),
    filename: 'bundle.js'
  }
};
