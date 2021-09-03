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
            <h1>Masuk</h1>
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
                  ></v-text-field>
                  <v-select
                    dense
                    outlined
                    placeholder="Pilih Jabatan"
                    hide-details="auto"
                    label="Jabatan"
                    :items="listJabatan"
                    item-text="namaJabatan"
                    item-value="kodeJabatan"
                  >
                  </v-select>
                  <v-select
                    dense
                    outlined
                    placeholder="Pilih Cabang"
                    hide-details="auto"
                    label="Cabang"
                  >
                  </v-select>
                  <v-text-field
                    dense
                    outlined
                    required
                    placeholder="Masukkan Kata Sandi"
                    hide-details="auto"
                    :append-icon="value ?'mdi-eye-off' : 'mdi-eye'"
                    :type="value ? 'password' : 'text'"
                    @click:append="() => (value = !value)"
                    label="Kata Sandi"
                  >
                  </v-text-field>
                  <p @click="forgotPassword" class="blue--text body-2" style="cursor: pointer">Lupa Kata Sandi</p>
                  <v-btn
                    @click="loginOld"
                    large 
                    depressed 
                    block 
                    rounded
                    color="primary" 
                    class="button-1"
                  >Masuk
                  </v-btn>
                </v-col>
              </v-row>
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
      listJabatan : [
        {
          namaJabatan: 'Bos',
          kodeJabatan: '805'
        },
        {
          namaJabatan: 'Manager',
          kodeJabatan: '001'
        },
        {
          namaJabatan: 'Anggota',
          kodeJabatan: '002'
        },
      ],
    }
  },
  methods: {
    loginOld(){
      window.localStorage.setItem('authenticated', true);
      this.$router.push('/home');
    },
    forgotPassword(){
      this.$router.push('/lupa-password')
    }
  }
}
</script>

<style src="./Login.scss" lang="scss" />
