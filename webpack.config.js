var path = require('path');

module.exports = {
    entry: './app/app.jsx',
    output: {
        filename: './public/bundle.js'
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            },
            exclude: /(node_modules|bower_components)/
        },
        {
            test: /\.json$/,
            loader: 'json-loader'
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            Main: path.join(__dirname, 'app/components/Main'),
            Nav: path.join(__dirname, 'app/components/Nav'),
            Weather: path.join(__dirname, 'app/components/Weather'),
            WeatherForm: path.join(__dirname, 'app/components/WeatherForm'),
            WeatherMessage: path.join(__dirname, 'app/components/WeatherMessage'),
            About: path.join(__dirname, 'app/components/About'),
            Examples: path.join(__dirname, 'app/components/Examples'),
            OpenWeatherMap: path.join(__dirname, 'app/api/OpenWeatherMap')
        }
    },
    node: {
        console: true,
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    },
    devtool: 'cheap-module-eval-source-map'
}