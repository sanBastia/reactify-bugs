module.exports = {
  entry: [
    './src/index.jsx'
  ],resolve: {
    extensions: ['.js', '.jsx', '.json']
  }, output: {
    filename: 'public/bundle.js'
  },module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader'
    }]
  }
}
