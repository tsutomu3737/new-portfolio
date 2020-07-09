<template>
  <div class="home">
    <span>Welcome to mypage</span>
    <video id="bg-video" src="https://player.vimeo.com/external/311357919.hd.mp4?s=82e2b2a233a70085aa8f5392dde7ea4a5d73c88c&profile_id=174" autoplay loop muted></video>
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

  #bg-video{
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    background-size: cover;
  }

  .home span{
    text-align: center;
    font-size: 5rem;
    font-weight: bold;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-image: linear-gradient(45deg, rgba(0,0,0,.3) 50%, rgba(0,0,0,.7) 50%);
    background-size: 3px 3px;
    z-index: 2;
  }
</style>