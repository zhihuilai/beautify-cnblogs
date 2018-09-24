const devConfig = require('./config/webpack/webpack.dev.config');
const prodConfig = require('./config/webpack/webpack.product.config');

module.exports = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;
