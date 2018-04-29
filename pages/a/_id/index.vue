<template>
  <MyDefaultLayout>
    <Header></Header>
    <div class="mapBg">
      <div class="_tal-ct _mgt-64px _mgbt-24px _pdt-64px">
        <img class="" src="~/assets/callforhelp.png">
      </div>
  
      <div class="_tal-ct _fs-6 _fw-300 _pdbt-4px">
        Your friend is going to travel and believe that
        <br/>your advice will make it a perfect trip.
      </div>
  
      <div class=" _pdh-12px _fw-100 _cl-dark _pdbt-0px">
        <form action="">
          <div class="field">
            <input v-model="username" ref="userNameInput" type="UserName" name="UserName" id="UserName" placeholder="Add your name" @change="updateUserName()" />
            <label for="UserName">Your Name</label>
          </div>
        </form>
      </div>
  
      <div class="_tal-ct _pdbt-12px _pdt-64px ">
        <nuxt-link 
        :to='`/a/${$route.params.id}/destinations`'
        >
          <Button title="Give a hand" />
        </nuxt-link>
      </div>
      <div class="_tal-ct _pdt-12px">
        <nuxt-link to="/signin">
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
  
  
  /* .fix {
      position: fixed;
    } */
  
  form {
    margin: 10px 50px;
    margin-top: 50px;
    margin-bottom: 0px;
  }
  
  
  /**
    * Make the field a flex-container, reverse the order so label is on top.
    */
  
  .form {
    margin: center;
  }
  
  .field {
    display: flex;
    flex-flow: column-reverse;
    margin-bottom: 0px;
    width: 300px;
    margin: center;
  }
  
  
  /**
    * Add a transition to the label and input.
    * I'm not even sure that touch-action: manipulation works on
    * inputs, but hey, it's new and cool and could remove the 
    * pesky delay.
    */
  
  label,
  input {
    transition: all 0.2s;
    touch-action: manipulation;
  }
  
  input {
    font-size: 16px;
    border: 0;
    border-bottom: 1px solid #ccc;
    font-family: inherit;
    -webkit-appearance: none;
    border-radius: 0;
    padding: 50;
    cursor: text;
    background-color: none;
  }
  
  input:focus {
    outline: 0;
    border-bottom: 1px solid #666;
  }
  
  label {
    font-size: 12px;
    text-align: left;
    letter-spacing: 0.05em;
  }
  
  
  /**
    * Translate down and scale the label up to cover the placeholder,
    * when following an input (with placeholder-shown support).
    * Also make sure the label is only on one row, at max 2/3rds of the
    * field—to make sure it scales properly and doesn't wrap.
    */
  
  input:placeholder-shown+label {
    cursor: text;
    max-width: 50%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transform-origin: left bottom;
    transform: translate(0, 2.125rem) scale(1.5);
    margin-bottom: 10px;
  }
  
  
  /**
    * By default, the placeholder should be transparent. Also, it should 
    * inherit the transition.
    */
  
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
