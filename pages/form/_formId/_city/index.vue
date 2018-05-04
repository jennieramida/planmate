<template>
  <MyDefaultLayout>
    <Header></Header>
    <div class="cityhead helve _pdv-24px _mgt-64px _mgbt-0px">
      <div class="_pdt-12px">
      <nuxt-link :to='`/form/${$route.params.formId}`'>
        {{ title }}
      </nuxt-link>
      → {{ cityName }}
      </div>
    </div>

    <div class="boxbg _mgbt-0px">
        <div class="lo-6">
          <div class="menuA _pdv-12px helve bluetext _cs-pt" @click="isShowing = 'place'">Place</div>
          <div class="menuB _pdv-12px helve bluetext _cs-pt" @click="isShowing = 'advice'">Advice</div>
        </div>

        <!-- Map-->
         <div v-show="isShowing === 'place'">  
          <gmap-map
          :center="center"
          :zoom="12"
          map-type-id="terrain"
          style="width: 100%; height: 72vh"
          >
            <gmap-info-window 
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

            <gmap-marker 
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position" 
            :clickable="true" 
            @click="toggleInfoWindow(m,i)">
            </gmap-marker>

          </gmap-map>
        </div>

        <!-- Advice -->
        <div class="">
          <div v-show="isShowing === 'advice'">
            <div class="advicebox">
              <!-- Should loop1 -->
              <div class="_pdh-48px _tal-l _pdt-24px _mgbt-24px ">
                <div class="" v-for="(advice, i) in advices" :key="i"> 
                  <AdviceAnswerItem 
                    :question="advice.q"
                    :answers="advice.a"
                  />
                </div> 
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
import AdviceAnswerItem from '~/components/AdviceAnswerItem'

export default {
  components: {
    MyDefaultLayout,
    AdviceAnswerItem,
    Button,
    Header,
    Footer,

  },
  data () {
    return {
      city: '',
      place: null,
      isShowing: 'place',
      advices: {
        a:[],
        q:{}
      },
      center: {
        lat: '',
        lng: ''
      },
      markers: [{
        position: {
          lat: '',
          lng: '',
        },
        infoText:'',
        infoWebsite:'',
        infoAddress:''
      }],
      infoContent: '',
      infoWindowPos: null,
      infoWinOpen: false,
      currentMidx: null,
      //optional: offset infowindow so it visually sits nicely on top of our marker
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
      },
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
            lat: this.$store.state.formData.destinations.lat,
            lng: this.$store.state.formData.destinations.lng,
          }
        })
        this.center.lat = this.place.geometry.location.lat()
        this.center.lng = this.place.geometry.location.lng()
        this.place = null;
      }
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
  },
   computed: {
    title () {
      if (!this.$store.state.currentForm) {
        return 'Thinking...'
      } else {
        return this.$store.state.currentForm.title
      }
    },
    cityName() {
      return this.$route.params.city
    }
    //  advicesAnswerList() {
    //    return advices[0].a
    // }
  },
  watch: {
    '$store.state.currentForm' () { // ดักว่าเมื่อไหร่ forms เปลี่ยน === หมายถึง firebase load เสร็จ ... จริงๆใช้ watch แทนได้ทุกหน้าเลย 555 ลืมไป โอเคค่ะ
      const id = this.$route.params.id
      const placeId = this.$route.params.city
      const form = this.$store.state.currentForm
      
      console.log(placeId)
      const cities = form.destinations[placeId]
      // const cities = Object.keys(form.destinations).map(placeId => form.destinations[placeId])
      console.log(cities.advices)
      // const placeid = form.destinations[this.$route.params.placeid].placeid 
      // this.cityname = form.destinations[city].city
      // ไม่ต้องดักอีกต่อไป ใช้ watch แล้ว efficient กว่ามาก
  
      this.center = { // <--
        lat: cities.lat,
        lng: cities.lng
      }
      this.advices = cities.advices
      this.placeAnswer = cities.interests.a
      console.log(this.placeAnswer)
      let markers = []
      this.placeAnswer.forEach((x) => {
        markers.push({
          position: { 
            lat: x.lat,
            lng: x.lng
          },
          infoText: x.name,
          infoTextAd: x.address,
          infoWeb: x.rating
        })
      })
      this.markers = markers
    }
  }
}
</script>

<style scoped>
.boxbg {
    background-color: white;
    border-radius: 6px;
    box-shadow: 0px 0px 6px 2px #477C89;
    max-height: calc(100vh - 90px);
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

.greentext {
  color: #477C89;
}
.cityhead {
    color: white !important;
    font-size: 23px;
    background-color: #69AFC0;
    letter-spacing: 1.01px;
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
}

.highhack {
  max-height: 50vh;
}

  a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
    text-decoration: none;
    color: white !important;
}
</style>




