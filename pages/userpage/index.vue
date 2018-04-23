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
            <div class=" _pdt-12px subtitle _fw-100 _fs-7 _pdt-2px _pdbt-12px">
                Let's gather data from friends
                <br/>to create your plan
            </div>
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
            <div class="lo-6 _pdt-12px">
              <div class="_tal-r">
                <div>
                  <nuxt-link to="/frdhome">
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
            </div>        
    </div>
  </MyDefaultLayout>
</template>

<script>
import MyDefaultLayout from '~/layouts/MyDefaultLayout.vue'
import Button from '~/components/MyButton.vue'
import Header from '~/components/Header.vue'

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


