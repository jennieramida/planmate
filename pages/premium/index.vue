<template>
  <MyDefaultLayout>
    <Header></Header>
    <div>
        <div class="_pdt-128px">
            <div class="_pdt-12px _tal-ct _cl-black">
            <div class="_fw-800 _fs-2">
                Go Advance.
                <br/>Explore More.
            </div>
            <div class="subtitle _fw-100 _fs-6 _pdt-12px _pdh-48px _mgbt-48px">
                Step out of the comfort zone and get more!
            </div>
            </div>
        </div>
        
        <div>
          <!-- <img class="_pdt-48px img" src="~/assets/premium.png">
          <div class="_pdt-8px _mgbt-24px _fw-800 _fs-3 _cl-black">
            Get more benefits
          </div> -->

          <div class="lo-4-8 _mgh-48px">
            
            <div class="_tal-r _mgv-12px _pdbt-12px _pdr-12px">
              <img class="more" src="~/assets/more1.png">
            </div>
            <div class="_tal-l _pdl-12px">
              <div class="_pdt-12px _mgt-12px _fw-800 _fs-4 _cl-black">
              Keep Your Forms
              </div>
              <div class="_pdt-4px _fw-300 _fs-6 _cl-black">
                Create unlimited forms and keep them last long.
              </div>
            </div>
            
            <div class="_tal-r _mgv-12px _pdbt-12px _pdr-12px">
              <img class="more" src="~/assets/more2.png">
            </div>
            <div class="_tal-l _pdl-12px">
              <div class="_pdt-12px _mgt-12px _fw-800 _fs-4 _cl-black">
              Explore More
              </div>
              <div class="_pdt-4px _fw-300 _fs-6 _cl-black">
                Explore exclusive plans curated by travel experts.
              </div>
            </div>

            <div class="_tal-r _mgv-12px _pdbt-12px _pdr-12px">
              <img class="more" src="~/assets/more4.png">
            </div>
            <div class="_tal-l _pdl-12px">
              <div class="_pdt-12px _mgt-12px _fw-800 _fs-4 _cl-black">
              Exclusive Advices
              </div>
              <div class="_pdt-4px _fw-300 _fs-6 _cl-black">
                Exclusive articles, advices and tips from travel experts.
              </div>
            </div>

            <div class="_tal-r _mgv-12px _pdbt-12px _pdr-12px">
              <img class="more" src="~/assets/more3.png">
            </div>
            <div class="_tal-l _pdl-12px">
              <div class="_pdt-24px _mgt-12px _fw-800 _fs-4 _cl-black">
              No Ads
              </div>
              <div class="_pdt-4px _fw-300 _fs-6 _cl-black">
                Set your ads preference.
              </div>
            </div>

          </div>

        </div>

        <div class="_pd-24px _mgh-12px _mgt-12px">
            <nuxt-link to="/soon">
            <Button title="Upgrade for 5$ / month" />
            </nuxt-link>
            <div class=" _pdt-12px subtitle _fw-100 _fs-7 _pdt-2px _pdbt-12px">
                *Terms & conditions apply.
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
  width: 8%;
}

.more {
  width: 100px;
}

.imgsmall {
  width: 5%;
}


</style>


