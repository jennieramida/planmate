<template>
  <MyDefaultLayout>
    <Header></Header>
    <div class="mapBg">
      <div class="_tal-ct _mgt-64px _mgbt-24px _pdt-64px">
        <img class="_pdt-24px _pdt-12px" src="~/assets/callforhelp.png">
      </div>
  
      <div class="_tal-ct _fs-6 _lh-125pct _fw-300 _pdbt-12px">
        Your friend is going to travel and believe 
        <br/>that your advice will make it a perfect trip.
      </div>
  
      <div class=" _pdt-12px _cl-dark _pdbt-24px">
        <div class="_pdv-12px _fw-600 _fs-5">Hey! What's your name?</div>
        <div class="bio-input _mgh-64px">
        <input v-model="username" ref="userNameInput" type="UserName" name="UserName" id="UserName" placeholder="Add your name" @change="updateUserName()" />
        </div>
        
      </div>
  
      <div class="_tal-ct _mgbt-12px _pdbt-24px _pdt-24px ">
        <nuxt-link :to='`/a/${$route.params.uid}/${$route.params.formId}/destinations`'>
          <Button title="Give a hand" />
        </nuxt-link>
      </div>
      <div class="_tal-ct _pdbt-12px _pdbt-48px">
        <nuxt-link class="link _fw-600" to="/signin">
          Your own form? Sign In
        </nuxt-link>
      </div>
    </div>
  
  </MyDefaultLayout>
</template>

<script>
  import MyDefaultLayout from '~/layouts/MyDefaultLayout.vue'
  import Button from '~/components/MyButton.vue'
  import Header from '~/components/Header.vue'
  import * as Firebase from '~/services/firebase'
  
  export default {
    components: {
      MyDefaultLayout,
      Button,
      Header
    },
    async asyncData ({ params }) {
      // server render
      const x = await Firebase.retrieveForm(params.id)
      // console.log(x.val())
      return {
        trip: x.val()
      }
    },
    data() {
      return {
        frdName: '',
        username: ''
      }
    },
    // created () {
    //   this.$store.commit('setFormData', this.trip)
    // },
    methods: {
      updateUserName() {
        // let username = this.$refs.UserNameInput.value
        this.$store.commit('setUserData', {
          key: 'username',
          value: this.username
        })
      }
    }
  }
</script>

<style>
  .mapBg {
    background-image: url(~/assets/mapline.png);
    background-repeat: no-repeat;
    background-size: contain;
  }
  
  
  /* รู้ๆๆๆๆละ */
  
  .title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }
  
  .slick-item {
    text-align: center;
  }
  
  .slick-dots li button::before {
    font-size: 14px;
    color: #69AFC0;
  }
  
  .slick-dots li.slick-active button:before {
    color: #69AFC0;
  }
  
  .subtitle {
    font-family: Helvetica;
    font-weight: 100;
    font-size: 14px;
    color: black;
    letter-spacing: 1px;
    padding-bottom: 15px;
  }
  
  .links {
    padding-top: 15px;
  }
  
  .logo {
    width: 210px;
    height: 62px;
  }
  
  .icon {
    margin-left: auto;
    margin-right: auto;
  }
  
  .logosize {
    width: 192px;
    height: 157px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .link {
  color: #477C89;
}
   ::-webkit-input-placeholder {
    opacity: 0;
    transition: 'Helvetica';
  }
  
  
  /**
    * Show the placeholder when the input is focused.
    */
  
  input:focus::-webkit-input-placeholder {
    opacity: 1;
  }
  
  
  /**
    * When the element is focused, remove the label transform.
    * Also, do this when the placeholder is _not_ shown, i.e. when 
    * there's something in the input at all.
    */
  
  input:not(:placeholder-shown)+label,
  input:focus+label {
    transform: translate(0, 0) scale(1);
    cursor: pointer;
  }
</style>
