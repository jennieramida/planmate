<template>
  <MyDefaultLayout>
    <Header></Header>


      <div class="cityhead helve _pdv-24px _mgt-64px _mgbt-0px​">
        <div class=" _fw-800 _fs-3">
        <nuxt-link :to='`/userpage`'>←</nuxt-link>
         {{ title }}
        </div>
      </div>


      <div class="boxbg _mgbt-0px">
        <div class="lo-4">
          <div class="menuA _pdv-12px helve bluetext _cs-pt" @click="isShowing = 'map'">Map</div>
          <div class="menuB _pdv-12px helve bluetext _cs-pt" @click="isShowing = 'list'">List</div>
          <div class="menuC _pdv-12px helve bluetext _cs-pt" @click="isShowing = 'summary'">Summary</div>
        </div>

          <!-- Map-->
          <div v-show="isShowing === 'map'">  
            <gmap-map
            :center="center"
            :zoom="6"
            map-type-id="terrain"
            style="width: 100%; height: 72vh"
            :clickable="true"
            >
              <gmap-info-window 
              :options="infoOptions" 
              :position="infoWindowPos" 
              :opened="infoWinOpen" 
              @closeclick="infoWinOpen=false">
                <nuxt-link :to='`/form/${$route.params.formId}/${infoLink}`'>
                  <div class="_pd-2px _fs-6 _fw-800">{{infoContent}}</div>
                </nuxt-link>
              </gmap-info-window>

              <gmap-marker 
              :key="index" 
              v-for="(m,index) in markers" 
              :position="m.position" 
              :clickable="true" 
              @click="toggleInfoWindow(m,i)">
              </gmap-marker>

            </gmap-map>
          </div>

          <!-- List -->
          <div class="">
            <div v-show="isShowing === 'list'">
              <div class="advicebox">
                <div class="_pdt-24px _fw-800 _fs-3">
                  Cities
                </div>
                <div class="subtitle _fw-100 _fs-6 _pdt-4px _pdh-48px">
                  All destination you will visit on this trip
                </div>

                <!-- All Form -->
                  <div class="lo-6 _pdt-12px _pdbt-256px _mgh-24px" v-if="$store.state.currentForm && $store.state.currentForm.destinations">
                    <div class="_fw-100 _fs-6 _pdt-24px " v-for="(value, key, index) in $store.state.currentForm.destinations" :key="index">
                      <nuxt-link :to='`/form/${$route.params.formId}/${value.placeid}`'>
                        <div >
                        <img class="_mgh-12px citiesimg _tal-ct" :src='`${value.photo}`'/>
                        </div>
                        <div class="_pdt-12px _fw-600">
                          {{ value.city }}
                        </div>
                      </nuxt-link>
                    </div>
                  </div>
              </div>
            </div>
          </div>

          <!-- Summary -->
          <div class="">
            <div v-show="isShowing === 'summary'">
              <div class="_pdt-24px _fw-800 _fs-3">
                  Summary
                </div>
                <div class="subtitle _fw-100 _fs-6 _pdt-4px _pdh-48px">
                  All data from your friends for this trip
                </div>

              <div class="advicebox _tal-l _pdt-24px _pdh-24px">
              <div class="_fs-5 _fw-800 _pd-24px">Trip Name : {{ title }}</div>
              <div class="_pdt-12px _fw-600 _pdh-24px">Cities : </div>
                <div class="_fw-100 _fs-6 _pdh-24px " v-for="(value, key, index) in $store.state.currentForm.destinations" :key="index">

                    <div class="_pdt-12px _fw-300">
                     ▸ {{ value.city }}
                    </div>
                </div>
                <div class="lo-6 _tal-ct _mgh-48px _pdt-128px">
                  <div class="btn _mgh-4px">Print Summary</div>
                  <div class="btn _mgh-4px">Send as E-mail</div>
                </div>
              </div>
            </div>
          </div>

      </div>
    
  </MyDefaultLayout>
</template>

