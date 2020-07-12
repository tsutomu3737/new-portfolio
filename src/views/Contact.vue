<template>
  <div class="contact">
    <span>Contact</span>
    <video id="bg-video" src="https://player.vimeo.com/external/422442712.sd.mp4?s=657d7d1599e623cac537e8971911fa6af9a48b21&profile_id=139&oauth2_token_id=57447761" autoplay loop muted></video>
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
  .contact span{
    color: #FFF;
    text-align: center;
    font-size: 5rem;
    font-weight: bold;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 1;
  }

</style>