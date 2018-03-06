<template>
  
  <section class="container">
    <div class="mapBg">
      <div class="_tal-ct ">
        <img class="logo _mgt-32px _mgbt-24px" src="~/assets/logo.png">
      </div>
      
      <div class="_tal-ct">
        <img class="" src="~/assets/callforhelp.png">
      </div>

      <div class="_tal-ct _fs-6 _fw-300 _pdbt-4px">
        Your friend is going to travel and believe that
      <br/>your advice will make it a perfect trip.
      </div>
      
      <div class="_tal-ct _pdt-24px _fs-5 _fw-600">
        Hey! What's your name?
      </div>

      <div class="bio-input _pdt-8px _pdbt-48px _pdh-64px">
        <input type="text" placeholder="Enter your name" v-model="userName">
      </div>
      
      <div class="_tal-ct _pdbt-12px ">
         <nuxt-link to="/frdpage">
          <Button title="Give a hand" />
        </nuxt-link>
      </div>
      <div class="_tal-ct _pdt-12px _pdbt-24px">
        <nuxt-link to="/signin">
          Your own form? Sign In
        </nuxt-link>
      </div>
    </div>

  </section>
</template>

<script>
import Slick from 'vue-slick'
import Button from '~/components/MyButton.vue'

export default {
  components: {
    Slick,
    Button
  },
  data () {
    return {
      userName: '',
      slickOptions: {
        slidesToShow: 1,
        dots: true,
        infinite: false
        // Any other options that can be got from plugin documentation
      },
    }
  }
}
</script>

<style>


.container {
  background-image: linear-gradient(to bottom right, #EEF7F8, #DCECF0);
}

.mapBg {
  background-image: url(~/assets/mapline.png);
  background-repeat: no-repeat;
  background-size: contain;
}

/* รู้ๆๆๆๆละ */
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.slick-item {
  text-align: center;
}

.slick-dots li button::before {
  font-size: 14px;
  color: #69AFC0;
}

.slick-dots li.slick-active button:before {
   color: #69AFC0;
}

.subtitle {
  font-family: Helvetica;
  font-weight: 100;
  font-size: 14px;
  color: black;
  letter-spacing: 1px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
.logo{
  width: 210px;
  height: 62px;
}
.icon{
  margin-left: auto;
  margin-right: auto;
}
.logosize {
  width: 192px;
  height:157px;
  margin-left: auto;
  margin-right: auto;
}



</style>
