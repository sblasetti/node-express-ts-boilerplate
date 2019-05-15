const CopyPlugin = require('copy-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: "./src/index.ts",
    output: {
        path: __dirname + "/dist",
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
    plugins: [
        new CopyPlugin([{ from: 'src/static', to: '.' }]),
        new CleanPlugin()
    ],
    devtool: 'eval-source-map',
    module: {
        rules : [
            // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
            { 
                test: /\.tsx?$/, 
                use: ["ts-loader"], 
                exclude: /node_modules/ 
            }
        ]
    }
}