<template>
  <TheNavigation />
  <router-view/>
</template>

<script>
import TheNavigation from "./components/TheNavigation.vue"
export default {
  components: {
    TheNavigation
  }
}
</script>

<style lang="scss">
*, *::before, *::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  line-height: 1.7
}

#app {
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap');
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #1c2b3a;
}


</style>
