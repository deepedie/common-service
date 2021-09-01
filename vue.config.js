module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  
  publicPath: '/common-service',
  devServer: {
    // proxy: 'http://localhost:8001/'
    proxy: {
      '/api/commonservice/autogenerate/v1/ProvinsiAll': {
        target: 'http://192.168.0.98:31447',
      },
      '/api/commonservice/autogenerate/v1/ProvinsiByCode': {
        target: 'http://192.168.0.98:31447',
      },
    }
  }
}