<script>
import * as VueGoogleMaps from '~/node_modules/vue2-google-maps/src/main'
import MyDefaultLayout from '~/layouts/MyDefaultLayout.vue'
import Button from '~/components/MyButton.vue'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import AdviceItem from '~/components/AdviceItem.vue'

export default {
  components: {
    MyDefaultLayout,
    Button,
    Header,
    Footer,
    AdviceItem
  },
  data () {
    return {
      city: '',
      place: null,
      isShowing: 'map',
      isInfo: false,
      center: {
        lat: '',
        lng: ''
      },
      markers: [{
        position: {lat: '', lng: ''},
        infoText: '',
        cityLink: ''
      }],
      dataPlace: {},
      position: '',
      infoContent: '',
      infoLink: '',
      infoWindowPos: null,
      infoWinOpen: false,
      currentMidx: null,
      forEach:'',
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
      const form = this.$store.state.currentForm
      const cities = Object.keys(form.destinations).map(i => form.destinations[i])

      // const placeid = form.destinations[this.$route.params.placeid].placeid 
      // this.cityname = form.destinations[city].city
      console.log(name)// <---
      // ไม่ต้องดักอีกต่อไป ใช้ watch แล้ว efficient กว่ามาก
  
      this.center = { // <--
        lat: cities[0].lat,
        lng: cities[0].lng
      }
      console.log(cities)
      let markers = []
      cities.forEach((x) => {
        markers.push({
          position: {
            lat: x.lat,
            lng: x.lng
          },
          infoText: x.city,
          cityLink: x.placeid
        })
      })
   
      this.markers = markers
    }
  },
  // created () {

  //   const form = this.$store.state.forms[this.$route.params.id]
    
  //   this.center = {
  //     lat: form.destinations[city].lat,
  //     lng: form.destinations[city].lng
  //   }
  // },
    computed: {
    title () {
      if (!this.$store.state.currentForm) {
        return 'Thinking...'
      } else {
        return this.$store.state.currentForm.title
      }
    },
  },

  methods: {
    setPlace (place) {
      this.place = place
      this.center.lat = this.place.geometry.location.lat()
      this.center.lng = this.place.geometry.location.lng()
    },
    usePlace () {
      if (this.place) {
        this.markers.push({
          position: {
            lat: this.place.geometry.location.lat(),
            lng: this.place.geometry.location.lng(),
          },
          infoText: this.place.name
        })
        this.center.lat = this.place.geometry.location.lat()
        this.center.lng = this.place.geometry.location.lng()
      }
    },
    toggleInfoWindow: function(marker, idx) {
      const id = this.$route.params.id
      const form = this.$store.state.currentForm
      const cities = Object.keys(form.destinations).map(i => form.destinations[i])
      this.infoWindowPos = marker.position;
      this.infoContent = marker.infoText;
      this.infoLink = marker.cityLink
      

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

.boxbg {
    background-color: white;
    border-radius: 6px;
    box-shadow: 0px 0px 6px 2px #477C89;
    max-height: 60vh;
}

.bluebg {
  background-color: #E9F4F5;
  height: 90px;
  overflow-y: auto;
}

.helve {
    font-family: 'Helvetica';
    font-weight: 600;
}
.bluetext {
      color: #69AFC0;
}
.cityhead {
    color: white;
    font-size: 23px;
    background-color: #69AFC0;
    letter-spacing: 0.5px;
}

.bio-card.-horizontal>.bio-card-cover {
    width: 50px;
    height: 50px;
    border-radius: 50px;
}

.bio-card:not(.u-rise) {
    border: 0px solid rgba(230,230,230,0.8);
}

.advicebox {
  background-color: white;
  min-height: 60vh;
}

.citiesimg {
  width: 180px;
  height: 120px;
  border-radius: 6px;
}

.blue {
  color :  #69AFC0 !important;
  
}

a:-webkit-any-link {
    color:#477C89; }

element.style {
  border-radius: 20px !important;
}


.btn {
  background-color:#477C89;
  color: white;
  font-weight: 500;
  line-height: 36px;
  border-radius: 10px;
  padding: 2px;
  box-shadow: 1px 2px 4px 0 rgba(67, 124, 128, 0.42);
}
</style>




