<template>
  <div class="bio-accordion -has-icon _pdv-8px">
        <input :id="id" type="checkbox" name="ar" class="_dp-n">
        <label :for="id"><div class="_fs-4 _fw-600 _cl-dark">{{ topic }} </div></label>
        <div class="bio-accordion-content _tal-l _pdl-48px">
            <div class="bio-checkbox" v-for="(x, i) in choices" :key="i">
                <input :id="x.id" type="checkbox">
                <label :for="x.id"> {{ x.title }}</label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ['topic', 'choices', 'id']
}
</script>

<style scoped>

</style>
