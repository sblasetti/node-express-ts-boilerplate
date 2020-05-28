const common = require('./webpack.common.config.js');

const devConfig = {
    mode: 'development',
    devtool: 'inline-source-map',
};

module.exports = [
    {
        // common api config
        ...common[0],
        ...devConfig,
    },
    {
        // common web config
        ...common[1],
        ...devConfig,
    },
];
