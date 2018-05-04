<template>
  <MyDefaultLayout>
    <Header></Header>
    <div>
        <div class="_pdt-64px _mgt-48px">
            <!-- <img class="_pdt-64px map" src="~/assets/iconmap.png"> -->
            <div class="_pdt-12px _tal-ct">
            <div class="_fw-800 _fs-3 _cl-black">
                Hello, {{ $store.state.userData.username }}
            </div>
            <div class=" _fw-100 _fs-6 _pdt-4px _pdh-64px">
                Your friend is planning a next trip
                <br/>and your advice will be very helpful.
            </div>
            </div>
        </div>
        
        <div class="_pdt-12px _pdbt-12px _mg-12px">
            <img class="map" src="~/assets/bag.png">
            <!-- <div class=" _pdt-12px  _fw-100 _fs-6 _pdt-2px _pdbt-12px">
                At first, we just want you to know that
                <br/>Jennie will  {{ travelType($store.state.forms[$route.params.id].travelType) }}
            </div> -->
        </div>

        <div>
          <div class="_pdt-8px _tal-ct _cl-black">
            <div class="_fw-800 _fs-3">
              <div>
                {{ title }}
              </div>
            </div>
            <div class="_fw-100 _fs-6 _pdt-4px">
              Choose city you want to give advice!
            </div>
          </div>
        </div> 


        <div class="lo-6 _pdt-12px _pdbt-256px _mgh-24px" v-if="$store.state.currentForm && $store.state.currentForm.destinations">
          
          <div class="_fw-100 _fs-6 _pdt-24px " v-for="(value, key, index) in $store.state.currentForm.destinations" :key="index">

            <nuxt-link :to='`/a/${$route.params.uid}/${$route.params.formId}/destinations/${value.placeid}`'>

              <div class="_mgh-12px citiesimg _tal-ct _bgrp-nrp _bgs-cv _bgpst-ct" :style="`background-image: url(${value.photo || 'http://via.placeholder.com/350x150'})`">
              </div>
              <div class="_pdt-12px _fw-600">
                {{ value.city }}
                
              </div>
            </nuxt-link>
          </div>
        </div>
       

         <Footer title='Finish' :link='`/a/${$route.params.uid}/${$route.params.formId}/thankyou`' back='Back'></Footer>
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
  },
  data () {
    return {
      placeid: ''
    }
  },
  methods: {
    travelType (num) {
        console.log(num)
        if (num == 0) {
            return 'travel alone.'
        }
        if (num == 1) {
            return 'travel with family.'
        }
        if (num == 2) {
            return 'travel with friends.'
        }
        if (num == 3) {
            return 'travel with partner.'
        }

    }
  },
  computed: {
    title () {     
      if (!this.$store.state.currentForm) {
        return 'Thinking...'
      } else {
        return this.$store.state.currentForm.title
      }
    }
    
  }
}
</script>

<style>

.map {
  width: 14%;
}

.citiesimg {
    width: 180px;
  height: 120px;
  border-radius: 6px;
}

 a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
    text-decoration: none;
    color: #477C89 !important;
    font-weight: 600;
}
</style>


