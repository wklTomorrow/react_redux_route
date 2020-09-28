const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const graphAssets = './node_modules/@nickyxu/ugmdp/lib/cimgraph';
const graphAssets = './node_modules/@nickyxu/ugmdp/lib/cimgraph';

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  productionSourceMap: false,
  lintOnSave: false,
  publicPath: "./",
  devServer: {
      host: 'localhost.enncloud.cn'
  },
  // publicPath: "/",
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@images', resolve('src/assets/images'))
      .set('@components', resolve('src/components'))
      .set('@utils', resolve('src/utils'))
  },
  configureWebpack: (config) => {
    // config.devtool = 'source-map'
    config.performance = {
        hints:'warning',
        maxEntrypointSize: 50000000,
        maxAssetSize: 30000000,
        assetFilter: function(assetFilename) {
            return assetFilename.endsWith('.js');
        }
    }
    config.plugins.push(
      new CopyWebpackPlugin([{from: graphAssets, to: './'}], {copyUnmodified: true})
    );
    config.externals = {
      'echarts': "echarts",
      'element-ui': 'ELEMENT',
      'vue-router': 'VueRouter',
      'vue': 'Vue',
      'vuex':'Vuex'
    };
  }
}
