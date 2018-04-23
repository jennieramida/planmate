<template>
  <div class="bio-accordion -has-icon _pdv-8px">
        <input :id="id" type="checkbox" name="ar" class="_dp-n">
        <label :for="id"><div class="_fs-4 _fw-600 _cl-dark">{{ topic }} </div></label>
        <div class="bio-accordion-content _tal-l _pdl-48px">
            <div class="bio-textarea">
                <!-- <input :id="x.id"> -->
                <textarea ref="textArea" @change="sendTextBack()" rows="3" placeholder="What do you want to know?"></textarea>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ['topic', 'id'],
  methods: {
      sendTextBack() {
          this.$emit('sendAdvice', this.$refs.textArea.value)
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
