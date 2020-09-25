const { createProxyMiddleware } = require('http-proxy-middleware');
// const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app){
    app.use('/api', createProxyMiddleware({ 
        target: 'http://10.4.94.83:3000', 
        changeOrigin: true,
        pathRewrite:{
            "^/api":""
        }
    }
    ))
}
// const proxy = require('http-proxy-middleware');

// module.exports = function(app) {
//   app.use(proxy('/api', { target: 'http://localhost:3000/' }));
// };