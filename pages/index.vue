<template>
  <MyDefaultLayout>
    <div>
      <div class="_tal-ct _pdbt-48px ">
        <img class="logo _mgv-32px _mgbt-48px" src="~/assets/logo.png">
      </div>

      <slick ref="slick" :options="slickOptions">
        <!-- 1 -->
        <div class="slick-item">
          <img class="logosize" src="~/assets/logohome.png">
          <div class="subtitle _fs-5 _cl-black _fw-100 _lh-125pct _pdt-12px ">
            <p class="_fw-600 _dp-il">PLANMATE</p> is a Form Builder 
            <br/>for traveller which help planning trips
            <br/>by gathering data from friends!
          </div>
        </div>
        <!-- 2 -->
        <div class="slick-item">
          <img class="icon _pdt-24px _pdbt-8px" src="~/assets/icon1.png">
          <div class="_fs-4 _fw-600 _pd-12px">
            Tell us your preferences
          </div>
          <div class="subtitle _lh-125pct _pdbt-48px">
            Create your own form which 
            <br/>contains destinations,
            <br/>preferences and specific needs
          </div>
        </div>
        <!-- 3 -->
        <div class="slick-item">
          <img class="icon _pdt-24px _pdbt-8px" src="~/assets/icon2.png">
          <div class="_fs-4 _fw-600 _pd-12px">
            Spread your form
          </div>
          <div class="subtitle _lh-125pct _pdbt-48px">
            Gathering data and advice from 
            <br/>your friends by send your form’s link 
            <br/>to them and just wait!
          </div>
        </div>
        <!-- 4 -->
        <div class="slick-item">
          <img class="icon _pdt-24px _pdbt-8px" src="~/assets/icon3.png">
          <div class="_fs-4 _fw-600 _pd-12px">
            Let's go exploring!
          </div>
          <div class="subtitle _lh-125pct _pdbt-48px">
            Choose what suit you and simply
            <br/>generate form into travel plan,
            <br/>Then just go travel!
          </div>
        </div>
      </slick>

      <div class="_tal-ct _pd-24px _pdt-48px">
        <nuxt-link to="/signup">
          <Button title="Create Form"/>
        </nuxt-link>
      </div>
    
      <div class="_tal-ct _fw-600 _pdbt-48px">
        <nuxt-link to="/signin">
          <span class="link">Sign In to Continue Existing Form</span>
        </nuxt-link>
      </div>

    </div>
  </MyDefaultLayout>
</template>

<script>
import MyDefaultLayout from '~/layouts/MyDefaultLayout.vue'
import Slick from 'vue-slick'
import Button from '~/components/MyButton.vue'

export default {
  components: {
    MyDefaultLayout,
    Slick,
    Button
  },
  data () {
    return {
      slickOptions: {
        slidesToShow: 1,
        dots: true,
        infinite: false,
        arrows: false
      },
    }
  }
}
</script>

<style scoped>

.link {
  color: #477C89;
}

.logosize {
  width: 192px;
  height:157px;
  margin-left: auto;
  margin-right: auto;
}

.icon {
  margin-left: auto;
  margin-right: auto;
}
</style>
