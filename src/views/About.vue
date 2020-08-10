<template>
  <div class="about">
    <video id="bg-video" src="https://player.vimeo.com/external/420755992.sd.mp4?s=7aab912a9192ec33786974d0327c6b69478dea2c&profile_id=139&oauth2_token_id=57447761" autoplay loop muted></video>
    <div class="title">
      <span>About</span>
      <img src="./picture/main_photo.jpg">
      <span id="distriction">
        【Profile】<br>
        藏藤 勉(Tsutomu Kurafuji)<br>
        1988年10月17日生まれ 熊本県出身 31歳<br>
        自動車整備士、機械設計、自動車開発を経て、<br>
        2017年4月にITエンジニアへ転身、同年10月にフリーランス<br>
        Ruby,C#などのバックエンドを経験後、<br>
        動きのある実装が好きで2019年11月からフロントエンジニアへ<br><br>
        【主なSkillmap】<br>
        Ruby:9ヶ月<br>
        C#/.NET MVC:1年4ヶ月<br>
        HTML,CSS,JavaScript,jQuery:1年9ヶ月<br>
        Vue.js/TypeScript:4ヶ月<br>
        Bootstrap:1年4ヶ月<br><br>
        【得意業務】<br>
        フロントプログラミング、各種ドキュメント作成<br><br><br>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
  };
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

  .about span{
    color: #fff;
    text-align: center;
    font-size: 5rem;
    font-weight: bold;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 1;
  }

  .about img {
    width: 100%;
    position: absolute;
    z-index: 1;
    padding: 0 40% 0 40%;
  }

  #distriction {
    margin: 28% 16% 0 24%;
    font-size: 2rem;
    text-align: left;
    width: auto;
  }

  .title{
    margin-bottom: 8rem;
  }
  .title span{
    margin-top: 3%;
  }

  @media screen and (max-width: 414px){
    .about img {
      position: absolute;
      z-index: 1;
      padding: 0 30% 0 30%;
      margin-top: -5%;
    }

    #distriction {
      font-size: 1.2rem;
      line-height: 1.4rem;
      padding-top: 70%;
      margin: 0 2% 0 2%;
    }

    .about span {
      margin-top: 7%;
    }

    /* #bg-video {
      position: inherit;
    } */
  }

  @media screen and (max-width: 375px){
    /* .home p {
      height: 252%;
      width: 114%;
    }

    .home span {
      font-size: 2.2rem;
      margin-left: 5%;
    }

    #bg-video {
      width: 114%;
    } */
  }

  @media screen and (max-width: 320px){
    /* .home span {
      font-size: 2.0rem;
    } */
  }  
</style>