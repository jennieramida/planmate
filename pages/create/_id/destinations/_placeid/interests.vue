<template>
  <MyDefaultLayout>
    <Header hasBC="true"></Header>
      <div class="_pdt-64px _mgt-24px _tal-ct _cl-black">
        <div class="_fw-800 _fs-2 _pdt-64px">
          Interest
        </div>
        <div class="citytitle _fw-600 _fs-4 _pdt-4px">
          {{ city }}
        </div>
        <div class="subtitle _fw-100 _fs-6 _pdt-4px">
          What's your preference?
        </div>
      </div>

    <!-- Accordion – With Icon -->
    <div class="_pdh-48px _fs-4 _pdt-48px _tal-l _pdbt-128px">  
      <MyAccordion v-for="(x, i) in accordionData" :key="i" :id="x.id" :topic="x.title" :choices="x.choices" v-on:sendCheckbox="receiveCheckbox"/>
    </div>

        <Footer title='Next' :link='`/create/${$route.params.id}/destinations/${placeid}/advices`' back='Back'></Footer>
  </MyDefaultLayout>
</template>

<script>
import MyDefaultLayout from '~/layouts/MyDefaultLayout.vue'
import Button from '~/components/MyButton.vue'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import MyAccordion from '~/components/MyAccordion.vue'
import * as Firebase from '~/services/firebase'

