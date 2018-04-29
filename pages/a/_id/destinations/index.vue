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
                Jennie is planning next trip
                <br/>and your advice will be very helpful.
            </div>
            </div>
        </div>
        
        <div class="_pdt-12px _pdbt-12px _mg-12px">
            <img class="map" src="~/assets/bag.png">
            <div class=" _pdt-12px  _fw-100 _fs-6 _pdt-2px _pdbt-12px">
                At first, we just want you to know that
                <br/>Jennie will  {{ travelType($store.state.forms[$route.params.id].travelType) }}
            </div>
        </div>

        <div>
            <div class="_pdt-8px _tal-ct _cl-black">
                <div class="_fw-800 _fs-3">
                    <div>
                        <!-- {{ $store.state.formData.title }} -->
                    </div>
                </div>
                <div class="_fw-100 _fs-6 _pdt-4px">
                    Choose city you want to give advice!
                </div>
            </div>
          </div> 
            <div class="lo-6 _pdbt-128px _mgh-24px">
              <div class="_fw-100 _fs-6 _pdt-24px" v-for="(x, i) in $store.state.formData.destinations" :key="i">
                <nuxt-link :to="$route.fullPath + '/' + x.placeid" >
                  <img class="citiesimg" :src="x.photo">
                  <div class="_pdt-8px">{{ x.city }}</div>
                </nuxt-link>
              </div>
            </div>
       

         <Footer title='Finish' :link='`/a/${$route.params.id}/thankyou`' back='Back'></Footer>
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


