const path = require('path')

module.exports = {
  entry: './source/client.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, '../built/static'),
  },
  module: {
    rules: [
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2016', 'es2017', 'react'],
            plugins: ['transform-es2015-modules-commonjs', 'transform-object-rest-spread'],
          },          
        },
      },
    ]
  },
  target: 'web',
}
