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
            What's your friend like?
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
              <gmap-autocomplete 
              v-bind:options="bound"
              class="_mgh-4px" 
              @place_changed="setPlace">
              </gmap-autocomplete>
              <div class="_mgh-4px _tal-ct _dp-il btn _cs-pt" @click="usePlace">Add Place</div>
            </div>

            <div class="">  
              <gmap-map
              :center="center"
              :zoom="12"
              map-type-id="terrain"
              style="width: 100%; height: 71vh"
              >
              <gmap-info-window 
              class="_fs-3 _pd-12px"
              :options="infoOptions" 
              :position="infoWindowPos" 
              :opened="infoWinOpen" 
              @closeclick="infoWinOpen=false">
              <div class="_mg-4px">
                <div class="_fs-7 _fw-700 _pdv-4px greentext">{{infoContent}}</div>
                <div class="bluetext _fw-400">{{infoAddress}}</div>
                <div class="bluetext _fw-400">Rating ★ {{infoWebsite}}</div>
              </div>
              </gmap-info-window>

              <GmapMarker v-for="(marker, index) in markers"
              :key="index"
              :position="marker.position"
              label="★"
              :clickable="true" 
              @click="toggleInfoWindow(marker, index)"
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
import * as Firebase from '~/services/firebase'

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
      center: {lat: '', lng: ''},
      markers: [{
        position: {lat: '', lng: ''},
        infoText: ''
      }],
      city: {},
      dataPlace: {},
      infoContent: '',
      infoWindowPos: null,
      infoWinOpen: false,
      currentMidx: null,
      infoOptions: {
            pixelOffset: {
              width: 0,
              height: -35
            }
      },
    }
  },
  watch: {
    '$store.state.currentForm' () { // ดักว่าเมื่อไหร่ forms เปลี่ยน === หมายถึง firebase load เสร็จ ... จริงๆใช้ watch แทนได้ทุกหน้าเลย 555 ลืมไป โอเคค่ะ
      const id = this.$route.params.id
      const city = this.$route.params.city
      const form = this.$store.state.currentForm // <---
      // ไม่ต้องดักอีกต่อไป ใช้ watch แล้ว efficient กว่ามาก
      this.center = { // <--
        lat: form.destinations[city].lat,
        lng: form.destinations[city].lng
      }
      this.cityname = form.destinations[city].city
      this.interest = form.destinations[city].interests.q
    }
  },
  computed: {
    bound() {
      const id = this.$route.params.id
      const city = this.$route.params.city
      const form = this.$store.state.currentForm
      
      if (!form.destinations[city]) {
        return {  
          bounds: {north: 1.4, south: 1.2, east: 104, west: 102},
          strictBounds: true
        }
      }
      else  {
        return {  
          bounds: {
            north: (form.destinations[city].lat)+0.01, 
            south: (form.destinations[city].lat)-0.01, 
            east: (form.destinations[city].lng)+0.1, 
            west: (form.destinations[city].lng)-0.1
            },
          strictBounds: true
        }
      }
    }
  },

  methods: {
    setPlace (place) {
      this.place = place
      this.center.lat = this.place.geometry.location.lat()
      this.center.lng = this.place.geometry.location.lng()

    },

    usePlace () {

     console.log(this.place)
      if (this.place) {
        this.markers.push({
          position: {
            lat: this.place.geometry.location.lat(),
            lng: this.place.geometry.location.lng(),
          },
          infoText: this.place.name,
          infoTextAd: this.place.formatted_address,
          infoWeb: this.place.rating
        })
        this.center.lat = this.place.geometry.location.lat()
        this.center.lng = this.place.geometry.location.lng()
        // this.dataPlace = this.place
        // this.place = null;
      }
      // console.log(this.dataPlace)

      const formId = this.$route.params.formId
      const city = this.$route.params.city
      let form = JSON.parse(JSON.stringify(this.$store.state.currentForm))
      // let form = Object.assign({}, this.$store.state.currentForm) // <---
      // ไม่ต้องดักอีกต่อไป ใช้ watch แล้ว efficient กว่ามาก

      // extract only what we need from this.place
           let placeData = {
        name: this.place.name,
        lat: this.place.geometry.location.lat(),
        lng: this.place.geometry.location.lng(),
        address: this.place.formatted_address,
        website: this.place.website,
        rating: this.place.rating

      }

      if (!form.destinations[city].interests.a) {
        // no existing array
        form.destinations[city].interests.a = [placeData]
      } else {
        form.destinations[city].interests.a.push(placeData)
      }
      console.log(form.destinations) // √
      Firebase.updateForm(this.$store.state.UID, formId, {
        destinations: form.destinations
      })

    },
      
    toggleInfoWindow: function(marker, idx) {
      this.infoWindowPos = marker.position;
      this.infoContent = marker.infoText;
      this.infoAddress = marker.infoTextAd;
      this.infoWebsite = marker.infoWeb;
      //check if its the same marker that was selected if yes toggle
      if (this.currentMidx == idx) {
        this.infoWinOpen = !this.infoWinOpen;
      }
      //if different marker set infowindow to open and reset current marker index
      else {
        this.infoWinOpen = true;
        this.currentMidx = idx;
      }
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

.gm-style .gm-style-iw {
    font-weight: 500;
    font-size: 14px;
    padding: 20px;
    overflow: hidden;
}
</style>
