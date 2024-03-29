const path = require('path');
const webpack = require('webpack');

module.exports ={
    mode: 'development',
    devtool: 'eval' , // hidden-source-map (production)
    resolve: {
        extensions: ['.jsx', '.js'],
    },

    entry:{
        app:'./client',
    },
    module:{
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            options: {
                presets:[
                    ['@babel/preset-env', {
                        targets: {
                            browsers: ['> 1% in KR'] // browerslist
                        },
                        debug: true,
                    }], 
                    '@babel/preset-react'
                ],
                plugins:[],
            },
        }],
    },

    plugins: [
        new webpack.LoaderOptionsPlugin({ debug: true}),
    ],

    output:{
        filename:'app.js',
        path: path.join(__dirname, 'dist'),
    },
}

// plugin을 설정하기 위해서는 webpack을 불러와야 한다.