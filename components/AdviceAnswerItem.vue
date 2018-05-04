<template>
  <div class="_pdv-12px">
    <!-- done -->
    <div class="_pdv-12px">
      {{ question }}
    </div>
    <div v-if="answers" class="_cs-pt _pdv-12px _tal-r" @click="isShowingAnswers = !isShowingAnswers">
      {{ answers.length || 0 }} comments
    </div>
    <div v-if="isShowingAnswers" class="_pdv-12px">
      <div class="_pdv-12px" v-for="(a, i) in answers" :key="i">
        {{ answers[i] }}
      </div>
    </div>
    <div class="line _mgt-8px _mgbt-4px"></div>
          
  </div>
</template>




<script>
export default {
  props: ['question', 'answers'],
  data: () => ({
    isShowingAnswers: false,
    adviceAnswers:[]
  })
}
</script>

<style>
.line {
  padding-top: 1px;
  background-color: #69AFC0;
  margin-bottom: 24px;
}
</style>
