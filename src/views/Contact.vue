<template>
  <div class="contact">
    <div class="title">
      <span>Contact</span>
    </div>
    <video id="bg-video" src="https://player.vimeo.com/external/422442712.sd.mp4?s=657d7d1599e623cac537e8971911fa6af9a48b21&profile_id=139&oauth2_token_id=57447761" autoplay loop muted></video>
    <v-card>
      <v-container>
        <h2 style="margin-bottom: 10px;">お問い合わせフォーム</h2>
        <p>
          お仕事のご依頼、個別相談、その他連絡を取りたい方は、<br>
          以下のお問い合わせフォームをご利用ください。
          折り返しご連絡いたします。
        </p>
        <v-form ref="form" v-model="contactFormValidation.valid" lazy-validation>
          <v-text-field
            v-model="contactForm.name"
            :rules="contactFormValidation.nameRules"
            label="名前"
            required
          ></v-text-field>
          <v-text-field
            v-model="contactForm.email"
            :rules="contactFormValidation.emailRules"
            label="メールアドレス or LINEID"
            required
          ></v-text-field>
          <v-textarea
            v-model="contactForm.contents"
            :rules="contactFormValidation.contentsRules"
            label="ご相談内容"
            required
          ></v-textarea>
          <v-btn
            :loading="contactForm.loading"
            :disabled="!contactFormValidation.valid"
            @click="sendMail()"
            block
            large
            color="info"
            class="mt-4 font-weight-bold"
          >送信
          </v-btn>
        </v-form>
      </v-container>
    </v-card>
      <v-snackbar
        v-model="snackBar.show"
        :color="snackBar.color"
        bottom
        right
        :timeout="6000"
        class="font-weight-bold"
      >
        {{snackBar.message}}
      </v-snackbar>
  </div>
</template>

<script>
  import { functions } from '@/plugins/firebase.js'

  export default {
    data: () => ({
      contactForm: {
        name: '',
        contents: '',
        email: '',
        loading: false
      },
      contactFormValidation: {
        valid: false,
        nameRules: [v => !!v || '名前は必須項目です'],
        emailRules: [v => !!v || 'メールアドレス、またはLINEIDは必須項目です'],
        contentsRules: [v => !!v || 'ご相談内容は必須項目です']
      },
      snackBar: {
        show: false,
        color: '',
        message: ''
      }
    }),
    methods: {
      sendMail: function () {
        if (this.$refs.form.validate()) {
          this.contactForm.loading = true
          const mailer = functions.httpsCallable('sendMail')

          mailer(this.contactForm)
            .then(() => {
              this.formReset()
              this.showSnackBar(
                'success',
                'お問い合わせありがとうございます。送信完了しました'
              )
            })
            .catch(err => {
              this.showSnackBar(
                'error',
                '送信に失敗しました。時間をおいて再度お試しください'
              )
              console.log(err)
            })
            .finally(() => {
              this.contactForm.loading = false
            })
        }
      },
      showSnackBar: function (color, message) {
        this.snackBar.message = message
        this.snackBar.color = color
        this.snackBar.show = true
      },
      formReset: function () {
        this.$refs.form.reset()
      }
    }
  }
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

  .title{
    margin-bottom: 10rem;
  }

  .title span{
    margin-top: 3%;
  }
  .container {
    width: 100%;
    height: 50%;
  }

  .theme--light.v-card {
    width: 50%;
    margin: auto;
  }
</style>