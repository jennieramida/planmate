<template>
  <MyDefaultLayout>
    <Header hasBC="true"></Header>
      <div class="_pdt-64px _mgt-24px _tal-ct _cl-black">
        <div class="_fw-800 _fs-2 _pdt-64px">
          Advice
        </div>
        <div class="citytitle _fw-600 _fs-4 _pdt-4px">
          {{ $store.state.tripData.currentCity }}
        </div>
        <div class="subtitle _fw-100 _fs-6 _pdt-4px">
          What do you need to know?
        </div>
      </div>

    <!-- Accordion – With Icon -->
    <div class="_pdh-48px _fs-4 _pdt-48px _tal-l _pdbt-128px">
      <MyAdvice v-for="(x, i) in accordionData" :key="i" :id="x.id" :topic="x.title" v-on:sendAdvice="receiveAdvice"/>
    </div>

    <Footer title='Finish this city' back='Back' link='/useraddmorecity'></Footer>
  </MyDefaultLayout>
</template>

<script>
import MyDefaultLayout from '~/layouts/MyDefaultLayout.vue'
import Button from '~/components/MyButton.vue'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import MyAdvice from '~/components/MyAdvice.vue'


export default {
  components: {
    MyDefaultLayout,
    Button,
    Header,
    Footer,
    MyAdvice
  },
  methods: {
    receiveAdvice (x) {
      console.log(x) // Art galleries
      let oldDestinations = JSON.parse(JSON.stringify(this.$store.state.tripData.destinations))
      let indexOfCurrentDestination = oldDestinations.findIndex((o) => o.city === this.$store.state.tripData.currentCity)
      oldDestinations[indexOfCurrentDestination].advices.push(x)
      this.$store.commit('setTripData', {
        key: 'destinations',
        value: oldDestinations
      })
    }
  },
  data () {
    return {
      accordionData: [
        {
          title: "Basic Etiquette",
          id: "basic-etiquette"
        },
        {
          title: "Currency Exchange",
          id: "currency-exchange"
        },
        {
          title: "International Adapter",
          id: "international-adapter"
        },
        {
          title: "International Call & Data",
          id: "international-call-data"
        },
        {
          title: "Local Time",
          id: "local-time"
        },
        {
          title: "Safety",
          id: "safety"
        },
        {
          title: "Season & Weather",
          id: "season-weather"
        },
        {
          title: "Transportation",
          id: "transportation"
        }
      ]
}
}
}
</script>

<style>

</style>


