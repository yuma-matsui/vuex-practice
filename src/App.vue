<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <counter-plus></counter-plus>
</template>

<script>
import CounterPlus from '@/components/CounterPlus.vue'
export default {
  components: {
    CounterPlus
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
