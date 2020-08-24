<template>
  <div class="favorite">
    <span>Favorite</span><br>
    <video 
      id="bg-video"
      src="https://player.vimeo.com/external/357291961.sd.mp4?s=a8b241df4ff1f7bbbbc19eac516163b83f291ea4&profile_id=139&oauth2_token_id=57447761"
      poster="favorite_bg.png"
      autoplay loop muted>
    </video>
    <p>
      【野球観戦(高校〜プロ野球)】<br>
      2019年はよく神宮に行ってました。<br>
      プロよりもアマチュア野球の方をよく観に行きます<br>
      都市対抗、六大学、明治神宮大会が好きです。<br>
      プロ野球はヤクルトファンですが、<br>
      どの試合でも楽しめると思います笑<br>
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
      今年は9月に開幕予定です！
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
      左から、タイのアユタヤ(18年/10月)、フィリピンのマニラ(19年/7月)、上海(20年/1月)<br>
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
    min-width: 200%;
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

  li {
    list-style: none;
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
    margin-top: 35%;  
  }

  .golf_pic li {
    margin: 49% auto 0 auto;
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

@media screen and (min-width: 1366px){

  .favorite p,
  .favorite span {
    color: #FFF;
  }
  .baseball li {
    width: calc(100%/2);
    margin: 27% auto 0 auto;
  }

  .baseball img {
    height: 12.5%; 
  }

  .favorite p {
    font-size: 1.8rem;
  }

  p.play {
    margin-top: 24%;
  }

  .game li{
    width: calc(100%/2);
    margin: 41% auto 0 auto;
  }

  .game li img {
    width: 45%;
  }

  p.golf {
    margin-top: 38%;  
  }

  .golf_pic li {
    margin: 55% auto 0 auto;
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
    margin: 44% auto 0 auto;
    width: calc(100%/2);
  }

  .travel_pic li img{
    height: 15%;
  }
}

@media screen and (max-width: 1284px){
  .favorite p{
    font-size: 1.2rem;
    margin: 6rem 2% 0 2%;
  }  
  .baseball li {
    width: calc(100%/2);
    margin: 32% auto 0 auto;
  }

  .baseball img {
    height: 12.3%; 
  }

  .favorite p {
    font-size: 1.6rem;
  }

  p.play {
    margin-top: 25%;
  }

  .game li{
    width: calc(100%/2);
    margin: 44% auto 0 auto;
  }

  .game li img {
    width: 45%;
  }

  p.golf {
    margin-top: 37%;  
  }

  .golf_pic li {
    margin: 57% auto 0 auto;
    width: calc(100%/2);
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

@media screen and (max-width: 1024px){
  .baseball li {
    width: calc(100%/2);
    margin: 31% auto 0 auto;
  }

  .baseball img {
    height: 12.3%; 
  }

  .favorite p {
    font-size: 1.4rem;
  }

  p.play {
    margin-top: 30%;
  }

  .game li{
    width: calc(100%/2);
    margin: 48% auto 0 auto;
  }

  .game li img {
    width: 45%
  }

  p.golf {
    margin-top: 38%;  
  }

  .golf_pic li {
    margin: 56% auto 0 auto;
    width: calc(100%/2);
  }

  .golf_pic li img {
    height: 15%;
    width: 45%
  }

  p.travel{
    margin-top: 37%;
  }

  .travel_pic li{
    margin: 60% auto 0 auto;
    width: calc(100%/2);
  }

  .travel_pic li img{
    height: 20%;
  }
}

@media screen and (max-width: 810px){
  .favorite p{
    font-size: 1.2rem;
  }

  .baseball li {
    margin: 35% auto 0 auto;
  }

  .game li{
    margin: 50% auto 0 auto;
  }

  .golf_pic li {
    margin: 58% auto 0 auto;
  }

  .travel_pic li{
    margin: 54% auto 0 auto;
  }
}

@media screen and (max-width: 768px){
  body {
    overflow-x: hidden;
  }
  .baseball li {
    width: calc(100%/2);
    margin: 35% auto 0 auto;
  }

  .baseball img {
    height: 12.3%; 
  }

  .favorite p {
    font-size: 1rem;
  }

  p.play {
    margin-top: 29%;
  }

  .game li{
    width: calc(100%/2);
    margin: 49% auto 0 auto;
  }

  .game li img {
    width: 45%
  }

  p.golf {
    margin-top: 37%;  
  }

  .golf_pic li {
    margin: 57% auto 0 auto;
    width: calc(100%/2);
  }

  .golf_pic li img {
    height: 15%;
    width: 45%
  }

  p.travel{
    margin-top: 35%;
  }

  .travel_pic li{
    margin: 65% auto 0 auto;
    width: calc(100%/2);
  }

  .travel_pic li img{
    height: 15%;
  }
}

@media screen and (max-width: 414px){

  .favorite p{
    margin-top: 3.5rem;
  }

  .favorite span {
    font-size: 3rem;
  }

  .baseball li {
    width: calc(100%/2);
    margin: 53% auto 0 auto;
  }

  .baseball img {
    height: 12.3%; 
  }

  .favorite p {
    font-size: 1rem;
  }

  p.play {
    margin-top: 43%;
  }

  .game li{
    width: calc(100%/2);
    margin: 78% auto 0 auto;
  }

  .game li img {
    width: 45%
  }

  p.golf {
    margin-top: 37%;  
  }

  .golf_pic li {
    margin: 72% auto 0 auto;
    width: calc(100%/2);
  }

  .golf_pic li img {
    height: 15%;
    width: 45%
  }

  p.travel{
    margin-top: 52%;
  }

  .travel_pic li{
    margin: 95% auto 0 auto;
    width: calc(100%/2);
  }

  .travel_pic li img{
    height: 15%;
  }
}

@media screen and (max-width: 375px){
  .baseball li {
    width: calc(100%/2);
    margin: 55% auto 0 auto;
  }

  .baseball img {
    height: 12.3%; 
  }

  .favorite p {
    font-size: 0.9rem;
  }

  p.play {
    margin-top: 40%;
  }

  .game li{
    width: calc(100%/2);
    margin: 78% auto 0 auto;
  }

  .game li img {
    width: 45%
  }

  p.golf {
    margin-top: 37%;  
  }

  .golf_pic li {
    margin: 82% auto 0 auto;
    width: calc(100%/2);
  }

  .golf_pic li img {
    height: 15%;
    width: 45%
  }

  p.travel{
    margin-top: 50%;
  }

  .travel_pic li{
    margin: 95% auto 0 auto;
    width: calc(100%/2);
  }

  .travel_pic li img{
    height: 15%;
  }
}

@media screen and (max-width: 320px){
  .favorite p {
    font-size: 0.8rem;
  }

  .baseball li {
    margin: 60% auto 0 auto;
  }

  .game li{
    margin: 78% auto 0 auto;
  }

  .golf_pic li{
    margin: 75% auto 0 auto;
  }

  .travel_pic li{
    margin: 97% auto 0 auto;
  }  
}
</style>