<template>
  <div class="home">
    <span>Welcome to mypage</span>
    <p>
      I'm Tsutomu Kurafuji 
      at web system engineer.<br>
      This site was created with Vue.js
    </p>
    <video id="bg-video" src="https://player.vimeo.com/external/391912756.sd.mp4?s=26fc5e1ece3e45714b206ff3d956e0406002dbc2&profile_id=139&oauth2_token_id=57447761" autoplay loop muted></video>
  </div>
</template>

<script>
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
    min-height: 150%;
    width: auto;
    /* height: auto; */
    background-size: cover;
  }

  .home span{
    color: #FFF;
    text-align: center;
    font-size: 5rem;
    font-weight: bold;
    width: 100%;
    position: absolute;
    z-index: 1;
  }

  .home p {
    color: #FFF;
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    width: 100%;
    position: absolute;
    z-index: 1;
    padding-top: 40%;
  }
</style>