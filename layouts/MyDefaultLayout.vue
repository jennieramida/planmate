<template>
  <div>
    <div class="container">
      <!-- Back button container -->
      <div class="backButton" v-if="hasBack">
        <a href="javascript: history.back()">≤</a>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

  
<script scoped>
import Button from '~/components/MyButton.vue'
import * as Firebase from '~/services/firebase'

export default {
  props: ['hasBack', 'hasHead'],
  components: {
    Button
  }
}

</script>

<style scoped>
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

</style>

