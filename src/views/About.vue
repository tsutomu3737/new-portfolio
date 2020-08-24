<template>
  <div class="about">
    <video 
      id="bg-video"
      src="https://player.vimeo.com/external/420755992.sd.mp4?s=7aab912a9192ec33786974d0327c6b69478dea2c&profile_id=139&oauth2_token_id=57447761"
      poster="about_bg.png"
      autoplay loop muted>
    </video>
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
    margin: 35% 16% 0 24%;
    font-size: 2rem;
    line-height: 3rem;
    text-align: left;
    width: auto;
  }

  .title{
    margin-bottom: 8rem;
  }
  .title span{
    margin-top: 3%;
  }

  @media screen and (max-width: 1440px){
    #distriction {
      margin: 38% 16% 0 22%;
      font-size: 1.8rem;
    }
  }

  @media screen and (max-width: 1366px){
    #distriction {
      margin: 40% 16% 0 22%;
      font-size: 1.8rem;
    }
  }

  @media screen and (max-width: 1024px){
    #distriction {
      margin: 56% 8% 0 15%;
      font-size: 1.7rem;
    }
    .about img {
      padding: 0 35% 0 35%;
    }
  }

  @media screen and (max-width: 810px){
    #distriction {
      margin: 58% 8% 0 20%;
      font-size: 1.2rem;
      line-height: 2rem;
    }
  }

  @media screen and (max-width: 768px){
    #distriction {
      margin: 53% 7% 0 19%;
    }
    .about img {
      padding: 0 37% 0 37%;
    }    
  }

  @media screen and (max-width: 736px){
    #distriction {
      font-size: 1.1rem;
    }
  }


  @media screen and (max-width: 667px){
    #distriction {
      margin-left: 15%;
    }
  }

  @media screen and (max-width: 568px){
    .title span {
      margin-top: 8%;
    }

    #distriction {
      margin: 65% 2% 0 2%;
    }    
  }   

  @media screen and (max-width: 414px){
    .about img {
      position: absolute;
      padding: 0 30% 0 30%;
      margin-top: -5%;
    }

    #distriction {
      font-size: 0.84rem;
      line-height: 1rem;
      padding-top: 70%;
      margin: 17% 2% 0 2%;
    }

    .about span {
      margin-top: 7%;
      font-size: 3rem;
    }
  }

  @media screen and (max-width: 375px){
    #distriction {
      font-size: 0.76rem;
      margin: 20% 2% 0 2%;
    }
  }

  @media screen and (max-width: 320px){
    .about img {
      padding: 0 32% 0 32%;
      margin-top: -8%;
    }
    #distriction {
      font-size: 0.65rem;
    }
  }  
</style>