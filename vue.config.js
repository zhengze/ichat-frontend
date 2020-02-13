module.exports = {
  devServer: {
    proxy: {
        '/socket.io': {
          target: 'http://192.168.37.130:5050',
          ws: true,
          changeOrigin: true
        },
        'sockjs-node': {
          target: 'http://192.168.37.130:5050',
          ws: false,
          changeOrigin: true
        },
    }

  }
}