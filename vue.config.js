module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'https://jupiter.d.greeninvoice.co.il',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
