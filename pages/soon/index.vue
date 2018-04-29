<template>
  <MyDefaultLayout>
    <Header></Header>
    <div>

        <div class="_pdbt-48px">
          <div class="_pdt-128px">
            <img class="_pdbt-12px img _pdt-128px" src="~/assets/cms.png">
          </div>

          <div class="_pdt-8px _tal-ct _cl-black _pdbt-128px">
            <div class="_fw-800 _fs-2">
                Stay Tuned.
                <br/>More to Explore.
            </div>
            <div class="subtitle _fw-100 _fs-6 _pdt-8px _pdh-48px _mgbt-48px">
                We are currently working on new section.
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
  width: 60%;
}

.more {
  width: 105px;
}

.imgsmall {
  width: 5%;
}


</style>


