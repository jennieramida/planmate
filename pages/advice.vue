<template>
  <MyDefaultLayout>
    <Header hasBC="true"></Header>
      <div class="_pdt-128px _tal-ct _cl-black">
        <div class="_fw-800 _fs-2 _pdt-64px">
          Advice
        </div>
        <div class="subtitle _fw-100 _fs-6 _pdt-4px">
          What do you need to know?
        </div>
      </div>

    <!-- Accordion – With Icon -->
      <div class="_pdh-64px _fs-4 _pdt-48px">
      <div class="bio-accordion _pdv-8px">
        <input id="ar1" type="radio" name="ar" class="_dp-n">
        <label for="ar1"><div class="_fs-4 _fw-600 _cl-dark">Basic Etiquette</div></label>
        <div class="bio-accordion-content _tal-l _pdl-48px">
        <div class="_pdt-12px">
            <div class="bio-checkbox">
              <input id="c1" type="checkbox">
              <label for="c1">Checkbox</label>
            </div>
            <div class="bio-checkbox">
              <input id="c2" type="checkbox">
              <label for="c2">Checkbox</label>
            </div>
          </div> 
        </div>
      </div>

      <div class="bio-accordion _pdv-8px">
        <input id="ar2" type="radio" name="ar" class="_dp-n">
        <label for="ar2"><div class="_fs-4 _fw-600 _cl-dark">Currenct Exchange</div></label>
        <div class="bio-accordion-content _tal-l _pdl-48px">
          <div class="_pdt-12px">
            <div class="bio-checkbox">
              <input id="c1" type="checkbox">
              <label for="c1">Checkbox</label>
            </div>
            <div class="bio-checkbox">
              <input id="c2" type="checkbox">
              <label for="c2">Checkbox</label>
            </div>
          </div> 
        </div>
      </div>

      <div class="bio-accordion _pdv-8px">
        <input id="ar3" type="radio" name="ar" class="_dp-n">
        <label for="ar3"><div class="_fs-4 _fw-600 _cl-dark">International Adapter</div></label>
        <div class="bio-accordion-content _tal-l _pdl-48px">
          <div class="_pdt-12px">
            <div class="bio-checkbox">
              <input id="c1" type="checkbox">
              <label for="c1">Checkbox</label>
            </div>
            <div class="bio-checkbox">
              <input id="c2" type="checkbox">
              <label for="c2">Checkbox</label>
            </div>
          </div> 
        </div>
      </div>

      <div class="bio-accordion _pdv-8px">
        <input id="ar4" type="radio" name="ar" class="_dp-n">
        <label for="ar4"><div class="_fs-4 _fw-600 _cl-dark">International Call & Data</div></label>
        <div class="bio-accordion-content _tal-l _pdl-48px">
          <div class="_pdt-12px">
            <div>Item A</div>
            <div>Item B</div>
            <div>Item C</div>
          </div> 
        </div>
      </div>

      <div class="bio-accordion _pdv-8px">
        <input id="ar5" type="radio" name="ar" class="_dp-n">
        <label for="ar5"><div class="_fs-4 _fw-600 _cl-dark">Local Time</div></label>
        <div class="bio-accordion-content _tal-l _pdl-48px">
          <div class="_pdt-12px">
            <div>Item A</div>
            <div>Item B</div>
            <div>Item C</div>
          </div> 
        </div>
      </div>

      <div class="bio-accordion _pdv-8px">
        <input id="ar6" type="radio" name="ar" class="_dp-n">
        <label for="ar6"><div class="_fs-4 _fw-600 _cl-dark">Safety</div></label>
        <div class="bio-accordion-content _tal-l _pdl-48px">
          <div class="_pdt-12px">
            <div>Item A</div>
            <div>Item B</div>
            <div>Item C</div>
          </div> 
        </div>
      </div>

      <div class="bio-accordion _pdv-8px ">
        <input id="ar7" type="radio" name="ar" class="_dp-n">
        <label for="ar7"><div class="_fs-4 _fw-600 _cl-dark">Season & Weather</div></label>
        <div class="bio-accordion-content _tal-l _pdl-48px">
          <div class="_pdt-12px">
            <div>Item A</div>
            <div>Item B</div>
            <div>Item C</div>
          </div> 
        </div>
      </div>

      <div class="bio-accordion _pdv-8px _pdbt-128px">
        <input id="ar8" type="radio" name="ar" class="_dp-n">
        <label for="ar8"><div class="_fs-4 _fw-600 _cl-dark">Transportation</div></label>
        <div class="bio-accordion-content _tal-l _pdl-48px">
          <div class="_pdt-12px">
            <div>Item A</div>
            <div>Item B</div>
            <div>Item C</div>
          </div> 
        </div>
      </div>
    </div>

    <Footer title='Finish this city' link='/Destination'></Footer>
  </MyDefaultLayout>
</template>

<script>
import MyDefaultLayout from '~/layouts/MyDefaultLayout.vue'
import Button from '~/components/MyButton.vue'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'


export default {
  components: {
    MyDefaultLayout,
    Button,
    Header,
    Footer
  }
}
</script>

<style>

form {
  margin: 10px 50px;
  margin-top: 50px;
}
/**
* Make the field a flex-container, reverse the order so label is on top.
*/
 
.form {
  margin: center;
}
.field {
  display: flex;
  flex-flow: column-reverse;
  margin-bottom: 40px;
  width: 300px;
  margin: center;
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
  background-color: none;
}

input:focus {
  outline: 0;
  border-bottom: 1px solid #666;
}

label {

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


