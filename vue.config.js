module.exports = {
    css: {
        sourceMap: true,
        extract:true
    },
    devServer: {
        proxy: {
            '/api': {
                // target: 'http://104.199.137.67:3000/',
                target: 'http://localhost:3000/',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': '/api'
                }
            }
        }
    }
}