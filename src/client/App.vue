<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        bottomNav: '/home'
      }
    },
    methods: {
      // handleChange(val) {
      //   this.bottomNav = val
      //   this.$router.push(val);
      // }
    }
  }
</script>

<style>
  #footer {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>
