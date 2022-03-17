<template>
  <div class="">
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { auth } from '@/store'

  export default Vue.extend({
    data() {
      return  {
        email: '',
        password: '',        
      }
    },
    methods: {
      login() {        
        this.$fireModule.auth().signInWithEmailAndPassword(this.email, this.password)
          .then(() => {
            console.log('loguei')
            console.log(auth.getUser)
          })
          .catch(error => { 
            console.log(error) 
          })
      }
    },
    async created() {
      await console.log(auth.getUser)
    }
    
  })
</script>
