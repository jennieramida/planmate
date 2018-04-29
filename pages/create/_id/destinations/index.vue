<template>
  <MyDefaultLayout>
    <Header hasBC="true"></Header>
      <div class="_pdt-64px _mgt-48px _tal-ct _cl-black">
        <div class="_fw-800 _fs-2 _pdt-64px">
          Destination
        </div>
        <div class="subtitle _fw-100 _fs-6 _pdt-4px">
          Which city will you go?
        </div>
      </div>

      <div class="_tal-ct _pdh-12px _pdt-12px _mgt-12px _fw-100 _cl-dark _pdbt-256px">
        <form action="">     
          <div class=" _pdl-24px field">
            <gmap-autocomplete
                @place_changed="setPlace">
            </gmap-autocomplete>
          </div>
        </form>
      </div>
        <Footer title='Next' :link='`/create/${$route.params.id}/destinations/${placeid}/interests`' back='Back'></Footer>
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
  data () {
    return {
      placeid: ''
    }
  },
  methods: {
    setPlace (x) {
      console.log (x)
      let lat = x.geometry.location.lat()
      let lng = x.geometry.location.lng()
      console.log(lat)
      console.log(lng)
      // let oldDestinations = JSON.parse(JSON.stringify(this.$store.state.tripData.destinations))
      const photo = x.photos[0].getUrl({
        maxWidth: 640
      });
      const placeid = x.address_components[0].short_name
      this.placeid = placeid
      // console.log(this.$route.params.id)
      let destinations = this.$store.state.forms[this.$route.params.id].destinations || {}
      console.log(destinations)
      destinations[placeid] = {
        city: x.formatted_address,
        interests: [],
        advices: [],
        photo,
        placeid,
        lat,
        lng
      }
      // console.log (destinations)
      Firebase.updateForm(this.$store.state.UID, this.$route.params.id, {
        destinations
      })
      // this.$store.commit('setTripData', {
      //   key: 'destinations',
      //   value: oldDestinations
      // })
      // this.$store.commit('setTripData', {
      //   key: 'currentCity',
      //   value: x.formatted_address
      // })

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
 
.form {
  margin: center;
}
.field {
  display: flex;
  flex-flow: column-reverse;
  margin-bottom: 40px;
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


