import Vue from 'vue'
import App from './App'
// import "babel-polyfill"
// import {
//   Vuetify // required
//   ,VApp // required
//   ,transitions
//   ,VTextField
//   ,VTooltip
//   ,VIcon
//   ,VSlider
//  } from 'vuetify'
//  import { Ripple } from 'vuetify/es5/directives'
//  require('vuetify/src/stylus/app.styl')

// Vue.use(Vuetify, {
//   components: {
//     VApp
//     ,transitions
//     ,VTextField
//     ,VTooltip
//     ,VIcon
//     ,VSlider
//   },
//   directives: {
//     Ripple
//   }
// })
//babel
// ,["transform-imports", {
//   "vuetify": {
//     "transform": "vuetify/es5/components/${member}",
//     "preventFullImport": true
//   }
// }]
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)
// Vue.use(MdTooltip)
// Vue.use(MdField)
// Vue.use(MdButton)
// Vue.use(MdDialog)
// Vue.use(MdContent)
// Vue.use(MdCard)
// Vue.use(MdDatepicker)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
