<template>
  <MyDefaultLayout>
    <Header></Header>
    <div class="_pdt-128px _tal-ct _cl-black">
      <div class="_fw-800 _fs-2 _pdt-12px">
        Sign In
      </div>
      <div class="subtitle _fw-100 _fs-6 _pdt-4px">
        Welcome back to planmate :)
      </div>

      <div class=" _pdh-12px _pdt-12px _mgt-12px _fw-100 _cl-dark">
        <form action="">     
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

      <div class="_tal-ct _pd-24px _pdbt-64px">
        <div class="_fw-100 _dp-il">
          Don't have an account?
        </div>
        <div class="_dp-il link _fw-600">
          <nuxt-link to="/signup">
          Sign Up
          </nuxt-link>
        </div>
      </div>
      
      <div class="_pdbt-24px">
        <nuxt-link to="/signupcomplete">
          <Button title="Sign in" />
        </nuxt-link>
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

<style scoped>

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

.fb-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: #4267b2;
  color: #fff;
}

</style>


