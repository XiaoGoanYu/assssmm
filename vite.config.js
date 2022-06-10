const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, 'index.html'),
                detail: resolve(__dirname, "detail.html"),
                products: resolve(__dirname, "products.html"),
                workdetail: resolve(__dirname, "workdetail.html")
            }
        }
    }
})