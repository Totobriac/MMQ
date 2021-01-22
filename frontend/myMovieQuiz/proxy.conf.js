proxyUrl = "https://"


const PROXY_CONFIG = [
  {
    context: ["/api"],
    target: proxyUrl,
    secure: true,
    changeOrigin: true,
    logLevel: "debug",
    pathRewrite: { "^\/api": "/" }
    
  }
]

module.exports = PROXY_CONFIG;
