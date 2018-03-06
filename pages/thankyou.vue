<template>
  <section class="container1">
    <link href="https://fonts.googleapis.com/css?family=Yeseva+One" rel="stylesheet">
    <div>
        <div>
            <img class="icon" src="~/assets/thankyou.png">
            <div class="title _fw-100 _fs-4 _pdt-64px">
                Having a trip?
            </div>
            <div class="subtitle _fw-100 _fs-6 _pdt-12px  _pdh-48px">
                Create form with us to gather advice
                <br/> from your friends like this.
            </div>
        </div>
        
        <div class="_pdh-48px _pdt-24px">
            <nuxt-link to="/signup">
            <Button title="Create Form" />
            </nuxt-link>
        </div>

        
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import Button from '~/components/MyButton.vue'

export default {
  components: {
    AppLogo,
    Button
  }
}
</script>

<style>

.container1 {
  /* dont make the whole container a flexbox */
  /* min-height: 100vh; */
  /* display: flex;
  justify-content: center;*/
  align-items: center; 
  text-align: center;
  background-image: linear-gradient(to bottom, #E8F4F6, white) ;
}

.icon {
  padding-top: 50px;
}

.title {
  font-family: 'Yeseva One', cursive;
}
.subtitle {
  font-family: 'Helvetica';
  letter-spacing: 0px;
  word-spacing: 0px;
}

body {
  font-family: Avenir Next, Avenir, SegoeUI, sans-serif;
}

.bio-card:not(.u-rise) {
    border: 0px;
}

.bio-card {
    display: grid;
    background-color: #B9DDDF;

}

.bio-card-content {
    font-family: helvetica;

}

.bio-card>.bio-card-content {
    grid-area: content;
    padding-top: 12px;
    color: #477C89;
    line-height: 125%;
}

.citytitle {
  font-family: helvetica;
  
}

.textred {
    color: red;
}

.helve {
    font-family: 'Helvetica';
}

.desbox {
    background-color: #B9DDDF;
    color: #477C89;
    border-radius: 6px;
    box-shadow: 0 1px 6px 0 #477C89;
}
</style>


