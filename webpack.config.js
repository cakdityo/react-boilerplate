var webpack = require('webpack');

module.exports = {
    entry: [
        'script!jquery/dist/jquery.min.js',
        'script!bootstrap/dist/js/bootstrap.min.js',
        './app/app.jsx'
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    externals: {
        //moduleName: variable name available inside external script files
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
            //when you see variable $ and jQuery, we want to use jquery module
            '$': 'jquery',
            'jQuery': 'jquery'
        })
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                },
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!'
            },
            {
                test: /\.(ttf|eot|svg|woff2?)(\?[a-z0-9]+)?$/,
                loader: 'url?limit=10000&emitFile=false'
            }
        ]
    }
}