<template>
  <main class="site-content" :class="{ 'site-content--tabs': $route.meta.isTab }">
    <!-- 主入口标签页 e -->
     <el-card  :body-style="siteContentViewHeight">
      <keep-alive>
        <router-view />
      </keep-alive>
    </el-card>
  </main>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    computed: {
      documentClientHeight: {
        get () {
          return this.$store.state.getClientHeight
        }
      },
      siteContentViewHeight () {
        var height = this.documentClientHeight  - 80;
        return { minHeight: height + 'px' }
      }
    },
  }
</script>



<style>
  .site-content{
    position: relative;
    padding: 15px;
  }
</style>
