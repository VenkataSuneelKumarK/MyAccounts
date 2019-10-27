/**
 * Created by kanamars on 21/10/19.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    entry: './index.js',
    output:{
        path: path.resolve(__dirname , 'dist'),
        filename: 'bundle.js'
    },
    module:{
        rules:[
            {test : /\.(js)$/, use:'babel-loader'},
            {test : /\.css$/, use:['style-loader', 'css-loader', 'sass-loader']}
        ]
    },
    devServer: {
        historyApiFallback: true,
    },
    mode:"development",
    plugins : [
        new HtmlWebpackPlugin ({
            template : './index.html'
        })
    ]
};