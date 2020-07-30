<template>
  <div class="contact">
    <div class="title">
      <span>Contact</span>
      <p>
        お仕事のご依頼、個別相談、その他連絡を取りたい方は、<br>
        以下の公式LINEから、ご連絡ください。
      </p>
      <a href="https://lin.ee/DmmhFaO"><img src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png" alt="友だち追加" height="80" border="0"></a>
    </div>
    <video id="bg-video" src="https://player.vimeo.com/external/422442712.sd.mp4?s=657d7d1599e623cac537e8971911fa6af9a48b21&profile_id=139&oauth2_token_id=57447761" autoplay loop muted></video>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>

  #bg-video{
    position: fixed;
    bottom: 0;
    min-width: 100%;
    width: auto;
    height: auto;
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

    .contact p{
    color: #FFF;
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    width: 100%;
    position: absolute;
    margin-top: 5rem;
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
  .container {
    width: 100%;
    height: 50%;
  }

  template{
    overflow-y: hidden;
  }
</style>