<template>
  <v-app class="application">
      <v-container>
      <v-row no-gutters>
        <v-col cols="12">
          <v-form 
              ref="formLogin"
              v-model="validFormLogin"
              lazy-validation
              class="login-form pa-12"
            >
            <h1>Atur Kata Sandi Baru ?</h1>
            <p class="body-1">Silahkan masuk untuk dapat melanjutkan</p>
              <v-row justify="center">
                <v-col cols="10">
                  <v-text-field
                    dense
                    outlined
                    required
                    placeholder="Masukkan NIK"
                    hide-details="auto"
                    label="NIK"
                    v-model="nik"
                  ></v-text-field>
                  <v-text-field
                    dense
                    outlined
                    required
                    placeholder="Masukkan Kata Sandi Baru"
                    hide-details="auto"
                    label="Kata Sandi Baru"
                    v-model="newPassword"
                  ></v-text-field>
                  <v-text-field
                    dense
                    outlined
                    required
                    placeholder="Masukkan Konfirmasi Kata Sandi Baru"
                    hide-details="auto"
                    label="Konfirmasi Kata Sandi Baru"
                    v-model="passwordConfirmation"
                  ></v-text-field>
                  <v-btn
                    @click="aturUlang"
                    large 
                    depressed 
                    block 
                    rounded
                    color="primary" 
                    class="button-1"
                    >Atur Ulang
                    </v-btn>
                </v-col>
              </v-row>
                
            </v-form>
        </v-col>
      </v-row>
      </v-container>
  </v-app>
</template>

<script>
export default {
  data(){
    return {
      value: String,
      validFormLogin: false,
      nik: '',
      newPassword: '',
      passwordConfirmation: '',
    }
  },
  methods: {
      aturUlang(){
          console.log('asd')
      }
  }
}
</script>
<style src="./UbahPassword.scss" lang="scss" scoped/>