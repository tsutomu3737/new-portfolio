<template>
<!-- <transition mode="out-in"> -->
  <div class="contact">
    <video
      id="bg-video"
      src="https://player.vimeo.com/external/422442712.sd.mp4?s=657d7d1599e623cac537e8971911fa6af9a48b21&profile_id=139&oauth2_token_id=57447761"
      poster="contact_bg.png"
      autoplay loop muted>
      <img src="contact_bg.png">
    </video>
    <div class="title">
      <span>Contact</span>
      <p class="distriction">
        お仕事のご依頼、個別相談、その他連絡を取りたい方は、<br>
        以下の公式LINEから、ご連絡ください。
      </p>
      <span class="line">
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

  .contact p{
    color: #FFF;
    text-align: left;
    font-size: 2rem;
    font-weight: bold;
    width: 100%;
    position: absolute;
    margin-top: 6rem;
    z-index: 1;
    margin: 0% 30% 0 30%;
  }

  .title{
    margin-bottom: 8rem;
  }

  .title span{
    margin-top: 3%;
  }

  .line {
    margin-top:7%; 
    margin-left:-50%;
  }

@media screen and (max-width: 1366px){
  .contact p{
    margin: 0% 20% 0 20%;
  }
}

@media screen and (max-width: 1284px){
  .contact p{
    font-size: 1.7rem;
  }

  .contact a{
    margin-top: 17%;
  }
}

@media screen and (max-width: 1024px){
  .title span {
    margin-top: 7%;
  }

  .contact p{
    margin: 3% 5% 0 5%;
    font-size: 1.6rem;
  }

  .contact a{
    margin-top: 25%;
  }

  span{
    margin-top: 7%;
    font-size: 1.6rem;
  }

  span .distriction {
    margin-top: 15%;
  }
}

@media screen and (max-width: 768px){
  .title span {
    margin-top: 7%;
  }

  .distriction {
    margin-top: 20%;
  }

  /* span .line {
    margin-top: 10%; 
  } */

  .contact a{
    margin-top: 30%;
  }
}

@media screen and (max-width: 414px){
  .contact span {
    font-size: 3rem;
  }
  
  .contact p{
    font-size: 0.9rem;
    margin-top: -7%;
    line-height: normal;
  }

  .contact a{
    margin-top: 35%;
  }
}
</style>