<template>
  <MyDefaultLayout>
    <Header></Header>
    <div class="mapBg">
      <div class="_pdt-128px _mgt-24px">
        <img class="iconthankyou" src="~/assets/thankyou.png">
        <div class="title _fw-600 _fs-3 _pdt-48px _pdbt-2px">
          Having a trip?
        </div>
        <div class="subtitle _fw-100 _fs-6 _pdt-12px _pdbt-4px _pdh-48px">
          Create form with us to gather advice
          <br/> from your friends like this.
        </div>
      </div>
      
      <div class="_pd-48px ">
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
  .mapBg {
    background-image: url(~/assets/mapline.png);
    background-repeat: no-repeat;
    background-size: contain;
  }

.img {
  width: 120%;
}

.title{
  font-family: Arial, Helvetica, sans-serif;
}

.iconthankyou {
  width: 50%;
}
</style>


