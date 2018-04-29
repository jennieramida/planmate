<template>
  <MyDefaultLayout>
    <Header></Header>
    <div class="cityhead helve _pdv-24px _mgt-48px _mgbt-0px">
       <div class="_pdt-16px">{{ city.city }}
         
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
          style="width: 100%; height: 62vh"
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
          <div v-show="isShowing === 'advice'">
            <div class="advicebox">

            <div class="_pdh-48px _tal-l _pdv-24px _pdbt-128px">
              <div class="" v-for="(advice, i) in city.advices" :key="i">
                  <div class="_pdt-8px">{{ advice }}</div>
            
                  <div class="_tal-r _pdv-24px" @click="toggleComment">
                  0 comment
                  </div>

                  <div v-if="isCommentActive">
                    <div class="bio-textarea _pdbt-24px">
                      <textarea rows="5" placeholder="Give your advice">
                      </textarea>
                    </div>
                  </div>
                  <div class="line"></div>
              </div>
            </div> 

            </div>
          </div>
        </div>
    </div>
    <Footer title='Add Places' :link='`/a/${$route.params.id}/destinations/${$route.params.city}/addplace`' back='Back' backMode="backToFriendPage"></Footer>
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
      city: {},
      place: null,
      isShowing: 'place',
      isCommentActive: false,
      center: {
        lat: 0,
        lng: 0
      },
      markers: [{
        position: {lat: 10.0, lng: 10.0}
      }, {
        position: {lat: 11.0, lng: 11.0}
      }],
    }
  },
  created () {
    let cityParam = this.$route.params.city
    console.log(cityParam)
    let cityData = this.$store.state.formData.destinations.filter(x => x.placeid === cityParam)
    console.log(cityData)
    this.city = cityData[0]
    this.center = {
      lat: cityData[0].lat,
      lng: cityData[0].lng
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
    toggleComment() {
      this.isCommentActive = !this.isCommentActive
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

.line {
  padding-top: 1px;
  background-color: #69AFC0;
  margin-bottom: 24px;
}
</style>




