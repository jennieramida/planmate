<template>
  <div class="footWidth foot">
       <!-- Footer -->
    <div class="footer _pdv-24px lo-6 _zid-1">
      <div class="_tal-l _pdl-24px _pdbt-4px">
        <a href="javascript: history.back()" v-if="backMode !== 'backToFriendPage'">
          <BackButton :back="back"/>
        </a>
        <!-- Special case -->
        <nuxt-link :to='`/a/${$route.params.id}/destinations`'
        v-if="backMode === 'backToFriendPage'">
          <BackButton :back="back"/>
        </nuxt-link>
      </div>


      <div class="_tal-r _pdr-24px _pdbt-4px">
        <nuxt-link :to="link">
         <Button :title="title"/>
        </nuxt-link>
      </div>
    </div>

  </div>
</template>

<script>
import Button from '~/components/MyButton.vue'
import BackButton from '~/components/MyGreyButton.vue'

export default {
    props: ['link','title','back','link2', 'backMode', 'p-data'],
    components: {
    Button,
    BackButton
    }
}
</script>

<style scoped>

.foot {
    position: fixed;
    bottom: 0px;
    width: 100%;
    background-color: #F8F7F7;
    box-shadow: 0 1px 6px 0 #D7D7D7;
}
  .logohead {
    width: 90%;
  }



  .footWidth {
    width: 450px;
  }

  @media only screen and (max-width: 450px) {
    .footWidth {
      width: 100% !important;
    }
    .footer {
      min-width: 10vh;
    }
  }

    .BC {
        background-color: #F8F7F7;
        align-items: center;
    }

    .line {
      background-color: #D1D1D1;
      max-width: 100%;
    }

    .thispage {
      color: #69AFC0;
    }

    .pages {
      color: dimgray;
    }
</style>
