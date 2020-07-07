<template>
  <div class="home">
    <h1>Welcome to mypage</h1>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // About,
  },
  data(){
    return {
      show: true
    }
  }
}
</script>

<style scoped>
.home {
  text-align: center;
  /* font-size: 5rem; */
}
</style>