const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = (req, res) => {
  let target = ''

  // 代理目标地址
  // 这里使用 backend 主要用于区分 vercel serverless 的 api 路径
  if (req.url.startsWith('/api/front')) {
    target = 'http://edufront.lagou.com'
  }else if(eq.url.startsWith('/api/boss')){
    target = 'http://eduboss.lagou.com'
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
