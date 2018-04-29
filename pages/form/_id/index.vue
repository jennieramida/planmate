<template>
  <MyDefaultLayout>
    <Header></Header>


      <div class="cityhead helve _pdv-24px _mgt-64px _mgbt-0px">
        <div class=" _fw-800 _fs-2">
          Trip to Italy
        </div>
        <div class="_fw-300 _fs-6 _pdt-4px">
          10 people help you plan this trip.
        </div>
      </div>

      <div class="boxbg _mgbt-0px">
        <div class="lo-6">
          <div class="menuA _pdv-12px helve bluetext _cs-pt" @click="isShowing = 'map'">Map</div>
          <div class="menuB _pdv-12px helve bluetext _cs-pt" @click="isShowing = 'list'">List</div>
        </div>

          <!-- Map-->
          <div v-show="isShowing === 'map'">  
            <gmap-map
            :center="center"
            :zoom="6"
            map-type-id="terrain"
            style="width: 100%; height: 69vh"
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

          <!-- Advice -->
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
              <div class="lo-6 _pdt-12px">
                <div class="_tal-r">
                  <div>
                    <nuxt-link to="/form/id/cities">
                      <img class="_pd-8px" src="~/assets/venice.png">
                    </nuxt-link>
                  </div>
                  <div>
                  <img class="_pd-8px" src="~/assets/paris.png">
                  </div>
                </div>
                
              <div class="_tal-l">
                  <div>
                    <img class="_pd-8px" src="~/assets/paris.png">
                  </div>
                  <div>
                  <img class="_pd-8px" src="~/assets/venice.png">
                  </div>
                </div>
              </div>    
                
                <!-- <div class="" v-for="(x, i) in $store.state.formData.destinations" :key="i">

                    <div class="_pdt-8px">{{ city.advices}}</div>

                </div> -->


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
      center: {
        lat: 0,
        lng: 0
      },
      markers: [{
        position: {lat: 45.4408, lng: 12.3155}
      }, {
        position: {lat: 45.4642, lng: 9.1900}
      }, {
        position: {lat: 43.7228, lng: 10.4017}
      }, {
        position: {lat: 41.9028, lng: 12.4964}
      }],
    }
  },
  created () {
    let cityParam = this.$route.params.city
    console.log(cityParam)
    // let cityData = this.$store.state.formData.destinations.filter(x => x.placeid === cityParam)
    // console.log(cityData)
    // this.city = cityData[0]
    this.center = {
      lat: 44.2008,
      lng: 10.8
    }
  },

  methods: {
    setPlace (place) {
      this.place = place
    },
    // usePlace () {
    //   if (this.place) {
    //     this.markers.push({
    //       position: {
    //         lat: this.$store.state.formData.destinations.lat,
    //         lng: this.$store.state.formData.destinations.lng,
    //       }
    //     })
    //     this.center.lat = this.place.geometry.location.lat()
    //     this.center.lng = this.place.geometry.location.lng()
    //     this.place = null;
    //   }
    // }
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
</style>




