const path = require('path');

module.exports = {
    mode: 'development',
    target: 'node',
    entry: './src/client.js',
    output: {
        filename: 'client_bundle.js',
        path: path.resolve(__dirname, 'build/public'),
        publicPath: '/build/public'
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
}