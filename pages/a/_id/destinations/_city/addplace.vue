<template>
  <MyDefaultLayout>
    <div>
      <div class="lo-4 head">
        <div class="_pdv-12px helve _fs-6 _fw-100 _tal-l _pdl-24px">
          <!-- <a href="javascript: history.back()">
          Cancel
          </a> -->
        </div>
        <div class="_pdv-12px helve _cl-white _tal-ct _fs-5 _fw-600" >
          Add places
        </div>
        <div class="_pdv-12px helve  _fs-6 _fw-500 _tal-r _pdr-24px">
          <a href="javascript: history.back()">
            Done
          </a>
        </div> 
      </div>
    </div>

    <div>
        <div class="helve _fs-5 _fw-600 _pdt-24px _cl-dark _pdl-24px _tal-l">
            What's Thanya like?
        </div>

        <div class="_pdh-24px _mgt-12px _tal-l" v-if="city">
          <div class="_fw-100 _fs-6 _pdt-8px _dp-il" v-for="(interest, i) in interest" :key="i">   
            <div class="_mgr-4px _pdv-4px _pdh-8px _dp-il tag">
              {{ interest }}
            </div>
          </div>  
        </div>


        <!-- Map-->
        <div class="_pdt-12px">
            <div class="whitebg _pdv-12px _tal-ct">
              <gmap-autocomplete :options="{
                bounds: {north: 1.4, south: 1.2, east: 104, west: 102},
                strictBounds: true
              }" class="_mgh-4px" @place_changed="setPlace">
              </gmap-autocomplete>
              <div class="_mgh-4px _tal-ct _dp-il btn _cs-pt" @click="usePlace">Add Place</div>
            </div>

            <div class="">  
              <gmap-map
              :center="center"
              :zoom="12"
              map-type-id="terrain"
              style="width: 100%; height: 71vh"
              @click="toggleInfo"
              >
            
              <GmapMarker v-for="(marker, index) in markers"
              :key="index"
              :position="marker.position"
              label="★"
              @click="toggleInfo"
              />

              <!-- <GmapInfoWindow
                v-if="infoActive"
                z-index =1>
                (Your content here)
              </GmapInfoWindow> -->

              <GmapMarker
                v-if="this.place"
                label="☆"
                :position="{
                  lat: this.place.geometry.location.lat(),
                  lng: this.place.geometry.location.lng(),
                }"
              />
              </gmap-map>
            </div> 
 
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
      infoActive: false,
      interest: [],
      center: {lat: 10.0, lng: 10.0},
      markers: [{
        position: {lat: 10.0, lng: 10.0}
      }, {
        position: {lat: 11.0, lng: 11.0}
      }],
      city: {},
      dataPlace: {}
    }
  },
  watch: {
    '$store.state.forms' () { // ดักว่าเมื่อไหร่ forms เปลี่ยน === หมายถึง firebase load เสร็จ ... จริงๆใช้ watch แทนได้ทุกหน้าเลย 555 ลืมไป โอเคค่ะ
      const id = this.$route.params.id
      const city = this.$route.params.city
      const form = this.$store.state.forms[id] // <---
      // ไม่ต้องดักอีกต่อไป ใช้ watch แล้ว efficient กว่ามาก
      this.center = { // <--
        lat: form.destinations[city].lat,
        lng: form.destinations[city].lng
      }
      this.cityname = form.destinations[city].city
      this.interest = form.destinations[city].interests.q
    }
  },
  methods: {
    setPlace (place) {
      this.place = place
      this.center.lat = this.place.geometry.location.lat()
      this.center.lng = this.place.geometry.location.lng()
    },
    usePlace (place) {
      console.log(place)
      
      if (this.place) {
        this.markers.push({
          position: {
            lat: this.place.geometry.location.lat(),
            lng: this.place.geometry.location.lng(),
          }
        })
        this.center.lat = this.place.geometry.location.lat()
        this.center.lng = this.place.geometry.location.lng()
        this.dataPlace = this.place
        this.place = null;
      }
      console.log(this.dataPlace)

      let Place = this.dataPlace
      let placeName = Place.name
      let placeLat = Place.geometry.location.lat()
      let placeLng = Place.geometry.location.lng()
      let placeAddress = Place.formatted_address
      let placeWebsite = Place.website
      let placeRating = Place.rating
      const photoUrl = Place.photos[0].getUrl({
        maxWidth: 640
      });
      
       this.$store.commit('addPlace', {
        formId: this.$route.params.id,
        destinationKey: this.$route.params.placeid,
        place: Place
      })

      Firebase.updateForm(this.$store.state.UID, this.$route.params.id, {
       destinations: this.$store.state.forms[this.$route.params.id].destinations
      })
    },

    toggleInfo() {
      this.infoActive = !this.infoActive
    }
  }
}
</script>

<style scoped>

.head {
  background-color: #477C89;
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

.tag {
  background-color:#69AFC0;
  color: white;
  font-weight: 500;
  line-height: 36px;
  border-radius: 4px;
  
}

.btn {
  background-color:#477C89;
  color: white;
  font-weight: 500;
  line-height: 36px;
  border-radius: 6px;
  padding: 8px;
  box-shadow: 1px 2px 4px 0 rgba(67, 124, 128, 0.42);
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

input {
    font-size: 16px;
    width: 50%;
    border: 1px solid #69AFC0;
    font-family: inherit;
    -webkit-appearance: none;
    border-radius: 20px;
    padding: 6px;
    padding-left: 10px;
    margin-right: 6px !important;
    display: inline;
    cursor: text;
}


  a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
    text-decoration: none;
    color: white !important;
}
</style>
