<template>
  <div class="bio-accordion -has-icon _pdv-8px">
        <input :id="id" type="checkbox" name="ar" class="_dp-n">
        <label :for="id"><div class="_fs-4 _fw-600 _cl-dark">{{ topic }} </div></label>
        <div class="bio-accordion-content _tal-l _pdl-48px">
            <div class="bio-checkbox" v-for="(x, i) in choices" :key="i">
                <input :id="x.id" type="checkbox" @change="selectCheck(x.title)">
                <label :for="x.id"> {{ x.title }}</label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ['topic', 'choices', 'id'],
  methods: {
      selectCheck (title) {
          this.$emit('sendCheckbox', title)
      }
  }
}
</script>

<style scoped>
.bio-checkbox:not(.-switch)>label:before {
    width: 20px;
    height: 20px;
    left: 0px;
    background-color: #fff;
    border: 2px solid #477C89;}

    .bio-checkbox:not(.-switch)>label:after {
    content: none;
    height: 8px;
    width: 15px;
    top: 5px;
    left: 2px;
    border-left-width: 3px;
    border-bottom-width: 3px;
    border-left-style: solid;
    border-bottom-style: solid;
    border-color: #477C89;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
}
</style>
