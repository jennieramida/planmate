<template>
  <div class="fix">
    <MyDefaultLayout >
      <Header hasBC="true"></Header>
        <div class="_pdt-64px _mgt-48px _mgbt-0px _tal-ct _cl-black">
          <div >
          <div class="_fw-800 _pdt-64px _fs-2 _pdt-12px">
            Trip Name
          </div>
          </div>
          <div class="_fw-100 _fs-6 _pdt-4px">
            Please name your trip
          </div>

          <div class=" _pdh-12px _pdt-12px _mgt-12px _fw-100 _cl-dark _pdbt-0px">
            <form action="">     
              <div class="field">
                <input ref="tripNameInput" type="TripName" name="TripName" id="TripName" placeholder="Add your trip name"
                  @change="updateTripName()" />
                <label for="TripName">Trip Name</label>
              </div>
            </form>
            <!-- {{ tripName }} -->
          </div>

        </div>
      <Footer 
        title='Next'
        :link='`/create/${$route.params.id}/travelers`'
        back='Back'
      >
      </Footer>
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
  },
  data () {
    return {
      tripName: ''
    }
  },
  created () {
    console.log(this.$route)
  },
  methods: {
    updateTripName () {
      let title = this.$refs.tripNameInput.value
      this.$store.commit('setTripData', {
        key: 'title',
        value: title
      })
      this.$store.commit('setTripData', {
        key: 'id',
        value: this.$route.params.id
      })
    }
  }
}
</script>

<style>
/* .fix {
  position: fixed;
} */
form {
  margin: 10px 50px;
  margin-top: 50px;
  margin-bottom: 0px;
}
/**
* Make the field a flex-container, reverse the order so label is on top.
*/
 
.form {
  margin: center;
}
.field {
  display: flex;
  flex-flow: column-reverse;
  margin-bottom: 0px;
  width: 300px;
  margin: center;
}
/**
* Add a transition to the label and input.
* I'm not even sure that touch-action: manipulation works on
* inputs, but hey, it's new and cool and could remove the 
* pesky delay.
*/
label, input {
  transition: all 0.2s;
  touch-action: manipulation;
}

input {
  font-size: 16px;
  border: 0;
  border-bottom: 1px solid #ccc;
  font-family: inherit;
  -webkit-appearance: none;
  border-radius: 0;
  padding: 50;
  cursor: text;
  background-color: none;
}

input:focus {
  outline: 0;
  border-bottom: 1px solid #666;
}

label {

  font-size: 12px;
  text-align: left;
  letter-spacing: 0.05em;
}
/**
* Translate down and scale the label up to cover the placeholder,
* when following an input (with placeholder-shown support).
* Also make sure the label is only on one row, at max 2/3rds of the
* field—to make sure it scales properly and doesn't wrap.
*/
input:placeholder-shown + label {
  cursor: text;
  max-width: 50%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transform-origin: left bottom;
  transform: translate(0, 2.125rem) scale(1.5);
  margin-bottom: 10px;
}
/**
* By default, the placeholder should be transparent. Also, it should 
* inherit the transition.
*/
::-webkit-input-placeholder {
  opacity: 0;
  transition: 'Helvetica';
}
/**
* Show the placeholder when the input is focused.
*/
input:focus::-webkit-input-placeholder {
  opacity: 1;
}
/**
* When the element is focused, remove the label transform.
* Also, do this when the placeholder is _not_ shown, i.e. when 
* there's something in the input at all.
*/
input:not(:placeholder-shown) + label,
input:focus + label {
  transform: translate(0, 0) scale(1);
  cursor: pointer;
}
</style>


