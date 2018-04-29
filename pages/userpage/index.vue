<template>
  <MyDefaultLayout>
    <Header></Header>
    <div>
        <div>
            <img class="_pdt-128px" src="~/assets/iconmap.png">
            <div class="_pdt-12px _tal-ct _cl-black">
            <div class="_fw-800 _fs-2">
                Hello, Name!
            </div>
            <div class="subtitle _fw-100 _fs-6 _pdt-4px _pdh-48px">
                Great things never came from comfort zones.
                Where will be your next destination?
            </div>
            </div>
        </div>
        
        <div class="_pd-24px _mg-12px">
            <nuxt-link to="/create">
            <Button title="Create New Form" />
            </nuxt-link>

        </div>

        <div class=" _mgh-64px">
            <div class="_pdt-8px _tal-ct _cl-black">
                <div class="_fw-800 _fs-3">
                    Your Forms
                </div>
                <div class="_fw-100 _fs-6 _pdt-4px">
                    Take a look at your forms, edit or generate plan from them.
                </div>
            </div>
        </div>
            <!-- All Form -->
            <div class="lo-6 _pdt-12px _pdbt-64px">
              <!-- <div class="_tal-r">
                <div>
                  <nuxt-link to="/form/id">
                    <img class="_pd-8px" src="~/assets/venice.png">
                  </nuxt-link>
                </div>
                <div>
                <img class="_pd-8px" src="~/assets/paris.png">
                </div>
              </div>
              
             <div class="_tal-l">
                <div>
                  <img class="_pd-8px" src="~/assets/paris.png">
                </div>
                <div>
                <img class="_pd-8px" src="~/assets/venice.png">
                </div>
              </div>
            </div>         -->
            <nuxt-link :to="`/form/${key}`" v-for="(value, key, index) in $store.state.forms" :key="index">
              <div class="_h-128px _bgrp-nrp _bgs-cv _bgpst-ct" :style="`background-image: url(${value.destinations && Object.values(value.destinations)[0].photo || 'http://via.placeholder.com/350x150'})`">
              </div>
              <h4>{{ value.title }}</h4>
            </nuxt-link>
          </div>
    </div>
  </MyDefaultLayout>
</template>

<script>
import MyDefaultLayout from '~/layouts/MyDefaultLayout.vue'
import Button from '~/components/MyButton.vue'
import Header from '~/components/Header.vue'
import firebase from 'firebase'
export default {
  components: {
    MyDefaultLayout,
    Button,
    Header
  }
}
</script>

<style>

.img {
  width: 120%;
}

</style>


