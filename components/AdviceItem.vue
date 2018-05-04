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
        {{ answers }}
      </div>
      <div class="bio-textarea _pdbt-8px">
        <textarea v-model="adviceAnswers[i]" rows="3" placeholder="Give your advice">
        </textarea>
      </div>
      <div class="_tal-ct _pdv-12px _f-r">
        <div class="btn _pdh-12px _cs-pt" @click="receiveAdviceAnswer(i, adviceAnswers[i])">
          Send
        </div>
      </div>
      <div class="line _mgt-8px _mgbt-4px"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['question', 'answers'],
  data: () => ({
    isShowingAnswers: false
  }),
      receiveAdviceAnswer (i, answer) {
      console.log(i) // Art galleries

      const formId = this.$route.params.formId
      const city = this.$route.params.city
      let form = Object.assign({}, this.$store.state.currentForm) // <---
      // ไม่ต้องดักอีกต่อไป ใช้ watch แล้ว efficient กว่ามาก
      if (!form.destinations[city].advices[i].a) {
        // no existing array
        form.destinations[city].advices[i].a = [answer]
      } else {
        form.destinations[city].advices[i].a.push(answer)
      }
      console.log(form.destinations)
      Firebase.updateForm(this.$store.state.UID, formId, {
        destinations: form.destinations
      })
    }
}
</script>

<style>
.line {
  padding-top: 1px;
  background-color: #69AFC0;
  margin-bottom: 24px;
}
</style>
