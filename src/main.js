import Vue from 'vue'
import App from './App'

import 'muse-components/styles/base.less' 
import row from 'muse-components/grid'
import row from 'muse-components/grid/row'
import col from 'muse-components/grid/col'
import slider from 'muse-components/slider'
import iconButton from 'muse-components/iconButton'
import flatButton from 'muse-components/flatButton'
import floatButton from 'muse-components/floatButton'
import dialog from 'muse-components/dialog'
import card from 'muse-components/card/card'
import cardTitle from 'muse-components/card/cardTitle'
import cardText from 'muse-components/card/cardText'
import cardActions from 'muse-components/card/cardActions'
import tooltip from 'muse-components/tooltip'
import textField from 'muse-components/textField'
import datePicker from 'muse-components/datePicker'

const MUComponents = {
  row
  ,col
  ,slider
  ,iconButton
  ,flatButton
  ,floatButton
  ,dialog
  ,card
  ,cardTitle
  ,cardText
  ,cardActions
  ,tooltip
  ,textField
  ,datePicker
};

Object.keys(MUComponents).forEach((key) => {
  Vue.component(MUComponents[key].name, MUComponents[key])
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
