<template>
  <MyDefaultLayout>
    <Header></Header>
    <div>
        <div>
            <img class="_pdt-128px _pdbt-12px" src="~/assets/logosmall.png">
            <div class="_pdt-12px">
            <div class="_fw-800 _fs-4 _tal-ct _cl-black _mgh-48px">
                Planmate encourage you to travel with data from friends
            </div>
            <div class="_tal-l _fw-200 _fs-6 _pdt-24px _pdh-48px _mgh-8px _pdbt-24px _mgbt-12px">
                When thinking about travelling, everyone definitely wants to go and see all we possibly can. You can search for a nice cafe to sip your flat white, famous museums to visit, local food to try and even more on the internet. But does it suit you? 
                <br/>
                <br/>
                We believe that only reviews on the internet from people you-don't-even-know-who-they-are are not enough and may waste your time. The best things are from people who know your guts.
                <br/>
                <br/>
                Planmate will help you easily get data from your friends through 'The Form' which you can set your trip information and your preferences. Then simply share it with your friends, sit back and wait for the advice!
                <br/>
            </div> 
            </div>  
                <img class="_tal-ct _pdbt-24px" src="~/assets/logosmall.png">
                <br/>
            <div class="_tal-ct _fw-400 _fs-6 _pdbt-48px">
              Design and Develope by Ramida J.
            </div>
        </div>
        
    </div>
  </MyDefaultLayout>
</template>

<script>
import MyDefaultLayout from '~/layouts/MyDefaultLayout.vue'
import Button from '~/components/MyButton.vue'
import Header from '~/components/Header.vue'

export default {
  components: {
    MyDefaultLayout,
    Button,
    Header
  }
}
</script>

<style>

.img {
  width: 120%;
}

</style>


