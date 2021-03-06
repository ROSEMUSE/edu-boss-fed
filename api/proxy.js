const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = (req, res) => {
  let target = ''

  // 代理目标地址
  if (req.url.includes('/api/front')) {
      console.log("配置成功");
    target = 'http://edufront.lagou.com/'
  }else if(req.url.startsWith('/api/boss')){
    target = 'http://eduboss.lagou.com/'
  }

  // 创建代理对象并转发请求
  createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: {
      // 通过路径重写，去除请求路径中的 `/api`
      // 例如 /api/front/XXX 将被转发到 http://eduboss.lagou.com/front/xxx
      '^/api/': ''
    }
  })(req, res)
}
