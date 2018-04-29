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
        <nuxt-link to="userpage">
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

.link {
  color: #477C89;
}

form {
  margin: 10px 50px;
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


