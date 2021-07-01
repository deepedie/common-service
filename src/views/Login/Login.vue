<template>
  <v-app class="application">
    <v-container class="fill-height" fluid>
      <v-row no-gutters align="center" justify="center">
        <v-col cols="8" class="login-box d-flex align-center justify-center">
          <v-col cols="5" class="align-center text-center">
            <div>
              <h1>Common Service</h1>
            </div>
          </v-col>
          <v-col class="form-box" cols="7">
            <v-form 
              ref="formLogin"
              v-model="validFormLogin"
              lazy-validation
              class="login-form pa-12"
            >
              <v-row>
                <v-col>
                  <v-text-field
                    dense
                    class="white mb-4"
                    outlined
                    required
                    placeholder="NIK"
                    hide-details="auto"
                    prepend-inner-icon="mdi-account"
                  ></v-text-field>
                  <v-text-field
                    dense
                    class="white mb-4"
                    outlined
                    required
                    placeholder="Password"
                    hide-details="auto"
                    prepend-inner-icon="mdi-key"
                    :append-icon="value ?'mdi-eye-off' : 'mdi-eye'"
                    :type="value ? 'password' : 'text'"
                    @click:append="() => (value = !value)"
                  >
                  </v-text-field>
                  <v-checkbox class="mb-2" dark color="white" value="white" dense hide-details="auto">
                    <template v-slot:label>
                      <span id="checkbox-label">Save ID</span>
                    </template>
                  </v-checkbox>
                  <v-btn
                    @click="loginOld"
                    large 
                    depressed 
                    block 
                    color="primary" 
                    class="text-uppercase"
                  >Masuk
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-col>
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
    }
  },
  methods: {
    loginOld(){
      window.localStorage.setItem('authenticated', true);
      this.$router.push('/home');
    },
  }
}
</script>

<style src="./Login.scss" lang="scss" />
