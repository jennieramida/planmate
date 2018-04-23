<template>
  <div class="top _w-100pct">
       <!-- Header -->
    <div class="header _pd-12px lo-4 _zid-1">
      <div class="_dp-f _alit-ct">
        <img src="~/assets/hamburgerbtn.png">  
      </div>
      <div class="_tal-ct _pdbt-4px">
        <nuxt-link to="/">
          <img class="logohead" src="~/assets/logo.png">
        </nuxt-link>
      </div>
    </div>

    <!-- BreadCrumb -->
    <div class=" _pdt-4px _mgt-4px"></div>
    <div v-if="hasBC">
        <div class="BC _pdh-24px _pdv-12px _fs-7 _zid-0" >
          <div class="bio-breadcrumb">
            <div><a class="bio-link pages" href="/userpage">My Page</a></div>
            <div><a class="bio-link thispage" href="/create">Trip Name</a></div>
            <div><a class="bio-link pages" href="/usertravelers">Travelers</a></div>
            <div><a class="bio-link pages" href="/userdestinations">Destination</a></div>
            <div><a class="bio-link pages" href="/usergetlink">Get Link</a></div>
          </div>
        </div>
        <div class="line _pdt-1px">
      </div> 
      
    </div>
    
  </div>
</template>

<script>
    export default {
       props: ['hasBC']
    }
</script>

<style scoped>
  

  .logohead {
    width: 90%;
  }

  .top {
    position: fixed;
    top: 0px;
  }
  
  .header {
    background-color: #F8F7F7;
    box-shadow: 0 1px 6px 0 #D7D7D7;
    min-width: 60vh;
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
