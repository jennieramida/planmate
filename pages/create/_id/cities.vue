<template>
  <MyDefaultLayout>
    <Header hasBC="true"></Header>
      <div class="_pdt-64px _mgt-24px _tal-ct _cl-black">
        <div class="_fw-800 _pdt-64px _fs-2 _pdt-12px">
          {{ $store.state.tripData.title }}
        </div>
        <div class="subtitle _fw-100 _fs-6 _pdt-4px">
          Add all your cities
        </div>
      </div>

      <div class="lo-6 _pdt-12px _pdbt-128px">

        <div class="_fw-100 _fs-6 _pdt-24px _mgh-24px" v-for="(x, i) in $store.state.tripData.destinations" :key="i">
          <img class="citiesimg" :src="x.photo">
          <div class="_pdt-8px">{{ x.city }}</div>
        </div>


        <div class="more _mgv-24px _mgh-24px _fs-6 _fw-600 _tal-ct">
            <nuxt-link :to='`/create/${$route.params.id}/destinations`'>
              Add more city              
            </nuxt-link>
        </div>
      </div>


      <div class="subtitle _fw-100 _fs-6">
      </div>

        <Footer title='Create Form' :link='`/create/${$route.params.id}/getlink`' back='Back'></Footer>
  </MyDefaultLayout>
</template>

<script>
import MyDefaultLayout from '~/layouts/MyDefaultLayout.vue'
import Button from '~/components/MyButton.vue'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import * as Firebase from '~/services/firebase'



export default {
  components: {
    MyDefaultLayout,
    Button,
    Header,
    Footer
  },
    mounted () {
    // update tripData
    Firebase.updateForm(this.$store.state.tripData.id, this.$store.state.tripData)
  },
}
</script>

<style>
.more {
  padding-right: 25px;
  padding-left: 25px;
  padding-top: 48px;
  padding-bottom: 48px;
  border-radius: 6px;
  border-style: dashed;
  border-color: #69AFC0;
  color :  #69AFC0;
  border-width: 1px;
}

.citiesimg {
  width: 180px;
  border-radius: 6px;
}
</style>


