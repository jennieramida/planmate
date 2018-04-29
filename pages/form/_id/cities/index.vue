<template>
  <MyDefaultLayout>
    <Header></Header>
    <div class="cityhead helve _pdv-24px _mgt-64px _mgbt-0px">
      <div class="_pdt-12px">
      <nuxt-link to="/form/id">
        Trip to Italy
      </nuxt-link>
      〉Venice, Italy
      </div>
    </div>

    <div class="boxbg _mgbt-0px">
        <div class="lo-4">
          <div class="menuA _pdv-12px helve bluetext _cs-pt" @click="isShowing = 'place'">Place</div>
          <div class="menuB _pdv-12px helve bluetext _cs-pt" @click="isShowing = 'advice'">Advice</div>
          <div class="menuC _pdv-12px helve bluetext _cs-pt" @click="isShowing = 'saved'">Saved</div>
        </div>

        <!-- Map-->
         <div v-show="isShowing === 'place'">  
          <gmap-map
          :center="center"
          :zoom="14"
          map-type-id="terrain"
          style="width: 100%; height: 72vh"
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
              <!-- Should loop1 -->
              <div class="_pdh-48px _tal-l _pdt-24px ">
                <!-- <div class="" v-for="(advice, i) in city.advices" :key="i"> -->
                    <!-- <div class="_pdt-8px">{{ advice }}</div> -->
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin viverra, nisl in blandit tempor, ipsum mauris interdum sem, vitae fermentum urna urna non erat.
                    <div class="_tal-r _pdv-24px" @click="toggleComment">
                    5 comments
                    </div>

                    <div v-if="isCommentActive">
                      
                      <div class="lo-11-1">
                        <!-- Should loop2 -->
                          <div>
                            <div class="_fw-600 _pdbt-4px">
                              Name
                            </div>
                            <div class=" _pdbt-24px">
                              Suspendisse molestie erat eget tincidunt ullamcorper.
                            </div>
                          </div>
                          <div><i class="fa fa-heart-o" aria-hidden="true"></i></div>
                        <!-- End Loop 2 -->

                        <!-- Should loop2 -->
                          <div>
                            <div class="_fw-600 _pdbt-4px">
                              Name
                            </div>
                            <div class=" _pdbt-24px">
                              Suspendisse molestie erat eget tincidunt ullamcorper.
                            </div>
                          </div>
                          <div><i class="fa fa-heart-o" aria-hidden="true"></i></div>
                        <!-- End Loop 2 --> 
                      </div>
                    </div>

                    <div class="line"></div>
                <!-- </div> -->
              </div> 

              <div class="_pdh-48px _tal-l _pdt-24px ">
                <!-- <div class="" v-for="(advice, i) in city.advices" :key="i"> -->
                    <!-- <div class="_pdt-8px">{{ advice }}</div> -->
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin viverra, nisl in blandit tempor, ipsum mauris interdum sem, vitae fermentum urna urna non erat.
                    <div class="_tal-r _pdv-24px" @click="toggleComment">
                    5 comments
                    </div>

                    <div v-if="isCommentActive">
                      
                      <div class="lo-11-1">
                        <!-- Should loop2 -->
                          <div>
                            <div class="_fw-600 _pdbt-4px">
                              Name
                            </div>
                            <div class=" _pdbt-24px">
                              Suspendisse molestie erat eget tincidunt ullamcorper.
                            </div>
                          </div>
                          <div><i class="fa fa-heart-o" aria-hidden="true"></i></div>
                        <!-- End Loop 2 -->

                        <!-- Should loop2 -->
                          <div>
                            <div class="_fw-600 _pdbt-4px">
                              Name
                            </div>
                            <div class=" _pdbt-24px">
                              Suspendisse molestie erat eget tincidunt ullamcorper.
                            </div>
                          </div>
                          <div><i class="fa fa-heart-o" aria-hidden="true"></i></div>
                        <!-- End Loop 2 --> 
                      </div>
                    </div>
                    
                    <div class="line"></div>
                <!-- </div> -->
              </div> 

              <div class="_pdh-48px _tal-l _pdt-24px ">
                <!-- <div class="" v-for="(advice, i) in city.advices" :key="i"> -->
                    <!-- <div class="_pdt-8px">{{ advice }}</div> -->
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin viverra, nisl in blandit tempor, ipsum mauris interdum sem, vitae fermentum urna urna non erat.
                    <div class="_tal-r _pdv-24px" @click="toggleComment">
                    5 comments
                    </div>

                    <div v-if="isCommentActive">
                      
                      <div class="lo-11-1">
                        <!-- Should loop2 -->
                          <div>
                            <div class="_fw-600 _pdbt-4px">
                              Name
                            </div>
                            <div class=" _pdbt-24px">
                              Suspendisse molestie erat eget tincidunt ullamcorper.
                            </div>
                          </div>
                          <div><i class="fa fa-heart-o" aria-hidden="true"></i></div>
                        <!-- End Loop 2 -->

                        <!-- Should loop2 -->
                          <div>
                            <div class="_fw-600 _pdbt-4px">
                              Name
                            </div>
                            <div class=" _pdbt-24px">
                              Suspendisse molestie erat eget tincidunt ullamcorper.
                            </div>
                          </div>
                          <div><i class="fa fa-heart-o" aria-hidden="true"></i></div>
                        <!-- End Loop 2 --> 
                      </div>
                    </div>
                    
                    <div class="line"></div>
                <!-- </div> -->
              </div> 
              <div class="_pdh-48px _tal-l _pdt-24px ">
                <!-- <div class="" v-for="(advice, i) in city.advices" :key="i"> -->
                    <!-- <div class="_pdt-8px">{{ advice }}</div> -->
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin viverra, nisl in blandit tempor, ipsum mauris interdum sem, vitae fermentum urna urna non erat.
                    <div class="_tal-r _pdv-24px" @click="toggleComment">
                    5 comments
                    </div>

                    <div v-if="isCommentActive">
                      
                      <div class="lo-11-1">
                        <!-- Should loop2 -->
                          <div>
                            <div class="_fw-600 _pdbt-4px">
                              Name
                            </div>
                            <div class=" _pdbt-24px">
                              Suspendisse molestie erat eget tincidunt ullamcorper.
                            </div>
                          </div>
                          <div><i class="fa fa-heart-o" aria-hidden="true"></i></div>
                        <!-- End Loop 2 -->

                        <!-- Should loop2 -->
                          <div>
                            <div class="_fw-600 _pdbt-4px">
                              Name
                            </div>
                            <div class=" _pdbt-24px">
                              Suspendisse molestie erat eget tincidunt ullamcorper.
                            </div>
                          </div>
                          <div><i class="fa fa-heart-o" aria-hidden="true"></i></div>
                        <!-- End Loop 2 --> 
                      </div>
                    </div>
                    
                    <div class="line"></div>
                <!-- </div> -->
              </div> 
              <!-- end loop1 -->
            </div>
          </div>
        </div>

        <!-- Saved -->
          <div class="">
          <div v-show="isShowing === 'saved'">
            <div class="advicebox">
              <div class="lo-10-2 _pdh-24px _mgv-24px">
                <!-- looooooooopp -->
                <div class="lo-2-10 _pdv-4px">
                  <div>
                    <img class="_pdv-8px" src="~/assets/holy.png">
                  </div>
                  <div class="_tal-l _pdl-8px">
                    <div class="_fw-600 _fs-5">
                      HolyBelly 19
                    </div>
                    <div class="_pdt-4px _pdbt-12px">
                      <div class="_fw-500 _fs-6">
                        Breakfast & brunch restaurant
                      </div>
                      <div class="_fw-500 _fs-6">
                        Recommend by Jennie
                      </div>
                    </div>
                  </div> 
                </div>
                <div class="_pdv-24px">
                  <div id="app">
                    <font-awesome-icon :icon="icon" />
                  </div>
                </div>

                <div class="lo-2-10 _pdv-4px">
                  <div>
                    <img class="_pdv-8px" src="~/assets/holy.png">
                  </div>
                  <div class="_tal-l _pdl-8px">
                    <div class="_fw-600 _fs-5">
                      HolyBelly 19
                    </div>
                    <div class="_pdt-4px _pdbt-12px">
                      <div class="_fw-500 _fs-6">
                        Breakfast & brunch restaurant
                      </div>
                      <div class="_fw-500 _fs-6">
                        Recommend by Jennie
                      </div>
                    </div>
                  </div> 
                </div>
                <div class="_pdv-24px">
                  <div id="app">
                    <font-awesome-icon :icon="icon" />
                  </div>
                </div>
                

                <div class="lo-2-10 _pdv-4px">
                  <div>
                    <img class="_pdv-8px" src="~/assets/holy.png">
                  </div>
                  <div class="_tal-l _pdl-8px">
                    <div class="_fw-600 _fs-5">
                      HolyBelly 19
                    </div>
                    <div class="_pdt-4px _pdbt-12px">
                      <div class="_fw-500 _fs-6">
                        Breakfast & brunch restaurant
                      </div>
                      <div class="_fw-500 _fs-6">
                        Recommend by Jennie
                      </div>
                    </div>
                  </div> 
                </div>
                <div class="_pdv-24px">
                  <div id="app">
                    <font-awesome-icon :icon="icon" />
                  </div>
                </div>

                <div class="lo-2-10 _pdv-4px">
                  <div>
                    <img class="_pdv-8px" src="~/assets/holy.png">
                  </div>
                  <div class="_tal-l _pdl-8px">
                    <div class="_fw-600 _fs-5">
                      HolyBelly 19
                    </div>
                    <div class="_pdt-4px _pdbt-12px">
                      <div class="_fw-500 _fs-6">
                        Breakfast & brunch restaurant
                      </div>
                      <div class="_fw-500 _fs-6">
                        Recommend by Jennie
                      </div>
                    </div>
                  </div> 
                </div>
                <div class="_pdv-24px">
                  <div id="app">
                    <font-awesome-icon :icon="icon" />
                  </div>
                </div>

                <div class="lo-2-10 _pdv-4px">
                  <div>
                    <img class="_pdv-8px" src="~/assets/holy.png">
                  </div>
                  <div class="_tal-l _pdl-8px">
                    <div class="_fw-600 _fs-5">
                      HolyBelly 19
                    </div>
                    <div class="_pdt-4px _pdbt-12px">
                      <div class="_fw-500 _fs-6">
                        Breakfast & brunch restaurant
                      </div>
                      <div class="_fw-500 _fs-6">
                        Recommend by Jennie
                      </div>
                    </div>
                  </div> 
                </div>
                <div class="_pdv-24px">
                  <div id="app">
                    <font-awesome-icon :icon="iconh" />
                  </div>
                </div>

                <div class="lo-2-10 _pdv-4px">
                  <div>
                    <img class="_pdv-8px" src="~/assets/holy.png">
                  </div>
                  <div class="_tal-l _pdl-8px">
                    <div class="_fw-600 _fs-5">
                      HolyBelly 19
                    </div>
                    <div class="_pdt-4px _pdbt-12px">
                      <div class="_fw-500 _fs-6">
                        Breakfast & brunch restaurant
                      </div>
                      <div class="_fw-500 _fs-6">
                        Recommend by Jennie
                      </div>
                    </div>
                  </div> 
                </div>
                <div class="_pdv-24px">
                  <div id="app">
                    <font-awesome-icon :icon="icon" />
                  </div>
                </div>

                <div class="lo-2-10 _pdv-4px">
                  <div>
                    <img class="_pdv-8px" src="~/assets/holy.png">
                  </div>
                  <div class="_tal-l _pdl-8px">
                    <div class="_fw-600 _fs-5">
                      HolyBelly 19
                    </div>
                    <div class="_pdt-4px _pdbt-12px">
                      <div class="_fw-500 _fs-6">
                        Breakfast & brunch restaurant
                      </div>
                      <div class="_fw-500 _fs-6">
                        Recommend by Jennie
                      </div>
                    </div>
                  </div> 
                </div>
                <div class="_pdv-24px">
                  <div id="app">
                    <font-awesome-icon :icon="iconh" />
                  </div>
                </div>
         
                <!-- end looop -->
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
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import faHeart from '@fortawesome/fontawesome-free-regular/faHeart'
import faHearts from '@fortawesome/fontawesome-free-solid/faHeart'

export default {
  name: 'FAExample',

  computed: {
    icon () {
      return faHeart
    },
    iconh() {
      return faHearts
    }
  },

  components: {
    MyDefaultLayout,
    Button,
    Header,
    Footer,
    AdviceItem,
    FontAwesomeIcon
  },
  data () {
    return {
      city: '',
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
    // let cityData = this.$store.state.formData.destinations.filter(x => x.placeid === cityParam)
    // console.log(cityData)
    // this.city = cityData[0]
    this.center = {
      lat: 45.4408,
      lng: 12.3155
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
    toggleComment () {
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




