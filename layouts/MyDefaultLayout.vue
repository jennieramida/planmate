<template>
  <div>

    <div class="container">
      <!-- Back button container -->
      <div class="backButton" v-if="hasBack">
        <a href="javascript: history.back()">≤</a>
      </div>
      <slot></slot>
    </div>

    <!-- Footer -->
    <!-- <div v-if="hasFoot" class="footer _pd-12px lo-4 _zid-1 _pdbt-0px">
      <div class="_pdbt-24px">
        <nuxt-link to="/signupcomplete">
          <Button title="Sign in" />
        </nuxt-link>
      </div>
    </div> -->

  </div>
</template>

  


<script scoped>
import Button from '~/components/MyButton.vue'

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
  .backButton {
    text-align: left;
  }


  link {
  color: #477C89;
}

</style>

