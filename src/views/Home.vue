<template>
  <div class="counter">
    <ol class="breadcrumb">
      <li class="active">Counter</li>
    </ol>
    <button @click='increment' class="btn btn-info">Increment +1</button>
    <h3>Count is {{ count }}</h3>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Counter",
  title() {
    return {
      title: "Counter",
      keywords: "vue-ssr服务端脚手架, counter",
      description: "vue-ssr-template, vue-server-renderer, counter"
    };
  },
  computed: {
    count() {
      return this.$store.state.count;
    }
  },

  methods: {
    ...mapActions(["increment"])
  }
};
</script>


<style>
.globe {
  background: #000000;
  width: 100%;
  height: 100%;
}
</style>
