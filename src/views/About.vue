<template>
  <div class="about">
    <span>about</span>
    <video id="bg-video" src="https://player.vimeo.com/external/420755992.sd.mp4?s=7aab912a9192ec33786974d0327c6b69478dea2c&profile_id=139&oauth2_token_id=57447761" autoplay loop muted></video>

  </div>
</template>
<style scoped>
  .about span{
    color: #FFF;
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
</style>