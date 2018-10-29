<template>
  <aside class="site-sidebar" :class="'site-sidebar--dark'">
    <div class="site-sidebar__inner">
      <!-- <el-menu
          :default-active="'cc' || 'home'"
          :collapse="false"
          :collapseTransition="true"
          class="site-sidebar__menu">
        <el-menu-item index="home" @click="$router.push({ name: 'home' })">
            <icon-svg name="shouye" class="site-sidebar__menu-icon"></icon-svg>
            <span slot="title">首页</span>
        </el-menu-item>
      </el-menu> -->

      <el-menu
        :default-active="'cc' || 'home'"
        :collapse="sidebarFold"
        :collapseTransition="false"
        class="site-sidebar__menu">
        <el-menu-item index="home" @click="$router.push({ name: '/home' })">
          <icon-svg name="shouye" class="site-sidebar__menu-icon"></icon-svg>
          <span slot="title">首页</span>
        </el-menu-item>
        <!-- <el-submenu index="demo">
          <template slot="title">
            <icon-svg name="shoucang" class="site-sidebar__menu-icon"></icon-svg>
            <span>管理</span>
          </template>
          <el-menu-item index="demo-ueditor" @click="$router.push({ name: 'demo-ueditor' })">
            <icon-svg name="editor" class="site-sidebar__menu-icon"></icon-svg>
            <span slot="title">编写文章</span>
          </el-menu-item>
        </el-submenu> -->
      </el-menu>
    </div>
  </aside>
</template>


<script>
  export default {
    data() {
      return {
        isCollapse: true
      };
    },
    computed: {
      /*
       * 左侧导航栏折叠状态
      */
      sidebarFold: {
        get () {
          return this.$store.state.sidebarFold
        }
      }

    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style>
  .site-sidebar{
    position: fixed;
    top: 50px;
    left: 0;
    bottom: 0;
    z-index: 1020;
    width: 230px;
    overflow: hidden;
  }
</style>
