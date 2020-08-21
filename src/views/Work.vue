<template>
  <div class="work">
    <video id="bg-video" src="https://player.vimeo.com/external/422784406.sd.mp4?s=39a517486910290427a23a3efe0aa7d92d485948&profile_id=139&oauth2_token_id=57447761" autoplay loop muted></video>
    <div class="title">    
      <span>Work</span><br>
      <p>
        主な経験業務の一覧です。（フロントを中心に抜粋）<br><br>
        【占いサイトのフロント改修、サイトリニューアル】<br>
        参画期間：2020/03〜2020/09（現在参画中）<br>
        言語/FW:HTML,CSS,js,jQuery<br>
        ≪担当業務≫<br>
        占いコンテンツのマークアップ改修<br>
        占いサイトのリニューアル対応<br>
        イベント告知用プレスリリース作成<br>
        ≪経験・スキル≫<br>
        HTML,CSS,jsマークアップスキル<br>
        WordPressの環境構築、検証、改修作業経験<br><br>

        【タンクローリー配車システム開発 】<br>
        参画期間：2019/11〜2020/02<br>
        言語/FW:TypeScript/Vue.js<br>
        ≪担当業務≫<br>
        フロントバグ修正、機能追加、システムテスト<br>
        ≪経験・スキル≫<br>
        TypeScript/Vue.jsを用いた実装<br>
        e2eテストのフォロー<br><br>

        【ECサイトマーケティングツール、ECサイト基盤システム開発】<br>
        参画期間：2018/07〜2019/09<br>
        言語/FW:HTML,CSS,js,jQuery,Bootstrap,C#/.NET MVC<br>
        ≪担当業務≫<br>
        ECサイトとSNSを連携するマーケティングツールの改修（設計〜テスト）<br>
        GoogleTagManager連携システム検証<br>
        e2eテストの構築<br>
        ≪経験・スキル≫<br>
        GoogleTagManager、GoogleAnalyticsの使用経験<br>
        UI/UXを考慮した設計や実装<br>
        UI自動テスト(e2e)の経験<br><br>

        【電子カルテの開発】<br>
        参画期間：2017/10〜2018/05<br>
        言語:Ruby,YAML<br>
        ≪担当業務≫<br>
        電子カルテのフロント（YAML）＆バックエンド(Ruby)開発<br>
        ≪経験・スキル≫<br>
        設計からリリースまでの経験<br>
        Rubyコードの読解力<br><br>
          <a href="https://docs.google.com/spreadsheets/d/17jBkkULMTErsMsxv0-FCU7AznU_WI9h4hQptFWqLksU/edit?usp=sharing">スキルシートはこちらです。</a><br><br>
      </p>
    </div>
  </div>
</template>

<style scoped>
  #bg-video{
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    width: auto;
  }
  .work span{
    color: #FFF;    
    text-align: center;
    font-size: 5rem;
    font-weight: bold;
    width: 100%;
    position: absolute;
    z-index: 1;
  }

  .work p{
    color: #FFF;
    text-align: left;
    font-size: 2rem;
    font-weight: bold;
    width: 100%;
    position: absolute;
    margin-top: 6rem;
    z-index: 1;
    margin: 7% 30% 0 30%;
  }

  @media screen and (max-width: 1366px){
    #bg-video {
      min-width: 143%;
    }

    .work span{
      margin-top: 3%;
    }

    .work p{
      margin: 7% 20% 0 20%;
    }
  }

  @media screen and (max-width: 1284px){
    .work p{
      font-size: 1.6rem;
    }
  }

  @media screen and (max-width: 1024px){
    #bg-video {
      min-width: 130%;
    }

    .work span {
      margin-top: 5%;
    }

    .work p{
      margin: 10% 0 0 6%;
      font-size: 1.6rem;
    }
  }

@media screen and (max-width: 812px){
  .work span {
    font-size: 4rem
  }
  
  .work p{
    font-size: 1.2rem;
  }
}

@media screen and (max-width: 768px){
    #bg-video {
      min-width: 243%;
    }
}

@media screen and (max-width: 736px){
  .work p{
    font-size: 1.1rem;
  }
}

@media screen and (max-width: 667px){
  .work p{
    font-size: 1.3rem;
    line-height: 1rem;
  }
}


@media screen and (max-width: 667px){
  .work p{
    font-size: 0.8rem;
  }
}
  @media screen and (max-width: 414px){
    #bg-video {
      min-width: 322%;
    }
    
    .work span {
      font-size: 3rem;
    }
    .work p{
      font-size: 0.6rem;
      line-height: 0.9rem
    }    
  }

  @media screen and (max-width: 375px){

    body {
      overflow-x: hidden;
    }

    #bg-video {
      min-width: 381%;
    }
    
    .work span {
      font-size: 3rem;
    }
    .work p{
      font-size: 0.3rem;
      margin-left: 3%;
    }
  }

  @media screen and (max-width: 320px){
    #bg-video {
      min-width: 321%;
    }
  }  
</style>
