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

      <div class="lo-6 _pdt-12px">
        <div class="_tal-r">
          <div>
            <img class="_pd-8px" src="~/assets/venice.png">
          </div>
        </div> 
        <div class="_tal-l">
          <div class="more  _mgv-8px _mgh-24px _fs-6 _fw-600 _tal-ct">
            <nuxt-link to="/destination">
              Add more city              
            </nuxt-link>
          </div>
        </div>
      </div>


      <div class="subtitle _fw-100 _fs-6">
      </div>

        <Footer title='Create Form' link='/usergetlink' back='Back'></Footer>
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
.more {
  padding-right: 25px;
  padding-left: 25px;
  padding-top: 41px;
  padding-bottom: 41px;
  border-radius: 6px;
  border-style: dashed;
  border-color: #69AFC0;
  color :  #69AFC0;
  border-width: 1px;
}
</style>


