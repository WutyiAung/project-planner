const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    client: {
      webSocketURL: 'ws://localhost:8080/ws',  // You can also try using your IP if needed
    },
    hot: true,  // Enable Hot Module Replacement (HMR)
    liveReload: true,  // Enable live reloading
  },
});
