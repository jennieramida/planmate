<template>
  <MyDefaultLayout>
    <link href="https://fonts.googleapis.com/css?family=Yeseva+One" rel="stylesheet">
    <div>
        <div class="_pdt-128px">
            <img class="_pdt-64px" src="~/assets/success.png">
            <div class="_fw-800 _fs-2 _pdt-12px">
                Successful
            </div>
            <div class="subtitle _fw-100 _fs-6 _pdt-4px">
              Sign Up Successful
            </div>
        </div>
        
        <div class="_pd-24px _pdt-48px">
            <nuxt-link to="/userpage">
            <Button title="Go to my page" />
            </nuxt-link>
        </div>


    </div>
  </MyDefaultLayout>
</template>

<script>
import MyDefaultLayout from '~/layouts/MyDefaultLayout.vue'
import Button from '~/components/MyButton.vue'

export default {
  components: {
    MyDefaultLayout,
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
    background-color: #69AFC0;
    border-radius: 0px; 
}

.bio-card-content {
    font-family: helvetica;

}

.bio-card>.bio-card-content {
    grid-area: content;
    padding-top: 12px;
    color: white;
    line-height: 125%;
}
</style>


