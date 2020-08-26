var path = require('path');

module.exports = {
    mode: 'production',
    entry: ['./index.js', './scss/main.scss'],
    output: {
        filename: 'enim.min.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'enim.min.css'
                    }
                }, 'sass-loader'],
            },
        ],
    },
};





