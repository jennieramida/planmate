module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'PLANMATE | Travel with data from friends',
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
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css' },
      { rel: 'stylesheet', href: 'https://unpkg.com/element-ui/lib/theme-chalk/index.css' },
      // { rel: 'stylesheet', href: 'path/to/font-awesome/css/font-awesome.min.css'}
      // 5555 แม่งมี bug แป้บนะ 
    ],
    // script: [
    //   { src: 'https://unpkg.com/element-ui/lib/index.js' }
    // ],
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
  transition: {
    name: 'page',
    mode: 'out-in'
  },
  plugins: [
    '~/plugins/vue-google-maps.js',
    '~/plugins/vue-js-modal',
    '~/plugins/vuefire.js',
    { src: '~/plugins/vue-clipboard', ssr: false },
    { src: '~/plugins/element-ui', ssr: false}
    
  ],
  build: {
    /*
    ** Run ESLint on save
    */
    babel: {
      presets: [[
        "env", {
          "targets": {
            "chrome": 52,
            "browsers": ["safari 7", "ie 11"]
          }
        }
      ], 'stage-0', 'stage-1', 'stage-2', 'stage-3'],
      plugins: [
        "transform-runtime",
        "transform-async-to-generator"
      ]
    },
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
