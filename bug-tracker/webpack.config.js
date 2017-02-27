module.exports = {
  entry: './src/components/index.js',
  output: { path: __dirname + '/public', filename: 'hello.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
