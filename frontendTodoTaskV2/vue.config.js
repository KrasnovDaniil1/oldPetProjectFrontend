const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
    devServer: {
        proxy: {
            '^/api': {
                target: 'http://localhost:4000/',
                changeOrigin: true,
            },
        },
    },
    transpileDependencies: true,
    pluginOptions: {
        i18n: {
            locale: 'ru',
            fallbackLocale: 'en',
            localeDir: 'locales',
            enableLegacy: true,
            runtimeOnly: false,
            compositionOnly: true,
            fullInstall: true,
        },
    },
});
