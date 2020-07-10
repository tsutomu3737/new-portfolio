<template>
  <div class="contact">
    <span>Contact</span>
    <video id="bg-video" src="https://player.vimeo.com/external/422442712.sd.mp4?s=657d7d1599e623cac537e8971911fa6af9a48b21&profile_id=139&oauth2_token_id=57447761" autoplay loop muted></video>
  </div>
</template>
<style scoped>
.contact {
  text-align: center;
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
  .contact span{
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

</style>