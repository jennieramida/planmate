<template>
  <MyDefaultLayout>
    <Header></Header>
    <div class="_pdt-128px _tal-ct _cl-black">
      <div class="_fw-800 _fs-2 _pdt-12px">
        Get Started
      </div>
      <div class="subtitle _fw-100 _fs-6 _pdt-4px">
        Welcome to Planmate, get started absolutely free.
      </div>

      <!-- <div class="subtitle _fw-100 _fs-6 _pdt-4px">
        Due to demo site please continue with Facebook
      </div> -->

      <div class="_pdbt-24px _pdh-12px _pdt-48px">
        <nuxt-link to="/userpage">
          <Button title="Continue with Facebook" />
        </nuxt-link>
         <div class="_fw-100 _pdt-12px _fs-8 _pdh-48px">
          By clicking "Continue" I agree to Planmate's 
          <br/><u>Terms of Service</u> and <u>Privacy Policy.</u>
        </div>
      </div>

      <div class="subtitle _fw-100 _fs-6 _pdt-8px">
        or
      </div>

     
        <div class="_tal-l _pdh-64px _cl-dark _pdbt-48px">
          <div class="bio-field -disabled _pdt-24px">
            <div class="_pdv-8px _fs-7 _fw-600 ">
              E-mail Address
            </div>
            <div class="bio-input">
              <input disabled>
            </div>
          </div>

           <div class="bio-tooltip" data-tooltip="Due to demo site please continue with Facebook">
          <div class="bio-field -disabled _pdt-24px">
            <div class="_pdv-8px _fs-7 _fw-600 ">
              Name
            </div>
            <div class="bio-input">
              <input disabled>
            </div>
          </div>
             </div> 

          <div class="bio-field -disabled _pdt-24px">
            <div class="_pdv-8px _fs-7 _fw-600 ">
              Password
            </div>
            <div class="bio-input">
              <input disabled>
            </div>
          </div>
        </div>
   
            

      <!-- <div>
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
      </div> -->

      <!-- <div class="_tal-ct _pd-24px _pdbt-64px">
        <div class="_fw-100 _dp-il">
          Already have an account?
        </div>
        <div class="_dp-il link _fw-600">
          <nuxt-link to="/signin">
          Sign In
          </nuxt-link>
        </div>
      </div> -->
      
    
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
form {
  margin: 10px 50px;
  
}

.link {
  color: #477C89;
}

.field {
  display: flex;
  flex-flow: column-reverse;
  margin-bottom: 20px;
}

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

::-webkit-input-placeholder {
  opacity: 0;
  transition: 'Helvetica';
}

input:focus::-webkit-input-placeholder {
  opacity: 1;
}

input:not(:placeholder-shown) + label,
input:focus + label {
  transform: translate(0, 0) scale(1);
  cursor: pointer;
}

</style>


