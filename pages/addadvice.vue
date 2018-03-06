<template>
  <section class="container1 _pdbt-256px">
      <div class="_pdbt-256px">
          <div class="boxwhite _mg-4px">
                <div class="bio-card -horizontal">
                    <div>
                    back
                    </div>
                  <img class="bio-card-cover" src="https://placeimg.com/360/360/animals" alt="image">
                  <div class="bio-card-title _tal-l _fw-600 _fs-6 helve">
                    Vasse
                  </div>
                  <div class="bio-card-subtitle _tal-l _fs-7">
                    Yesterday
                  </div>
                  <div class="bio-card-content _tal-l helve _fw-300 _fs-7">
                    <div>
                      I am concerned with all the terrorist attacks happening in Paris right now, is it even safe to travel? And which area in Paris I should avoid?
                    </div>
                    <div class="_fs-8 _tal-r _pdv-12px">
                      0 comment
                    </div>
                  </div>
                </div>
                <div class="_fs-7 _tal-ct helve bluetext _pdbt-12px">
                  <nuxt-link to="/addadvice">
                    Comment
                  </nuxt-link>
                </div>
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
  background-color: #E9F4F5 ;
}


.boxwhite {
  background-color: white;
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
    font-family: 'Yeseva One', cursive;
    font-size: 23px;
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
</style>
