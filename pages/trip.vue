<template>
  <section class="container1">
    <link href="https://fonts.googleapis.com/css?family=Yeseva+One" rel="stylesheet">
    <div>
      <img class="icon" src="~/assets/icondes.png">
      <div class="title _fw-100 _fs-3 _pdt-12px">
        Trip Name Ja
      </div>
      <div class="subtitle _fw-100 _fs-6 _pdt-2px">
        Your whole trip
      </div>

      <div class=" _mgh-64px helve">
        <div class="desbox _mg-24px _pd-12px _fw-600 _mgv-12px">
            Paris, France
        </div>
      </div>

 

      <nuxt-link to="/destination">
        <div class="subtitle">
          + Add more cities
        </div>
      </nuxt-link>

      <div class="_pdbt-48px _pdt-128px">
        <nuxt-link to="/share"> 
          <Button title="Create Form"/>
        </nuxt-link>
      </div>

    </div>
  </section>
</template>

<script scoped>
import AppLogo from '~/components/AppLogo.vue'
import Button from '~/components/MyButton.vue'

export default {
  components: {
    AppLogo,
    Button
  }
}
</script>

<style scoped>

.citytitle {
  font-family: helvetica;
  color: #477C89;
}

.bio-card {
    display: grid;
    background-color: #B9DDDF;
}

.bio-card:not(.u-rise) {
    border: 0px;
}

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
  font-size: 28px;
  padding: 5px;
}
.subtitle {
  font-size: 12;
  font-family: 'Helvetica';
  letter-spacing: 0px;
  word-spacing: 0px;
}

body {
  font-family: Avenir Next, Avenir, SegoeUI, sans-serif;
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


