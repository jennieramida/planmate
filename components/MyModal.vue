<template>
  <div v-show="isShowing === true">
    <!-- Curtain -->
    <div class="curtain">
    </div>
    <!-- Flexbox -->
    <div class="modal-container">
      <!-- Modal -->
      <div class="modal">
        <!-- Container -->
        <div class="content-container">
          <button @click="dismiss()">x</button>
          <h4>{{ title }}</h4>
          <p>{{ body }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['title', 'body', 'show'],
    computed: {
      isShowing () {
        return this.show
      } 
    }
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
  .modal-container {
    display: flex;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
  .modal {
    background: #fff;
    width: 50%;
    height: 50%;
    border-radius: 8px;
    box-shadow: 0px 4px 20px 2px rgba(0, 0, 0, 0.15);
  }
  .content-container {
    padding: 10px;
    text-align: left;
  }
</style>
