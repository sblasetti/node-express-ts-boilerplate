const common = require('./webpack.common.config.js');

const prodConfig = { mode: 'production' };

module.exports = [
    {
        // common api config
        ...common[0],
        ...prodConfig,
    },
    {
        // common web config
        ...common[1],
        ...prodConfig,
    },
];
