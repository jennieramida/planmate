<template>
  <MyDefaultLayout>
    <Header></Header>
    <div>
      <div class="_pdt-128px">
        <img class="icon" src="~/assets/thankyou.png">
        <div class="title _fw-600 _fs-4 _pdt-48px">
          Having a trip?
        </div>
        <div class="subtitle _fw-100 _fs-6 _pdt-12px  _pdh-48px">
          Create form with us to gather advice
          <br/> from your friends like this.
        </div>
      </div>
      
      <div class="_pdh-48px _pdt-24px">
        <nuxt-link to="/signup">
          <Button title="Create Form" />
        </nuxt-link>
      </div>
    </div>
  </MyDefaultLayout>
</template>

<script>
import MyDefaultLayout from '~/layouts/MyDefaultLayout.vue'
import Button from '~/components/MyButton.vue'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    MyDefaultLayout,
    Button,
    Header,
    Footer
  }
}
</script>

<style>

.img {
  width: 120%;
}

.title{
  font-family: Arial, Helvetica, sans-serif;
}
</style>


