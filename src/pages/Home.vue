<template>
  <div class="home">

    <router-view />
    <Bottom />
  </div>
</template>

<script>
import Bottom from '../components/Bottom'
export default {
  name: 'Home',
  components: {Bottom},
  data() {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home {
    top: 0;
  }
</style>
