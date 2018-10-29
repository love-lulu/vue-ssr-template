<template>
<!-- :class="{ 'site-sidebar--fold': sidebarFold }" -->
    <!-- v-loading.fullscreen.lock="loading" -->
  <div
    class="site-wrapper"
    :class="{ 'site-sidebar--fold': sidebarFold }"
    element-loading-text="拼命加载中">
    <!-- <template v-if="!loading"> -->
    <template>
      <main-menu />
      <main-sidebar />
      <div class="site-content__wrapper" :style="{ 'min-height': `${documentClientHeight}px` }">
        <main-content />
      </div>
    </template>
  </div>
</template>

<script>
  import MainMenu from './main-menu'
  import MainSidebar from './main-sidebar'
  import MainContent from './main-content'
  export default {
    data () {
      return {
        loading: true,
      }
    },
    mounted () {
      this.resetDocumentClientHeight()
    },
    methods :{
      resetDocumentClientHeight () {
        this.documentClientHeight = document.documentElement['clientHeight']
        window.onresize = () => {
          this.documentClientHeight = document.documentElement['clientHeight']
        }

      }
    },
    components: {
      MainMenu,
      MainSidebar,
      MainContent
    },
    computed: {
      documentClientHeight: {
        get () {
          return this.$store.state.getClientHeight
        },
        set (val) {
          this.$store.dispatch('updateClientHeight', val)
        }
      },
      sidebarFold: {
        get () {
          return this.$store.state.sidebarFold
         }
      },
    //   userId: {
    //     get () { return this.$store.state.user.id },
    //     set (val) { this.$store.commit('user/updateId', val) }
    //   },
    //   userName: {
    //     get () { return this.$store.state.user.name },
    //     set (val) { this.$store.commit('user/updateName', val) }
    //   }
    },
    created () {
    //   this.getUserInfo()
    },

  }
</script>
<style>
  .site-content__wrapper{
    position: relative;
    margin-left: 230px;
    min-height: 100%;
    background: #f1f4f5;
  }
</style>

