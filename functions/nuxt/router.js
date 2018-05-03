import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _195591c4 = () => import('../pages/userpage/index.vue' /* webpackChunkName: "pages/userpage/index" */).then(m => m.default || m)
const _6c915f36 = () => import('../pages/soon/index.vue' /* webpackChunkName: "pages/soon/index" */).then(m => m.default || m)
const _3423b77c = () => import('../pages/signup/index.vue' /* webpackChunkName: "pages/signup/index" */).then(m => m.default || m)
const _58b75ea4 = () => import('../pages/form/index.vue' /* webpackChunkName: "pages/form/index" */).then(m => m.default || m)
const _74e426fa = () => import('../pages/premium/index.vue' /* webpackChunkName: "pages/premium/index" */).then(m => m.default || m)
const _652fea66 = () => import('../pages/a/index.vue' /* webpackChunkName: "pages/a/index" */).then(m => m.default || m)
const _b0c271b4 = () => import('../pages/create/index.vue' /* webpackChunkName: "pages/create/index" */).then(m => m.default || m)
const _7a737679 = () => import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */).then(m => m.default || m)
const _5fd0fe4c = () => import('../pages/signin/index.vue' /* webpackChunkName: "pages/signin/index" */).then(m => m.default || m)
const _49696499 = () => import('../pages/form/_id/index.vue' /* webpackChunkName: "pages/form/_id/index" */).then(m => m.default || m)
const _15d3df11 = () => import('../pages/create/_id/index.vue' /* webpackChunkName: "pages/create/_id/index" */).then(m => m.default || m)
const _97834c6a = () => import('../pages/create/_id/travelers.vue' /* webpackChunkName: "pages/create/_id/travelers" */).then(m => m.default || m)
const _c3324462 = () => import('../pages/create/_id/getlink.vue' /* webpackChunkName: "pages/create/_id/getlink" */).then(m => m.default || m)
const _92e6d3d6 = () => import('../pages/form/_id/cities/index.vue' /* webpackChunkName: "pages/form/_id/cities/index" */).then(m => m.default || m)
const _3a84799a = () => import('../pages/create/_id/cities.vue' /* webpackChunkName: "pages/create/_id/cities" */).then(m => m.default || m)
const _dec6748e = () => import('../pages/create/_id/destinations/index.vue' /* webpackChunkName: "pages/create/_id/destinations/index" */).then(m => m.default || m)
const _898c6810 = () => import('../pages/create/_id/destinations/_placeid/advices.vue' /* webpackChunkName: "pages/create/_id/destinations/_placeid/advices" */).then(m => m.default || m)
const _7d88a874 = () => import('../pages/create/_id/destinations/_placeid/interests.vue' /* webpackChunkName: "pages/create/_id/destinations/_placeid/interests" */).then(m => m.default || m)
const _66fb1d90 = () => import('../pages/a/_uid/_formId/index.vue' /* webpackChunkName: "pages/a/_uid/_formId/index" */).then(m => m.default || m)
const _5d81d37f = () => import('../pages/a/_uid/_formId/thankyou.vue' /* webpackChunkName: "pages/a/_uid/_formId/thankyou" */).then(m => m.default || m)
const _eb15aa1c = () => import('../pages/a/_uid/_formId/destinations/index.vue' /* webpackChunkName: "pages/a/_uid/_formId/destinations/index" */).then(m => m.default || m)
const _73a0e76d = () => import('../pages/a/_uid/_formId/destinations/_city/index.vue' /* webpackChunkName: "pages/a/_uid/_formId/destinations/_city/index" */).then(m => m.default || m)
const _a81a568a = () => import('../pages/a/_uid/_formId/destinations/_city/addplace.vue' /* webpackChunkName: "pages/a/_uid/_formId/destinations/_city/addplace" */).then(m => m.default || m)
const _eb11098a = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/userpage",
			component: _195591c4,
			name: "userpage"
		},
		{
			path: "/soon",
			component: _6c915f36,
			name: "soon"
		},
		{
			path: "/signup",
			component: _3423b77c,
			name: "signup"
		},
		{
			path: "/form",
			component: _58b75ea4,
			name: "form"
		},
		{
			path: "/premium",
			component: _74e426fa,
			name: "premium"
		},
		{
			path: "/a",
			component: _652fea66,
			name: "a"
		},
		{
			path: "/create",
			component: _b0c271b4,
			name: "create"
		},
		{
			path: "/about",
			component: _7a737679,
			name: "about"
		},
		{
			path: "/signin",
			component: _5fd0fe4c,
			name: "signin"
		},
		{
			path: "/form/:id",
			component: _49696499,
			name: "form-id"
		},
		{
			path: "/create/:id",
			component: _15d3df11,
			name: "create-id"
		},
		{
			path: "/create/:id/travelers",
			component: _97834c6a,
			name: "create-id-travelers"
		},
		{
			path: "/create/:id/getlink",
			component: _c3324462,
			name: "create-id-getlink"
		},
		{
			path: "/form/:id/cities",
			component: _92e6d3d6,
			name: "form-id-cities"
		},
		{
			path: "/create/:id/cities",
			component: _3a84799a,
			name: "create-id-cities"
		},
		{
			path: "/create/:id/destinations",
			component: _dec6748e,
			name: "create-id-destinations"
		},
		{
			path: "/create/:id/destinations/:placeid/advices",
			component: _898c6810,
			name: "create-id-destinations-placeid-advices"
		},
		{
			path: "/create/:id/destinations/:placeid/interests",
			component: _7d88a874,
			name: "create-id-destinations-placeid-interests"
		},
		{
			path: "/a/:uid/:formId?",
			component: _66fb1d90,
			name: "a-uid-formId"
		},
		{
			path: "/a/:uid/:formId?/thankyou",
			component: _5d81d37f,
			name: "a-uid-formId-thankyou"
		},
		{
			path: "/a/:uid/:formId?/destinations",
			component: _eb15aa1c,
			name: "a-uid-formId-destinations"
		},
		{
			path: "/a/:uid/:formId?/destinations/:city",
			component: _73a0e76d,
			name: "a-uid-formId-destinations-city"
		},
		{
			path: "/a/:uid/:formId?/destinations/:city/addplace",
			component: _a81a568a,
			name: "a-uid-formId-destinations-city-addplace"
		},
		{
			path: "/",
			component: _eb11098a,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
