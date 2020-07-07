const path = require('path')
module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          // 把px单位换算成rem单位
          require('postcss-pxtorem')({
            rootValue: 16, // 换算的基数(设计图750的根字体为32)
            propList: ['*'] // 可以从px更改为rem的属性。
          })
        ]
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, 'src/assets/css/index.less')] // 引入全局样式
    }
  }
}
// "postcss-cssnext": "^3.1.0",    这两个需要都安装 不然会报错
// "postcss-pxtorem": "^5.1.1",
