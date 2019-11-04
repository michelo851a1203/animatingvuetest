<template>
  <div id="app">
    <transitionsample></transitionsample>
  </div>
</template>

<script>
import transitionsample from './components/transitionSample.vue'

export default {
  name: 'app',
  components: {
    transitionsample
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
