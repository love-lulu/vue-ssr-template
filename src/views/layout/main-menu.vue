<template>
  <nav class="site-navbar" :class="'site-navbar--' + navbarLayoutType">
    <div class="site-navbar__header">
      <h1 class="site-navbar__brand" @click="$router.push({ name: 'home' })">
        <a class="site-navbar__brand-lg" href="javascript:;">vueSSR</a>
      </h1>
    </div>
    <div class="site-navbar__body clearfix">
      <el-menu
        class="site-navbar__menu"
        mode="horizontal">
        <el-menu-item class="site-navbar__switch" index="0" @click="sidebarFold = !sidebarFold">
          <icon-svg name="zhedie"></icon-svg>
        </el-menu-item>
      </el-menu>
    </div>
  </nav>
</template>

<script>
  export default {
    data () {
      return {
        updatePassowrdVisible: false
      }
    },
    computed: {
      sidebarFold: {
        get () {
          return this.$store.state.sidebarFold
          },
        set (val) {
          console.log('val',val)
          this.$store.dispatch('updateSidebarFold', val)
        }
      },
      navbarLayoutType: {
        get () { return  'default' }
      },

    },
    methods: {
      controOpen(){
        var updateSidebarFold = !this.sidebarFold

        this.$store.dispatch('updateSidebarFold', updateSidebarFold )
        // this.$store.dispatch('updateSidebarFold', val===false)

      }
    }
  }
</script>
