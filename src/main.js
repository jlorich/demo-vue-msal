// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import msal from 'vue-msal'


Vue.use(msal, {
    auth: {
      clientId: '02ff1f85-6cc6-47ac-99a3-bd35d6cadfee',
      authority: 'https://login.microsoftonline.com/72f988bf-86f1-41af-91ab-2d7cd011db47'
    }
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
