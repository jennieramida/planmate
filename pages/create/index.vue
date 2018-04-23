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
      const id = Math.random().toString(36).substr(2, 9);
      await Firebase.init()
      return Firebase.updateForm(id).then((x) => redirect('/create/' + id))
    }
  }
</script>