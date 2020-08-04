<template>
<!-- <transition mode="out-in"> -->
  <div class="contact">
    <video id="bg-video" src="https://player.vimeo.com/external/422442712.sd.mp4?s=657d7d1599e623cac537e8971911fa6af9a48b21&profile_id=139&oauth2_token_id=57447761" autoplay loop muted></video>
    <div class="title">
      <span>Contact</span>
      <span class="distriction" style="margin-top: 10%;font-size: 2rem">
        お仕事のご依頼、個別相談、その他連絡を取りたい方は、<br>
        以下の公式LINEから、ご連絡ください。
      </span>
      <span style="margin-top:7%; margin-left:-50%;">
        <a href="https://lin.ee/DmmhFaO"><img src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png" alt="友だち追加" height="80" border="0"></a>
      </span>
    </div>
  </div>
<!-- </transition> -->
</template>

<script>
  export default {

  }
</script>

<style scoped>
  #bg-video{
    position: fixed;
    right: 0;
    bottom: 0;
    /* top: 0; */
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    background-size: cover;
  }

  .contact span{
    color: #fff;
    text-align: center;
    font-size: 5rem;
    font-weight: bold;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 1;
  }

  .contact a{
    text-align: center;
    font-weight: bold;
    width: 100%;
    position: absolute;
    margin-top: 10rem;
    z-index: 1;
  }

  .title{
    margin-bottom: 8rem;
  }

  .title span{
    margin-top: 3%;
  }
</style>