export default {
  components: {
    MyDefaultLayout,
    Button,
    Header,
    Footer,
    MyAccordion
  },
  methods: {
    receiveCheckbox (x) {
      console.log(x) // Art galleries
      // let oldDestinations = JSON.parse(JSON.stringify(this.this.$store.state.tripData.destinations))
      // let indexOfCurrentDestination = oldDestinations.findIndex((o) => o.city === this.$store.state.tripData.currentCity)
      // oldDestinations[indexOfCurrentDestination].interests.push(x)
      // // this.$store.commit('setTripData', {
      // //   key: 'destinations',
      // //   value: oldDestinations
      // // })

      // already have placeID
      // push interest in this city
      // let interests = this.$store.state.forms[this.$route.params.id].destinations[this.$route.params.placeid].interests || []
      // interests.push(x)
      this.$store.commit('setDestinationInterests', {
        formId: this.$route.params.id,
        destinationKey: this.$route.params.placeid,
        interest: x
      })
      // console.log('update form')
      Firebase.updateForm(this.$store.state.UID, this.$route.params.id, {
        destinations: this.$store.state.forms.forms[this.$route.params.id].destinations
      })
    }
  },
  //   mounted () {
  //   // update tripData
  //   // Firebase.updateForm(this.$store.state.tripData.id, this.$store.state.tripData)
  // },
  computed: {
    city () {
      if (!this.$store.state.forms.forms[this.$route.params.id]) {
        return 'traveling...'
      } else {
        return this.$store.state.forms.forms[this.$route.params.id].destinations[this.$route.params.placeid].city
      }
    }
  },
  data () {
    return {
      placeid: this.$route.params.placeid,
      accordionData: [
        {
          title: "Art, Design & Architecture",
          id: "art-design-architecture",
          choices: [{
            title: "Art Galleries",
            value: "art-galleries",
            id: "art-galleries"
          },{
            title: "Art Museums",
            value: "art-museums",
            id: "art-museums"
          },{
            title: "Design Museums",
            value: "design-museums",
            id: "design-museums"
          },{
            title: "Design Stores",
            value: "design-stores",
            id: "design-stores"
          },{
            title: "Exhibition",
            value: "exhibition",
            id: "exhibition"
          },{
            title: "Famous Architecture",
            value: "famous-architecture",
            id: "famous-architecture"
          },{
            title: "Public Art",
            value: "public-art",
            id: "public-art"
          },{
            title: "Street Art",
            value: "street-art",
            id: "street-art"
          }
          ]
        },
        {
          title: "History & Culture",
          id: "history-culture",
          choices: [{
            title: "Cultural Centres",
            value: "cultural-centres",
            id: "cultural-centres"
          },{
            title: "Cultural Festivals",
            value: "cultural-festivals",
            id: "cultural-festivals"
          },{
            title: "History Museums",
            value: "history-museums",
            id: "history-museums"
          },{
            title: "Historic Sites",
            value: "history-sites",
            id: "history-sites"
          },{
            title: "Religious Buildings",
            value: "religious-buildings",
            id: "religious-buildings"
          },{
            title: "Villages",
            value: "villages",
            id: "villages"
          }
          ]
        },
        {
          title: "Entertainment & Fun",
          id: "entertainment-fun",
          choices: [{
            title: "Amusement Park",
            value: "amusement-park",
            id: "amusement-park"
          },{
            title: "Casinos",
            value: "casinos",
            id: "casinos"
          },{
            title: "Cinemas",
            value: "cinemas",
            id: "cinemas"
          },{
            title: "Circus",
            value: "circus",
            id: "circus"
          },{
            title: "Dance",
            value: "dance",
            id: "dance"
          },{
            title: "Theatres",
            value: "theatres",
            id: "theatres"
          },{
            title: "Music Venues",
            value: "music-venues",
            id: "music-venues"
          }
          ]
        },
        {
          title: "Food Scene",
          id: "food-scene",
          choices: [{
            title: "Bistros",
            value: "bistros",
            id: "bistros"
          },{
            title: "Cafés",
            value: "cafes",
            id: "cafes"
          },{
            title: "Desserts",
            value: "desserts",
            id: "desserts"
          },{
            title: "Local Food",
            value: "local-food",
            id: "local-food"
          },{
            title: "Restaurants",
            value: "restaurants",
            id: "restaurants"
          },{
            title: "Street Food",
            value: "street-food",
            id: "street-food"
          },{
            title: "Vegan & Vegeterian",
            value: "vegan-vegeterain",
            id: "vegan-vegeterain"
          }
          ]
        },
        {
          title: "Night Life",
          id: "night-life",
          choices: [{
            title: "Bars",
            value: "bars",
            id: "bars"
          },{
            title: "Beer",
            value: "beer",
            id: "beer"
          },{
            title: "Cabarets",
            value: "cabarets",
            id: "cabarets"
          },{
            title: "Clubs",
            value: "clubs",
            id: "clubs"
          },{
            title: "Cocktails",
            value: "cocktails",
            id: "cocktails"
          },{
            title: "LGBT Nightlife",
            value: "lgbt-nightlife",
            id: "lgbt-nightlife"
          },{
            title: "Wine",
            value: "wine",
            id: "wine"
          }
          ]
        },
        {
          title: "Outdoor Activities",
          id: "outdoor-activity",
          choices: [{
            title: "Boat & Cruise",
            value: "boat-cruise",
            id: "boat-cruise"
          },{
            title: "Canoeing",
            value: "canoeing",
            id: "canoeing"
          },{
            title: "Cycling",
            value: "cycling",
            id: "cycling"
          },{
            title: "Extreme Sports",
            value: "extreme-sports",
            id: "extreme-sports"
          },{
            title: "Fishing",
            value: "fishing",
            id: "fishing"
          },{
            title: "Hiking & Camping",
            value: "hiking-camping",
            id: "hiking-camping"
          },{
            title: "Scuba & Snorkeling",
            value: "scuba-snorkeling",
            id: "scuba-snorkeling"
          },{
            title: "Sky Dive",
            value: "skydive",
            id: "skydive"
          },{
            title: "Star Gazing",
            value: "star-gazing",
            id: "star-gazing"
          },{
            title: "Water Sports",
            value: "water-sports",
            id: "water-sports"
          }
          ]
        },
        {
          title: "Park, Zoo & Nature",
          id: "park-zoo-nature",
          choices: [{
            title: "Aquariums",
            value: "aquariums",
            id: "aquariums"
          },{
            title: "Botanical Gardens",
            value: "botanical-gardens",
            id: "botanical-gardens"
          },{
            title: "Forests",
            value: "forests",
            id: "forests"
          },{
            title: "Gardens & Parks",
            value: "gardens-parks",
            id: "gardens-parks"
          },{
            title: "Islands & Beaches",
            value: "islands-beaches",
            id: "islands-beaches"
          },{
            title: "Lakes & Canals",
            value: "lakes-canals",
            id: "lakes-canals"
          },{
            title: "Mountains",
            value: "moutains",
            id: "moutains"
          },{
            title: "National Parks",
            value: "national-parks",
            id: "national-parks"
          },{
            title: "Seas & Oceans",
            value: "seas-oceans",
            id: "seas-oceans"
          },{
            title: "Wildlife Spots",
            value: "wildlife-spots",
            id: "wildlife-spots"
          },{
            title: "Zoos & Farms",
            value: "zoos-farms",
            id: "zoo-farms"
          }
          ]
        }
      ]
    }
  }
}
</script>

<style>
.citytitle {
  color: #69AFC0;
}

.bio-checkbox:not(.-switch)>label[data-v-5617861e]:after {
    content: none;
    height: 5px;
    width: 14px;
    top: 5px;
    left: 3px;
    border-left-width: 3px;
    border-bottom-width: 3px;
    border-left-style: solid;
    border-bottom-style: solid;
    border-color: #477C89;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
}
</style>


