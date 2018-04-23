module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'togather',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Vibur'},
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/biomatic@0.1.4/dist/biomatic.full.min.css' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css' }
      // 5555 แม่งมี bug แป้บนะ 
      
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  css: [
    {
      src: 'assets/styles/main.css',
      lang: 'css'
    }
  ],
  /*
  ** Build configuration
  */
  plugins: [
    '~/plugins/vue-google-maps.js',
    '~/plugins/vue-js-modal',
    '~/plugins/vuefire.js',
    '~/plugins/vue-clipboard'
  ],
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      if (ctx.isServer) {
        config.externals = [
          require('webpack-node-externals')({
            whitelist: [/^vue-slick/]
          })
        ]
      }
    }
  }
}
