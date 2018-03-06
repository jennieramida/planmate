<template>
  <section class="container1 _pdt-4px">
    
    <div class="_pdv-12px helve _fs-5 _fw-600">
       Recommend places
    </div>

    <div class="boxbg _mgt-4px">
        <div class="helve _fw-600 _pdt-24px _cl-dark">
            What does Vasse like?
        </div>
        <div class="helve bluetext _fw-500 _fs-7 _pd-12px _pdh-24px _lh-125pct">
            Cafe - Museum - Shopping - Street Food - Dessert - View Point - Design Store - Market - Craft Beer
        </div>
        <!-- Map-->
        <div class="_pdt-12px">
          <div v-show="isShowing === 'place'">
            <div class="whitebg _pdv-12px">
                <gmap-autocomplete
                @place_changed="setPlace">
                </gmap-autocomplete>
                <button @click="usePlace">Add</button>
            </div>
            <div class="">  
              <gmap-map
              :center="center"
              :zoom="7"
              map-type-id="terrain"
              style="width: 100%; height: 67vh"
              >
              <gmap-marker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                :clickable="true"
                :draggable="true"
                @click="center=m.position"
              ></gmap-marker>
              </gmap-map>
            </div> 
          </div>
        </div> 

        <!-- Advice -->
        <div v-show="isShowing === 'advice'">
          some advice
        </div>
    </div>

  </section>    
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import Button from '~/components/MyButton.vue'
import * as VueGoogleMaps from '~/node_modules/vue2-google-maps/src/main'

export default {
  components: {
    AppLogo,
    Button
  },
  data () {
    return {
      place: null,
      isShowing: 'place',
      center: {lat: 10.0, lng: 10.0},
      markers: [{
        position: {lat: 10.0, lng: 10.0}
      }, {
        position: {lat: 11.0, lng: 11.0}
      }]
    }
  },
  methods: {
    setPlace (place) {
      this.place = place
    },
    usePlace () {
      if (this.place) {
        this.markers.push({
          position: {
            lat: this.place.geometry.location.lat(),
            lng: this.place.geometry.location.lng(),
          }
        })
        this.center.lat = this.place.geometry.location.lat()
        this.center.lng = this.place.geometry.location.lng()
        this.place = null;
      }
    }
  }
}
</script>

<style scoped>
.container1 {
  /* dont make the whole container a flexbox */
  /* min-height: 100vh; */
  /* display: flex;
  justify-content: center;*/
  align-items: center; 
  text-align: center;
  background-color: #69AFC0 ;
}

.boxbg {
    background-color:#E9F4F5;
}
.icon {
  padding-top: 50px;
}


.title {
  font-family: 'Yeseva One', cursive;
  font-size: 28px;
  padding: 5px;
}
.subtitle {
  font-size: 12;
  font-family: 'Helvetica';
  letter-spacing: 0px;
  word-spacing: 0px;
}


.whitebg {
    background-color: white;
}
.helve {
    font-family: 'Helvetica';
    color: white;
}

.bluetext {
    color: #69AFC0;
}
label {
    font-size: 16px;
}

.cityhead {
    color: white;
    font-family: 'Yeseva One', cursive;
    font-size: 23px;
    letter-spacing: 1.01px;
}
</style>
