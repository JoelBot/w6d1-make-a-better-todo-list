module.exports = {
    entry: {
        // react: './js/react.js',
        global: './js/global.js',
    },
    output: {
        path: './js/',
        publicPath: '/js/',
        filename: '[name].bundle.js',
    },
    devServer: {
        inline: true,
        port: 8080,
        historyApiFallback: true
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}
