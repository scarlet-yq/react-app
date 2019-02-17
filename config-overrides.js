/*
const { injectBabelPlugin } = require('react-app-rewired');
const {
    override,
    fixBabelImports,
    // addLessLoader,
} = require("customize-cra");

module.exports = function override(config, env) {
    config = fixBabelImports(['import', { libraryName: 'antd', style: 'css' }], config);
    return config;
};*/



const {
    override,
    fixBabelImports,
    // addLessLoader,
} = require("customize-cra");


module.exports = override(
    fixBabelImports("import", {
        libraryName: "antd", libraryDirectory: "es", style: 'css' // change importing css to less
    }),
    // addLessLoader({
    //   javascriptEnabled: true,
    //   modifyVars: { "@primary-color": "#1DA57A" }
    // })
);
