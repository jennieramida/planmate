<template>
  <div class="wrapper">
    <div class="container">
      <!-- Back button container -->
      <div class="backButton" v-if="hasBack">
        <a href="javascript: history.back()">≤</a>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

  
<script>
import Button from '~/components/MyButton.vue'
import firebase from 'firebase'
import * as Firebase from '~/services/firebase'

export default {
  props: ['hasBack', 'hasHead'],
  components: {
    Button
  },
  mounted () {
    // If localStorage.getItem('planmateUID') exists
    if (process.browser) {
      const uid = localStorage.getItem('planmateUID')
      if (uid) {
        console.log('exist', uid)
        this.storeUID(uid)
      } else {
        console.log('not exist')
        const newUID = this.guid()
        console.log(newUID)
        localStorage.setItem('planmateUID', newUID)
        this.storeUID(newUID)
      }
    }
    // store UID in vuex store
    // else
    // generate new UID and store in vuex store and localstorage
  },
  methods: {
    storeUID (uid) {
      this.$store.commit('setUID', uid)
      // Fetch data from Firebase DB
      this.fetchDatabase(uid)
    },
    guid() {
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
      }
      return s4() + s4();
    },
    fetchDatabase (uid) {
      let that = this
      if (this.$route.path.indexOf('/create/') > -1 || this.$route.path.indexOf('/userpage') > -1) {
        firebase.database().ref('/user/' + uid)
          .on('value', (snapshot) => {
            that.$store.commit('setExistingForms', snapshot.val())
          })
      }
      
      if (this.$route.path.indexOf('/a/') > -1) {
        // when answering
        let uid = this.$route.params.uid
        let formId = this.$route.params.formId
        firebase.database().ref('/user/' + uid + '/forms/' + formId)
          .on('value', (snapshot) => {
            that.$store.commit('setCurrentForm', snapshot.val())
          })
      }

      if (this.$route.path.indexOf('/form/') > -1) {
        // when answering
        let uid = this.$store.state.UID
        let formId = this.$route.params.formId
        firebase.database().ref('/user/' + uid + '/forms/' + formId)
          .on('value', (snapshot) => {
            that.$store.commit('setCurrentForm', snapshot.val())
          })
      }

      
    }
  }
}

</script>

<style scoped>
  .wrapper {
    background: #F8F7F7;
  }
  .container {
    text-align: center;
    background-color: #F8F7F7;
    min-height: 100vh;
    /* overflow: hidden; */
    font-family: 'Helvetica';
    margin-bottom: 0px;
  }
 
  link {
  color: #477C89;
}

@media only screen and (max-width: 450px) {
body {
    width: 100% !important;
}
}
</style>

