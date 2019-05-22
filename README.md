# TypeScript Workbench

Basic project configured to transpile TS to JS, bundle the JS, start and Express server and re-transpile (build) the code on changes.

Run ```npm start``` to compile, start the server and watch for changes.

## Default modules
- TypeScript
- Webpack + plugins (clean-webpack-plugin, copy-webpack-plugin) + loaders (ts-loader)
- Express
- Nodemon

## NPM scripts
- ```npm run build```: transpiles TS, bundles the JS in the /dist folder.
- ```npm run server```: starts Express to statically serve the /dist folder.
- ```npm start```: executes ```build``` and if successful, executes ```server```. Watches for changes and if any, runs both scripts again.
