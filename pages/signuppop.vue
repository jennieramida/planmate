<template>
  <section>
    <div  class="_bgcl-black _pd-64px">   
        <div class="bio-card">
            <div class="bio-card-title _tal-ct title _pdv-12px">
                One-Click Sign Up
            </div>
            <div class="bio-card-subtitle _tal-ct subtitle _pdh-4px">
                Would you like to use your existing social profile to speed this up? <br/>We never post without permission!
            </div>
             <!-- <div class="_pdbt-48px">
            <div class="fb-login-button" data-max-rows="1" data-size="large" data-button-type="continue_with" data-show-faces="false" data-auto-logout-link="false" data-use-continue-as="false"></div>
            </div> -->
            
            <nuxt-link to="/signup" class="bio-card-content _tal-ct subtitle _fs-6">
                <div>
                No, Thanks
                </div>
            </nuxt-link>

            <!-- <div class="_pdv-12px">
          <nuxt-link to="/signin">
            Already have an account? Sign In
          </nuxt-link>
      </div> -->
        </div>
    </div>
  </section>
</template>

<script>
import Button from '~/components/MyButton.vue'

// (function(d, s, id) {
//   var js, fjs = d.getElementsByTagName(s)[0];
//   if (d.getElementById(id)) return;
//   js = d.createElement(s); js.id = id;
//   js.src = 'https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.12&appId=1873975416253659&autoLogAppEvents=1';
//   fjs.parentNode.insertBefore(js, fjs);
// }(document, 'script', 'facebook-jssdk'));


export default {
  components: {
    Button
  }

}
</script>

<style scoped> 

.title {
  font-family: 'Yeseva One', cursive;
}

.subtitle {
    font-family: helvetica;
}

.fb-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: #4267b2;
  color: #fff;
}

</style>


