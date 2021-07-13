module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  
  publicPath: '/common-service',
  devServer: {
    proxy: 'http://localhost:8030/'
    // proxy: {
    //   '/api/commonservice/autogenerate/v1/ProvinsiAll': {
    //     target: 'http://localhost:8030/',
    //   },
    // }
  }
}
