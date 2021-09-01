<template>
  <v-app class="application">
      <v-row no-gutters>
        <v-col cols="5" class="primary align-center text-center">
          <div class="logo brand-wrapper d-flex justify-center align-center">
            <v-img
            src="@/assets/logo-adira-png.png"
            aspect-ratio
            max-width="230"
            ></v-img>
          </div>
        </v-col>
        <v-col cols="7">
          <v-form 
              ref="formLogin"
              v-model="validFormLogin"
              lazy-validation
              class="login-form pa-12"
            >
            <h1>Lupa Kata Sandi ?</h1>
            <p class="body-1">Masukkan alamat email adira anda</p>
              <v-row justify="center">
                <v-col cols="10">
                  <v-text-field
                    dense
                    outlined
                    required
                    placeholder="Masukkan Email"
                    hide-details="auto"
                    label="Email"
                    v-model="email"
                    :rules="emailRules"
                  ></v-text-field>
                  <p @click="loginPage" class="blue--text body-2" style="cursor: pointer">Kembali ke halaman Login</p>
                  <v-btn
                    @click="requestPassword"
                    large 
                    depressed 
                    block 
                    rounded
                    color="primary" 
                    class="button-1"
                    >Kirim
                    </v-btn>
                </v-col>
              </v-row>

                  <v-dialog
                    max-width="290px"
                    v-model="dialogKirimEmail"
                    persistent
                    
                    >
                    <v-card >
                        <v-col>
                            <v-card-text class="text-right">
                                <v-icon class="icon" @click="dialogKirimEmail = false">mdi-close</v-icon>
                            </v-card-text>
                            <v-row no-gutters justify="center">
                                <v-img
                                    src="@/assets/checklist.svg"
                                    aspect-ratio
                                    max-width="40px"></v-img>
                                <v-card-text class="text-center body-1">Kami Sudah Mengirimkan email verifikasi ke <b>{{email}}</b></v-card-text>
                                <v-card-text class="cek-inbox text-center" >Cek Inbox Anda untuk mendapatkan instruksi selanjutnya ya!</v-card-text>
                            </v-row>
                        </v-col>
                    </v-card>
                  </v-dialog>
                
            </v-form>
        </v-col>
      </v-row>
  </v-app>
</template>

<script>
export default {
  data(){
    return {
      value: String,
      validFormLogin: false,
      email: '',
      emailRules: [
        (v) => /.+@.+/.test(v) || "Format E-mail harus sesuai",
      ],
      dialogKirimEmail: false,
    }
  },
  methods: {
      loginPage(){
          this.$router.push('/login')
      },
      requestPassword(){
          console.log("PASSWORD REQUESTED")
          this.dialogKirimEmail = true
      }
  }
}
</script>
<style src="./LupaPassword.scss" lang="scss" scoped/>