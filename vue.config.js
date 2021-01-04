// vue.config.js
module.exports = {
    css: {
        //加载全局变量
        loaderOptions: {
            scss: {
                prependData: `@import "~@/styles/variables.scss";`
            }

        }
    },
    devServer: {
        proxy: {
            '/boss': {
                target: 'http://eduboss.lagou.com',
                changeOrigin: true // 把请求头中的 host 配置为 target
            },
            '/front': {
                target: 'http://edufront.lagou.com',
                changeOrigin: true
            }
        }
    }
}