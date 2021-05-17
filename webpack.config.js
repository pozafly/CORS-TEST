const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'none',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    port: 8080,
    open: true,
    // before: (app, server, compiler) => {
    //   app.get('/api/keywords', (req, res) => {
    //     res.json([
    //       { keyword: 'apple' },
    //       { keyword: 'banana' },
    //       { keyword: 'carrot' },
    //       { keyword: 'grape' },
    //     ]);
    //   });
    // },
    // proxy: {
      // '/api': {
      //   target: 'http://localhost:3000',
      //   changeOrigin: true,
      // },
    // },
  },
  plugins: [
    new HtmlWebpackPlugin({
      // index.html 템플릿을 기반으로 빌드 결과물을 추가해줌
      template: 'src/index.html',
    }),
  ],
};