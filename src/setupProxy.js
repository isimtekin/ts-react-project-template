require('dotenv').config({ path: '../.env.local' });
const { createProxyMiddleware } = require('http-proxy-middleware');
function logProvider(provider) {
    // replace the default console lvog provider.
    return require('winston');
}

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: process.env.API_BASE_URL,
            changeOrigin: true,
            onProxyReq: (proxyReq, req, res) => {
                console.log(req.originalUrl);
            },
            pathRewrite: { '/api': '' },
            logProvider,
        })
    );
};
