<template>
  <div class="">
    <MyDefaultLayout>
      <Header hasBC="true"></Header>
      <div class="_pdt-64px _mgt-48px _tal-ct _cl-black">
        <div class="_fw-800 _fs-2 _pdt-64px">
          Travelers
        </div>
        <div class="subtitle _fw-100 _fs-6 _pdt-4px">
          Who will you travel with?
        </div>

        <div class="radio _tal-l _pdl-64px _pdt-12px _mgt-12px _fw-100 _cl-dark">
          <div class="bio-radio _pdv-8px">
            <input id="r1" type="radio" name="radio-test1" @change="updateTravelType(0)" checked>
            <label for="r1">
              <div class="_pdl-12px _fs-5">
                Solo Trip
              </div>
            </label>
          </div>
          <div class="bio-radio _pdv-8px">
            <input id="r2" type="radio" name="radio-test1" @change="updateTravelType(1)">
            <label for="r2">
              <div class="_pdl-12px _fs-5">
                Travel with Family
              </div>
            </label>
          </div>
          <div class="bio-radio _pdv-8px">
            <input id="r3" type="radio" name="radio-test1" @change="updateTravelType(2)">
            <label for="r3">
              <div class="_pdl-12px _fs-5">
                Travel with Friends
              </div>
            </label>
          </div>
          <div class="bio-radio _pdv-8px">
            <input id="r4" type="radio" name="radio-test1" @change="updateTravelType(3)">
            <label for="r4">
              <div class="_pdl-12px _fs-5">
                Travel with Partner
              </div>
            </label>
          </div>
        </div>

      </div>
      <Footer title='Next' :link='`/create/${$route.params.id}/destinations`' back='Back'></Footer>
    </MyDefaultLayout>
  </div> 
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
    // Default type
    this.$store.commit('setTripData', {
      key: 'travelType',
      value: 0
    })
    Firebase.updateForm(this.$store.state.tripData.id, this.$store.state.tripData)
  },
  methods: {
    updateTravelType (id) {
      this.$store.commit('setTripData', {
        key: 'travelType',
        value: id
      })
    }
  }
}
</script>

<style scoped>

form {
  margin: 10px 50px;
  margin-top: 50px;
 
}
/**
* Make the field a flex-container, reverse the order so label is on top.
*/
.radio {
  width: 290px;
  margin: auto;
  
}

.bio-radio>label:before {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 25px;
    height: 25px;
    top: -2px;
    left: 0px;
    border: 2px solid;
    border-color: #477C89;
    border-radius: 50%;
    background-color: #fff;
  }

 .bio-radio>label:after {
    content: none;
    height: 14px;
    width: 14px;
    top: 3px;
    left: 5.5px;
    background-color: #477C89;
    border-color:#477C89;
    border-radius: 50%;
 }

</style>


