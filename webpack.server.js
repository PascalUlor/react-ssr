const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
    mode: 'development',
    target: 'node',
    entry: './src/server.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/build'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: '/node_modules',
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            // '@babel/preset-env',
                            '@babel/preset-react',
                            ['@babel/preset-env', {
                                /* … */
                                targets: { browsers: ['last 2 versions']}
                            }]
                            // ['env', {
                            //     target: { browsers: ['last 2 versions']}
                            // }]
                        ]
                    }
                },
            }
        ]
    },
    externals: [webpackNodeExternals()]
}