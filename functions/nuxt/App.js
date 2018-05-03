import Vue from 'vue'
import NuxtLoading from './components/nuxt-loading.vue'

import '../assets/styles/main.css'


let layouts = {

  "_MyDefaultLayout": () => import('../layouts/MyDefaultLayout.vue'  /* webpackChunkName: "layouts/MyDefaultLayout" */).then(m => m.default || m),

  "_MyLayout": () => import('../layouts/MyLayout.vue'  /* webpackChunkName: "layouts/MyLayout" */).then(m => m.default || m),

  "_default": () => import('./layouts/default.vue'  /* webpackChunkName: "layouts/default" */).then(m => m.default || m)

}

let resolvedLayouts = {}

export default {
  head: {"title":"PLANMATE | Travel with data from friends","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"Nuxt.js project"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Vibur"},{"rel":"stylesheet","href":"https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002Fbiomatic@0.1.4\u002Fdist\u002Fbiomatic.full.min.css"},{"rel":"stylesheet","href":"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Fslick-carousel\u002F1.8.1\u002Fslick.min.css"},{"rel":"stylesheet","href":"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Fslick-carousel\u002F1.8.1\u002Fslick-theme.min.css"},{"rel":"stylesheet","href":"https:\u002F\u002Funpkg.com\u002Felement-ui\u002Flib\u002Ftheme-chalk\u002Findex.css"}],"style":[],"script":[]},
  render(h, props) {
    const loadingEl = h('nuxt-loading', { ref: 'loading' })
    const layoutEl = h(this.layout || 'nuxt')
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [ layoutEl ])

    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      }
    }, [ templateEl ])

    return h('div',{
      domProps: {
        id: '__nuxt'
      }
    }, [
      loadingEl,
      transitionEl
    ])
  },
  data: () => ({
    layout: null,
    layoutName: ''
  }),
  beforeCreate () {
    Vue.util.defineReactive(this, 'nuxt', this.$options.nuxt)
  },
  created () {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    // add to window so we can listen when ready
    if (typeof window !== 'undefined') {
      window.$nuxt = this
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
  },
  
  mounted () {
    this.$loading = this.$refs.loading
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },
  
  methods: {
    
    errorChanged () {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) this.$loading.fail()
        if (this.$loading.finish) this.$loading.finish()
      }
    },
    
    setLayout (layout) {
      if (!layout || !resolvedLayouts['_' + layout]) layout = 'default'
      this.layoutName = layout
      let _layout = '_' + layout
      this.layout = resolvedLayouts[_layout]
      return this.layout
    },
    loadLayout (layout) {
      if (!layout || !(layouts['_' + layout] || resolvedLayouts['_' + layout])) layout = 'default'
      let _layout = '_' + layout
      if (resolvedLayouts[_layout]) {
        return Promise.resolve(resolvedLayouts[_layout])
      }
      return layouts[_layout]()
      .then((Component) => {
        resolvedLayouts[_layout] = Component
        delete layouts[_layout]
        return resolvedLayouts[_layout]
      })
      .catch((e) => {
        if (this.$nuxt) {
          return this.$nuxt.error({ statusCode: 500, message: e.message })
        }
      })
    }
  },
  components: {
    NuxtLoading
  }
}

