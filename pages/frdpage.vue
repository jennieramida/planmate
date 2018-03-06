<template>
  <section class="container1 _pdv-24px">
    <link href="https://fonts.googleapis.com/css?family=Yeseva+One" rel="stylesheet">
    <div>
        <div class="title _fw-100 _fs-3 _pdt-24px">
            Hey, Thanya!
        </div>
        <div class="subtitle _fw-100 _fs-6 _pdt-4px _pdbt-12px">
            Vasse is planning next trip
            <br/>and your advice will be very helpful.
        </div>
    </div>
    <div class="_tal-ct _pd-12px">
        <img class="" src="~/assets/bag.png">
        <div class="_pdt-12px subtitle _fw-300">
            At first, we just want you to know that
        </div>
        <div class="helve bluetext _fw-600 _pdbt-24px">
            Vasse will travel with friends
        </div>
    </div>

    <div>
        <img class="" src="~/assets/pinearth.png">
        <div class="_pdt-12px helve bluetext _fw-700 _fs-5">
            Destinations
        </div>
        <div class="helve _pdt-2px _fw-300 _pdbt-px">
            Choose city you want to give advice!
        </div>
        <div class=" _mgh-64px helve">
            <nuxt-link to="/city">
                <div class="desbox _pd-12px _fw-600 _mgv-12px">
                Paris, France
                </div>
            </nuxt-link>
            <div class="desbox _pd-12px _fw-600 _mgv-12px">
            Amsterdam, Netherlands
            </div>
            <div class="desbox _pd-12px _fw-600 _mgv-12px">
            Rotterdam, Netherlands
            </div>
        </div>
    </div>
    <div>
        <div class="_pdt-24px">
            <nuxt-link to="/thankyou">
              <Button title="Done" />
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
  font-size: 28px;
  padding: 5px;
}
.subtitle {
  font-size: 12;
  font-family: 'Helvetica';
  letter-spacing: 0px;
  word-spacing: 0px;
}


.containercheck ul{
  list-style: none;
}

.bio-radio>label:before {
  border-color: #69AFC0;
}

.bio-radio>label:after {
  border-color: #69AFC0;
  background-color: #69AFC0;
}

.helve {
    font-family: 'Helvetica';
}

.bluetext {
    color: #69AFC0;
}
label {
    font-size: 16px;
}

.desbox {
    background-color: #B9DDDF;
    color: #477C89;
    border-radius: 6px;
    box-shadow: 0 1px 6px 0 #477C89;
}
</style>
