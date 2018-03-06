<template>
    <section class="container1">
    <link href="https://fonts.googleapis.com/css?family=Yeseva+One" rel="stylesheet">
    <div>
      <img class="icon" src="~/assets/iconshare.png">
      <div class="title _fw-100 _fs-3 _pdt-12px">
        Spreading!
      </div>
      <div class="subtitle _fw-100 _fs-7 _pdt-2px">
        Let’s spread your link to friends to gather data
        <br/>and then you can look up anytime!
      </div>
    </div>

    <div>
        <div class="bluebox _tal-l _pd-24px _mgv-24px _mgh-48px">
            
            <div class="_fw-600 _fs-6 _pdbt-2px bluetext">URL:

            </div>
            
            <div class="_dp-f _fdrt-r _alit-ct"> 
                <div class="bio-input -positive">
                    <input type="text" value="https://togather.com/8z5RdmjuSd">
                </div>
                <div class="bio-button _pd-4px _mg-4px _fs-6">
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

        <div class="_tal-ct _pdbt-12px">
            <img class="" src="~/assets/saveyourform.png">
            <div class="_pd-8px _fs-7">To keep the form last long just Go Premium 
            <br/>
            with Togather in easy steps and get all the benefits.
            </div>        
        </div>

        <div class="_pdt-4px">
            <nuxt-link to="/userpage">
                <Button title="Back to your page" />
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

<style scoped>
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

label {
    font-size: 16px;
}

.bluebox {
    background-color: #E9F4F5;
    border-radius: 6px;
    
}

.textred {
    color: red;
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

.bluetext {
    color: #437C80;
}

.social {
    width: 40px;
    height: 40px;
    margin-top: 10px;
    margin-right: 14px;
}
</style>
