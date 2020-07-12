<template>
  <div class="work">
    <span>Work</span>
    <video id="bg-video" src="https://player.vimeo.com/external/422784406.sd.mp4?s=39a517486910290427a23a3efe0aa7d92d485948&profile_id=139&oauth2_token_id=57447761" autoplay loop muted></video>
  </div>
</template>

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
  .work span{
    color: #FFF;    
    text-align: center;
    font-size: 5rem;
    font-weight: bold;
    width: 100%;
    position: absolute;
    z-index: 1;
  }
</style>
