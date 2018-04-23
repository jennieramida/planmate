<template>
  <MyDefaultLayout>
    <div>
      <div class="lo-4 head">
        <div class="_pdv-12px helve _fs-6 _fw-100 _tal-l _pdl-24px">
          <nuxt-link :to='`/a/${$route.params.id}/destinations`'>
            Cancel
          </nuxt-link>
        </div>
        <div class="_pdv-12px helve _cl-white _tal-ct _fs-5 _fw-600" >
          Add places
        </div>
        <div class="_pdv-12px helve  _fs-6 _fw-100 _tal-r _pdr-24px">
          <nuxt-link :to='`/a/${$route.params.id}/destinations`'>
            Done
          </nuxt-link>
        </div> 
      </div>
    </div>

    <div>
        <div class="helve _fs-5 _fw-600 _pdt-24px _cl-dark _pdl-24px _tal-l">
            What's Thanya like?
        </div>

        <div class="_pdh-24px _mgt-12px _tal-l">
          <div class="_fw-100 _fs-6 _pdt-24px" v-for="(x, i) in $store.state.formData.destinations" :key="i">   
                  <div class="_pdt-8px">{{ x.interests }}</div>
        </div>
        </div>


        <!-- Map-->
        <div class="_pdt-12px">
            <div class="whitebg _pdv-12px _tal-ct">
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
              style="width: 100%; height: 68vh"
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

        <!-- Advice -->
        <div v-show="isShowing === 'advice'">
          some advice
        </div>
    </div>

  </MyDefaultLayout>   
</template>

<script>
import MyDefaultLayout from '~/layouts/MyDefaultLayout.vue'
import Button from '~/components/MyButton.vue'
import * as VueGoogleMaps from '~/node_modules/vue2-google-maps/src/main'
import IntTag from '~/components/IntTag.vue'

export default {
  components: {
    MyDefaultLayout,
    Button,
    IntTag
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
      }],
      tagData: [
        {
          interest: 'Design Museum'
      },{
          interest: 'Gallery'
      },{
          interest: 'Coffee'
      },{
          interest: 'Local Food'
      },{
          interest: 'Park'
      },{
          interest: 'Jazz Bar'
      }
      ]
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

.head {
  background-color: #69AFC0;
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

</style>
