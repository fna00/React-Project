const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api", // The path you want to match
    createProxyMiddleware({
      target: "http://localhost:7041", // The server to proxy to
      changeOrigin: true,
      pathRewrite: {
        "^/api": "", // Optionally remove '/api' prefix before forwarding the request
      },
    })
  );
};
