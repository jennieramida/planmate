<template>
  <MyDefaultLayout>
    <Header hasBC="true"></Header>
      <div class="_pdt-64px _mgt-24px _tal-ct _cl-black">
      <div class="_fw-800 _fs-2 _pdt-64px">
        Get Link
      </div>
      <div class="subtitle _fw-100 _fs-6 _pdh-48px _pdt-4px">
        Let’s spread your link to friends to gather data and then you can look up anytime!
      </div>
    </div>

    <div class="bluebox _tal-ct _mgh-48px">
      <div class=" _tal-l _pdl-48px _pd-24px _mgv-24px ">
        <div class="_fw-600 _fs-6 _pdbt-2px bluetext">
          URL:
        </div>
          
        <div class="_dp-f _fdrt-r _alit-ct"> 
          <div class="bio-input -positive">
            <input type="text" :value="`https://planmate.me/a/${$route.params.id}`">
          </div>
          <div class="bio-button _pd-4px _mg-4px _fs-6"
          v-clipboard:copy="thingToCopy"
          v-clipboard:success="onCopy"
          v-clipboard:error="onError">
            COPY
          </div>       
        </div>

        <div class="_fs-8 _pdv-4px textred">
          This form will expire in 15 days.
        </div>
    
        <div class="_fs-7 _fw-600 _pdt-12px bluetext">
          Share on social media or send by email:
        </div>

        <div class="_dp-f _fdrt-r">
          <img class="social" src="~/assets/fb.png">
          <img class="social" src="~/assets/tw.png">
          <img class="social" src="~/assets/ig.png">
          <img class="social" src="~/assets/li.png">
          <img class="social" src="~/assets/gg.png">
        </div>
      </div>
    </div>

    <div class="_tal-ct _pdbt-12px">
      <img class="" src="~/assets/saveyourform.png">
      <div class="_pd-8px _fs-7">
        To keep the form last long just 
        <nuxt-link class="_fw-600" to="/premium">Go Advance</nuxt-link>
        <br/>
        with Planmate in easy steps and get all the benefits.
      </div>        
    </div>

    <div class="_pdt-12px _pdbt-48px">
      <nuxt-link to="/userpage">
        <Button title="Back to my page"/>
      </nuxt-link>
    </div>

  </MyDefaultLayout>
</template>

<script>
import MyDefaultLayout from '~/layouts/MyDefaultLayout.vue'
import Button from '~/components/MyButton.vue'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import * as Firebase from '~/services/firebase'

export default {
  components: {
    MyDefaultLayout,
    Button,
    Header,
    Footer
  },
    mounted () {
    // update tripData
    // Firebase.updateForm(this.$store.state.tripData.id, this.$store.state.tripData)
    this.thingToCopy = `https://planmate.me/a/${this.$store.state.UID}/${this.$route.params.id}`
  },
  data() {
    return {
      thingToCopy: null
    }
  },
  methods: {
    onCopy: function (e) {
      alert('You just copied: ' + e.text)
    },
    onError: function (e) {
      alert('Failed to copy texts')
    }
  }

  
}
</script>

<style>
.bluebox {
    background-color: #E9F4F5;
    border-radius: 6px;
    
}

.textred {
    color: #D0021B;
}

.bluetext {
    color: #437C80;
}

.social {
    width: 40px;
    height: 40px;
    margin-top: 10px;
    margin-right: 14px;
}

.bio-button {
    display: block;
    padding: 8px;
    border-radius: 3px;
    background-color: #69AFC0;
    border: 1px solid #69AFC0;
    text-align: center;
    font-size: 8px;
    cursor: pointer;
    line-height: 150%;
    position: relative;
    color: #fff;
}


.bio-button:hover {
    display: block;
    padding: 8px;
    border-radius: 3px;
    background-color: #69AFC0;
    border: 1px solid #69AFC0;
}


  a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
    text-decoration: none;
    color: #69AFC0 !important;
}
</style>


