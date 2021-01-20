const pkg = require('./package') // Берёт инфу из package.json


module.exports = {
  head: {
    title: pkg.name, // Берёт name из package.json
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description } // Берёт description из package.json
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
  ],

  plugins: [
    // '@/plugins/globals'
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/vuetify',
  ],

  components: true,
  axios: {},

  telemetry: false,

  build: {
  }
}
