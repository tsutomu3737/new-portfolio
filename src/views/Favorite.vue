<template>
  <div class="favorite">
    <span>Favorite</span><br>
    <video id="bg-video" src="https://player.vimeo.com/external/357291961.sd.mp4?s=a8b241df4ff1f7bbbbc19eac516163b83f291ea4&profile_id=139&oauth2_token_id=57447761" autoplay loop muted></video>
    <p>
      【野球観戦(高校〜プロ野球)】<br>
      2019年はよく神宮に行ってました。<br>
      プロよりもアマチュア野球の方をよく観に行きます<br>
      都市対抗、六大学、明治神宮大会が好きです。<br>
      プロ野球はヤクルトファンですが、どの試合でも楽しめると思います笑<br>
      去年、巨人-マリナーズ戦でイチローを観ることが出来たのは本当に良い思い出です！<br>
    </p>
    <ul class="baseball">
      <li><img src="./picture/daihyosen.png"></li>
      <li><img src="./picture/toshitaiko.png"></li>
      <li class="ichiro" ><img src="./picture/ichiro.png"></li>
    </ul>

    <p class="play">
      【草野球】<br>
      小6〜中2まで硬式野球をやってました。<br>
      2017年にスカウトされ、毎年参戦しています。<br>
      ポジションは外野全般、サード<br>
      今年は、まだ開幕していません😭
    </p>
    <ul class="game">
      <li><img src="./picture/game.jpg"></li>
      <li><img src="./picture/game2.jpg"></li>
    </ul>  
    
    <p class="golf">
      【ゴルフ】<br>
      2020年4月から始めました。<br>
      ベストスコアは127<br>
      月に1〜2回ペースで関東近辺のコースへ行ってます。<br>
      パットとアプローチが課題です。。。<br>
    </p>
    <ul class="golf_pic">
      <li><img src="./picture/numazu.jpg"></li>
      <li><img src="./picture/nighter.jpg"></li>
    </ul>
    
    <p class="travel">
      【国内、海外旅行】<br>
      コロナ前までは毎年1回は海外に行ってました。<br>
      アジア圏ばかりですが、異文化に触れるのは良い刺激になっています。<br>
      左から、タイのアユタヤ(18年/10月)、フィリピンのマニラ(19年/7月)、上海(20年/1月)です。<br>
    </p>
    <ul class="travel_pic">
      <li><img src="./picture/IMG_1178.jpg"></li>
      <li><img src="./picture/IMG_3209.jpeg"></li>
      <li><img src="./picture/kyushogatsu.png"></li>
    </ul>
  </div>
</template>
<style scoped>

  #bg-video {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    background-size: cover;
  }

  .favorite span {
    color: #fff;
    text-align: center;
    font-size: 5rem;
    font-weight: bold;
    width: 100%;
    position: absolute;
    z-index: 1;
  }

  .favorite p {
    color: #FFF;
    text-align: left;
    font-size: 2rem;
    font-weight: bold;
    width: 100%;
    position: absolute;
    margin: 6rem 4% 0 4%;
    z-index: 1;
  }

  ul {
    display: flex;
  }

  .baseball li {
    width: calc(100%/3);
    margin: 8% auto 0 auto;
  }

  p.play {
    margin-top: 33%;
  }

  .game li{
    width: calc(50%/2);
    margin: 43% auto 0 auto;
  }

  p.golf {
    margin-top: 45%;  
  }

  .golf_pic li {
    margin: 45% auto 0 auto;
    width: calc(50%/2);
  }

  p.travel {
    margin-top: 37%;
  }

  .travel_pic li {
    margin: 53% auto 0 auto;
    width: calc(100%/2);
  }

  .favorite img {
    width: 30%;
    position: absolute;
    z-index: 1;
  }

@media screen and (max-width: 1284px){
  .baseball li {
    width: calc(100%/2);
    margin: 36% auto 0 auto;
  }

  .baseball img {
    height: 12.3%; 
  }

  .favorite p {
    font-size: 1.8rem;
  }

  p.play {
    margin-top: 21%;
  }

  .game li{
    width: calc(50%/2);
    margin: 43% auto 0 auto;
  }

  p.golf {
    margin-top: 22%;  
  }

  .golf_pic li {
    margin: 40% auto 0 auto;
    width: calc(50%/2);
  }

  .golf_pic li img {
    height: 15%;
    width: 45%
  }

  p.travel{
    margin-top: 27%;
  }

  .travel_pic li{
    margin: 50% auto 0 auto;
    width: calc(100%/2);
  }

  .travel_pic li img{
    height: 20%;
  }
}

@media screen and (max-width: 1080px){
  .baseball li {
    width: calc(100%/2);
    margin: 31% auto 0 auto;
  }

  .baseball img {
    height: 12.3%; 
  }

  .favorite p {
    font-size: 1.5rem;
  }

  p.play {
    margin-top: 25%;
  }

  .game li{
    width: calc(50%/2);
    margin: 44% auto 0 auto;
  }

  p.golf {
    margin-top: 25%;  
  }

  .golf_pic li {
    margin: 44% auto 0 auto;
    width: calc(50%/2);
  }

  .golf_pic li img {
    height: 15%;
    width: 45%
  }

  p.travel{
    margin-top: 32%;
  }

  .travel_pic li{
    margin: 48% auto 0 auto;
    width: calc(100%/2);
  }

  .travel_pic li img{
    height: 20%;
  }
}

@media screen and (min-width: 1440px){
  .baseball li {
    width: calc(100%/2);
    margin: 31% auto 0 auto;
  }

  .baseball img {
    height: 12.5%; 
  }

  .favorite p {
    font-size: 1.8rem;
  }

  p.play {
    margin-top: 22%;
  }

  .game li{
    width: calc(50%/2);
    margin: 42% auto 0 auto;
  }

  p.golf {
    margin-top: 23%;  
  }

  .golf_pic li {
    margin: 40% auto 0 auto;
    width: calc(100%/2);
  }

  .golf_pic li img {
    height: 15%;
    width: 45%
  }

  p.travel{
    margin-top: 30%;
  }

  .travel_pic li{
    margin: 50% auto 0 auto;
    width: calc(100%/2);
  }

  .travel_pic li img{
    height: 15%;
  }
}

@media screen and (min-width: 1920px){
  .baseball li {
    width: calc(100%/2);
    margin: 22% auto 0 auto;
  }

  .baseball img {
    height: 13.5%; 
  }

  p.play {
    margin-top: 20%;
  }

  .game li{
    width: calc(50%/2);
    margin: 34% auto 0 auto;
  }

  p.golf {
    margin-top: 27%;  
  }

  .golf_pic li {
    margin: 41% auto 0 auto;
    width: calc(50%/2);
  }

  .golf_pic li img {
    height: 15%;
    width: 35%
  }

  p.travel {
    margin-top: 25%;
  }

  .travel_pic li {
    margin: 36% auto 0 auto;
    width: calc(100%/2);
  }

  .travel_pic li img{
    height: 20%;
  }  
}
</style>