<template>
  <div>
  
  </div>
</template>

<script>
  /* if landed on /create
    - create a new form id
    - redirect to form id
  */
  import * as Firebase from '~/services/firebase'
  export default {
    async fetch({
      redirect,
      store
    }) {
      // Connect to firebase and reserve a dsatabase entry
      const newFormId = Math.random().toString(36).substr(2, 9);
      const uid = store.state.UID
      return Firebase.updateForm(uid, newFormId).then((x) => redirect('/create/' + newFormId))
    }
  }
</script>