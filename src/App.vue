<template>
  <div id="app">
      <div v-if="user">
          <div>Welcome {{user.name}}</div>
          <div><button @click="$msal.signOut()">logout</button></div>
      </div>
      <div v-else>
          Please sign-in
          <button @click="$msal.signIn()">Sign in</button>
      </div>
  </div>
</template>

<script>
import { msalMixin } from 'vue-msal'; 

export default {
  name: 'App',
  mixins: [msalMixin],
  components: { },
  computed: {
    user: function() {
      let user = null;
      
      if (this.msal.isAuthenticated) { // Note that the dollar sign ($) is missing from this.msal
        user = {
          ...this.msal.user,
          profile: {}
        }
        if (this.msal.graph && this.msal.graph.profile) {
            user.profile = this.msal.graph.profile
        }
      }
      return user;
    }
  }
}

</script>
