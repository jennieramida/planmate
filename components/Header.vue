<template>
  <div class="top headWidth zhack">
       <!-- Header -->
    <div class="header _pd-12px lo-4 _zid-1 ">
      <div class="_pdl-8px _dp-f _alit-ct" @click="toggleMenu">
        <div class="_cs-pt">
          <img  src="~/assets/hamburgerbtn.png"> 
        </div> 
      </div>

      <div class="menuHack _zid-1" v-if="isMenuActive" >
        <el-menu default-active="2" class="el-menu-vertical-demo">
          
          <nuxt-link to="/">
            <el-menu-item index="1">
                <div class="item-menu" slot="title">
                  Home
                </div>
            </el-menu-item>
          </nuxt-link>

          <nuxt-link to="/create">
            <el-menu-item index="2">
                <div class="item-menu" slot="title">
                  Create Form
                </div>
            </el-menu-item>
          </nuxt-link>

          <nuxt-link to="/soon">
            <el-menu-item index="3">
              <div class="item-menu" slot="title">
                Explore
              </div>
            </el-menu-item>
          </nuxt-link>
          
          <nuxt-link to="/userpage">
            <el-menu-item index="4">
              <div class="item-menu" slot="title">
                My Page
              </div>
            </el-menu-item>
          </nuxt-link>

          <nuxt-link to="/premium">
            <el-menu-item index="5">
              <div class="item-menu" slot="title">
                Go Advance
                </div>
            </el-menu-item>
          </nuxt-link>

          <nuxt-link to="/about">
            <el-menu-item index="6">
              <div class="item-menu" slot="title">
                About Us
              </div>
            </el-menu-item>
          </nuxt-link>

        </el-menu>
      </div>

      <div class="_tal-ct _pdbt-4px">
        <nuxt-link to="/">
          <img class="logohead" src="~/assets/logo.png">
        </nuxt-link>
      </div>
    </div>

    <!-- BreadCrumb -->
    <div class="">
      <div v-if="hasBC" class="BC _pdt-4px _pdt-12px _zid-0">
        <div class="_mgh-8px _pdh-12px">
            <el-breadcrumb separator="/">
             
              <el-breadcrumb-item><a :href="`/userpage`">My Page</a></el-breadcrumb-item>
              <el-breadcrumb-item><a :href="`/create/${$route.params.id}/`">Trip Name</a></el-breadcrumb-item>
              <el-breadcrumb-item><a :href="`/create/${$route.params.id}/travelers`">Travelers</a></el-breadcrumb-item>
              <el-breadcrumb-item><a :href="`/create/${$route.params.id}/destinations`">Destinations</a></el-breadcrumb-item>
              <el-breadcrumb-item><a :href="`/create/${$route.params.id}/getlink`">Get Link</a></el-breadcrumb-item>
              
            </el-breadcrumb> 
        </div>
        <div class="line _pdt-1px _mgt-12px"></div>     
      </div>
      
    </div>

  </div>
</template>

<script>
    export default {
      data () {
        return {
          isMenuActive: false
        }
      },
      props: ['hasBC'],
      methods: {
        toggleMenu () {
          this.isMenuActive = !this.isMenuActive
        }
      }
    }
</script>

<style scoped>
  

  .logohead {
    width: 90%;
  }

  .logomenu {
    width: 60%;
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

  .headWidth {
    width: 450px;
  }

  @media only screen and (max-width: 450px) {
    .headWidth {
      width: 100% !important;
    }
    .header {
      min-width: 10vh;
    }
  }


  .BC {
      background-color: #F8F7F7;
      align-items: center;
  }

  .line {
    background-color: #D1D1D1;
    opacity: 0.5;
    max-width: 100%;
  }

  .thispage {
    color: #69AFC0;
  }

  .pages {
    color: dimgray;
  }

  .menuHack {
    position: fixed;
    top: 66px;
    left: 0px;
  }

  .zhack {
    z-index: 1000 !important;
  }

  .el-menu {
    border-right: solid 1px #e6e6e6;
    border-bottom: solid 1px #e6e6e6;
    list-style: none;
    position: relative;
    margin: 0;
    padding-left: 0;
    background-color: #F8F7F7;
    width: 180px;
    box-shadow: 2px 2px 10px 0 rgba(67, 124, 128, 0.42);
    font-weight: 600;
    }

    .el-menu-item.is-active {
    color: #303133;
    font-weight: 600;
    }

    .el-menu-item:focus, .el-menu-item:hover {
    outline: 0;
    background-color: #B8DCDE;
    }

    .el-menu-item {
        font-size: 17px;
        text-align: left;
    }

    .item-menu {
      margin-bottom: 20px !important;
    }

    .el-breadcrumb {
    font-size: 13px;
    line-height: 1;
    /* font-weight: 300 !important; */
}

    .el-breadcrumb__inner a:hover, .el-breadcrumb__inner.is-link:hover {
    color: #427D81;
    cursor: pointer;
}

 
    .el-breadcrumb__item:last-child .el-breadcrumb__inner, .el-breadcrumb__item:last-child .el-breadcrumb__inner a, {
        font-weight: 800 !important;
        color: #303134;
        cursor: pointer;
    }

    .el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover, .el-breadcrumb__item:last-child .el-breadcrumb__inner:hover {
    color: #427D81;
    font-weight: 600 !important;
    cursor: pointer;
}

  .el-breadcrumb__item:last-child .el-breadcrumb__inner, .el-breadcrumb__item:last-child .el-breadcrumb__inner a,  .el-breadcrumb__item:last-child .el-breadcrumb__inner:hover {
    font-weight: 800;
    color: #303133;
    cursor: pointer;
}


</style>
