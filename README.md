# TypeScript Workbench

Basic project configured to transpile TS to JS, bundle the JS, start and Express server and re-transpile (build) the code on changes.

To start, run ```npm start``` and ```npm watch``` in two differnt terminals.

## Default modules
- TypeScript
- Webpack + plugins (clean-webpack-plugin, copy-webpack-plugin) + loaders (ts-loader)
- Express
- Nodemon

## NPM scripts
- ```npm start```: transpiles TS, bundles the JS in a /dist folder and starts Express to statically serve that folder.
- ```npm run watch```: transpiles and re-bundles on each change in the /src folder.
