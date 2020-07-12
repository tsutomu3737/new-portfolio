<template>
  <div class="favorite">
    <span>Favorite</span>
    <video id="bg-video" src="https://player.vimeo.com/external/357291961.sd.mp4?s=a8b241df4ff1f7bbbbc19eac516163b83f291ea4&profile_id=139&oauth2_token_id=57447761" autoplay loop muted></video>

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
  .favorite span{
    color: #FFF;
    text-align: center;
    font-size: 5rem;
    font-weight: bold;
    width: 100%;
    position: absolute;
    z-index: 1;
  }
</style>
