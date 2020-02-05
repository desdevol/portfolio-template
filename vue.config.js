module.exports = {
    pluginOptions: {
        quasar: {
            importStrategy: "kebab",
            rtlSupport: false
        }
    },
    transpileDependencies: ["quasar"],
    chainWebpack: config => {
        // Pug Loader
        config.module
            .rule("pug")
            .test(/\.pug$/)
            .use("pug-plain-loader")
            .loader("pug-plain-loader")
            .end();
    }
};
