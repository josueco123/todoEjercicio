const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',  
  module: {
         rules: [
           {
             test: /\.css$/,
             use: [
               'style-loader',
               'css-loader',
             ],
           },
           {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
              'file-loader',
            ],
          },
         ],
       },
       plugins: [new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: './index.html'
       })],   
};