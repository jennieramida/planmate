<template>
  <div class="fix">
    <MyDefaultLayout>
      <Header hasBC="true"></Header>
      <div class="_pdt-64px _mgt-48px _tal-ct _cl-black">
        <div class="_fw-800 _fs-2 _pdt-64px">
          Travelers
        </div>
        <div class="subtitle _fw-100 _fs-6 _pdt-4px">
          Who will you travel with?
        </div>

        <div class="radio _tal-l _pdh-24px _pdt-12px _mgt-12px _fw-100 _cl-dark">
          <div class="bio-radio _pdv-8px">
            <input id="r1" type="radio" name="radio-test1" checked>
            <label for="r1">
              <div class="_pdl-12px _fs-4">
                Solo Trip
              </div>
            </label>
          </div>
          <div class="bio-radio _pdv-8px">
            <input id="r2" type="radio" name="radio-test1" checked>
            <label for="r2">
              <div class="_pdl-12px _fs-4">
                Travel with Family
              </div>
            </label>
          </div>
          <div class="bio-radio _pdv-8px">
            <input id="r3" type="radio" name="radio-test1" checked>
            <label for="r3">
              <div class="_pdl-12px _fs-4">
                Travel with Friends
              </div>
            </label>
          </div>
          <div class="bio-radio _pdv-8px">
            <input id="r4" type="radio" name="radio-test1" checked>
            <label for="r4">
              <div class="_pdl-12px _fs-4">
                Travel with Partner
              </div>
            </label>
          </div>
          <div class="bio-radio _pdv-8px">
            <input id="r5" type="radio" name="radio-test1" checked>
            <label for="r5">
              <div class="_pdl-12px _fs-4">
                Others
              </div>
            </label>
          </div>
        </div>

      </div>
      <Footer title='Next' link='/destination' back='Back'></Footer>
    </MyDefaultLayout>
  </div> 
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

form {
  margin: 10px 50px;
  margin-top: 50px;
  margin-bottom: 0px;
}
/**
* Make the field a flex-container, reverse the order so label is on top.
*/
.radio {
  width: 290px;
  margin: auto;
  margin-bottom: 0px;
}

.bio-radio>label:before {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 22px;
    height: 22px;
    left: 0px;
    border: 1.5px solid;
    border-color: #477C89;
    border-radius: 50%;
    background-color: #fff;
  }

 .bio-radio>label:after {
    content: none;
    height: 12px;
    width: 12px;
    top: 5px;
    left: 5px;
    background-color: #477C89;
    border-color:#477C89;
    border-radius: 50%;
 } 
</style>


