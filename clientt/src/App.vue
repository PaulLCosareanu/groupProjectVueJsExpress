<template>
  <div id="app">
    <lessonsComponent/>
  </div>
</template>

<script>
import lessonsComponent from './components/lessonsComponent.vue'

export default {
  name: 'App',
  components: {
    lessonsComponent
  },
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
