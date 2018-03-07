import Vue from 'vue'
import App from './App'
// import router from './router' // TODO add back for #19
import '../node_modules/bulma/css/bulma.css'
import './main.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router, //TODO add back for #19
  render: h => h(App)
})

window.onload = function() {
  const abcEditor = new ABCJS.Editor("abcEditor",
    { canvas_id: "canvas", generate_midi: false, warnings_id: "warnings" })
}
