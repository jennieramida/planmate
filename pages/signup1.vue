<template>
  <section class="container1">

  <div class="_zid-0">      
      <div class="curtain">   
      </div>
      <img class="icon" src="~/assets/iconmap.png">
      <div class="title _fw-100 _fs-3 _pdt-12px">
        Sign Up
      </div>
      <div class="subtitle _fw-100 _fs-6 _pdt-2px">
        We try to know you little bit more
      </div>

      <div class=" _pdbt-24px _pd-12px _mgv-12px">
        <form action="">
          <div class="field">
            <input type="text" name="fullname" id="fullname" placeholder="Jane Appleseed">
            <label for="fullname">Name</label>
          </div>
          
          <div class="field">
            <input type="email" name="email" id="email" placeholder="jane.appleseed@example.com">
            <label for="email">Email</label>
          </div>

          <div class="field">
            <input type="password" name="password" id="password" placeholder="Use alphabet and numbers">
            <label for="password">Password</label>
          </div>
          </form>
      </div>

      <div class="_pdbt-48px">
        <nuxt-link to="/start">
          <Button title="Sign Up" />
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
  },
}

</script>

<style scoped> 

.curtain {
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
}

.singupcontainer {
  background: #ffffff;
  width: 50%;
  height: 50%;
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
}
.subtitle {
  font-family: 'Helvetica';
  letter-spacing: 0px;
  word-spacing: 0px;
}

body {
  font-family: Avenir Next, Avenir, SegoeUI, sans-serif;
}


form {
  margin: 10px 50px;
  
}
/**
* Make the field a flex-container, reverse the order so label is on top.
*/
 

.field {
  display: flex;
  flex-flow: column-reverse;
  margin-bottom: 20px;
}
/**
* Add a transition to the label and input.
* I'm not even sure that touch-action: manipulation works on
* inputs, but hey, it's new and cool and could remove the 
* pesky delay.
*/
label, input {
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
  background: transparent;
  padding: 5px 5px 5px 0px;
}

input:focus {
  outline: 0;
  border-bottom: 1px solid #666;
}

label {
  /* text-transform: uppercase; */
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
input:placeholder-shown + label {
  cursor: text;
  max-width: 50%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transform-origin: left bottom;
  transform: translate(0, 2.125rem) scale(1.5);
  margin-bottom: 10px;
  font-size: 12px;
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
input:not(:placeholder-shown) + label,
input:focus + label {
  transform: translate(0, 0) scale(1);
  cursor: pointer;
}
</style>


