const path = require('path');
const config = {
    gm: {
        entry: [
            './src/layouts/default/index.js',
            './src/layouts/at/index.js',
            './src/layouts/waf/index.js'
        ],
        output: {
            path: path.resolve(__dirname, '../dist/GM'),
            filename: 'bundle.[hash].js'
        }
    },
    //
    waf: {
        entry: [
            './src/layouts/at/index.js',
            './src/layouts/waf/index.js'
        ],
        output: {
            path: path.resolve(__dirname, '../dist/WAF'),
            filename: 'bundle.[hash].js'
        }
    },
    at: {
        entry: [
            './src/layouts/at/index.js',
        ],
        output: {
            path: path.resolve(__dirname, '../dist/AT'),
            filename: 'bundle.[hash].js'
        }
    }
}

module.exports = config;
