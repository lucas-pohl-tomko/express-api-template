const CopyPlugin = require('copy-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = (env) => {
    return {
        target: 'node',
        node: {
            __dirname: true,
            fs: 'empty',
        },
        entry: {
            index: ['./index.js'],
        },
        output: {
            filename: '[name].js',
            publicPath: './',
        },
        optimization: {
            minimize: false,
        },
        module: {
            exprContextCritical: false,
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: [
                                    [
                                        '@babel/preset-env',
                                        {
                                            targets: {
                                                node: 'current',
                                            },
                                        },
                                    ],
                                ],
                            },
                        },
                    ],
                },
            ],
        },
        resolve: {
            extensions: ['.js', '.json', '.ts', '.node', '.dll'],
        },
        plugins: [
            new CopyPlugin([{ from: './config', to: './config' }]),
            new UglifyJSPlugin({
                parallel: 4,
                sourceMap: true,
                uglifyOptions: {
                    ie8: false,
                    mangle: {
                        keep_fnames: true,
                    },
                },
            }),
        ],
    }
}
