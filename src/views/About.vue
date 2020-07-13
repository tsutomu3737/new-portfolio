<template>
  <div class="about">
    <span>about</span>
    <img src="./main_photo.jpg">
    <p>
      【Profile】<br>
      藏藤 勉(Tsutomu Kurafuji)<br>
      1988年10月17日生まれ 熊本県出身 31歳<br>
      2009年3月に自動車整備専門学校卒業後、大手二輪販売会社に入社。<br>
      機械系エンジニアとしてキャリアをスタート。<br>
      その後、機械設計や自動車エンジン開発を経て、<br>
      2017年4月にITエンジニアへ転身、同年10月にフリーランス<br>
      Ruby,C#などのバックエンドを経験したが、<br>
      動きのある実装の面白さ、魅力にハマり2019年11月からフロントエンジニアへ<br>
      HTML,CSS,Vue.jsを使った実装が好きです。<br><br>
      【Skillmap】<br>
      C++:6ヶ月<br>
      Ruby:9ヶ月<br>
      C#/.NET Framework MVC:1年4ヶ月<br>
      .NET Core:1ヶ月<br>
      RubyonRails:1ヶ月<br>
      HTML,CSS,JavaScript,jQuery:1年9ヶ月<br>
      Vue.js/TypeScript:4ヶ月<br>
      Bootstrap:1年弱<br><br>
      【得意業務】<br>
      フロントプログラミング、各種ドキュメント作成<br><br>
      【趣味】<br>
      野球観戦(高校、大学、社会人、プロ野球)、草野球<br>
      ゴルフ、旅行(国内,海外)<br>
    </p>
    <video id="bg-video" src="https://player.vimeo.com/external/420755992.sd.mp4?s=7aab912a9192ec33786974d0327c6b69478dea2c&profile_id=139&oauth2_token_id=57447761" autoplay loop muted></video>

  </div>
</template>
<style scoped>
  .about {
    overflow-y: auto;
  }
  .about span{
    color: #FFF;
    text-align: center;
    font-size: 5rem;
    font-weight: bold;
    width: 100%;
    position: absolute;
    z-index: 1;
  }

  .about img {
    width: 100%;
    height: 80%;
    position: absolute;
    z-index: 2;
    padding: 9% 40% 0px 40%;
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


  .about p {
    color: #FFF;
    text-align: left;
    font-size: 1.5rem;
    font-weight: bold;
    width: 100%;
    position: absolute;
    z-index: 1;
    /* padding-top: 39%; */
    padding: 40% 15% 0px 15%;
  }
</style>