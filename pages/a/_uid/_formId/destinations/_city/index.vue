<template>
  <MyDefaultLayout>
    <Header></Header>
    <div class="cityhead helve _pdv-24px _mgt-48px _mgbt-0px">
       <div class="_pdt-16px">
         {{ cityname }}
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
        style="width: 100%; height: 61vh"
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
          <div>
            <div class="advicebox _pdh-48px _tal-l _pdv-24px _pdbt-128px _dp-ilb">
              <div class="" v-for="(advice, i) in advices" :key="i">
                <div class="_pdt-8px">{{ advice.q }}</div>
                  <div class="bio-textarea _pdv-24px">
                    <textarea v-model="adviceAnswers[i]" rows="3" placeholder="Give your advice">
                    </textarea>
                  </div>
                  <div class="_tal-ct _pdl-256px _mgl-24px _pdv-4px _dp-ilb">
                    <div class="btn _pdh-12px _cs-pt _mgbt-24px _dp-ilb" @click="receiveAdviceAnswer(i, adviceAnswers[i])">
                      Send
                    </div>
                  </div>
                  <div class="line _mgt-8px _mgbt-24px"></div>
                </div>
            </div> 
          </div>
        </div>
      </div>
    </div>
  <Footer title='Add Places' :link='`/a/${$route.params.uid}/${$route.params.formId}/destinations/${$route.params.city}/addplace`' back='Back' backMode="backToFriendPage"></Footer>
  </MyDefaultLayout>
</template>

<script>
import * as VueGoogleMaps from '~/node_modules/vue2-google-maps/src/main'
import MyDefaultLayout from '~/layouts/MyDefaultLayout.vue'
import Button from '~/components/MyButton.vue'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import AdviceItem from '~/components/AdviceItem.vue'
import * as Firebase from '~/services/firebase'
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
      city: {},
      advices: [],
      adviceAnswers: [],
      place: null,
      isShowing: 'place',
      cityname: 'loading...',
      // เราเคย define ไว้
      center: {
        lat: '',
        lng: ''
      },
      markers: [{
        position:{
          lat: '',
          lng: ''
        },
        infoText: ''
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
  //   this.city = cityData[0]
  //   this.center = {
  //     lat: cityData[0].lat,
  //     lng: cityData[0].lng
  //   }
  // },
  // No more computed yay
  watch: {
    '$store.state.currentForm' () { // ดักว่าเมื่อไหร่ forms เปลี่ยน === หมายถึง firebase load เสร็จ ... จริงๆใช้ watch แทนได้ทุกหน้าเลย 555 ลืมไป โอเคค่ะ
      const id = this.$route.params.id
      const placeId = this.$route.params.city
      const form = this.$store.state.currentForm
      
      console.log(placeId)
      const cities = form.destinations[placeId]
      this.cityname = form.destinations[placeId].city
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
      this.interests = cities.interests
      console.log(this.interests)
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
  
  },
  
  methods: {
    setPlace (place) {
      this.place = place
    },
    usePlace () {
      if (this.place) {
        this.markers.push({
          // position: {
          //   lat: this.$store.state.formData.destinations.lat,
          //   lng: this.$store.state.formData.destinations.lng,
          // }
        })
        this.center.lat = this.place.geometry.location.lat()
        this.center.lng = this.place.geometry.location.lng()
        this.place = null;
      }
    },
  
    receiveAdviceAnswer (i, answer) {
      console.log(i) // Art galleries
      // this.$store.commit('setAdviceAnswer', {
      //   formId: this.$route.params.id,
      //   destinationKey: this.$route.params.placeid,
      //   adviceAnswer: x
      // })
      const formId = this.$route.params.formId
      const city = this.$route.params.city
      let form = Object.assign({}, this.$store.state.currentForm) // <---
      // ไม่ต้องดักอีกต่อไป ใช้ watch แล้ว efficient กว่ามาก
      if (!form.destinations[city].advices[i].a) {
        // no existing array
        form.destinations[city].advices[i].a = [answer]
      } else {
        form.destinations[city].advices[i].a.push(answer)
      }
      console.log(form.destinations)
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
.cityhead {
    color: white;
    font-size: 23px;
    background-color: #69AFC0;
    letter-spacing: 1.01px;
}

.line {
  padding-top: 1px;
  background-color: #69AFC0;
  margin-bottom: 24px;
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
  min-height: 61vh !important;
}

.line {
  padding-top: 1px;
  background-color: #69AFC0;
  margin-bottom: 24px;
}

.btn {
  background-color:#477C89;
  color: white;
  font-weight: 500;
  border-radius: 6px;
  padding: 8px;
  width: 100%;
  box-shadow: 1px 2px 4px 0 rgba(67, 124, 128, 0.42);
}
</style>




