module.exports = {
    entry: "./app/components/index.js",
    output: {
        filename: "../static/talkToMe/bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                }
            },
            {
                test: /\.css$/, 
                loader: 'style-loader!css-loader'
            }
        ]
    }
}